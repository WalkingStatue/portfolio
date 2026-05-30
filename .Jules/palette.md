## 2026-05-30 - [ThemeSwitcher Accessibility]
**Learning:** Custom animated dropdowns (like ThemeSwitcher) often lack keyboard navigation (e.g., Escape to close, clicking outside) and proper ARIA roles (menu, menuitem, aria-expanded) by default, severely impacting screen reader accessibility and keyboard user experience.
**Action:** Always add `role="menu"`, `role="menuitem"`, `aria-haspopup`, and `aria-expanded` to custom dropdowns. Ensure they support closing via the Escape key and outside clicks. Non-interactive elements within the menu should receive `role="presentation"`.
