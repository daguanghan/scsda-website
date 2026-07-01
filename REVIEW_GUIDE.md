# Review Guide

Use this guide to review the staging site before approving the formal move to
`scsda.cn`.

Staging site:

```text
https://ultraclaw.space/
```

Do not judge the new site by `scsda.cn` yet. The formal domain still points to
the legacy host until DNS cutover is explicitly approved.

## Review Goal

The site should read as an SCSDA institutional research-platform website, not as
a personal advertising page. At the same time, it should clearly support Dr
Daguang Han's UK and European academic applications by evidencing:

- founding and executive platform leadership;
- research-centre development and coordination;
- digital construction, BIM and digital twin capability;
- smart infrastructure, sensing and AIoT capability;
- sustainable cities and applied knowledge-exchange relevance;
- cautious, non-confidential and source-bounded public claims.

## Pages To Review

Core pages:

- `https://ultraclaw.space/`
- `https://ultraclaw.space/about/`
- `https://ultraclaw.space/leadership/`
- `https://ultraclaw.space/evidence/`
- `https://ultraclaw.space/research/`
- `https://ultraclaw.space/projects/`
- `https://ultraclaw.space/outputs/`
- `https://ultraclaw.space/legacy/`
- `https://ultraclaw.space/contact/`

Compatibility paths:

- `https://ultraclaw.space/en/`
- `https://ultraclaw.space/en/evidence/`

Technical discovery files:

- `https://ultraclaw.space/robots.txt`
- `https://ultraclaw.space/sitemap.xml`

## Content Acceptance Criteria

Approve the site only if the following are true:

- The homepage immediately signals SCSDA, smart cities, digital built
  environment, smart infrastructure and sustainable urban systems.
- The site clearly explains why SCSDA matters for Dr Han's academic case without
  becoming a personal-only site.
- The Evidence page makes the source-to-capability chain clear.
- The Leadership page uses cautious wording: `principal responsible person` and
  `founding executive lead`.
- Research themes align with UK/European academic roles in digital
  construction, construction informatics, BIM, digital twins, infrastructure
  resilience and sustainable urban systems.
- Legacy Chinese-site material is treated as historical source material, not as
  automatically current or fully translated content.
- Contact information avoids sensitive personal phone numbers.

## Risk Rejection Criteria

Do not approve cutover if any page appears to claim or imply:

- SCSDA is a government authority or official government website;
- government authorization beyond what the evidence supports;
- public-security, surveillance, military or confidential work;
- sensitive technology transfer;
- current institutional scale not supported by the evidence;
- that Dr Han alone completed every institutional output;
- awarded UK professional status that is only in preparation.

## Visual And Usability Checks

Check at least once on desktop and mobile:

- navigation is readable and not crowded;
- hero text is legible over the image;
- cards and buttons do not overlap;
- images load;
- text does not overflow on a phone screen;
- links to ORCID, Google Scholar and Southeast University profile open;
- `www.ultraclaw.space` redirects to `ultraclaw.space`.

## Approval Phrase

If the staging site is acceptable and the formal domain should be moved, use:

```text
确认修改 scsda.cn DNS
```

Before any DNS edit, current records and planned replacement records must be
shown again. The cutover procedure is documented in `DNS.md` and
`CUTOVER_CHECKLIST.md`.

