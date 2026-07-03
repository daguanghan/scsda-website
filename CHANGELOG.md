# Changelog

## 2026-07-03

- Cut over `scsda.cn` DNS in GNAME to GitHub Pages after explicit user
  confirmation. Authoritative DNS now returns the four GitHub Pages apex A
  records and `www` CNAME `daguanghan.github.io`.
- Verified `http://scsda.cn/` serves the GitHub Pages site and
  `http://www.scsda.cn/` redirects to the apex domain. GitHub Pages HTTPS
  certificate issuance is still pending before HTTPS enforcement can be enabled.
- Started the formal-domain cutover from `ultraclaw.space` to `scsda.cn`,
  keeping the root path as the default English site and `/en/` as the English
  mirror path.
- Removed the visible forwarding/sensitive-information notice from the Message
  page, increased navigation and body text readability, reduced oversized page
  titles, and replaced the homepage hero with a sharper wide-screen image.
- Removed the public Legacy/Archive page and navigation entry from the staging
  website.
- Added Join Us and Message pages for UK-facing opportunity enquiries,
  research collaboration, and non-confidential public messages.
- Added a static FormSubmit message form that forwards public website messages
  to `daguang.han@gmail.com`, with a first-use Gmail confirmation requirement.
- Removed the About page Platform History section and tightened the site UI
  typography, content width, navigation density, form styling, and responsive
  spacing.

## 2026-07-02

- Reduced personal-profile emphasis on the About and Leadership pages and
  cleaned public repository documents to keep the site institution-first.
- Replaced reception, visitor-tour and signing-event visuals with technical,
  platform and project-oriented presentation.
- Added `npm run visual:assets` to block banned public visuals and duplicate
  content-image references before publication.
- Replaced the homepage hero image with `reality-capture-site.jpg` and removed
  launch/signing and reception images from public page presentation.
- Added homepage public-material highlights using preserved SCSDA research,
  product/prototype, and interview media assets.
- Updated the public contact address to `info@scsda.cn` and recorded the
  planned future email-routing approach without changing DNS.

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
- Confirmed `https://scsda.cn/en/` as the preferred future English citation
  path for formal institutional use, with root formal-domain paths retained as
  easy entry points.
- Added an early source-boundary Evidence page during initial content testing;
  the current public site no longer uses that page.
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
- Added `npm run health:staging` to check staging metadata, internal links,
  image resources and public external profile links.
- Added `npm run claims:guard` to fail unsupported positive use of risk
  phrases listed in `CLAIMS_REGISTER.md`.
- Added Chinese review and operations documents:
  `USER_REVIEW_CHECKLIST_ZH.md`, `GNAME_DNS_CUTOVER_RUNBOOK_ZH.md` and
  `CURRENT_STATUS_ZH.md`.
- Expanded `CLAIMS_REGISTER.md` with Chinese high-risk wording and included the
  Chinese status/review/runbook documents in `npm run claims:guard`.
- Added `npm run cutover:ready` as a single read-only readiness check before
  any formal-domain DNS work.
- Reserved the original stable staging tag `staging-ready-2026-07-01`.
- Added `staging-ready-2026-07-01-v2` after aligning the future English
  citation path.
- Added `staging-ready-2026-07-01-v3` as the current user-reviewable
  pre-cutover source version after refreshing the completion audit and launch
  signoff records.
- Added a compressed SCSDA interview video with Dr Daguang Han to the About
  page as a concise public media record.
- Added engineering safety and health monitoring product/prototype visuals to
  the Projects page from locally preserved SCSDA-related product material.
- Ignored local Firecrawl cache and uncommitted source-extraction folders so
  public deployment includes only reviewed web assets.
- Updated Dr Han's Southeast University links to use the English profile as
  the primary public link and the Chinese profile as a detailed supplementary
  link.
- Clarified Dr Han's English-facing academic affiliation as Associate
  Professor, School of Civil Engineering, Southeast University.
- Archived public WeChat source material locally and added selected
  research-centre and product/prototype visuals to the Research and Projects
  pages.
