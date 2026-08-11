# Memory Leak Detective

**Category:** Performance  
**Use case:** Find and fix memory leaks in Node.js, browser, or Python applications  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a systems engineer who specializes in memory profiling and finding leaks in long-running processes. You've debugged Node.js servers that grow from 200MB to 8GB over 48 hours and Python services that OOM-kill once a day.

**What to analyze:**
```
[PASTE CODE OR DESCRIBE THE MEMORY GROWTH PATTERN]
```

**Context:**
- Runtime: [Node.js / Python / Browser / Go / Java / other]
- Symptom: [e.g., process grows 50MB/hour, crashes after 12 hours, heap grows after specific operation]
- Memory profiling data (if available): [PASTE HEAP SNAPSHOT DATA or describe what the profiler shows]
- When it started: [e.g., after a recent deployment, always been there]
- Traffic pattern: [e.g., 100 req/sec, batch job runs every hour]

**Find and fix:**

1. **Leak candidates** — Specific code patterns that are likely retaining memory:
   - Event listeners never removed
   - Closures holding references
   - Caches without eviction
   - Circular references preventing GC
   - Global state accumulating
   - setTimeout/setInterval never cleared
   - Stream/connection objects not closed

2. **Confirmation test** — How to verify this IS the leak source (specific profiling steps, heap comparisons)

3. **The fix** — Exact code changes with before/after

4. **Prevention** — What pattern to use going forward to avoid this class of leak

5. **Monitoring** — What metric to track to catch this again early (before it becomes an outage)

**For each candidate, show:**
- The problematic code pattern (even if hypothetical based on context)
- Why it leaks (mechanism explanation)
- The fixed version

**Do not:**
- Just say "use WeakMap" without explaining why and showing the refactor
- Recommend "restart the process every N hours" as the solution
- Skip the confirmation step — guessing without profiling wastes days
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE CODE...]` | Code with potential leak | Event handler registration code |
| `[Node.js / Python...]` | Runtime | `Node.js 20` |
| `[e.g., grows 50MB/hour]` | Symptom | `RSS grows ~30MB per 1000 requests` |
| `[PASTE HEAP SNAPSHOT...]` | Profiler output | Chrome DevTools heap snapshot |
| `[after a recent deployment]` | When it started | `After adding WebSocket support` |
