# ExplainFlow Evaluation Guide

ExplainFlow uses a manual/agent evaluation suite to verify command routing, structure quality, factual discipline, and edge-case behavior.

## Scope

The suite in `cases.md` covers:
- all 30 supported slash commands
- compatible multi-command combinations
- conflicting command precedence
- missing-input behavior
- source-grounding behavior
- actual-image requests vs text-only representations
- unknown-command handling
- large/complex output readability

## How to run an evaluation

For each case:
1. Load ExplainFlow as an Agent Skill in the target environment.
2. Submit the exact prompt from `cases.md`.
3. Compare the response with the expected criteria.
4. Mark each criterion as pass/fail.
5. Record any regression with the model/environment used.

## Suggested result format

```text
Case: 05 /flowchart Password reset
Environment: <product/model>
Date: YYYY-MM-DD
Result: PASS | FAIL
Notes:
- Start state present: PASS
- Decision/failure branch present: PASS
- End state present: PASS
- Unnecessary prose: FAIL
```

## Release gate

For a stable `v1.0.0` release:
- All 30 single-command cases should pass.
- Multi-command precedence cases should pass.
- No high-severity edge-case failures should remain.
- README usage instructions must match actual behavior.
- Static validation workflow must pass on the release commit.

## Severity

- **Blocker** — skill cannot load, malformed `SKILL.md`, broken command routing.
- **High** — fabricated source content, wrong command format, contradictory routing.
- **Medium** — unclear hierarchy, excessive prose, poor scanability.
- **Low** — cosmetic wording or minor formatting inconsistency.
