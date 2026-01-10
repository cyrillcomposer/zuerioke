import { Language, useLanguage } from '../contexts/LanguageContext';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    angebot: string;
    angebotDropdown: {
      overview: string;
      birthdays: string;
      corporate: string;
      weddings: string;
      bachelor: string;
      clubs: string;
    };
    buchen: string;
    testimonials: string;
    empfehlungen: string;
    uberUns: string;
    ctaButton: string;
  };

  // Home page
  home: {
    badge: string;
    promoStamp?: string;
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
    promoBanner?: string;
    savingsText?: string;
    packages: Array<{
      name: string;
      price: string;
      originalPrice?: string;
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

  // Recommendations page
  empfehlungen: {
    title: string;
    subtitle: string;
    downloadPdf: string;
    categories: {
      classics: string;
      dance: string;
      swissGerman: string;
      latin: string;
      techno: string;
      rock: string;
      allTimeHits: string;
      pop: string;
      sixties: string;
      nineties: string;
      italianFrench: string;
      christmas: string;
    };
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

  // Event Pages
  eventPages: {
    birthdays: EventPageContent;
    corporate: EventPageContent;
    weddings: EventPageContent;
    bachelor: EventPageContent;
    clubs: EventPageContent;
  };
}

interface EventPageContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  description: {
    intro: string;
    paragraph1: string;
    paragraph2: string;
  };
  imagePlaceholder: string;
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  examples: {
    title: string;
    items: string[];
  };
  faqs: {
    title: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      home: 'Home',
      angebot: 'Angebot',
      angebotDropdown: {
        overview: 'Alle Pakete',
        birthdays: 'Geburtstagsfeiern',
        corporate: 'Firmenevents & Teambuilding',
        weddings: 'Hochzeiten & Jubiläen',
        bachelor: 'JGA & Polterabende',
        clubs: 'Vereinsanlässe & Dorffeste',
      },
      buchen: 'Buchen',
      testimonials: 'Stimmen',
      empfehlungen: 'Empfehlungen',
      uberUns: 'Über uns',
      ctaButton: 'Jetzt anfragen',
    },

    home: {
      badge: 'Verfügbar für Events in Zürich',
      promoStamp: 'Neujahrs-Promotion: Pakete ab CHF 479',
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
      promoBanner: '🎉 20% Rabatt\nJetzt zuschlagen & sparen!',
      savingsText: 'Spare',
      packages: [
        {
          name: 'Basic',
          price: 'CHF 479',
          originalPrice: 'CHF 599',
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
          price: 'CHF 719',
          originalPrice: 'CHF 899',
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
          price: 'CHF 1039',
          originalPrice: 'CHF 1299',
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

    empfehlungen: {
      title: 'Song Empfehlungen',
      subtitle: 'Unsere Top-Picks für jede Stimmung und jeden Anlass – von Klassikern bis zu den neuesten Hits.',
      downloadPdf: 'PDF herunterladen',
      categories: {
        classics: 'Zürioke - Classics',
        dance: 'Zürioke - Dance',
        swissGerman: 'Zürioke - Swiss / German',
        latin: 'Zürioke - Latin',
        techno: 'Zürioke - Techno',
        rock: 'Zürioke - Rock',
        allTimeHits: 'Zürioke - All Time Karaoke Hits',
        pop: 'Zürioke - Pop',
        sixties: 'Zürioke - Best of the 60s 70s',
        nineties: 'Zürioke - Best of the 90s',
        italianFrench: 'Zürioke - Italian / French',
        christmas: 'Zürioke - Christmas / Halloween',
      },
      meta: {
        title: 'Song Empfehlungen | Karaoke Zürich',
        description: 'Entdecke unsere handverlesenen Karaoke-Song-Empfehlungen – Klassiker, Dance-Hits, Swiss Classics und mehr für dein Event.',
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

    eventPages: {
      birthdays: {
        meta: {
          title: 'Karaoke für Geburtstagsfeiern | Zürioke',
          description: 'Mobile Karaoke für unvergessliche Geburtstagsfeiern in Zürich. Professionelle Unterhaltung für alle Altersgruppen. Jetzt buchen!',
          ogTitle: 'Karaoke Geburtstag Zürich | Mobile Karaoke Party',
          ogDescription: 'Verwandeln Sie Ihre Geburtstagsfeier in ein unvergessliches Erlebnis mit mobiler Karaoke von Zürioke.',
        },
        hero: {
          title: 'Karaoke für unvergessliche Geburtstagsfeiern',
          subtitle: 'Machen Sie Ihren Geburtstag zu einem unvergesslichen Event mit professioneller mobiler Karaoke',
        },
        description: {
          intro: 'Ob runder Geburtstag, Überraschungsparty oder gemütliche Feier',
          paragraph1: 'Ein Geburtstag ist ein besonderer Anlass – und verdient besondere Unterhaltung. Mit Zürioke verwandeln Sie Ihre Geburtstagsfeier in ein unvergessliches Karaoke-Erlebnis. Wir kommen zu Ihnen nach Hause, in Ihr Restaurant oder an Ihre Wunschlocation und bringen alles mit: professionelles Equipment, über 100.000 Songs und jede Menge gute Laune.',
          paragraph2: 'Unsere mobile Karaoke-Anlage ist perfekt für Geburtstagsfeiern aller Art – von intimen Zusammenkünften bis zu grossen Partys. Mit unserem Rundum-Service müssen Sie sich um nichts kümmern: Wir bauen auf, moderieren auf Wunsch und sorgen dafür, dass jeder Gast zum Star des Abends wird. Egal ob Sie 30, 40, 50 oder 60 werden – Karaoke bringt alle Generationen zusammen und schafft Erinnerungen, die bleiben.',
        },
        imagePlaceholder: 'Bild folgt',
        benefits: {
          title: 'Warum Karaoke perfekt für Geburtstage ist',
          items: [
            {
              title: 'Sorgenfreie Unterhaltung',
              description: 'Wir kümmern uns um die gesamte technische Ausstattung und den Ablauf – Sie geniessen Ihre Party.',
            },
            {
              title: 'Für alle Altersgruppen',
              description: 'Von aktuellen Chart-Hits bis zu zeitlosen Klassikern – unsere Song-Auswahl begeistert Jung und Alt.',
            },
            {
              title: 'Interaktive Moderation',
              description: 'Unser Host bricht das Eis und motiviert auch schüchterne Gäste zum Mitsingen.',
            },
            {
              title: 'Professionelles Equipment',
              description: 'Hochwertige Mikrofone, kristallklarer Sound und optional eine Grossleinwand für das ultimative Erlebnis.',
            },
            {
              title: 'Individuelle Playlists',
              description: 'Teilen Sie uns Ihre Lieblingssongs mit – wir stellen sicher, dass sie verfügbar sind.',
            },
            {
              title: 'Unvergessliche Momente',
              description: 'Karaoke schafft gemeinsame Erlebnisse und Erinnerungen, über die noch Jahre später gelacht wird.',
            },
          ],
        },
        examples: {
          title: 'Perfekt für diese Geburtstagsfeiern',
          items: [
            '30., 40., 50. Geburtstag – Meilenstein-Feiern',
            'Überraschungspartys',
            'Kinder- und Jugendgeburtstage (ab 12 Jahren)',
            'Garten- und Outdoor-Feiern',
            'Restaurant-Events',
            'Private Feiern zu Hause',
          ],
        },
        faqs: {
          title: 'Häufige Fragen',
          items: [
            {
              q: 'Können wir im Voraus Songs auswählen?',
              a: 'Absolut! Sie können uns vorab eine Liste mit Lieblingssongs schicken. Wir stellen sicher, dass diese verfügbar sind und bereiten eine entsprechende Playlist vor.',
            },
            {
              q: 'Ist das auch für Kindergeburtstage geeignet?',
              a: 'Ja, wir bieten Karaoke für Kindergeburtstage ab 12 Jahren an. Wir haben eine grosse Auswahl an altersgerechten Songs und können die Moderation entsprechend anpassen.',
            },
            {
              q: 'Wie viel Platz benötigt ihr?',
              a: 'Für unser Basic-Setup reichen etwa 4m². Wenn Sie eine Grossleinwand und Lichteffekte möchten, empfehlen wir 10-15m². Wir passen uns flexibel an Ihre Räumlichkeiten an.',
            },
            {
              q: 'Bietet ihr auch Moderation an?',
              a: 'Ja! Unser Host führt charmant durch den Abend, motiviert Gäste zum Mitsingen und sorgt für eine lockere Atmosphäre. Auf Wunsch halten wir uns aber auch im Hintergrund.',
            },
          ],
        },
        cta: {
          title: 'Bereit für die beste Geburtstagsparty?',
          description: 'Buchen Sie jetzt Ihre mobile Karaoke-Anlage und machen Sie Ihren Geburtstag unvergesslich.',
          buttonText: 'Jetzt anfragen',
          buttonLink: '/buchen',
        },
      },

      corporate: {
        meta: {
          title: 'Karaoke für Firmenevents & Teambuilding | Zürioke',
          description: 'Mobile Karaoke für Firmenevents, Team-Building und Weihnachtsfeiern in Zürich. Stärken Sie Ihr Team auf unterhaltsame Weise!',
          ogTitle: 'Firmen Karaoke Zürich | Team Building Event',
          ogDescription: 'Unvergessliche Firmenevents mit mobiler Karaoke. Stärken Sie den Teamgeist und bauen Sie Hierarchien spielerisch ab.',
        },
        hero: {
          title: 'Karaoke für Firmenevents & Teambuilding',
          subtitle: 'Stärken Sie Ihr Team mit der perfekten Mischung aus Spass und Zusammenhalt',
        },
        description: {
          intro: 'Team-Building, das wirklich verbindet',
          paragraph1: 'Vergessen Sie langweilige Teambuilding-Events! Karaoke ist die perfekte Aktivität, um Ihr Team auf eine unterhaltsame und ungezwungene Weise zusammenzubringen. Wenn der Chef und die Praktikantin gemeinsam "Bohemian Rhapsody" singen, fallen Hierarchien ganz von selbst – und genau das macht Karaoke so wertvoll für Firmenevents.',
          paragraph2: 'Ob Weihnachtsfeier, Teamausflug, Produktlancierung oder Firmenjubiläum – unsere mobile Karaoke-Anlage sorgt für Unterhaltung, die Ihre Mitarbeitenden noch lange in Erinnerung behalten. Wir bringen alles mit, was Sie brauchen, und passen uns flexibel an Ihre Räumlichkeiten an – ob im Büro, in einem gemieteten Raum oder an einem externen Event-Ort. Das Ergebnis: Ein unvergesslicher Abend, gestärkte Beziehungen und jede Menge neue Insider-Jokes fürs Büro.',
        },
        imagePlaceholder: 'Bild folgt',
        benefits: {
          title: 'Vorteile für Ihr Unternehmen',
          items: [
            {
              title: 'Natürliches Team-Bonding',
              description: 'Gemeinsames Lachen und Singen stärkt den Zusammenhalt nachhaltiger als klassische Team-Übungen.',
            },
            {
              title: 'Hierarchien abbauen',
              description: 'Auf der Karaoke-Bühne sind alle gleich – das schafft neue Verbindungen über Abteilungen hinweg.',
            },
            {
              title: 'Stressabbau & Morale-Boost',
              description: 'Eine Karaoke-Session ist die perfekte Gelegenheit, den Arbeitsalltag hinter sich zu lassen und gemeinsam Energie zu tanken.',
            },
            {
              title: 'Unvergessliches Kultur-Erlebnis',
              description: 'Schaffen Sie positive Erinnerungen, die Ihre Unternehmenskultur nachhaltig prägen.',
            },
            {
              title: 'Flexibles Setup',
              description: 'Wir bauen direkt in Ihrem Büro auf oder begleiten Sie zu einer externen Location – ganz nach Ihren Wünschen.',
            },
            {
              title: 'Anpassbar an Ihre Kultur',
              description: 'Von leger bis professionell – wir passen Moderation und Songauswahl an Ihre Unternehmenskultur an.',
            },
          ],
        },
        examples: {
          title: 'Perfekt für diese Firmenevents',
          items: [
            'Weihnachtsfeiern & Jahresabschluss-Events',
            'Team-Building & Offsite-Events',
            'Produktlancierungen & Meilenstein-Feiern',
            'Onboarding-Events für neue Mitarbeitende',
            'Abteilungs-Feiern & After-Work-Partys',
            'Firmenjubiläen',
          ],
        },
        faqs: {
          title: 'Häufige Fragen',
          items: [
            {
              q: 'Könnt ihr direkt im Büro aufbauen?',
              a: 'Ja, kein Problem! Wir kommen zu Ihnen ins Büro und bauen unser Equipment in Ihrem Sitzungsraum, in der Cafeteria oder einem anderen geeigneten Raum auf. Wir brauchen lediglich eine Steckdose und etwas Platz.',
            },
            {
              q: 'Wie motivieren wir schüchterne Mitarbeitende?',
              a: 'Unser erfahrener Host weiss genau, wie man eine lockere Atmosphäre schafft. Niemand wird gezwungen – aber mit der richtigen Moderation trauen sich auch schüchterne Kolleg:innen auf die "Bühne". Duette sind eine tolle Einstiegshilfe!',
            },
            {
              q: 'Können wir Firmen-Songs oder spezielle Playlists integrieren?',
              a: 'Auf jeden Fall! Sie können uns vorab Wunschsongs mitteilen. Ob aktuelle Hits, Firmen-Hymne oder ein Mix aus verschiedenen Genres – wir stellen sicher, dass die Playlist zu Ihrem Team passt.',
            },
            {
              q: 'Was ist die ideale Gruppengrösse?',
              a: 'Karaoke funktioniert für Teams ab 10 Personen bis hin zu grossen Events mit 100+ Teilnehmenden. Wir passen Equipment und Moderation an die Gruppengrösse an.',
            },
          ],
        },
        cta: {
          title: 'Bereit für ein unvergessliches Firmenevent?',
          description: 'Kontaktieren Sie uns für eine unverbindliche Beratung und ein massgeschneidertes Angebot für Ihr Team.',
          buttonText: 'Jetzt Offerte anfragen',
          buttonLink: '/buchen',
        },
      },

      weddings: {
        meta: {
          title: 'Karaoke für Hochzeiten & Jubiläen | Zürioke',
          description: 'Elegante mobile Karaoke für Hochzeiten und Hochzeitstage in Zürich. Einzigartige Unterhaltung für Ihre Feier!',
          ogTitle: 'Hochzeit Karaoke Zürich | Elegante Unterhaltung',
          ogDescription: 'Machen Sie Ihre Hochzeit oder Ihr Jubiläum unvergesslich mit stilvoller Karaoke-Unterhaltung von Zürioke.',
        },
        hero: {
          title: 'Karaoke für elegante Hochzeiten & Jubiläen',
          subtitle: 'Einzigartige Unterhaltung, die Ihre Gäste begeistert und Generationen verbindet',
        },
        description: {
          intro: 'Stilvolle Unterhaltung für den schönsten Tag',
          paragraph1: 'Eine Hochzeit ist ein Tag voller Emotionen – und was könnte emotionaler sein als Musik? Mit Zürioke bringen Sie eine einzigartige und elegante Form der Unterhaltung auf Ihre Hochzeitsfeier. Unsere mobile Karaoke-Anlage fügt sich dezent in Ihre Feier ein und wird zum Highlight, das Ihre Gäste noch lange in Erinnerung behalten werden.',
          paragraph2: 'Ob romantische Duette des Brautpaars, berührende Ständchen von Familienmitgliedern oder ausgelassene Gruppenperformances der Trauzeugen – Karaoke schafft magische Momente. Wir sorgen für ein stilvolles Setup, das zu Ihrer Hochzeit passt, und eine Songauswahl, die von romantischen Balladen bis zu Partyhits alles abdeckt. Karaoke bricht das Eis zwischen den Familien und sorgt dafür, dass sich alle Generationen gemeinsam amüsieren.',
        },
        imagePlaceholder: 'Bild folgt',
        benefits: {
          title: 'Warum Karaoke perfekt für Hochzeiten ist',
          items: [
            {
              title: 'Einzigartige Unterhaltung',
              description: 'Überraschen Sie Ihre Gäste mit etwas anderem als der klassischen Band oder DJ – mit interaktivem Entertainment.',
            },
            {
              title: 'Verbindet Familien',
              description: 'Karaoke bricht das Eis zwischen den Familien und schafft gemeinsame Erlebnisse von Anfang an.',
            },
            {
              title: 'Für alle Generationen',
              description: 'Von Grosseltern bis Enkelkindern – unsere Song-Auswahl spricht alle Altersgruppen an.',
            },
            {
              title: 'Romantische Duett-Momente',
              description: 'Das Brautpaar kann gemeinsam ein romantisches Lied singen – ein unvergesslicher Moment für alle Anwesenden.',
            },
            {
              title: 'Elegantes Setup',
              description: 'Wir passen unser Equipment an das Ambiente Ihrer Hochzeit an – stilvoll und professionell, nie kitschig.',
            },
            {
              title: 'Unvergessliche Erinnerungen',
              description: 'Videos von Karaoke-Performances gehören zu den schönsten Hochzeitserinnerungen, die Sie immer wieder ansehen werden.',
            },
          ],
        },
        examples: {
          title: 'Perfekt für diese Anlässe',
          items: [
            'Hochzeitsempfänge & Apéros',
            '25. & 50. Hochzeitstage (Silber- & Goldhochzeit)',
            'Verlobungsfeiern',
            'After-Wedding-Partys',
            'Polterabende & JGA (siehe eigene Seite)',
            'Hochzeits-Brunch am nächsten Tag',
          ],
        },
        faqs: {
          title: 'Häufige Fragen',
          items: [
            {
              q: 'Sieht das elegant genug aus für eine Hochzeit?',
              a: 'Absolut! Wir passen unser Setup an das Ambiente Ihrer Hochzeit an. Unser Equipment ist hochwertig und dezent gestaltet – keine bunten Lichter oder billig wirkende Effekte, wenn Sie es nicht wünschen. Wir haben Erfahrung mit eleganten Events.',
            },
            {
              q: 'Können wir eine stilvolle Songliste zusammenstellen?',
              a: 'Ja, Sie haben die volle Kontrolle über die Songauswahl. Wir können eine kuratierte Playlist erstellen mit romantischen Balladen, Klassikern und zeitlosen Hits – oder Sie geben uns Ihre Wunschsongs vor.',
            },
            {
              q: 'Wann während der Feier ist der beste Zeitpunkt?',
              a: 'Karaoke funktioniert am besten nach dem Essen, wenn die Stimmung gelöst ist. Viele Paare planen 2-3 Stunden Karaoke ein, nachdem die formellen Teile (Reden, Torte) vorbei sind. Wir beraten Sie gerne individuell.',
            },
            {
              q: 'Können Paare romantische Duette singen?',
              a: 'Das ist einer der schönsten Momente! Viele Brautpaare singen gemeinsam ein Lieblingslied – das ist emotional, berührend und oft der Höhepunkt des Abends.',
            },
          ],
        },
        cta: {
          title: 'Machen Sie Ihre Hochzeit unvergesslich',
          description: 'Kontaktieren Sie uns für eine persönliche Beratung und ein Angebot für Ihre Hochzeitsfeier.',
          buttonText: 'Jetzt Hochzeit planen',
          buttonLink: '/buchen',
        },
      },

      bachelor: {
        meta: {
          title: 'Karaoke für JGA & Polterabende | Zürioke',
          description: 'Mobile Karaoke für epische Junggesellen- und Junggesellinnenabschiede in Zürich. Unvergessliche Pre-Wedding-Partys!',
          ogTitle: 'JGA Karaoke Zürich | Polterabend mit Spassgarantie',
          ogDescription: 'Feiern Sie Ihren Junggesellenabschied mit mobiler Karaoke – unvergesslich, lustig und perfekt für Gruppen!',
        },
        hero: {
          title: 'Karaoke für epische JGA & Polterabende',
          subtitle: 'Der ultimative Soundtrack für Ihren letzten Tag in Freiheit',
        },
        description: {
          intro: 'Unvergessliche Pre-Wedding-Partys',
          paragraph1: 'Ein Junggesellenabschied (JGA) oder Polterabend soll legendär sein – und was ist legendärer als eine Karaoke-Session mit Ihren besten Freunden? Mit Zürioke bringen Sie die Party direkt zu Ihnen: ins Hotel, ins Airbnb, in die Bar oder an jeden anderen Ort Ihrer Wahl. Keine Pub-Crawls, keine überfüllten Karaoke-Bars – nur Sie, Ihre Crew und die besten Songs.',
          paragraph2: 'Karaoke ist perfekt für JGA-Gruppen, weil es alle zusammenbringt: Die schüchternen Freunde werden motiviert, die Aufgedrehten können glänzen, und am Ende habt ihr alle gemeinsam gelacht, gesungen und unvergessliche Momente geschaffen. Wir bringen nicht nur das Equipment, sondern auf Wunsch auch Challenge-Songs, Party-Hits und peinliche Duett-Klassiker mit – perfekt für einen Abend, über den noch Jahre später gesprochen wird.',
        },
        imagePlaceholder: 'Bild folgt',
        benefits: {
          title: 'Warum Karaoke perfekt für JGA ist',
          items: [
            {
              title: 'Unvergessliche Gruppen-Aktivität',
              description: 'Karaoke ist interaktiv, lustig und perfekt für Gruppen – keine langweiligen Wartezeiten, alle sind dabei.',
            },
            {
              title: 'Insider-Jokes fürs Leben',
              description: 'Die peinlichsten Performances werden zu den besten Erinnerungen und Insider-Witzen für die kommenden Jahre.',
            },
            {
              title: 'Keine Location-Wechsel',
              description: 'Wir kommen zu Ihnen – ob Hotel, Airbnb oder private Location. Kein Stress mit Reservierungen oder Wartezeiten.',
            },
            {
              title: 'Sichere Umgebung',
              description: 'Feiert in eurer privaten Bubble – keine fremden Gäste, keine Peinlichkeiten vor Unbekannten.',
            },
            {
              title: 'Video-Aufnahmen möglich',
              description: 'Haltet die lustigsten Momente auf Video fest – perfekt für die Hochzeitsfeier oder einfach als Erinnerung!',
            },
          ],
        },
        examples: {
          title: 'Perfekt für diese Events',
          items: [
            'Junggesellenabschiede (Männer)',
            'Junggesellinnenabschiede (Frauen)',
            'Gemeinsame Pre-Wedding-Partys (Braut & Bräutigam)',
            'Hotel- & Airbnb-Feiern',
            'Bar- & Restaurant-Events',
            'After-Polterabend-Partys',
          ],
        },
        faqs: {
          title: 'Häufige Fragen',
          items: [
            {
              q: 'Können wir die peinlichsten Performances aufnehmen?',
              a: 'Absolut! Wir ermutigen sogar dazu. Viele JGA-Gruppen erstellen Videos, die sie später bei der Hochzeit zeigen – mit unserem Equipment könnt ihr alles festhalten.',
            },
            {
              q: 'Was sind die besten Challenge-Songs für JGA?',
              a: 'Wir haben eine spezielle JGA-Playlist mit Challenge-Songs wie "I Will Survive", "It\'s Raining Men", "Wannabe" (Spice Girls) und vielen mehr. Wir geben euch gerne Tipps für epische Gruppen-Performances!',
            },
            {
              q: 'Ist das laut genug für richtige Party-Stimmung?',
              a: 'Oh ja! Unsere PA-Anlage sorgt für satten Sound und Party-Atmosphäre. Wenn ihr es richtig krachen lassen wollt, empfehlen wir unser Party- oder Premium-Paket mit Lichteffekten.',
            },
          ],
        },
        cta: {
          title: 'Bereit für den besten JGA ever?',
          description: 'Buchen Sie jetzt und machen Sie Ihren Junggesellenabschied unvergesslich!',
          buttonText: 'Jetzt JGA buchen',
          buttonLink: '/buchen',
        },
      },

      clubs: {
        meta: {
          title: 'Karaoke für Vereinsanlässe & Dorffeste | Zürioke',
          description: 'Mobile Karaoke für Vereinsanlässe, Dorffeste und Community-Events in Zürich. Für alle Generationen!',
          ogTitle: 'Verein Karaoke Zürich | Dorffest Unterhaltung',
          ogDescription: 'Bringen Sie Ihre Community zusammen mit mobiler Karaoke für Vereinsanlässe, Dorffeste und Nachbarschaftsfeiern.',
        },
        hero: {
          title: 'Karaoke für Vereinsanlässe & Dorffeste',
          subtitle: 'Unterhaltung, die Ihre Community zusammenbringt',
        },
        description: {
          intro: 'Gemeinsam singen, gemeinsam feiern',
          paragraph1: 'Vereine und Communities leben vom Zusammenhalt – und nichts bringt Menschen besser zusammen als gemeinsames Singen. Mit Zürioke holen Sie mobile Karaoke zu Ihrem Vereinsanlass, Dorffest, Nachbarschaftsfest oder Community-Event. Unsere Anlage ist robust, wetterfest (mit Überdachung) und perfekt für Outdoor-Events geeignet.',
          paragraph2: 'Karaoke ist die ideale Unterhaltung für Anlässe, bei denen alle Generationen zusammenkommen: Die Grosseltern singen Schlager, die Eltern performen 80er-Hits, und die Jugend rockt die aktuellen Charts. Unsere umfangreiche Songauswahl umfasst auch viele Schweizer und deutsche Klassiker – von Plüsch bis Patent Ochsner, von Helene Fischer bis Andreas Gabalier. Die Einstiegshürde ist niedrig, der Spassfaktor hoch – perfekt für Community-Events!',
        },
        imagePlaceholder: 'Bild folgt',
        benefits: {
          title: 'Vorteile für Vereine & Communities',
          items: [
            {
              title: 'Bringt die Community zusammen',
              description: 'Karaoke schafft gemeinsame Erlebnisse und stärkt den Zusammenhalt im Verein oder in der Nachbarschaft.',
            },
            {
              title: 'Outdoor-geeignet',
              description: 'Unser Equipment funktioniert auch draussen – perfekt für Dorffeste, Gartenfeste und Open-Air-Events.',
            },
            {
              title: 'Für alle Generationen',
              description: 'Von 8 bis 88 – unsere Song-Datenbank bietet für jedes Alter die passende Musik.',
            },
            {
              title: 'Niedrige Teilnahme-Schwelle',
              description: 'Karaoke ist inklusiv und macht auch Menschen Mut, die sich sonst nicht trauen würden, vor anderen aufzutreten.',
            },
            {
              title: 'Schweizer & deutsche Hits',
              description: 'Wir haben eine grosse Auswahl an Schweizer Mundart, deutschen Schlagern und lokalen Favoriten.',
            },
            {
              title: 'Robustes Equipment',
              description: 'Unsere Anlage ist für den professionellen Einsatz konzipiert und hält auch an langen Event-Tagen durch.',
            },
          ],
        },
        examples: {
          title: 'Perfekt für diese Anlässe',
          items: [
            'Sportverein-Feiern & Meisterschafts-Partys',
            'Dorffeste & Quartierfeste',
            'Nachbarschaftsfeste',
            'Community-Center Events',
            'Charity-Fundraiser & Benefiz-Anlässe',
            'Vereins-Jubiläen',
          ],
        },
        faqs: {
          title: 'Häufige Fragen',
          items: [
            {
              q: 'Könnt ihr auch draussen aufbauen?',
              a: 'Ja, absolut! Unser Equipment ist outdoor-geeignet. Wir benötigen lediglich Stromanschluss und idealerweise eine Überdachung (Pavillon, Zelt) für das Equipment bei Regen. Wir bringen auch wetterfeste Abdeckungen mit.',
            },
            {
              q: 'Was passiert bei Regen?',
              a: 'Wenn eine Überdachung vorhanden ist (z.B. ein Festzelt), kann die Karaoke auch bei Regen weitergehen. Wir haben wasserdichte Abdeckungen für unser Equipment und können flexibel auf Wetterwechsel reagieren.',
            },
            {
              q: 'Für wie viele Teilnehmer ist das geeignet?',
              a: 'Unsere Anlage eignet sich für Events von 20 bis über 200 Personen. Bei sehr grossen Events (100+) empfehlen wir unser Premium-Setup mit noch leistungsstärkerer Beschallung.',
            },
            {
              q: 'Habt ihr Schweizer und lokale Songs?',
              a: 'Ja, wir haben eine grosse Auswahl an Schweizer Mundart-Songs (Büne Huber, Patent Ochsner, Plüsch, Gölä etc.), deutschen Schlagern und Volksliedern. Teilen Sie uns einfach Ihre Wünsche mit!',
            },
          ],
        },
        cta: {
          title: 'Bereit für Ihren Community-Event?',
          description: 'Kontaktieren Sie uns für ein massgeschneidertes Angebot für Ihren Vereinsanlass oder Dorffest.',
          buttonText: 'Jetzt Offerte einholen',
          buttonLink: '/buchen',
        },
      },
    },
  },

  en: {
    nav: {
      home: 'Home',
      angebot: 'Packages',
      angebotDropdown: {
        overview: 'All Packages',
        birthdays: 'Birthday Parties',
        corporate: 'Corporate Events & Team Building',
        weddings: 'Weddings & Anniversaries',
        bachelor: 'Bachelor & Bachelorette Parties',
        clubs: 'Club Events & Village Festivals',
      },
      buchen: 'Book',
      testimonials: 'Reviews',
      empfehlungen: 'Recommendations',
      uberUns: 'About Us',
      ctaButton: 'Request now',
    },

    home: {
      badge: 'Available for events in Zurich',
      promoStamp: 'New Year Promotion: Packages starting at CHF 479',
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
      promoBanner: '🎉 20% Off\nBook now & save!',
      savingsText: 'Save',
      packages: [
        {
          name: 'Basic',
          price: 'CHF 479',
          originalPrice: 'CHF 599',
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
          price: 'CHF 719',
          originalPrice: 'CHF 899',
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
          price: 'CHF 1039',
          originalPrice: 'CHF 1299',
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

    empfehlungen: {
      title: 'Song Recommendations',
      subtitle: 'Our top picks for every mood and occasion – from classics to the latest hits.',
      downloadPdf: 'Download PDF',
      categories: {
        classics: 'Zürioke - Classics',
        dance: 'Zürioke - Dance',
        swissGerman: 'Zürioke - Swiss / German',
        latin: 'Zürioke - Latin',
        techno: 'Zürioke - Techno',
        rock: 'Zürioke - Rock',
        allTimeHits: 'Zürioke - All Time Karaoke Hits',
        pop: 'Zürioke - Pop',
        sixties: 'Zürioke - Best of the 60s 70s',
        nineties: 'Zürioke - Best of the 90s',
        italianFrench: 'Zürioke - Italian / French',
        christmas: 'Zürioke - Christmas / Halloween',
      },
      meta: {
        title: 'Song Recommendations | Karaoke Zurich',
        description: 'Discover our hand-picked karaoke song recommendations – classics, dance hits, Swiss favorites and more for your event.',
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

    eventPages: {
      birthdays: {
        meta: {
          title: 'Karaoke for Birthday Parties | Zürioke',
          description: 'Mobile karaoke for unforgettable birthday parties in Zurich. Professional entertainment for all ages. Book now!',
          ogTitle: 'Birthday Karaoke Zurich | Mobile Karaoke Party',
          ogDescription: 'Transform your birthday party into an unforgettable experience with mobile karaoke from Zürioke.',
        },
        hero: {
          title: 'Karaoke for Unforgettable Birthday Celebrations',
          subtitle: 'Make your birthday an unforgettable event with professional mobile karaoke',
        },
        description: {
          intro: 'Whether milestone birthday, surprise party, or intimate celebration',
          paragraph1: 'A birthday is a special occasion – and deserves special entertainment. With Zürioke, transform your birthday party into an unforgettable karaoke experience. We come to your home, restaurant, or preferred location and bring everything: professional equipment, over 100,000 songs, and plenty of good vibes.',
          paragraph2: 'Our mobile karaoke system is perfect for birthday parties of all kinds – from intimate gatherings to large celebrations. With our all-inclusive service, you don\'t need to worry about anything: We set up, host on request, and ensure every guest becomes the star of the evening. Whether you\'re turning 30, 40, 50, or 60 – karaoke brings all generations together and creates memories that last.',
        },
        imagePlaceholder: 'Image coming soon',
        benefits: {
          title: 'Why Karaoke is Perfect for Birthdays',
          items: [
            {
              title: 'Worry-Free Entertainment',
              description: 'We take care of all the technical equipment and logistics – you enjoy your party.',
            },
            {
              title: 'For All Age Groups',
              description: 'From current chart hits to timeless classics – our song selection delights young and old alike.',
            },
            {
              title: 'Interactive Hosting',
              description: 'Our host breaks the ice and motivates even shy guests to join in singing.',
            },
            {
              title: 'Professional Equipment',
              description: 'High-quality microphones, crystal-clear sound, and optionally a large screen for the ultimate experience.',
            },
            {
              title: 'Custom Playlists',
              description: 'Share your favorite songs with us – we ensure they\'re available.',
            },
            {
              title: 'Unforgettable Moments',
              description: 'Karaoke creates shared experiences and memories you\'ll laugh about for years to come.',
            },
          ],
        },
        examples: {
          title: 'Perfect for These Birthday Celebrations',
          items: [
            '30th, 40th, 50th Birthdays – Milestone Celebrations',
            'Surprise Parties',
            'Teen & Youth Birthdays (ages 12+)',
            'Garden & Outdoor Celebrations',
            'Restaurant Events',
            'Private Home Celebrations',
          ],
        },
        faqs: {
          title: 'Frequently Asked Questions',
          items: [
            {
              q: 'Can we choose songs in advance?',
              a: 'Absolutely! You can send us a list of favorite songs ahead of time. We\'ll ensure they\'re available and prepare a playlist accordingly.',
            },
            {
              q: 'Is this suitable for children\'s birthdays?',
              a: 'Yes, we offer karaoke for children\'s birthdays from age 12 and up. We have a large selection of age-appropriate songs and can adjust our hosting style accordingly.',
            },
            {
              q: 'How much space do you need?',
              a: 'For our basic setup, about 4m² is sufficient. If you want a large screen and light effects, we recommend 10-15m². We adapt flexibly to your space.',
            },
            {
              q: 'Do you provide hosting?',
              a: 'Yes! Our host charmingly guides the evening, motivates guests to sing, and creates a relaxed atmosphere. We can also stay in the background if you prefer.',
            },
          ],
        },
        cta: {
          title: 'Ready for the Best Birthday Party?',
          description: 'Book your mobile karaoke system now and make your birthday unforgettable.',
          buttonText: 'Request Now',
          buttonLink: '/buchen',
        },
      },

      corporate: {
        meta: {
          title: 'Karaoke for Corporate Events & Team Building | Zürioke',
          description: 'Mobile karaoke for corporate events, team building, and holiday parties in Zurich. Strengthen your team the fun way!',
          ogTitle: 'Corporate Karaoke Zurich | Team Building Event',
          ogDescription: 'Unforgettable corporate events with mobile karaoke. Strengthen team spirit and break down hierarchies naturally.',
        },
        hero: {
          title: 'Karaoke for Corporate Events & Team Building',
          subtitle: 'Strengthen your team with the perfect mix of fun and connection',
        },
        description: {
          intro: 'Team building that truly connects',
          paragraph1: 'Forget boring team-building events! Karaoke is the perfect activity to bring your team together in an entertaining and casual way. When the CEO and the intern sing "Bohemian Rhapsody" together, hierarchies naturally fall away – and that\'s exactly what makes karaoke so valuable for corporate events.',
          paragraph2: 'Whether Christmas party, team outing, product launch, or company anniversary – our mobile karaoke system provides entertainment your employees will remember for a long time. We bring everything you need and adapt flexibly to your space – whether in the office, rented venue, or external event location. The result: An unforgettable evening, strengthened relationships, and plenty of new inside jokes for the office.',
        },
        imagePlaceholder: 'Image coming soon',
        benefits: {
          title: 'Benefits for Your Company',
          items: [
            {
              title: 'Natural Team Bonding',
              description: 'Laughing and singing together strengthens bonds more sustainably than traditional team exercises.',
            },
            {
              title: 'Break Down Hierarchies',
              description: 'On the karaoke stage, everyone is equal – creating new connections across departments.',
            },
            {
              title: 'Stress Relief & Morale Boost',
              description: 'A karaoke session is the perfect opportunity to leave work stress behind and recharge together.',
            },
            {
              title: 'Unforgettable Culture Experience',
              description: 'Create positive memories that sustainably shape your company culture.',
            },
            {
              title: 'Flexible Setup',
              description: 'We set up directly in your office or accompany you to an external location – as you prefer.',
            },
            {
              title: 'Adapted to Your Culture',
              description: 'From casual to professional – we adjust hosting and song selection to your company culture.',
            },
          ],
        },
        examples: {
          title: 'Perfect for These Corporate Events',
          items: [
            'Holiday Parties & Year-End Events',
            'Team Building & Offsite Events',
            'Product Launches & Milestone Celebrations',
            'Onboarding Events for New Employees',
            'Department Parties & After-Work Events',
            'Company Anniversaries',
          ],
        },
        faqs: {
          title: 'Frequently Asked Questions',
          items: [
            {
              q: 'Can you set up directly in our office?',
              a: 'Yes, no problem! We come to your office and set up our equipment in your meeting room, cafeteria, or another suitable space. We just need an outlet and some space.',
            },
            {
              q: 'How do we motivate shy employees?',
              a: 'Our experienced host knows exactly how to create a relaxed atmosphere. No one is forced – but with the right hosting, even shy colleagues dare to take the "stage". Duets are a great way to start!',
            },
            {
              q: 'Can we integrate company songs or special playlists?',
              a: 'Absolutely! You can share song requests with us in advance. Whether current hits, company anthem, or a mix of genres – we ensure the playlist fits your team.',
            },
            {
              q: 'What\'s the ideal group size?',
              a: 'Karaoke works for teams from 10 people to large events with 100+ participants. We adjust equipment and hosting to the group size.',
            },
          ],
        },
        cta: {
          title: 'Ready for an Unforgettable Corporate Event?',
          description: 'Contact us for a consultation and a customized offer for your team.',
          buttonText: 'Request Quote',
          buttonLink: '/buchen',
        },
      },

      weddings: {
        meta: {
          title: 'Karaoke for Weddings & Anniversaries | Zürioke',
          description: 'Elegant mobile karaoke for weddings and anniversaries in Zurich. Unique entertainment for your celebration!',
          ogTitle: 'Wedding Karaoke Zurich | Elegant Entertainment',
          ogDescription: 'Make your wedding or anniversary unforgettable with elegant karaoke entertainment from Zürioke.',
        },
        hero: {
          title: 'Karaoke for Elegant Weddings & Anniversaries',
          subtitle: 'Unique entertainment that delights your guests and connects generations',
        },
        description: {
          intro: 'Elegant entertainment for your special day',
          paragraph1: 'A wedding is a day full of emotions – and what could be more emotional than music? With Zürioke, you bring a unique and elegant form of entertainment to your wedding celebration. Our mobile karaoke system fits discreetly into your celebration and becomes the highlight your guests will remember for a long time.',
          paragraph2: 'Whether romantic duets by the bride and groom, touching serenades from family members, or exuberant group performances by the wedding party – karaoke creates magical moments. We provide a stylish setup that fits your wedding and a song selection covering everything from romantic ballads to party hits. Karaoke breaks the ice between families and ensures all generations enjoy themselves together.',
        },
        imagePlaceholder: 'Image coming soon',
        benefits: {
          title: 'Why Karaoke is Perfect for Weddings',
          items: [
            {
              title: 'Unique Entertainment',
              description: 'Surprise your guests with something different than the classic band or DJ – with interactive entertainment.',
            },
            {
              title: 'Connects Families',
              description: 'Karaoke breaks the ice between families and creates shared experiences from the start.',
            },
            {
              title: 'For All Generations',
              description: 'From grandparents to grandchildren – our song selection appeals to all age groups.',
            },
            {
              title: 'Romantic Duet Moments',
              description: 'The bride and groom can sing a romantic song together – an unforgettable moment for everyone present.',
            },
            {
              title: 'Elegant Setup',
              description: 'We adapt our equipment to your wedding\'s ambiance – elegant and professional, never tacky.',
            },
            {
              title: 'Unforgettable Memories',
              description: 'Videos of karaoke performances are among the most beautiful wedding memories you\'ll watch again and again.',
            },
          ],
        },
        examples: {
          title: 'Perfect for These Occasions',
          items: [
            'Wedding Receptions & Cocktail Hours',
            '25th & 50th Wedding Anniversaries (Silver & Golden)',
            'Engagement Parties',
            'After-Wedding Parties',
            'Bachelor & Bachelorette Parties (see separate page)',
            'Wedding Brunch the Next Day',
          ],
        },
        faqs: {
          title: 'Frequently Asked Questions',
          items: [
            {
              q: 'Does it look elegant enough for a wedding?',
              a: 'Absolutely! We adapt our setup to your wedding\'s ambiance. Our equipment is high-quality and discreetly designed – no colorful lights or cheap-looking effects unless you want them. We have experience with elegant events.',
            },
            {
              q: 'Can we create a stylish song list?',
              a: 'Yes, you have full control over the song selection. We can create a curated playlist with romantic ballads, classics, and timeless hits – or you can give us your song requests.',
            },
            {
              q: 'When during the celebration is the best time?',
              a: 'Karaoke works best after dinner when the mood is relaxed. Many couples plan 2-3 hours of karaoke after the formal parts (speeches, cake) are over. We\'re happy to advise you individually.',
            },
            {
              q: 'Can couples sing romantic duets?',
              a: 'That\'s one of the most beautiful moments! Many couples sing a favorite song together – it\'s emotional, touching, and often the highlight of the evening.',
            },
          ],
        },
        cta: {
          title: 'Make Your Wedding Unforgettable',
          description: 'Contact us for personal consultation and a quote for your wedding celebration.',
          buttonText: 'Plan Wedding Now',
          buttonLink: '/buchen',
        },
      },

      bachelor: {
        meta: {
          title: 'Karaoke for Bachelor & Bachelorette Parties | Zürioke',
          description: 'Mobile karaoke for epic bachelor and bachelorette parties in Zurich. Unforgettable pre-wedding celebrations!',
          ogTitle: 'Bachelor Party Karaoke Zurich | Fun Guaranteed',
          ogDescription: 'Celebrate your bachelor or bachelorette party with mobile karaoke – unforgettable, hilarious, and perfect for groups!',
        },
        hero: {
          title: 'Karaoke for Epic Bachelor & Bachelorette Parties',
          subtitle: 'The ultimate soundtrack for your last day of freedom',
        },
        description: {
          intro: 'Unforgettable Pre-Wedding Celebrations',
          paragraph1: 'A bachelor or bachelorette party should be legendary – and what\'s more legendary than a karaoke session with your best friends? With Zürioke, you bring the party directly to you: to your hotel, Airbnb, bar, or any other location of your choice. No pub crawls, no crowded karaoke bars – just you, your crew, and the best songs.',
          paragraph2: 'Karaoke is perfect for bachelor party groups because it brings everyone together: Shy friends get motivated, the energetic ones can shine, and in the end, you\'ve all laughed, sung, and created unforgettable moments together. We bring not just the equipment but also challenge songs, party hits, and embarrassing duet classics on request – perfect for an evening you\'ll talk about for years to come.',
        },
        imagePlaceholder: 'Image coming soon',
        benefits: {
          title: 'Why Karaoke is Perfect for Bachelor Parties',
          items: [
            {
              title: 'Unforgettable Group Activity',
              description: 'Karaoke is interactive, fun, and perfect for groups – no boring waiting times, everyone participates.',
            },
            {
              title: 'Inside Jokes for Life',
              description: 'The most embarrassing performances become the best memories and inside jokes for years to come.',
            },
            {
              title: 'No Location Changes',
              description: 'We come to you – whether hotel, Airbnb, or private location. No stress with reservations or wait times.',
            },
            {
              title: 'Safe Environment',
              description: 'Celebrate in your private bubble – no strangers, no embarrassment in front of unknowns.',
            },
            {
              title: 'Video Recording Possible',
              description: 'Capture the funniest moments on video – perfect for the wedding or just as a memory!',
            },
          ],
        },
        examples: {
          title: 'Perfect for These Events',
          items: [
            'Bachelor Parties (Men)',
            'Bachelorette Parties (Women)',
            'Joint Pre-Wedding Parties (Bride & Groom)',
            'Hotel & Airbnb Celebrations',
            'Bar & Restaurant Events',
            'After-Party Celebrations',
          ],
        },
        faqs: {
          title: 'Frequently Asked Questions',
          items: [
            {
              q: 'Can we record the most embarrassing performances?',
              a: 'Absolutely! We even encourage it. Many bachelor party groups create videos they later show at the wedding – with our equipment, you can capture everything.',
            },
            {
              q: 'What are the best challenge songs for bachelor parties?',
              a: 'We have a special bachelor party playlist with challenge songs like "I Will Survive", "It\'s Raining Men", "Wannabe" (Spice Girls), and many more. We\'re happy to give you tips for epic group performances!',
            },
            {
              q: 'Is it loud enough for real party vibes?',
              a: 'Oh yes! Our PA system delivers powerful sound and party atmosphere. If you want to really rock out, we recommend our Party or Premium package with light effects.',
            },
          ],
        },
        cta: {
          title: 'Ready for the Best Bachelor Party Ever?',
          description: 'Book now and make your bachelor or bachelorette party unforgettable!',
          buttonText: 'Book Now',
          buttonLink: '/buchen',
        },
      },

      clubs: {
        meta: {
          title: 'Karaoke for Club Events & Village Festivals | Zürioke',
          description: 'Mobile karaoke for club events, village festivals, and community events in Zurich. For all generations!',
          ogTitle: 'Club Karaoke Zurich | Village Festival Entertainment',
          ogDescription: 'Bring your community together with mobile karaoke for club events, village festivals, and neighborhood parties.',
        },
        hero: {
          title: 'Karaoke for Club Events & Village Festivals',
          subtitle: 'Entertainment that brings your community together',
        },
        description: {
          intro: 'Sing together, celebrate together',
          paragraph1: 'Clubs and communities thrive on togetherness – and nothing brings people together better than singing together. With Zürioke, bring mobile karaoke to your club event, village festival, neighborhood party, or community event. Our system is robust, weatherproof (with cover), and perfect for outdoor events.',
          paragraph2: 'Karaoke is ideal entertainment for events where all generations come together: Grandparents sing classics, parents perform 80s hits, and youth rock current charts. Our extensive song selection includes many Swiss and German classics – from Plüsch to Patent Ochsner, from Helene Fischer to Andreas Gabalier. Low barrier to entry, high fun factor – perfect for community events!',
        },
        imagePlaceholder: 'Image coming soon',
        benefits: {
          title: 'Benefits for Clubs & Communities',
          items: [
            {
              title: 'Brings Community Together',
              description: 'Karaoke creates shared experiences and strengthens bonds in clubs or neighborhoods.',
            },
            {
              title: 'Outdoor Suitable',
              description: 'Our equipment works outdoors too – perfect for village festivals, garden parties, and open-air events.',
            },
            {
              title: 'For All Generations',
              description: 'From 8 to 88 – our song database offers the right music for every age.',
            },
            {
              title: 'Low Participation Barrier',
              description: 'Karaoke is inclusive and encourages even people who wouldn\'t normally dare to perform in front of others.',
            },
            {
              title: 'Swiss & German Hits',
              description: 'We have a large selection of Swiss dialect, German hits, and local favorites.',
            },
            {
              title: 'Robust Equipment',
              description: 'Our system is designed for professional use and holds up even during long event days.',
            },
          ],
        },
        examples: {
          title: 'Perfect for These Occasions',
          items: [
            'Sports Club Celebrations & Championship Parties',
            'Village Festivals & Neighborhood Festivals',
            'Neighborhood Parties',
            'Community Center Events',
            'Charity Fundraisers & Benefit Events',
            'Club Anniversaries',
          ],
        },
        faqs: {
          title: 'Frequently Asked Questions',
          items: [
            {
              q: 'Can you set up outdoors?',
              a: 'Yes, absolutely! Our equipment is outdoor-suitable. We only need power and ideally a cover (pavilion, tent) for the equipment in case of rain. We also bring weatherproof covers.',
            },
            {
              q: 'What happens if it rains?',
              a: 'If there\'s a cover (e.g., a festival tent), karaoke can continue even in rain. We have waterproof covers for our equipment and can react flexibly to weather changes.',
            },
            {
              q: 'How many participants is this suitable for?',
              a: 'Our system is suitable for events from 20 to over 200 people. For very large events (100+), we recommend our Premium setup with even more powerful sound.',
            },
            {
              q: 'Do you have Swiss and local songs?',
              a: 'Yes, we have a large selection of Swiss dialect songs (Büne Huber, Patent Ochsner, Plüsch, Gölä, etc.), German hits, and folk songs. Just share your wishes with us!',
            },
          ],
        },
        cta: {
          title: 'Ready for Your Community Event?',
          description: 'Contact us for a customized quote for your club event or village festival.',
          buttonText: 'Request Quote',
          buttonLink: '/buchen',
        },
      },
    },
  },
};

// Re-export the context hook for convenience
export { useLanguage } from '../contexts/LanguageContext';

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}
