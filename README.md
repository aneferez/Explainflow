# ExplainFlow

ExplainFlow is a reusable Agent Skill for turning topics into visual and highly structured explanations.

## What it does

ExplainFlow routes a topic into the format best suited to learning, revision, comparison, process explanation, architecture understanding, or presentation.

It currently documents **30 slash commands**, including:

`/visualnotes` · `/stickynotes` · `/mindmap` · `/infographic` · `/flowchart` · `/diagram` · `/architecture` · `/timeline` · `/roadmap` · `/cheatsheet` · `/conceptmap` · `/tree` · `/pipeline` · `/workflow` · `/funnel` · `/layers` · `/flashcards` · `/comparison` · `/quiz` · `/eli10` · `/beginner` · `/expert` · `/teacher` · `/mentor` · `/stepbystep` · `/keypoints` · `/summary` · `/examples` · `/crashcourse` · `/deepdive`

See [`references/COMMANDS.md`](references/COMMANDS.md) for routing details.

## Why it exists

Users often know *what* they want to learn but not the best structure for learning it. ExplainFlow provides a consistent routing and quality framework so the same topic can be represented in the format best suited to the task.

## Repository structure

```text
explainflow/
├── SKILL.md
├── README.md
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
└── .github/
    └── workflows/
        └── validate-skill.yml
```

## Agent Skills compatibility

The package follows the Agent Skills `SKILL.md` convention:
- YAML frontmatter with `name` and `description`
- Markdown workflow instructions
- optional reference, example, and evaluation resources

## Installation

Installation depends on the Agent Skills-compatible environment you use.

Use the repository folder as the skill package and ensure the environment can read:

```text
SKILL.md
references/
examples/
evals/
```

The canonical skill entry point is `SKILL.md`. Do not move the reference files without updating the paths used by the skill instructions.

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

ExplainFlow now includes behavioral cases for:
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

**Pre-v1.0 validation stage.**

Core skill architecture, 30-command routing documentation, quality rules, examples, and full evaluation specifications are in place. The remaining release gate is behavioral execution of the eval suite in a real Agent Skills environment, followed by fixes, real-output examples/screenshots, and the first stable `v1.0.0` release.

See [`RELEASE_CHECKLIST.md`](RELEASE_CHECKLIST.md) for the exact release gate.

## Contributing

Contributions are welcome. For a command or behavior change, update the relevant reference documentation and add or modify an evaluation case.

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT
