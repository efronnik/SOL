import { useEffect, useRef, useState } from 'react'

const FADE_SECONDS = 1.2

export function HeroWaves() {
  const aRef = useRef<HTMLVideoElement>(null)
  const bRef = useRef<HTMLVideoElement>(null)
  const [front, setFront] = useState<'a' | 'b'>('a')
  const switching = useRef(false)

  useEffect(() => {
    const frontEl = front === 'a' ? aRef.current : bRef.current
    const backEl = front === 'a' ? bRef.current : aRef.current
    if (!frontEl || !backEl) return

    const prepareSwap = () => {
      if (switching.current || !Number.isFinite(frontEl.duration)) return
      const remaining = frontEl.duration - frontEl.currentTime
      if (remaining > FADE_SECONDS) return

      switching.current = true
      backEl.currentTime = 0
      void backEl.play().catch(() => undefined)
      setFront((f) => (f === 'a' ? 'b' : 'a'))

      window.setTimeout(() => {
        frontEl.pause()
        switching.current = false
      }, FADE_SECONDS * 1000)
    }

    frontEl.addEventListener('timeupdate', prepareSwap)
    return () => frontEl.removeEventListener('timeupdate', prepareSwap)
  }, [front])

  return (
    <div className="hero-waves" aria-hidden="true">
      <video
        ref={aRef}
        className={`hero-waves-video ${front === 'a' ? 'is-front' : 'is-back'}`}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/videos/waves-poster.jpg"
      >
        <source src="/videos/waves.mp4" type="video/mp4" />
      </video>
      <video
        ref={bRef}
        className={`hero-waves-video ${front === 'b' ? 'is-front' : 'is-back'}`}
        muted
        playsInline
        preload="auto"
        poster="/videos/waves-poster.jpg"
      >
        <source src="/videos/waves.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
