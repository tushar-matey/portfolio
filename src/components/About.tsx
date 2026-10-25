export default function About() {
  return (
    <section id="about" className="section" aria-label="About Me">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">01 // Profile &amp; Background</span>
          <h2 className="section-title">
            About <span className="accent">Me</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text reveal-left">
            <p>
              I am a Computer Science &amp; Engineering student at <strong>Vellore Institute of Technology (VIT)</strong>, specializing in <strong>Cloud Computing and Automation</strong> with a cumulative GPA of <strong>8.93/10.0</strong>.
            </p>
            <p>
              My passion lies at the intersection of <strong>Agentic AI systems, scalable backend architectures, and distributed cloud engineering</strong>. I have hands-on experience designing end-to-end LLM workflows with AWS Bedrock, Anthropic Claude API, and Strands Agents, paired with production-grade full-stack architectures.
            </p>
            <p>
              Beyond development, I actively hone my algorithmic and problem-solving skills on LeetCode with 500+ problems solved and regular competitive programming contest participation.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <span className="section-tag" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                Interests &amp; Extracurriculars
              </span>
              <div className="extra-tags">
                <span className="extra-tag">
                  <span>♟️</span> Chess Strategy
                </span>
                <span className="extra-tag">
                  <span>🛼</span> Speed Skating
                </span>
                <span className="extra-tag">
                  <span>🇪🇸</span> Spanish Language
                </span>
              </div>
            </div>
          </div>

          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="edu-card">
              <div className="edu-icon" aria-hidden="true">
                🎓
              </div>
              <div>
                <h3 className="edu-institution">Vellore Institute of Technology</h3>
                <p className="edu-degree">
                  B.Tech. Computer Science &amp; Engineering
                  <br />
                  <span style={{ fontSize: '0.85rem', color: 'var(--neon-cyan)' }}>
                    Specialization in Cloud Computing and Automation
                  </span>
                </p>
                <p className="edu-period">Sep 2023 – Sep 2027</p>
                <p className="edu-gpa">Cumulative GPA: 8.93 / 10.0</p>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">8.93</div>
                <div className="stat-label">VIT GPA (/10.0)</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">LeetCode Problems</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">30+</div>
                <div className="stat-label">Weekly Contests</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1600+</div>
                <div className="stat-label">LeetCode Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
