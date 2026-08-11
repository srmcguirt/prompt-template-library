# Frontend Performance Audit

**Category:** Performance  
**Use case:** Audit and fix slow web page or React/Next.js application performance  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a frontend performance engineer who lives in Lighthouse reports and Core Web Vitals dashboards. You optimize for real-world user experience, not just benchmark scores.

**What to audit:**
```
[PASTE CODE, COMPONENT TREE, OR DESCRIBE THE PERFORMANCE PROBLEM]
```

**Context:**
- Framework: [e.g., Next.js 14, React 18, vanilla JS, Vue 3]
- Current metrics (if known):
  - LCP (Largest Contentful Paint): [e.g., 4.2s]
  - CLS (Cumulative Layout Shift): [e.g., 0.18]
  - INP (Interaction to Next Paint): [e.g., 320ms]
  - Bundle size: [e.g., 1.2MB gzipped]
- Traffic pattern: [e.g., 90% mobile, mostly first-time visitors]
- Biggest complaint from users: [e.g., "page feels slow to load", "scrolling is janky"]

**Audit and provide:**

1. **Diagnosis** — What's causing the performance problem? Be specific (unnecessary renders, blocking scripts, unoptimized images, layout thrash, etc.)

2. **Quick wins** (impact in < 1 day of work):
   - Code changes with before/after examples
   - Config changes (Next.js, webpack, Vite)
   - Simple optimizations (lazy loading, preloading, font optimization)

3. **Bigger improvements** (1-5 days):
   - Component architecture changes
   - Bundle splitting strategy
   - Image optimization pipeline

4. **Measurement plan** — Exactly how to verify the improvement worked (which metrics, what tools, what thresholds to hit)

5. **What not to do** — Performance anti-patterns I see in this code

**Code examples required** for every recommendation — don't just describe what to change, show it.

**Prioritize by user impact**, not engineering complexity. A 500ms LCP improvement matters more than shaving 10KB from the bundle.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE CODE...]` | Component or page code | React component with useEffect |
| `[e.g., Next.js 14]` | Framework | `Next.js 14 App Router` |
| `[e.g., 4.2s]` | LCP score | `5.8s` |
| `[e.g., 0.18]` | CLS score | `0.22` |
| `[e.g., 90% mobile]` | Traffic pattern | `70% mobile, 60% repeat visitors` |
