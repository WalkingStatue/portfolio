## 2024-04-23 - Accessibility for Custom Animated Menus
**Learning:** When building custom animated dropdowns (e.g., with Framer Motion), visual components lack native semantic meaning. Screen readers cannot interpret them as menus by default.
**Action:** Always add `role="menu"`, `role="menuitem"`, `aria-haspopup="menu"`, and `aria-expanded` to ensure proper screen reader accessibility. Non-interactive elements within the menu should receive `role="presentation"`.
