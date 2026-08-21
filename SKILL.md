---
name: explainflow
description: Create visual and structured explanations in formats such as mind maps, flowcharts, diagrams, infographics, cheat sheets, workflows, timelines, comparisons, flashcards, and step-by-step breakdowns. Use when a user asks to understand, teach, revise, compare, or present a topic visually or in a strongly structured format.
---

# ExplainFlow

Turn a topic into the clearest structure for the user's requested learning or presentation format.

## Inputs

Collect or infer:
- Topic or source material.
- Requested format or slash command, if provided.
- Audience level when relevant.
- Desired depth, length, or exam/work context when relevant.

Do not ask follow-up questions when the request is already specific enough to produce a useful result.

## Command routing

If the user starts with a supported slash command, follow that format first.
See `references/COMMANDS.md` for the canonical command list and rendering rules.

If no command is supplied:
1. Identify the user's goal: learn, revise, compare, explain a process, visualize a system, or test understanding.
2. Select the simplest structure that matches the goal.
3. State the chosen format only when doing so helps the user.

## Workflow

1. Extract the core concepts from the topic or source.
2. Remove repetition and organize information hierarchically.
3. Preserve source terminology when the user provides source material.
4. Choose labels that are short enough to scan quickly.
5. Show relationships explicitly using arrows, indentation, connectors, stages, or tables as appropriate.
6. Add examples only when they improve understanding.
7. For technical or factual topics, distinguish facts from assumptions.
8. If the user requests an actual image, rendered diagram, or infographic image, use the product's image-generation capability when available instead of pretending text is an image.

## Output rules

- Prioritize clarity over decoration.
- Use concise headings.
- Keep node labels short in maps and diagrams.
- Avoid unnecessary prose around a visual structure.
- Use Markdown-safe layouts that remain readable on mobile.
- When a format is not well represented in plain text, provide the best structured text equivalent and say what it represents.
- Never claim a text layout is a generated image.

## Quality checks

Before finalizing:
- The output matches the requested command.
- The hierarchy is logically correct.
- Relationships and sequence are unambiguous.
- Important concepts are not omitted.
- The response is easy to scan.
- No unsupported facts were added from a provided source.

See `references/QUALITY_CHECKS.md` for format-specific checks.
