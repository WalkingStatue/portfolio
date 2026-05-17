## 2024-05-17 - Accessible Custom Dropdowns with Framer Motion
**Learning:** Custom animated dropdowns built with Framer Motion often miss native `<select>` accessibility features, specifically keyboard support (Escape key) and screen reader support (ARIA roles, states).
**Action:** Always add `useRef` with click-outside handlers, Escape key handlers, and full ARIA attributes (`aria-expanded`, `aria-haspopup="menu"`, `role="menu"`, `role="menuitem"`, and `role="presentation"` for headers) when building custom dropdown components.
