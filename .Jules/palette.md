## 2026-04-26 - Animated Dropdown Accessibility
**Learning:** Custom animated dropdowns (like those built with Framer Motion) require explicit ARIA attributes (`role="menu"`, `role="menuitem"`, `aria-haspopup`, `aria-expanded`) to ensure proper screen reader accessibility, as they don't use native HTML select or details elements. Non-interactive elements within the menu should receive `role="presentation"`.
**Action:** When building custom dropdowns, always include these roles and ARIA attributes to maintain a11y standards.
