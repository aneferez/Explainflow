# ExplainFlow

**Public beta: `0.9.0-public-beta`**

ExplainFlow is an open-source Agent Skill, plugin package, and MCP-backed runtime for turning topics into visual and highly structured explanations.

## What it does

ExplainFlow routes a topic into the format best suited to learning, revision, comparison, process explanation, architecture understanding, or presentation.

It currently documents **30 slash commands**:

`/visualnotes` · `/stickynotes` · `/mindmap` · `/infographic` · `/flowchart` · `/diagram` · `/architecture` · `/timeline` · `/roadmap` · `/cheatsheet` · `/conceptmap` · `/tree` · `/pipeline` · `/workflow` · `/funnel` · `/layers` · `/flashcards` · `/comparison` · `/quiz` · `/eli10` · `/beginner` · `/expert` · `/teacher` · `/mentor` · `/stepbystep` · `/keypoints` · `/summary` · `/examples` · `/crashcourse` · `/deepdive`

See [`references/COMMANDS.md`](references/COMMANDS.md) for routing details.

## Public access

ExplainFlow is public under the MIT License.

There are three distribution surfaces:

1. **ChatGPT Skill** — download the repository ZIP and upload it from the Skills interface where Skill upload is supported. The canonical entry point is the root [`SKILL.md`](SKILL.md).
2. **Plugin package** — the repository includes [`.codex-plugin/plugin.json`](.codex-plugin/plugin.json) and a bundled Skill under [`skills/explainflow/`](skills/explainflow/) following the plugin packaging convention.
3. **MCP runtime** — [`mcp-server/`](mcp-server/) contains a stateless public MCP server designed for deployment to Cloudflare Workers and connection through ChatGPT's custom app/plugin Server URL field.

A globally searchable Plugin Directory listing is separate from making the repository public. ExplainFlow is being prepared for that review path, but it is not considered directory-listed until OpenAI approves and publishes it.

See [`PUBLIC_DISTRIBUTION.md`](PUBLIC_DISTRIBUTION.md) for distribution status and [`PUBLIC_TESTING.md`](PUBLIC_TESTING.md) for the beta test procedure.

## MCP runtime

The MCP server exposes three read-only tools:

- `explainflow_explain` — routes a topic into one of the 30 ExplainFlow formats and returns the rendering contract for the assistant.
- `explainflow_recommend_format` — chooses a format from the user's goal when no slash command was selected.
- `explainflow_list_formats` — returns all supported formats and their purpose.

The runtime is intentionally stateless and does not require an external AI API key. It stores no user accounts or application database. See [`mcp-server/README.md`](mcp-server/README.md) for deployment instructions.

## Repository structure

```text
explainflow/
├── .codex-plugin/
│   └── plugin.json
├── skills/
│   └── explainflow/
│       ├── SKILL.md
│       └── references/
├── mcp-server/
│   ├── src/
│   │   ├── index.ts
│   │   └── formats.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── wrangler.jsonc
│   └── README.md
├── SKILL.md
├── README.md
├── PRIVACY.md
├── TERMS.md
├── PUBLIC_DISTRIBUTION.md
├── PUBLIC_TESTING.md
├── VERSION
├── CHANGELOG.md
├── RELEASE_CHECKLIST.md
├── LICENSE
├── CONTRIBUTING.md
├── references/
├── examples/
├── evals/
├── releases/
└── .github/workflows/
```

## Installation

### ChatGPT Skill

Download the repository ZIP and upload it in the ChatGPT Skills interface where Skill upload is enabled.

### Plugin-capable Codex environments

Use the repository as a plugin bundle. Its manifest is `.codex-plugin/plugin.json` and its Skill path is `./skills/`.

### ChatGPT custom MCP app/plugin

Deploy the Worker in [`mcp-server/`](mcp-server/) and use the deployed `/mcp` endpoint as the Server URL in the custom plugin/app connection screen. The initial runtime is designed for no-auth public testing.

## Usage

```text
/flowchart Explain how OAuth login works.
```

```text
/mindmap React state management
```

```text
/architecture React frontend, FastAPI backend, PostgreSQL, Redis
```

```text
/summary /flowchart Explain JWT authentication
```

When commands conflict, ExplainFlow prioritizes the first command and uses later commands only when they remain compatible.

## Evaluation

ExplainFlow includes **45 behavioral cases** covering all 30 commands, multi-command routing, command precedence, missing inputs, unknown commands, source-grounding behavior, image requests, and large/complex outputs.

See [`evals/cases.md`](evals/cases.md) and [`evals/README.md`](evals/README.md).

GitHub Actions validate both the Skill/package structure and the MCP TypeScript runtime.

## Current status

**Public beta — `0.9.0-public-beta`.**

Public source and installable Skill/package: **ready**.

MCP server implementation: **ready for deployment/testing**.

Stable `v1.0.0`: pending real-runtime behavioral QA, real output examples/screenshots, and final release verification.

Public Plugin Directory listing: **submission/approval pending**.

## Privacy and terms

- [`PRIVACY.md`](PRIVACY.md)
- [`TERMS.md`](TERMS.md)

## Contributing

Contributions and beta feedback are welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT
