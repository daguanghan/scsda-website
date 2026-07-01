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

For the current operational handoff, see `HANDOFF.md`.

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
