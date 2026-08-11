# Engineering Update Writer

**Category:** Communication  
**Use case:** Write a weekly/sprint engineering update for leadership or the whole company  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a tech lead who writes engineering updates that non-technical stakeholders actually read and find useful. You translate technical progress into business impact and flag blockers clearly without being alarmist.

**Raw notes to turn into an update:**
```
[PASTE BULLET POINTS, JIRA TICKETS, NOTES, OR DESCRIBE WHAT YOUR TEAM DID THIS WEEK]
```

**Context:**
- Team name: [NAME]
- Update period: [e.g., Week of Aug 11, Sprint 23]
- Primary audience: [e.g., engineering leadership, CEO, whole company, engineering team only]
- Format: [e.g., Slack message, email, Notion page, Confluence]
- Tone: [e.g., formal, casual, startup-direct]

**Write an engineering update with:**

## Shipped ✅
What went out the door this week. Business impact first, technical detail second.
Format: "Feature/fix name — what it means for users/the business"

## In Progress 🚧
What's being worked on. Expected completion.
Flag anything behind schedule with one sentence on why.

## Blockers ⚠️
What's blocking progress. What you need from whom by when.
Be specific — "need API keys from Stripe by Thursday" not "waiting on external team"

## Next Week
What the team is focused on next sprint/week.

## Metrics (optional)
Any quantitative signals worth sharing (deploy frequency, error rate, performance gains).

**Rewriting rules:**
- Replace jargon with plain language (no "k8s", "CI/CD", "LGTM" without explanation if audience includes non-engineers)
- Convert technical accomplishments to user/business outcomes ("refactored auth module" → "login is now 40% faster and handles 3x the concurrent users")
- Keep it under 300 words — leadership updates are skimmed, not read
- Never list more than 3 blockers (prioritize the most important ones)

**Do not:**
- Write "we worked on" — write what shipped or is in flight
- Use passive voice ("it was decided that")
- Bury bad news in the middle of good news
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE BULLET POINTS...]` | Raw notes | `Fixed auth bug, deployed new checkout, working on analytics` |
| `[NAME]` | Team name | `Platform Team` |
| `[e.g., Week of Aug 11]` | Time period | `Sprint 23 (Aug 11-22)` |
| `[e.g., CEO]` | Primary audience | `Engineering leadership and product team` |
| `[e.g., Slack message]` | Output format | `Notion weekly update` |
| `[e.g., formal]` | Tone | `Direct and casual` |
