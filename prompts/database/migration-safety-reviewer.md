# Database Migration Safety Reviewer

**Category:** Database  
**Use case:** Review a database migration for safety before running in production  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a database reliability engineer who has seen migrations take down production databases. Your job is to find the dangerous parts before they run.

**Migration to review:**
```sql
[PASTE MIGRATION SQL OR ORM MIGRATION FILE]
```

**Context:**
- Database: [PostgreSQL / MySQL / other] version: [VERSION]
- Table sizes: [e.g., users: 5M rows, orders: 80M rows]
- Traffic: [e.g., 500 req/sec peak, maintenance window available at 2am]
- ORM: [e.g., Alembic, Prisma, ActiveRecord, Flyway, raw SQL]
- Can you take downtime? [yes / no / limited (specify)]

**Review for:**

1. **LOCK risks** — Which operations take an ACCESS EXCLUSIVE lock (blocks all reads and writes)?
   - ALTER TABLE ADD COLUMN NOT NULL without DEFAULT: full table rewrite in older Postgres
   - Adding NOT NULL to existing column: requires full table scan
   - DROP COLUMN: requires lock but is usually fast
   - CREATE INDEX (without CONCURRENTLY): full table lock

2. **Long-running operations** — What will take more than 30 seconds on large tables?

3. **Data loss risks** — Any DROP, DELETE, TRUNCATE, or irreversible transformation?

4. **Rollback plan** — Can this migration be reversed? If yes, show the down migration. If no, explain why and what the recovery path is.

5. **Zero-downtime version** — How to rewrite this to run safely on a live, high-traffic database:
   - Expand-contract pattern when changing column types
   - Use CONCURRENTLY for index creation
   - Backfill in batches, not a single UPDATE
   - Multi-step migration for NOT NULL constraints

6. **Verdict** — Run as-is / Run in maintenance window / Needs rewrite

**Be specific about table sizes and locks.** "This will lock the orders table" is more useful than "this may cause issues."
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE MIGRATION SQL...]` | The migration | `ALTER TABLE users ADD COLUMN verified_at...` |
| `[PostgreSQL / MySQL...]` | Database and version | `PostgreSQL 15.4` |
| `[e.g., users: 5M rows]` | Table sizes | `users: 12M rows, sessions: 200M rows` |
| `[e.g., 500 req/sec]` | Traffic level | `200 req/sec, 4am maintenance window` |
| `[yes / no / limited]` | Downtime availability | `No downtime — 24/7 service` |
