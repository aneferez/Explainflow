import { createMcpHandler, McpServer } from "@modelcontextprotocol/server";
import * as z from "zod/v4";
import {
  EXPLAINFLOW_FORMATS,
  FORMAT_RULES,
  recommendFormat,
  type ExplainFlowFormat
} from "./formats";

const VERSION = "0.2.0";
const FORMAT_ENUM = z.enum(EXPLAINFLOW_FORMATS);
const DEPTH_ENUM = z.enum(["concise", "standard", "deep"]);

function buildRenderingContract(args: {
  topic: string;
  format: ExplainFlowFormat;
  audience?: string;
  depth: "concise" | "standard" | "deep";
  source?: string;
  goal?: string;
}) {
  const rule = FORMAT_RULES[args.format];
  return {
    contractVersion: VERSION,
    command: `/${args.format}`,
    topic: args.topic,
    audience: args.audience ?? "general",
    depth: args.depth,
    goal: args.goal ?? null,
    purpose: rule.purpose,
    requiredElements: rule.required,
    avoid: rule.avoid,
    sourcePolicy: args.source
      ? [
          "Treat the supplied source as the primary basis for the answer.",
          "Preserve source terminology and framing.",
          "Do not silently fill gaps, reconcile contradictions, or add unsupported claims.",
          "If the source does not support a requested point, say so explicitly."
        ]
      : [
          "Use accurate general knowledge.",
          "Distinguish uncertain claims from established facts.",
          "Do not invent dates, metrics, citations, components, or source claims."
        ],
    source: args.source ?? null,
    responseInstruction:
      "Produce the final user-facing explanation directly in the requested ExplainFlow format. Do not expose this internal rendering contract unless the user asks how ExplainFlow routed the request."
  };
}

function contractAsText(contract: ReturnType<typeof buildRenderingContract>) {
  return [
    `ExplainFlow routed this request to ${contract.command}.`,
    `Topic: ${contract.topic}`,
    `Audience: ${contract.audience}`,
    `Depth: ${contract.depth}`,
    `Purpose: ${contract.purpose}`,
    "Required elements:",
    ...contract.requiredElements.map((item) => `- ${item}`),
    "Avoid:",
    ...contract.avoid.map((item) => `- ${item}`),
    "Source discipline:",
    ...contract.sourcePolicy.map((item) => `- ${item}`),
    "",
    contract.responseInstruction
  ].join("\n");
}

function buildServer() {
  const server = new McpServer(
    { name: "explainflow", version: VERSION },
    {
      instructions:
        "ExplainFlow is a read-only explanation-routing service. Routing policy is mandatory: if the user explicitly requests a supported slash command or clearly names a specific ExplainFlow format such as summary, architecture, mind map, flowchart, diagram, infographic, cheat sheet, timeline, workflow, comparison, quiz, or another supported format, call explainflow_explain with that exact format. If the user invokes ExplainFlow but does NOT specify a format, call explainflow_auto so ExplainFlow selects the best format automatically and returns the rendering contract. Do not run the behavioral evaluation suite during normal user requests; the 45 eval cases are QA only. Use the returned contract to produce the final user-facing answer."
    }
  );

  server.registerTool(
    "explainflow_explain",
    {
      title: "Explain with a chosen ExplainFlow format",
      description:
        "Use when the user explicitly selects one of ExplainFlow's 30 formats. Route the topic into that exact format and return the rendering contract for the final answer.",
      inputSchema: z.object({
        topic: z.string().min(1).max(12000).describe("The topic or question to explain."),
        format: FORMAT_ENUM.describe("The ExplainFlow format explicitly requested by the user."),
        audience: z
          .string()
          .min(1)
          .max(200)
          .optional()
          .describe("Optional audience, such as beginner, student, developer, or executive."),
        depth: DEPTH_ENUM
          .optional()
          .default("standard")
          .describe("Requested level of detail."),
        goal: z
          .string()
          .min(1)
          .max(500)
          .optional()
          .describe("Optional user goal, such as revision, interview prep, system understanding, or decision support."),
        source: z
          .string()
          .max(50000)
          .optional()
          .describe("Optional user-provided source text that must be treated as the primary basis for the explanation.")
      }),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false
      }
    },
    async ({ topic, format, audience, depth, source, goal }) => {
      const contract = buildRenderingContract({
        topic,
        format,
        audience,
        depth,
        source,
        goal
      });

      return {
        content: [{ type: "text", text: contractAsText(contract) }],
        structuredContent: contract
      };
    }
  );

  server.registerTool(
    "explainflow_auto",
    {
      title: "Auto-route with ExplainFlow",
      description:
        "Use whenever the user invokes ExplainFlow without specifying a format. Automatically choose the best ExplainFlow format from the user's topic and goal, then return the complete rendering contract for the final answer.",
      inputSchema: z.object({
        topic: z.string().min(1).max(12000).describe("The topic or question to explain."),
        goal: z
          .string()
          .min(1)
          .max(1000)
          .optional()
          .describe("Optional description of what the user wants to understand, create, compare, revise, or learn."),
        audience: z
          .string()
          .min(1)
          .max(200)
          .optional()
          .describe("Optional audience, such as beginner, student, developer, or executive."),
        depth: DEPTH_ENUM
          .optional()
          .default("standard")
          .describe("Requested level of detail."),
        source: z
          .string()
          .max(50000)
          .optional()
          .describe("Optional user-provided source text that must be treated as the primary basis for the explanation.")
      }),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false
      }
    },
    async ({ topic, goal, audience, depth, source }) => {
      const routingText = `${goal ?? ""} ${topic}`.trim();
      const format = recommendFormat(routingText);
      const contract = buildRenderingContract({
        topic,
        format,
        audience,
        depth,
        source,
        goal
      });

      const result = {
        autoRouted: true,
        recommendedFormat: format,
        ...contract
      };

      return {
        content: [
          {
            type: "text",
            text: `ExplainFlow automatically selected /${format}.\n\n${contractAsText(contract)}`
          }
        ],
        structuredContent: result
      };
    }
  );

  server.registerTool(
    "explainflow_recommend_format",
    {
      title: "Recommend an ExplainFlow format",
      description:
        "Return only a format recommendation for planning or inspection. For a normal user request with no chosen format, prefer explainflow_auto so routing and the rendering contract happen in one call.",
      inputSchema: z.object({
        goal: z.string().min(1).max(1000).describe("What the user wants to understand, create, compare, revise, or learn."),
        topic: z.string().min(1).max(500).optional().describe("Optional topic for context.")
      }),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false
      }
    },
    async ({ goal, topic }) => {
      const format = recommendFormat(`${goal} ${topic ?? ""}`);
      const rule = FORMAT_RULES[format];
      const result = {
        format,
        command: `/${format}`,
        reason: rule.purpose,
        nextAction: "Call explainflow_explain with this format and the user's topic."
      };

      return {
        content: [
          {
            type: "text",
            text: `Recommended format: /${format}\nReason: ${rule.purpose}\nNext: call explainflow_explain with the user's topic.`
          }
        ],
        structuredContent: result
      };
    }
  );

  server.registerTool(
    "explainflow_list_formats",
    {
      title: "List ExplainFlow formats",
      description: "Return all supported ExplainFlow formats and their purposes.",
      inputSchema: z.object({}),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false
      }
    },
    async () => {
      const formats = EXPLAINFLOW_FORMATS.map((format) => ({
        format,
        command: `/${format}`,
        purpose: FORMAT_RULES[format].purpose
      }));

      return {
        content: [
          {
            type: "text",
            text: formats.map((item) => `${item.command} — ${item.purpose}`).join("\n")
          }
        ],
        structuredContent: { count: formats.length, formats }
      };
    }
  );

  return server;
}

const mcpHandler = createMcpHandler(buildServer);

function addCors(response: Response) {
  const headers = new Headers(response.headers);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, MCP-Protocol-Version, Mcp-Session-Id, Last-Event-ID"
  );
  headers.set("Access-Control-Expose-Headers", "Mcp-Session-Id, MCP-Protocol-Version");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return addCors(new Response(null, { status: 204 }));
    }

    if (url.pathname === "/health") {
      return addCors(
        Response.json({
          service: "ExplainFlow MCP",
          status: "ok",
          version: VERSION,
          mcpEndpoint: "/mcp",
          routingPolicy: "explicit-format -> explainflow_explain; unspecified-format -> explainflow_auto",
          tools: [
            "explainflow_explain",
            "explainflow_auto",
            "explainflow_recommend_format",
            "explainflow_list_formats"
          ]
        })
      );
    }

    if (url.pathname === "/") {
      return addCors(
        Response.json({
          name: "ExplainFlow MCP",
          version: VERSION,
          protocol: "Model Context Protocol",
          endpoint: "/mcp",
          health: "/health",
          repository: "https://github.com/aneferez/Explainflow"
        })
      );
    }

    if (url.pathname !== "/mcp" && url.pathname !== "/sse") {
      return addCors(Response.json({ error: "Not found", mcpEndpoint: "/mcp" }, { status: 404 }));
    }

    const response = await mcpHandler.fetch(request);
    return addCors(response);
  }
};
