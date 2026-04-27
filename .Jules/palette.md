## 2024-05-15 - Animated Dropdown ARIA Roles
**Learning:** Custom animated dropdown menus using Framer Motion (`motion.div`) in this codebase do not implicitly convey menu structure or states to screen readers.
**Action:** When building or enhancing interactive dropdowns, always manually assign `role="menu"`, `role="menuitem"`, `aria-expanded`, and `aria-haspopup`. Assign `role="presentation"` to visual/structural wrappers within the menu.
