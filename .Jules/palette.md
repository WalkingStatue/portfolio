## 2026-08-02 - Ensure Keyboard Accessibility on Framer Motion Wrappers
**Learning:** Nested Framer Motion structures can obscure native browser focus outlines. Always explicitly add focus-visible utility classes to the root interactive elements (`<a>` or `<button>`) of custom wrapper components (like MagneticButton) to ensure keyboard navigation remains accessible.
**Action:** Added `focus-visible` classes to MagneticButton root elements and updated external link regex.
