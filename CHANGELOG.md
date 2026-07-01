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
