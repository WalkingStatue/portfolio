## 2024-05-24 - Accessibility improvements to MagneticButton in Footer

**Learning:** MagneticButton wrapper components that conditionally render as `<a>` tags need special care to ensure they are accessible via keyboard navigation. Since they abstract away the native `<a>` element, it's crucial to apply keyboard focus styles directly to the component when it functions as a link, and to change any nested anchor tags to `<span>` tags so that they are correctly interpreted by screen readers.

**Action:** Update the usages of `<MagneticButton>` where they were used for links. Instead of nesting an `<a href="...">` inside the `MagneticButton`, pass the `href` directly to `MagneticButton`. Then, replace the nested `<a>` with a `<span>` to avoid rendering interactive elements inside another interactive element, and add explicit Tailwind `focus-visible` classes (like `focus-visible:ring-2`) to ensure that keyboard focus is properly indicated.
