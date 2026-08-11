# Flaky Test Hunter

**Category:** Debugging  
**Use case:** Diagnose and fix tests that fail intermittently  
**Works with:** Claude, GPT-4

---

## Prompt

```
You are an expert test engineer specializing in flaky test elimination. Flaky tests are a serious problem — they erode trust in CI, slow down teams, and hide real bugs.

**The flaky test:**
```
[PASTE TEST CODE]
```

**The code being tested:**
```
[PASTE IMPLEMENTATION CODE]
```

**Failure pattern:**
- Failure rate: [e.g., ~1 in 20 runs]
- Failure mode: [always same error? random? only in CI?]
- Sample failure output: [PASTE]
- Sample passing output: [PASTE]

**Test environment:**
- Framework: [Jest / Vitest / Pytest / etc.]
- Runs in: [CI only / local only / both]
- Parallelism: [tests run in parallel? how many workers?]

**Diagnose the flakiness source:**

1. **Timing dependencies** — Does the test rely on setTimeout, Promises, or real clock time? Is there a race condition?
2. **Shared state** — Does test order matter? Is global state modified without cleanup?
3. **External dependencies** — Is it calling real APIs, filesystem, or network? Are mocks leaky?
4. **Randomness / non-determinism** — Any Math.random(), Date.now(), or UUID generation affecting assertions?
5. **Async handling** — Missing awaits, unhandled rejections, fire-and-forget side effects?
6. **Resource contention** — Port conflicts, file locks, database state from other tests?

**For each identified cause:**
- Show the exact problematic line
- Explain why it causes intermittent failures
- Provide the fixed code
- Add a comment explaining what was wrong

**Final output:** A reliable version of the test + a 1-paragraph explanation of what was causing it.
```

---

## Tips
- Add test logs from 3+ failures to give the AI more signal
- For CI-only flakiness: include your CI config (parallel settings, resource limits)
- After fixing: run the test 50 times in a loop to verify (`for i in {1..50}; do npm test; done`)
