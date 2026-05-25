## 2024-05-24 - Animated Dropdown Accessibility
**Learning:** Custom animated dropdowns (like ThemeSwitcher) lack native keyboard interactions and screen reader roles compared to native select or dialog elements.
**Action:** When building custom dropdowns, always ensure `role="menu"`, `role="menuitem"`, `aria-haspopup="menu"`, `aria-expanded={isOpen}` are present. Add `useEffect` handlers for Escape key and click-outside support to prevent trapping focus and leaving menus open unexpectedly.
