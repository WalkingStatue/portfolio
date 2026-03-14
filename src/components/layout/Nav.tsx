import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import ThemeSwitcher from '../ui/ThemeSwitcher'

const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'BLOG', href: '#blog' },
    { label: 'CONTACT', href: '#contact' },
]

export default function Nav() {
    const [time, setTime] = useState('')
    const [scrolled, setScrolled] = useState(false)

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            })
            setTime(`IND ${formatter.format(now)}`)
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]'
                : 'bg-transparent'
                }`}
        >
            <div className="section-container py-6 px-8 md:px-12 lg:px-16 flex items-center justify-between">
                <a href="#" className="text-sm font-semibold tracking-wide text-white">
                    DHRUV&copy;
                </a>

                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-xs font-medium text-[var(--color-text-muted)] hover:text-white transition-colors duration-300 tracking-widest"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <ThemeSwitcher />
                    <span className="text-xs font-medium text-[var(--color-text-muted)] tabular-nums tracking-wide hidden sm:block">
                        {time}
                    </span>
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-accent)] origin-left"
                style={{ scaleX, opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.header>
    )
}
