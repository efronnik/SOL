export type Lang = 'pl' | 'en'

export type Translation = {
  nav: {
    home: string
    menu: string
    about: string
    reservation: string
    contact: string
    open: string
    close: string
  }
  hero: {
    kicker: string
    title: string
    subtitle: string
    ctaMenu: string
    ctaReserve: string
    scroll: string
    meta: string
  }
  marquee: string
  tides: {
    kicker: string
    title: string
    items: { label: string; text: string }[]
  }
  featured: {
    kicker: string
    title: string
    view: string
  }
  manifesto: {
    kicker: string
    title: string
    body: string
    cta: string
  }
  hours: {
    kicker: string
    title: string
    days: { day: string; time: string }[]
    note: string
  }
  menuPage: {
    kicker: string
    title: string
    intro: string
    filters: Record<string, string>
    currency: string
  }
  about: {
    kicker: string
    title: string
    p1: string
    p2: string
    p3: string
    stats: { value: string; label: string }[]
    valuesTitle: string
    values: { title: string; text: string }[]
  }
  reservation: {
    kicker: string
    title: string
    intro: string
    submit: string
    submitting: string
    another: string
    successTitle: string
    successText: string
    fields: {
      name: string
      email: string
      phone: string
      date: string
      time: string
      guests: string
      notes: string
    }
    errors: {
      required: string
      email: string
      phone: string
      past: string
    }
  }
  contact: {
    kicker: string
    title: string
    intro: string
    addressLabel: string
    address: string
    phoneLabel: string
    phone: string
    emailLabel: string
    email: string
    mapNote: string
    formTitle: string
    formName: string
    formEmail: string
    formMessage: string
    formSubmit: string
    formSending: string
    formSuccess: string
    formError: string
  }
  cookie: {
    text: string
    accept: string
    decline: string
  }
  footer: {
    tagline: string
    rights: string
  }
}

export const translations: Record<Lang, Translation> = {
  pl: {
    nav: {
      home: 'Start',
      menu: 'Menu',
      about: 'O nas',
      reservation: 'Rezerwacja',
      contact: 'Kontakt',
      open: 'Menu',
      close: 'Zamknij',
    },
    hero: {
      kicker: 'Gdańsk · Wrzeszcz',
      title: 'Sól,\nmorze,\ncisza.',
      subtitle:
        'Kuchnia wybrzeża: świeża ryba, mineralne wina i sól z Zatoki Gdańskiej. Wieczór bez pośpiechu.',
      ctaMenu: 'Zobacz menu',
      ctaReserve: 'Zarezerwuj stolik',
      scroll: 'Przewiń',
      meta: 'Otwarte wt–nd · pt–sb do 23:00 · nd do 21:00',
    },
    marquee: 'BALTIC SEA · RAW · FERMENT · FIRE · SALT · MINERAL ·  ',
    tides: {
      kicker: 'Rytm',
      title: 'Trzy pływy wieczoru',
      items: [
        {
          label: '01 · Surowe',
          text: 'Ostrygi, sashimi, ceviche — to, co morze oddaje dziś rano.',
        },
        {
          label: '02 · Palenisko',
          text: 'Ryba z żaru, warzywa z popiołu, sosy z kości i alg.',
        },
        {
          label: '03 · Mineralne',
          text: 'Wina z wybrzeży Europy, niskie interwencje, czysta sól.',
        },
      ],
    },
    featured: {
      kicker: 'Sezon',
      title: 'To, co teraz na talerzu',
      view: 'Pełne menu',
    },
    manifesto: {
      kicker: 'Manifest',
      title: 'Mniej ozdób.\nWięcej smaku.',
      body: 'SÓL powstało z tęsknoty za prostym, precyzyjnym jedzeniem nad Bałtykiem. Gotujemy krótko, serwujemy wolno. Stół jest mały — żeby każdy gość dostał uwagę, a nie hałas.',
      cta: 'Poznaj nas',
    },
    hours: {
      kicker: 'Godziny',
      title: 'Kiedy jesteśmy otwarci',
      days: [
        { day: 'Poniedziałek', time: 'Zamknięte' },
        { day: 'Wtorek – Czwartek', time: '17:00 – 22:30' },
        { day: 'Piątek – Sobota', time: '17:00 – 23:00' },
        { day: 'Niedziela', time: '16:00 – 21:00' },
      ],
      note: 'Ostatnie zamówienie 45 minut przed zamknięciem.',
    },
    menuPage: {
      kicker: 'Karta',
      title: 'Menu',
      intro: 'Zmienia się z pływami i dostawami. Ceny w PLN. Alergeny — zapytaj obsługę.',
      filters: {
        all: 'Wszystko',
        raw: 'Surowe',
        fire: 'Z ognia',
        share: 'Do dzielenia',
        sweet: 'Słodkie',
        drinks: 'Napoje',
      },
      currency: 'zł',
    },
    about: {
      kicker: 'Historia',
      title: 'Od portu\ndo stołu',
      p1: 'SÓL otworzyliśmy w 2024 w Wrzeszczu — między torami a morzem. Chcieliśmy miejsca, które smakuje jak Bałtyk po burzy: ostre, czyste, trochę dzikie.',
      p2: 'Szef kuchni Kacper Wolski pracował w Kopenhadze i Lizbonie. Tutaj gotuje z rybakami z Helu i ogrodnikami z Kaszub. Sól krystalizujemy sami z wody Zatoki.',
      p3: 'Sala ma 28 miejsc. Nie ma playlisty na głośno — tylko rozmowa, szkło i dźwięk noża na ceramicznej miseczce.',
      stats: [
        { value: '28', label: 'miejsc' },
        { value: '7', label: 'dostawców ryb' },
        { value: '40+', label: 'win mineralnych' },
      ],
      valuesTitle: 'Na czym stoimy',
      values: [
        {
          title: 'Sezon, nie trend',
          text: 'Jeśli nie ma świeżej ryby — nie ma dania. Karta jest krótka celowo.',
        },
        {
          title: 'Zero szumu',
          text: 'Mała sala, miękkie światło, obsługa, która zna imię wina, nie tylko numer stolika.',
        },
        {
          title: 'Sól jako rzemiosło',
          text: 'Nasza sól to nie przyprawa z paczki — to minerał, który domyka każdy talerz.',
        },
      ],
    },
    reservation: {
      kicker: 'Stolik',
      title: 'Rezerwacja',
      intro: 'Rezerwujemy na 2 godziny. Grupy powyżej 6 osób — napisz do nas wcześniej.',
      submit: 'Wyślij prośbę',
      submitting: 'Wysyłanie…',
      another: 'Nowa rezerwacja',
      successTitle: 'Prośba wysłana',
      successText: 'Potwierdzimy stolik e-mailem w ciągu kilku godzin. Do zobaczenia nad solą.',
      fields: {
        name: 'Imię i nazwisko',
        email: 'E-mail',
        phone: 'Telefon',
        date: 'Data',
        time: 'Godzina',
        guests: 'Goście',
        notes: 'Uwagi (alergie, okazja)',
      },
      errors: {
        required: 'Uzupełnij wymagane pola.',
        email: 'Podaj poprawny e-mail.',
        phone: 'Podaj poprawny numer telefonu.',
        past: 'Wybierz datę od jutra.',
      },
    },
    contact: {
      kicker: 'Połączenie',
      title: 'Kontakt',
      intro: 'Pytania o menu, wina albo prywatne kolacje — napisz. Odpowiadamy zwykle tego samego dnia.',
      addressLabel: 'Adres',
      address: 'ul. Wajdeloty 18\n80-437 Gdańsk Wrzeszcz',
      phoneLabel: 'Telefon',
      phone: '+48 58 700 18 40',
      emailLabel: 'E-mail',
      email: 'hello@solgdansk.pl',
      mapNote: '5 minut pieszo od SKM Wrzeszcz. Parking przy ul. Partyzantów.',
      formTitle: 'Napisz do nas',
      formName: 'Imię',
      formEmail: 'E-mail',
      formMessage: 'Wiadomość',
      formSubmit: 'Wyślij',
      formSending: 'Wysyłanie…',
      formSuccess: 'Wiadomość wysłana. Odpiszemy wkrótce.',
      formError: 'Uzupełnij wszystkie pola poprawnie.',
    },
    cookie: {
      text: 'Używamy cookies, żeby zapamiętać język i poprawić działanie strony.',
      accept: 'Akceptuję',
      decline: 'Odrzuć',
    },
    footer: {
      tagline: 'Coastal kitchen · Gdańsk',
      rights: '© SÓL. Wszelkie prawa zastrzeżone.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      reservation: 'Reserve',
      contact: 'Contact',
      open: 'Menu',
      close: 'Close',
    },
    hero: {
      kicker: 'Gdańsk · Wrzeszcz',
      title: 'Salt,\nsea,\nstillness.',
      subtitle:
        'A coastal kitchen: day-boat fish, mineral wines, and salt from the Bay of Gdańsk. An unhurried evening.',
      ctaMenu: 'View menu',
      ctaReserve: 'Book a table',
      scroll: 'Scroll',
      meta: 'Open Tue–Sun · Fri–Sat until 11 · Sun until 9',
    },
    marquee: 'BALTIC SEA · RAW · FERMENT · FIRE · SALT · MINERAL ·  ',
    tides: {
      kicker: 'Rhythm',
      title: 'Three tides of the evening',
      items: [
        {
          label: '01 · Raw',
          text: 'Oysters, sashimi, ceviche — whatever the sea gave us this morning.',
        },
        {
          label: '02 · Hearth',
          text: 'Fish from the coals, vegetables from ash, sauces of bone and kelp.',
        },
        {
          label: '03 · Mineral',
          text: 'Coastal European wines, low intervention, clean salt.',
        },
      ],
    },
    featured: {
      kicker: 'Season',
      title: 'On the plate right now',
      view: 'Full menu',
    },
    manifesto: {
      kicker: 'Manifesto',
      title: 'Fewer ornaments.\nMore flavour.',
      body: 'SÓL grew from a craving for precise, simple food by the Baltic. We cook short and serve slow. The room is small — so every guest gets attention, not noise.',
      cta: 'Our story',
    },
    hours: {
      kicker: 'Hours',
      title: 'When we are open',
      days: [
        { day: 'Monday', time: 'Closed' },
        { day: 'Tuesday – Thursday', time: '5:00 – 10:30 pm' },
        { day: 'Friday – Saturday', time: '5:00 – 11:00 pm' },
        { day: 'Sunday', time: '4:00 – 9:00 pm' },
      ],
      note: 'Last order 45 minutes before close.',
    },
    menuPage: {
      kicker: 'Card',
      title: 'Menu',
      intro: 'It shifts with tides and deliveries. Prices in PLN. Ask us about allergens.',
      filters: {
        all: 'All',
        raw: 'Raw',
        fire: 'From fire',
        share: 'To share',
        sweet: 'Sweet',
        drinks: 'Drinks',
      },
      currency: 'PLN',
    },
    about: {
      kicker: 'Story',
      title: 'From the port\nto the table',
      p1: 'We opened SÓL in 2024 in Wrzeszcz — between the rails and the sea. We wanted a place that tastes like the Baltic after a storm: sharp, clean, a little wild.',
      p2: 'Chef Kacper Wolski cooked in Copenhagen and Lisbon. Here he works with fishermen from Hel and growers from Kashubia. We crystallise our own salt from bay water.',
      p3: 'The room seats 28. No loud playlist — just conversation, glass, and the sound of a knife on ceramic.',
      stats: [
        { value: '28', label: 'seats' },
        { value: '7', label: 'fish suppliers' },
        { value: '40+', label: 'mineral wines' },
      ],
      valuesTitle: 'What we stand on',
      values: [
        {
          title: 'Season, not trend',
          text: 'No fresh fish — no dish. The card stays short on purpose.',
        },
        {
          title: 'Zero noise',
          text: 'Small room, soft light, service that knows the wine — not just the table number.',
        },
        {
          title: 'Salt as craft',
          text: 'Our salt is not a packet spice — it is the mineral that finishes every plate.',
        },
      ],
    },
    reservation: {
      kicker: 'Table',
      title: 'Reservation',
      intro: 'We hold tables for two hours. Parties over six — write to us first.',
      submit: 'Send request',
      submitting: 'Sending…',
      another: 'New reservation',
      successTitle: 'Request sent',
      successText: 'We will confirm by email within a few hours. See you by the salt.',
      fields: {
        name: 'Full name',
        email: 'Email',
        phone: 'Phone',
        date: 'Date',
        time: 'Time',
        guests: 'Guests',
        notes: 'Notes (allergies, occasion)',
      },
      errors: {
        required: 'Please fill in the required fields.',
        email: 'Enter a valid email.',
        phone: 'Enter a valid phone number.',
        past: 'Choose a date from tomorrow onward.',
      },
    },
    contact: {
      kicker: 'Connect',
      title: 'Contact',
      intro: 'Questions about the menu, wine, or private dinners — write us. We usually reply the same day.',
      addressLabel: 'Address',
      address: 'Wajdeloty 18\n80-437 Gdańsk Wrzeszcz',
      phoneLabel: 'Phone',
      phone: '+48 58 700 18 40',
      emailLabel: 'Email',
      email: 'hello@solgdansk.pl',
      mapNote: '5-minute walk from SKM Wrzeszcz. Parking on Partyzantów Street.',
      formTitle: 'Write to us',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formSubmit: 'Send',
      formSending: 'Sending…',
      formSuccess: 'Message sent. We will reply soon.',
      formError: 'Please fill all fields correctly.',
    },
    cookie: {
      text: 'We use cookies to remember your language and keep the site smooth.',
      accept: 'Accept',
      decline: 'Decline',
    },
    footer: {
      tagline: 'Coastal kitchen · Gdańsk',
      rights: '© SÓL. All rights reserved.',
    },
  },
}
