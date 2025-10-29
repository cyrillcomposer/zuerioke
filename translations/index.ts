import { Language, useLanguage } from '../contexts/LanguageContext';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    angebot: string;
    buchen: string;
    testimonials: string;
    uberUns: string;
    ctaButton: string;
  };

  // Home page
  home: {
    badge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      events: string;
      songs: string;
      rating: string;
      support: string;
    };
    featuresTitle: string;
    featuresSubtitle: string;
    features: Array<{
      title: string;
      text: string;
    }>;
    highlightsTitle: string;
    occasions: string[];
    videoPlaceholder: string;
    videoComingSoon: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    ctaFooter: string;
    meta: {
      title: string;
      description: string;
    };
  };

  // Angebot page
  angebot: {
    title: string;
    subtitle: string;
    popular: string;
    packages: Array<{
      name: string;
      price: string;
      duration: string;
      features: string[];
    }>;
    selectPackage: string;
    addonsTitle: string;
    addonsSubtitle: string;
    addons: Array<{
      name: string;
      price: string;
    }>;
    faqTitle: string;
    faqs: Array<{
      q: string;
      a: string;
    }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    ctaEmail: string;
    meta: {
      title: string;
      description: string;
    };
  };

  // Buchen page
  buchen: {
    title: string;
    subtitle: string;
    package: string;
    packages: string[];
    extrasTitle: string;
    contactTitle: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    companyPlaceholder: string;
    eventDetailsTitle: string;
    date: string;
    time: string;
    eventType: string;
    eventTypePlaceholder: string;
    guestCount: string;
    guestCountPlaceholder: string;
    locationTitle: string;
    locationName: string;
    locationNamePlaceholder: string;
    address: string;
    addressPlaceholder: string;
    plz: string;
    plzPlaceholder: string;
    city: string;
    cityPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submitButton: string;
    resetButton: string;
    infoTitle: string;
    infoSteps: string[];
    meta: {
      title: string;
      description: string;
    };
  };

  // Uber Uns page
  uberUns: {
    title: string;
    subtitle: string;
    storyTitle: string;
    story: string[];
    teamTitle: string;
    team: Array<{
      name: string;
      role: string;
      text: string;
      skills: string[];
    }>;
    valuesTitle: string;
    values: Array<{
      title: string;
      text: string;
    }>;
    whyTitle: string;
    experienceTitle: string;
    experienceItems: string[];
    serviceTitle: string;
    serviceItems: string[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    meta: {
      title: string;
      description: string;
    };
  };

  // Testimonials page
  testimonials: {
    title: string;
    subtitle: string;
    ratingText: string;
    reviewCount: string;
    quotes: Array<{
      name: string;
      role: string;
      company: string;
      text: string;
    }>;
    statsTitle: string;
    stats: Array<{
      number: string;
      label: string;
    }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    meta: {
      title: string;
      description: string;
    };
  };

  // Thank You page
  thankYou: {
    title: string;
    subtitle: string;
    message1: string;
    message2: string;
    timeframe: string;
    nextStepsTitle: string;
    steps: Array<{
      text: string;
    }>;
    homeButton: string;
    packagesButton: string;
    urgentText: string;
    socialProof: string;
    meta: {
      title: string;
      description: string;
    };
  };

  // Footer
  footer: {
    description: string;
    pagesTitle: string;
    contactTitle: string;
    email: string;
    whatsapp: string;
    instagram: string;
    location: string;
    copyright: string;
    madeWith: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      home: 'Home',
      angebot: 'Angebot',
      buchen: 'Buchen',
      testimonials: 'Stimmen',
      uberUns: 'Über uns',
      ctaButton: 'Jetzt anfragen',
    },

    home: {
      badge: 'Verfügbar für Events in Zürich',
      heroTitle1: 'Mobile Karaoke',
      heroTitle2: 'Wir kommen zu dir!',
      heroDescription: 'Verwandeln Sie Ihren Event in eine unvergessliche Karaoke-Party. Wir bringen alles mit: Profi-Equipment, 100.000+ Songs und gute Stimmung - direkt zu Ihrer Location.',
      ctaPrimary: 'Jetzt Verfügbarkeit prüfen',
      ctaSecondary: 'Pakete ansehen',
      stats: {
        events: 'Events',
        songs: 'Songs',
        rating: 'Bewertung',
        support: 'Support',
      },
      featuresTitle: 'Was uns besonders macht',
      featuresSubtitle: 'Professionelle Karaoke-Unterhaltung auf höchstem Niveau',
      features: [
        {
          title: 'Mobile Karaoke',
          text: 'Wir kommen zu Ihnen - egal ob Büro, Restaurant oder private Location. Kompletter Auf- und Abbau inklusive.',
        },
        {
          title: '100.000+ Songs',
          text: 'Riesige Auswahl von aktuellen Charts bis zu zeitlosen Klassikern in allen Sprachen.',
        },
        {
          title: 'Profi-Equipment',
          text: 'Hochwertige PA-Anlage, Funkmikrofone und Grossleinwand mit Beamer für das ultimative Karaoke-Erlebnis.',
        },
      ],
      highlightsTitle: 'Perfekt für jeden',
      occasions: [
        'Firmenevents & Weihnachtsfeiern',
        'Geburtstage & Jubiläen',
        'Hochzeiten & Polterabende',
        'Private Partys & Vereinsfeste',
        'Team-Building Events',
      ],
      videoPlaceholder: 'Live Demo Video',
      videoComingSoon: 'Coming Soon',
      ctaTitle: 'Bereit für die beste Karaoke-Party deines Lebens?',
      ctaDescription: 'Sichere dir jetzt deinen Wunschtermin. Wir melden uns innerhalb von 24 Stunden bei dir.',
      ctaButton: 'Unverbindliche Anfrage stellen',
      ctaFooter: 'Keine versteckten Kosten • Transparente Preise • Zufriedenheitsgarantie',
      meta: {
        title: 'Karaoke Zürich mieten | Mobile Karaoke - Zürioke',
        description: 'Mobile Karaoke in Zürich mieten für Firmenevent, Hochzeit & Party. Wir kommen zu Ihnen! ✓ 100.000+ Songs ✓ Profi-Equipment ✓ Ab CHF 599',
      },
    },

    angebot: {
      title: 'Unsere Pakete',
      subtitle: 'Massgeschneiderte Karaoke-Erlebnisse für jeden Anlass und jedes Budget',
      popular: 'BELIEBTESTE WAHL',
      packages: [
        {
          name: 'Basic',
          price: 'CHF 599',
          duration: '2 Stunden',
          features: [
            '2 Stunden Karaoke-Party',
            '2 Funkmikrofone',
            'Professionelle PA-Anlage',
            'Monitor für Songtexte',
            '50.000+ Songs Auswahl',
            'Technischer Support',
            'Auf-/Abbau & Anfahrt inkl.',
          ],
        },
        {
          name: 'Party',
          price: 'CHF 899',
          duration: '3 Stunden',
          features: [
            '3 Stunden Karaoke-Party',
            '2 Funkmikrofone',
            'Premium PA-System',
            'Grossleinwand mit Beamer',
            '100.000+ Songs Auswahl',
            'Lichteffekte & Ambience',
            'Playlist-Vorbereitung',
            'Auf-/Abbau & Anfahrt inkl.',
          ],
        },
        {
          name: 'Premium',
          price: 'CHF 1299',
          duration: '4 Stunden',
          features: [
            '4 Stunden Entertainment',
            '2+ Funkmikrofone',
            'High-End Sound System',
            'Grossleinwand mit Beamer',
            '100.000+ Songs + Requests',
            'Profi-Lichtshow',
            'Video-Aufnahme möglich',
            'Playlist-Kuration',
            'Auf-/Abbau & Anfahrt inkl.',
          ],
        },
      ],
      selectPackage: 'Paket wählen',
      addonsTitle: 'Zusatzoptionen',
      addonsSubtitle: 'Erweitern Sie Ihr Paket mit unseren beliebten Extras',
      addons: [
        { name: 'Zusatzstunde', price: 'CHF 199' },
        { name: 'Extra Mikrofon', price: 'CHF 49' },
        { name: 'Nebelmaschine', price: 'CHF 79' },
      ],
      faqTitle: 'Häufige Fragen',
      faqs: [
        {
          q: 'Wie weit im Voraus sollte ich buchen?',
          a: 'Wir empfehlen eine Buchung mindestens 2-4 Wochen im Voraus, besonders für Wochenenden und Feiertage.',
        },
        {
          q: 'Ist die Anfahrt im Preis inbegriffen?',
          a: 'Ja, die Anfahrt innerhalb des Grossraums Zürich ist in allen Paketen inklusive.',
        },
        {
          q: 'Können spezielle Songs angefragt werden?',
          a: 'Absolut! Mit über 100.000 Songs haben wir fast alles. Spezielle Wünsche können vorab besprochen werden.',
        },
        {
          q: 'Wie viel Platz wird benötigt?',
          a: 'Für unser Basic-Setup reichen etwa 4m². Für grössere Setups mit Lichtshow empfehlen wir 10-15m².',
        },
      ],
      ctaTitle: 'Noch Fragen zu unseren Paketen?',
      ctaDescription: 'Wir beraten Sie gerne und erstellen ein massgeschneidertes Angebot für Ihren Event.',
      ctaButton: 'Jetzt anfragen',
      ctaEmail: 'E-Mail schreiben',
      meta: {
        title: 'Karaoke Zürich Preise & Pakete | Ab CHF 599',
        description: 'Karaoke mieten in Zürich: Basic, Party & Premium Pakete. Mobile Karaoke für Firmenevent, Hochzeit, Geburtstag. Transparente Preise ab CHF 599.',
      },
    },

    buchen: {
      title: 'Buchungsanfrage',
      subtitle: 'Füllen Sie das Formular aus – wir melden uns innerhalb von 24 Stunden bei Ihnen.',
      package: 'Gewünschtes Paket',
      packages: ['Basic (2h)', 'Party (3h)', 'Premium (4h)'],
      extrasTitle: 'Zusatzoptionen (optional)',
      contactTitle: 'Kontaktdaten',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      company: 'Firma (optional)',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'ihre.email@beispiel.ch',
      phonePlaceholder: '+41 79 123 45 67',
      companyPlaceholder: 'Firmenname',
      eventDetailsTitle: 'Event-Details',
      date: 'Datum',
      time: 'Uhrzeit',
      eventType: 'Art des Events',
      eventTypePlaceholder: 'z.B. Firmenevent, Geburtstag, Hochzeit...',
      guestCount: 'Anzahl Gäste (ca.)',
      guestCountPlaceholder: '50',
      locationTitle: 'Veranstaltungsort',
      locationName: 'Name der Location',
      locationNamePlaceholder: 'Restaurant, Club, Privatadresse...',
      address: 'Strasse und Hausnummer',
      addressPlaceholder: 'Musterstrasse 123',
      plz: 'PLZ',
      plzPlaceholder: '8000',
      city: 'Ort',
      cityPlaceholder: 'Zürich',
      message: 'Nachricht / Spezielle Wünsche',
      messagePlaceholder: 'Teilen Sie uns Ihre besonderen Wünsche oder Fragen mit...',
      submitButton: 'Anfrage senden',
      resetButton: 'Formular zurücksetzen',
      infoTitle: 'Was passiert nach Ihrer Anfrage?',
      infoSteps: [
        'Wir prüfen Ihre Anfrage und die Verfügbarkeit',
        'Sie erhalten innerhalb von 24 Stunden eine Rückmeldung',
        'Wir besprechen alle Details telefonisch oder per E-Mail',
        'Sie erhalten ein massgeschneidertes Angebot',
        'Nach Ihrer Bestätigung ist der Termin fix gebucht',
      ],
      meta: {
        title: 'Karaoke Zürich buchen | Anfrage & Kontakt',
        description: 'Mobile Karaoke in Zürich buchen für Ihr Event. Einfache Online-Anfrage, Antwort in 24h. Für Firmenevents, Hochzeiten & private Feiern.',
      },
    },

    uberUns: {
      title: 'Über Zürioke',
      subtitle: 'Zwei Freunde, eine Mission: Wir bringen die Bühne zu dir und machen jeden zum Star seiner eigenen Show.',
      storyTitle: 'Unsere',
      story: [
        'Was als spontane Idee an einem lauen Sommerabend in Zürich begann, ist heute zu einer der gefragtesten mobilen Karaoke-Services der Region geworden.',
        'Marcel und Cyrill, beide leidenschaftliche Musikliebhaber, erkannten schnell, dass Karaoke mehr ist als nur Singen – es ist ein Erlebnis, das Menschen verbindet, Hemmungen abbaut und unvergessliche Momente schafft.',
        'Mit dieser Vision starteten wir 2020 Zürioke. Seitdem haben wir über 500 Events begleitet und Tausende von Menschen zum Strahlen gebracht. Von intimen Geburtstagsfeiern bis zu grossen Firmenevents – jeder Auftritt ist für uns eine neue Chance, Magie zu erschaffen.',
      ],
      teamTitle: 'Das Team',
      team: [
        {
          name: 'Marcel',
          role: 'Sound Engineer & DJ',
          text: 'Technikliebhaber, Sound-Enthusiast und unser Karaoke-DJ Nr. 1. Er bringt jede Box zum Klingen und sorgt für die perfekte Stimmung.',
          skills: ['Sound Engineering', 'DJ-ing', 'Event-Technik'],
        },
        {
          name: 'Cyrill',
          role: 'Entertainment Manager',
          text: 'Musiker durch und durch – mit Gespür für Töne, Texte und Emotion. Er bringt Herz in jedes Mikrofon und lässt jeden Auftritt glänzen.',
          skills: ['Moderation', 'Musik-Kuration', 'Crowd Animation'],
        },
      ],
      valuesTitle: 'Unsere Werte',
      values: [
        {
          title: 'Leidenschaft',
          text: 'Wir lieben was wir tun und das spürt man bei jedem Event.',
        },
        {
          title: 'Qualität',
          text: 'Nur das beste Equipment und professioneller Service für unsere Kunden.',
        },
        {
          title: 'Zuverlässigkeit',
          text: 'Pünktlich, vorbereitet und immer mit einem Plan B in der Tasche.',
        },
        {
          title: 'Spass',
          text: 'Bei uns steht der Spass im Vordergrund - für uns und unsere Gäste.',
        },
      ],
      whyTitle: 'Warum',
      experienceTitle: 'Erfahrung & Expertise',
      experienceItems: [
        '500+ erfolgreiche Events',
        'Professionelles Equipment',
        'Geschultes Personal',
        'Flexible Lösungen',
      ],
      serviceTitle: 'Service & Support',
      serviceItems: [
        '24h Antwortzeit',
        'Kostenlose Beratung',
        'Transparente Preise',
        'Zufriedenheitsgarantie',
      ],
      ctaTitle: 'Bereit für deine Karaoke-Party?',
      ctaDescription: 'Lass uns gemeinsam deinen Event zu einem unvergesslichen Erlebnis machen.',
      ctaButton: 'Jetzt Kontakt aufnehmen',
      meta: {
        title: 'Mobile Karaoke Zürich Team | Über Zürioke',
        description: 'Das Team hinter Zürioke: Mobile Karaoke in Zürich seit 2020. 500+ Events, professionelles Equipment, persönlicher Service für Ihren Anlass.',
      },
    },

    testimonials: {
      title: 'Kundenstimmen',
      subtitle: 'Das sagen unsere Kunden über ihre Karaoke-Erlebnisse mit Zürioke',
      ratingText: '5.0 von 5',
      reviewCount: 'Bewertungen',
      quotes: [
        {
          name: 'Sandra M.',
          role: 'HR-Managerin',
          company: 'Tech Startup Zürich',
          text: 'Ich hätte nie gedacht, dass unsere Firmenfeier so aus dem Ruder laufen könnte – im besten Sinne! Die beste Karaoke-Nacht ever.',
        },
        {
          name: 'Jonas K.',
          role: 'Eventplaner',
          company: 'Event Solutions AG',
          text: 'Professionell, sympathisch und einfach total fun. Unsere Gäste sprechen heute noch über die spontanen Duette!',
        },
        {
          name: 'Laura & Nico',
          role: 'Hochzeitspaar',
          company: '',
          text: 'Ich war skeptisch – aber es war der absolute Hit unserer Hochzeitsfeier! Merci vielmal, Zürioke.',
        },
        {
          name: 'Remo Z.',
          role: 'Geburtstagskind',
          company: '30. Geburtstag',
          text: 'Selten so gelacht und gesungen. Technik top, Hosting charmant! Würde sofort wieder buchen.',
        },
        {
          name: 'Martina L.',
          role: 'Team Lead',
          company: 'Finance Corp',
          text: 'Zürioke hat unser Team-Event zu einem unvergesslichen Erlebnis gemacht. Die Kollegen sind richtig aus sich herausgekommen!',
        },
        {
          name: 'Thomas W.',
          role: 'Vereinspräsident',
          company: 'Sportverein Zürich',
          text: 'Top Organisation, super Stimmung und faire Preise. Unser Vereinsfest war ein voller Erfolg!',
        },
      ],
      statsTitle: 'Zahlen, die für sich sprechen',
      stats: [
        { number: '98%', label: 'Zufriedene Kunden' },
        { number: '500+', label: 'Erfolgreiche Events' },
        { number: '4.9★', label: 'Google Bewertung' },
        { number: '85%', label: 'Wiederbuchungen' },
      ],
      ctaTitle: 'Werden Sie Teil unserer Erfolgsgeschichte',
      ctaDescription: 'Lassen Sie uns gemeinsam Ihren Event zu einem unvergesslichen Erlebnis machen.',
      ctaButton: 'Jetzt Ihre Party planen',
      meta: {
        title: 'Karaoke Zürich Bewertungen | Kundenstimmen',
        description: 'Echte Bewertungen unserer Karaoke Events in Zürich. 500+ zufriedene Kunden, 5-Sterne Service für Firmenevents, Hochzeiten & Partys.',
      },
    },

    thankYou: {
      title: 'Vielen Dank',
      subtitle: 'für Ihre Anfrage!',
      message1: 'Ihre Buchungsanfrage wurde erfolgreich übermittelt.',
      message2: 'Wir haben Ihre Nachricht erhalten und werden uns innerhalb von',
      timeframe: '24 Stunden',
      nextStepsTitle: 'Was passiert als Nächstes?',
      steps: [
        { text: 'Wir prüfen Ihre Anfrage und Verfügbarkeit' },
        { text: 'Sie erhalten eine persönliche Rückmeldung' },
        { text: 'Gemeinsame Besprechung aller Details' },
        { text: "Bestätigung und let's party!" },
      ],
      homeButton: 'Zur Startseite',
      packagesButton: 'Pakete ansehen',
      urgentText: 'Bei dringenden Fragen erreichen Sie uns unter:',
      socialProof: 'zufriedene Kunden',
      meta: {
        title: 'Danke für Ihre Anfrage | Karaoke Zürich',
        description: 'Ihre Karaoke-Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
      },
    },

    footer: {
      description: 'Mobile Karaoke für unvergessliche Events. Wir kommen zu Ihnen - mit professioneller Technik und Spass garantiert im Raum Zürich.',
      pagesTitle: 'Seiten',
      contactTitle: 'Kontakt',
      email: 'Email:',
      whatsapp: 'WhatsApp:',
      instagram: 'Instagram:',
      location: 'Standort: Zürich',
      copyright: 'Zürioke. Alle Rechte vorbehalten.',
      madeWith: 'Made with',
    },
  },

  en: {
    nav: {
      home: 'Home',
      angebot: 'Packages',
      buchen: 'Book',
      testimonials: 'Reviews',
      uberUns: 'About Us',
      ctaButton: 'Request now',
    },

    home: {
      badge: 'Available for events in Zurich',
      heroTitle1: 'Mobile Karaoke',
      heroTitle2: "We come to you!",
      heroDescription: 'Transform your event into an unforgettable karaoke party. We bring everything: professional equipment, 100,000+ songs and a great atmosphere - directly to your location.',
      ctaPrimary: 'Check availability now',
      ctaSecondary: 'View packages',
      stats: {
        events: 'Events',
        songs: 'Songs',
        rating: 'Rating',
        support: 'Support',
      },
      featuresTitle: 'What makes us special',
      featuresSubtitle: 'Professional karaoke entertainment at the highest level',
      features: [
        {
          title: 'Mobile Karaoke',
          text: 'We come to you - whether office, restaurant or private location. Complete setup and teardown included.',
        },
        {
          title: '100,000+ Songs',
          text: 'Huge selection from current charts to timeless classics in all languages.',
        },
        {
          title: 'Professional Equipment',
          text: 'High-quality PA system, wireless microphones and large screen with projector for the ultimate karaoke experience.',
        },
      ],
      highlightsTitle: 'Perfect for every',
      occasions: [
        'Corporate events & Christmas parties',
        'Birthdays & anniversaries',
        'Weddings & bachelor parties',
        'Private parties & club events',
        'Team-building events',
      ],
      videoPlaceholder: 'Live Demo Video',
      videoComingSoon: 'Coming Soon',
      ctaTitle: 'Ready for the best karaoke party of your life?',
      ctaDescription: 'Secure your desired date now. We will get back to you within 24 hours.',
      ctaButton: 'Submit inquiry',
      ctaFooter: 'No hidden costs • Transparent prices • Satisfaction guarantee',
      meta: {
        title: 'Rent Karaoke Zurich | Mobile Karaoke - Zürioke',
        description: 'Rent mobile karaoke in Zurich for corporate events, weddings & parties. We come to you! ✓ 100,000+ songs ✓ Professional equipment ✓ From CHF 599',
      },
    },

    angebot: {
      title: 'Our Packages',
      subtitle: 'Tailored karaoke experiences for every occasion and budget',
      popular: 'MOST POPULAR',
      packages: [
        {
          name: 'Basic',
          price: 'CHF 599',
          duration: '2 hours',
          features: [
            '2 hours karaoke party',
            '2 wireless microphones',
            'Professional PA system',
            'Monitor for lyrics',
            '50,000+ song selection',
            'Technical support',
            'Setup/teardown & travel incl.',
          ],
        },
        {
          name: 'Party',
          price: 'CHF 899',
          duration: '3 hours',
          features: [
            '3 hours karaoke party',
            '2 wireless microphones',
            'Premium PA system',
            'Large screen with projector',
            '100,000+ song selection',
            'Light effects & ambience',
            'Playlist preparation',
            'Setup/teardown & travel incl.',
          ],
        },
        {
          name: 'Premium',
          price: 'CHF 1299',
          duration: '4 hours',
          features: [
            '4 hours entertainment',
            '2+ wireless microphones',
            'High-end sound system',
            'Large screen with projector',
            '100,000+ songs + requests',
            'Professional light show',
            'Video recording possible',
            'Playlist curation',
            'Setup/teardown & travel incl.',
          ],
        },
      ],
      selectPackage: 'Select package',
      addonsTitle: 'Add-on Options',
      addonsSubtitle: 'Enhance your package with our popular extras',
      addons: [
        { name: 'Extra hour', price: 'CHF 199' },
        { name: 'Extra microphone', price: 'CHF 49' },
        { name: 'Fog machine', price: 'CHF 79' },
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'How far in advance should I book?',
          a: 'We recommend booking at least 2-4 weeks in advance, especially for weekends and holidays.',
        },
        {
          q: 'Is travel included in the price?',
          a: 'Yes, travel within the greater Zurich area is included in all packages.',
        },
        {
          q: 'Can special songs be requested?',
          a: 'Absolutely! With over 100,000 songs, we have almost everything. Special requests can be discussed in advance.',
        },
        {
          q: 'How much space is needed?',
          a: 'For our basic setup, about 4m² is sufficient. For larger setups with light show, we recommend 10-15m².',
        },
      ],
      ctaTitle: 'Questions about our packages?',
      ctaDescription: 'We are happy to advise you and create a customized offer for your event.',
      ctaButton: 'Inquire now',
      ctaEmail: 'Send email',
      meta: {
        title: 'Karaoke Zurich Prices & Packages | From CHF 599',
        description: 'Rent karaoke in Zurich: Basic, Party & Premium packages. Mobile karaoke for corporate events, weddings, birthdays. Transparent prices from CHF 599.',
      },
    },

    buchen: {
      title: 'Booking Request',
      subtitle: 'Fill out the form – we will contact you within 24 hours.',
      package: 'Desired package',
      packages: ['Basic (2h)', 'Party (3h)', 'Premium (4h)'],
      extrasTitle: 'Additional options (optional)',
      contactTitle: 'Contact information',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company (optional)',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your.email@example.com',
      phonePlaceholder: '+41 79 123 45 67',
      companyPlaceholder: 'Company name',
      eventDetailsTitle: 'Event details',
      date: 'Date',
      time: 'Time',
      eventType: 'Type of event',
      eventTypePlaceholder: 'e.g. Corporate event, birthday, wedding...',
      guestCount: 'Number of guests (approx.)',
      guestCountPlaceholder: '50',
      locationTitle: 'Event venue',
      locationName: 'Name of location',
      locationNamePlaceholder: 'Restaurant, club, private address...',
      address: 'Street and number',
      addressPlaceholder: 'Sample Street 123',
      plz: 'ZIP code',
      plzPlaceholder: '8000',
      city: 'City',
      cityPlaceholder: 'Zurich',
      message: 'Message / Special requests',
      messagePlaceholder: 'Share your special requests or questions with us...',
      submitButton: 'Send request',
      resetButton: 'Reset form',
      infoTitle: 'What happens after your inquiry?',
      infoSteps: [
        'We check your inquiry and availability',
        'You will receive a response within 24 hours',
        'We discuss all details by phone or email',
        'You receive a customized offer',
        'After your confirmation, the date is firmly booked',
      ],
      meta: {
        title: 'Book Karaoke Zurich | Inquiry & Contact',
        description: 'Book mobile karaoke in Zurich for your event. Simple online inquiry, response in 24h. For corporate events, weddings & private celebrations.',
      },
    },

    uberUns: {
      title: 'About Zürioke',
      subtitle: 'Two friends, one mission: We bring the stage to you and make everyone the star of their own show.',
      storyTitle: 'Our',
      story: [
        'What started as a spontaneous idea on a mild summer evening in Zurich has become one of the most sought-after mobile karaoke services in the region.',
        'Marcel and Cyrill, both passionate music lovers, quickly realized that karaoke is more than just singing – it is an experience that connects people, breaks down inhibitions and creates unforgettable moments.',
        "With this vision, we started Zürioke in 2020. Since then, we have accompanied over 500 events and made thousands of people shine. From intimate birthday parties to large corporate events – every performance is a new opportunity for us to create magic.",
      ],
      teamTitle: 'The Team',
      team: [
        {
          name: 'Marcel',
          role: 'Sound Engineer & DJ',
          text: 'Tech enthusiast, sound lover and our karaoke DJ No. 1. He makes every speaker sing and ensures the perfect atmosphere.',
          skills: ['Sound engineering', 'DJing', 'Event technology'],
        },
        {
          name: 'Cyrill',
          role: 'Entertainment Manager',
          text: 'Musician through and through – with a feel for sounds, lyrics and emotion. He brings heart to every microphone and makes every performance shine.',
          skills: ['Hosting', 'Music curation', 'Crowd animation'],
        },
      ],
      valuesTitle: 'Our Values',
      values: [
        {
          title: 'Passion',
          text: 'We love what we do and you can feel it at every event.',
        },
        {
          title: 'Quality',
          text: 'Only the best equipment and professional service for our customers.',
        },
        {
          title: 'Reliability',
          text: 'On time, prepared and always with a plan B in our pocket.',
        },
        {
          title: 'Fun',
          text: 'For us, fun comes first - for us and our guests.',
        },
      ],
      whyTitle: 'Why',
      experienceTitle: 'Experience & Expertise',
      experienceItems: [
        '500+ successful events',
        'Professional equipment',
        'Trained staff',
        'Flexible solutions',
      ],
      serviceTitle: 'Service & Support',
      serviceItems: [
        '24h response time',
        'Free consultation',
        'Transparent prices',
        'Satisfaction guarantee',
      ],
      ctaTitle: 'Ready for your karaoke party?',
      ctaDescription: "Let's make your event an unforgettable experience together.",
      ctaButton: 'Contact us now',
      meta: {
        title: 'Mobile Karaoke Zurich Team | About Zürioke',
        description: 'The team behind Zürioke: Mobile karaoke in Zurich since 2020. 500+ events, professional equipment, personal service for your occasion.',
      },
    },

    testimonials: {
      title: 'Customer Reviews',
      subtitle: 'What our customers say about their karaoke experiences with Zürioke',
      ratingText: '5.0 out of 5',
      reviewCount: 'reviews',
      quotes: [
        {
          name: 'Sandra M.',
          role: 'HR Manager',
          company: 'Tech Startup Zurich',
          text: 'I never thought our company party could get so out of hand – in the best way! The best karaoke night ever.',
        },
        {
          name: 'Jonas K.',
          role: 'Event Planner',
          company: 'Event Solutions AG',
          text: 'Professional, friendly and just totally fun. Our guests still talk about the spontaneous duets!',
        },
        {
          name: 'Laura & Nico',
          role: 'Wedding couple',
          company: '',
          text: 'I was skeptical – but it was the absolute hit of our wedding! Thank you so much, Zürioke.',
        },
        {
          name: 'Remo Z.',
          role: 'Birthday boy',
          company: '30th birthday',
          text: 'Rarely laughed and sung so much. Great technology, charming hosting! Would book again immediately.',
        },
        {
          name: 'Martina L.',
          role: 'Team Lead',
          company: 'Finance Corp',
          text: 'Zürioke made our team event an unforgettable experience. The colleagues really came out of their shells!',
        },
        {
          name: 'Thomas W.',
          role: 'Club President',
          company: 'Sports Club Zurich',
          text: 'Top organization, great atmosphere and fair prices. Our club event was a complete success!',
        },
      ],
      statsTitle: 'Numbers that speak for themselves',
      stats: [
        { number: '98%', label: 'Satisfied customers' },
        { number: '500+', label: 'Successful events' },
        { number: '4.9★', label: 'Google rating' },
        { number: '85%', label: 'Rebookings' },
      ],
      ctaTitle: 'Become part of our success story',
      ctaDescription: "Let's make your event an unforgettable experience together.",
      ctaButton: 'Plan your party now',
      meta: {
        title: 'Karaoke Zurich Reviews | Customer Testimonials',
        description: 'Real reviews of our karaoke events in Zurich. 500+ satisfied customers, 5-star service for corporate events, weddings & parties.',
      },
    },

    thankYou: {
      title: 'Thank You',
      subtitle: 'for your inquiry!',
      message1: 'Your booking request has been successfully submitted.',
      message2: 'We have received your message and will contact you within',
      timeframe: '24 hours',
      nextStepsTitle: "What's next?",
      steps: [
        { text: 'We check your inquiry and availability' },
        { text: 'You will receive a personal response' },
        { text: 'Joint discussion of all details' },
        { text: "Confirmation and let's party!" },
      ],
      homeButton: 'Go to home',
      packagesButton: 'View packages',
      urgentText: 'For urgent questions, you can reach us at:',
      socialProof: 'satisfied customers',
      meta: {
        title: 'Thank you for your inquiry | Karaoke Zurich',
        description: 'Your karaoke inquiry has been successfully submitted. We will contact you within 24 hours.',
      },
    },

    footer: {
      description: 'Mobile karaoke for unforgettable events. We come to you - with professional technology and guaranteed fun in the Zurich area.',
      pagesTitle: 'Pages',
      contactTitle: 'Contact',
      email: 'Email:',
      whatsapp: 'WhatsApp:',
      instagram: 'Instagram:',
      location: 'Location: Zurich',
      copyright: 'Zürioke. All rights reserved.',
      madeWith: 'Made with',
    },
  },
};

// Re-export the context hook for convenience
export { useLanguage } from '../contexts/LanguageContext';

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}
