## 2026-04-21 - Accessible Custom Dropdown Menus
**Learning:** When building custom animated dropdowns (e.g., with Framer Motion), standard `<div>` and `<button>` elements do not naturally convey a menu structure to screen readers.
**Action:** Always add `role="menu"`, `role="menuitem"`, `aria-haspopup="menu"`, and `aria-expanded` to ensure proper screen reader accessibility. Non-interactive headers within the menu should receive `role="presentation"`.
