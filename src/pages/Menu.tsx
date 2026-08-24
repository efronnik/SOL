import { useMemo, useState } from 'react'
import { Photo } from '../components/Photo'
import { menuItems, type MenuCategory } from '../data/menu'
import { useLanguage } from '../context/LanguageContext'

const filters: Array<'all' | MenuCategory> = ['all', 'raw', 'fire', 'share', 'sweet', 'drinks']

export function Menu() {
  const { t, lang } = useLanguage()
  const [filter, setFilter] = useState<(typeof filters)[number]>('all')

  const items = useMemo(
    () => (filter === 'all' ? menuItems : menuItems.filter((m) => m.category === filter)),
    [filter],
  )

  return (
    <div className="page menu-page">
      <header className="page-hero">
        <p className="kicker">{t.menuPage.kicker}</p>
        <h1 className="display">{t.menuPage.title}</h1>
        <p className="lede">{t.menuPage.intro}</p>
      </header>

      <div className="menu-filters" role="tablist" aria-label="Menu filters">
        {filters.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            className={`chip ${filter === key ? 'is-active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {t.menuPage.filters[key]}
          </button>
        ))}
      </div>

      <div className="menu-list">
        {items.map((item, i) => {
          const copy = item[lang]
          return (
            <article key={item.id} className="menu-row">
              <div className="menu-row-media">
                <Photo src={item.image} alt={copy.name} />
                <span className="menu-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="menu-row-body">
                <div className="menu-row-top">
                  <h2>{copy.name}</h2>
                  <span className="menu-price">
                    {item.price} {t.menuPage.currency}
                  </span>
                </div>
                <p>{copy.desc}</p>
                <span className="menu-cat">{t.menuPage.filters[item.category]}</span>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
