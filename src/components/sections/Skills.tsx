import { motion } from 'framer-motion'
import VelocityMarquee from '../ui/VelocityMarquee'

const row1 = ['Python', 'React', 'Node.js', 'GenAI APIs', 'Android Dev', 'Docker', 'Git', 'Tailwind', 'FastAPI', 'Redis', 'Vite']
const row2 = ['JavaScript', 'TypeScript', 'Prompt Engineering', 'Supabase', 'Jetpack Compose', 'Vercel', 'PostgreSQL', 'LLM Evaluation', 'n8n', 'Django']
const row3 = ['Java', 'C/C++', 'RAG Pipelines', 'Qdrant', 'Gemma', 'On-Device AI', 'Google ML Kit', 'Hugging Face', 'Railway', 'Alembic']

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
