import { useMemo, useState, type FormEvent } from 'react'
import { Photo } from '../components/Photo'
import { useLanguage } from '../context/LanguageContext'

type FormState = {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  notes: string
}

const empty: FormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '19:00',
  guests: '2',
  notes: '',
}

export function Reservation() {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormState>(empty)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState<FormState | null>(null)

  const minDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().slice(0, 10)
  }, [])

  const onChange = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setError('')
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.date) {
      setError(t.reservation.errors.required)
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError(t.reservation.errors.email)
      return
    }
    if (form.phone.replace(/\D/g, '').length < 9) {
      setError(t.reservation.errors.phone)
      return
    }
    if (form.date < minDate) {
      setError(t.reservation.errors.past)
      return
    }

    setBusy(true)
    window.setTimeout(() => {
      const payload = { ...form, createdAt: new Date().toISOString() }
      const prev = JSON.parse(localStorage.getItem('sol-reservations') || '[]') as unknown[]
      localStorage.setItem('sol-reservations', JSON.stringify([payload, ...prev]))
      setDone(form)
      setBusy(false)
      setForm(empty)
    }, 800)
  }

  if (done) {
    return (
      <div className="page reservation-page">
        <div className="success-card">
          <p className="kicker">SÓL</p>
          <h1 className="display-sm">{t.reservation.successTitle}</h1>
          <p className="lede">{t.reservation.successText}</p>
          <ul className="success-meta">
            <li>
              <span>{t.reservation.fields.name}</span>
              <strong>{done.name}</strong>
            </li>
            <li>
              <span>{t.reservation.fields.date}</span>
              <strong>
                {done.date} · {done.time}
              </strong>
            </li>
            <li>
              <span>{t.reservation.fields.guests}</span>
              <strong>{done.guests}</strong>
            </li>
            <li>
              <span>{t.reservation.fields.email}</span>
              <strong>{done.email}</strong>
            </li>
          </ul>
          <button type="button" className="btn" onClick={() => setDone(null)}>
            {t.reservation.another}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page reservation-page">
      <header className="page-hero">
        <p className="kicker">{t.reservation.kicker}</p>
        <h1 className="display">{t.reservation.title}</h1>
        <p className="lede">{t.reservation.intro}</p>
      </header>

      <div className="reserve-layout">
        <Photo src="table" alt="Stolik SÓL" className="reserve-photo" />
      <form className="form-card" onSubmit={onSubmit} noValidate>
        <label>
          <span>{t.reservation.fields.name}</span>
          <input
            value={form.name}
            onChange={(e) => onChange('name', e.target.value)}
            autoComplete="name"
            required
          />
        </label>
        <div className="form-row">
          <label>
            <span>{t.reservation.fields.email}</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => onChange('email', e.target.value)}
              autoComplete="email"
              required
            />
          </label>
          <label>
            <span>{t.reservation.fields.phone}</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              autoComplete="tel"
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            <span>{t.reservation.fields.date}</span>
            <input
              type="date"
              min={minDate}
              value={form.date}
              onChange={(e) => onChange('date', e.target.value)}
              required
            />
          </label>
          <label>
            <span>{t.reservation.fields.time}</span>
            <select value={form.time} onChange={(e) => onChange('time', e.target.value)}>
              {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(
                (time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ),
              )}
            </select>
          </label>
          <label>
            <span>{t.reservation.fields.guests}</span>
            <select value={form.guests} onChange={(e) => onChange('guests', e.target.value)}>
              {Array.from({ length: 8 }, (_, i) => String(i + 1)).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label>
          <span>{t.reservation.fields.notes}</span>
          <textarea
            rows={4}
            value={form.notes}
            onChange={(e) => onChange('notes', e.target.value)}
          />
        </label>

        {error ? <p className="form-error">{error}</p> : null}

        <button type="submit" className="btn btn-coral" disabled={busy}>
          {busy ? t.reservation.submitting : t.reservation.submit}
        </button>
      </form>
      </div>
    </div>
  )
}
