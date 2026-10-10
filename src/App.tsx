import { useEffect, useState, useCallback } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ParticleField from './components/ParticleField'

const SECTION_IDS = ['hero', 'about', 'experience', 'skills', 'projects', 'certifications', 'achievements', 'contact'] as const

export default function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [activeSection, setActiveSection] = useState<string>('hero')

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const navOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  const handleLoadComplete = useCallback(() => {
    setShowLoader(false)
  }, [])

  return (
    <>
      {showLoader && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className="cyber-bg" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <ParticleField />
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <main>
        <Hero onNavigate={scrollToSection} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer onNavigate={scrollToSection} />
    </>
  )
}
