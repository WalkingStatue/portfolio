import { motion } from 'framer-motion'
import VelocityMarquee from '../ui/VelocityMarquee'

// Grouped by band rather than shuffled, so each row reads as one kind of thing as it scrolls
// past: what I do with models, what I build interfaces in, what runs underneath.
//
// Every entry is backed by shipped work — verified against the repositories themselves, not
// aspirational. Deliberately omits table-stakes tooling (Git, editors, AI coding assistants):
// listing what every candidate has dilutes the signal from what they don't.
const row1 = ['GenAI APIs', 'RAG Pipelines', 'Prompt Engineering', 'LLM Evaluation', 'RLHF', 'Multi-LLM Orchestration', 'Model Inferencing', 'Vector Search', 'Qdrant', 'On-Device AI', 'Gemma', 'Google ML Kit', 'Hugging Face', 'OCR']
const row2 = ['Python', 'TypeScript', 'JavaScript', 'Java', 'Kotlin', 'C/C++', 'React', 'React Native', 'Expo', 'Android', 'Room', 'Tailwind', 'Vite', 'Framer Motion']
const row3 = ['Node.js', 'FastAPI', 'Django', 'SQLAlchemy', 'Alembic', 'Pydantic', 'PostgreSQL', 'SQLite', 'Supabase', 'Redis', 'WebSockets', 'Docker', 'n8n', 'pytest', 'Railway', 'Vercel']

export default function Skills() {
    return (
        <section id="skills" className="py-28 md:py-36 relative z-10 overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-b border-[var(--color-border)] pb-8 mb-24"
                >
                    <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-accent)] mb-4">SKILLS</p>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[var(--color-white)]">My Toolkit</h2>
                </motion.div>
            </div>

            <div className="relative w-full flex flex-col gap-6 md:gap-10 -rotate-2 scale-[1.05] py-10">
                {/* Gradient Masks for fading the left and right edges seamlessly into the background */}
                <div className="absolute inset-y-0 left-0 w-[15%] md:w-1/4 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-[15%] md:w-1/4 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

                <VelocityMarquee items={row1} baseVelocity={-3} />
                <VelocityMarquee items={row2} baseVelocity={4} />
                <VelocityMarquee items={row3} baseVelocity={-2} />
            </div>
        </section>
    )
}
