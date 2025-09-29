import Head from "next/head";
import { motion } from "framer-motion";

export default function Testimonials() {
  const quotes = [
    {
      name: "Sandra M.",
      role: "HR-Managerin",
      company: "Tech Startup Zürich",
      text: "Ich hätte nie gedacht, dass unsere Firmenfeier so aus dem Ruder laufen könnte – im besten Sinne! Die beste Karaoke-Nacht ever.",
      rating: 5,
    },
    {
      name: "Jonas K.",
      role: "Eventplaner",
      company: "Event Solutions AG",
      text: "Professionell, sympathisch und einfach total fun. Unsere Gäste sprechen heute noch über die spontanen Duette!",
      rating: 5,
    },
    {
      name: "Laura & Nico",
      role: "Hochzeitspaar",
      company: "",
      text: "Ich war skeptisch – aber es war der absolute Hit unserer Hochzeitsfeier! Merci vielmal, Zürioke.",
      rating: 5,
    },
    {
      name: "Remo Z.",
      role: "Geburtstagskind",
      company: "30. Geburtstag",
      text: "Selten so gelacht und gesungen. Technik top, Hosting charmant! Würde sofort wieder buchen.",
      rating: 5,
    },
    {
      name: "Martina L.",
      role: "Team Lead",
      company: "Finance Corp",
      text: "Zürioke hat unser Team-Event zu einem unvergesslichen Erlebnis gemacht. Die Kollegen sind richtig aus sich herausgekommen!",
      rating: 5,
    },
    {
      name: "Thomas W.",
      role: "Vereinspräsident",
      company: "Sportverein Zürich",
      text: "Top Organisation, super Stimmung und faire Preise. Unser Vereinsfest war ein voller Erfolg!",
      rating: 5,
    }
  ];

  return (
    <>
      <Head>
        <title>Karaoke Zürich Bewertungen | Kundenstimmen</title>
        <meta name="description" content="Echte Bewertungen unserer Karaoke Events in Zürich. 500+ zufriedene Kunden, 5-Sterne Service für Firmenevents, Hochzeiten & Partys." />
        <meta property="og:title" content="Kundenbewertungen | Zürioke Karaoke Zürich" />
        <meta property="og:description" content="Was unsere Kunden über ihre Karaoke-Events sagen. 98% Zufriedenheit." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Zürioke",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sandra M."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Die beste Karaoke-Nacht ever für unsere Firmenfeier!"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Jonas K."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Professionell, sympathisch und einfach total fun."
                }
              ]
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
            Kundenstimmen
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Das sagen unsere Kunden über ihre Karaoke-Erlebnisse mit Zürioke
          </p>
          
          {/* Rating Summary */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold">5.0 von 5</span>
            <span className="text-gray-400">({quotes.length} Bewertungen)</span>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all duration-300 card-hover">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(quote.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-300 leading-relaxed mb-6">
                  "{quote.text}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold">
                    {quote.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{quote.name}</div>
                    <div className="text-sm text-gray-400">
                      {quote.role}{quote.company && `, ${quote.company}`}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 rounded-3xl p-10 backdrop-blur-sm border border-[#D4AF37]/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Zahlen, die für sich sprechen
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "98%", label: "Zufriedene Kunden" },
                { number: "500+", label: "Erfolgreiche Events" },
                { number: "4.9★", label: "Google Bewertung" },
                { number: "85%", label: "Wiederbuchungen" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
                  <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Werden Sie Teil unserer Erfolgsgeschichte
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihren Event zu einem unvergesslichen Erlebnis machen.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/buchen" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 btn-glow"
            >
              Jetzt Ihre Party planen
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}