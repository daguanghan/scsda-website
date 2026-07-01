# Staging Signoff

Date: 2026-07-01

Staging domain:

```text
https://ultraclaw.space/
```

Formal domain target:

```text
https://scsda.cn/
https://www.scsda.cn/
```

## Current Position

The staging site is being rebuilt as a formal English SCSDA institutional
website. It should present the Academy's public profile, research themes,
selected projects, construction-period outputs, leadership, archive note, and
contact information.

No `scsda.cn` DNS change is authorised by this document.

## Pages For Review

```text
https://ultraclaw.space/
https://ultraclaw.space/about/
https://ultraclaw.space/leadership/
https://ultraclaw.space/research/
https://ultraclaw.space/projects/
https://ultraclaw.space/outputs/
https://ultraclaw.space/legacy/
https://ultraclaw.space/contact/
https://ultraclaw.space/en/
```

## Required Checks

```bash
npm run check
npm run build
npm run claims:guard
npm run review:staging
npm run health:staging
```

## Signoff Boundary

Approve staging only if it reads as a formal research-academy website and does
not contain strategy-page, personal-advertising, government-authority,
confidential, military, surveillance, or exaggerated-current-scale wording.

Formal DNS movement still requires the explicit approval phrase:

```text
确认修改 scsda.cn DNS
```
