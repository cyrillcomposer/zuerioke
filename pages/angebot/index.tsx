import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLanguage } from "../../translations";
import PriceCards from "../../components/PriceCards";

export default function Angebot() {
  const t = useTranslations();
  const { language } = useLanguage();
  const addons = t.angebot.addons;

  const getEventLinks = () => {
    const basePath = language === 'de' ? '/angebot' : '/packages';
    return [
      {
        href: `${basePath}/${language === 'de' ? 'geburtstagsfeiern' : 'birthday-parties'}`,
        label: t.nav.angebotDropdown.birthdays,
        description: language === 'de' ? 'Perfekt für unvergessliche Geburtstagsfeiern' : 'Perfect for unforgettable birthday celebrations'
      },
      {
        href: `${basePath}/${language === 'de' ? 'firmenevents-teambuilding' : 'corporate-events-teambuilding'}`,
        label: t.nav.angebotDropdown.corporate,
        description: language === 'de' ? 'Stärkt dein Team und sorgt für unvergessliche Momente' : 'Strengthen your team with memorable moments'
      },
      {
        href: `${basePath}/${language === 'de' ? 'hochzeiten-jubilaeen' : 'weddings-anniversaries'}`,
        label: t.nav.angebotDropdown.weddings,
        description: language === 'de' ? 'Elegante Unterhaltung für eure Hochzeit' : 'Elegant entertainment for your wedding'
      },
      {
        href: `${basePath}/${language === 'de' ? 'jga-polterabende' : 'bachelor-bachelorette-parties'}`,
        label: t.nav.angebotDropdown.bachelor,
        description: language === 'de' ? 'Die ultimative Party vor der Hochzeit' : 'The ultimate pre-wedding party experience'
      },
      {
        href: `${basePath}/${language === 'de' ? 'vereinsanlaesse-dorffeste' : 'club-events-village-festivals'}`,
        label: t.nav.angebotDropdown.clubs,
        description: language === 'de' ? 'Bringt eure Community zusammen' : 'Bring your community together'
      },
    ];
  };


  return (
    <>
      <Head>
        <title>{t.angebot.meta.title}</title>
        <meta name="description" content={t.angebot.meta.description} />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Zürioke – Mobile Karaoke Pakete" />
        <meta property="og:description" content="Wähle dein perfektes Karaoke-Paket – von Basic bis Premium mit Profi-Equipment." />
        <meta property="og:url" content="https://zuerioke.ch/angebot" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zürioke Logo auf hellem Hintergrund" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zürioke – Mobile Karaoke Pakete" />
        <meta name="twitter:description" content="Wähle dein perfektes Karaoke-Paket – von Basic bis Premium mit Profi-Equipment." />
        <meta name="twitter:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Mobile Karaoke Pakete",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Zürioke"
              },
              "areaServed": {
                "@type": "City",
                "name": "Zürich"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Karaoke Pakete",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Basic Karaoke Paket",
                      "description": "2 Stunden mobile Karaoke mit Grundausstattung"
                    },
                    "price": "599",
                    "priceCurrency": "CHF"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Party Karaoke Paket",
                      "description": "3 Stunden mobile Karaoke mit Beamer und Lichtshow"
                    },
                    "price": "899",
                    "priceCurrency": "CHF"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Premium Karaoke Paket",
                      "description": "4 Stunden mobile Karaoke mit Profi-Equipment"
                    },
                    "price": "1299",
                    "priceCurrency": "CHF"
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t.angebot.title}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.angebot.subtitle}
          </p>

        </div>

        {/* Event Types Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            {language === 'de' ? 'Spezialisiert auf deinen Anlass' : 'Specialized for Your Event'}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getEventLinks().map((event, i) => (
              <motion.div
                key={event.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={event.href}
                  className="block bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 card-hover h-full group"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {event.label}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {event.description}
                  </p>
                  <span className="text-[#D4AF37] text-sm font-medium inline-flex items-center gap-1">
                    {language === 'de' ? 'Mehr erfahren' : 'Learn more'}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Packages */}
        <PriceCards className="mb-20" />

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.angebot.addonsTitle}
            </h2>
            <p className="text-gray-400">
              {t.angebot.addonsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addons.map((addon: { name: string; price: string }, i: number) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="font-semibold text-white mb-1">{addon.name}</div>
                <div className="text-[#D4AF37]">{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            {t.angebot.faqTitle}
          </h2>

          <div className="space-y-4">
            {t.angebot.faqs.map((faq: { q: string; a: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#D4AF37]/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 rounded-3xl p-10 backdrop-blur-sm border border-[#D4AF37]/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.angebot.ctaTitle}
            </h2>
            <p className="text-gray-300 mb-6">
              {t.angebot.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/buchen"
                className="px-6 py-3 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
              >
                {t.angebot.ctaButton}
              </Link>
              <a
                href="mailto:hello@zuerioke.ch"
                className="px-6 py-3 border border-[#D4AF37]/30 text-white font-semibold rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                {t.angebot.ctaEmail}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}