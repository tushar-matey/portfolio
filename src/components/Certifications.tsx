const CERTIFICATIONS = [
  {
    badge: '☁️',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Credential Verified',
    url: 'https://bit.ly/4x9Gcxu',
    description:
      'Validates overall understanding of AWS Cloud platform, core services (EC2, S3, Lambda, RDS, VPC), security, architecture, cloud economics, and compliance.',
  },
  {
    badge: '🌐',
    name: 'Cloud Computing and Distributed Systems',
    issuer: 'NPTEL SWAYAM (Ministry of Education, Govt. of India)',
    date: 'Credential Verified',
    url: 'https://bit.ly/3S8C7up',
    description:
      'Rigorous academic certification covering distributed consensus, fault-tolerance, cloud virtualization, storage architectures, and parallel computation models.',
  },
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
