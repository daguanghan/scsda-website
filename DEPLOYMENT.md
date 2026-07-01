# Deployment Notes

## Current Review Target

- Platform: GitHub Pages
- Review domain: `ultraclaw.space`
- Source branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- First review deployment: 2026-07-01
- Initial deployment commit: `a2d4a12`
- GitHub repository: `https://github.com/daguanghan/scsda-website`

## GitHub Pages Setup

The workflow in `.github/workflows/deploy.yml` uses GitHub Pages Actions:

1. Checkout repository.
2. Install Node.js dependencies.
3. Build Astro static output.
4. Upload `dist`.
5. Deploy to GitHub Pages.

The custom domain is controlled by `public/CNAME`.

## Verification After Deployment

Check:

- `https://ultraclaw.space`
- `https://www.ultraclaw.space` if DNS or redirect is configured
- Home, About, Leadership, Research, Projects, Outputs, Legacy, Contact
- HTTPS status
- Mobile layout
- Desktop layout
- Images loading
- Links to ORCID, Google Scholar and Southeast University profile

## 2026-07-01 Verification

- GitHub Actions deployment completed successfully.
- `https://ultraclaw.space/` returned HTTP 200 and the new SCSDA English homepage.
- `https://www.ultraclaw.space/` resolved to the same site.
- HTTPS certificate was approved for `ultraclaw.space` and `www.ultraclaw.space`.
- GitHub Pages HTTPS enforcement was enabled.
- Browser QA checked homepage, Leadership and Research pages: no broken images and no horizontal overflow.

## Future Production Target

After user review, move the production domain to:

- `https://scsda.cn/en/`
- `https://www.scsda.cn/en/`

The current `ultraclaw.space` deployment should remain a review/staging environment or be redirected.
