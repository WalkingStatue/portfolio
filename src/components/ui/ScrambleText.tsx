import { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>~'

interface ScrambleTextProps {
    texts: string[]
    className?: string
    pauseDuration?: number
    expandSpeed?: number   // ms between each character appearing (phase 1)
    scrambleSpeed?: number // ms between scramble frames
    revealSpeed?: number   // ms between each character locking in (phase 2)
}

export default function ScrambleText({
    texts,
    className = '',
    pauseDuration = 2500,
    expandSpeed = 60,
    scrambleSpeed = 50,
    revealSpeed = 80,
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState('')
    const mounted = useRef(true)

    useEffect(() => {
        mounted.current = true

        function middleOutOrder(len: number): number[] {
            const mid = Math.floor(len / 2)
            const order: number[] = []
            for (let offset = 0; offset <= len; offset++) {
                const left = mid - offset
                const right = mid + offset
                if (left >= 0 && left < len && !order.includes(left)) order.push(left)
                if (right >= 0 && right < len && !order.includes(right)) order.push(right)
            }
            return order
        }

        function wait(ms: number): Promise<void> {
            return new Promise(resolve => {
                const t = setTimeout(resolve, ms)
                if (!mounted.current) clearTimeout(t)
            })
        }

        function scrambleFrame(
            targetLen: number,
            visible: Set<number>,
            locked: Set<number>,
            targetText: string
        ): string {
            let result = ''
            for (let i = 0; i < targetLen; i++) {
                if (locked.has(i)) {
                    result += targetText[i]
                } else if (visible.has(i)) {
                    // For spaces, use a non-breaking space as random char to maintain word breaks
                    if (targetText[i] === ' ' && Math.random() > 0.5) {
                        result += ' '
                    } else {
                        result += CHARS[Math.floor(Math.random() * CHARS.length)]
                    }
                } else {
                    result += '\u2007' // figure space (fixed-width invisible)
                }
            }
            return result
        }

        async function animateTo(targetText: string) {
            const len = targetText.length
            const order = middleOutOrder(len)
            const visible = new Set<number>()
            const locked = new Set<number>()

            // ── Phase 1: EXPAND from center ──
            for (let i = 0; i < order.length; i++) {
                if (!mounted.current) return
                visible.add(order[i])
                setDisplayText(scrambleFrame(len, visible, locked, targetText))
                await wait(expandSpeed)
            }

            // Let it scramble for a beat
            let scrambleFrames = 8
            for (let f = 0; f < scrambleFrames; f++) {
                if (!mounted.current) return
                setDisplayText(scrambleFrame(len, visible, locked, targetText))
                await wait(scrambleSpeed)
            }

            // ── Phase 2: REVEAL from center ──
            for (let i = 0; i < order.length; i++) {
                if (!mounted.current) return
                locked.add(order[i])
                setDisplayText(scrambleFrame(len, visible, locked, targetText))
                await wait(revealSpeed)
            }

            setDisplayText(targetText)
        }

        async function run() {
            let idx = 0

            // Wait a tiny bit on mount before first animation
            await wait(200)
            await animateTo(texts[0])

            // If there's only one text, we stop here (static hero title)
            if (texts.length === 1) return

            await wait(pauseDuration)

            // Loop indefinitely if more than 1 text
            while (mounted.current) {
                idx = (idx + 1) % texts.length
                await animateTo(texts[idx])
                await wait(pauseDuration)
            }
        }

        run()

        return () => { mounted.current = false }
    }, [texts, pauseDuration, expandSpeed, scrambleSpeed, revealSpeed])

    return (
        <span className={className} style={{ fontVariantNumeric: 'tabular-nums' }} aria-label={texts.join(', ')}>
            {displayText}
        </span>
    )
}
