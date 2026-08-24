import { useState, type FormEvent } from 'react'
import { Photo } from '../components/Photo'
import { useLanguage } from '../context/LanguageContext'

export function Contact() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.contact.formError)
      return
    }
    setBusy(true)
    window.setTimeout(() => {
      const prev = JSON.parse(localStorage.getItem('sol-messages') || '[]') as unknown[]
      localStorage.setItem(
        'sol-messages',
        JSON.stringify([{ name, email, message, createdAt: new Date().toISOString() }, ...prev]),
      )
      setBusy(false)
      setSent(true)
      setName('')
      setEmail('')
      setMessage('')
      setError('')
    }, 700)
  }

  return (
    <div className="page contact-page">
      <header className="page-hero">
        <p className="kicker">{t.contact.kicker}</p>
        <h1 className="display">{t.contact.title}</h1>
        <p className="lede">{t.contact.intro}</p>
      </header>

      <div className="contact-grid">
        <aside className="contact-aside">
          <Photo src="interior" alt="SÓL Wrzeszcz" className="contact-photo" />
          <div>
            <p className="footer-label">{t.contact.addressLabel}</p>
            <p className="contact-block">{t.contact.address}</p>
          </div>
          <div>
            <p className="footer-label">{t.contact.phoneLabel}</p>
            <a className="contact-block" href="tel:+48587001840">
              {t.contact.phone}
            </a>
          </div>
          <div>
            <p className="footer-label">{t.contact.emailLabel}</p>
            <a className="contact-block" href="mailto:hello@solgdansk.pl">
              {t.contact.email}
            </a>
          </div>
          <p className="hours-note">{t.contact.mapNote}</p>
          <a
            className="btn btn-ghost"
            href="https://maps.google.com/?q=Wajdeloty+18+Gdansk"
            target="_blank"
            rel="noreferrer"
          >
            Google Maps
          </a>
        </aside>

        <form className="form-card" onSubmit={onSubmit} noValidate>
          <h2 className="form-title">{t.contact.formTitle}</h2>
          {sent ? <p className="form-ok">{t.contact.formSuccess}</p> : null}
          <label>
            <span>{t.contact.formName}</span>
            <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </label>
          <label>
            <span>{t.contact.formEmail}</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </label>
          <label>
            <span>{t.contact.formMessage}</span>
            <textarea rows={6} value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          {error ? <p className="form-error">{error}</p> : null}
          <button type="submit" className="btn btn-coral" disabled={busy}>
            {busy ? t.contact.formSending : t.contact.formSubmit}
          </button>
        </form>
      </div>
    </div>
  )
}
