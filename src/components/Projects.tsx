interface ProjectData {
  number: string
  name: string
  tagline: string
  description: string
  features: string[]
  technologies: string[]
  githubUrl: string
  liveUrl: string
  status: string
  badgeColor: string
}

const PROJECTS: ProjectData[] = [
  {
    number: '01 // AGENTIC AI & CLOUD',
    name: 'KeyTake',
    tagline: 'AI-Powered Meeting Intelligence Platform',
    description:
      'Transforms meeting recordings and transcripts into searchable, context-aware intelligence using Strands Agents and AWS Bedrock.',
    features: [
      'Engineered Agentic AI workflows with Strands Agents, RAG, and AWS Knowledge Bases',
      'Integrated AWS Bedrock for automated meeting summarization and conversational multi-turn Q&A',
      'Architected scalable serverless pipeline on AWS Lambda, Amazon S3 Vectors, and Amazon Cognito auth',
      'Semantic document retrieval using Amazon Titan Embeddings V2',
    ],
    technologies: [
      'AWS Bedrock',
      'Strands Agents',
      'Amazon S3',
      'AWS Lambda',
      'Amazon Cognito',
      'Titan Embeddings V2',
      'React.js',
      'TypeScript',
      'Node.js',
    ],
    githubUrl: 'https://github.com/tushar-matey/KeyTake2',
    liveUrl: 'https://keytake2.vercel.app/login',
    status: 'LIVE ON VERCEL',
    badgeColor: 'var(--neon-green)',
  },
  {
    number: '02 // FULL-STACK AI GENERATION',
    name: 'WebThropic',
    tagline: 'AI-Powered Website Generation & Browser Sandbox',
    description:
      'Turns natural-language prompts into production-ready web apps with live in-browser preview, editable codebases, and downloadable exports.',
    features: [
      'Built a structured Anthropic Claude API generation pipeline turning LLM streaming responses into executable projects',
      'Modular TypeScript/Express backend with autosave, project ownership, and persistent MongoDB file schemas',
      'Hardened production resilience with Node.js clustering, worker recovery, and graceful shutdown',
      'Enterprise security with Argon2 password hashing, persistent sessions, Helmet headers, and API rate limits',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Anthropic Claude API',
      'Vite',
      'Argon2',
    ],
    githubUrl: 'https://github.com/tushar-matey/Webthropic',
    liveUrl: 'https://webthropic.vercel.app/',
    status: 'LIVE ON VERCEL',
    badgeColor: 'var(--neon-cyan)',
  },
  {
    number: '03 // REAL-TIME DISTRIBUTED SYSTEMS',
    name: 'PassTheAux',
    tagline: 'Collaborative Real-Time Music Voting Platform',
    description:
      'Eliminates AUX cord disputes by allowing participants to vote on song queues with synchronized real-time playback across all devices.',
    features: [
      'Built synchronized multi-user audio rooms with Socket.IO bidirectional event streaming',
      'Designed REST APIs and MongoDB models for rooms, persistent queues, playback state, and JWT auth',
      'Engineered vote-ranked priority queue with deterministic tie-breaking and automatic song advancement',
      'Integrated YouTube Data API for instant search, metadata enrichment, and seamless video playback',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'JWT',
      'YouTube Data API',
    ],
    githubUrl: 'https://github.com/tushar-matey/PassTheAux',
    liveUrl: 'https://pass-the-aux-alpha.vercel.app/',
    status: 'LIVE ON VERCEL',
    badgeColor: 'var(--neon-purple)',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">04 // Featured Deployments</span>
          <h2 className="section-title">
            Engineered <span className="accent">Projects</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="projects-list">
          {PROJECTS.map(project => (
            <div key={project.name} className="project-card reveal">
              <div>
                <div className="project-number">{project.number}</div>
                <h3 className="project-name">{project.name}</h3>
                <div className="project-tagline">{project.tagline}</div>
                <p className="project-desc">{project.description}</p>

                <ul className="project-features">
                  {project.features.map(feat => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Source Code ↗
                  </a>
                </div>
              </div>

              <div className="project-embed" style={{ flexDirection: 'column', padding: '1.5rem', justifyContent: 'space-between' }}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: project.badgeColor,
                      border: `1px solid ${project.badgeColor}`,
                      borderRadius: '4px',
                      padding: '2px 8px',
                      letterSpacing: '0.1em',
                    }}
                  >
                    ● {project.status}
                  </span>
                </div>

                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: '#fff',
                      letterSpacing: '0.1em',
                      marginBottom: '0.5rem',
                      textShadow: '0 0 15px rgba(0, 240, 255, 0.4)',
                    }}
                  >
                    {project.name.toUpperCase()}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--neon-cyan)',
                      maxWidth: '300px',
                      margin: '0 auto',
                      wordBreak: 'break-all',
                    }}
                  >
                    {project.liveUrl}
                  </div>
                </div>

                <div
                  style={{
                    width: '100%',
                    background: 'rgba(10, 10, 20, 0.8)',
                    borderRadius: '6px',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(0, 240, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888' }}>
                    SSL / TLS Secured
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--neon-cyan)',
                    }}
                  >
                    Launch App ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
