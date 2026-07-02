# SCSDA English Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional English-first SCSDA website that presents the Academy as a credible nonprofit applied research platform and records formal founding leadership in an institution-first way.

**Architecture:** Use Astro as a static-site generator. Keep content structured in data files and Markdown-friendly components, copy only selected low-risk assets from the preserved Chinese site, and deploy through GitHub Pages initially to `ultraclaw.space` for review.

**Tech Stack:** Astro, plain CSS, GitHub Actions, GitHub Pages, static assets.

## Global Constraints

- Do not frame SCSDA as a government website, official authority, state platform, public-security platform, or sensitive technology-transfer platform.
- Use `principal responsible person`, `founding executive lead`, and `nonprofit applied research organization` unless documentary proof is added for any stronger appointment title.
- Do not publish phone numbers.
- Use old Chinese site photographs selectively as historical/public assets.
- Prefer `scsda.cn/en/` as the eventual canonical English URL; use `ultraclaw.space` only as the review/staging domain.
- Every public metric must be period-labelled where needed, such as "reported for the 2019-2023 platform-construction period".

---

### Task 1: Static Site Scaffold

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/styles/global.css`

**Deliverable:** Astro can build an empty but styled site.

- [ ] Create the Astro project files.
- [ ] Install dependencies with `npm install`.
- [ ] Run `npm run build`.

### Task 2: Evidence-Driven Content Model

**Files:**
- Create: `src/data/site.ts`
- Create: `src/data/research.ts`
- Create: `CLAIMS_REGISTER.md`

**Deliverable:** Public claims are separated from content rendering and mapped to evidence strength.

- [ ] Add site navigation, contact links, and limited public reference links.
- [ ] Add research themes, metrics, case studies, and output summaries.
- [ ] Add a claim register with safe wording and evidence status.

### Task 3: Core Pages

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/about.astro`
- Create: `src/pages/leadership.astro`
- Create: `src/pages/research.astro`
- Create: `src/pages/projects.astro`
- Create: `src/pages/outputs.astro`
- Create: `src/pages/contact.astro`
- Create: `src/pages/legacy.astro`

**Deliverable:** The website communicates SCSDA's institutional story and formal leadership context without overclaiming.

- [ ] Build the homepage as an English academic-research entry point.
- [ ] Build the About and Leadership pages.
- [ ] Build Research, Projects, Outputs, Contact, and Legacy pages.

### Task 4: Visual Assets and Polish

**Files:**
- Create: `public/images/...`
- Modify: `src/styles/global.css`

**Deliverable:** The site has professional visual assets, no cluttered marketing style, and a sober UK-facing academic tone.

- [ ] Copy selected old-site images into `public/images/`.
- [ ] Use image crops responsibly with descriptive alt text.
- [ ] Ensure desktop and mobile layouts are stable.

### Task 5: Documentation, GitHub, and Deployment

**Files:**
- Create: `README.md`
- Create: `DEPLOYMENT.md`
- Create: `DNS.md`
- Create: `CHANGELOG.md`
- Create: `.github/workflows/deploy.yml`

**Deliverable:** The repository is ready for GitHub-managed maintenance and GitHub Pages deployment to `ultraclaw.space`.

- [ ] Add local development and deployment documentation.
- [ ] Initialize git and commit.
- [ ] Create or connect GitHub repository `daguanghan/scsda-website`.
- [ ] Configure GitHub Pages and custom domain after build verification.

### Task 6: Verification

**Deliverable:** The staged site is reviewable and current risks are known.

- [ ] Run `npm run build`.
- [ ] Run a local preview.
- [ ] Capture desktop and mobile screenshots.
- [ ] Check key pages render and links work.
- [ ] Publish to `ultraclaw.space` or report the exact DNS/GitHub blocker if external configuration prevents completion.
