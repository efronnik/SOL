import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export function Header() {
  const { t, lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const links = [
    { to: '/', label: t.nav.home, index: '01' },
    { to: '/menu', label: t.nav.menu, index: '02' },
    { to: '/about', label: t.nav.about, index: '03' },
    { to: '/reservation', label: t.nav.reservation, index: '04' },
    { to: '/contact', label: t.nav.contact, index: '05' },
  ]

  const overlay =
    typeof document !== 'undefined'
      ? createPortal(
          <div className={`nav-overlay ${open ? 'is-open' : ''}`} aria-hidden={!open}>
            <div className="nav-overlay-bg" />
            <div className="nav-overlay-panel">
              <p className="nav-overlay-kicker">SÓL · Gdańsk</p>
              <nav className="nav-overlay-links" aria-label="Main">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className="nav-overlay-link"
                  >
                    <span className="nav-index">{l.index}</span>
                    <span className="nav-label">{l.label}</span>
                  </NavLink>
                ))}
              </nav>
              <div className="nav-overlay-foot">
                <NavLink to="/reservation" className="btn btn-coral" onClick={() => setOpen(false)}>
                  {t.nav.reservation}
                </NavLink>
                <div className="lang-switch lang-switch-lg" role="group" aria-label="Language">
                  <button
                    type="button"
                    className={lang === 'pl' ? 'is-active' : ''}
                    onClick={() => setLang('pl')}
                  >
                    PL
                  </button>
                  <button
                    type="button"
                    className={lang === 'en' ? 'is-active' : ''}
                    onClick={() => setLang('en')}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          SÓL
        </NavLink>

        <nav className="nav-desktop" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'pl' ? 'is-active' : ''}
              onClick={() => setLang('pl')}
              aria-pressed={lang === 'pl'}
            >
              PL
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          <NavLink to="/reservation" className="btn btn-sm header-cta">
            {t.nav.reservation}
          </NavLink>

          <button
            type="button"
            className={`menu-toggle ${open ? 'is-active' : ''}`}
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      {overlay}
    </>
  )
}
