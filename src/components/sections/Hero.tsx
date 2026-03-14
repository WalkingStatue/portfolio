import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import DynamicFontText from '../ui/DynamicFontText'
import ScrambleText from '../ui/ScrambleText'

const roles = ['AI Engineer', 'Full-Stack Developer', 'GenAI Architect', 'Automation Specialist']

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, 150])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden z-10">
            <motion.div style={{ y, opacity }} className="section-container flex flex-col items-center text-center py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-8 h-6 relative w-full flex justify-center"
                >
                    <ScrambleText
                        texts={roles}
                        className="absolute"
                        expandSpeed={30}
                        scrambleSpeed={30}
                        revealSpeed={40}
                        pauseDuration={2500}
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[12vw] md:text-[min(9vw,130px)] font-bold uppercase tracking-tightest leading-[0.85] text-white mb-10 whitespace-nowrap"
                >
                    <DynamicFontText text="DHRUV SAIJA" interval={0.2} />
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="text-base md:text-lg text-[var(--color-text-muted)] max-w-[65ch] mx-auto leading-relaxed mb-12"
                >
                    I design and build production-grade GenAI products, automation pipelines, and full-stack web applications at E2M Solutions. My focus is turning complex AI capabilities into real-world business solutions that save time and resources at scale.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="flex flex-wrap gap-5 justify-center items-center"
                >
                    <a href="#contact" className="inline-flex items-center justify-center px-10 py-4 bg-[var(--color-accent)] text-white text-sm font-semibold tracking-wide rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors">
                        LET'S WORK TOGETHER
                    </a>
                    <a href="#blog" className="inline-flex items-center justify-center px-10 py-4 border border-[var(--color-border)] text-[var(--color-text-muted)] text-sm font-semibold tracking-wide rounded-lg hover:border-white/30 hover:text-white transition-all">
                        READ MY WRITING
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} className="w-5 h-8 rounded-full border-2 border-[var(--color-border)] flex items-start justify-center p-1">
                    <div className="w-1 h-2 rounded-full bg-[var(--color-accent)]" />
                </motion.div>
            </motion.div>
        </section>
    )
}
