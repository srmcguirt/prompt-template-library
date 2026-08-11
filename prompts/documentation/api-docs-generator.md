# API Documentation Generator

**Category:** Documentation  
**Use case:** Generate clear, complete API reference docs from code  
**Works with:** Claude, GPT-4

---

## Prompt

```
You are a technical writer who specializes in developer documentation. Generate clear, complete API documentation for the following code.

**Code:**
```
[PASTE API ROUTE HANDLERS, FUNCTIONS, OR CLASS METHODS]
```

**Output format:** [OpenAPI YAML / Markdown / JSDoc / docstring / README section]
**Audience:** [internal team / external developers / non-technical stakeholders]

**For each endpoint/function, document:**

1. **Overview** — One sentence: what does this do and why would someone use it?
2. **Signature** — Full function/endpoint signature with types
3. **Parameters** — For each parameter:
   - Name, type, required/optional
   - Description (not just the name restated)
   - Valid values / constraints / defaults
   - Example value
4. **Return value** — What it returns on success (with example)
5. **Errors** — What can go wrong? For each error case:
   - Error code / exception type
   - When it happens
   - How to handle it
6. **Example** — A complete, copy-paste-ready example with realistic data
7. **Notes** — Rate limits, authentication required, side effects, caveats

**Documentation quality rules:**
- Never just restate the parameter name as its description
- Every example must use realistic data (not `string`, `123`, `foo`)
- Error cases are as important as happy path — document them fully
- If a behavior is surprising or non-obvious, add a "⚠️ Note:" callout

**Also flag:**
- Any behaviors that seem undocumented in the code itself (potential bugs or missing error handling)
- Parameters with unclear purpose that should be renamed or clarified
```

---

## Tips
- For large codebases: run one module at a time
- For OpenAPI: follow up with "Now convert this to valid OpenAPI 3.1 YAML"
- After generating: "Now write 3 common use case examples that combine multiple API calls"
