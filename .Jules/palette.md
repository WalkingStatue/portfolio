## 2024-05-24 - Focus Visibility in Animated Components
**Learning:** Nested focus outlines in complex interactive elements (like Framer Motion wrappers) often obscure native browser focus outlines.
**Action:** Always apply `focus-visible` utility classes directly to the root interactive semantic tags (`<a>` or `<button>`) rather than relying on browser defaults when building custom animated components.
