import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Angebot() {
  const packages = [
    {
      name: "Basic",
      price: "CHF 599",
      duration: "2 Stunden",
      popular: false,
      features: [
        "2 Stunden Karaoke-Party",
        "2 Funkmikrofone",
        "Professionelle PA-Anlage",
        "Monitor für Songtexte",
        "50.000+ Songs Auswahl",
        "Technischer Support",
        "An- und Abreise inkl."
      ]
    },
    {
      name: "Party",
      price: "CHF 899",
      duration: "3 Stunden",
      popular: true,
      features: [
        "3 Stunden Karaoke-Party",
        "2-4 Funkmikrofone",
        "Premium PA-System",
        "Grosser LED-Monitor",
        "100.000+ Songs Auswahl",
        "Professionelle Moderation",
        "Lichteffekte & Ambience",
        "Playlist-Vorbereitung",
        "An- und Abreise inkl."
      ]
    },
    {
      name: "Premium",
      price: "CHF 1299",
      duration: "4 Stunden",
      popular: false,
      features: [
        "4 Stunden Entertainment",
        "4+ Funkmikrofone",
        "High-End Sound System",
        "Multiple Displays",
        "100.000+ Songs + Requests",
        "Star-Moderation",
        "Profi-Lichtshow",
        "DJ-Set inklusive",
        "Video-Aufnahme möglich",
        "VIP-Betreuung",
        "An- und Abreise inkl."
      ]
    }
  ];

  const addons = [
    { name: "Zusatzstunde", price: "CHF 199" },
    { name: "Extra Mikrofon", price: "CHF 49" },
    { name: "Nebelmaschine", price: "CHF 79" },
    { name: "Video-Recording", price: "CHF 299" },
    { name: "Custom Branding", price: "CHF 149" },
    { name: "DJ-Set (1h)", price: "CHF 249" }
  ];

  return (
    <>
      <Head>
        <title>Angebot & Preise – Zürioke</title>
        <meta name="description" content="Unsere Karaoke-Pakete und Preise. Von Basic bis Premium - finden Sie das perfekte Paket für Ihren Event." />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Unsere Pakete</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Massgeschneiderte Karaoke-Erlebnisse für jeden Anlass und jedes Budget
          </p>
        </div>

        {/* Packages */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {packages.map((pkg, i) => (
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
                    BELIEBTESTE WAHL
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
                  {pkg.features.map((feature, j) => (
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
                  Paket wählen
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
              Zusatzoptionen
            </h2>
            <p className="text-gray-400">
              Erweitern Sie Ihr Paket mit unseren beliebten Extras
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addons.map((addon, i) => (
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
            Häufige Fragen
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Wie weit im Voraus sollte ich buchen?",
                a: "Wir empfehlen eine Buchung mindestens 2-4 Wochen im Voraus, besonders für Wochenenden und Feiertage."
              },
              {
                q: "Ist die Anfahrt im Preis inbegriffen?",
                a: "Ja, die Anfahrt innerhalb des Grossraums Zürich ist in allen Paketen inklusive."
              },
              {
                q: "Können spezielle Songs angefragt werden?",
                a: "Absolut! Mit über 100.000 Songs haben wir fast alles. Spezielle Wünsche können vorab besprochen werden."
              },
              {
                q: "Wie viel Platz wird benötigt?",
                a: "Für unser Basic-Setup reichen etwa 4m². Für grössere Setups mit Lichtshow empfehlen wir 10-15m²."
              }
            ].map((faq, i) => (
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
              Noch Fragen zu unseren Paketen?
            </h2>
            <p className="text-gray-300 mb-6">
              Wir beraten Sie gerne und erstellen ein massgeschneidertes Angebot für Ihren Event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/buchen" 
                className="px-6 py-3 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
              >
                Jetzt anfragen
              </Link>
              <a 
                href="mailto:hello@zuerioke.ch" 
                className="px-6 py-3 border border-[#D4AF37]/30 text-white font-semibold rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}