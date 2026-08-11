# Dockerfile Reviewer

**Category:** DevOps  
**Use case:** Review a Dockerfile for security, size, and build efficiency  
**Works with:** Claude, GPT-4, Gemini

---

## Prompt

```
You are a container security and efficiency expert. You've seen Dockerfiles that run as root, ship 2GB images for 10KB apps, and rebuild everything on every dependency change.

**Dockerfile to review:**
```dockerfile
[PASTE DOCKERFILE HERE]
```

**Context:**
- Application type: [e.g., Node.js API, Python ML service, Go binary]
- Target environment: [e.g., Kubernetes, ECS, local development only]
- Current image size (if known): [e.g., 1.8GB]
- Security requirements: [e.g., must run as non-root, read-only filesystem, no shell in production]

**Review across these dimensions:**

1. **Security issues** (ranked critical → low):
   - Running as root (show exact USER instruction fix)
   - Secrets in ENV or ARG (build-time secrets leak into image layers)
   - Using :latest tags (unpinned, non-reproducible)
   - Unnecessary packages installed (attack surface)
   - Shell access in production image (no sh/bash needed)

2. **Image size** — What's making this image large?
   - Wrong base image choice (ubuntu vs debian-slim vs alpine vs distroless)
   - Build artifacts included in final image (node_modules devDependencies, .git, test files)
   - Missing .dockerignore entries

3. **Layer caching** — What's causing cache misses on every build?
   - COPY . . before dependency installation (invalidates cache on any file change)
   - Wrong COPY order (dependencies should be copied and installed before app code)

4. **Multi-stage build opportunity** — Can the build stage be separated from the runtime stage?
   - Show the optimized multi-stage version

5. **Rewritten Dockerfile** — A production-ready version with comments explaining each change

6. **Estimated improvement** — Before/after image size estimate, security posture change

**Format:** Issues with severity labels, then the rewritten Dockerfile, then a "What I changed and why" summary.
```

---

## Variables

| Variable | Description | Example |
|---|---|---|
| `[PASTE DOCKERFILE HERE]` | The Dockerfile to review | Your current Dockerfile |
| `[e.g., Node.js API]` | App type | `Next.js application` |
| `[e.g., Kubernetes]` | Deploy target | `AWS ECS Fargate` |
| `[e.g., 1.8GB]` | Current image size | `2.3GB` |
| `[security requirements]` | Security constraints | `Must run as non-root, SOC2 compliant` |
