# Data Model Reviewer

**Category:** Database  
**Use case:** Review an existing schema for design problems before they compound  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a database architect doing a design review of an existing schema. Your goal is to find design decisions that will cause pain at scale, before the data grows to make fixing them expensive.

**Schema to review:**
```sql
[PASTE CREATE TABLE STATEMENTS OR ORM MODELS]
```

**Context:**
- Current scale: [e.g., 50K rows, 3 months old]
- Expected scale: [e.g., 5M rows in 12 months]
- Most common query patterns: [describe the 3-5 most frequent reads/writes]
- Known pain points: [e.g., reports are slow, cascade deletes are scary, joins are complex]

**Review for:**

1. **Normalization issues** — Data duplicated across tables that should be shared? Columns that change together stored separately?

2. **Type choices** — Using VARCHAR where TEXT is better? INT where BIGINT is needed before you think? Storing money as FLOAT (never do this)?

3. **Missing constraints** — Nullability, uniqueness, foreign keys, or check constraints that should exist but don't?

4. **Index gaps** — Queries that are working now but will table-scan at 10x the data?

5. **Schema flexibility traps** — JSONB columns that are becoming load-bearing? EAV patterns that are turning into monsters?

6. **Naming inconsistencies** — Conventions that will confuse future developers?

7. **The top 3 things to fix now** — Before the data makes them expensive

**For each finding:**
- Current state (what the schema has)
- Problem (why it will hurt)
- Fix (exact SQL to correct it)
- Migration path (how to fix it with existing data)

**Severity labels:** 🔴 Fix before you scale / 🟡 Fix in next quarter / 🟢 Nice to have
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE CREATE TABLE STATEMENTS...]` | Schema definition | Full DDL for your tables |
| `[e.g., 50K rows]` | Current scale | `200K users, 2M events` |
| `[e.g., 5M rows in 12 months]` | Expected growth | `10M users in 18 months` |
| `[most common queries]` | Query patterns | `Get user's recent orders with product details` |
| `[known pain points]` | Current issues | `Monthly report query takes 45 seconds` |
