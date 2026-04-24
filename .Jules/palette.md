## 2024-04-24 - Animated Dropdown ARIA Roles
**Learning:** Custom animated dropdown menus (like those built with Framer Motion) inherently lack the semantic structure of native elements. Without explicit ARIA roles, screen readers cannot interpret them correctly.
**Action:** Always add explicit menu-related ARIA roles (`role="menu"`, `role="menuitem"`, `aria-haspopup`, and `aria-expanded`) to custom animated dropdowns to ensure proper screen reader accessibility. Non-interactive elements within the menu should receive `role="presentation"`.
