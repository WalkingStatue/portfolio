## 2024-05-15 - ARIA Menu Semantics for Custom Dropdowns
**Learning:** Custom animated dropdowns built with Framer Motion (`<motion.div>`) often lack native semantic roles out of the box, making them opaque to screen readers despite being visually interactive popups.
**Action:** Always explicitly add `role="menu"` to the dropdown container, `role="menuitem"` to interactive options, `role="presentation"` to non-interactive decorative headers, and `aria-haspopup="menu"` / `aria-controls` to the trigger button to establish the accessible relationship.
