# ExplainFlow Public Distribution

ExplainFlow is designed for public use across ChatGPT Skill uploads, plugin-capable Codex environments, and an MCP-backed ChatGPT custom app/plugin connection.

## Current public access

- Source repository: public on GitHub
- License: MIT
- ChatGPT Skill package: installable from the repository ZIP where Skill upload is supported
- Codex plugin package: declared by `.codex-plugin/plugin.json` with bundled skills under `skills/`
- MCP runtime implementation: available under `mcp-server/`, ready for deployment/testing
- Public Plugin Directory listing: not active until OpenAI review/publication is completed

## ChatGPT Skills

Users can download the repository ZIP and upload it from the ChatGPT Skills interface where Skill upload is available. The canonical Skill entry point is the root `SKILL.md`.

A globally searchable Plugin Directory listing is a separate distribution path from uploading or sharing an individual Skill.

## Plugin package

The repository contains:

```text
.codex-plugin/plugin.json
skills/explainflow/SKILL.md
skills/explainflow/references/
PRIVACY.md
TERMS.md
```

## MCP-backed custom app/plugin

The repository also contains a stateless MCP implementation in `mcp-server/`.

The server exposes:

- `explainflow_explain`
- `explainflow_recommend_format`
- `explainflow_list_formats`

It is designed for Cloudflare Workers using the current Model Context Protocol TypeScript server SDK and a web-standard Streamable HTTP endpoint.

After deployment, the primary connection URL is expected to be:

```text
https://<worker-host>/mcp
```

The initial design uses no authentication, no user accounts, no database, and no external model API key. The MCP server returns ExplainFlow routing/rendering contracts that the connected assistant uses to generate the final explanation.

## Public Plugin Directory

Making the GitHub repository public does not automatically create a globally searchable ChatGPT Plugin Directory listing. Directory inclusion remains a separate OpenAI review/publication step.

The app/plugin path is therefore:

1. Deploy the MCP runtime.
2. Add the deployed `/mcp` URL as a custom ChatGPT plugin/app.
3. Confirm all tools are discovered and usable.
4. Run the smoke tests and the 45-case behavioral suite.
5. Add representative real outputs/screenshots.
6. Resolve blocker/high-severity failures.
7. Verify public privacy and terms links.
8. Submit through the OpenAI-supported review/publication route available to the account.
9. After approval, verify that ExplainFlow is searchable and installable from an unrelated account.

## Fallback public distribution

Until a public directory listing is approved, anyone can still use ExplainFlow by downloading the public repository ZIP and uploading it as a Skill in supported ChatGPT environments, or by installing the repository as a plugin in a compatible Codex setup.
