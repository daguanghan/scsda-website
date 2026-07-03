# SCSDA English Site QA Report

Date: 2026-07-03

Repository: `https://github.com/daguanghan/scsda-website`

Production site: `https://scsda.cn/`

Previous review site: `https://ultraclaw.space/`

Latest checked branch: `main`

Current review source version: `staging-ready-2026-07-01-v3`

Current stable review tag: `staging-ready-2026-07-01-v3`

For the current verified production domain, run:

```bash
npm run verify:production
```

## Summary

The SCSDA English site has been cut over to `scsda.cn` on GitHub Pages after
explicit user approval. HTTPS is serving the production site and HTTPS
enforcement is enabled in GitHub Pages.

## Build And Deployment

| Check | Result |
|---|---|
| Local `npm run build` | Pass |
| Generated pages | 19 HTML pages: 18 content pages plus `404.html`; `robots.txt` and `sitemap.xml` also generated |
| GitHub Actions latest deployment | Success |
| GitHub Pages custom domain | `scsda.cn` |
| Production access | `https://scsda.cn/` returns 200 from GitHub Pages |
| `www` behavior | `https://www.scsda.cn/` redirects to `https://scsda.cn/` |
| HTTPS | Certificate approved and HTTPS enforcement enabled |
| Production dependency audit | 0 vulnerabilities |

## Live Page QA

Browser-level QA was run against the live site after the first deployment and
against local preview after production metadata updates. A further live visual
QA pass was run after the Leadership positioning updates and GitHub Pages
workflow maintenance.

| URL | Status | Result |
|---|---:|---|
| `https://ultraclaw.space/` | 200 | Pass |
| `https://ultraclaw.space/about/` | 200 | Pass |
| `https://ultraclaw.space/leadership/` | 200 | Pass |
| `https://ultraclaw.space/research/` | 200 | Pass |
| `https://ultraclaw.space/projects/` | 200 | Pass |
| `https://ultraclaw.space/outputs/` | 200 | Pass |
| `https://ultraclaw.space/legacy/` | 200 | Pass |
| `https://ultraclaw.space/contact/` | 200 | Pass |
| `https://ultraclaw.space/en/` | 200 | Pass |
| `https://ultraclaw.space/en/about/` | 200 | Pass |
| `https://ultraclaw.space/en/leadership/` | 200 | Pass |
| `https://ultraclaw.space/en/research/` | 200 | Pass |
| `https://ultraclaw.space/en/projects/` | 200 | Pass |
| `https://ultraclaw.space/en/outputs/` | 200 | Pass |
| `https://ultraclaw.space/en/legacy/` | 200 | Pass |
| `https://ultraclaw.space/en/contact/` | 200 | Pass |

Additional browser QA:

- Broken images: none detected.
- Horizontal overflow: none detected.
- Current live visual QA checked key pages across desktop, tablet and mobile
  viewports: Home, About, Leadership, Research, Projects, Outputs, Contact, and
  `/en/` paths.
- Current live visual QA confirmed visible navigation, non-empty page titles,
  strategic positioning text, and risk-boundary language on checked pages.
- `/en/` homepage hero links remain inside `/en/` paths.
- Custom 404 route returns HTTP 404 and renders the SCSDA fallback page.
- `robots.txt` and `sitemap.xml` are generated for the current review domain.
- `https://www.ultraclaw.space/` redirects/serves the same site.
- Homepage title: `Smart Cities and Sustainable Development Academy`.
- `/en/` navigation remains within `/en/` paths.

## Content QA

The site follows the agreed strategic positioning:

- It is an SCSDA institutional research-platform website, not a personal-only
  promotional site.
- It presents SCSDA's public research areas, platform history, selected outputs,
  and formal leadership context.
- It uses cautious leadership language such as `founder` and `founding
  executive lead`.
- It avoids government-official, public-security, military, confidential,
  surveillance and over-claiming language.
- It explicitly presents `scsda.cn` as an institutional research-platform site,
  rather than as a personal-only digital construction portfolio.
- It uses `externally supported platform-construction project` wording for
  platform funding/delivery evidence to reduce government-backdrop ambiguity.
- Legacy Chinese-site material is reused selectively as public historical
  evidence, not translated wholesale.

## Design QA Notes

The current design has been checked with a live browser on desktop, tablet and
mobile. The observed visual direction is suitable for an academic and
institutional evidence site:

- The first screen strongly signals SCSDA and uses preserved public research
  imagery rather than a stock-like hero.
- The palette is restrained and professional, with academic green/teal, white,
  ink text and amber accents rather than a single-hue or decorative gradient
  treatment.
- Cards are used for repeated evidence items and project summaries, not as
  nested page-section decoration.
- Mobile navigation wraps cleanly without horizontal scrolling.
- Page content remains readable on mobile and uses page-specific research,
  project, output and contact sections.
- Requested design skills were installed locally for the current refinement
  pass: Impeccable (`pbakaus/impeccable`) and Taste Skill
  (`Leonxlnx/taste-skill`, `design-taste-frontend`).
- Impeccable detector findings were addressed by replacing the default `Inter`
  stack and removing the thick left-stripe callout pattern.
- `PRODUCT.md`, `DESIGN.md`, `DESIGN_SKILLS.md` and `.impeccable/design.json`
  now preserve the design strategy for future site updates.

## Current Formal Domain State

Authoritative DNS checks after the approved cutover show:

```text
scsda.cn      A      185.199.108.153
scsda.cn      A      185.199.109.153
scsda.cn      A      185.199.110.153
scsda.cn      A      185.199.111.153
www.scsda.cn  CNAME  daguanghan.github.io
```

Immediate access checks:

```text
https://scsda.cn/       200
https://www.scsda.cn/   301 -> https://scsda.cn/
https://scsda.cn/en/    200
https://www.scsda.cn/en/ 301 -> https://scsda.cn/en/
```

## Production Verification

`npm run verify:production` passes for DNS, HTTPS URLs, production content,
`robots.txt`, and `sitemap.xml`.
