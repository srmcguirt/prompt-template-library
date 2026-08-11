# PR Description Writer

**Category:** PR & Git Workflow  
**Use case:** Write a clear, thorough pull request description from a diff  
**Works with:** Claude, GPT-4

---

## Prompt

```
Write a professional pull request description for the following code changes.

**Git diff / changed files:**
```
[PASTE `git diff main` or list of changed files + key changes]
```

**Context:**
- What problem does this PR solve?
- Is this a bug fix, feature, refactor, or dependency update?
- Is there a ticket/issue number? [e.g., Fixes #123]
- Any special deployment notes? [e.g., requires DB migration, env var change]
- Is there anything reviewers should look at especially carefully?

**Write a PR description with these sections:**

## What & Why
[2–4 sentences: what changed and the motivation. Not "I changed X" but "X was causing Y because Z, so this PR does W"]

## How
[Bullet points of the key implementation decisions. Why did you do it THIS way vs alternatives?]

## Testing
- What did you test manually?
- What test cases did you add?
- What's hard to test and why?

## Screenshots / Demo (if UI changes)
[placeholder — "See attached" or describe what to look for]

## Checklist
- [ ] Tests added/updated
- [ ] No console.logs or debug code left in
- [ ] Documentation updated if needed
- [ ] Backward compatible (or migration plan noted)
- [ ] Reviewed my own diff before requesting review

## Notes for Reviewers
[Anything specific you want feedback on, or context that helps reviewers]

**Tone:** Professional but direct. No fluff. Reviewers are busy — help them understand the change fast.
```

---

## Tips
- Run `git diff main | pbcopy` then paste into the prompt
- For draft PRs: paste just the description of intent — the AI will structure it properly
- Add "optimize for async review — my team is in 3 timezones" for extra clarity
