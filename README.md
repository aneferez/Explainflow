# ExplainFlow

ExplainFlow is a reusable Agent Skill for turning topics into visual and highly structured explanations.

## What it does

ExplainFlow supports mind maps, flowcharts, diagrams, architecture views, infographics, cheat sheets, timelines, roadmaps, workflows, comparisons, flashcards, quizzes, and multiple teaching-depth modes.

## Why it exists

Users often know *what* they want to learn but not the best structure for learning it. ExplainFlow provides a consistent routing and quality framework so the same topic can be represented in the format best suited to the task.

## Skill structure

```text
explainflow/
├── SKILL.md
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── references/
│   ├── COMMANDS.md
│   └── QUALITY_CHECKS.md
├── examples/
│   └── sample-prompts.md
└── evals/
    └── cases.md
```

## Agent Skills compatibility

The package follows the Agent Skills `SKILL.md` convention:
- YAML frontmatter with `name` and `description`
- Markdown workflow instructions
- optional reference, example, and evaluation resources

## Example

```text
/flowchart Explain how OAuth login works.
```

## Status

Initial public-repository version. Command coverage and evaluation cases will expand over time.

## License

MIT
