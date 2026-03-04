import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
    const mouseX = useMotionValue(-100)
    const mouseY = useMotionValue(-100)

    // Spring physics for the trailing ring
    const ringX = useSpring(mouseX, { damping: 25, stiffness: 250, mass: 0.2 })
    const ringY = useSpring(mouseY, { damping: 25, stiffness: 250, mass: 0.2 })

    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Trigger hover state if the element or its parent is a link/button class
            const isClickable = target.closest('a') !== null ||
                target.closest('button') !== null ||
                window.getComputedStyle(target).cursor === 'pointer'

            setIsHovered(isClickable)
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener('mousemove', updateMousePosition)
        window.addEventListener('mouseover', handleMouseOver)
        document.body.addEventListener('mouseleave', handleMouseLeave)
        document.body.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            window.removeEventListener('mouseover', handleMouseOver)
            document.body.removeEventListener('mouseleave', handleMouseLeave)
            document.body.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [mouseX, mouseY, isVisible])

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[9999] hidden md:block"
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s' }}
        >
            {/* Trailing Ring */}
            <motion.div
                className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border pointer-events-none flex items-center justify-center backdrop-blur-[1px]"
                style={{ x: ringX, y: ringY }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    backgroundColor: isHovered ? 'var(--color-accent-muted)' : 'transparent',
                    borderColor: isHovered ? 'transparent' : 'var(--color-border)',
                }}
                transition={{ duration: 0.15 }}
            />
            {/* Precise Dot */}
            <motion.div
                className="absolute top-0 left-0 w-[6px] h-[6px] -ml-[3px] -mt-[3px] rounded-full bg-[var(--color-accent)] pointer-events-none shadow-[0_0_10px_var(--color-accent)]"
                style={{ x: mouseX, y: mouseY }}
                animate={{
                    scale: isHovered ? 0 : 1,
                    opacity: isHovered ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
            />
        </div>
    )
}
