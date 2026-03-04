# Dhruv Saija — Developer Portfolio

A high-performance, design-engineered personal portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion. 

This project moves away from standard developer portfolio templates to focus on premium, editorial-grade aesthetics, physics-based interactions, and non-standard color palettes.

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) (TypeScript)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Engine:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Phosphor Icons](https://phosphoricons.com/)

## Key Built-In Features

- **Physics-Based Interactions:** Elements like the Custom Cursor, Interactive Spotlight Glow, and Magnetic Footer Buttons use `framer-motion` springs (`useSpring`) for realistic inertia, damping, and magnetic tracking rather than basic CSS transitions.
- **Dynamic Text Effects:** Custom components for scrambling text (`ScrambleText`) and continuously glitch-cycling through different geometric font families (`DynamicFontText`) on the main Hero.
- **The "Execution Mode" Theme Switcher:** A globally injected CSS variable switching system (`ThemeSwitcher.tsx`) that cycles the entire site instantly between four distinct, high-impact aesthetic palettes:
  - `Default`: Muted Peach & Navy (Editorial)
  - `Focus`: The Technical Blueprint (Navy & Construction Orange)
  - `Overclock`: Thermal Vision (Abyssal Black & Toxic Green)
  - `Raw`: Neo-Brutal Canvas (Paper White, Ink, & Bubblegum Pink)
- **Cinematic Overlays:** To break the "digital" feel, the site uses a global `<NoiseGrain />` SVG data-uri overlay (`mix-blend-multiply` with 4% opacity) and a structural engineering `<div className="bg-grid">` background to add physical texture and scale to the layouts.

## Project Structure

```text
src/
├── components/
│   ├── layout/       # Core structural components (Nav, Footer)
│   ├── sections/     # Main page content blocks (Hero, About, Projects, etc.)
│   └── ui/           # Reusable interactive components (CustomCursor, ScrambleText, etc.)
├── App.tsx           # Main application shell routing the sections
├── index.css         # Tailwind v4 configuration, theme variables, and global overrides
└── main.tsx          # React entry point
```

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Vite development server:
   ```bash
   npm run dev
   ```

## Development & Aesthetics Notes

### Typography
The site uses `Satoshi` as the base sans-serif font for body copy, and dynamically injects `Syne`, `Unbounded`, `Space Grotesk`, and `Archivo Black` during title glitch animations to represent a highly technical, robust brand identity. 

### Tailwind v4 Configuration
This project uses the new Vite-native Tailwind v4 `@theme` block injected directly into `index.css` rather than a separate `tailwind.config.js` file, enabling lightning-fast HMR and simplified theme variable mappings.
