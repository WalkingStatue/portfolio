
## 2024-05-15 - [Screen Reader Accessibility for Animated Dropdowns]
**Learning:** When building custom animated dropdown menus (e.g., with Framer Motion), standard screen reader interactions are not available by default. Interactive elements within the animated container must have appropriate ARIA roles (`menuitem`) and the parent structure needs matching attributes (`role="menu"` on the container, `aria-haspopup` and `aria-expanded` on the trigger). Non-interactive structural elements should receive `role="presentation"` to hide them from the accessibility tree.
**Action:** Always add ARIA `menu`, `menuitem`, `aria-haspopup`, and `aria-expanded` attributes when creating custom dropdown or popover menus that don't rely on native `<select>` or dialog elements.
