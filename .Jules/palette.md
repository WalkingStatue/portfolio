## 2024-10-30 - Invalid nesting with animated component wrappers
**Learning:** Animated wrapper components (like `MagneticButton`) that default to rendering `<button>` elements can easily cause invalid HTML structure when consumers pass `<a>` tags as children. This invalid nesting breaks accessibility trees and confuses screen readers.
**Action:** When creating wrapper UI components that accept arbitrary children but might also handle click/navigation logic, conditionally render fragments (`<>{content}</>`) as the default fallback when neither `href` nor `onClick` are explicitly passed.
