# Deployment Notes

## Current Review Target

- Platform: GitHub Pages
- Review domain: `ultraclaw.space`
- Source branch: `main`
- Build command: `npm run build`
- Output directory: `dist`

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

## Future Production Target

After user review, move the production domain to:

- `https://scsda.cn/en/`
- `https://www.scsda.cn/en/`

The current `ultraclaw.space` deployment should remain a review/staging environment or be redirected.
