import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Buchen() {
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
        <title>Buchungsanfrage – Zürioke</title>
        <meta name="description" content="Buchen Sie jetzt Ihre unvergessliche Karaoke-Party. Schnell, einfach und unverbindlich." />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Buchungsanfrage</span>
          </h1>
          <p className="text-xl text-gray-300">
            Füllen Sie das Formular aus – wir melden uns innerhalb von 24 Stunden bei Ihnen.
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
                Gewünschtes Paket
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {["Basic (2h)", "Party (3h)", "Premium (4h)"].map((pkg) => (
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
                Zusatzoptionen (optional)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {addons.map((addon) => (
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
              <h3 className="text-lg font-semibold text-white mb-4">Kontaktdaten</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-Mail *
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="ihre.email@beispiel.ch"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Telefon
                  </label>
                  <input 
                    type="tel" 
                    name="telefon" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="+41 79 123 45 67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Firma (optional)
                  </label>
                  <input 
                    type="text" 
                    name="firma" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Firmenname"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Event-Details</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Datum *
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
                    Uhrzeit *
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
                    Art des Events
                  </label>
                  <select 
                    name="event_typ" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="Firmenevent">Firmenevent</option>
                    <option value="Geburtstag">Geburtstag</option>
                    <option value="Hochzeit">Hochzeit</option>
                    <option value="Privatparty">Privatparty</option>
                    <option value="Andere">Andere</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Anzahl Gäste (ca.)
                  </label>
                  <input 
                    type="number" 
                    name="gaeste" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="50"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Veranstaltungsort</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name der Location *
                  </label>
                  <input 
                    type="text" 
                    name="ort_name" 
                    required 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Restaurant, Club, Privatadresse..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Strasse und Hausnummer *
                  </label>
                  <input 
                    type="text" 
                    name="adresse" 
                    required 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Musterstrasse 123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    PLZ *
                  </label>
                  <input 
                    type="text" 
                    name="plz" 
                    required 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="8000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ort *
                  </label>
                  <input 
                    type="text" 
                    name="stadt" 
                    required 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Zürich"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nachricht / Spezielle Wünsche
              </label>
              <textarea 
                name="nachricht" 
                rows={4} 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                placeholder="Teilen Sie uns Ihre besonderen Wünsche oder Fragen mit..."
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
                Anfrage senden
              </motion.button>
              <motion.button
                type="reset"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-[#D4AF37]/30 text-white font-semibold rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                Formular zurücksetzen
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
              Was passiert nach Ihrer Anfrage?
            </h3>
            <ol className="text-sm text-gray-300 space-y-2 max-w-2xl mx-auto text-left list-decimal list-inside">
              <li>Wir prüfen Ihre Anfrage und die Verfügbarkeit</li>
              <li>Sie erhalten innerhalb von 24 Stunden eine Rückmeldung</li>
              <li>Wir besprechen alle Details telefonisch oder per E-Mail</li>
              <li>Sie erhalten ein massgeschneidertes Angebot</li>
              <li>Nach Ihrer Bestätigung ist der Termin fix gebucht</li>
            </ol>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}