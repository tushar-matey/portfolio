const SKILL_CATEGORIES = [
  {
    icon: '⚡',
    name: 'Programming Languages',
    skills: ['C++ (DSA)', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    icon: '💻',
    name: 'Development & Frameworks',
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Vite', 'HTML5/CSS3'],
  },
  {
    icon: '🤖',
    name: 'AI & Machine Learning',
    skills: ['AWS Bedrock', 'Claude API', 'Strands Agents', 'RAG Pipelines', 'Titan Embeddings V2', 'Prompt Pipelines'],
  },
  {
    icon: '☁️',
    name: 'Cloud Computing & AWS',
    skills: ['Amazon EC2', 'Amazon S3', 'AWS Lambda', 'Amazon Cognito', 'IAM', 'VPC', 'Route 53', 'CloudWatch'],
  },
  {
    icon: '🗄️',
    name: 'Databases & In-Memory',
    skills: ['MongoDB', 'MySQL', 'Redis (Caching & Pub/Sub)', 'S3 Vectors'],
  },
  {
    icon: '🛠️',
    name: 'Tools & DevOps',
    skills: ['Git & GitHub', 'Socket.IO', 'JWT Auth', 'Argon2', 'Postman', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">03 // Technical Arsenal</span>
          <h2 className="section-title">
            Skills &amp; <span className="accent">Technologies</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="skills-grid stagger-children">
          {SKILL_CATEGORIES.map(category => (
            <div key={category.name} className="skill-category reveal">
              <div className="skill-category-icon">
                <span>{category.icon}</span>
                <span className="skill-category-name">{category.name}</span>
              </div>
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
