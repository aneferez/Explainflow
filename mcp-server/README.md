# ExplainFlow MCP Server

This folder contains the public, stateless MCP runtime for ExplainFlow.

## Runtime routing policy

ExplainFlow now uses an explicit two-path policy:

- If the user names a supported format or slash command, use that exact format through `explainflow_explain`.
- If the user invokes ExplainFlow without naming a format, use `explainflow_auto`, which chooses the best format automatically from the topic and goal and returns the complete rendering contract.

The 45 behavioral evaluation cases are QA only. They are never executed as part of a normal user request.

## What it exposes

The server provides four read-only tools:

- `explainflow_explain` — returns the rendering contract for one of ExplainFlow's 30 explicitly selected formats.
- `explainflow_auto` — automatically selects the best format and returns the rendering contract when no format is specified.
- `explainflow_recommend_format` — returns only a format recommendation for inspection or planning.
- `explainflow_list_formats` — lists all supported formats and their purpose.

The server stores no user data and requires no external AI API key. The connected assistant remains responsible for producing the final user-facing explanation from the returned rendering contract.

## Public endpoint

Current deployment:

- MCP: `https://explainflow-mcp.aneruth-medloop.workers.dev/mcp`
- Health: `https://explainflow-mcp.aneruth-medloop.workers.dev/health`

## Endpoints

- `/mcp` — primary MCP endpoint.
- `/sse` — compatibility alias routed to the same MCP handler.
- `/health` — JSON health response.
- `/` — service metadata.

## Local development

Requirements:

- Node.js 20+
- npm

```bash
cd mcp-server
npm install
npm run typecheck
npm run dev
```

Wrangler will print a local Worker URL. Use its `/mcp` path as the MCP endpoint.

## Deploy to Cloudflare Workers

Authenticate Wrangler:

```bash
npx wrangler login --device
```

Then deploy:

```bash
npm run deploy
```

Use **No authentication** for the public stateless deployment unless the target product requires another mode.

## Privacy and security model

- No database.
- No cookies.
- No user accounts.
- No API keys required by the server.
- No user input is intentionally persisted.
- Tools are declared read-only, idempotent, non-destructive, and closed-world.
- User-provided source text is returned only inside the current tool result contract and is not stored by the application.

See the repository-level `PRIVACY.md` and `TERMS.md` for public policy text.

## Public directory readiness

Before requesting a stable public listing:

1. Deploy the latest Worker revision.
2. Confirm `/health` returns `status: ok` and version `0.2.0` or later.
3. Refresh/reconnect the ChatGPT custom app so all four tools are discovered.
4. Verify explicit-format routing and automatic routing.
5. Run the ExplainFlow smoke tests.
6. Run the 45-case behavioral suite.
7. Add real outputs/screenshots to the repository.
8. Resolve blocker/high-severity failures.
9. Submit the app through OpenAI's app publication flow for Plugin Directory review.
