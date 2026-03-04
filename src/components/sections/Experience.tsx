import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface Role {
    title: string
    company: string
    type: string
    period: string
    bullets: string[]
}

const roles: Role[] = [
    {
        title: 'Associate AI Executor',
        company: 'E2M Solutions',
        type: 'Full-Time',
        period: 'Sept 2025 — Present',
        bullets: [
            'Attend client discovery calls, extract requirements, and design execution plans for the team.',
            'Build full-scale GenAI-enabled web applications using React, Node.js, Supabase, deployed on Railway and Vercel.',
            'Design AI pipelines with careful attention to prompt engineering, model selection (proprietary vs. open-source), and knowing where AI adds value vs. where it doesn\'t.',
            'Delivered an end-to-end AI Blog Generation platform (topic research → draft → RLHF feedback loop), significantly reducing content production time for agency clients.',
            'Built and shipped a Newsletter Generator, SEO Audit Tool, and internal process automation tools that replace manual workflows.',
            'Manage and mentor a team of interns — assign tasks, track progress, and ensure deliverables are collected before every client meeting.',
        ],
    },
    {
        title: 'AI Intern',
        company: 'E2M Solutions',
        type: 'Internship',
        period: 'June 2025 — Sept 2025',
        bullets: [
            'Designed and built n8n automation workflows for internal and client-facing processes.',
            'Developed and deployed custom micro-applications with React frontends and n8n as the automation backend, hosted on Railway and Vercel.',
            'Applied prompt engineering and LLM evaluation practices to improve output quality across AI tools.',
            'Wrote technical documentation for tools, workflows, and onboarding materials.',
            'Evaluated and screened incoming intern candidates for technical fit and communication skills.',
        ],
    },
]

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Track scroll through the timeline section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center']
    })

    // Grow the vertical line as the user scrolls
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <section id="experience" className="py-28 md:py-40 relative z-10" ref={containerRef}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-[var(--color-border)] pb-8 mb-24"
                >
                    <div>
                        <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-accent)] mb-4">EXPERIENCE</p>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">Where I've Worked</h2>
                    </div>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* The static background line */}
                    <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-border)] -translate-x-1/2 rounded-full" />

                    {/* The animated dynamic line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-[24px] md:left-1/2 top-0 w-[2px] bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)] -translate-x-1/2 rounded-full origin-top z-0"
                    />

                    <div className="space-y-24 md:space-y-32">
                        {roles.map((role, i) => (
                            <TimelineNode
                                key={i}
                                role={role}
                                index={i}
                                progress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function TimelineNode({ role, index, progress }: { role: Role, index: number, progress: any }) {
    // Alternating layout for desktop: even index on left, odd on right
    const isEven = index % 2 === 0

    // Calculate the trigger point for this specific node along the scroll timeline
    const triggerStart = (index * 0.4) // space them out
    const triggerEnd = triggerStart + 0.2

    // Compute the glow of the dot based on scroll crossing its position
    const dotOpacity = useTransform(progress, [triggerStart, triggerEnd], [0, 1])
    const dotScale = useTransform(progress, [triggerStart, triggerEnd], [0.5, 1])

    return (
        <div className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} group`}>

            {/* The Timeline Dot */}
            <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-border)] -translate-x-1/2 mt-7 z-10">
                {/* Glowing inner dot that fills when scroll reaches it */}
                <motion.div
                    style={{ opacity: dotOpacity, scale: dotScale }}
                    className="absolute inset-[-2px] bg-[var(--color-accent)] rounded-full shadow-[0_0_15px_var(--color-accent)]"
                />
            </div>

            {/* Empty space for alternating layout on desktop */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}
            >
                <div className="mb-6">
                    <p className={`text-sm font-semibold tracking-wider text-[var(--color-accent)] mb-2 uppercase ${isEven ? 'md:justify-end md:flex' : ''}`}>
                        {role.period}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">{role.title}</h3>
                    <p className="text-lg text-[var(--color-text-subtle)] font-medium">{role.company} · {role.type}</p>
                </div>

                <ul className={`space-y-4 ${isEven ? 'md:inline-block' : ''}`}>
                    {role.bullets.map((bullet, j) => (
                        <motion.li
                            key={j}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 + j * 0.1 }}
                            className={`text-[15px] text-[var(--color-text-muted)] leading-[1.8] relative pl-4 border-l-2 border-[var(--color-border)] group-hover:border-[var(--color-text-muted)] transition-colors duration-500 ${isEven ? 'md:border-l-0 md:border-r-2 md:pl-0 md:pr-4' : ''}`}
                        >
                            {bullet}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

        </div>
    )
}
