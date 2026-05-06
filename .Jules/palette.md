## 2024-05-06 - Custom Animated Dropdowns Accessibility
**Learning:** When building custom animated dropdowns (like ThemeSwitcher) with Framer Motion, it is critical to include explicit ARIA roles (`menu`, `menuitem`, `presentation`) and attributes (`aria-haspopup`, `aria-expanded`). Additionally, custom dropdowns must handle `Escape` key events to close the menu, ensuring proper keyboard navigation parity with native elements.
**Action:** Always add ARIA menu semantics and `Escape` key listeners to custom dropdown implementations.
