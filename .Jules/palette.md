## 2024-05-31 - Theme Switcher Keyboard and ARIA Accessibility
**Learning:** Custom Framer Motion animated dropdowns often lack native ARIA roles (`role="menu"`, `aria-expanded`, etc.) and native keyboard interaction (like closing with the `Escape` key) which are necessary for screen reader support and keyboard usability.
**Action:** Always add ARIA roles (`menu`, `menuitem`, `presentation`), `aria-expanded`, `aria-haspopup`, and handle Escape key and outside click events when building custom interactive dropdown components with Framer Motion.
