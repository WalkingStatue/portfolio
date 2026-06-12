## 2024-06-12 - Accessible Framer Motion Dropdowns
**Learning:** Custom animated dropdown menus built with `framer-motion` do not natively include screen reader support or standard keyboard interaction patterns, causing accessibility blind spots.
**Action:** Always add `role="menu"`, `role="menuitem"`, `aria-haspopup="menu"`, and `aria-expanded={isOpen}`. Additionally, ensure custom menus can be dismissed via the Escape key and by clicking outside the component using a `useEffect` hook and a `useRef`.
