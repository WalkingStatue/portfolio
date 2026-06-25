## 2024-05-24 - Accessible Framer Motion Dropdowns
**Learning:** Custom framer-motion dropdowns need explicit ARIA menu roles since they do not use native HTML <select> elements.
**Action:** Add role="menu", role="menuitem", aria-haspopup, and aria-expanded to custom dropdown implementations.
