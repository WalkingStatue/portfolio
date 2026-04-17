## 2025-05-18 - Framer Motion Dropdown ARIA attributes
**Learning:** Custom Framer Motion dropdown components in this app need manual re-application of ARIA menu roles and ID associations to maintain accessibility for screen readers.
**Action:** Always add `role="menu"`, `role="menuitem"`, `aria-haspopup="true"`, `aria-expanded={isOpen}`, and `aria-controls` explicitly when building or modifying custom animated dropdowns.
