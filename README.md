# 🧠 AI Prompt Template Library — Developer Edition

**60+ battle-tested AI prompt templates for software developers.** 
Stop writing prompts from scratch. Start getting results in seconds.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) ![Prompts](https://img.shields.io/badge/Prompts-11-orange)

> 💎 **Premium version** with 60+ prompts, video walkthroughs, Notion workspace, and monthly updates → [Get it on Gumroad →](https://srmcguirt.gumroad.com)

---

## Why this exists

You're a developer using Claude, GPT-4, or Cursor. You spend 15 minutes wrestling with prompts to get the output you need. The output is mediocre. You tweak it. It's still mediocre.

The problem isn't the model — it's the prompt.

These templates were built over months of real-world use: hundreds of code reviews, debugging sessions, architectural decisions, and PR descriptions. Each one is optimized for **developer workflows**, not marketing copy.

**What makes these different:**
- Every prompt includes: the role, the context structure, the output format, and tips for getting the best results
- Real examples with realistic outputs — not toy demos
- Designed for Claude first, tested on GPT-4 and Gemini
- Formatted for copy-paste into your AI assistant, Raycast, Alfred, or cursor rules

---

## What's included

### 🔍 Code Review (8 prompts)
| Prompt | Use case |
|--------|----------|
| Deep Code Review | Thorough PR review across correctness, security, perf, maintainability |
| Security Audit | OWASP Top 10 + business logic vulnerabilities |
| Junior Dev Feedback | Constructive, educational review for less experienced engineers |
| Performance Review | Identify bottlenecks, N+1 queries, memory leaks |
| API Contract Review | Check REST/GraphQL API design before it's permanent |
| Dependency Audit | Flag outdated, insecure, or poorly-maintained dependencies |
| TypeScript Strictness | Type safety improvements and `any` elimination |
| Database Query Review | Query optimization, index suggestions, N+1 detection |

### 🐛 Debugging (7 prompts)
| Prompt | Use case |
|--------|----------|
| Root Cause Analysis | Systematic diagnosis from stack trace to fix |
| Flaky Test Hunter | Find and fix intermittently failing tests |
| Production Incident | Fast triage when something is on fire |
| Post-Mortem Writer | Blameless post-mortem after the incident |
| Memory Leak Hunter | Diagnose memory leaks in Node.js / Python |
| Race Condition Detector | Identify async timing bugs |
| Silent Failure Finder | Find code that swallows errors without logging |

### 🏗️ Architecture (8 prompts)
| Prompt | Use case |
|--------|----------|
| System Design Review | Review a proposed design for gaps and risks |
| ADR Generator | Write Architecture Decision Records |
| API Design Review | REST/GraphQL design before implementation |
| Database Schema Review | Schema design, normalization, indexing strategy |
| Microservices Decomposition | How to break a monolith into services |
| Tech Stack Evaluation | Compare options with evidence-based tradeoffs |
| Migration Planning | Plan a major technical migration safely |
| Scalability Assessment | Where will your system break at 10x? |

### ✅ Testing (7 prompts)
| Prompt | Use case |
|--------|----------|
| Test Suite Generator | Generate comprehensive unit tests |
| Integration Test Planner | Plan integration test coverage |
| E2E Test Script | Playwright/Cypress test from user story |
| Test Data Factory | Generate realistic test fixtures |
| Contract Test Generator | API contract tests between services |
| Load Test Scenario | Design performance test scenarios |
| Mutation Testing Advisor | Find gaps in test coverage |

### 📝 PR & Git Workflow (6 prompts)
| Prompt | Use case |
|--------|----------|
| PR Description Writer | Write a clear PR description from a diff |
| Commit Message Generator | Conventional commits from your changes |
| Changelog Writer | Release notes from git log |
| PR Review Checklist | Custom checklist for your tech stack |
| Squash Strategy | Decide when/how to squash commits |
| Branch Strategy Advisor | Git flow vs trunk-based for your team |

### 🔧 Refactoring (6 prompts)
| Prompt | Use case |
|--------|----------|
| Incremental Refactor Planner | Safe step-by-step refactor plan |
| Naming Improvement | Better variable/function/class names |
| Design Pattern Advisor | Which pattern applies and how to implement |
| Dead Code Detector | Find unused code and safe removal plan |
| Complexity Reducer | Simplify overly complex functions |
| Coupling Analysis | Find tight coupling and suggest boundaries |

### 📖 Documentation (6 prompts)
| Prompt | Use case |
|--------|----------|
| API Docs Generator | OpenAPI / markdown docs from code |
| README Writer | Professional README for your project |
| Code Comment Generator | Add inline comments that explain WHY |
| Runbook Writer | Operational runbook for your service |
| Onboarding Guide | New engineer onboarding docs |
| Decision Log | Document technical decisions for posterity |

### 🤖 AI / LLM Specific (8 prompts) *(Premium)*
| Prompt | Use case |
|--------|----------|
| Prompt Optimizer | Improve any prompt for better output |
| System Prompt Writer | Write effective system prompts for AI apps |
| Eval Set Generator | Generate test cases for LLM evals |
| RAG Context Optimizer | Optimize retrieval context for RAG systems |
| Tool Spec Writer | Write tool/function specs for AI agents |
| MCP Tool Designer | Design MCP tools with proper schemas |
| Agent Workflow Designer | Plan multi-step agent workflows |
| AI Output Validator | Prompts that check AI output quality |

---

## Quick start

### Use directly (copy-paste)

1. Browse the `prompts/` directory
2. Copy the prompt block
3. Fill in the `[PLACEHOLDER]` sections
4. Paste into Claude, ChatGPT, Cursor, or your AI tool of choice

### Use as npm package

```bash
npm install @srmcguirt/prompt-templates
```

```javascript
const { prompts, extractPrompt, fill } = require('@srmcguirt/prompt-templates');

// Get the raw template (with instructions)
const template = prompts.codeReview['deep-code-review'];

// Extract just the prompt text
const promptText = extractPrompt(template);

// Fill in your variables
const ready = fill(promptText, {
 'PASTE CODE HERE': myCode,
 'Language/Framework': 'TypeScript/Next.js',
 'Purpose of this code': 'User authentication middleware',
 'Any known constraints': 'Must be backward compatible with v2 clients'
});

// Now send `ready` to your Claude/OpenAI client
```

### Use in Cursor / Claude Code

Copy any prompt into your `.cursorrules` or `CLAUDE.md` file as a named slash command.

---

## Examples

### Before (typical bad prompt):
> "Review this code"

### After (using our Deep Code Review template):
```
You are an expert senior software engineer conducting a thorough code review...
[structured output with severity ratings, line numbers, and specific fixes]
```

**Output quality improvement:** 10–15 specific actionable findings vs vague suggestions.

---

## 💎 Premium Edition — $35

The npm package includes a curated starter set. The **Gumroad premium download** includes:

- ✅ All 60+ prompts (vs 20 in the free version)
- ✅ 8 AI/LLM-specific prompts not available on npm
- ✅ Notion workspace — import all prompts into your personal knowledge base
- ✅ JSON format for programmatic use
- ✅ Video walkthrough: how to use each category effectively (45 min)
- ✅ Monthly updates — new prompts added every month
- ✅ Prompt chaining guide — how to combine prompts for complex workflows
- ✅ License for commercial use (use in your products and services)

**[Get the premium edition →](https://srmcguirt.gumroad.com)**

---

## Roadmap

- [ ] VS Code extension (right-click → AI Review)
- [ ] CLI tool: `ptp run code-review --file src/auth.ts`
- [ ] Raycast extension
- [ ] Language-specific variants (Python, Go, Rust)

---

## Contributing

Found a better prompt? Spotted an improvement? PRs welcome.

1. Fork the repo
2. Add your prompt to the appropriate category
3. Follow the template format (see `prompts/code-review/deep-code-review.md`)
4. Submit a PR

---


---

## 💼 Get the Full Version

**[Prompt Template Library — Free / $35 full on Gumroad](https://srmcguirt.gumroad.com/l/prompt-library)**

MIT licensed. No vendor lock-in. Works in Claude, GPT-4, and Cursor.

→ [Full product lineup](https://srmcguirt.dev)

---

## License

MIT — free for personal and open source use. 
For commercial use (reselling, embedding in products), see the [Premium License on Gumroad](https://srmcguirt.gumroad.com).

---

## 📬 Stay Updated

Get a free sample prompt + updates when new tools ship:

**→ [srmcguirt.dev](https://srmcguirt.dev)**
