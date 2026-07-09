## 2026-07-09 - Accessibility for Animated Dropdowns
**Learning:** Custom animated dropdowns (like those built with Framer Motion) lack native keyboard accessibility and screen reader support. They require explicit ARIA roles (`menu`, `menuitem`, `presentation`) and focus states (`focus-visible`).
**Action:** When building or maintaining custom dropdowns, always wire up `aria-haspopup`, `aria-expanded`, and `role` attributes, and ensure interactive elements have clear `focus-visible` styles.
