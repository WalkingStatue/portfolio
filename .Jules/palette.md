## 2024-02-12 - Custom Dropdown Accessibility
**Learning:** Custom animated dropdowns built with Framer Motion in this design system lack native accessibility semantics (`role="menu"`, `role="menuitem"`, `aria-haspopup`) and visible keyboard focus states by default, making them difficult to use for screen reader and keyboard users.
**Action:** Always add ARIA menu semantics (`role="menu"`, `role="menuitem"`, `aria-haspopup="menu"`) and explicit `focus-visible` utility classes to custom interactive components to ensure full keyboard and screen reader accessibility.
