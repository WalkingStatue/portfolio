import { useRef } from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion'

interface VelocityMarqueeProps {
    items: string[]
    baseVelocity?: number
}

// Wrap function to loop the translation value
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

export default function VelocityMarquee({ items, baseVelocity = 5 }: VelocityMarqueeProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    // We repeat the items 4 times to ensure it fills the screen, 
    // and let it scroll from 0% to -25% to loop seamlessly across the 4 duplicated blocks
    const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`)

    const directionFactor = useRef<number>(1)

    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        // Reverse direction based on negative/positive scroll velocity
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        // Add scroll velocity to base velocity
        moveBy += directionFactor.current * moveBy * Math.abs(velocityFactor.get())

        baseX.set(baseX.get() + moveBy)
    })

    // Create 4 exact copies of the item block for the continuous loop
    // 4 copies means wrapping at -25% (-1/4th of the width) is a seamless visual loop
    const children = (
        <div className="flex items-center gap-6 pr-6">
            {items.map((item, i) => (
                <span
                    key={i}
                    className="px-6 py-4 text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-widest text-transparent hover:text-[var(--color-text)] transition-colors duration-300 font-display"
                    style={{ WebkitTextStroke: '1px var(--color-text)' }}
                >
                    {item}
                </span>
            ))}
        </div>
    )

    return (
        <div className="overflow-hidden m-0 flex whitespace-nowrap w-full">
            <motion.div className="flex whitespace-nowrap w-fit" style={{ x }}>
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    )
}
