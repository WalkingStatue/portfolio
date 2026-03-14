import { motion } from 'framer-motion'
import MagneticButton from '../ui/MagneticButton'

export default function Footer() {
    return (
        <footer id="contact" className="relative z-10">
            <div className="py-28 md:py-36">
                <div className="section-container text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-accent)] mb-8"
                    >
                        WHAT'S NEXT?
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[12vw] md:text-[100px] font-bold uppercase tracking-tightest leading-[0.9] text-white mb-8 inline-block"
                    >
                        <MagneticButton>
                            <a href="mailto:saijadhruv8803@gmail.com" className="hover:text-[var(--color-accent)] transition-colors duration-500 cursor-pointer inline-block mt-4 md:mt-0">
                                LET'S TALK
                            </a>
                        </MagneticButton>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base text-[var(--color-text-muted)] max-w-[50ch] mx-auto mb-10 leading-relaxed"
                    >
                        Looking for an AI engineer to automate workflows, build custom GenAI tools, or lead full-stack development? I'm currently open for new opportunities.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <MagneticButton>
                            <a href="mailto:saijadhruv8803@gmail.com" className="px-8 py-3.5 bg-[var(--color-accent)] text-white text-sm font-semibold tracking-wide rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors block">
                                SEND EMAIL
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href="https://www.linkedin.com/in/saijadhruv/" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border border-[var(--color-border)] text-[var(--color-text-muted)] text-sm font-semibold tracking-wide rounded-lg hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-all block">
                                LINKEDIN
                            </a>
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>

            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--color-border)] py-8 gap-4">
                    <p className="text-xs text-[var(--color-text-subtle)]">&copy; {new Date().getFullYear()} Dhruv Saija. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="mailto:saijadhruv8803@gmail.com" className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors uppercase tracking-wide">Email</a>
                        <a href="https://www.linkedin.com/in/saijadhruv/" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors uppercase tracking-wide">LinkedIn</a>
                        <a href="https://github.com/WalkingStatue" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors uppercase tracking-wide">GitHub</a>
                        <span className="text-xs text-[var(--color-text-subtle)]">+91 7265802758</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
