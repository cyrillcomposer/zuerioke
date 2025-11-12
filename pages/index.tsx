import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "../translations";

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const t = useTranslations();

  const features = [
    {
      icon: "🚐",
      title: t.home.features[0].title,
      text: t.home.features[0].text
    },
    {
      icon: "🎵",
      title: t.home.features[1].title,
      text: t.home.features[1].text
    },
    {
      icon: "🎤",
      title: t.home.features[2].title,
      text: t.home.features[2].text
    }
  ];

  const stats = [
    { number: "500+", label: t.home.stats.events },
    { number: "100K+", label: t.home.stats.songs },
    { number: "5★", label: t.home.stats.rating },
    { number: "24h", label: t.home.stats.support }
  ];

  return (
    <>
      <Head>
        <title>{t.home.meta.title}</title>
        <meta name="description" content={t.home.meta.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Zürioke – Mobile Karaoke in Zürich" />
        <meta property="og:description" content="Wir bringen Karaoke zu deinem Event – Profi-Sound, 100'000+ Songs, Licht & Moderation." />
        <meta property="og:url" content="https://zuerioke.ch/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zürioke Logo auf hellem Hintergrund" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zürioke – Mobile Karaoke in Zürich" />
        <meta name="twitter:description" content="Wir bringen Karaoke zu deinem Event – Profi-Sound, 100'000+ Songs, Licht & Moderation." />
        <meta name="twitter:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Zürioke - Mobile Karaoke Zürich",
              "image": "/zurioke-logo.png",
              "@id": "https://zuerioke.ch",
              "url": "https://zuerioke.ch",
              "telephone": "+41791234567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Zürich",
                "addressRegion": "ZH",
                "addressCountry": "CH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.3769,
                "longitude": 8.5417
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": ["https://instagram.com/zuerioke"],
              "priceRange": "CHF 599 - CHF 1299",
              "description": "Mobile Karaoke Service in Zürich. Wir kommen zu Ihrem Event mit professionellem Equipment und über 100.000 Songs.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Karaoke Pakete",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Basic Paket",
                    "price": "599",
                    "priceCurrency": "CHF",
                    "description": "2 Stunden Karaoke mit 2 Mikrofonen und PA-Anlage"
                  },
                  {
                    "@type": "Offer",
                    "name": "Party Paket",
                    "price": "899",
                    "priceCurrency": "CHF",
                    "description": "3 Stunden Karaoke mit Beamer und Lichtshow"
                  },
                  {
                    "@type": "Offer",
                    "name": "Premium Paket",
                    "price": "1299",
                    "priceCurrency": "CHF",
                    "description": "4 Stunden Entertainment mit Profi-Equipment"
                  }
                ]
              }
            })
          }}
        />
      </Head>

      {/* HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 md:py-20"
      >
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#B8941F] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#F4E5A3] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="mx-auto max-w-5xl text-center">
          {/* Logo Hero */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8"
          >
            <Image 
              src="/zurioke-logo.png" 
              alt="ZÜRIOKE" 
              width={280} 
              height={120}
              className="h-32 w-auto object-contain mx-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 mb-6">
              <span className="animate-pulse mr-2">●</span> {t.home.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          >
            <span className="block text-white mb-2">{t.home.heroTitle1}</span>
            <span className="block gradient-text">{t.home.heroTitle2}</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t.home.heroDescription}
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/buchen"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 btn-glow"
            >
              <span className="relative z-10 flex items-center">
                {t.home.ctaPrimary}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/angebot"
              className="px-8 py-4 text-white font-semibold border border-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              {t.home.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
              <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* FEATURES */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.home.featuresTitle}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.home.featuresSubtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 rounded-2xl blur-xl transition-opacity duration-300 ${
                hoveredFeature === i ? 'opacity-100' : 'opacity-0'
              }`}></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-[#D4AF37]/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 card-hover">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SERVICE HIGHLIGHTS */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="relative bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 rounded-3xl p-12 md:p-16 backdrop-blur-sm border border-[#D4AF37]/20">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#B8941F] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.home.highlightsTitle} <span className="gradient-text">{t.home.highlightsTitle === 'Perfekt für jeden' ? 'Anlass' : 'occasion'}</span>
              </h2>
              <ul className="space-y-4">
                {t.home.occasions.map((item: string, i: number) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-300"
                  >
                    <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#D4AF37]/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎤</div>
                  <p className="text-white font-semibold">{t.home.videoPlaceholder}</p>
                  <p className="text-gray-400 text-sm mt-2">{t.home.videoComingSoon}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 text-center"
      >
        <div className="relative">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 blur-3xl"
          ></motion.div>
          <div className="relative bg-black/50 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-[#D4AF37]/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.home.ctaTitle.split('beste Karaoke-Party')[0]}<span className="gradient-text">{t.home.ctaTitle.includes('beste Karaoke-Party') ? 'beste Karaoke-Party' : 'best karaoke party'}</span>{t.home.ctaTitle.split('beste Karaoke-Party')[1] || t.home.ctaTitle.split('best karaoke party')[1]}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.home.ctaDescription}
            </p>
            <Link
              href="/buchen"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 btn-glow pulse"
            >
              <span className="relative z-10">{t.home.ctaButton}</span>
            </Link>
            <p className="mt-6 text-sm text-gray-500">
              {t.home.ctaFooter}
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}