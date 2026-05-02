## 2025-05-02 - Custom Animated Dropdown Accessibility
**Learning:** Custom animated dropdowns built with Framer Motion (or similar libraries) lack native accessibility features, making them opaque to screen readers. They require explicit ARIA attributes to function correctly.
**Action:** When building custom animated dropdowns, always add `role="menu"`, `role="menuitem"`, `aria-haspopup="menu"`, and `aria-expanded` to ensure proper screen reader accessibility. Non-interactive elements within the menu should receive `role="presentation"`.
