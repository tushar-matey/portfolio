import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface HeroProps {
  onNavigate: (id: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reveal hero elements sequentially with GSAP
    const elements = [
      '.hero-tag',
      '.hero-name',
      '.hero-title',
      '.hero-desc',
      '.hero-actions',
      '.hero-terminal',
    ]

    gsap.fromTo(
      elements,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.1,
      }
    )
  }, [])

  return (
    <section id="hero" className="hero" aria-label="Hero Section">
      <div className="hero-content">
        <div className="hero-tag">System.Initialize // Cloud &amp; AI Engineer</div>
        <h1 className="hero-name glitch" data-text="TUSHAR SHARAD MATEY">
          TUSHAR SHARAD MATEY
        </h1>
        <p className="hero-title">
          Full-Stack Developer · Cloud &amp; AI Systems Engineer
        </p>
        <p className="hero-desc">
          Specializing in agentic AI workflows, AWS cloud architecture, and high-performance real-time applications with React, Node.js, and modern distributed systems.
        </p>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => onNavigate('projects')}
          >
            Explore Projects
          </button>
          <button
            className="btn btn-outline"
            onClick={() => onNavigate('contact')}
          >
            Get In Touch
          </button>
          <a
            href="https://github.com/tushar-matey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero-terminal" ref={terminalRef}>
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">tushar@cyberdeck: ~/profile</span>
          </div>
          <div className="terminal-body">
            <span className="terminal-line">
              <span className="terminal-prompt">$ </span>
              <span className="terminal-command">whoami</span>
            </span>
            <span className="terminal-line terminal-output">
              Tushar Sharad Matey | B.Tech CSE (Cloud Computing &amp; Automation) @ VIT
            </span>

            <span className="terminal-line" style={{ marginTop: '0.5rem' }}>
              <span className="terminal-prompt">$ </span>
              <span className="terminal-command">cat specialties.json</span>
            </span>
            <span className="terminal-line terminal-output">
              &#123; &quot;core&quot;: [&quot;Agentic AI&quot;, &quot;AWS Bedrock&quot;, &quot;RAG Pipelines&quot;], &quot;cloud&quot;: &quot;AWS Certified&quot;, &quot;dsa&quot;: &quot;500+ LeetCode&quot; &#125;
            </span>

            <span className="terminal-line" style={{ marginTop: '0.5rem' }}>
              <span className="terminal-prompt">$ </span>
              <span className="terminal-command">status --query</span>
            </span>
            <span className="terminal-line terminal-highlight">
              [ONLINE] Ready for Full-Stack, AI Engineering, and Cloud opportunities.
            </span>

            <span className="terminal-line" style={{ marginTop: '0.5rem' }}>
              <span className="terminal-prompt">$ </span>
              <span className="terminal-cursor" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
