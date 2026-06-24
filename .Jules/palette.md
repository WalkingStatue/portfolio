## 2024-06-24 - Accessibility and Semantic HTML Learnings
**Learning:** Custom interactive dropdowns and wrappers require explicit ARIA roles (menu, menuitem) and semantic HTML structure to be accessible. Improper conditional rendering in wrappers can lead to invalid HTML (e.g., nesting interactive elements).
**Action:** Add ARIA attributes to ThemeSwitcher and conditionally render MagneticButton root to avoid nesting a and button tags.
