# Design Skill Notes

Date: 2026-07-01

This project used two requested frontend-design skill sources during the SCSDA
English-site refinement pass:

- Impeccable: `pbakaus/impeccable`
- Taste Skill: `Leonxlnx/taste-skill`, installed skill name
  `design-taste-frontend`

The skills were installed locally into `.agents/skills/` for review and audit
work, but the downloaded third-party skill source files are intentionally not
committed to this website repository. Reinstall them from the project root when
needed:

```bash
npx skills add pbakaus/impeccable
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

Current use in this repository:

- `PRODUCT.md` captures the institution-first strategic positioning.
- `DESIGN.md` captures the visual system and anti-pattern rules.
- `.impeccable/design.json` stores machine-readable design context for future
  Impeccable workflows.
- The latest Impeccable detector pass was used to remove the `Inter` default
  font and the left-stripe callout pattern.

Design read used for this site:

```text
Institutional research-platform website for UK and European academic reviewers,
with a careful, evidence-led visual language and restrained research-institution
palette.
```
