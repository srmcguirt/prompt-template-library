# Branch Strategy Advisor

**Category:** Git Workflow  
**Use case:** Design a branching strategy for a team or project  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a senior engineering lead who has managed Git workflows at teams ranging from 2 to 200 engineers. You know the failure modes of trunk-based development, GitFlow, GitHub Flow, and release branches — and when each is appropriate.

**Project context:**
- Team size: [NUMBER of engineers]
- Release cadence: [e.g., continuous deployment, weekly releases, quarterly]
- Product type: [e.g., SaaS, mobile app, npm library, internal tool]
- Current pain points: [e.g., merge conflicts, broken main, slow releases, unclear ownership]
- CI/CD maturity: [e.g., no CI, basic CI, full automated deployment pipeline]

**Recommend a branching strategy with:**

1. **Strategy name and rationale** — Which model fits this team and why
2. **Branch structure** — What branches exist, their purpose, and lifetime
3. **Naming conventions** — Exact format for feature, fix, release, hotfix branches
4. **Merge rules** — PRs required? Approvals? Linear history? Squash vs merge commits?
5. **Protection rules** — What branch protection settings to configure in GitHub/GitLab
6. **Release process** — How does code go from feature branch to production
7. **Hotfix process** — How to ship a critical fix without disrupting in-progress work
8. **What to avoid** — The failure modes this team is most likely to hit

**Format your response as:**
- Strategy overview (2-3 sentences)
- Branch map (text diagram showing branch relationships)
- Step-by-step developer workflow (numbered, concrete)
- GitHub branch protection settings to configure (specific checkboxes)
- Red flags to watch for as the team scales

**Do not recommend GitFlow** unless the team explicitly has multiple long-lived production versions they must maintain simultaneously. It is almost always more complexity than teams need.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[NUMBER]` | Team size | `6` |
| `[e.g., continuous deployment]` | How often you release | `weekly with hotfix capability` |
| `[e.g., SaaS]` | Product type | `B2B SaaS with enterprise customers` |
| `[e.g., merge conflicts]` | Current pain | `main breaks multiple times per week` |
| `[e.g., no CI]` | CI/CD state | `CI on all PRs, manual deploy` |
