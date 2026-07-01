# SCSDA English Site QA Report

Date: 2026-07-01

Repository: `https://github.com/daguanghan/scsda-website`

Review site: `https://ultraclaw.space/`

Latest checked commit: `3a8ddb5`

## Summary

The SCSDA English review site is built, deployed and available on GitHub Pages.
It is ready for user review on `ultraclaw.space`. No `scsda.cn` DNS records have
been changed.

## Build And Deployment

| Check | Result |
|---|---|
| Local `npm run build` | Pass |
| Generated pages | 16 after `/en/` path alignment |
| GitHub Actions latest deployment | Success |
| GitHub Pages custom domain | `ultraclaw.space` |
| HTTPS | Enabled |
| Production dependency audit | 0 vulnerabilities |

## Live Page QA

Browser-level QA was run against the live site.

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
- `https://www.ultraclaw.space/` redirects/serves the same site.
- Homepage title: `Smart Cities and Sustainable Development Academy`.
- `/en/` navigation remains within `/en/` paths.

## Content QA

The site follows the agreed strategic positioning:

- It is an SCSDA institutional research-platform website, not a personal-only
  promotional site.
- It supports Dr Daguang Han's UK/European academic applications by evidencing
  his platform-building and founding executive leadership.
- It uses cautious language such as `principal responsible person` and
  `founding executive lead`.
- It avoids government-official, public-security, military, confidential,
  surveillance and over-claiming language.
- Legacy Chinese-site material is reused selectively as public historical
  evidence, not translated wholesale.

## Current Formal Domain State

Read-only DNS checks show:

```text
scsda.cn      -> hkdsn99.maohao.vip -> 154.12.23.232
www.scsda.cn  -> hkdsn99.maohao.vip -> 154.12.23.232
```

The formal domain still points to the legacy host. This is expected because the
user has not yet approved formal cutover.

## Remaining Gate

The only remaining gate is user approval after reviewing:

```text
https://ultraclaw.space/
https://ultraclaw.space/en/
```

After approval, execute the cutover plan in `DNS.md` only after the user says:

```text
确认修改 scsda.cn DNS
```
