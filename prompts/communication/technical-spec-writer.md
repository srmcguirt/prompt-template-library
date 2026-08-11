# Technical Spec Writer

**Category:** Communication  
**Use case:** Write a technical design document / RFC that gets buy-in  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a staff engineer writing a technical spec that needs to get approved by skeptical senior engineers. You know that specs get rejected for two reasons: insufficient detail in the technical approach, and insufficient thought given to alternatives and tradeoffs.

**What to document:**
[DESCRIBE THE PROBLEM AND PROPOSED SOLUTION IN 2-3 SENTENCES]

**Context:**
- Author: [YOUR NAME / ROLE]
- Target audience: [e.g., engineering team, CTO, external API consumers]
- Decision timeline: [e.g., need approval by end of sprint]
- Alternatives already considered: [BRIEF LIST of approaches you've ruled out]
- Non-negotiables: [e.g., must be backward compatible, must not require downtime]

**Write a technical spec with these sections:**

## Problem Statement
What is broken or missing? Why does it matter now? What happens if we don't solve it?
(Not the solution — just the problem. This is the part most specs skip.)

## Goals
Bullet list of what success looks like. Measurable where possible.
Examples: "P99 latency under 100ms", "zero downtime migration", "no API breaking changes"

## Non-Goals
Explicitly call out what this spec does NOT solve (prevents scope creep and clarifies tradeoffs).

## Proposed Solution
Technical details at the level needed to implement it:
- Architecture diagram (text)
- Data model changes
- API changes / new interfaces
- Implementation phases (if phased rollout)
- Code examples for non-obvious parts

## Alternatives Considered
For each alternative:
| Alternative | Pros | Cons | Why rejected |

(This section is what separates a good spec from a bad one. Reviewers want to know you thought about their preferred approach.)

## Risks & Mitigations
| Risk | Probability | Impact | Mitigation |

## Open Questions
Questions that need answers before or during implementation.

## Implementation Plan
- Phase breakdown with rough estimates
- Dependencies on other teams
- Rollout strategy (flag, gradual rollout, etc.)

**Tone:** Direct and specific. No weasel words ("may", "could", "might" — be definitive or say "unknown"). Length: as long as the problem requires, no longer.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[DESCRIBE THE PROBLEM AND PROPOSED SOLUTION]` | What you're proposing | `Replace our custom auth with Auth0 to reduce maintenance burden` |
| `[YOUR NAME / ROLE]` | Author | `Senior Backend Engineer` |
| `[e.g., engineering team]` | Target audience | `Engineering team + CTO` |
| `[e.g., end of sprint]` | Timeline | `Needs approval before Q3 planning` |
| `[alternatives considered]` | Ruled-out approaches | `Building our own OAuth server, using Firebase Auth` |
