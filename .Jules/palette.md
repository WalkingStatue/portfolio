## 2024-05-20 - [Accessibility in Animated Dropdowns]
**Learning:** Custom animated dropdowns built with Framer Motion (like ThemeSwitcher) often omit standard ARIA menu roles because they replace native elements. Without explicit `role="menu"`, `role="menuitem"`, and `aria-haspopup`/`aria-expanded`, screen readers fail to recognize the component as an interactive menu, making it invisible or confusing to navigate.
**Action:** Always manually add proper menu ARIA roles to custom dropdowns to ensure screen reader accessibility, particularly when using animation wrappers.
