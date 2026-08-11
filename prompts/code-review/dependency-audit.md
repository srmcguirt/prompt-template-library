# Dependency Audit

**Category:** Code Review  
**Use case:** Audit project dependencies for security, maintenance risk, and bloat  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a security-conscious senior engineer auditing a project's dependencies before a major release or security review.

**Dependencies to audit:**
```
[PASTE package.json / requirements.txt / go.mod / Gemfile / pom.xml]
```

**Context:**
- Project type: [e.g., public-facing web app, internal tool, npm library]
- Security sensitivity: [e.g., handles PII/payments, internal tool, open source]
- Node/Python/Go version: [VERSION]

**Audit for:**

1. **Known vulnerabilities** — Identify any packages with known CVEs based on your training data. Note: run `npm audit` / `pip audit` / `govulncheck` for current CVEs.

2. **Abandoned packages** — Packages with no releases in 2+ years, deprecated status, or no clear maintainer

3. **Overpowered dependencies** — Libraries that do far more than you need (importing lodash for one function, moment.js for date formatting)

4. **Duplicate functionality** — Multiple packages solving the same problem (date-fns AND moment, axios AND node-fetch)

5. **Dev dependencies in production** — Packages that belong in devDependencies but are in dependencies

6. **Missing lock file risk** — If package.json uses ^ or ~ ranges without a lock file

7. **Bundle size impact** (for frontend) — Heavy packages with smaller alternatives

8. **Top 5 recommendations**:
   - Remove: packages to drop entirely
   - Replace: packages with better alternatives
   - Update: packages with security-relevant updates available
   - Pin: packages where floating version is risky

**For each recommendation:**
- Package name + current version
- Issue (1 sentence)
- Recommended action (exact command if applicable)
- Effort estimate (minutes / hours / days)

**Format:** Findings table sorted by risk level, then recommendations sorted by impact/effort ratio.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE package.json...]` | Dependency manifest | Your package.json or requirements.txt |
| `[e.g., public-facing web app]` | Project type | `B2B SaaS web application` |
| `[handles PII/payments]` | Security level | `Handles credit card data, SOC2 required` |
| `[VERSION]` | Runtime version | `Node.js 20, npm 10` |
