const photos: Record<string, string> = {
  hero: '/images/hero.jpg',
  about: '/images/about.jpg',
  interior: '/images/interior.jpg',
  sea: '/images/sea.jpg',
  table: '/images/table.jpg',
  oyster: '/images/oyster.jpg',
  tuna: '/images/tuna.jpg',
  ceviche: '/images/ceviche.jpg',
  turbot: '/images/turbot.jpg',
  salmon: '/images/salmon.jpg',
  cabbage: '/images/cabbage.jpg',
  bread: '/images/bread.jpg',
  plate: '/images/plate.jpg',
  lemon: '/images/lemon.jpg',
  chocolate: '/images/chocolate.jpg',
  wine: '/images/wine.jpg',
  soda: '/images/soda.jpg',
}

type Props = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function Photo({ src, alt, className, priority }: Props) {
  const url = photos[src] ?? photos.hero

  return (
    <div className={`photo ${className ?? ''}`}>
      <img src={url} alt={alt} loading={priority ? 'eager' : 'lazy'} />
    </div>
  )
}
