import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useTranslations } from "../../translations";
import Calendar from "../../components/Calendar";

export default function BuchenCalendar() {
  const t = useTranslations();
  const router = useRouter();

  function handleDateSelect(date: string) {
    router.push(`/buchen/anfrage?datum=${date}`);
  }

  return (
    <>
      <Head>
        <title>{t.buchen.meta.title}</title>
        <meta name="description" content={t.buchen.meta.description} />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Zürioke – Jetzt buchen" />
        <meta property="og:description" content="Buche jetzt deine mobile Karaoke Party in Zürich – einfach und schnell." />
        <meta property="og:url" content="https://zuerioke.ch/buchen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zürioke Logo auf hellem Hintergrund" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zürioke – Jetzt buchen" />
        <meta name="twitter:description" content="Buche jetzt deine mobile Karaoke Party in Zürich – einfach und schnell." />
        <meta name="twitter:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Karaoke Buchungsanfrage",
              "description": "Kontaktformular für mobile Karaoke Buchungen in Zürich",
              "url": "https://zuerioke.ch/buchen",
              "mainEntity": {
                "@type": "LocalBusiness",
                "name": "Zürioke",
                "telephone": "+41791234567",
                "email": "hello@zuerioke.ch",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Zürich",
                  "addressRegion": "ZH",
                  "addressCountry": "CH"
                }
              }
            })
          }}
        />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t.calendar.title}</span>
          </h1>
          <p className="text-xl text-gray-300">
            {t.calendar.subtitle}
          </p>
        </div>

        <Calendar onDateSelect={handleDateSelect} />

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 rounded-2xl p-6 backdrop-blur-sm border border-[#D4AF37]/20">
            <h3 className="text-lg font-semibold text-white mb-2">
              {t.buchen.infoTitle}
            </h3>
            <ol className="text-sm text-gray-300 space-y-2 max-w-2xl mx-auto text-left list-decimal list-inside">
              {t.buchen.infoSteps.map((step: string, i: number) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
