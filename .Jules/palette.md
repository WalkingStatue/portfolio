## 2024-05-14 - Custom Dropdown Menu Accessibility
**Learning:** Custom animated dropdowns (like ThemeSwitcher) often lack native `<select>` accessibility features. Screen readers struggle to parse them without explicit structural hints, and keyboard users can get trapped if `Escape` key handlers are missing.
**Action:** When building custom dropdowns, always implement explicit ARIA roles (`menu`, `menuitem`, `presentation` for headers), `aria-expanded`/`haspopup` states, and ensure the menu can be closed via the Escape key and clicks outside the component.
