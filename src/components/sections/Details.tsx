import { motion } from 'framer-motion'
import { useRef } from 'react'

const details = [
    {
        category: 'EXPERIENCE',
        items: [
            { title: 'Associate AI Executor', entity: 'E2M Solutions', date: 'Sept 2025 — Present' },
            { title: 'AI Intern', entity: 'E2M Solutions', date: 'June 2025 — Sept 2025' }
        ]
    },
    {
        category: 'EDUCATION',
        items: [
            { title: 'Integrated MSc (CA & IT)', entity: 'KS School of Business Mgmt', date: '2026' },
            { title: 'HSC', entity: 'Adani Vidhya Mandir', date: '2021' }
        ]
    },
    {
        category: 'CAPABILITIES',
        items: [
            { title: 'Languages', entity: 'Python, JavaScript, C/C++', date: '' },
            { title: 'Frameworks', entity: 'React, Django, Node.js', date: '' },
            { title: 'AI & Data', entity: 'GenAI APIs, Prompt Eng., LLM Eval', date: '' }
        ]
    }
]

export default function Details() {
    const ref = useRef(null)

    return (
        <section id="details" ref={ref} className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
            <div className="border-t border-[var(--color-border)] pt-24 space-y-24">
                {details.map((section) => (
                    <div key={section.category} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
                        <div className="md:col-span-4">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-sm font-medium text-[var(--color-text-muted)] tracking-widest uppercase"
                            >
                                {section.category}
                            </motion.h3>
                        </div>

                        <div className="md:col-span-8 space-y-12">
                            {section.items.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                                    className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 pb-8 border-b border-[var(--color-border)] opacity-90 hover:opacity-100 transition-opacity"
                                >
                                    <div>
                                        <h4 className="text-2xl font-medium tracking-tight text-white mb-2">{item.title}</h4>
                                        <p className="text-base text-[var(--color-text-muted)]">{item.entity}</p>
                                    </div>
                                    {item.date && (
                                        <span className="text-sm font-medium text-[var(--color-text-subtle)] whitespace-nowrap">
                                            {item.date}
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
