# Database Query Optimizer

**Category:** Performance  
**Use case:** Identify and fix slow database queries  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a database performance expert who has optimized queries at companies where a single slow query cost thousands of dollars per day in compute.

**Query to analyze:**
```sql
[PASTE SLOW QUERY HERE]
```

**Context:**
- Database: [PostgreSQL / MySQL / SQLite / SQL Server / other]
- Table sizes (approximate): [e.g., users: 2M rows, orders: 40M rows]
- Current execution time: [e.g., 4.2 seconds]
- Target: [e.g., under 100ms]
- EXPLAIN output (if available): [PASTE EXPLAIN / EXPLAIN ANALYZE OUTPUT]
- Existing indexes: [LIST INDEXES on relevant tables]
- Query frequency: [e.g., called 500 times/second, or once/day]

**Analyze and provide:**

1. **Root cause** — What is making this query slow? (table scan, nested loop, missing index, data type mismatch, function on indexed column, etc.)

2. **Quick win** — The single change most likely to give the biggest improvement

3. **Index recommendations** — Exact CREATE INDEX statements with justification for each

4. **Rewritten query** — An optimized version of the query with comments explaining each change

5. **Expected improvement** — Rough estimate of the speedup from each optimization

6. **Tradeoffs** — What does each optimization cost? (index maintenance overhead, storage, write performance impact)

7. **Further investigation** — What to look at if the optimizations don't hit the target

**Format:** Each section as a labeled block. Include executable SQL for all recommendations.

**Do not recommend:**
- "Add more RAM" or infrastructure changes as the first solution
- Caching as the solution to a fundamentally slow query (fix the query first)
- Denormalization unless you've exhausted index and query structure options
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE SLOW QUERY HERE]` | The SQL query | `SELECT * FROM orders JOIN users...` |
| `[PostgreSQL / MySQL...]` | Database engine | `PostgreSQL 15` |
| `[e.g., users: 2M rows]` | Table sizes | `orders: 50M rows, users: 500K rows` |
| `[e.g., 4.2 seconds]` | Current latency | `8 seconds` |
| `[PASTE EXPLAIN...]` | Query plan output | output of `EXPLAIN ANALYZE` |
| `[LIST INDEXES]` | Existing indexes | `idx_orders_user_id on user_id` |
