const CERTIFICATIONS = [
  {
    badge: '☁️',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Credential Verified',
    url: 'https://drive.google.com/file/d/1978MTXmjhJPYHffQmiuaxo9fDCzA7YIR/view?usp=sharing',
    description:
      'Validates overall understanding of AWS Cloud platform, core services (EC2, S3, Lambda, RDS, VPC), security, architecture, cloud economics, and compliance.',
  },
  {
    badge: '🤖',
    name: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan (Coursera)',
    date: 'Dec 25, 2025',
    url: 'https://drive.google.com/file/d/1uxyUws9mweAx_LI8u6tQ8ysn_5HX6Vux/view?usp=sharing',
    description:
      'Demonstrates skills in supervised and unsupervised learning, predictive modeling, feature engineering, model evaluation, and implementing machine learning algorithms using Python and Scikit-learn.',
  },
  {
    badge: '🌐',
    name: 'Cloud Computing and Distributed Systems',
    issuer: 'NPTEL SWAYAM (Ministry of Education, Govt. of India)',
    date: 'Credential Verified',
    url: 'https://drive.google.com/file/d/1S44YDP1tYR_GF_H1WIShqb6v2nEwMYLV/view?usp=sharing',
    description:
      'Rigorous academic certification covering distributed consensus, fault-tolerance, cloud virtualization, storage architectures, and parallel computation models.',
  },
  {
    badge: '🌐',
    name: 'Introduction To Internet Of Things',
    issuer: 'NPTEL SWAYAM (Ministry of Education, Govt. of India)',
    date: 'Credential Verified',
    url: 'https://drive.google.com/file/d/1ePHDStUhjHP3jH2yZLe6ftYZlvFLWeo5/view?usp=sharing',
    description:
      'Gained foundational skills in IoT architecture, sensor and actuator integration, networking protocols, embedded systems using Raspberry Pi, and cloud-based IoT application development.',
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">05 // Credentials &amp; Certifications</span>
          <h2 className="section-title">
            Verified <span className="accent">Certifications</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="certs-grid">
          {CERTIFICATIONS.map(cert => (
            <div key={cert.name} className="cert-card reveal">
              <div className="cert-badge" aria-hidden="true">
                {cert.badge}
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <div className="cert-issuer">{cert.issuer}</div>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#aaaacc',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                }}
              >
                {cert.description}
              </p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
                aria-label={`View certificate for ${cert.name}`}
              >
                <span>View Certificate Credential</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
