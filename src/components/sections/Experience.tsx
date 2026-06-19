import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
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
        title: 'AI Engineer',
        company: 'E2M Solutions',
        type: 'Full-Time',
        period: 'April 2026 — Present',
        bullets: [
            'Lead client-facing technical discussions, presenting strategic updates, project milestones, and actionable insights to stakeholders.',
            'Spearhead end-to-end delivery of full-scale AI initiatives, autonomously managing the lifecycle from initial concept and architecture to deployment.',
            'Provide ongoing technical leadership and architectural oversight for existing infrastructure, ensuring the scalability and reliability of internal automation processes.'
        ]
    },
    {
        title: 'Associate AI Executor',
        company: 'E2M Solutions',
        type: 'Full-Time',
        period: 'Sept 2025 — April 2026',
        bullets: [
            'Facilitated client discovery sessions to gather technical requirements and architected comprehensive execution strategies for cross-functional teams.',
            'Engineered and deployed production-ready, GenAI-enabled web applications utilizing React, Node.js, and Supabase across Railway and Vercel environments.',
            'Architected robust AI pipelines, optimizing model selection (proprietary vs. open-source) and employing advanced prompt engineering to maximize business value.',
            'Developed and launched an end-to-end AI Blog Generation platform incorporating an RLHF feedback loop, substantially accelerating content production lifecycles for agency clients.',
            'Designed and shipped scalable automation solutions, including a Newsletter Generator and SEO Audit Tool, effectively replacing legacy manual workflows.',
            'Directed and mentored a team of engineering interns, overseeing task delegation, tracking deliverables, and ensuring project milestones aligned with client expectations.'
        ],
    },
    {
        title: 'AI Intern',
        company: 'E2M Solutions',
        type: 'Internship',
        period: 'June 2025 — Sept 2025',
        bullets: [
            'Engineered complex automation workflows using n8n to streamline internal operations and enhance client-facing service delivery.',
            'Developed custom, cloud-hosted micro-applications integrating React frontends with n8n backend architectures on Railway and Vercel.',
            'Implemented rigorous LLM evaluation frameworks and advanced prompt engineering techniques to elevate output quality across various AI integrations.',
            'Authored comprehensive technical documentation, including system architectures, workflow guides, and standardized onboarding protocols.',
            'Assisted in talent acquisition by evaluating and screening prospective intern candidates for technical proficiency and team fit.'
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

function TimelineNode({ role, index, progress }: { role: Role, index: number, progress: MotionValue<number> }) {
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
