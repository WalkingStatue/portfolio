import { Analytics } from '@vercel/analytics/react'
import {
  projects,
  roles,
  toolkit,
  education,
  achievements,
} from './portfolio-content'

const blog = 'https://blog.dhruvsaija.in'
const links = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Notebook', href: blog },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}
function SectionHeading({
  id,
  number,
  label,
  title,
}: {
  id: string
  number: string
  label: string
  title: string
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          {number} / {label}
        </p>
        <h2 id={id}>{title}</h2>
      </div>
      <span className="section-star" aria-hidden="true">
        ✳
      </span>
    </div>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="shell">
        <header className="site-header">
          <a className="brand" href="#" aria-label="Dhruv Saija — back to top">
            <span className="brand-mark" aria-hidden="true">
              ds.
            </span>
            <span>
              Dhruv Saija<small>Engineer. Builder. Curious human.</small>
            </span>
          </a>
          <nav aria-label="Main navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
                {link.href === blog && <Arrow />}
              </a>
            ))}
            <a className="nav-contact" href="#contact">
              Let’s talk <Arrow />
            </a>
          </nav>
        </header>
        <main id="main-content" tabIndex={-1}>
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" /> AI engineer / Ahmedabad, India
              </p>
              <h1 id="hero-title">
                Dhruv Saija<span className="name-period">.</span>
              </h1>
              <p className="hero-tagline">
                A little curiosity. <em>A lot of building.</em>
              </p>
              <p className="hero-intro">
                I build AI systems, useful software, and automation that holds
                up beyond the demo.
              </p>
              <p className="hero-detail">
                AI Engineer at E2M Solutions. From the first client conversation
                to the pipeline, interface, and deployment.
              </p>
              <div className="actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <Arrow />
                </a>
                <a
                  className="button button-secondary"
                  href="mailto:saijadhruv8803@gmail.com"
                >
                  Get in touch <Arrow />
                </a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <span className="art-label">A PRACTICE IN BUILDING</span>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-core">
                ds<span>✳</span>
              </div>
              <span className="orbit-dot dot-one" />
              <span className="orbit-dot dot-two" />
              <span className="art-caption">
                A little curiosity.
                <br />A lot of iteration.
              </span>
              <span className="art-coordinate">
                THINK → BUILD → LEARN → REPEAT
              </span>
            </div>
          </section>
          <div className="practice-strip">
            <span>From idea to everyday use</span>
            <span>AI systems</span>
            <i aria-hidden="true">✳</i>
            <span>Useful software</span>
            <i aria-hidden="true">✳</i>
            <span>Reliable automation</span>
          </div>
          <section
            id="projects"
            className="section"
            aria-labelledby="projects-title"
          >
            <SectionHeading
              id="projects-title"
              number="01"
              label="Selected work"
              title="Things I’ve put into the world."
            />
            <p className="section-intro">
              Personal projects, open-source tools, and experiments that became
              something useful.
            </p>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  className={`project-card project-${index}`}
                  key={project.title}
                >
                  <div className="project-top">
                    <span className="project-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="project-date">{project.date}</span>
                    <Arrow />
                  </div>
                  <h3>
                    <a href={project.link}>{project.title}</a>
                  </h3>
                  <p>{project.description}</p>
                  <ul className="tags" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a className="project-link" href={project.link}>
                    {project.link.includes('github.com')
                      ? 'View the repository'
                      : 'Explore the project'}{' '}
                    <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </section>
          <section
            id="writing"
            className="section writing-section"
            aria-labelledby="writing-title"
          >
            <div className="writing-intro">
              <p className="eyebrow">02 / The notebook</p>
              <h2 id="writing-title">
                Building things.
                <br />
                <em>Writing it down.</em>
              </h2>
              <p>
                Notes on AI systems, software craft, and the engineering
                judgment behind them.
              </p>
              <a className="button button-secondary" href={blog}>
                Explore the notebook <Arrow />
              </a>
            </div>
            <article className="essay-card">
              <a
                className="essay-image-link"
                href={`${blog}/posts/context-rot-ai-agent/`}
                aria-label="Read Context Rot"
              >
                <img
                  src={`${blog}/images/context-rot-cover.png`}
                  alt="An open notebook with a fading map and a new lime green route."
                  width="1672"
                  height="941"
                  loading="lazy"
                />
              </a>
              <div className="essay-copy">
                <p className="eyebrow">Developer workflows / 6 min read</p>
                <h3>
                  <a href={`${blog}/posts/context-rot-ai-agent/`}>
                    Context Rot: When Your AI Agent Learns the Wrong Project
                  </a>
                </h3>
                <p>
                  Stale project instructions can turn an ordinary documentation
                  problem into a confidently wrong change.
                </p>
                <a
                  className="project-link"
                  href={`${blog}/posts/context-rot-ai-agent/`}
                >
                  Read the essay <Arrow />
                </a>
              </div>
            </article>
          </section>
          <section
            id="about"
            className="section about-section"
            aria-labelledby="about-title"
          >
            <div>
              <p className="eyebrow">03 / Behind the work</p>
              <h2 id="about-title">
                Curiosity is the start.
                <br />
                <em>Ownership is the work.</em>
              </h2>
              <p className="about-lede">
                I build GenAI systems that ship—from the client call where
                requirements actually get made, through pipeline design, to
                production.
              </p>
            </div>
            <div className="about-copy">
              <p>
                I’m an AI Engineer at E2M Solutions, after joining as an
                automation intern in 2025. I own delivery end to end:
                client-facing technical discussions, system architecture, and
                deployment on Railway and Vercel.
              </p>
              <p>
                I design pipelines around prompt engineering, model selection,
                and knowing where AI adds value versus where it’s a liability.
                My work includes an AI blog generation platform with an RLHF
                feedback loop, a newsletter generator, and an SEO audit tool
                that replaced manual workflows.
              </p>
              <p>
                I also maintain the automation infrastructure and mentor the
                interns now doing the work I started on.
              </p>
            </div>
          </section>
          <section
            id="experience"
            className="section"
            aria-labelledby="experience-title"
          >
            <SectionHeading
              id="experience-title"
              number="04"
              label="Experience"
              title="Learning by taking responsibility."
            />
            <div className="experience-list">
              {roles.map((role, index) => (
                <article className="experience-row" key={role.title}>
                  <div className="role-meta">
                    <p className="eyebrow">{role.period}</p>
                    <span>
                      {role.company} · {role.type}
                    </span>
                    {index === 0 && (
                      <span className="current-role">Current role</span>
                    )}
                  </div>
                  <div>
                    <h3>{role.title}</h3>
                    <ul>
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section
            id="skills"
            className="section"
            aria-labelledby="skills-title"
          >
            <SectionHeading
              id="skills-title"
              number="05"
              label="Toolkit"
              title="The tools behind the work."
            />
            <div className="toolkit-grid">
              {toolkit.map((group) => (
                <div className="toolkit-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="tags">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section
            id="education"
            className="section background-section"
            aria-labelledby="education-title"
          >
            <div>
              <p className="eyebrow">06 / Education</p>
              <h2 id="education-title">Where it began.</h2>
              {education.map((item) => (
                <article className="background-item" key={item.degree}>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <span>
                    {item.detail} · {item.gpa}
                  </span>
                </article>
              ))}
            </div>
            <div>
              <p className="eyebrow">Along the way</p>
              <h2>Recognition.</h2>
              {achievements.map((item) => (
                <article className="background-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
          <section
            id="contact"
            className="contact-section"
            aria-labelledby="contact-title"
          >
            <p className="eyebrow">A conversation is a good place to start</p>
            <h2 id="contact-title">
              Something worth
              <br />
              <em>building together?</em>
            </h2>
            <p>I’m open to discussing projects, ideas, and opportunities.</p>
            <div className="actions">
              <a
                className="button button-primary"
                href="mailto:saijadhruv8803@gmail.com"
              >
                Say hello <Arrow />
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/saijadhruv/"
              >
                Connect on LinkedIn <Arrow />
              </a>
            </div>
          </section>
        </main>
        <footer>
          <span>
            © {new Date().getFullYear()} Dhruv Saija · Built with curiosity.
          </span>
          <nav aria-label="Footer navigation">
            <a href={blog}>
              Notebook <Arrow />
            </a>
            <a href="https://github.com/WalkingStatue">
              GitHub <Arrow />
            </a>
            <a href="mailto:saijadhruv8803@gmail.com">
              Email <Arrow />
            </a>
          </nav>
        </footer>
      </div>
      <Analytics />
    </>
  )
}
