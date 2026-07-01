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

The intended future canonical English path is:

```text
https://scsda.cn/en/
```

GitHub Actions builds and deploys the site from the `main` branch. See `DEPLOYMENT.md`.

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
