import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function InteractiveGlow() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Use heavy damping for the smooth, slow-following effect
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Center the glow on the cursor
            mouseX.set(e.clientX - 400) // 800px width / 2
            mouseY.set(e.clientY - 400) // 800px height / 2
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[var(--color-bg)]">
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-15"
                style={{
                    background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
                    x: springX,
                    y: springY,
                    mixBlendMode: 'multiply'
                }}
            />
        </div>
    )
}
