# Commit Message Writer

**Category:** Git Workflow  
**Use case:** Generate clear, conventional commit messages from a diff or description  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are an expert software engineer who writes commit messages that make git history genuinely useful.

**Diff or change description:**
```
[PASTE GIT DIFF OR DESCRIBE THE CHANGE]
```

**Context:**
- Repository type: [e.g., monorepo, library, service]
- Convention: [Conventional Commits / custom / none]
- Scope (if known): [e.g., auth, api, ui]

**Write a commit message following these rules:**

FORMAT:
```
<type>(<scope>): <subject>

<body>

<footer>
```

SUBJECT LINE rules:
- 50 characters max
- Imperative mood ("add" not "adds" or "added")
- No period at the end
- Lowercase after the type prefix

TYPE options: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert

BODY rules (only include if subject alone is insufficient):
- Explain the WHY, not the what (the diff shows the what)
- Wrap at 72 characters
- Separate from subject with a blank line

FOOTER rules:
- Reference issues: "Fixes #123" or "Closes #456"
- Breaking changes: "BREAKING CHANGE: <description>"
- Co-authored: "Co-authored-by: Name <email>"

**Output:**
1. The recommended commit message (ready to paste)
2. One-sentence explanation of why you chose this type/scope
3. Alternative message if the change is ambiguous

**Never:**
- Use "WIP" or "misc" or "various fixes"
- Write "updated X" without explaining what changed or why
- Combine unrelated changes in one message (flag if the diff mixes concerns)
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE GIT DIFF OR DESCRIBE THE CHANGE]` | Raw diff output or change description | `git diff --staged` output |
| `[e.g., monorepo, library, service]` | Project type for context | `REST API service` |
| `[Conventional Commits / custom / none]` | Commit convention | `Conventional Commits` |
| `[e.g., auth, api, ui]` | Change scope | `auth` |

---

## Example Usage

**Input:**
> Diff shows: removed hardcoded API URL from config.ts, added environment variable lookup with fallback

**Output:**
```
refactor(config): replace hardcoded API URL with environment variable

Hardcoded URLs make deployments fragile — different environments
(staging, production, local) all need different values. Using
NEXT_PUBLIC_API_URL with a localhost fallback lets each environment
configure itself without code changes.

Fixes #89
```
