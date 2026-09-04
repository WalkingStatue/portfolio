## 2024-09-04 - [Explicit Keyboard Focus and Link Matching]
**Learning:** Nested animation structures (like Framer Motion wrappers inside custom buttons) can obscure native browser focus outlines, and case-sensitive external link checks fail on protocol-relative or uppercase URLs.
**Action:** Always add explicit `focus-visible` utility classes to root interactive tags in custom wrappers, and use robust regex (e.g., `/^(https?:\/\/|\/\/)/i`) for checking external links.
