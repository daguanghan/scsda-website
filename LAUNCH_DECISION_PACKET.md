# SCSDA Launch Decision Packet

This packet is the short decision document for approving, delaying, or rejecting
the move from the staging domain to the formal `scsda.cn` domain.

## Current Decision State

Status: staging review stage.

Current staging site:

```text
https://ultraclaw.space/
```

Current visible site-content baseline:

```text
dba9c77 test: add claims safety guard
```

The latest deployment may show a later documentation-only commit. Re-run
`npm run audit:precutover` for the current GitHub Pages deployment commit.

Formal domain:

```text
scsda.cn
www.scsda.cn
```

No `scsda.cn` DNS change should be made until the user explicitly says:

```text
确认修改 scsda.cn DNS
```

## Strategic Positioning To Approve

Approve the staging site only if this framing feels correct:

```text
SCSDA is presented as an English institutional research-platform website.
Dr Daguang Han's role is presented as an evidence-backed leadership layer
inside the Academy's institutional record.
```

This is intentionally not a personal-only portfolio. It is also not a
government, public-security, confidential-technology or official-authority
website.

## What The Site Should Prove

The site should support UK and European academic review by showing that Dr Han:

- founded and led a nonprofit applied-research platform;
- coordinated research-centre development and expert collaboration;
- connected BIM, digital twins, sensing, smart infrastructure and sustainable
  cities into a coherent research platform;
- worked across academic, industry and public-facing knowledge-exchange
  contexts;
- can evidence platform-building leadership without overstating current scale,
  government status or sensitive work.

## Pages To Check Before Approval

Check these pages at least once on desktop and mobile:

```text
https://ultraclaw.space/
https://ultraclaw.space/about/
https://ultraclaw.space/leadership/
https://ultraclaw.space/evidence/
https://ultraclaw.space/research/
https://ultraclaw.space/projects/
https://ultraclaw.space/outputs/
https://ultraclaw.space/legacy/
https://ultraclaw.space/contact/
https://ultraclaw.space/en/
https://ultraclaw.space/en/evidence/
```

## Approval Criteria

Approve cutover only if all are true:

- The site looks like a serious Academy website, not a personal advertising
  page.
- The homepage immediately explains the Academy and the research themes.
- The Leadership and Evidence pages make Dr Han's role clear and credible.
- The claims are cautious, public-facing and non-confidential.
- The site does not imply official government authority, public-security work,
  military work, surveillance, confidential access or unsupported institutional
  scale.
- The pages are readable on mobile and desktop.
- The contact page contains only acceptable public contact information.

## Delay Or Reject Cutover If

Delay cutover if any of these are true:

- a factual claim needs correction;
- a sensitive or over-strong phrase remains;
- the English tone feels too promotional for academic review;
- a core page has missing images, broken links or mobile layout problems;
- the user wants the staging domain to remain live after formal cutover and a
  separate staging setup has not yet been arranged.

## Current DNS Snapshot To Recheck

The current legacy records must be rechecked immediately before any DNS edit.
The expected pre-cutover state is:

```text
scsda.cn      CNAME hkdsn99.maohao.vip
scsda.cn      A     154.12.23.232
www.scsda.cn  CNAME hkdsn99.maohao.vip
www.scsda.cn  A     154.12.23.232
```

## Planned DNS After Approval

Only after explicit approval, replace the legacy records with:

```text
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    daguanghan.github.io
```

Impact:

- `scsda.cn` and `www.scsda.cn` will stop using the old `hkdsn99.maohao.vip`
  host.
- Some visitors may temporarily see the old IIS site during DNS propagation.
- GitHub Pages HTTPS provisioning may take time after DNS is accepted.
- GitHub Pages usually binds one custom domain to one repository. Keeping
  `ultraclaw.space` as a permanent staging domain may require a separate
  staging repository or deployment platform.

## Rollback

If the formal-domain cutover fails, restore the legacy records:

```text
scsda.cn      CNAME hkdsn99.maohao.vip
www.scsda.cn  CNAME hkdsn99.maohao.vip
```

Then re-run production checks after DNS propagation.

## Commands For Final Pre-Approval Check

Run:

```bash
npm run check
npm run build
npm run claims:guard
npm run health:staging
npm run review:staging
npm run audit:precutover
```

Only proceed if all checks pass and the user has reviewed the staging site.
