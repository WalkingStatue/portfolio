## 2024-05-24 - Accessibility for Custom Framer Motion Dropdowns
**Learning:** Custom Framer Motion dropdowns (like `ThemeSwitcher.tsx`) often lack native semantic meaning. This app's custom dropdown lacked standard ARIA attributes, making it invisible or confusing to screen readers.
**Action:** When building custom animated dropdowns (e.g., with Framer Motion), always add `role="menu"`, `role="menuitem"`, `aria-haspopup`, and `aria-expanded` to ensure proper screen reader accessibility. Non-interactive elements within the menu should receive `role="presentation"`.
