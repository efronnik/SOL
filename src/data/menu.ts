export type MenuCategory = 'raw' | 'fire' | 'share' | 'sweet' | 'drinks'

export type MenuItem = {
  id: string
  category: MenuCategory
  price: number
  featured?: boolean
  image: string
  pl: { name: string; desc: string }
  en: { name: string; desc: string }
}

export const menuItems: MenuItem[] = [
  {
    id: 'r1',
    category: 'raw',
    price: 42,
    featured: true,
    image: 'oyster',
    pl: {
      name: 'Ostryga · sól zatokowa',
      desc: 'Francuska ostryga, kryształ naszej soli, olej z cytryny bergamotki.',
    },
    en: {
      name: 'Oyster · bay salt',
      desc: 'French oyster, our salt crystal, bergamot lemon oil.',
    },
  },
  {
    id: 'r2',
    category: 'raw',
    price: 68,
    featured: true,
    image: 'tuna',
    pl: {
      name: 'Tuńczyk · yuzu · szczaw',
      desc: 'Sashimi z tuńczyka, żel yuzu, liście szczawiu, chips z nori.',
    },
    en: {
      name: 'Tuna · yuzu · sorrel',
      desc: 'Tuna sashimi, yuzu gel, sorrel leaves, nori chip.',
    },
  },
  {
    id: 'r3',
    category: 'raw',
    price: 54,
    image: 'ceviche',
    pl: {
      name: 'Ceviche z dorsza',
      desc: 'Dorsz, mleczko kokosowe, chili, kolendra, chrupiąca quinoa.',
    },
    en: {
      name: 'Cod ceviche',
      desc: 'Cod, coconut milk, chilli, coriander, crisp quinoa.',
    },
  },
  {
    id: 'f1',
    category: 'fire',
    price: 96,
    featured: true,
    image: 'turbot',
    pl: {
      name: 'Turbot z żaru',
      desc: 'Cały turbot, masło z alg, młode ziemniaki, sok z cytryny i popiołu.',
    },
    en: {
      name: 'Ember turbot',
      desc: 'Whole turbot, kelp butter, young potatoes, lemon-ash juice.',
    },
  },
  {
    id: 'f2',
    category: 'fire',
    price: 88,
    image: 'salmon',
    pl: {
      name: 'Łosoś · koperek · dym',
      desc: 'Łosoś pieczony w skórze, krem koperkowy, wędzona śmietana.',
    },
    en: {
      name: 'Salmon · dill · smoke',
      desc: 'Skin-on roasted salmon, dill cream, smoked sour cream.',
    },
  },
  {
    id: 'f3',
    category: 'fire',
    price: 74,
    image: 'cabbage',
    pl: {
      name: 'Kapusta z węgla',
      desc: 'Kapusta pointu, miso z orzechów, olej z szczypiorku.',
    },
    en: {
      name: 'Charred pointed cabbage',
      desc: 'Pointed cabbage, walnut miso, chive oil.',
    },
  },
  {
    id: 's1',
    category: 'share',
    price: 62,
    featured: true,
    image: 'bread',
    pl: {
      name: 'Chleb · masło solne',
      desc: 'Zakwas z mąki orkiszowej, masło ubite z naszą solą zatokową.',
    },
    en: {
      name: 'Bread · salt butter',
      desc: 'Spelt sourdough, butter whipped with our bay salt.',
    },
  },
  {
    id: 's2',
    category: 'share',
    price: 78,
    image: 'plate',
    pl: {
      name: 'Talerz z morza',
      desc: 'Wędzona makrela, krewetki, marynowane warzywa, majonez z alg.',
    },
    en: {
      name: 'Sea plate',
      desc: 'Smoked mackerel, prawns, pickled vegetables, kelp mayo.',
    },
  },
  {
    id: 'w1',
    category: 'sweet',
    price: 46,
    image: 'lemon',
    pl: {
      name: 'Cytryna · sól · oliwa',
      desc: 'Tarta cytrynowa, kryształ soli, oliwa z oliwek, sorbet z bzu.',
    },
    en: {
      name: 'Lemon · salt · olive oil',
      desc: 'Lemon tart, salt crystal, olive oil, elderflower sorbet.',
    },
  },
  {
    id: 'w2',
    category: 'sweet',
    price: 44,
    image: 'chocolate',
    pl: {
      name: 'Czekolada · wodorosty',
      desc: 'Ganache 70%, kruszonka z nori, lody z mleka owsianego.',
    },
    en: {
      name: 'Chocolate · seaweed',
      desc: '70% ganache, nori crumb, oat-milk ice cream.',
    },
  },
  {
    id: 'd1',
    category: 'drinks',
    price: 38,
    image: 'wine',
    pl: {
      name: 'Wino dnia · kieliszek',
      desc: 'Rotująca butelka z wybrzeża — zapytaj o dzisiejszy wybór.',
    },
    en: {
      name: 'Wine of the day · glass',
      desc: 'Rotating coastal bottle — ask for today’s pour.',
    },
  },
  {
    id: 'd2',
    category: 'drinks',
    price: 28,
    image: 'soda',
    pl: {
      name: 'Woda mineralna · sól',
      desc: 'Gazowana woda z odrobiną naszej soli i skórką cytrusów.',
    },
    en: {
      name: 'Mineral water · salt',
      desc: 'Sparkling water with a pinch of our salt and citrus peel.',
    },
  },
]
