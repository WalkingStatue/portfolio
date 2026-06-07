## 2024-06-07 - Accessible Framer Motion Dropdowns

**Learning:** When using `framer-motion`'s `<AnimatePresence>` for custom dropdown menus (like `ThemeSwitcher.tsx`), the native semantic HTML features of `<select>` or native menus are lost. This leads to missing screen reader announcements (no `role="menu"` or `role="menuitem"`), lack of state communication (`aria-expanded`), and poor keyboard usability (no Escape key to close, no outside click detection).

**Action:** Whenever building custom interactive dropdowns or popovers with Framer Motion in this design system, always explicitly add ARIA roles (`role="menu"`, `role="menuitem"`, `role="presentation"` for headers) and bind `useEffect` event listeners for the `Escape` key and outside clicks to ensure they remain functional for all users without sacrificing visual aesthetics.
