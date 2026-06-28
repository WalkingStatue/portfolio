## 2024-06-28 - Custom Animated Dropdown Accessibility
**Learning:** When building custom animated dropdown menus (e.g., with Framer Motion), screen readers will not recognize them as menus without proper ARIA attributes.
**Action:** Always add `role="menu"`, `role="menuitem"`, `aria-haspopup="menu"`, and `aria-expanded` to custom dropdowns. Non-interactive headers should receive `role="presentation"`.
