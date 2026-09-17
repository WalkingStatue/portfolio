## 2024-05-18 - MagneticButton component lacking keyboard focus styles
**Learning:** The MagneticButton component wraps interactive elements but suppresses or obscures default browser focus outlines, creating an accessibility issue for keyboard users trying to navigate the application.
**Action:** Always include explicit Tailwind `focus-visible` utility classes on the root interactive tags (e.g., `<a>` or `<button>`) within custom interactive wrapper components.
