## 2025-07-08 - Accessible Animated Dropdowns
**Learning:** Custom animated dropdown menus using Framer Motion lack native accessibility by default. It is crucial to add `role="menu"`, `role="menuitem"`, and explicit focus visibility styles (e.g., `focus-visible:ring-2`) to support screen readers and keyboard navigation effectively within the design system.
**Action:** Always verify keyboard accessibility, ensure ARIA roles are defined for interactive container patterns, and add `role="presentation"` to non-interactive header elements within menus.
