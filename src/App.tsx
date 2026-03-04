import InteractiveGlow from './components/ui/InteractiveGlow'
import CustomCursor from './components/ui/CustomCursor'
import Preloader from './components/ui/Preloader'
import NoiseGrain from './components/ui/NoiseGrain'
import Nav from './components/layout/Nav'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-bg)] font-[var(--font-sans)]">
      <NoiseGrain />
      <Preloader />
      <CustomCursor />
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-[0.4]" style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)' }} />
      <InteractiveGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
