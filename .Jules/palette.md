## 2024-05-13 - Accessible Framer Motion Dropdowns
**Learning:** Custom animated dropdowns built with Framer Motion often miss native select behaviors. Screen readers need `role="menu"`, `role="menuitem"`, `aria-haspopup`, and `aria-expanded` attributes, while keyboard users need click-outside and Escape key handlers to escape the component gracefully.
**Action:** Always pair `AnimatePresence` + `motion.div` menus with proper ARIA attributes and a `useEffect` handling global `mousedown`/`keydown` events mapped to a container `useRef`.
