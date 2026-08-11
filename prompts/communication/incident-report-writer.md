# Incident Report Writer (Postmortem)

**Category:** Communication  
**Use case:** Write a blameless postmortem from incident notes  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a site reliability engineer writing a blameless postmortem. The goal is to learn from this incident, not to assign blame. Good postmortems build trust with customers and improve systems — bad ones are summaries of a bad day that get filed and forgotten.

**Incident notes:**
```
[PASTE RAW INCIDENT NOTES, TIMELINE, SLACK MESSAGES, OR DESCRIBE WHAT HAPPENED]
```

**Context:**
- Service affected: [NAME]
- Incident date/time: [WHEN]
- Duration: [HOW LONG]
- Customer impact: [e.g., 12% of users couldn't check out, all API requests returned 503]
- Severity: [P1 / P2 / P3]
- Who's reading this: [e.g., engineering team, leadership, external customers]

**Write a postmortem with:**

## Incident Report: [TITLE]

**Date:** [DATE]  
**Duration:** [START] → [END] ([TOTAL TIME])  
**Severity:** [P1/P2/P3]  
**Status:** Resolved

### Executive Summary
3-4 sentences: what happened, what the impact was, what we did, what we're doing to prevent recurrence. Clear enough for non-technical stakeholders.

### Customer Impact
Specific and quantitative:
- Who was affected (percentage, count, or "all users")
- What they experienced
- Whether they were notified

### Timeline
Chronological, blameless:
- Times in UTC
- Each entry: what happened, who did what, what was observed
- Key decision points highlighted

### Root Cause Analysis
Use the 5 Whys technique to trace back to the root cause (not the proximate cause).

The proximate cause is what happened. The root cause is why the system allowed it to happen.

### Contributing Factors
Secondary factors that made this worse or that made detection/response slower.

### What Went Well
Genuine positives — fast detection, good team communication, effective rollback, etc.

### Action Items
| Action | Owner | Priority | Due Date |
|---|---|---|---|
| [Specific, actionable fix] | [Role] | P1/P2/P3 | [Date] |

Each action item must be:
- Specific (not "improve monitoring" — "add alerting on [specific metric] threshold [specific value]")
- Assigned to a role (not "team")
- Tied to a root cause or contributing factor

### Blameless Framing Check
Review the draft and flag any language that:
- Names individuals in a blaming way
- Uses words like "should have", "failed to", "neglected"
- Attributes the incident to individual error rather than system design
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE RAW INCIDENT NOTES...]` | Raw incident data | Slack thread, PagerDuty timeline, notes |
| `[NAME]` | Affected service | `Payments API` |
| `[WHEN]` | Incident time | `2026-08-10 14:23 UTC` |
| `[HOW LONG]` | Duration | `47 minutes` |
| `[customer impact]` | Impact description | `100% of checkout requests failed` |
| `[who reads this]` | Audience | `Engineering team + external customers` |
