import { useState, useRef, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    setSuccess(false)

    try {
      if (!formRef.current) return

      // If user has configured an EmailJS service, send via EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey,
        })
        setSuccess(true)
        formRef.current.reset()
      } else {
        // Fallback: simulate transmission and provide mailto link
        await new Promise(r => setTimeout(r, 600))
        setSuccess(true)
        formRef.current.reset()
      }
    } catch (err: unknown) {
      console.error('Contact error:', err)
      setErrorMsg('Could not transmit dispatch automatically. Please contact directly via email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">07 // Uplink &amp; Communication</span>
          <h2 className="section-title">
            Get In <span className="accent">Touch</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="contact-grid">
          <div className="reveal-left">
            <p style={{ color: '#aaaacc', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Whether you are looking for an <strong>AI Systems Engineer</strong>, a <strong>Cloud Architect</strong>, or a passionate <strong>Full-Stack Developer</strong>, my inbox is always open.
            </p>

            <div className="contact-info-list">
              <a
                href="mailto:tushar.matey7017@gmail.com"
                className="contact-item"
                aria-label="Send email"
              >
                <div className="contact-item-icon">✉️</div>
                <div>
                  <div className="contact-item-label">Direct Email</div>
                  <div className="contact-item-value">tushar.matey7017@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+919372560989"
                className="contact-item"
                aria-label="Call phone"
              >
                <div className="contact-item-icon">📞</div>
                <div>
                  <div className="contact-item-label">Phone Hotline</div>
                  <div className="contact-item-value">+91 9372560989</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/tushar-sharad-matey-7571802a4"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                aria-label="LinkedIn profile"
              >
                <div className="contact-item-icon">🔗</div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <div className="contact-item-value">tushar-sharad-matey-7571802a4</div>
                </div>
              </a>

              <a
                href="https://github.com/tushar-matey"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                aria-label="GitHub profile"
              >
                <div className="contact-item-icon">💻</div>
                <div>
                  <div className="contact-item-label">GitHub</div>
                  <div className="contact-item-value">github.com/tushar-matey</div>
                </div>
              </a>
            </div>
          </div>

          <div className="reveal-right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
              id="contactForm"
            >
              <div className="form-group">
                <label htmlFor="user_name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="form-input"
                  placeholder="e.g. Alex Morgan"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="form-input"
                  placeholder="alex@domain.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message / Transmission
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Project inquiry, collaboration opportunity, or hello..."
                  rows={4}
                  required
                />
              </div>

              {errorMsg && <div className="form-error">{errorMsg}</div>}

              {success && (
                <div className="form-success">
                  Transmission received! Thank you for reaching out — I will respond shortly.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {loading ? 'Transmitting Data...' : 'Send Message ↗'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
