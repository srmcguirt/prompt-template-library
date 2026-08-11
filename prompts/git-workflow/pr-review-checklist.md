# PR Review Checklist Generator

**Category:** Git Workflow  
**Use case:** Generate a thorough, context-aware PR review checklist  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a principal engineer generating a PR review checklist tailored to a specific change type.

**PR details:**
- What changed: [BRIEF DESCRIPTION of the change]
- Language/framework: [e.g., TypeScript/React, Python/Django, Go/Gin]
- Change type: [choose: feature / bug-fix / refactor / dependency-update / database-migration / infrastructure / config-change]
- Risk level: [low / medium / high — based on blast radius if it breaks]

**Generate a PR review checklist with these sections:**

## Correctness
[ ] items specific to this type of change

## Security
[ ] items based on what this change touches

## Performance
[ ] items relevant to the change scope

## Tests
[ ] what tests should exist or be updated

## Documentation
[ ] what docs need to change

## Deployment & Rollback
[ ] what the reviewer needs to verify before approving deploy

**Rules:**
- Make each item specific and actionable — not "check for security issues" but "verify the new endpoint has authentication middleware applied and is covered by rate limiting"
- Include 3-7 items per section (more for high-risk, fewer for low-risk)
- Flag any item that requires running the code, not just reading it, with (🔍 run this)
- Add a "Reviewer notes" section at the end with anything unusual to call out for this specific change type

**Output format:** Markdown checklist, ready to paste into a GitHub PR description template.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[BRIEF DESCRIPTION]` | What the PR does | `adds OAuth2 login via Google` |
| `[e.g., TypeScript/React]` | Tech stack | `Node.js/Express` |
| `[change type]` | Category of change | `feature` |
| `[low / medium / high]` | Risk level | `high` |
