import { useEffect, useRef, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('INITIALIZING SYSTEM...')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const statuses = [
      'INITIALIZING SYSTEM...',
      'LOADING NEURAL INTERFACE...',
      'DECRYPTING PORTFOLIO DATA...',
      'ESTABLISHING UPLINK...',
      'RENDERING CYBERDECK...',
      'SYSTEM READY',
    ]

    let current = 0
    let completed = false

    const finish = () => {
      if (completed) return
      completed = true
      clearInterval(interval)
      containerRef.current?.classList.add('fade-out')
      setTimeout(onComplete, 300)
    }

    const interval = setInterval(() => {
      current += Math.random() * 35 + 20
      if (current >= 100) {
        current = 100
        setProgress(100)
        setStatusText('SYSTEM READY')
        finish()
      } else {
        setProgress(Math.floor(current))
        const statusIndex = Math.min(
          Math.floor((current / 100) * (statuses.length - 1)),
          statuses.length - 2
        )
        setStatusText(statuses[statusIndex])
      }
    }, 120)

    window.addEventListener('wheel', finish, { once: true, passive: true })
    window.addEventListener('touchmove', finish, { once: true, passive: true })
    window.addEventListener('keydown', finish, { once: true, passive: true })
    window.addEventListener('click', finish, { once: true })

    return () => {
      clearInterval(interval)
      window.removeEventListener('wheel', finish)
      window.removeEventListener('touchmove', finish)
      window.removeEventListener('keydown', finish)
      window.removeEventListener('click', finish)
    }
  }, [onComplete])

  return (
    <div className="loading-screen" ref={containerRef}>
      <div className="loading-logo">TUSHAR_MATEY</div>
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="loading-text">{statusText} [{progress}%]</div>
    </div>
  )
}
