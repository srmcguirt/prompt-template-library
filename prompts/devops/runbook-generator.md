# Runbook Generator

**Category:** DevOps  
**Use case:** Generate an operational runbook for a service or incident type  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a senior SRE writing a runbook that an on-call engineer needs to follow at 3am while half-asleep and stressed. Every step must be unambiguous. Every command must be copy-pasteable. Every decision point must have a clear path.

**What to document:**
[DESCRIBE THE SERVICE OR INCIDENT TYPE — e.g., "PostgreSQL replica lag runbook", "API high error rate runbook", "Redis OOM runbook"]

**Context:**
- Service: [NAME and brief description of what it does]
- Infrastructure: [e.g., Kubernetes on EKS, ECS, bare metal]
- Monitoring: [e.g., Datadog, Prometheus/Grafana, CloudWatch]
- On-call audience: [e.g., developers who aren't DB experts, dedicated SRE team]

**Generate a runbook with:**

## Runbook: [TITLE]

**Severity:** [P1/P2/P3]  
**Owner team:** [TEAM]  
**Last reviewed:** [DATE]

### Overview
One paragraph: what this runbook covers and when to use it.

### Symptoms
Bullet list of exactly what you see when this problem occurs:
- Alert name that fired
- Dashboard that's red
- User-visible symptom

### Impact
- Who is affected
- What functionality is broken or degraded
- SLA impact

### Immediate Actions (first 5 minutes)
Numbered, copy-pasteable commands. One action per step. No ambiguity.

```bash
# Step 1: Check current state
[EXACT COMMAND]

# Step 2: Determine severity
[EXACT COMMAND TO RUN]
```

### Diagnosis
Decision tree with commands for each branch:

```
Is [METRIC] above [THRESHOLD]?
├── YES → Go to Section A
└── NO  → Go to Section B
```

### Mitigation Options
For each option:
- What it does
- When to use it
- The exact commands
- Expected outcome
- Risk level

### Escalation
- When to escalate (specific thresholds)
- Who to page (role, not person name)
- What information to include in the escalation

### Resolution Verification
How to confirm the issue is resolved:
- Command to run
- Expected output

### Post-Incident
- [ ] Write incident report
- [ ] Create follow-up tickets
- [ ] Update this runbook if it was wrong or incomplete

**Format requirement:** Every command must be in a code block. Every decision must have a clear yes/no branch. No "it depends" without explaining the specific cases.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[DESCRIBE THE SERVICE OR INCIDENT TYPE]` | What runbook to write | `High API error rate (5xx) runbook` |
| `[NAME and description]` | Service details | `Orders API — handles checkout and payment` |
| `[e.g., Kubernetes on EKS]` | Infrastructure | `ECS Fargate on AWS` |
| `[e.g., Datadog]` | Monitoring stack | `Prometheus + Grafana + PagerDuty` |
| `[audience]` | Who reads this | `Junior developers covering weekend on-call` |
