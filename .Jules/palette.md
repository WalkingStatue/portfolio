## 2024-07-03 - Accessible Animated Dropdowns
**Learning:** Custom animated dropdown menus using Framer Motion often miss crucial semantic ARIA roles, preventing screen readers from understanding the structure.
**Action:** Always ensure the trigger has aria-haspopup="menu", container has role="menu", options have role="menuitem", and non-interactive elements have role="presentation".
