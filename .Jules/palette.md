## 2024-05-24 - Custom Animated Dropdown Accessibility
**Learning:** When building custom animated dropdowns (e.g., with Framer Motion), it is easy to miss critical ARIA roles that screen readers rely on for menus. The toggle button needs `aria-haspopup="menu"`, the dropdown container needs `role="menu"`, individual items need `role="menuitem"`, and non-interactive structural elements should have `role="presentation"`.
**Action:** Always add `role="menu"`, `role="menuitem"`, `aria-haspopup`, and `aria-expanded` to ensure proper screen reader accessibility when building custom menus.
