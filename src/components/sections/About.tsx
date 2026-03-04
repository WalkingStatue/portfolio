import { motion } from 'framer-motion'
import TextFillReveal from '../ui/TextFillReveal'

export default function About() {
    return (
        <section id="about" className="py-28 md:py-36 relative z-10">
            <div className="section-container">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-accent)] mb-6"
                >
                    ABOUT
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl md:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.25] text-white max-w-[1000px] mb-16"
                >
                    <TextFillReveal text="Results-driven AI professional and full-stack developer with hands-on experience building GenAI-powered products for digital agencies. Currently working full-time at E2M Solutions." />
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[15px] text-[var(--color-text-muted)] leading-[1.8]"
                    >
                        I attend client discovery calls, extract requirements, and design execution plans.
                        I build full-scale GenAI-enabled web applications using React, Node.js, and Supabase —
                        deployed on Railway and Vercel. I've delivered an end-to-end AI Blog Generation platform
                        with topic research, AI drafting, and RLHF feedback loops.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-[15px] text-[var(--color-text-muted)] leading-[1.8]"
                    >
                        I design AI pipelines with careful attention to prompt engineering, model selection
                        (proprietary vs. open-source), and knowing where AI adds value vs. where it doesn't.
                        I also manage and mentor a team of interns — assigning tasks, tracking progress,
                        and ensuring deliverables are collected before every client meeting.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--color-border)] pt-10"
                >
                    {[
                        { value: '1+', label: 'Years Experience' },
                        { value: '8+', label: 'Projects Worked On' },
                        { value: '2', label: 'Interns Mentored' },
                        { value: '3.93', label: 'GPA / 5.0' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <p className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">{stat.value}</p>
                            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
