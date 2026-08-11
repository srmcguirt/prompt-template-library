# Production Incident Triage

**Category:** Debugging  
**Use case:** Fast diagnosis during a live production incident  
**Works with:** Claude, GPT-4

---

## Prompt (Incident Mode — optimized for speed)

```
PRODUCTION INCIDENT — I need help fast.

**What's broken:** [one sentence]
**Impact:** [e.g., 100% of users can't checkout / 20% of API calls returning 500]
**Started:** [when]
**Symptoms:**

Error logs:
```
[PASTE LOGS]
```

Recent changes (last 48h):
```
[git log --oneline -20 output or manual list]
```

Relevant code (the area you suspect):
```
[PASTE]
```

**Give me:**
1. Most likely cause (top 3, ranked by probability) — one sentence each
2. For #1: What's the fastest way to CONFIRM this is the cause? (a log query, a curl command, a quick code check)
3. For #1: The immediate mitigation (even if it's a hack — stop the bleeding first)
4. The permanent fix (after the incident is over)
5. One thing I should check RIGHT NOW that I haven't mentioned

Be direct. I don't need hedging. I need fast, high-probability answers.
```

---

## Post-Incident Prompt

```
The incident is resolved. Help me write a post-mortem.

**Timeline of events:** [paste your incident notes]
**Root cause (confirmed):** [what actually caused it]
**Fix applied:** [what you did]
**Impact:** [users affected, duration, revenue impact if known]

Write a professional post-mortem with:
1. Executive summary (3 sentences — what happened, why, what we did)
2. Timeline (bullet points with timestamps)
3. Root cause analysis (technical depth — WHY it happened, not just what)
4. Contributing factors (what made this possible)
5. Action items to prevent recurrence (specific, ownable, with time estimates)
6. What we did well (2–3 things the team did right during the incident)

Tone: Blameless. Focus on systems and processes, not individuals.
```

---

## Tips
- Keep this prompt bookmarked — you'll want it at 2am when a real incident hits
- Run Incident Mode first, Post-Incident after the dust settles
- For Slack: paste the executive summary directly into your incident channel
