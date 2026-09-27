/**
 * Brand asset generation.
 *
 * The site deliberately has no logo or monogram — the wordmark in the nav is plain text.
 * So these assets carry no mark either: the icons are a flat accent-coloured tile (a colour
 * chip, purely so browser tabs and home screens have something legible to show), and the
 * Open Graph card is typography only.
 *
 * Re-run after changing the palette in src/index.css:
 *
 *   node scripts/brand.mjs
 *
 * Output goes to public/favicon/ and public/og-image.png. The generated files are committed —
 * this is not part of `npm run build`, because they change far less often than the code.
 */
import sharp from 'sharp'

// Mirrors the default theme in src/index.css (@theme block). Keep in step.
const CORAL = '#f4564a'
const NAVY = '#0f1c3d'
const CREAM = '#faf4f0'
const MUTED = '#536287'

const SANS = "'Segoe UI', 'Helvetica Neue', Arial, Helvetica, sans-serif"

/**
 * A flat accent tile. No letterform, no mark — at 16px anything more detailed turns to mush
 * anyway. `rounded` is off for Apple touch icons, which iOS masks itself.
 */
function tile(width, height = width, { rounded = true } = {}) {
    const radius = rounded ? Math.min(width, height) * 0.22 : 0
    return Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" rx="${radius}" fill="${CORAL}"/>
</svg>`,
    )
}

/** The 1200x630 social card: name and role, set in the light palette the site ships with. */
function ogCard() {
    return Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${CREAM}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${CORAL}"/>

  <text x="100" y="292" font-family="${SANS}" font-size="96" font-weight="700"
        letter-spacing="-3" fill="${NAVY}">Dhruv Saija</text>
  <rect x="104" y="330" width="72" height="6" fill="${CORAL}"/>
  <text x="104" y="398" font-family="${SANS}" font-size="42" font-weight="600"
        letter-spacing="0.5" fill="${CORAL}">AI Engineer</text>
  <text x="104" y="452" font-family="${SANS}" font-size="28" font-weight="400"
        fill="${MUTED}">GenAI · RAG · LLM pipelines · Automation</text>

  <text x="100" y="566" font-family="${SANS}" font-size="24" font-weight="600"
        letter-spacing="1" fill="${MUTED}">dhruvsaija.in</text>
</svg>`,
    )
}

const FAVICONS = [16, 32, 96, 128, 196]
const ANDROID = [192, 512]
const APPLE = [57, 60, 72, 76, 114, 120, 144, 152, 167, 180]
const SQUARE_TILES = [70, 144, 150, 310]

const written = []

async function emit(path, buffer) {
    await sharp(buffer).png().toFile(path)
    written.push(path)
}

for (const size of FAVICONS) {
    await emit(`public/favicon/favicon-${size}x${size}.png`, tile(size))
}

for (const size of ANDROID) {
    await emit(`public/favicon/android-chrome-${size}x${size}.png`, tile(size))
}

for (const size of APPLE) {
    // iOS applies its own rounded mask, so these ship square to avoid a double-rounded edge.
    await emit(`public/favicon/apple-touch-icon-${size}x${size}.png`, tile(size, size, { rounded: false }))
}

for (const size of SQUARE_TILES) {
    await emit(`public/favicon/mstile-${size}x${size}.png`, tile(size, size, { rounded: false }))
}

await emit('public/favicon/mstile-310x150.png', tile(310, 150, { rounded: false }))
await emit('public/og-image.png', ogCard())

console.log(`brand: wrote ${written.length} files`)
for (const path of written) console.log(`  ${path}`)
