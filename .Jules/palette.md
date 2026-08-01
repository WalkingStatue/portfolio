## 2026-08-01 - Interactive Elements inside Animated Wrappers
**Learning:** When using Framer Motion animated wrappers (like MagneticButton), nesting standard interactive elements like `<a>` or `<button>` can result in redundant tab targets and complex focus issues if the wrapper doesn't map these native behaviors correctly.
**Action:** Pass routing props directly to the wrapper component, making it render natively as the interactive tag, and style the inner children simply as `<span>`s or `<div>`s.
