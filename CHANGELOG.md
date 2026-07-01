# Changelog

## 2026-07-01

- Created Astro static website for the English SCSDA research-platform site.
- Added core pages: Home, About, Leadership, Evidence, Research, Projects, Outputs, Legacy and Contact.
- Added evidence-focused data model and cautious public wording.
- Added selected public images from the preserved old Chinese website.
- Added GitHub Pages deployment workflow and review-domain notes.
- Created GitHub repository `daguanghan/scsda-website`.
- Deployed the review site to `https://ultraclaw.space/`.
- Enabled HTTPS for the review domain.
- Added production metadata, favicon, `robots.txt`, `sitemap.xml`, `.nojekyll`
  and a custom 404 page.
- Confirmed `https://scsda.cn/` as the preferred future English public entry
  point, with `/en/` retained as a compatibility path.
- Added a reviewer-facing Evidence Map page to connect SCSDA source materials
  with Dr Han's UK/European academic application narrative.
- Added `REVIEW_GUIDE.md` for staging-site acceptance checks before formal
  `scsda.cn` cutover.
- Added `HANDOFF.md` with repository, deployment, DNS, content-update, rollback
  and cutover operating notes.
- Added `npm run audit:precutover` for read-only staging, DNS and cutover-gate
  checks before any formal domain move.
- Updated the GitHub Pages deployment workflow to current GitHub Actions
  versions after a successful staging deployment check.
- Refreshed `QA_REPORT.md` with live desktop/tablet/mobile visual QA results
  and current staging-site acceptance notes.
- Added `STAGING_SIGNOFF.md` as the user-facing approval packet before any
  formal `scsda.cn` DNS cutover.
- Replaced fixed commit references in QA and signoff documents with the
  read-only pre-cutover audit command to avoid stale approval metadata.
- Installed and applied Impeccable plus Taste Skill locally for design QA.
- Added `PRODUCT.md`, `DESIGN.md`, `DESIGN_SKILLS.md` and Impeccable design
  context for future institution-first site updates.
- Removed detected design tells: default `Inter` stack and thick left-stripe
  callout styling.
- Added `npm run verify:production` for read-only post-cutover verification of
  `scsda.cn` and `www.scsda.cn`.
- Expanded the Outputs page with additional construction-period indicators from
  the implementation report and recorded source boundaries in
  `CLAIMS_REGISTER.md`.
- Added `COMPLETION_AUDIT.md` to map the repository and staging deployment
  against the user objective before any formal-domain cutover.
- Added `npm run review:staging` for read-only staging content and viewport
  acceptance checks before formal-domain approval.
- Added `LAUNCH_DECISION_PACKET.md` to give the user a short approve, delay or
  rollback packet before any `scsda.cn` DNS cutover.
- Added `npm run screenshots:staging` to capture repeatable desktop and mobile
  staging screenshots for visual review.
