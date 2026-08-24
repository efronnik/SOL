import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HeroWaves } from '../components/HeroWaves'
import { Photo } from '../components/Photo'
import { menuItems } from '../data/menu'
import { useLanguage } from '../context/LanguageContext'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-in')
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return ref
}

export function Home() {
  const { t, lang } = useLanguage()
  const root = useReveal()
  const featured = menuItems.filter((m) => m.featured)

  return (
    <div ref={root}>
      <section className="hero">
        <HeroWaves />
        <div className="hero-left">
          <p className="kicker reveal">{t.hero.kicker}</p>
          <h1 className="display reveal">
            {t.hero.title.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="lede reveal">{t.hero.subtitle}</p>
          <div className="hero-cta reveal">
            <Link to="/menu" className="btn">
              {t.hero.ctaMenu}
            </Link>
            <Link to="/reservation" className="btn btn-ghost">
              {t.hero.ctaReserve}
            </Link>
          </div>
          <p className="hero-meta reveal">{t.hero.meta}</p>
        </div>
        <div className="hero-right reveal">
          <Photo src="hero" alt="Bałtyk — Zatoka Gdańska" className="hero-photo" priority />
          <div className="hero-float">
            <span>54°N</span>
            <span>Baltic</span>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>{t.hero.scroll}</span>
          <i />
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>{t.marquee}</span>
          <span>{t.marquee}</span>
        </div>
      </div>

      <section className="section tides">
        <div className="section-head reveal">
          <p className="kicker">{t.tides.kicker}</p>
          <h2 className="display-sm">{t.tides.title}</h2>
        </div>
        <div className="tide-grid">
          {t.tides.items.map((item, i) => {
            const [num, name] = item.label.split(' · ')
            return (
              <article key={item.label} className={`tide-card tide-${i + 1} reveal`}>
                <span className="tide-mark" aria-hidden="true">
                  {num}
                </span>
                <p className="tide-num">{num}</p>
                <h3>{name ?? item.label}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section featured">
        <div className="section-head inline reveal">
          <div>
            <p className="kicker">{t.featured.kicker}</p>
            <h2 className="display-sm">{t.featured.title}</h2>
          </div>
          <Link to="/menu" className="btn btn-ghost">
            {t.featured.view}
          </Link>
        </div>
        <div className="featured-rail">
          {featured.map((item, i) => {
            const copy = item[lang]
            return (
              <Link to="/menu" key={item.id} className={`featured-card featured-${i + 1} reveal`}>
                <div className="featured-meta">
                  <span className="featured-index">0{i + 1}</span>
                  <h3>{copy.name}</h3>
                  <p>{copy.desc}</p>
                  <span>
                    {item.price} {t.menuPage.currency}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="visual-strip" aria-hidden="true">
        <Photo src="sea" alt="Molo w Sopocie, Bałtyk" />
        <Photo src="interior" alt="" />
        <Photo src="table" alt="" />
      </section>

      <section className="section manifesto">
        <div className="manifesto-grid">
          <div className="reveal">
            <p className="kicker">{t.manifesto.kicker}</p>
            <h2 className="display-sm">
              {t.manifesto.title.split('\n').map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </div>
          <div className="reveal">
            <p className="lede">{t.manifesto.body}</p>
            <Link to="/about" className="btn">
              {t.manifesto.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section hours">
        <div className="hours-panel reveal">
          <div>
            <p className="kicker">{t.hours.kicker}</p>
            <h2 className="display-sm">{t.hours.title}</h2>
            <p className="hours-note">{t.hours.note}</p>
          </div>
          <ul className="hours-list">
            {t.hours.days.map((d) => (
              <li key={d.day}>
                <span>{d.day}</span>
                <strong>{d.time}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
