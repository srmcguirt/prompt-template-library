# Architecture Decision Record (ADR) Generator

**Category:** Architecture  
**Use case:** Document an architectural decision with proper context and tradeoffs  
**Works with:** Claude, GPT-4

---

## Prompt

```
Help me write an Architecture Decision Record (ADR) for a decision we just made.

**Decision:** [What did we decide? e.g., "Use PostgreSQL instead of MongoDB for user data"]

**Context:**
- What problem were we solving?
- What were the constraints? (team skills, existing infrastructure, timeline, budget)
- What triggered this decision now?

**Options we considered:**
For each option we evaluated:
- Option name
- Why we considered it
- Key pros
- Key cons
- Why we didn't choose it (or did)

**The decision we made:** [restate clearly]

**Consequences:**
- What gets easier because of this decision?
- What gets harder?
- What do we need to do to implement this? (migrations, training, tooling)
- What do we give up?
- What future decisions does this constrain?

**Who was involved:** [decision makers, date]

**Write a professional ADR using the standard format:**
- Title: ADR-[number]: [short title]
- Status: [Proposed / Accepted / Deprecated / Superseded]
- Context (problem statement and background)
- Decision (what we decided and why)
- Consequences (positive, negative, neutral)
- Alternatives considered (table format)
- Notes / open questions

Make it concise but complete. Someone reading this in 2 years should understand exactly why we made this choice without needing to ask anyone.
```

---

## Example Usage

> Decision: Use Redis for session storage instead of database sessions
> Context: Our PostgreSQL sessions table is causing lock contention at 50K concurrent users...

---

## Tips
- Run this immediately after a design meeting while context is fresh
- Store ADRs in `/docs/decisions/` in your repo — they're invaluable during onboarding
- Use the **System Design Review** prompt first to surface the decision, then this to document it
