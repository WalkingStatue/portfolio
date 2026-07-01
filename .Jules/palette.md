## 2024-07-01 - Custom Animated Dropdowns Missing ARIA Roles
**Learning:** Custom animated dropdowns (e.g., using Framer Motion `motion.div`) often include keyboard handlers but lack essential ARIA roles, making them inaccessible to screen readers.
**Action:** When building or enhancing custom animated dropdowns, always ensure they include `role="menu"`, `role="menuitem"`, `aria-haspopup="menu"`, and `aria-expanded` attributes, alongside proper keyboard navigation support.
