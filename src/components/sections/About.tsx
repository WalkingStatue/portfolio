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
                    <TextFillReveal text="I build GenAI systems that ship — from the client call where requirements actually get made, through pipeline design, to production. Now AI Engineer at E2M Solutions, after joining as an automation intern in 2025." />
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[15px] text-[var(--color-text-muted)] leading-[1.8]"
                    >
                        As AI Engineer I own delivery end to end — leading the client-facing technical
                        discussions, architecting the system, and carrying it from concept to deployment on
                        Railway and Vercel. I also keep the existing automation infrastructure scalable and
                        reliable: the unglamorous half that decides whether any of it survives real usage.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-[15px] text-[var(--color-text-muted)] leading-[1.8]"
                    >
                        I design AI pipelines around prompt engineering, model selection — proprietary versus
                        open-source — and knowing where AI adds value versus where it's a liability. I've shipped
                        an AI blog generation platform with an RLHF feedback loop, plus a newsletter generator
                        and an SEO audit tool that replaced manual workflows outright. And I mentor the interns
                        now doing the work I started on.
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
                        // Phrased so they stay true over time — a hardcoded "1+ Years" silently
                        // goes stale, a start year doesn't.
                        { value: '2025', label: 'Building AI Since' },
                        { value: '3', label: 'Roles at E2M' },
                        { value: '8+', label: 'Projects Shipped' },
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
