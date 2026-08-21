# ExplainFlow Public Beta Testing

ExplainFlow `0.9.0-public-beta` is open for public testing.

## Goal

Validate the skill in real Agent Skills-compatible environments before the stable `v1.0.0` release.

## Install for testing

Use the repository folder or a ZIP archive of the repository as the skill package. The canonical entry point is `SKILL.md`.

In ChatGPT environments where Skill upload is available, use the Skills interface to upload the ZIP package. In other Agent Skills-compatible environments, install the repository folder according to that product's Skill installation flow.

## Smoke test

Run these five prompts first:

```text
/mindmap React state management
```

```text
/flowchart Password reset
```

```text
/architecture React frontend, FastAPI backend, PostgreSQL, Redis
```

```text
/cheatsheet Git basics
```

```text
/summary /flowchart OAuth login
```

Expected behavior is defined in `evals/cases.md`.

## Full validation

The complete suite contains 45 cases covering:
- all 30 supported slash commands
- multi-command routing
- conflicting-command precedence
- missing-input handling
- source-grounding behavior
- image requests
- unknown commands
- complex outputs

Record results using the format in `evals/README.md`.

## Report a problem

Open a GitHub issue and include:
- prompt used
- environment/product
- model if visible
- actual output
- expected behavior
- severity: Blocker / High / Medium / Low

## Stable release gate

`v1.0.0` will be published only after the behavioral suite is run in a real compatible environment and no blocker/high-severity failures remain.
