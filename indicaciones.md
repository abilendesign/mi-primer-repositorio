---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
license: See LICENSE.txt
---

# Frontend Design Skill (Production & Public-Repo Safe)

This document guides the creation of distinctive, production-grade frontend interfaces that avoid generic “AI slop” aesthetics. It focuses on intentional visual direction, strong craft, accessibility, and maintainable implementation.

## Security & Privacy (CRITICAL)

- **Never include secrets in code or examples**, including (but not limited to): API keys, tokens, passwords, private URLs, service role keys, client secrets, certificates, or `.env` values.
- **Always reference secrets via environment variables** (e.g., `process.env.SERVICE_KEY`) and document them in a safe way (e.g., `.env.example` with placeholder values).
- **Do not paste**: `.env`, `*.pem`, `*.key`, `BEGIN PRIVATE KEY`, bearer tokens, or any credential-like strings.
- If a feature requires credentials, provide:
  - a safe placeholder,
  - the env var name,
  - a short setup note (without real values).

## Design Thinking

Before coding, understand the context and commit to a **BOLD aesthetic direction**:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Choose an extreme and execute it with intention:
  - brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined,
  - playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric,
  - soft/pastel, industrial/utilitarian, etc.
- **Constraints**: Framework, performance targets, SEO, accessibility, responsiveness, browser support.
- **Differentiation**: What makes this **unforgettable**? Identify one signature idea and build the design around it.

**CRITICAL:** Choose one clear conceptual direction and execute it precisely. The key is intentionality, not intensity.

## Implementation Standards

Produce working code (HTML/CSS/JS, React, Vue, etc.) that is:

- **Production-grade and functional**
- **Visually striking and memorable**
- **Cohesive with a clear aesthetic point-of-view**
- **Refined in every detail**
- **Accessible** (keyboard navigation, focus states, contrast, semantic HTML/ARIA when needed)

### Code Quality

- Favor clear component boundaries and sensible file structure.
- Use meaningful naming and consistent patterns.
- Avoid unnecessary dependencies; keep bundle size in mind.
- Prefer progressive enhancement where possible.
- Add comments for non-obvious logic and design intent.

## Frontend Aesthetics Guidelines

Focus on the following pillars:

### Typography
- Choose fonts that feel intentional and characterful.
- Pair a distinctive display font with a refined body font.
- Avoid defaulting to the same overused choices across projects.
- Use responsive type scales and carefully tuned line-height/letter-spacing.

### Color & Theme
- Commit to a cohesive palette.
- Use CSS variables/tokens for consistency (`--bg`, `--fg`, `--accent`, etc.).
- Prefer bold, confident color decisions over timid, evenly distributed palettes.
- Ensure contrast meets accessibility requirements (WCAG guidance).

### Motion
- Use motion for impact and micro-interactions, not noise.
- HTML/CSS: prioritize CSS-first animations when feasible.
- React: use a motion library when appropriate.
- High-impact moments > scattered effects:
  - a polished page load with staggered reveals can outperform many small animations.
- Keep motion respectful:
  - support reduced motion (`prefers-reduced-motion`).

### Spatial Composition
- Use unexpected but purposeful layouts:
  - asymmetry, overlap, diagonal flow, grid breaks, controlled density, or generous negative space.
- Maintain a strong hierarchy and rhythm.
- Ensure responsive behavior is intentional (not “stack and pray”).

### Backgrounds & Visual Details
- Create atmosphere and depth beyond flat colors:
  - gradient meshes, subtle noise textures, geometric patterns,
  - layered transparencies, dramatic shadows, decorative borders,
  - grain overlays, or custom cursors (when it truly fits).
- Avoid cliché treatments and default gradients that feel generic.

## What to Avoid

Never ship generic “template” aesthetics:
- Overused font families as a default choice (system fonts or common “safe” defaults) unless the concept demands it.
- Predictable layouts and cookie-cutter component patterns.
- Clichéd color schemes and trendy gradient-on-white defaults.
- Random UI decoration that doesn’t serve the concept.

## Matching Complexity to Vision

- **Maximalist concepts** may require elaborate code: layered visuals, complex motion, rich interactions.
- **Minimal/refined concepts** require restraint: immaculate spacing, subtle motion, precise typography.
- Elegance comes from executing the chosen direction well.

## Output Expectations

When implementing a UI:
- Provide complete, runnable code for the requested stack.
- Include concise setup instructions if needed.
- Explain any non-obvious design decisions briefly.
- Include accessibility notes (focus states, keyboard behavior, contrast).
- Do **not** include secrets or real credentials—use placeholders and environment variables only.
