import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import MagneticButton from '../ui/MagneticButton'
import { EnvelopeSimple, Phone, LinkedinLogo } from '@phosphor-icons/react'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="contact" className="py-32 px-4" ref={ref}>
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-4"
                >
                    Contact
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold tracking-tighter mb-6"
                >
                    Let's work
                    <span className="text-[var(--color-accent)]"> together</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
                    className="text-base text-[var(--color-text-muted)] max-w-[50ch] mx-auto mb-12 leading-relaxed"
                >
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <MagneticButton href="mailto:saijadhruv8803@gmail.com">
                        <span className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:bg-[var(--color-accent-hover)] transition-colors duration-200">
                            <EnvelopeSimple size={18} weight="bold" />
                            Send Email
                        </span>
                    </MagneticButton>

                    <MagneticButton href="https://www.linkedin.com/in/saijadhruv/">
                        <span className="inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-text-muted)] px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200">
                            <LinkedinLogo size={18} weight="bold" />
                            LinkedIn
                        </span>
                    </MagneticButton>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-[var(--color-text-subtle)]"
                >
                    <a href="mailto:saijadhruv8803@gmail.com" className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                        <EnvelopeSimple size={16} weight="light" />
                        saijadhruv8803@gmail.com
                    </a>
                    <a href="tel:+917265802758" className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                        <Phone size={16} weight="light" />
                        +91 7265802758
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
