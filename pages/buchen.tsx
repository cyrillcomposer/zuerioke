import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "../translations";

export default function Buchen() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    package: "",
    extras: [] as string[]
  });

  const handlePackageSelect = (pkg: string) => {
    setFormData({ ...formData, package: pkg });
  };

  const handleExtraToggle = (extra: string) => {
    const newExtras = formData.extras.includes(extra)
      ? formData.extras.filter(e => e !== extra)
      : [...formData.extras, extra];
    setFormData({ ...formData, extras: newExtras });
  };

  const addons = t.angebot.addons;

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
            <span className="gradient-text">{t.buchen.title}</span>
          </h1>
          <p className="text-xl text-gray-300">
            {t.buchen.subtitle}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/10 rounded-3xl p-8 md:p-12">
          <form 
            className="space-y-8" 
            action="https://formspree.io/f/mkgzqvdr" 
            method="POST"
          >
            <input type="hidden" name="_redirect" value="https://zuerioke.ch/thank-you" />

            {/* Package Selection */}
            <div>
              <label className="block text-sm font-semibold text-white mb-4">
                {t.buchen.package}
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {t.buchen.packages.map((pkg: string) => (
                  <label
                    key={pkg}
                    className={`relative flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.package === pkg
                        ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]"
                        : "bg-white/5 border-white/10 hover:border-[#D4AF37]/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="dauer"
                      value={pkg}
                      checked={formData.package === pkg}
                      onChange={() => handlePackageSelect(pkg)}
                      className="sr-only"
                    />
                    <span className="text-white font-medium">{pkg}</span>
                    {formData.package === pkg && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2"
                      >
                        <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Extras Selection */}
            <div>
              <label className="block text-sm font-semibold text-white mb-4">
                {t.buchen.extrasTitle}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {addons.map((addon: { name: string; price: string }) => (
                  <label
                    key={addon.name}
                    className={`relative flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.extras.includes(addon.name)
                        ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]"
                        : "bg-white/5 border-white/10 hover:border-[#D4AF37]/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="extras"
                      value={addon.name}
                      checked={formData.extras.includes(addon.name)}
                      onChange={() => handleExtraToggle(addon.name)}
                      className="sr-only"
                    />
                    <span className="text-white font-medium text-sm">{addon.name}</span>
                    <span className="text-[#D4AF37] text-xs mt-1">{addon.price}</span>
                    {formData.extras.includes(addon.name) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2"
                      >
                        <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                  </label>
                ))}
              </div>
              <input type="hidden" name="extras_selected" value={formData.extras.join(', ')} />
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">{t.buchen.contactTitle}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder={t.buchen.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder={t.buchen.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.phone}
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder={t.buchen.phonePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.company}
                  </label>
                  <input
                    type="text"
                    name="firma"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder={t.buchen.companyPlaceholder}
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">{t.buchen.eventDetailsTitle}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.date} *
                  </label>
                  <input
                    type="date"
                    name="datum"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.time} *
                  </label>
                  <input
                    type="time"
                    name="zeit"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.eventType}
                  </label>
                  <input
                    type="text"
                    name="event_typ"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder={t.buchen.eventTypePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.guestCount}
                  </label>
                  <input
                    type="number"
                    name="gaeste"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder={t.buchen.guestCountPlaceholder}
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">{t.buchen.locationTitle}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.locationName} *
                  </label>
                  <input
                    type="text"
                    name="ort_name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder={t.buchen.locationNamePlaceholder}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.address} *
                  </label>
                  <input
                    type="text"
                    name="adresse"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder={t.buchen.addressPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.plz} *
                  </label>
                  <input
                    type="text"
                    name="plz"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder={t.buchen.plzPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.buchen.city} *
                  </label>
                  <input
                    type="text"
                    name="stadt"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder={t.buchen.cityPlaceholder}
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t.buchen.message}
              </label>
              <textarea
                name="nachricht"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                placeholder={t.buchen.messagePlaceholder}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 btn-glow"
              >
                {t.buchen.submitButton}
              </motion.button>
              <motion.button
                type="reset"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-[#D4AF37]/30 text-white font-semibold rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                {t.buchen.resetButton}
              </motion.button>
            </div>
          </form>
        </div>

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