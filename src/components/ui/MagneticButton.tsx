import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

interface MagneticButtonProps {
    children: ReactNode
    className?: string
    href?: string
    onClick?: () => void
}

export default function MagneticButton({ children, className = '', href, onClick }: MagneticButtonProps) {
    const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springX = useSpring(x, { stiffness: 200, damping: 15 })
    const springY = useSpring(y, { stiffness: 200, damping: 15 })

    const rotateX = useTransform(springY, [-20, 20], [5, -5])
    const rotateY = useTransform(springX, [-20, 20], [-5, 5])

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set((e.clientX - centerX) * 0.3)
        y.set((e.clientY - centerY) * 0.3)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const isExternal = href ? /^(https?:\/\/|\/\/)/i.test(href) : false;
    const baseClasses = `inline-block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] focus-visible:ring-[var(--color-accent)] rounded-lg ${className}`;

    if (href) {
        return (
            <motion.a
                ref={ref}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={baseClasses}
                style={{ x: springX, y: springY, rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileTap={{ scale: 0.98 }}
            >
                {children}
            </motion.a>
        )
    }

    return (
        <motion.button
            ref={ref}
            type="button"
            onClick={onClick}
            className={baseClasses}
            style={{ x: springX, y: springY, rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.button>
    )
}
