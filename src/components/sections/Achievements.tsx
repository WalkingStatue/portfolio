import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Medal, Target } from '@phosphor-icons/react'

const achievements = [
    {
        icon: Medal,
        title: 'Impact Creator',
        detail: 'Q3 2025, E2M Solutions (awarded as an intern)',
    },
    {
        icon: Trophy,
        title: '1st Place — U-19 Interhouse Basketball',
        detail: 'Basketball Competition',
    },
    {
        icon: Target,
        title: 'Top 10 — National Science & Cyber Olympiads',
        detail: 'School Level (2015-2018)',
    },
]

export default function Achievements() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="py-32 px-4" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-4"
                >
                    Achievements
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold tracking-tighter mb-16"
                >
                    Recognition &
                    <span className="text-[var(--color-accent)]"> awards</span>
                </motion.h2>

                <div className="space-y-0">
                    {achievements.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 + i * 0.1 }}
                            className={`flex items-center gap-4 py-6 ${i > 0 ? 'border-t border-[var(--color-border)]' : ''}`}
                        >
                            <item.icon size={24} weight="light" className="text-[var(--color-accent)] shrink-0" />
                            <div>
                                <p className="font-semibold text-base">{item.title}</p>
                                <p className="text-sm text-[var(--color-text-muted)]">{item.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
