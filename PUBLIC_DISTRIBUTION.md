# ExplainFlow Public Distribution

ExplainFlow is designed for public use across ChatGPT Skill uploads, plugin-capable environments, and its public MCP runtime.

## Current public access

- Source repository: public on GitHub
- License: MIT
- ChatGPT Skill package: installable from the repository ZIP where Skill upload is supported
- Plugin package: declared by `.codex-plugin/plugin.json` with bundled skills under `skills/`
- Public MCP runtime: `https://explainflow-mcp.aneruth-medloop.workers.dev/mcp`
- Authentication: none; runtime is read-only and stateless

## Runtime behavior

When the user explicitly names a supported format, ExplainFlow uses that format.

When the user invokes ExplainFlow without naming a format, the MCP runtime uses `explainflow_auto` to choose the most suitable ExplainFlow format automatically.

The 45 behavioral evaluation cases are a release QA suite only; they are not executed during ordinary user requests.

## ChatGPT Skills

Users can download the repository ZIP and upload it from the ChatGPT Skills interface where Skill upload is available. The canonical Skill entry point is the root `SKILL.md`.

## MCP app

The public MCP endpoint can be connected as a custom ChatGPT app/plugin:

```text
https://explainflow-mcp.aneruth-medloop.workers.dev/mcp
```

The deployed runtime exposes four read-only tools:

- `explainflow_explain`
- `explainflow_auto`
- `explainflow_recommend_format`
- `explainflow_list_formats`

## Plugin Directory

A public GitHub repository or a custom MCP app does not automatically become a globally searchable Plugin Directory listing. OpenAI accepts app submissions for review; approved apps may be distributed through plugin listings in the Plugins Directory.

ExplainFlow is technically prepared for that submission path. Final global availability depends on OpenAI review and approval, and on the user's plan, workspace, role, supported surface, and region.

## Submission checklist

1. Deploy the latest MCP runtime revision.
2. Verify the four MCP tools are discovered in ChatGPT.
3. Verify explicit-format and automatic routing.
4. Run the 45-case behavioral QA suite.
5. Add representative real output screenshots/examples.
6. Verify `PRIVACY.md`, `TERMS.md`, app name, description, icon, and public endpoint.
7. Submit the app through OpenAI's app publication flow.
8. Track review feedback and resolve any requested changes.
9. After approval, verify ExplainFlow is searchable in the Plugin Directory from an unrelated eligible account.
