# SCSDA Website Handoff

Date: 2026-07-01

This handoff records the current operating state for the SCSDA English website,
the staging deployment, the future `scsda.cn` cutover, and the routine update
workflow.

## Current Purpose

The site is an English-first institutional research-platform website for Smart
Cities and Sustainable Development Academy. It supports Dr Daguang Han's UK and
European academic applications by evidencing research-platform leadership in
digital built environments, smart infrastructure, BIM, digital twins, sensing,
AIoT and sustainable urban systems.

The public positioning is:

```text
SCSDA is an institutional research-platform website.
It supports Dr Han's academic case through evidence-backed platform leadership,
not through personal-only promotion.
```

## Repository And Workspace

Repository:

```text
https://github.com/daguanghan/scsda-website
```

Local workspace:

```text
/Users/daguanghan/Desktop/HDG-application/HDG 网站/01-scsda-cn-academy-website/scsda-website
```

Preserved old-site source material:

```text
/Users/daguanghan/Desktop/HDG-application/HDG 网站/01-scsda-cn-academy-website/captured-hkdsn99/snapshots/2026-07-01_021148_www-scsda-cn_public
```

## Current Deployment

Staging domain:

```text
https://ultraclaw.space/
https://www.ultraclaw.space/  -> redirects to https://ultraclaw.space/
```

Important staging pages:

```text
https://ultraclaw.space/
https://ultraclaw.space/leadership/
https://ultraclaw.space/evidence/
https://ultraclaw.space/research/
https://ultraclaw.space/projects/
https://ultraclaw.space/outputs/
https://ultraclaw.space/legacy/
https://ultraclaw.space/contact/
https://ultraclaw.space/en/
https://ultraclaw.space/en/evidence/
```

Discovery files:

```text
https://ultraclaw.space/robots.txt
https://ultraclaw.space/sitemap.xml
```

Deployment platform:

```text
GitHub Pages
```

Deployment workflow:

```text
.github/workflows/deploy.yml
main branch -> npm ci -> npm run build -> deploy dist to GitHub Pages
```

Custom domain for the current staging deployment:

```text
public/CNAME = ultraclaw.space
```

## Current Formal Domain State

No `scsda.cn` DNS cutover has been made.

Current read-only DNS state:

```text
scsda.cn      -> hkdsn99.maohao.vip -> 154.12.23.232
www.scsda.cn  -> hkdsn99.maohao.vip -> 154.12.23.232
```

This is expected until the user explicitly approves formal DNS cutover.

## Future Production Target

Preferred future public entry point:

```text
https://scsda.cn/
https://www.scsda.cn/
```

Compatibility paths retained after cutover:

```text
https://scsda.cn/en/
https://www.scsda.cn/en/
```

Do not make DNS changes unless the user explicitly says:

```text
确认修改 scsda.cn DNS
```

Before editing DNS, show the current records, planned records, and expected
impact again.

## Planned DNS Records After Approval

Recommended GitHub Pages records:

```text
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    daguanghan.github.io
```

Records expected to be replaced or removed:

```text
@      -> hkdsn99.maohao.vip
www    -> hkdsn99.maohao.vip
```

Important cutover note:

- GitHub Pages generally uses one primary custom domain for a repository.
- Moving the repository from `ultraclaw.space` to `scsda.cn` may remove the
  staging domain from this repo.
- If long-term staging is required, create a separate staging repo or deploy the
  same source to another platform later.

## Local Development Commands

Install dependencies:

```bash
npm install
```

Run local development server:

```bash
npm run dev
```

Build static site:

```bash
npm run build
```

Preview built site:

```bash
npm run preview
```

Run Astro checks:

```bash
npm run check
```

Security audit for production dependencies:

```bash
npm audit --omit=dev --audit-level=moderate
```

Read-only pre-cutover audit:

```bash
npm run audit:precutover
```

This command checks the staging URLs, records the current `scsda.cn` DNS
snapshot, prints the planned GitHub Pages DNS records, and repeats the explicit
manual approval gate. It does not change DNS or GitHub settings.

Read-only staging review:

```bash
npm run review:staging
```

This command checks all core staging pages, selected key acceptance strings,
the `/en/` compatibility paths, sensitive positive-claim traps, and optional
Playwright desktop/mobile viewport overflow. It does not change DNS or GitHub
settings.

Repeatable staging screenshots:

```bash
npm run screenshots:staging
```

This writes desktop and mobile screenshots to `qa-screenshots/current-staging/`
for visual review before formal-domain approval.

Read-only production verification after formal DNS cutover:

```bash
npm run verify:production
```

This command checks `scsda.cn` and `www.scsda.cn` DNS, HTTPS URLs and key page
content after the user-approved DNS move. Before cutover, it is expected to
fail because the formal domain still points to the legacy host.

Design context and skill notes:

```text
PRODUCT.md
DESIGN.md
DESIGN_SKILLS.md
.impeccable/design.json
```

The requested Impeccable and Taste Skill sources were installed locally for the
refinement pass. The downloaded third-party skill source files are ignored by
Git; reinstall commands are recorded in `DESIGN_SKILLS.md`.

## Content Structure

Primary data files:

```text
src/data/site.ts
src/data/research.ts
```

Primary pages:

```text
src/pages/index.astro
src/pages/about.astro
src/pages/leadership.astro
src/pages/evidence.astro
src/pages/research.astro
src/pages/projects.astro
src/pages/outputs.astro
src/pages/legacy.astro
src/pages/contact.astro
```

Compatibility `/en/` pages:

```text
src/pages/en/
```

Images:

```text
public/images/
```

Public claim control:

```text
CLAIMS_REGISTER.md
```

Staging review checklist:

```text
REVIEW_GUIDE.md
LAUNCH_DECISION_PACKET.md
COMPLETION_AUDIT.md
```

Formal cutover checklist:

```text
CUTOVER_CHECKLIST.md
DNS.md
```

## Routine Content Update Workflow

1. Decide which page should receive the update.
2. Rewrite new content into professional English for academic review.
3. Keep claims public-facing, non-confidential and source-bounded.
4. Update `CLAIMS_REGISTER.md` before publishing any strong new claim.
5. Run:

```bash
npm run build
npm run check
npm audit --omit=dev --audit-level=moderate
npm run audit:precutover
```

6. Review locally with `npm run preview` when the change affects layout.
7. Commit changes with a clear message.
8. Push to `main`.
9. Wait for GitHub Pages deployment to complete.
10. Verify the live pages on `https://ultraclaw.space/`.

## Rollback

Use Git history:

```bash
git log --oneline
git revert <commit>
git push
```

GitHub Pages redeploys automatically after the revert reaches `main`.

If DNS has already been moved to `scsda.cn` and the site fails, use the rollback
steps in `CUTOVER_CHECKLIST.md`.

## Content Safety Rules

Use:

- `nonprofit applied research organization`
- `principal responsible person`
- `founding executive lead`
- `research-platform leadership`
- `public-facing, non-confidential research summaries`
- `reported for the 2019-2023 platform-construction period`

Avoid:

- government-authorized platform
- official government academy
- public-security platform
- surveillance
- military
- confidential technology
- sensitive technology transfer
- claims that Dr Han alone completed every institutional output
- claims of awarded UK professional status that is still in preparation

## Current Known Risks

- DNS propagation can take up to 24 hours after formal cutover.
- GitHub Pages HTTPS provisioning may take up to about an hour after a new
  custom domain is accepted.
- Some visitors may temporarily see the old IIS site while others see the new
  GitHub Pages site.
- China mainland access is not the priority for this version; the site is
  optimized for international academic review and stable overseas access.
- The old Chinese ICP/hosting context should not be treated as the main strategy
  for this English academic-facing site.
