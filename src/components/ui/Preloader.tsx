import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Preloader() {
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(() => setIsLoading(false), 800)
                    return 100
                }
                // Random jumps for a more organic, "downloading" feel
                return prev + Math.floor(Math.random() * 15) + 1
            })
        }, 150)

        return () => clearInterval(timer)
    }, [])

    if (!isLoading) return null

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={progress === 100 ? { y: '-100vh', opacity: 0 } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
            className="fixed inset-0 z-[100] bg-[var(--color-bg)] flex flex-col items-center justify-center p-8 overflow-hidden"
        >
            <div className="w-full max-w-sm">
                <div className="flex justify-between items-end mb-4 overflow-hidden">
                    <motion.span
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="text-xs font-semibold tracking-widest text-[var(--color-text-muted)]"
                    >
                        SYSTEM_BOOTING
                    </motion.span>
                    <motion.span
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                        className="text-3xl font-bold tabular-nums text-[var(--color-text)]"
                    >
                        {progress > 100 ? 100 : progress}%
                    </motion.span>
                </div>

                <div className="h-[2px] w-full bg-[var(--color-border)] overflow-hidden relative">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ type: 'tween', ease: 'easeOut', duration: 0.1 }}
                        className="absolute top-0 left-0 bottom-0 bg-[var(--color-accent)]"
                    />
                </div>
            </div>
        </motion.div>
    )
}
