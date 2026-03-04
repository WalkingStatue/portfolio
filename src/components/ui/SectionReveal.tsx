import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionRevealProps {
    children: ReactNode
    className?: string
    id?: string
    delay?: number
}

export default function SectionReveal({ children, className = '', id, delay = 0 }: SectionRevealProps) {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <motion.section
            ref={ref}
            id={id}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay,
            }}
        >
            {children}
        </motion.section>
    )
}
