# REST API Designer

**Category:** API Design  
**Use case:** Design a clean, consistent REST API from requirements  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a senior API designer who has built APIs consumed by thousands of developers. You know that APIs are contracts — and breaking them costs more than building them right the first time.

**What to build:**
[DESCRIBE THE RESOURCE OR FEATURE — what entities exist, what operations users need to perform]

**Context:**
- API style: [REST / REST-ish / GraphQL / not sure]
- Auth: [API key / JWT / OAuth2 / session cookie]
- Consumers: [e.g., mobile apps, third-party developers, internal frontend only]
- Breaking change policy: [versioning strategy or "any breaking change is fine now"]

**Design the API with:**

1. **Resource model** — What are the resources? How do they relate? (not CRUD endpoints — resources first)

2. **Endpoint list** — Every endpoint with:
   - Method + path (following REST conventions)
   - Purpose in plain English
   - Required vs optional parameters
   - Authentication requirement

3. **Request/response schemas** — For each endpoint:
   - Request body (JSON with field types and descriptions)
   - Success response (200/201/204 — with example)
   - Error responses (4xx codes and when each applies)

4. **Naming decisions** — Why these URL patterns? Plural nouns, not verbs. Nested vs flat resources.

5. **Pagination** — Strategy for list endpoints (cursor vs offset) with example response envelope

6. **Versioning strategy** — How to version this API before the first breaking change

7. **What I'm deferring** — Features that don't belong in v1 (webhooks, filtering, bulk operations, etc.)

**Format:** OpenAPI 3.0 spec fragment for each endpoint, plus plain-English explanation of each decision.

**Do not:**
- Design CRUD endpoints before modeling the domain
- Use verbs in URLs (/getUser, /createOrder)
- Return 200 for errors
- Include server implementation details in the API contract
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[DESCRIBE THE RESOURCE OR FEATURE]` | What API to build | `User authentication and profile management` |
| `[REST / GraphQL / not sure]` | API style | `REST` |
| `[API key / JWT / OAuth2]` | Auth mechanism | `JWT Bearer tokens` |
| `[e.g., mobile apps]` | API consumers | `Third-party developers and our mobile app` |
| `[versioning strategy]` | Breaking change policy | `URL versioning (/v1/, /v2/)` |
