## 2025-02-14 - Fix semantic HTML wrappers for conditional click handlers

**Learning:** When creating reusable interactive wrapper components (like `MagneticButton`), always conditionally render the root element. If the wrapper blindly renders a `<button>` and the consuming component wraps a link (`<a>`), it creates invalid HTML nesting (`<a>` inside `<button>`). This invalid nesting completely breaks keyboard navigation (tab order) and causes screen readers to misinterpret the element's role.

**Action:** Before rendering an interactive element like `<button>` inside wrapper components, check the props (e.g., `href` or `onClick`). If neither are provided and it simply wraps content, return a React fragment `<>{content}</>` instead.
