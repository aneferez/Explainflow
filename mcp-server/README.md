# ExplainFlow MCP Server

This folder contains the public, stateless MCP runtime for ExplainFlow.

## What it exposes

The server provides three read-only tools:

- `explainflow_explain` — returns the rendering contract for one of ExplainFlow's 30 formats.
- `explainflow_recommend_format` — chooses the best format when the user has not selected one.
- `explainflow_list_formats` — lists all supported formats and their purpose.

The server stores no user data and requires no external AI API key. The connected assistant remains responsible for producing the final user-facing explanation from the returned rendering contract.

## Endpoints

After deployment:

- `/mcp` — primary MCP endpoint.
- `/sse` — compatibility alias routed to the same MCP handler.
- `/health` — simple JSON health response.
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

Wrangler will return the deployed Worker URL. The ChatGPT custom app/plugin connection URL should be:

```text
https://<your-worker-host>/mcp
```

Use **No authentication** for the initial public stateless deployment. If the product UI requires another authentication mode during testing, stop and review the requirement before adding credentials.

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

1. Deploy the Worker.
2. Confirm `/health` returns `status: ok`.
3. Add the deployed `/mcp` URL as a custom app/plugin in ChatGPT.
4. Verify all three tools are discovered.
5. Run the ExplainFlow smoke tests.
6. Run the 45-case behavioral suite.
7. Add real outputs/screenshots to the repository.
8. Resolve blocker/high-severity failures.
9. Submit the app/plugin through the supported OpenAI review flow available to the account.
