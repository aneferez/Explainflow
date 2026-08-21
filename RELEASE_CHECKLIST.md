# ExplainFlow v1.0 Release Checklist

## Skill integrity
- [ ] `SKILL.md` loads successfully in the target Agent Skills environment.
- [ ] YAML frontmatter is valid.
- [ ] `name` and `description` are recognized correctly.
- [ ] Static GitHub Actions validation passes.

## Command validation
- [ ] All 30 single-command eval cases pass.
- [ ] Multi-command combination tests pass.
- [ ] First-command precedence works for conflicting commands.
- [ ] Unknown-command behavior is safe and explicit.
- [ ] Missing essential input triggers a focused clarification.

## Output quality
- [ ] Mind maps and trees keep node labels concise.
- [ ] Flowcharts/workflows show unambiguous direction.
- [ ] Architecture outputs do not invent unsupported components.
- [ ] Timelines do not invent dates.
- [ ] Cheat sheets remain compact and scannable.
- [ ] Actual-image requests are not falsely represented as generated images when image tooling is unavailable.
- [ ] Source-provided terminology is preserved.
- [ ] Contradictions in supplied source material are not silently reconciled.

## Documentation
- [ ] README installation instructions verified against the target environment.
- [ ] README includes at least 5 real output examples or screenshots.
- [ ] Command reference matches implemented behavior.
- [ ] Evaluation guide reflects the final release process.
- [ ] Changelog is updated.

## Portfolio proof
- [ ] Repository is public.
- [ ] About/description is accurate.
- [ ] Topics/tags are added on GitHub where useful.
- [ ] At least one release artifact or tagged release is published.
- [ ] Resume/portfolio links point to the final repository.

## Release
- [ ] No blocker or high-severity evaluation failures remain.
- [ ] Create `v1.0.0` tag/release.
- [ ] Publish final release notes.
