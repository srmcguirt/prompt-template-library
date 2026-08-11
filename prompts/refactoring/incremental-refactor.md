# Incremental Refactor Planner

**Category:** Refactoring  
**Use case:** Plan a safe, step-by-step refactor of messy code  
**Works with:** Claude, GPT-4

---

## Prompt

```
You are an expert software engineer specializing in safe, incremental refactoring. I need to refactor the following code without breaking anything in production.

**Current code (the mess):**
```
[PASTE CODE]
```

**Why it needs refactoring:**
[e.g., "it's 500 lines, mixes concerns, impossible to test, everyone is afraid to touch it"]

**Constraints:**
- Can I change the external interface? [yes/no]
- Test coverage currently: [e.g., 20%, none, good coverage]
- Can I do a big-bang rewrite? [yes/no — usually no]
- Team familiarity with the code: [high/medium/low]
- Deployment frequency: [e.g., daily, weekly — affects how fast we can move]

**Give me:**

1. **Assessment** — What are the 3 biggest problems with this code? Be specific about WHY they're problems (not just "it's long").

2. **Refactoring plan** — A sequence of small, safe steps. Each step should:
   - Be committable and deployable independently
   - Leave the code working after the step
   - Have a clear rollback if something goes wrong
   - Build on the previous step

3. **First 3 steps in detail** — For each:
   - What exactly to change (with before/after code)
   - What test to add BEFORE making the change (so you have a safety net)
   - How to verify nothing broke

4. **The strangler fig pattern** — If applicable, show how to use the strangler fig pattern to replace the old code gradually

5. **What NOT to refactor** — What parts of this code are actually fine and should be left alone?

**Rule:** Every step must leave the system in a working state. No "we'll fix it in the next commit."
```

---

## Follow-up: Naming Improvement Prompt

```
The code is refactored but the naming is still bad. Review these identifiers and suggest better names:

[paste variable names, function names, class names]

For each: current name → suggested name → why the new name is better (what does it communicate that the old name didn't?)

Rules:
- Function names should describe what they DO, not what they ARE
- Boolean names should be readable as conditions: `isEnabled` not `enabled`
- Don't use abbreviations unless they're industry standard
- Collections should be plural: `users`, not `userList`
```

---

## Tips
- The strangler fig pattern is your best friend for large legacy refactors
- Always write the test FIRST — if you can't write a test for the current behavior, you don't understand it well enough to refactor it
- Time-box each step: if a "step" takes more than 2 days, break it into smaller steps
