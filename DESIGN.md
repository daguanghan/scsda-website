---
name: Smart Cities and Sustainable Development Academy
description: English institutional research-platform website for SCSDA and Dr Daguang Han's academic evidence case.
colors:
  ink: "#122124"
  ink-soft: "#405054"
  muted: "#667579"
  line: "#d8e0df"
  paper: "#f7f6f2"
  surface: "#ffffff"
  surface-tint: "#edf3f1"
  hero-base: "#0d272d"
  teal: "#0e6d6b"
  teal-dark: "#084f50"
  blue: "#163f72"
  gold: "#b7822b"
  button-ink: "#17120a"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(2.8rem, 5.7vw, 5.2rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0"
  headline:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 4vw, 3.7rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0"
  body:
    fontFamily: "Aptos, Avenir Next, Segoe UI, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Aptos, Avenir Next, Segoe UI, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 760
    lineHeight: 1.3
    letterSpacing: "0"
rounded:
  md: "8px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "88px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "#17120a"
    rounded: "{rounded.md}"
    padding: "0.72rem 1rem"
    height: "44px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.08)"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0.72rem 1rem"
    height: "44px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1.35rem"
---

# Design System: Smart Cities and Sustainable Development Academy

## 1. Overview

**Creative North Star: "The Evidence Ledger"**

The visual system should feel like a carefully maintained institutional record:
calm, legible and serious, with enough editorial presence to support an
international academic audience. It is not a product-marketing page and not a
personal portfolio. Its job is to help reviewers trust the evidence before they
notice the styling.

The system uses restrained research-institution colors, a serif display voice
for academic gravitas and a modern system sans stack for readable body copy.
Imagery comes from preserved SCSDA public material and research-space assets,
not generic decorative illustration.

**Key Characteristics:**

- Evidence-led institutional tone.
- Light, readable pages with teal and gold accents used sparingly.
- Serif headings for authority, sans body text for scanning.
- Simple 8px radii, no over-rounded card language.
- Real research and platform imagery, no fake screenshots.

## 2. Colors

The palette is a restrained research-institution palette: off-white paper,
white surfaces, dark ink, deep teal identity accents and selective gold markers.

### Primary

- **Institutional Teal** (`#0e6d6b`): used for research-platform emphasis,
  links and bounded claim accents.
- **Deep Teal** (`#084f50`): used for stronger identity moments, the mark and
  high-contrast text accents.

### Secondary

- **Academic Gold** (`#b7822b`): used sparingly on the dark hero and footer.
  It should never become a decorative theme.
- **Research Blue** (`#163f72`): held for occasional technical emphasis and
  should not compete with teal.

### Neutral

- **Ink** (`#122124`): primary text.
- **Soft Ink** (`#405054`): body support text.
- **Muted Evidence** (`#667579`): captions and secondary metadata.
- **Paper** (`#f7f6f2`): page background.
- **Surface** (`#ffffff`): cards and structured content.
- **Surface Tint** (`#edf3f1`): section tint and callout background.
- **Hero Base** (`#0d272d`): dark image fallback for the homepage hero.
- **Button Ink** (`#17120a`): text color for gold primary buttons.
- **Line** (`#d8e0df`): borders and separators.

### Named Rules

**The Caution Rule.** Teal and gold mark evidence hierarchy. They do not create
decorative gradients, glows or attention effects.

**The One Accent Rule.** A page section should have one dominant accent role.
Do not alternate teal, gold and blue for decoration.

## 3. Typography

**Display Font:** Georgia with Times New Roman fallback  
**Body Font:** Aptos / Avenir Next / Segoe UI with system sans fallback  
**Label Font:** same sans stack as body

**Character:** The pairing is academic but practical. Serif headings create a
serious institutional register, while the sans body stack keeps long evidence
copy readable on UK and European review workflows.

### Hierarchy

- **Display** (`400`, `clamp(2.8rem, 5.7vw, 5.2rem)`, `1`): homepage and page
  hero titles only.
- **Headline** (`400`, `clamp(2rem, 4vw, 3.7rem)`, `1`): section headings and
  article headings.
- **Title** (`700`, `1.18-1.2rem`, `1.2`): card titles and evidence item
  labels.
- **Body** (`400`, `1rem-1.18rem`, `1.6`): paragraphs and explanatory copy.
  Keep line length around 65-75 characters.
- **Label** (`760`, `0.78-0.92rem`, `0` letter spacing): short context labels.
  Avoid repeated uppercase tracked labels.

### Named Rules

**The Review Scan Rule.** A reviewer should understand the page by scanning the
headings, labels and first paragraph of each section.

## 4. Elevation

Depth is mostly conveyed through section tone, borders and whitespace. Shadows
are reserved for image panels where the visual asset needs separation from the
page. Content cards should remain flat by default.

### Shadow Vocabulary

- **Image Panel Shadow** (`0 24px 70px rgba(18, 33, 36, 0.12)`): use only on
  framed image panels, not on every card.

### Named Rules

**The Flat Evidence Rule.** Evidence cards stay flat. If every item has a
shadow, none of the evidence feels more credible.

## 5. Components

### Buttons

- **Shape:** gently squared institutional rectangle (`8px` radius).
- **Primary:** gold background with dark text, used for the main evidence or
  leadership path.
- **Ghost:** dark hero-only secondary action with a translucent white surface.
- **Hover / Focus:** color shift and visible browser focus state. Do not remove
  focus outlines without replacing them.

### Cards / Containers

- **Corner Style:** 8px across cards, outputs, evidence panels and image frames.
- **Background:** white surface on paper or tinted sections.
- **Shadow Strategy:** flat by default. Image panels may use the image-panel
  shadow.
- **Border:** one-pixel line using `#d8e0df`.
- **Internal Padding:** 1.3rem to 1.35rem for standard card density.

### Navigation

- **Style:** sticky, restrained, one-line desktop navigation with clear text
  labels.
- **Mobile:** wraps below 900px and preserves tap target comfort.
- **Identity:** circular SCSDA mark in deep teal, no decorative icon set.

### Evidence Callout

Use a softly tinted surface with a full subtle border. Do not use a thick
left-stripe accent, because it reads like an AI-generated card trope.

## 6. Do's and Don'ts

### Do:

- **Do** keep SCSDA institution-first, with Dr Han's role evidenced inside the
  institution.
- **Do** use preserved public visuals and source-bounded wording.
- **Do** keep typography calm and readable.
- **Do** use teal for institutional emphasis and gold only for selective
  high-contrast accents.
- **Do** keep pages light, plain and credible enough for academic review.

### Don't:

- **Don't** make the site look like a generic AI-generated SaaS landing page.
- **Don't** use purple-blue gradients, glassmorphism, fake dashboards or nested
  card layouts.
- **Don't** imply government authority, official authorization, confidential
  access or public-security work.
- **Don't** overuse small uppercase tracked labels above every section.
- **Don't** publish sensitive, military, surveillance or government-decision
  language.
