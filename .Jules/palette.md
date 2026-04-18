## 2024-04-18 - Animated Dropdown Accessibility
**Learning:** Custom animated dropdowns built with Framer Motion (like ThemeSwitcher) inherently lack native select/menu semantics, making them invisible to screen readers as interactive menus.
**Action:** Always manually add `role="menu"` to the container, `role="menuitem"` to selectable options, `role="presentation"` to non-interactive decorative elements (like headers), and `aria-haspopup="menu"`/`aria-expanded={isOpen}` to the trigger button.
