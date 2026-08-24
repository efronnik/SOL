import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <NavLink to="/" className="footer-logo">
          SÓL
        </NavLink>
        <p className="footer-tag">{t.footer.tagline}</p>
      </div>
      <div className="footer-grid">
        <div>
          <p className="footer-label">{t.contact.addressLabel}</p>
          <p className="footer-text">{t.contact.address}</p>
        </div>
        <div>
          <p className="footer-label">{t.contact.phoneLabel}</p>
          <a className="footer-text" href="tel:+48587001840">
            {t.contact.phone}
          </a>
        </div>
        <div>
          <p className="footer-label">{t.contact.emailLabel}</p>
          <a className="footer-text" href="mailto:hello@solgdansk.pl">
            {t.contact.email}
          </a>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <NavLink to="/menu">{t.nav.menu}</NavLink>
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/reservation">{t.nav.reservation}</NavLink>
          <NavLink to="/contact">{t.nav.contact}</NavLink>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.rights}</p>
        <p>Wrzeszcz · Baltic</p>
      </div>
    </footer>
  )
}
