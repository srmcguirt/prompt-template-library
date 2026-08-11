# Test Suite Generator

**Category:** Testing  
**Use case:** Generate comprehensive unit/integration tests for a function or module  
**Works with:** Claude, GPT-4

---

## Prompt

```
You are a senior test engineer who writes comprehensive, maintainable tests. Generate a complete test suite for the following code.

**Code to test:**
```
[PASTE FUNCTION OR MODULE]
```

**Testing framework:** [Jest / Vitest / Pytest / Go testing / etc.]
**Language:** [TypeScript / Python / Go / etc.]
**Test style preference:** [BDD describe/it / AAA / plain functions]

**Generate tests that cover:**

1. **Happy path** — normal inputs, expected outputs
2. **Edge cases** — empty, null, undefined, zero, negative, max values
3. **Error cases** — what should throw? what should return errors vs throw?
4. **Boundary conditions** — off-by-one, exact limits, type coercion
5. **Async behavior** — if applicable: timeouts, concurrent calls, race conditions
6. **Side effects** — database calls, API calls, event emissions — mock and verify them
7. **State mutations** — if the function modifies state, test before/after

**For each test:**
- Clear test name that reads like documentation ("should return 404 when user not found")
- Arrange/Act/Assert structure
- Inline comments explaining WHY edge cases matter
- Realistic test data (not just `foo`, `bar`, `1`, `2`)

**Also provide:**
- A list of any behaviors you COULDN'T test from the code alone (need more context)
- Suggested mocks/stubs/fixtures
- One integration test scenario if the function touches external systems
```

---

## Tips
- For TDD: Run this BEFORE writing the implementation — it generates your spec
- For legacy code: Paste the function + its caller context for better edge case coverage
- Follow up with: "Now identify which of these tests are actually testing implementation details instead of behavior, and refactor those"

---

## Bonus: Mutation Testing Prompt

```
I have these tests for my code. Are they actually testing the important behaviors, or are they just passing because the implementation is correct by coincidence?

Here are my tests: [paste tests]
Here is my code: [paste code]

Suggest 5 mutations I could make to the code that SHOULD cause test failures but might not. This will tell me where my test coverage is weak.
```
