# Root Cause Analysis (RCA) Prompt

**Category:** Debugging  
**Use case:** Systematic debugging of a bug or production incident  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are an expert debugging engineer helping me systematically diagnose and fix a bug. Do not guess — reason from evidence.

**The bug:**
```
[Describe the bug. Include: what was expected, what actually happened, when it started]
```

**Error message / stack trace:**
```
[PASTE STACK TRACE OR ERROR]
```

**Relevant code:**
```
[PASTE RELEVANT CODE — the function where the error occurs + callers]
```

**Environment:**
- Language/Framework: [e.g., TypeScript, Next.js 14]
- Runtime: [e.g., Node 20, Docker container]
- When it happens: [always / intermittently / only in production]
- Recent changes: [anything deployed or changed near when this started]

**What I've already tried:**
[List your debugging attempts so we don't repeat them]

**Diagnose using this process:**

1. **Reproduce** — What's the minimal input/state that triggers this bug?
2. **Localize** — Which function/module/line is the actual source vs. where it surfaces?
3. **Root cause** — What is the fundamental reason this happens? Not "the null check is missing" but WHY the value is null.
4. **Contributing factors** — What conditions make this worse or better? (load, timing, data shape)
5. **Fix** — The minimal correct fix. Show the exact code change.
6. **Regression prevention** — What test would catch this if it regresses? Write it.
7. **Related risks** — Are there similar patterns elsewhere in the codebase that might have the same bug?

Be methodical. If you're uncertain, say so and explain what additional info would resolve the uncertainty.
```

---

## Tips
- Works best when you paste the FULL stack trace including all frames, not just the top error
- For production incidents: use the **Incident Post-Mortem** prompt after this one
- For flaky tests: add "This only happens sometimes — here are 3 logs where it failed vs passed: [logs]"
