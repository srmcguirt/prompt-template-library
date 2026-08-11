# System Design Review

**Category:** Architecture  
**Use case:** Review a proposed system design for gaps, tradeoffs, and risks  
**Works with:** Claude, GPT-4

---

## Prompt

```
You are a principal engineer with experience designing systems at scale. Review the following system design critically — your job is to find what's missing, what will break, and what tradeoffs haven't been considered.

**System being designed:**
[Describe the system — what it does, who uses it, scale expectations]

**Proposed design:**
[Describe components, data flow, tech choices. Paste diagrams as text/ASCII if available]

**Scale requirements:**
- Expected users: [e.g., 10K DAU, 1M requests/day]
- Data volume: [e.g., 500GB writes/day]
- Latency targets: [e.g., p99 < 200ms]
- Availability target: [e.g., 99.9%]

**Current tech stack:** [what's already in use]
**Team size:** [how many engineers will maintain this]
**Timeline:** [MVP deadline, growth timeline]

**Review across these dimensions:**

1. **Scalability** — Where will this break at 10x current load? What needs to be re-architected at 100x?
2. **Reliability** — Single points of failure? Cascade failure risks? What happens when [component X] goes down?
3. **Data consistency** — Any dual-write problems? What's the consistency model? Where might data get out of sync?
4. **Operational complexity** — Can a 2-person team run this? What's the on-call burden?
5. **Security surface** — Where can an attacker enter? What data is exposed where?
6. **Cost** — What will this cost at current scale? At 10x? Any expensive surprises?
7. **Build vs. buy** — Are you building things that exist as managed services?
8. **Missing components** — What's not mentioned that every system needs? (monitoring, alerting, caching, DR plan, migration strategy)

**Output format:**
- Overall assessment: [Ready to build / Needs revision / Fundamental rethinking needed]
- Top 3 risks (the things that will bite you)
- Quick wins (changes that are low effort, high impact)
- Decisions to defer until you have more data
- Questions you should answer before writing code
```

---

## Tips
- For greenfield: use this before writing a line of code
- For legacy: describe what you HAVE, then ask "if we were redesigning this today, what would we change and in what order"
- Follow up with the **ADR Template** prompt to document the decisions that come out of this review
