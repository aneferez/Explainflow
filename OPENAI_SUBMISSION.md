# ExplainFlow OpenAI Submission

Use this document when submitting ExplainFlow for public review.

## App identity

- Name: `ExplainFlow`
- Category: Education / Productivity
- Short description: `Turn any topic into mind maps, flowcharts, diagrams, cheat sheets, timelines, workflows, comparisons, and structured explanations.`
- Developer: `AneFerez`
- Website: `https://github.com/aneferez/Explainflow`
- Support: `https://github.com/aneferez/Explainflow/issues`

## MCP connection

- Server URL: `https://explainflow-mcp.aneruth-medloop.workers.dev/mcp`
- Authentication: None
- Runtime: Cloudflare Workers
- Data model: Stateless
- External AI API key: Not required

## Public policies

- Privacy policy: `https://github.com/aneferez/Explainflow/blob/main/PRIVACY.md`
- Terms of service: `https://github.com/aneferez/Explainflow/blob/main/TERMS.md`
- License: MIT

## Tools

ExplainFlow exposes four read-only MCP tools:

1. `explainflow_explain` — use an explicitly requested ExplainFlow format.
2. `explainflow_auto` — automatically choose the best ExplainFlow format when the user does not specify one.
3. `explainflow_recommend_format` — return a format recommendation for planning/inspection.
4. `explainflow_list_formats` — list supported formats and purposes.

All tools are read-only, non-destructive, and idempotent.

## Routing behavior

- Explicit format: honor the exact supported format selected by the user.
- No format specified: automatically select the most suitable format through `explainflow_auto`.
- The 45 behavioral evaluation cases are QA only and are never executed during a normal user request.

## Suggested review prompts

```text
@ExplainFlow /mindmap React state management
```

```text
@ExplainFlow Explain how OAuth login works
```

```text
@ExplainFlow /architecture React frontend, FastAPI backend, PostgreSQL, Redis
```

```text
@ExplainFlow /cheatsheet Git basics
```

```text
@ExplainFlow /summary /flowchart JWT authentication
```

## Review notes

ExplainFlow does not require user accounts, OAuth, a database, or an external model API. It returns rendering contracts that the connected ChatGPT model uses to produce the final explanation. User-provided source text is not intentionally persisted by the ExplainFlow runtime.

## Publication status

Public GitHub source: ready.

Public MCP runtime: deployed.

Custom ChatGPT connection: tested.

Plugin Directory listing: pending OpenAI submission/review/approval.
