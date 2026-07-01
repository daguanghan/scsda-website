# SCSDA Staging Signoff Packet

Date: 2026-07-01

Repository: `https://github.com/daguanghan/scsda-website`

Staging site: `https://ultraclaw.space/`

Current verified site-build baseline:

```text
293b65e test: add staging screenshot capture
```

Refresh the live commit, staging URL status, current DNS snapshot and explicit
manual DNS gate with:

```bash
npm run audit:precutover
```

## Decision Needed

The English SCSDA site is ready for user review on the staging domain. The
formal `scsda.cn` cutover should happen only after the staging site is accepted.

Approval phrase required before any formal-domain DNS edit:

```text
确认修改 scsda.cn DNS
```

## What To Review

Review these pages before approving cutover:

```text
https://ultraclaw.space/
https://ultraclaw.space/leadership/
https://ultraclaw.space/evidence/
https://ultraclaw.space/research/
https://ultraclaw.space/projects/
https://ultraclaw.space/outputs/
https://ultraclaw.space/contact/
https://ultraclaw.space/en/
https://ultraclaw.space/en/evidence/
```

The site should read as:

```text
SCSDA is an institutional research-platform website.
It supports Dr Daguang Han's academic case through evidence-backed platform
leadership, not through personal-only promotion.
```

## Acceptance Criteria

Approve only if:

- The homepage clearly signals SCSDA, smart cities, digital built environments,
  smart infrastructure and sustainable urban systems.
- The site feels like an institutional research-platform website, not a
  personal-only portfolio.
- The Evidence page explains how SCSDA supports Dr Han's UK/European academic
  applications without over-claiming.
- The Leadership page uses cautious wording: `principal responsible person` and
  `founding executive lead`.
- BIM, digital twins, sensing, AIoT, smart infrastructure and sustainable
  construction are visible as coherent research themes.
- Legacy Chinese-site material is treated as historical public source material.
- No page implies official government authority, confidential access,
  public-security work, military work, surveillance, or that Dr Han alone
  completed every institutional output.

## Latest Verification

Latest local checks:

```text
npm run check              PASS
npm run build              PASS
npm run screenshots:staging PASS
npm run review:staging     PASS
npm run audit:precutover   PASS
npm audit                  PASS
Impeccable detector        PASS after removing flagged visual tells
```

Latest live checks:

```text
https://ultraclaw.space/              200
https://ultraclaw.space/evidence/     200
https://ultraclaw.space/en/           200
https://ultraclaw.space/en/evidence/  200
https://ultraclaw.space/robots.txt    200
https://ultraclaw.space/sitemap.xml   200
```

Visual QA:

- Desktop and mobile screenshots were generated locally in
  `qa-screenshots/current-staging/`.
- Screenshot set: `desktop-home.png`, `desktop-evidence.png`,
  `desktop-leadership.png`, `mobile-home.png`, `mobile-evidence.png`,
  `mobile-outputs.png`.
- Desktop, tablet and mobile checks passed for key pages.
- No broken images detected.
- No horizontal overflow detected.
- Main navigation remained visible.
- Key pages had non-empty titles and strategic positioning text.

## Current DNS Before Cutover

Read-only audit shows the formal domain still points to the legacy host:

```text
scsda.cn      CNAME/A chain -> hkdsn99.maohao.vip -> 154.12.23.232
www.scsda.cn  CNAME/A chain -> hkdsn99.maohao.vip -> 154.12.23.232
```

No `scsda.cn` DNS changes have been made.

## Planned DNS After Approval

After explicit approval, replace the legacy host records with GitHub Pages
records:

```text
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    daguanghan.github.io
```

Expected impact:

- `scsda.cn` and `www.scsda.cn` will stop serving the legacy IIS site and start
  serving the GitHub Pages site after DNS propagation.
- Some visitors may temporarily see the old site while others see the new site.
- GitHub Pages HTTPS provisioning can take up to about one hour after DNS is
  accepted.
- DNS propagation can take up to 24 hours.
- The staging domain `ultraclaw.space` may need to be removed from this GitHub
  Pages repository because GitHub Pages generally supports one primary custom
  domain per repository.
- After cutover, run `npm run verify:production` to confirm DNS, HTTPS and key
  page content on both `scsda.cn` and `www.scsda.cn`.

## Rollback

If the production cutover fails, restore:

```text
@      -> hkdsn99.maohao.vip
www    -> hkdsn99.maohao.vip
```

Then verify:

```bash
dig +short scsda.cn A
dig +short www.scsda.cn
curl -I http://scsda.cn/
curl -I http://www.scsda.cn/
```

## Operating Rule

Do not proceed from staging to production unless the user explicitly says:

```text
确认修改 scsda.cn DNS
```
