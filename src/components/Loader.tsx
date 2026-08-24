import { useEffect, useState } from 'react'

type Props = { onDone: () => void }

export function Loader({ onDone }: Props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1600)
      const eased = 1 - Math.pow(1 - t, 3)
      const next = Math.round(eased * 100)
      setProgress(next)
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        frame = window.setTimeout(onDone, 280)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(frame)
    }
  }, [onDone])

  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader-inner">
        <p className="loader-mark">SÓL</p>
        <div className="loader-bar">
          <i style={{ width: `${progress}%` }} />
        </div>
        <p className="loader-pct">{progress.toString().padStart(3, '0')}</p>
      </div>
    </div>
  )
}
