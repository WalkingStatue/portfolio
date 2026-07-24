## 2024-07-24 - Invalid Nested Interactive Elements
**Learning:** Using a custom button component (`MagneticButton`) that defaults to `<button>` wrapping an `<a>` tag creates invalid HTML (`<button><a>...</a></button>`). This severely degrades accessibility as screen readers and keyboard navigation cannot parse nested interactive controls properly.
**Action:** Always verify what root element a wrapper component renders. Pass `href` to the wrapper so it renders as an `<a>` and use `<span>` for the children, instead of nesting an `<a>` inside.
