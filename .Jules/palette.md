## 2024-05-24 - Accessible Dropdowns with Framer Motion
**Learning:** Custom animated dropdowns built with Framer Motion lack native HTML semantics and keyboard interactions. This is a common pattern in the app.
**Action:** When building or encountering custom dropdowns (like ThemeSwitcher), always manually implement `role="menu"`, `role="menuitem"`, `aria-haspopup`, `aria-expanded`, Escape key support, and click-outside handling.
