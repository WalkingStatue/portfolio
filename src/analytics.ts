const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-VCXJRPHM7S'
const productionHostname = 'dhruvsaija.in'

type AnalyticsEvent =
  | 'email_click'
  | 'github_click'
  | 'portfolio_to_blog'
  | 'resume_download'

function cleanLinkUrl(url: URL) {
  return `${url.origin}${url.pathname}`
}

function linkLocation(anchor: HTMLAnchorElement) {
  if (anchor.closest('header')) return 'header'
  if (anchor.closest('footer')) return 'footer'
  if (anchor.closest('#contact')) return 'contact'
  if (anchor.closest('#writing')) return 'writing'
  if (anchor.closest('#projects')) return 'projects'
  return 'content'
}

function eventFor(anchor: HTMLAnchorElement): AnalyticsEvent | undefined {
  const href = anchor.getAttribute('href') || ''
  if (href.startsWith('mailto:')) return 'email_click'

  const url = new URL(anchor.href, window.location.origin)
  if (url.hostname === 'github.com') return 'github_click'
  if (url.hostname === 'blog.dhruvsaija.in') return 'portfolio_to_blog'
  if (url.pathname.toLowerCase().endsWith('.pdf')) return 'resume_download'
}

export function initializeAnalytics() {
  if (!import.meta.env.PROD || window.location.hostname !== productionHostname || !/^G-[A-Z0-9]+$/.test(measurementId) || typeof window.gtag !== 'function') return

  window.gtag('config', measurementId, { linker: { domains: ['dhruvsaija.in', 'blog.dhruvsaija.in'] } })

  document.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof Element)) return
    const anchor = target.closest<HTMLAnchorElement>('a[href]')
    if (!anchor) return

    const eventName = eventFor(anchor)
    if (!eventName) return

    const url = new URL(anchor.href, window.location.origin)
    window.gtag?.('event', eventName, {
      link_url: cleanLinkUrl(url),
      link_text: (anchor.textContent || '').trim().slice(0, 100),
      link_location: linkLocation(anchor),
    })
  })
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
