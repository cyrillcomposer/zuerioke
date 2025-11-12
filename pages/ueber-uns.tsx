import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "../translations";

export default function UeberUns() {
  const t = useTranslations();
  const team = t.uberUns.team;
  const values = t.uberUns.values;

  const valueIcons = ["💜", "⭐", "🎯", "🎉"];

  return (
    <>
      <Head>
        <title>{t.uberUns.meta.title}</title>
        <meta name="description" content={t.uberUns.meta.description} />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Zürioke – Über uns" />
        <meta property="og:description" content="Lerne das Team hinter Zürichs mobilem Karaoke-Service kennen – Profis mit Leidenschaft für Entertainment." />
        <meta property="og:url" content="https://zuerioke.ch/ueber-uns" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zürioke Logo auf hellem Hintergrund" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zürioke – Über uns" />
        <meta name="twitter:description" content="Lerne das Team hinter Zürichs mobilem Karaoke-Service kennen – Profis mit Leidenschaft für Entertainment." />
        <meta name="twitter:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Über Zürioke",
              "description": "Mobile Karaoke Service in Zürich seit 2020",
              "url": "https://zuerioke.ch/ueber-uns",
              "mainEntity": {
                "@type": "Organization",
                "name": "Zürioke",
                "foundingDate": "2020",
                "founders": [
                  {
                    "@type": "Person",
                    "name": "Marcel",
                    "jobTitle": "Sound Engineer & DJ"
                  },
                  {
                    "@type": "Person",
                    "name": "Cyrill",
                    "jobTitle": "Entertainment Manager"
                  }
                ],
                "numberOfEmployees": 2,
                "areaServed": "Zürich",
                "knowsAbout": ["Karaoke", "Event-Technik", "Sound Engineering", "Entertainment"]
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
            {t.uberUns.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.uberUns.subtitle}
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
              {t.uberUns.storyTitle} <span className="gradient-text">{t.uberUns.storyTitle === 'Unsere' ? 'Geschichte' : 'story'}</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {t.uberUns.story.map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
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
            {t.uberUns.teamTitle}
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {team.map((member: { name: string; role: string; text: string; skills: string[] }, i: number) => (
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
                    {member.skills.map((skill: string) => (
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
            {t.uberUns.valuesTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value: { title: string; text: string }, i: number) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{valueIcons[i]}</div>
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
                {t.uberUns.whyTitle} <span className="gradient-text">Zürioke</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">{t.uberUns.experienceTitle}</h3>
                  <ul className="space-y-3">
                    {t.uberUns.experienceItems.map((item: string) => (
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
                  <h3 className="text-xl font-semibold text-white mb-4">{t.uberUns.serviceTitle}</h3>
                  <ul className="space-y-3">
                    {t.uberUns.serviceItems.map((item: string) => (
                      <li key={item} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            {t.uberUns.ctaTitle}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.uberUns.ctaDescription}
          </p>
          <motion.a
            href="/buchen"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 btn-glow"
          >
            {t.uberUns.ctaButton}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
}