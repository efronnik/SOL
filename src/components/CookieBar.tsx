import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function CookieBar() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const choice = localStorage.getItem('sol-cookies')
    if (!choice) setVisible(true)
  }, [])

  if (!visible) return null

  const choose = (value: 'accept' | 'decline') => {
    localStorage.setItem('sol-cookies', value)
    setVisible(false)
  }

  return (
    <div className="cookie-bar" role="dialog" aria-live="polite">
      <p>{t.cookie.text}</p>
      <div className="cookie-actions">
        <button type="button" className="btn btn-sm" onClick={() => choose('accept')}>
          {t.cookie.accept}
        </button>
        <button type="button" className="btn btn-sm btn-ghost" onClick={() => choose('decline')}>
          {t.cookie.decline}
        </button>
      </div>
    </div>
  )
}
