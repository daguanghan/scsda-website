# SCSDA Website

English-first static website for Smart Cities and Sustainable Development Academy (SCSDA).

This repository presents SCSDA as a nonprofit applied research organization and public-facing, non-confidential research portfolio. It is designed to support international academic review of Dr Daguang Han's research-platform leadership in digital built environments, smart infrastructure, BIM, digital twins, sensing and sustainable urban systems.

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

Run the local claims guard before publishing sensitive wording changes:

```bash
npm run claims:guard
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

- Use cautious, evidence-backed language.
- Use `principal responsible person` and `founding executive lead` unless stronger appointment or board evidence is added.
- Do not imply SCSDA is a government website, official authority, state platform or public-security platform.
- Do not publish sensitive, confidential, military, public-security or government-decision material.
- Period-label metrics from the implementation report, for example `reported for the 2019-2023 platform-construction period`.
- Do not publish phone numbers.

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
https://scsda.cn/
```

The same English content is available from both root paths and `/en/` paths on
the review deployment. The root path is the preferred public entry point, while
`/en/` remains available as a compatibility path before DNS cutover.

GitHub Actions builds and deploys the site from the `main` branch. See `DEPLOYMENT.md`.

Before approving the formal `scsda.cn` move, review the staging site against
`REVIEW_GUIDE.md`.

For the Chinese user-facing review checklist before formal DNS cutover, see
`USER_REVIEW_CHECKLIST_ZH.md`.

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

GitHub Pages will redeploy after the revert reaches `main`.

## Updating Content

Most site content lives in:

- `src/data/site.ts`
- `src/data/research.ts`
- `src/pages/*.astro`
- `public/images/`

Before adding a strong public claim, update `CLAIMS_REGISTER.md`.
