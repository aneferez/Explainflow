# ExplainFlow

**Public beta: `0.9.0-public-beta`**

ExplainFlow is an open-source Agent Skill, plugin package, and MCP-backed runtime for turning topics into visual and highly structured explanations.

## What it does

ExplainFlow routes a topic into the format best suited to learning, revision, comparison, process explanation, architecture understanding, or presentation.

It currently documents **30 slash commands**:

`/visualnotes` · `/stickynotes` · `/mindmap` · `/infographic` · `/flowchart` · `/diagram` · `/architecture` · `/timeline` · `/roadmap` · `/cheatsheet` · `/conceptmap` · `/tree` · `/pipeline` · `/workflow` · `/funnel` · `/layers` · `/flashcards` · `/comparison` · `/quiz` · `/eli10` · `/beginner` · `/expert` · `/teacher` · `/mentor` · `/stepbystep` · `/keypoints` · `/summary` · `/examples` · `/crashcourse` · `/deepdive`

See [`references/COMMANDS.md`](references/COMMANDS.md) for routing details.

## Automatic routing

ExplainFlow now follows a simple runtime policy:

- **Format specified:** the requested format is used exactly.
- **No format specified:** ExplainFlow automatically chooses the best format from the user's topic and goal.

The **45 behavioral evaluation cases are QA only** and are never run as part of a normal user request.

## Public access

ExplainFlow is public under the MIT License.

There are three distribution surfaces:

1. **ChatGPT Skill** — download the repository ZIP and upload it from the Skills interface where Skill upload is supported. The canonical entry point is the root [`SKILL.md`](SKILL.md).
2. **Plugin package** — the repository includes [`.codex-plugin/plugin.json`](.codex-plugin/plugin.json) and a bundled Skill under [`skills/explainflow/`](skills/explainflow/).
3. **Public MCP runtime** — the deployed endpoint is `https://explainflow-mcp.aneruth-medloop.workers.dev/mcp`.

A globally searchable Plugin Directory listing is separate from making the repository and runtime public. ExplainFlow is ready for submission, but the listing is not active until OpenAI reviews and approves it.

See [`PUBLIC_DISTRIBUTION.md`](PUBLIC_DISTRIBUTION.md) for distribution status and [`PUBLIC_TESTING.md`](PUBLIC_TESTING.md) for the beta test procedure.

## MCP runtime

The MCP server exposes four read-only tools:

- `explainflow_explain` — routes a topic into an explicitly selected ExplainFlow format.
- `explainflow_auto` — automatically selects the best format when the user does not name one.
- `explainflow_recommend_format` — returns only a format recommendation for planning/inspection.
- `explainflow_list_formats` — returns all supported formats and their purpose.

The runtime is stateless, requires no external AI API key, and stores no user accounts or application database.

Public endpoints:

- MCP: `https://explainflow-mcp.aneruth-medloop.workers.dev/mcp`
- Health: `https://explainflow-mcp.aneruth-medloop.workers.dev/health`

See [`mcp-server/README.md`](mcp-server/README.md) for deployment details.

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

Use this Server URL:

```text
https://explainflow-mcp.aneruth-medloop.workers.dev/mcp
```

The current runtime is public and no-auth.

## Usage

Explicit format:

```text
@ExplainFlow /flowchart Explain how OAuth login works.
```

Automatic format selection:

```text
@ExplainFlow Explain how OAuth login works.
```

ExplainFlow will choose the format it determines is most suitable for the second request.

## Evaluation

ExplainFlow includes **45 behavioral cases** covering all 30 commands, multi-command routing, command precedence, missing inputs, unknown commands, source-grounding behavior, image requests, and large/complex outputs.

See [`evals/cases.md`](evals/cases.md) and [`evals/README.md`](evals/README.md).

GitHub Actions validate both the Skill/package structure and the MCP TypeScript runtime.

## Current status

**Public beta — `0.9.0-public-beta`.**

Public source: **ready**.

Public MCP runtime: **deployed**.

ChatGPT custom plugin connection: **tested successfully**.

Stable `v1.0.0`: pending full behavioral QA and final release verification.

Public Plugin Directory listing: **submission/approval pending**.

## Privacy and terms

- [`PRIVACY.md`](PRIVACY.md)
- [`TERMS.md`](TERMS.md)

## Contributing

Contributions and beta feedback are welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT
