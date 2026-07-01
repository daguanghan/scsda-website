# Review Guide

Use this guide to review the staging site before approving any formal move to
`scsda.cn`.

Staging site:

```text
https://ultraclaw.space/
```

Do not judge the new site by `scsda.cn` yet. The formal domain still points to
the legacy host until DNS cutover is explicitly approved.

## Review Goal

The site should read as a formal SCSDA English website. It should present the
Academy's background, mission, leadership, research themes, selected public
projects, construction-period outputs, archive note, and contact route.

It should not read as a planning note, self-explaining strategy page, personal
advertisement, government website, or sensitive project platform.

## Pages To Review

- `https://ultraclaw.space/`
- `https://ultraclaw.space/about/`
- `https://ultraclaw.space/leadership/`
- `https://ultraclaw.space/research/`
- `https://ultraclaw.space/projects/`
- `https://ultraclaw.space/outputs/`
- `https://ultraclaw.space/legacy/`
- `https://ultraclaw.space/contact/`
- `https://ultraclaw.space/en/`
- `https://ultraclaw.space/robots.txt`
- `https://ultraclaw.space/sitemap.xml`

## Automated Review

```bash
npm run check
npm run build
npm run claims:guard
npm run review:staging
npm run health:staging
```

## Acceptance Criteria

- The homepage immediately identifies SCSDA and its smart-cities /
  sustainable-development mission.
- The site uses formal English and does not explain itself as an application or
  positioning exercise.
- Leadership presents Dr Han's role in institutional terms.
- Research and projects foreground BIM, digital twins, smart infrastructure,
  sensing, AIoT, sustainable construction, and urban systems.
- Outputs are period-labelled and do not imply current scale.
- Legacy material is treated as historical source material.
- Contact information avoids sensitive phone numbers and private details.
- Mobile and desktop layouts have no text or image overlap.

## Rejection Criteria

Do not approve cutover if any public page implies:

- government authority or official government website status;
- public-security, surveillance, military, or confidential work;
- sensitive technology transfer;
- current institutional scale beyond the period-labelled record;
- that Dr Han alone completed every institutional output;
- meta-copy about why the website should persuade a reader.

## DNS Approval Phrase

If staging is approved and the formal domain should be moved, use:

```text
确认修改 scsda.cn DNS
```

Before any DNS edit, current records and planned replacement records must be
shown again.
