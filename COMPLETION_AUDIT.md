# SCSDA Website Completion Audit

Date: 2026-07-01

This audit maps the current repository and staging deployment against the user
objective: rebuild an English SCSDA website from preserved Chinese-site
material, the implementation report, and Dr Daguang Han's profile evidence;
apply Impeccable and Taste Skill design guidance; store the site on GitHub; and
publish it to `ultraclaw.space` for review before any `scsda.cn` cutover.

## Current State

| Item | Evidence | Status |
|---|---|---|
| GitHub repository | `https://github.com/daguanghan/scsda-website` | Complete |
| Local source | `/Users/daguanghan/Desktop/HDG-application/HDG 网站/01-scsda-cn-academy-website/scsda-website` | Complete |
| Staging deployment | `https://ultraclaw.space/` | Complete |
| Deployment platform | GitHub Pages | Complete |
| Latest commit before this audit update | `0741303` | Complete |
| Formal `scsda.cn` DNS | Still points to `hkdsn99.maohao.vip -> 154.12.23.232` | Intentionally pending |

## Source Material Coverage

| Source | Local evidence | Website use |
|---|---|---|
| Preserved Chinese site | `captured-hkdsn99/snapshots/2026-07-01_021148_www-scsda-cn_public/CAPTURE_REPORT.md`; 1,235 files preserved, including 616 HTML pages and 590 images | Reused selectively through `public/images/` and the Legacy page |
| Implementation report | `[04]重庆科技局新型研发机构建设项目 实施报告-2023.4.18.md` | Used for establishment date, responsible-person wording, 12 centres/labs, 49 IP outputs, 61 papers, 46 participants, 45 master's-level research staff, 14 R&D/application/transformation projects and 13 incubation projects |
| Dr Han master profile | `MASTER_ARCHIVE_韩达光核心信息档案.md` | Used only as an alignment source for public profile links, UK/Europe application relevance, BIM/digital-twin/smart-infrastructure positioning and caution around current identity |

## Objective Coverage

| Requirement | Evidence | Status |
|---|---|---|
| English-first site for UK/European academic review | Home, About, Leadership, Evidence, Research, Projects, Outputs, Legacy and Contact pages | Complete |
| Institution-first SCSDA positioning | `PRODUCT.md`, `Evidence` page, `Leadership` page | Complete |
| Dr Han evidence layer inside the institution | `Leadership` and `Evidence` pages use `principal responsible person` and `founding executive lead` | Complete |
| Avoid personal-only site framing | `PRODUCT.md`, `DESIGN.md`, `CLAIMS_REGISTER.md`, Evidence page boundary copy | Complete |
| Avoid government-official, confidential, military, surveillance or public-security framing | `CLAIMS_REGISTER.md`, `PRODUCT.md`, content QA notes and page copy | Complete |
| Use Impeccable | Installed locally from `pbakaus/impeccable`; detector run; findings fixed | Complete |
| Use Taste Skill | Installed locally from `Leonxlnx/taste-skill` as `design-taste-frontend`; rules used for anti-slop review | Complete |
| Preserve design context for future updates | `PRODUCT.md`, `DESIGN.md`, `DESIGN_SKILLS.md`, `.impeccable/design.json` | Complete |
| Publish to `ultraclaw.space` | GitHub Pages deployment succeeds and `npm run audit:precutover` returns staging 200 responses | Complete |
| Automated staging review | `npm run review:staging` checks core pages, key content and optional viewport overflow | Complete |
| Keep DNS changes gated | `CUTOVER_CHECKLIST.md`, `HANDOFF.md`, `STAGING_SIGNOFF.md`, `npm run audit:precutover` | Complete |
| Post-cutover verification | `npm run verify:production` | Complete as tooling; production verification is expected to fail before DNS cutover |

## Verification Commands

Latest successful local and staging checks should include:

```bash
npm run check
npm run build
npm audit --omit=dev --audit-level=moderate
node .agents/skills/impeccable/scripts/detect.mjs --json src public
npm run review:staging
npm run audit:precutover
```

After user-approved formal DNS cutover, run:

```bash
npm run verify:production
```

## Open Gate

The only remaining gate is user approval after reviewing
`https://ultraclaw.space/`.

Do not modify `scsda.cn` DNS unless the user explicitly says:

```text
确认修改 scsda.cn DNS
```
