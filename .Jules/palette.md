## 2024-05-24 - Accessible Custom Dropdown
**Learning:** Custom UI dropdowns (like ThemeSwitcher) require not just `aria-haspopup` and `aria-expanded` on the trigger, but also explicit outside-click handlers and Escape-key listeners to be fully accessible. Screen readers also benefit from `role="menu"`, `role="presentation"` for headers, and `role="menuitem"` for options.
**Action:** Always implement comprehensive keydown (Escape) and mousedown (outside click) listeners when building custom dropdowns, and ensure all ARIA roles are defined to match standard select element behavior.
