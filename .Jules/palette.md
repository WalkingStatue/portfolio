## 2024-03-20 - [Fix MagneticButton Accessiblity]
**Learning:** Animated wrappers (like Framer Motion's `MagneticButton`) can unintentionally obscure native browser focus outlines and semantic HTML tags. If these wrappers contain generic `<div>`s instead of native `<a>` or `<button>` elements, they become inaccessible via keyboard navigation.
**Action:** When creating wrapper components for interactions, ensure they render semantically correct elements (e.g. `<a>` or `<button>`) with explicit `focus-visible` utility classes (e.g. `focus-visible:ring-2`) to guarantee keyboard accessibility.
