# Changelog

All notable ExplainFlow changes are documented here.

## Unreleased

### Pending before v1.0.0
- Run the complete 45-case behavioral evaluation suite in a real Agent Skills environment.
- Fix any routing or formatting regressions found during evaluation.
- Add real output examples/screenshots to the README.
- Verify installation instructions against the final target environment.
- Publish the first stable release.

## 0.9.0-public-beta - 2026-08-21

### Added
- Public beta version marker and beta release notes.
- Public testing guide with smoke-test prompts and issue-reporting guidance.
- Full evaluation coverage for all 30 supported slash commands.
- Multi-command routing tests.
- Conflict-precedence tests.
- Edge-case tests for missing input, unsupported commands, long source material, timelines without dates, and actual-image requests.
- Evaluation methodology and release gates in `evals/README.md`.
- Static GitHub Actions validation for repository structure, `SKILL.md` frontmatter, command count, and eval coverage.
- `RELEASE_CHECKLIST.md` for the `v1.0.0` release process.

### Status
- Publicly available as an open-source Agent Skill beta under the MIT License.
- Stable `v1.0.0` remains gated on real-runtime behavioral QA.

## 0.1.0 - Initial public repository

### Added
- Core `SKILL.md` instructions and command routing.
- 30 documented ExplainFlow slash commands.
- Format-specific quality checks.
- Sample prompts.
- Initial evaluation cases.
- README, contributing guide, MIT license, and repository metadata files.
