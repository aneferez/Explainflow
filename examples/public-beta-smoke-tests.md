# ExplainFlow Public Beta Smoke Tests

Use these prompts immediately after installation.

## 1. Mind map

```text
/mindmap React state management
```

Expected: one clear root topic with concise hierarchical branches.

## 2. Flowchart

```text
/flowchart Password reset
```

Expected: start, verification, decision/failure path, reset, completion.

## 3. Architecture

```text
/architecture React frontend, FastAPI backend, PostgreSQL, Redis
```

Expected: clear separation of client, service, cache, and database with directional flow and no invented components.

## 4. Cheat sheet

```text
/cheatsheet Git basics
```

Expected: compact, task-grouped, high-density reference with minimal prose.

## 5. Multi-command routing

```text
/summary /flowchart OAuth login
```

Expected: concise summary first, then a consistent flowchart of the same process.
