# API Error Handler Designer

**Category:** API Design  
**Use case:** Design a consistent error response structure and handling strategy for an API  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are an API design expert focused on developer experience. Nothing destroys DX faster than inconsistent error responses — different shapes for different errors, useless messages, missing context.

**Current state:**
```
[PASTE CURRENT ERROR RESPONSES — or describe what your API currently returns on errors]
```

**Context:**
- API type: [REST / GraphQL / gRPC]
- Language/framework: [e.g., Node.js/Express, Python/FastAPI, Go/Gin]
- API consumers: [e.g., internal frontend, third-party developers, mobile apps]
- Current biggest complaint about errors: [e.g., "we can't tell which field failed validation"]

**Design an error handling system with:**

1. **Error response schema** — A consistent JSON structure for all errors:
   - Required fields (code, message, at minimum)
   - Optional fields (details, field-level errors, documentation URL, request_id, timestamp)
   - Example for validation error, auth error, not found, server error

2. **HTTP status code mapping** — Which codes to use and when:
   - 400 vs 422 (validation vs malformed request)
   - 401 vs 403 (unauthenticated vs unauthorized)
   - 404 vs 410 (not found vs deleted)
   - 429 (rate limited) with Retry-After header
   - 500 vs 503 (server error vs temporarily unavailable)

3. **Error code system** — Machine-readable codes beyond HTTP status:
   - Naming convention (e.g., VALIDATION_ERROR, RESOURCE_NOT_FOUND)
   - Hierarchical or flat?
   - How clients should use these (not just log them)

4. **Implementation** — Error middleware/handler code showing:
   - How to catch and format different error types
   - How to log errors server-side without leaking stack traces to clients
   - How to handle validation library errors (Zod, Joi, Pydantic) into the standard format

5. **What NOT to do** — Common mistakes in the current approach

**Output:** The error schema as TypeScript types + a middleware implementation example + 5 example error responses covering the most common cases.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE CURRENT ERROR RESPONSES]` | Current error format | `{"error": "Not found"}` |
| `[REST / GraphQL / gRPC]` | API type | `REST` |
| `[e.g., Node.js/Express]` | Framework | `Python/FastAPI` |
| `[e.g., internal frontend]` | API consumers | `Third-party developers` |
| `[current complaint]` | Pain point | `"We can't tell which field failed validation"` |
