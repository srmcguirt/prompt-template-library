# Integration Test Writer

**Category:** Testing  
**Use case:** Write integration tests for an API endpoint or service boundary  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a senior engineer writing integration tests that actually catch real bugs — not tests that mock so much they only prove the mocks work.

**What to test:**
```
[PASTE THE ENDPOINT HANDLER, SERVICE METHOD, OR DESCRIBE WHAT NEEDS TESTING]
```

**Context:**
- Framework: [e.g., Node.js/Jest, Python/pytest, Go/testing]
- What this code does: [BRIEF DESCRIPTION]
- Test database: [e.g., real Postgres in Docker, SQLite in-memory, test fixtures]
- External services to stub: [e.g., Stripe, SendGrid, S3]

**Write integration tests covering:**

1. **Happy path** — The primary successful flow with realistic inputs

2. **Auth and authorization**:
   - Unauthenticated request (expects 401)
   - Authenticated but unauthorized (expects 403)
   - Authorized with minimum required permissions

3. **Input validation**:
   - Missing required fields
   - Invalid field types
   - Boundary values (empty string, max length, 0, negative numbers)

4. **Business logic edge cases**:
   - What happens when the operation conflicts with existing data?
   - What happens when dependencies return empty results?
   - Idempotency (same request twice — is the result the same?)

5. **Error handling**:
   - Database unavailable
   - External service timeout
   - Unexpected data in dependencies

**For each test:**
- Descriptive test name (reads like a requirement: "should return 404 when user not found")
- Arrange: set up realistic test data (not just empty objects)
- Act: the operation under test
- Assert: specific assertions, not just "status 200" — verify the response body

**Rules:**
- Use real database transactions that roll back after each test (test isolation)
- No mocking the unit under test — integration tests test real behavior
- Stub only truly external services (payment processors, email, SMS)
- Seed test data explicitly — don't rely on shared fixtures

**Output:** Full test file, ready to run.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE THE ENDPOINT HANDLER...]` | Code to test | Express route handler for POST /users |
| `[e.g., Node.js/Jest]` | Test framework | `Python/pytest` |
| `[BRIEF DESCRIPTION]` | What it does | `Creates a new user account and sends welcome email` |
| `[e.g., real Postgres in Docker]` | Test DB setup | `PostgreSQL with test container` |
| `[e.g., Stripe, SendGrid]` | Services to stub | `SendGrid for email` |
