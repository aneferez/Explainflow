# ExplainFlow

**Public beta: `0.9.0-public-beta`**

ExplainFlow is an open-source Agent Skill for turning topics into visual and highly structured explanations.

## What it does

ExplainFlow routes a topic into the format best suited to learning, revision, comparison, process explanation, architecture understanding, or presentation.

It currently documents **30 slash commands**:

`/visualnotes` · `/stickynotes` · `/mindmap` · `/infographic` · `/flowchart` · `/diagram` · `/architecture` · `/timeline` · `/roadmap` · `/cheatsheet` · `/conceptmap` · `/tree` · `/pipeline` · `/workflow` · `/funnel` · `/layers` · `/flashcards` · `/comparison` · `/quiz` · `/eli10` · `/beginner` · `/expert` · `/teacher` · `/mentor` · `/stepbystep` · `/keypoints` · `/summary` · `/examples` · `/crashcourse` · `/deepdive`

See [`references/COMMANDS.md`](references/COMMANDS.md) for routing details.

## Why it exists

Users often know *what* they want to learn but not the best structure for learning it. ExplainFlow provides a consistent routing and quality framework so the same topic can be represented in the format best suited to the task.

## Public beta

ExplainFlow is now publicly available for testing from this repository under the MIT License.

The current beta includes the complete skill specification, all 30 commands, quality rules, 45 behavioral evaluation cases, and static repository validation. The stable `v1.0.0` release remains gated on running the behavioral suite in a real Agent Skills-compatible runtime and resolving any blocker/high-severity failures.

See [`PUBLIC_TESTING.md`](PUBLIC_TESTING.md) for the test procedure and [`releases/v0.9.0-public-beta.md`](releases/v0.9.0-public-beta.md) for beta release notes.

## Repository structure

```text
explainflow/
├── SKILL.md
├── README.md
├── VERSION
├── PUBLIC_TESTING.md
├── CHANGELOG.md
├── RELEASE_CHECKLIST.md
├── LICENSE
├── CONTRIBUTING.md
├── references/
│   ├── COMMANDS.md
│   └── QUALITY_CHECKS.md
├── examples/
│   └── sample-prompts.md
├── evals/
│   ├── README.md
│   └── cases.md
├── releases/
│   └── v0.9.0-public-beta.md
└── .github/
    └── workflows/
        └── validate-skill.yml
```

## Agent Skills compatibility

The package follows the Agent Skills `SKILL.md` convention:
- YAML frontmatter with `name` and `description`
- Markdown workflow instructions
- supporting reference, example, and evaluation resources

The canonical skill entry point is `SKILL.md`.

## Installation

Use the repository folder or download a ZIP archive of the repository.

In ChatGPT environments where Skill upload is available, open the Skills interface and upload the ZIP package. In other Agent Skills-compatible environments, install the repository folder according to that product's Skill installation flow.

After installation, try the smoke tests in [`PUBLIC_TESTING.md`](PUBLIC_TESTING.md).

## Usage

Invoke a supported format followed by a topic.

```text
/flowchart Explain how OAuth login works.
```

```text
/mindmap React state management
```

```text
/architecture React frontend, FastAPI backend, PostgreSQL, Redis
```

Commands can also be combined when compatible:

```text
/summary /flowchart Explain JWT authentication
```

When commands conflict, ExplainFlow prioritizes the first command and uses later commands only when they remain compatible.

## Evaluation

ExplainFlow includes **45 behavioral cases** covering:
- all 30 single commands
- multi-command routing
- conflicting-command precedence
- missing essential inputs
- unknown commands
- source-grounding behavior
- actual-image requests
- large/complex outputs

See [`evals/cases.md`](evals/cases.md) and [`evals/README.md`](evals/README.md).

A GitHub Actions workflow performs static validation of the repository structure, `SKILL.md` frontmatter, documented command count, and evaluation coverage.

## Current status

**Public beta — `0.9.0-public-beta`.**

Ready for public installation/testing as an open-source Agent Skill package. Stable `v1.0.0` is pending real-runtime behavioral QA, real output examples/screenshots, and final release verification.

See [`RELEASE_CHECKLIST.md`](RELEASE_CHECKLIST.md) for the exact stable-release gate.

## Contributing

Contributions and beta feedback are welcome. For a command or behavior change, update the relevant reference documentation and add or modify an evaluation case.

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT
