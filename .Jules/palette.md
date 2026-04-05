## 2024-05-18 - Animated Dropdown ARIA Roles
**Learning:** When building custom animated dropdowns (e.g., with Framer Motion), it is important to add `role="menu"`, `role="menuitem"`, `aria-haspopup`, and `aria-expanded` to ensure proper screen reader accessibility. Non-interactive elements within the menu should receive `role="presentation"`.
**Action:** Always verify custom dropdown menus have the correct ARIA roles and keyboard focus styles (`focus-visible`) to ensure they are fully accessible and usable without a mouse.
