import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette } from '@phosphor-icons/react'

const themes = [
    { id: 'default', label: 'Default', class: '' },
    { id: 'focus', label: 'Focus', class: 'theme-focus' },
    { id: 'overclock', label: 'Overclock', class: 'theme-overclock' },
    { id: 'raw', label: 'Raw', class: 'theme-raw' }
]

export default function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentTheme, setCurrentTheme] = useState('default')

    // On mount, load saved theme or default
    useEffect(() => {
        const saved = localStorage.getItem('theme-mode')
        if (saved) {
            setCurrentTheme(saved)
            const themeObj = themes.find(t => t.id === saved)
            if (themeObj && themeObj.class) {
                document.documentElement.setAttribute('class', themeObj.class)
            } else {
                document.documentElement.setAttribute('class', '')
            }
        }
    }, [])

    const handleThemeChange = (themeId: string) => {
        const themeObj = themes.find(t => t.id === themeId)
        if (!themeObj) return

        setCurrentTheme(themeId)
        localStorage.setItem('theme-mode', themeId)

        // Clear classes and apply newly selected theme
        if (themeObj.class) {
            document.documentElement.setAttribute('class', themeObj.class)
        } else {
            document.documentElement.setAttribute('class', '')
        }

        setIsOpen(false)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 hover:text-[var(--color-accent)] text-[var(--color-text-muted)] transition-colors"
                aria-label="Toggle Execution Mode"
                aria-expanded={isOpen}
                aria-haspopup="menu"
            >
                <Palette weight="bold" className="w-4 h-4" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-12 min-w-[140px] p-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md shadow-2xl flex flex-col gap-1 z-[100]"
                    >
                        <div role="presentation" className="px-3 py-2 border-b border-[var(--color-border)] mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-subtle)]">Select Mode</span>
                        </div>
                        {themes.map(t => (
                            <button
                                key={t.id}
                                role="menuitem"
                                onClick={() => handleThemeChange(t.id)}
                                className={`text-left text-xs font-semibold tracking-wider uppercase px-3 py-2.5 rounded-md transition-colors ${currentTheme === t.id ? 'bg-[var(--color-accent)] text-[var(--color-bg)]' : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]'}`}
                            >
                                {t.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
