## 2024-03-27 - Theme Switcher Accessibility
**Learning:** Animated dropdowns with arbitrary div layouts can break screen reader navigation. Custom animated components must manually implement proper ARIA roles (menu, menuitem) and manage states like aria-expanded and aria-haspopup.
**Action:** When building custom animated dropdown menus (like ThemeSwitcher), always add `role="menu"` to the dropdown container, `role="menuitem"` to the options, and `aria-haspopup="menu"`, `aria-expanded={isOpen}` to the toggle button.
