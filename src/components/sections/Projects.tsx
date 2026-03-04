import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { type MouseEvent } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react'

interface Project {
    title: string
    date: string
    description: string
    tags: string[]
    link: string
}

const projects: Project[] = [
    {
        title: 'Multi-Bot RAG Platform',
        date: 'Apr 2025',
        description: 'Full-stack multi-bot assistant platform with advanced document-based knowledge retrieval (RAG), real-time WebSocket chat, multi-LLM support (GPT, Claude, Gemini), role-based access, and Redis-powered caching.',
        tags: ['React', 'FastAPI', 'PostgreSQL', 'Qdrant', 'Redis', 'Docker'],
        link: 'https://github.com/WalkingStatue/multi-rag-bot',
    },
    {
        title: 'Memento',
        date: 'Jan 2026',
        description: 'Android screenshot manager that auto-detects screenshots, extracts text via OCR, and runs Google\'s Gemma embedding model locally on-device for semantic AI search — no cloud API needed. Built with Supabase auth.',
        tags: ['Android', 'Java', 'Gemma', 'On-Device AI', 'ML Kit', 'Supabase'],
        link: 'https://github.com/WalkingStatue/Memento',
    },
    {
        title: 'FinSmart',
        date: 'Apr 2024',
        description: 'Comprehensive personal finance management app built with Django and React. Features account management, transaction tracking, budgeting, financial goals, interactive dashboard visualisations, and data import/export.',
        tags: ['Python', 'Django', 'React', 'Full-Stack'],
        link: 'https://github.com/WalkingStatue/finsmart',
    },
    {
        title: 'Rescue Operation Simulator',
        date: 'Dec 2024',
        description: 'Autonomous disaster rescue simulation using A* pathfinding. Agents navigate a customisable grid with dynamic terrain costs, obstacles, and survivors. Features real-time visualisation and modular architecture.',
        tags: ['Python', 'Tkinter', 'A* Algorithm', 'AI Agents'],
        link: 'https://github.com/WalkingStatue/ros',
    },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className="h-full relative overflow-hidden rounded-xl"
        >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full relative group">
                <div
                    onMouseMove={handleMouseMove}
                    className="relative h-full p-8 md:p-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50 transition-colors duration-500 overflow-hidden flex flex-col"
                >
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100"
                        style={{
                            background: useMotionTemplate`
                                radial-gradient(
                                    650px circle at ${mouseX}px ${mouseY}px,
                                    rgba(168, 85, 247, 0.1),
                                    transparent 80%
                                )
                            `,
                        }}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-6">
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-white)] group-hover:text-[var(--color-accent)] transition-colors">{project.title}</h3>
                            <div className="flex items-center gap-3 shrink-0 ml-4 border border-[var(--color-border)] px-3 py-1.5 rounded-full bg-[var(--color-bg)]/50 group-hover:bg-[var(--color-accent)]/10 transition-colors">
                                <ArrowUpRight weight="bold" className="w-4 h-4 text-[var(--color-text-subtle)] group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </div>

                        <p className="text-[15px] md:text-base text-[var(--color-text-muted)] leading-relaxed mb-10 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded bg-[var(--color-accent)]/5 text-[var(--color-accent)] border border-[var(--color-accent)]/20 shadow-sm backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    )
}

export default function Projects() {
    return (
        <section id="projects" className="py-28 md:py-40 relative z-10">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-[var(--color-border)] pb-8 mb-20"
                >
                    <div>
                        <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-accent)] mb-4">PROJECTS</p>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[var(--color-white)]">Things I've Built</h2>
                    </div>
                    <span className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-widest hidden md:block">
                        {projects.length} Selected Projects
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
