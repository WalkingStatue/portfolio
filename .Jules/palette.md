## 2026-03-31 - [Accessible Animated Dropdowns]
**Learning:** Custom interactive UI elements like the framer-motion dropdowns initially lack implicit accessibility semantics. While they visually act like menus, screen readers perceive them as unassociated generic `div`s.
**Action:** Always ensure any toggleable dropdown component uses `aria-haspopup="menu"` & `aria-expanded` on the trigger, `role="menu"` on the container, and `role="menuitem"` on individual option buttons, regardless of how they are animated.
