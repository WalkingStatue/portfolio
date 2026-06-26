## 2026-06-26 - Add ARIA Roles to Animated Dropdowns
**Learning:** Custom animated dropdowns (like ThemeSwitcher using Framer Motion) inherently lose native semantic roles. It's critical to explicitly define them for screen readers to interpret the component correctly.
**Action:** Always add `role="menu"` to the container, `role="menuitem"` to interactive children, `role="presentation"` to non-interactive decorative elements, and `aria-haspopup="menu"` to the toggle button.
