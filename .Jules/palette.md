## 2024-06-27 - Custom Animated Dropdowns
**Learning:** When building custom animated dropdowns (e.g., with Framer Motion), they lack built-in semantic meaning, and screen readers do not recognize them as menus.
**Action:** Always add `role="menu"`, `role="menuitem"`, `aria-haspopup="menu"`, and `aria-expanded` to ensure proper screen reader accessibility. Non-interactive elements within the menu should receive `role="presentation"`.
