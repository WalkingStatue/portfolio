import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

const dummyPosts = [
  {
    title: 'How I Built an AI Content Generator using Node.js and Supabase',
    category: 'Engineering',
    date: 'March 15, 2025',
    readTime: '5 min read',
    excerpt: 'A deep dive into the architecture and prompt engineering techniques used to reduce content creation time by 80%.',
    link: '#'
  },
  {
    title: 'Why Most Internal Automations Fail (And How to Fix Them)',
    category: 'Strategy',
    date: 'February 28, 2025',
    readTime: '4 min read',
    excerpt: 'Lessons learned from implementing n8n workflows across multiple agency teams, and where human-in-the-loop is still necessary.',
    link: '#'
  },
  {
    title: 'A Guide to Setting Up AI Pipelines for Digital Agencies',
    category: 'AI Pipeline',
    date: 'January 10, 2025',
    readTime: '7 min read',
    excerpt: 'Step-by-step guide on evaluating open-source vs proprietary models, and structuring pipelines for reliable output.',
    link: '#'
  }
]

export default function Blog() {
  return (
    <section id="blog" className="section-container py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Writing & Insights</h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              Thoughts on building AI products, engineering scalable web apps, and automating workflows. Searching for the intersection of real business value and emerging tech.
            </p>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-white transition-colors duration-300">
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col h-full bg-[var(--color-surface)] border border-[var(--color-border)] p-6 md:p-8 hover:border-[var(--color-accent)]/50 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-accent)] mb-4">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)] opacity-50" />
                  <span className="text-[var(--color-text-muted)]">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  <a href={post.link} className="absolute inset-0 z-20">
                    <span className="sr-only">Read article: {post.title}</span>
                  </a>
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--color-text-muted)] mb-8 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border)]/50">
                  <span className="text-xs text-[var(--color-text-muted)]">{post.date}</span>
                  <ArrowRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
