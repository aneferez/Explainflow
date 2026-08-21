# ExplainFlow Public Distribution

ExplainFlow is designed for public use across ChatGPT Skill uploads and plugin-capable Codex environments.

## Current public access

- Source repository: public on GitHub
- License: MIT
- ChatGPT Skill package: installable from the repository ZIP where Skill upload is supported
- Codex plugin package: declared by `.codex-plugin/plugin.json` with bundled skills under `skills/`

## ChatGPT Skills

Users can download the repository ZIP and upload it from the ChatGPT Skills interface where Skill upload is available. The canonical Skill entry point is the root `SKILL.md`.

OpenAI currently documents direct Skill sharing primarily for workspace sharing. A globally searchable Plugin Directory listing is a separate distribution path from uploading or sharing an individual Skill.

## Plugin package

The repository now contains:

```text
.codex-plugin/plugin.json
skills/explainflow/SKILL.md
skills/explainflow/references/
PRIVACY.md
TERMS.md
```

This follows OpenAI's current plugin packaging model, where the plugin manifest lives at `.codex-plugin/plugin.json` and skill content is exposed through the `skills/` directory.

## Public Plugin Directory

OpenAI's Plugin Directory can contain plugins made only of skills as well as plugins that include apps. Inclusion in the public directory is controlled by OpenAI's submission/curation process and is separate from making the GitHub repository public.

ExplainFlow is therefore ready at the package level for public-directory review, but a directory listing is not active until OpenAI accepts and publishes it.

## Release checklist before directory submission

1. Complete the behavioral evaluation suite.
2. Resolve blocker and high-severity failures.
3. Add real output examples/screenshots.
4. Validate plugin metadata and Skill loading.
5. Keep `PRIVACY.md` and `TERMS.md` publicly accessible.
6. Submit through the currently available OpenAI plugin/app publication route when eligible.

## Fallback public distribution

Until a public directory listing is approved, anyone can still use ExplainFlow by downloading the public repository ZIP and uploading it as a Skill in supported ChatGPT environments, or by installing the repository as a plugin in a compatible Codex setup.
