import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface TextFillRevealProps {
    text: string
    className?: string
}

export default function TextFillReveal({
    text,
    className = ''
}: TextFillRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    // Track scroll progress within this specific container
    // 'start 80%' means start animation when top of element hits 80% of viewport height
    // 'end 40%' means end animation when bottom of element hits 40% of viewport height
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 60%', 'end 40%']
    })

    const words = text.split(' ')

    return (
        <span
            ref={containerRef}
            className={`flex flex-wrap text-white ${className}`}
        >
            {words.map((word, i) => {
                const start = i / words.length
                const end = start + (1 / words.length)

                return (
                    <Word
                        key={i}
                        word={word}
                        progress={scrollYProgress}
                        range={[start, end]}
                    />
                )
            })}
        </span>
    )
}

function Word({ word, progress, range }: { word: string; progress: any; range: [number, number] }) {
    // Opacity goes from 0.2 (unfilled) to 1 (filled) as scroll passes its range
    const opacity = useTransform(progress, range, [0.2, 1])

    return (
        <span className="relative mr-[0.25em] mt-[0.1em]">
            <span className="absolute opacity-20 text-[var(--color-text-muted)]">{word}</span>
            <motion.span style={{ opacity }}>
                {word}
            </motion.span>
        </span>
    )
}
