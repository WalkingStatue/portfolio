## 2024-05-11 - Theme Switcher Accessibility Enhancements
**Learning:** Adding ARIA roles (`role="menu"`, `role="menuitem"`, `aria-haspopup="menu"`, `aria-expanded`) and robust keyboard navigation (focus styles + `Escape` key handler) to custom interactive dropdown components (like Framer Motion wrappers) dramatically improves screen reader and keyboard accessibility, preventing user entrapment and unclear interaction boundaries.
**Action:** Always ensure custom dropdown menus implement proper ARIA roles and support closing via the Escape key.
