import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "../translations";

export default function Angebot() {
  const t = useTranslations();
  const packages = t.angebot.packages.map((pkg: { name: string; price: string; duration: string; features: string[] }, i: number) => ({
    ...pkg,
    popular: i === 1
  }));
  const addons = t.angebot.addons;


  return (
    <>
      <Head>
        <title>{t.angebot.meta.title}</title>
        <meta name="description" content={t.angebot.meta.description} />
        <meta property="og:title" content={t.angebot.meta.title} />
        <meta property="og:description" content={t.angebot.meta.description} />
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

        {/* Packages */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {packages.map((pkg: any, i: number) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative ${pkg.popular ? 'md:-mt-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black text-sm font-semibold rounded-full">
                    {t.angebot.popular}
                  </span>
                </div>
              )}
              <div className={`relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                pkg.popular 
                  ? 'border-[#D4AF37]/50 shadow-lg shadow-yellow-500/20' 
                  : 'border-white/10'
              } hover:border-[#D4AF37]/30 transition-all duration-300 card-hover`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold gradient-text mb-1">{pkg.price}</div>
                  <div className="text-gray-400">{pkg.duration}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature: string, j: number) => (
                    <li key={j} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/buchen"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black hover:shadow-lg hover:shadow-yellow-500/30'
                      : 'border border-[#D4AF37]/30 text-white hover:bg-[#D4AF37]/10'
                  }`}
                >
                  {t.angebot.selectPackage}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

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