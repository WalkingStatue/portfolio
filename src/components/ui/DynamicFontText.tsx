import { useState, useEffect, useCallback } from 'react'

const DEFAULT_FONTS = [
    "'Satoshi', sans-serif",          // Geometric sans — your base
    "'Syne', sans-serif",             // Bold geometric — punchy & wide
    "'Unbounded', sans-serif",        // Futuristic display — rounded & heavy
    "'Space Grotesk', sans-serif",    // Technical — clean & sturdy
    "'Archivo Black', sans-serif",    // Impact display — ultra bold
]

interface DynamicFontTextProps {
    text: string
    fonts?: string[]
    interval?: number
    className?: string
    trigger?: 'always' | 'hover'
}

export default function DynamicFontText({
    text,
    fonts = DEFAULT_FONTS,
    interval = 0.1,
    className = '',
    trigger = 'always',
}: DynamicFontTextProps) {
    const characters = text.split('')

    const [charFonts, setCharFonts] = useState<number[]>(
        () => characters.map(() => 0)
    )

    useEffect(() => {
        setCharFonts(characters.map(() => 0))
    }, [text])
    const [isHovering, setIsHovering] = useState(false)
    const [isAnimating, setIsAnimating] = useState(trigger === 'always')

    const cycleRandomChar = useCallback(() => {
        setCharFonts(prev => {
            const next = [...prev]
            const idx = Math.floor(Math.random() * characters.length)
            let newFont = Math.floor(Math.random() * fonts.length)
            while (newFont === next[idx] && fonts.length > 1) {
                newFont = Math.floor(Math.random() * fonts.length)
            }
            next[idx] = newFont
            return next
        })
    }, [characters.length, fonts.length])

    useEffect(() => {
        if (trigger === 'hover') {
            setIsAnimating(isHovering)
        }
    }, [isHovering, trigger])

    useEffect(() => {
        if (!isAnimating) {
            if (trigger === 'hover' && !isHovering) {
                setCharFonts(characters.map(() => 0))
            }
            return
        }

        const ms = interval * 1000
        const timer = setInterval(cycleRandomChar, ms)
        return () => clearInterval(timer)
    }, [isAnimating, interval, cycleRandomChar, trigger, isHovering, characters])

    return (
        <span
            className={className}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            aria-label={text}
        >
            {characters.map((char, i) => (
                <span
                    key={i}
                    style={{
                        fontFamily: fonts[charFonts[i]],
                        display: 'inline-block',
                        transition: 'font-family 0.1s ease',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    )
}
