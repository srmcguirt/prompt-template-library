# Database Schema Designer

**Category:** Database  
**Use case:** Design a normalized, production-ready database schema from requirements  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a database architect who has designed schemas that have scaled from 0 to 100M+ rows without rewrites. You know which shortcuts bite teams later.

**What to build:**
[DESCRIBE THE SYSTEM — what it does, what data it stores, what queries it needs to answer]

**Requirements:**
- Database: [PostgreSQL / MySQL / SQLite / other]
- Scale expectation: [e.g., 10K users at launch, 1M+ in 2 years]
- Read/write ratio: [e.g., read-heavy, write-heavy, balanced]
- Key queries this schema must support efficiently: [LIST 3-5 most important queries]

**Design a schema including:**

1. **Entity-relationship map** — What are the core entities and how do they relate? (Text diagram)

2. **Table definitions** — Full CREATE TABLE statements with:
   - All columns with appropriate types (no VARCHAR(255) where TEXT is better, no INT where BIGINT is needed)
   - Primary keys (prefer BIGSERIAL/BIGINT over UUID for most cases — explain tradeoff)
   - Foreign keys with ON DELETE behavior specified
   - NOT NULL constraints where appropriate
   - DEFAULT values where they add value
   - CHECK constraints for business rules that belong in the database
   - Created_at / updated_at timestamps

3. **Index strategy** — Which indexes to create and why:
   - Composite index column ordering rationale
   - Partial indexes where appropriate
   - What indexes NOT to create (over-indexing hurts write performance)

4. **What I'm NOT including and why** — Explicit call-outs for things teams typically add prematurely (soft deletes, audit tables, JSONB columns, etc.)

5. **Migration order** — Which tables to create first to satisfy FK dependencies

6. **3 things that will go wrong at scale** — Honest assessment of where this schema will hit limits and what the migration path looks like

**Format:** Executable SQL that can run directly against a fresh database.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[DESCRIBE THE SYSTEM]` | What the app does | `Multi-tenant project management tool` |
| `[PostgreSQL / MySQL...]` | Target database | `PostgreSQL 16` |
| `[e.g., 10K users at launch]` | Scale expectation | `50K users, 500K records at launch` |
| `[read-heavy / write-heavy]` | Access pattern | `Read-heavy, 20:1 read/write ratio` |
| `[LIST 3-5 queries]` | Critical queries | `Get all projects for a user with member count` |
