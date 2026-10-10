import { useState, useEffect, useCallback } from 'react'

interface NavigationProps {
  activeSection: string
  onNavigate: (id: string) => void
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  const handleScroll = useCallback(() => {
    const current = window.scrollY
    setHidden(current > lastScroll && current > 100)
    setLastScroll(current)
  }, [lastScroll])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleClick = (id: string) => {
    onNavigate(id)
    setMobileOpen(false)
  }

  return (
    <nav className={`nav ${hidden ? 'hidden' : ''}`} role="navigation" aria-label="Main navigation">
      <button
        className="nav-logo"
        onClick={() => onNavigate('hero')}
        aria-label="Scroll to top"
      >
        TM
      </button>

      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <button
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleClick(item.id)}
              aria-current={activeSection === item.id ? 'true' : undefined}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
