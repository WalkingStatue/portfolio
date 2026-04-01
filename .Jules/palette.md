# Palette's Journal

## UX/Accessibility Learnings

## 2024-04-01 - Accessible Animated Dropdown Menus
**Learning:** Custom animated dropdowns built with libraries like Framer Motion lack native accessibility semantics compared to standard HTML `<select>` elements. When screen readers encounter them without proper roles, users cannot understand the component's purpose or current state.
**Action:** Always add explicit ARIA attributes: `role="menu"` on the container, `role="menuitem"` on selectable options, and `aria-haspopup="menu"` with `aria-expanded={isOpen}` on the trigger button. Additionally, ensure any decorative or structural elements within the menu (like section headers) receive `role="presentation"` to avoid confusing screen reader announcements.