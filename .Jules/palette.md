
## 2024-05-18 - Animated React Dropdowns Need ARIA Menu Roles
**Learning:** Framer Motion animated dropdowns (`<motion.div>`) lack native accessibility semantics. Without standard ARIA roles, screen readers don't announce them as menus.
**Action:** When building custom animated dropdowns, always add `role="menu"`, `role="menuitem"`, `aria-haspopup`, and `aria-expanded` to ensure proper screen reader accessibility. Non-interactive elements within the menu should receive `role="presentation"`.
