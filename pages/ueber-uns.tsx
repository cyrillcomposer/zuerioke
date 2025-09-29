import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function UeberUns() {
  const team = [
    {
      name: "Marcel",
      role: "Sound Engineer & DJ",
      img: "/marcel.jpg",
      text: "Technikliebhaber, Sound-Enthusiast und unser Karaoke-DJ Nr. 1. Er bringt jede Box zum Klingen und sorgt für die perfekte Stimmung.",
      skills: ["Sound Engineering", "DJ-ing", "Event-Technik"],
    },
    {
      name: "Cyrill",
      role: "Entertainment Manager",
      img: "/cyrill.jpg",
      text: "Musiker durch und durch – mit Gespür für Töne, Texte und Emotion. Er bringt Herz in jedes Mikrofon und lässt jeden Auftritt glänzen.",
      skills: ["Moderation", "Musik-Kuration", "Crowd Animation"],
    }
  ];

  const values = [
    {
      icon: "💜",
      title: "Leidenschaft",
      text: "Wir lieben was wir tun und das spürt man bei jedem Event."
    },
    {
      icon: "⭐",
      title: "Qualität",
      text: "Nur das beste Equipment und professioneller Service für unsere Kunden."
    },
    {
      icon: "🎯",
      title: "Zuverlässigkeit",
      text: "Pünktlich, vorbereitet und immer mit einem Plan B in der Tasche."
    },
    {
      icon: "🎉",
      title: "Spass",
      text: "Bei uns steht der Spass im Vordergrund - für uns und unsere Gäste."
    }
  ];

  return (
    <>
      <Head>
        <title>Über uns – Zürioke</title>
        <meta name="description" content="Lernen Sie das Team hinter Zürioke kennen. Zwei Freunde, eine Leidenschaft: Unvergessliche Karaoke-Events." />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
            Über Zürioke
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Zwei Freunde, eine Mission: Wir bringen die Bühne zu dir und machen 
            jeden zum Star seiner eigenen Show.
          </p>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 rounded-3xl p-10 md:p-12 backdrop-blur-sm border border-[#D4AF37]/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unsere <span className="gradient-text">Geschichte</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Was als spontane Idee an einem lauen Sommerabend in Zürich begann, 
                ist heute zu einer der gefragtesten mobilen Karaoke-Services der Region geworden.
              </p>
              <p>
                Marcel und Cyrill, beide leidenschaftliche Musikliebhaber, erkannten schnell, 
                dass Karaoke mehr ist als nur Singen – es ist ein Erlebnis, das Menschen 
                verbindet, Hemmungen abbaut und unvergessliche Momente schafft.
              </p>
              <p>
                Mit dieser Vision starteten wir 2020 Zürioke. Seitdem haben wir über 500 Events 
                begleitet und Tausende von Menschen zum Strahlen gebracht. Von intimen 
                Geburtstagsfeiern bis zu grossen Firmenevents – jeder Auftritt ist für uns 
                eine neue Chance, Magie zu erschaffen.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Das Team
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] rounded-full blur-lg opacity-50"></div>
                    <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-[#D4AF37]/20">
                      <div className="w-full h-full bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/20 flex items-center justify-center">
                        <span className="text-5xl">{i === 0 ? "🎧" : "🎤"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#D4AF37] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6">{member.text}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 blur-3xl"></div>
            <div className="relative bg-black/50 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-[#D4AF37]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Warum <span className="gradient-text">Zürioke</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Erfahrung & Expertise</h3>
                  <ul className="space-y-3">
                    {[
                      "500+ erfolgreiche Events",
                      "Professionelles Equipment",
                      "Geschultes Personal",
                      "Flexible Lösungen"
                    ].map((item) => (
                      <li key={item} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service & Support</h3>
                  <ul className="space-y-3">
                    {[
                      "24h Antwortzeit",
                      "Kostenlose Beratung",
                      "Transparente Preise",
                      "Zufriedenheitsgarantie"
                    ].map((item) => (
                      <li key={item} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bereit für deine Karaoke-Party?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Lass uns gemeinsam deinen Event zu einem unvergesslichen Erlebnis machen.
          </p>
          <motion.a
            href="/buchen"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 btn-glow"
          >
            Jetzt Kontakt aufnehmen
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
}