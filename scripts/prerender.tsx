/**
 * Static pre-rendering.
 *
 * Vite emits a `dist/index.html` whose body is an empty `<div id="root"></div>` — every
 * word of the page would otherwise arrive only after React boots, which is invisible to
 * anything that does not run JavaScript. This runs after `vite build`, renders the app to
 * HTML with React, and writes that markup into the shell. `src/main.tsx` then hydrates the
 * existing nodes rather than replacing them.
 *
 * The site is one route with no per-request data, so this is a single render rather than a
 * loop over pages, and the output stays a purely static deploy.
 */
import { readFile, writeFile } from 'node:fs/promises'
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

const FILE = 'dist/index.html'

// Matches the empty container in index.html. Kept as a constant so that a change to the
// shell fails the build here instead of silently shipping an unrendered page.
const ROOT = '<div id="root"></div>'

const shell = await readFile(FILE, 'utf8')

if (!shell.includes(ROOT)) {
    throw new Error(`prerender: could not find ${ROOT} in ${FILE} — has index.html changed?`)
}

const markup = renderToString(
    <StrictMode>
        <App />
    </StrictMode>,
)

await writeFile(FILE, shell.replace(ROOT, `<div id="root">${markup}</div>`), 'utf8')

console.log(`prerender: ${FILE} (${markup.length.toLocaleString()} chars of markup)`)
