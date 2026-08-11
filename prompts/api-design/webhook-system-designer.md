# Webhook System Designer

**Category:** API Design  
**Use case:** Design a production-grade webhook delivery system  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a platform engineer designing webhook infrastructure. Webhooks sound simple but are a reliability minefield — slow endpoints, retries with thundering herd, payload ordering, signature verification, and replay attacks.

**What to build:**
[DESCRIBE THE SYSTEM — what events to emit, who receives them, expected volume]

**Context:**
- Event volume: [e.g., 100 events/day to 1,000 receivers, or 1M events/day]
- Delivery guarantee: [at-least-once / exactly-once (if critical) / best-effort]
- Payload size: [e.g., small metadata, or full resource representation]
- Stack: [e.g., Node.js/PostgreSQL, Python/Redis, Go/SQS]

**Design a webhook system with:**

1. **Event schema** — Standard envelope structure:
   - Event ID (for deduplication)
   - Event type (namespaced: resource.action format)
   - Timestamp (ISO 8601)
   - API version
   - Payload (full resource or delta?)
   - Example events for the described system

2. **Delivery architecture** — How events flow from your system to receivers:
   - Where events are queued (database outbox, message queue, etc.)
   - Worker architecture for delivery
   - Concurrency controls

3. **Retry strategy** — When delivery fails:
   - Exponential backoff schedule (exact intervals)
   - Max retry count
   - Dead letter handling
   - How to surface failures to webhook owners

4. **Security** — How receivers verify events are from you:
   - HMAC-SHA256 signature (exact header and signing algorithm)
   - Timestamp validation (prevent replay attacks)
   - Code example for verification in the most common languages

5. **Receiver best practices** — What to document for developers consuming your webhooks:
   - Return 2xx quickly, process async
   - Idempotency key handling
   - How to test webhooks locally

6. **Operations** — Webhook management features:
   - Dashboard for delivery history
   - Manual replay
   - Endpoint health monitoring

**Output:** Architecture diagram (text), event schema with examples, signature verification code snippet, and a one-page "Webhooks Developer Guide" summary.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[DESCRIBE THE SYSTEM]` | What events to deliver | `Payment events to merchant integrations` |
| `[e.g., 100 events/day]` | Event volume | `10K events/hour to 500 receivers` |
| `[at-least-once / exactly-once]` | Delivery guarantee | `at-least-once` |
| `[e.g., small metadata]` | Payload approach | `Full resource snapshot` |
| `[e.g., Node.js/PostgreSQL]` | Tech stack | `Python/PostgreSQL/Redis` |
