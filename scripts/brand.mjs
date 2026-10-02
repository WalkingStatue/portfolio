/** Generate the shared ds. identity and site-specific social card.
 * Portfolio: node scripts/brand.mjs
 * Notebook: node scripts/brand.mjs --site blog
 * Optional staging destination: --output /absolute/path/to/public
 */
import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { parseArgs } from 'node:util'

const { values } = parseArgs({ options: {
  site: { type: 'string', default: 'portfolio' },
  output: { type: 'string', default: 'public' },
} })
if (!['portfolio', 'blog'].includes(values.site)) throw new Error('site must be portfolio or blog')
const out = resolve(values.output)
const blog = values.site === 'blog'
const PAPER = '#f7f7ef', INK = '#273126', LIME = '#d8ef7c', SAGE = '#e9eddf', MUTED = '#666c60'
const SERIF = 'DejaVu Serif, Georgia, serif'
const SANS = 'DejaVu Sans, Arial, sans-serif'
const MONO = 'DejaVu Sans Mono, monospace'

// A solid background also keeps home-screen icons legible under platform masks.
function icon(size, height = size, square = false) {
  const markSize = Math.min(size, height)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${height}" viewBox="0 0 ${size} ${height}">
    <rect width="${size}" height="${height}" rx="${square ? 0 : markSize * .5}" fill="${INK}"/>
    <svg x="${(size - markSize) / 2}" y="${(height - markSize) / 2}" width="${markSize}" height="${markSize}" viewBox="0 0 128 128">
      <text x="64" y="87" text-anchor="middle" font-family="${SERIF}" font-style="italic" font-size="82" letter-spacing="-7" fill="${LIME}">ds.</text>
    </svg>
  </svg>`
}
function card() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs><pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#acb99a"/></pattern></defs>
    <rect width="1200" height="630" fill="${PAPER}"/>
    <line x1="64" y1="123" x2="1136" y2="123" stroke="#dcded1"/>
    <circle cx="92" cy="72" r="28" fill="${INK}"/>
    <text x="92" y="85" text-anchor="middle" font-family="${SERIF}" font-style="italic" font-size="35" letter-spacing="-3" fill="${LIME}">ds.</text>
    <text x="140" y="80" font-family="${MONO}" font-size="16" letter-spacing="2" fill="${INK}">${blog ? 'AN ENGINEERING NOTEBOOK' : 'AI ENGINEER / AHMEDABAD, INDIA'}</text>
    <rect x="822" y="170" width="314" height="358" rx="150" fill="${SAGE}"/>
    <rect x="822" y="170" width="314" height="358" rx="150" fill="url(#dots)"/>
    <g transform="translate(979 344)" fill="none" stroke="#697f51"><ellipse rx="133" ry="62" transform="rotate(-40)"/><ellipse rx="133" ry="62" transform="rotate(40)"/><ellipse rx="133" ry="62" transform="rotate(90)"/></g>
    <circle cx="979" cy="344" r="49" fill="${LIME}"/>
    <text x="979" y="364" text-anchor="middle" font-family="${SERIF}" font-style="italic" font-size="59" letter-spacing="-5" fill="${INK}">ds.</text>
    <circle cx="918" cy="244" r="7" fill="${INK}"/><circle cx="1080" cy="419" r="7" fill="${LIME}" stroke="#697f51"/>
    <text x="64" y="278" font-family="${SERIF}" font-size="82" letter-spacing="-4" fill="${INK}">Dhruv Saija.</text>
    <text x="67" y="352" font-family="${SERIF}" font-size="35" fill="${INK}">${blog ? 'An engineering notebook.' : 'AI systems. Useful software.'}</text>
    <text x="67" y="410" font-family="${SANS}" font-size="23" fill="${MUTED}">${blog ? 'Notes on AI, software, and the work behind them.' : 'From the first idea to everyday use.'}</text>
    <line x1="64" y1="556" x2="1136" y2="556" stroke="#dcded1"/>
    <text x="67" y="597" font-family="${MONO}" font-size="19" fill="${INK}">${blog ? 'blog.dhruvsaija.in' : 'dhruvsaija.in'}</text>
  </svg>`
}
await mkdir(join(out, 'favicon'), { recursive: true })
async function emit(name, svg) { await sharp(Buffer.from(svg)).png().toFile(join(out, name)) }
await writeFile(join(out, 'favicon.svg'), icon(128))
for (const size of [16, 32, 48, 96, 128, 196]) await emit(`favicon/favicon-${size}x${size}.png`, icon(size))
for (const size of [192, 512]) await emit(`favicon/android-chrome-${size}x${size}.png`, icon(size, size, true))
for (const size of [57, 60, 72, 76, 114, 120, 144, 152, 167, 180]) await emit(`favicon/apple-touch-icon-${size}x${size}.png`, icon(size, size, true))
await emit('apple-touch-icon.png', icon(180, 180, true))
for (const size of [70, 144, 150, 310]) await emit(`favicon/mstile-${size}x${size}.png`, icon(size, size, true))
await emit('favicon/mstile-310x150.png', icon(310, 150, true))
// ICO with embedded PNG frames for legacy browser fallback.
const frames = await Promise.all([16, 32, 48].map(size => sharp(Buffer.from(icon(size))).png().toBuffer()))
const header = Buffer.alloc(6 + frames.length * 16)
header.writeUInt16LE(1, 2); header.writeUInt16LE(frames.length, 4)
let offset = header.length
frames.forEach((frame, index) => {
  const entry = 6 + index * 16, size = [16, 32, 48][index]
  header[entry] = size; header[entry + 1] = size
  header.writeUInt16LE(1, entry + 4); header.writeUInt16LE(32, entry + 6)
  header.writeUInt32LE(frame.length, entry + 8); header.writeUInt32LE(offset, entry + 12)
  offset += frame.length
})
await writeFile(join(out, 'favicon.ico'), Buffer.concat([header, ...frames]))
await emit('og-image.png', card())
await writeFile(join(out, 'site.webmanifest'), JSON.stringify({
  id: '/', name: blog ? 'Dhruv Saija — An engineering notebook' : 'Dhruv Saija — Portfolio',
  short_name: blog ? 'Dhruv’s notebook' : 'Dhruv Saija',
  description: blog ? 'Notes on AI systems, software, and the engineering judgment behind them.' : 'AI systems, useful software, and reliable automation by Dhruv Saija.',
  start_url: '/', scope: '/', display: 'standalone', background_color: PAPER, theme_color: PAPER,
  icons: [192, 512].map(size => ({ src: `/favicon/android-chrome-${size}x${size}.png`, type: 'image/png', sizes: `${size}x${size}`, purpose: 'any maskable' })),
}, null, 2) + '\n')
console.log(`brand: generated ${values.site} icons, manifest, and 1200×630 social card in ${out}`)
