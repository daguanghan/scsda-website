# SCSDA Website

English-first static website for Smart Cities and Sustainable Development Academy (SCSDA).

This repository presents SCSDA as a formal nonprofit applied research academy website. The public site focuses on smart cities, sustainable development, digital built environments, smart infrastructure, BIM, digital twins, sensing, AIoT and responsible public communication.

## Local Development

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

Run the read-only pre-cutover audit:

```bash
npm run audit:precutover
```

Run the read-only staging review:

```bash
npm run review:staging
```

Run the read-only staging health check for page metadata, links and assets:

```bash
npm run health:staging
```

Run the full read-only formal-domain readiness check before touching DNS:

```bash
npm run cutover:ready
```

Run the local claims guard before publishing sensitive wording changes:

```bash
npm run claims:guard
```

Run the visual asset guard before publishing page-image changes:

```bash
npm run visual:assets
```

Capture visual review screenshots for the staging site:

```bash
npm run screenshots:staging
```

After the formal `scsda.cn` DNS cutover has been approved and applied, run the
read-only production verification:

```bash
npm run verify:production
```

Preview the built site:

```bash
npm run preview
```

## Content Rules

- Use cautious, source-bounded language.
- Present SCSDA as a formal institution-facing research website, not as a self-explaining strategy page.
- Present Dr Daguang Han's role through formal leadership wording, for example: SCSDA was initiated and led by Dr Daguang Han.
- Do not imply SCSDA is a government website, official authority, state platform or public-security platform.
- Do not publish sensitive, confidential, military, public-security or government-decision material.
- Period-label metrics from the implementation report, for example `reported for the 2019-2023 platform-construction period`.
- Do not publish phone numbers.
- Use each content image intentionally and only once across public content.
- Do not use reception, government-visit or signing-event photographs as public
  evidence visuals for the English site; prefer technical platform, system,
  equipment, dashboard and project images.

## Design Context

- `PRODUCT.md` defines the institution-first product strategy.
- `DESIGN.md` defines the visual system, tokens and anti-pattern rules.
- `DESIGN_SKILLS.md` records the Impeccable and Taste Skill setup used for the
  current refinement pass.

## Deployment

The review deployment target is:

```text
https://ultraclaw.space
```

The intended future canonical English entry point is:

```text
https://scsda.cn/en/
```

The same English content is available from both root paths and `/en/` paths on
the review deployment. The formal domains `scsda.cn` and `www.scsda.cn` should
remain easy entry points after cutover, while `/en/` is the preferred English
entry path.

GitHub Actions builds and deploys the site from the `main` branch. See `DEPLOYMENT.md`.

Before approving the formal `scsda.cn` move, review the staging site against
`REVIEW_GUIDE.md`.

For the Chinese user-facing review checklist before formal DNS cutover, see
`USER_REVIEW_CHECKLIST_ZH.md`.

For the current Chinese status summary and next-step options, see
`CURRENT_STATUS_ZH.md`.

For the Chinese GNAME DNS execution runbook after approval, see
`GNAME_DNS_CUTOVER_RUNBOOK_ZH.md`.

For the current approval packet before formal DNS cutover, see
`STAGING_SIGNOFF.md`.

For the short approve, delay or rollback decision packet, see
`LAUNCH_DECISION_PACKET.md`.

For the current operational handoff, see `HANDOFF.md`.

For a requirement-by-requirement completion audit against the current objective,
see `COMPLETION_AUDIT.md`.

## Rollback

Use Git history:

```bash
git log --oneline
git revert <commit>
git push
```

The current stable pre-cutover staging tag is:

```bash
git show staging-ready-2026-07-01-v3
```

GitHub Pages will redeploy after the revert reaches `main`.

## Updating Content

Most site content lives in:

- `src/data/site.ts`
- `src/data/research.ts`
- `src/pages/*.astro`
- `public/images/`

Before adding a strong public claim, update `CLAIMS_REGISTER.md`.
