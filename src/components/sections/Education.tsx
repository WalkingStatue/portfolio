import { motion } from 'framer-motion'

export default function Education() {
    const education = [
        { degree: 'Integrated MSc (CA & IT)', institution: 'KS School of Business Management and Information Technology', detail: 'Expected Graduation: 2026', gpa: '3.93 / 5.0' },
        { degree: 'HSC', institution: 'Adani Vidhya Mandir, Ahmedabad', detail: '2021', gpa: '84.00%' },
        { degree: 'SSC', institution: 'Adani Vidhya Mandir, Ahmedabad', detail: '2019', gpa: '83.40%' },
    ]

    const achievements = [
        { title: 'Impact Creator Award', detail: 'Q3 2025, E2M Solutions — awarded as an intern' },
        { title: '1st Place — U-19 Interhouse Basketball', detail: 'Basketball Competition' },
        { title: 'Top 10 — National Science & Cyber Olympiads', detail: 'School Level (2015–2018)' },
    ]

    return (
        <section id="education" className="py-28 md:py-36 relative z-10">
            <div className="section-container">
                {/* Education */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="border-b border-[var(--color-border)] pb-8 mb-16">
                    <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-accent)] mb-4">EDUCATION</p>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">Academic Background</h2>
                </motion.div>

                <div className="space-y-0 mb-28">
                    {education.map((edu, i) => (
                        <div key={edu.degree} className={`relative group ${i > 0 ? 'border-t border-[var(--color-border)]' : ''}`}>
                            <motion.div
                                initial={{ y: 40, opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                                whileInView={{ y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:-mx-6 md:px-6 rounded-2xl hover:bg-[var(--color-surface)]/50 transition-colors duration-500"
                            >
                                <motion.div whileHover={{ x: 10 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="md:col-span-4 lg:col-span-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-1">{edu.degree}</h3>
                                    <span className="text-sm font-medium text-[var(--color-accent)]">{edu.gpa}</span>
                                </motion.div>
                                <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center">
                                    <p className="text-[16px] font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-300">{edu.institution}</p>
                                    <p className="text-sm text-[var(--color-text-subtle)] mt-1">{edu.detail}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Achievements */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="border-b border-[var(--color-border)] pb-8 mb-16">
                    <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-accent)] mb-4">ACHIEVEMENTS</p>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">Recognition</h2>
                </motion.div>

                <div className="space-y-0">
                    {achievements.map((item, i) => (
                        <div key={item.title} className={`relative group ${i > 0 ? 'border-t border-[var(--color-border)]' : ''}`}>
                            <motion.div
                                initial={{ y: 40, opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                                whileInView={{ y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:-mx-6 md:px-6 rounded-2xl hover:bg-[var(--color-surface)]/50 transition-colors duration-500"
                            >
                                <motion.div whileHover={{ x: 10 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="md:col-span-4 lg:col-span-4">
                                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[var(--color-accent)] transition-colors duration-300">{item.title}</h3>
                                </motion.div>
                                <div className="md:col-span-8 lg:col-span-8 flex items-center">
                                    <p className="text-[16px] font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-300">{item.detail}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
