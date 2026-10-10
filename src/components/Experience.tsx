export default function Experience() {
  return (
    <section id="experience" className="section" aria-label="Experience">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">02 // Professional Experience</span>
          <h2 className="section-title">
            Industry <span className="accent">Experience</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="experience-card reveal">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <h3 className="exp-company">amasQIS.ai</h3>
              <p className="exp-role">AI Intern · Remote</p>
            </div>
            <span className="exp-period">July 2025 – Dec 2025</span>
          </div>

          <ul className="exp-details" style={{ marginTop: '1.5rem' }}>
            <li>
              Integrated large language model APIs into Node.js backend services to power AI-assisted product features with structured prompt pipelines and reliable response handling.
            </li>
            <li>
              Designed REST APIs for AI workflows, implementing request validation, session persistence, retry logic, and robust error handling for production-ready LLM integrations.
            </li>
            <li>
              Built asynchronous AI request pipelines with Redis-backed caching and streaming responses to significantly reduce latency and optimize user response experience.
            </li>
          </ul>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="skill-tag">LLM APIs</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Redis</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Prompt Engineering</span>
            <span className="skill-tag">Streaming Responses</span>
          </div>
        </div>
      </div>
    </section>
  )
}
