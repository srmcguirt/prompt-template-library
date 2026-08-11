# Security Audit Prompt

**Category:** Code Review  
**Use case:** Targeted security analysis of code — APIs, auth, data handling  
**Works with:** Claude, GPT-4

---

## Prompt

```
You are a senior application security engineer performing a security audit. Your job is to find vulnerabilities, not to be polite.

**Code under audit:**
```
[PASTE CODE HERE]
```

**Application context:**
- Type: [e.g., REST API, web app, CLI tool]
- Auth method: [e.g., JWT, OAuth, API key, session]
- Data sensitivity: [e.g., handles PII, financial data, public only]
- Runtime: [e.g., Node.js on AWS Lambda, Python on Heroku]

**Check for these vulnerability classes (OWASP Top 10 + extras):**

1. **Injection** — SQL, NoSQL, command injection, LDAP injection
2. **Broken Authentication** — weak tokens, missing expiry, insecure storage
3. **Sensitive Data Exposure** — plaintext secrets, unencrypted PII, verbose errors
4. **Broken Access Control** — missing authz checks, IDOR, privilege escalation paths
5. **Security Misconfiguration** — default creds, open CORS, missing security headers
6. **XSS / CSRF** — unescaped output, missing CSRF tokens
7. **Insecure Deserialization** — untrusted JSON/pickle/XML parsing
8. **Logging & Monitoring Gaps** — security events not logged, sensitive data in logs
9. **Dependency risks** — obvious use of known-vulnerable patterns
10. **Business logic flaws** — race conditions, TOCTOU, negative values, replay attacks

**Output:**
For each finding:
- **[CRITICAL/HIGH/MEDIUM/LOW]** Vulnerability type
- Location (line/function name)  
- Attack scenario: how would an attacker exploit this?
- Remediation: specific code fix or pattern to use
- CVSS estimate if applicable

End with a prioritized remediation roadmap (fix these first → these next → these when time allows).
```

---

## Tips
- Run on auth middleware and input validation code first — highest ROI
- For APIs, also paste your route definitions so the model sees the full request flow
- Follow up with: "Write the unit tests that would catch each of these vulnerabilities"
