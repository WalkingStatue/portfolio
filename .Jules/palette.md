## 2024-03-20 - Keyboard Accessibility for Framer Motion Wrappers
**Learning:** Nested interactive elements inside Framer Motion wrapper components (like `motion.div` wrapped inside `a` or `button`) can obscure native browser focus outlines, causing accessibility issues for keyboard users.
**Action:** Always conditionally render semantic root elements (e.g., `motion.a` or `motion.button`) directly and apply explicit `focus-visible` utility classes to ensure visible keyboard navigation states.
