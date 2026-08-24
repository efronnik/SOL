import { Link } from 'react-router-dom'
import { Photo } from '../components/Photo'
import { useLanguage } from '../context/LanguageContext'

export function About() {
  const { t } = useLanguage()

  return (
    <div className="page about-page">
      <header className="page-hero">
        <p className="kicker">{t.about.kicker}</p>
        <h1 className="display">
          {t.about.title.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
      </header>

      <div className="about-split">
        <Photo src="about" alt="SÓL interior" className="about-photo" />
        <div className="about-copy">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <Link to="/reservation" className="btn">
            {t.nav.reservation}
          </Link>
        </div>
      </div>

      <div className="stat-grid">
        {t.about.stats.map((s) => (
          <div key={s.label} className="stat-card">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="about-gallery">
        <Photo src="interior" alt="Sala SÓL" />
        <Photo src="table" alt="Stół" />
        <Photo src="sea" alt="Bałtyk" />
      </div>

      <section className="values">
        <h2 className="display-sm">{t.about.valuesTitle}</h2>
        <div className="value-grid">
          {t.about.values.map((v) => (
            <article key={v.title} className="value-card">
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
