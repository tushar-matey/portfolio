interface FooterProps {
  onNavigate: (id: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="section-container">
        <div className="footer-links">
          <button
            className="footer-link"
            onClick={() => onNavigate('hero')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Back to Top
          </button>
          <a
            href="https://github.com/tushar-matey"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tushar-sharad-matey-7571802a4"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/Tushar_Sharad_Matey/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LeetCode
          </a>
        </div>

        <p className="footer-text">
          Designed &amp; Engineered by <strong>Tushar Sharad Matey</strong> · Built with React, TypeScript, GSAP &amp; Lenis
        </p>
        <p className="footer-text" style={{ marginTop: '0.5rem', opacity: 0.6 }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
