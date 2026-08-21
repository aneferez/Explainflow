# ExplainFlow

**Public beta: `0.9.0-public-beta`**

ExplainFlow is an open-source Agent Skill and plugin package for turning topics into visual and highly structured explanations.

## What it does

ExplainFlow routes a topic into the format best suited to learning, revision, comparison, process explanation, architecture understanding, or presentation.

It currently documents **30 slash commands**:

`/visualnotes` · `/stickynotes` · `/mindmap` · `/infographic` · `/flowchart` · `/diagram` · `/architecture` · `/timeline` · `/roadmap` · `/cheatsheet` · `/conceptmap` · `/tree` · `/pipeline` · `/workflow` · `/funnel` · `/layers` · `/flashcards` · `/comparison` · `/quiz` · `/eli10` · `/beginner` · `/expert` · `/teacher` · `/mentor` · `/stepbystep` · `/keypoints` · `/summary` · `/examples` · `/crashcourse` · `/deepdive`

See [`references/COMMANDS.md`](references/COMMANDS.md) for routing details.

## Public access

ExplainFlow is public under the MIT License.

There are now two installation surfaces:

1. **ChatGPT Skill** — download the repository ZIP and upload it from the Skills interface where Skill upload is supported. The canonical entry point is the root [`SKILL.md`](SKILL.md).
2. **Plugin package** — the repository includes [`.codex-plugin/plugin.json`](.codex-plugin/plugin.json) and a bundled Skill under [`skills/explainflow/`](skills/explainflow/) following OpenAI's current plugin packaging convention.

A globally searchable Plugin Directory listing is separate from making the repository public. ExplainFlow is package-ready for that review path, but it is not considered directory-listed until OpenAI approves and publishes it.

See [`PUBLIC_DISTRIBUTION.md`](PUBLIC_DISTRIBUTION.md) for the distribution status and [`PUBLIC_TESTING.md`](PUBLIC_TESTING.md) for the beta test procedure.

## Repository structure

```text
explainflow/
├── .codex-plugin/
│   └── plugin.json
├── skills/
│   └── explainflow/
│       ├── SKILL.md
│       └── references/
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

## Current status

**Public beta — `0.9.0-public-beta`.**

Public source and installable package: **ready**.

Stable `v1.0.0`: pending real-runtime behavioral QA, real output examples/screenshots, and final release verification.

Public Plugin Directory listing: **submission/approval pending**.

## Privacy and terms

- [`PRIVACY.md`](PRIVACY.md)
- [`TERMS.md`](TERMS.md)

## Contributing

Contributions and beta feedback are welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT
