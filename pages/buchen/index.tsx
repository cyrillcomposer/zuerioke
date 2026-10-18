import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@vercel/analytics";
import { useTranslations, useLanguage } from "../../translations";
import Calendar from "../../components/Calendar";
import { getDateStatus } from "../../data/availability";

const FORMSPREE_URL = "https://formspree.io/f/mkgzqvdr";
const WHATSAPP_NUMBER = "41798135848";

const inputBase =
  "w-full bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors";

function isValidContact(value: string) {
  const v = value.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return true;
  return !v.includes("@") && v.replace(/\D/g, "").length >= 8;
}

export default function BuchenAnfrage() {
  const t = useTranslations();
  const { language } = useLanguage();
  const router = useRouter();

  const [kontakt, setKontakt] = useState("");
  const [datum, setDatum] = useState("");
  const [ort, setOrt] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [paket, setPaket] = useState("");
  const [extras, setExtras] = useState<string[]>([]);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  // Prefill the date from ?datum=YYYY-MM-DD (old links from /buchen/anfrage)
  useEffect(() => {
    if (!router.isReady) return;
    const d = router.query.datum;
    if (typeof d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d) && getDateStatus(d) !== "booked") {
      setDatum(d);
    }
  }, [router.isReady, router.query.datum]);

  const formatDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Intl.DateTimeFormat(language === "de" ? "de-CH" : "en-CH", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(y, m - 1, d));
  };

  const b = t.buchen;
  const packages = t.angebot.packages as Array<{ price: string }>;
  const addons = t.angebot.addons as Array<{ name: string; price: string }>;

  // "CHF 599" -> 599
  const parsePrice = (price: string) => parseInt(price.replace(/[^0-9]/g, ""), 10) || 0;
  const paketIndex = b.packages.indexOf(paket);
  const estimatedTotal =
    (paketIndex >= 0 && packages[paketIndex] ? parsePrice(packages[paketIndex].price) : 0) +
    extras.reduce((sum, name) => sum + parsePrice(addons.find((a) => a.name === name)?.price ?? ""), 0);

  const toggleExtra = (name: string) =>
    setExtras((prev) => (prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]));

  const whatsappText = [
    b.whatsappDefaultMessage,
    datum && `${b.whatsappDateLine}: ${formatDate(datum)}`,
    ort.trim() && `${b.whatsappLocationLine}: ${ort.trim()}`,
    paket && `${b.whatsappPackageLine}: ${paket}`,
    extras.length > 0 && `${b.whatsappExtrasLine}: ${extras.join(", ")}`,
    nachricht.trim() && `${b.whatsappCommentLine}: ${nachricht.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const value = kontakt.trim();
    if (!isValidContact(value)) {
      setError(b.contactInvalid);
      return;
    }
    setError("");

    // Honeypot: bots fill hidden fields, humans don't
    const honeypot = (new FormData(e.currentTarget).get("_gotcha") as string) || "";
    if (honeypot) {
      router.push("/thank-you");
      return;
    }

    setSending(true);
    try {
      const isEmail = value.includes("@");
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Neue Anfrage Zürioke",
          kontakt: value,
          email: isEmail ? value : "",
          telefon: isEmail ? "" : value,
          datum: datum ? formatDate(datum) : "",
          ort: ort.trim(),
          dauer: paket,
          extras_selected: extras.join(", "),
          richtpreis: estimatedTotal ? `CHF ${estimatedTotal}` : "",
          nachricht: nachricht.trim(),
          sprache: language,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("anfrage_gesendet", { mitDatum: !!datum });
      router.push("/thank-you");
    } catch {
      setError(b.sendFailed);
      setSending(false);
    }
  }

  return (
    <>
      <Head>
        <title>{b.meta.title}</title>
        <meta name="description" content={b.meta.description} />

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
                "telephone": "+41798135848",
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
        className="max-w-xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            <span className="gradient-text">{b.title}</span>
          </h1>
          <p className="text-lg text-gray-300">{b.subtitle}</p>
        </div>

        {/* WhatsApp — big and first */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_klick", { quelle: "buchen" })}
          className="group flex items-center gap-4 rounded-3xl bg-[#25D366] hover:bg-[#20bd5a] text-black p-5 sm:p-6 shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-0.5"
        >
          <span className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/10 flex items-center justify-center">
            <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          <span className="flex-1 min-w-0">
            <span className="block text-xl sm:text-2xl font-bold leading-tight">{b.whatsappTitle}</span>
            <span className="block text-sm sm:text-base text-black/70">{b.whatsappSubtitle}</span>
          </span>
          <svg
            className="flex-shrink-0 w-6 h-6 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-6-6l6 6-6 6" />
          </svg>
        </a>

        <div className="flex items-center gap-4 my-6 text-gray-500 text-sm uppercase tracking-widest">
          <span className="flex-1 h-px bg-white/10" />
          {b.or}
          <span className="flex-1 h-px bg-white/10" />
        </div>

        {/* Short form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/10 rounded-3xl p-5 sm:p-8 space-y-4"
        >
          {/* Honeypot */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          {/* Contact (required) */}
          <div>
            <label htmlFor="kontakt" className="block text-sm font-semibold text-white mb-2">
              {b.contactLabel} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
                id="kontakt"
                name="kontakt"
                type="text"
                inputMode="email"
                autoComplete="email tel"
                value={kontakt}
                onChange={(e) => {
                  setKontakt(e.target.value);
                  if (error) setError("");
                }}
                placeholder={b.contactPlaceholder}
                aria-invalid={!!error}
                className={`${inputBase} pl-12 pr-4 py-4`}
              />
            </div>
          </div>

          {/* Date (optional, via calendar) */}
          <div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setCalendarOpen((o) => !o)}
                aria-expanded={calendarOpen}
                className={`${inputBase} pl-12 pr-12 py-4 text-left ${datum ? "text-white" : "text-gray-500"}`}
              >
                {datum ? formatDate(datum) : b.dateLabel}
              </button>
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" />
              </svg>
              {datum && (
                <button
                  type="button"
                  onClick={() => setDatum("")}
                  aria-label={b.clearDate}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-gray-400 hover:text-white hover:bg-white/10 flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              )}
            </div>
            <AnimatePresence initial={false}>
              {calendarOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3">
                    <Calendar
                      onDateSelect={(d) => {
                        setDatum(d);
                        setCalendarOpen(false);
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Location (optional) */}
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              name="ort"
              type="text"
              autoComplete="off"
              value={ort}
              onChange={(e) => setOrt(e.target.value)}
              placeholder={b.locationLabel}
              aria-label={b.locationLabel}
              className={`${inputBase} pl-12 pr-4 py-4`}
            />
          </div>

          {/* Package (optional, click again to deselect) */}
          <div>
            <p className="block text-sm font-semibold text-white mb-2">{b.packageLabel}</p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {b.packages.map((pkg: string, idx: number) => {
                const selected = paket === pkg;
                return (
                  <button
                    key={pkg}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setPaket(selected ? "" : pkg)}
                    className={`relative flex flex-col items-center justify-center px-2 py-3 rounded-xl border transition-all ${
                      selected
                        ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]"
                        : "bg-white/5 border-white/10 hover:border-[#D4AF37]/50"
                    }`}
                  >
                    <span className="text-white font-medium text-sm sm:text-base">{pkg}</span>
                    {packages[idx] && <span className="text-[#D4AF37] text-xs sm:text-sm mt-0.5">{packages[idx].price}</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Extras (optional) */}
          <div>
            <p className="block text-sm font-semibold text-white mb-2">{b.extrasLabel}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {addons.map((addon) => {
                const selected = extras.includes(addon.name);
                return (
                  <button
                    key={addon.name}
                    type="button"
                    role="checkbox"
                    aria-checked={selected}
                    onClick={() => toggleExtra(addon.name)}
                    className={`flex sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-1 px-4 py-3 rounded-xl border text-left transition-all ${
                      selected
                        ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 border-[#D4AF37]"
                        : "bg-white/5 border-white/10 hover:border-[#D4AF37]/50"
                    }`}
                  >
                    <span className="text-white font-medium text-sm">{addon.name}</span>
                    <span className="text-[#D4AF37] text-xs">{addon.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {estimatedTotal > 0 && (
            <div className="flex items-baseline justify-between rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-3">
              <span className="text-sm text-gray-300">
                {b.estimatedTotal} <span className="text-gray-500">({b.estimatedTotalNote})</span>
              </span>
              <span className="text-lg font-bold gradient-text">CHF {estimatedTotal}</span>
            </div>
          )}

          {/* Comment (optional) */}
          <div className="relative">
            <svg className="absolute left-4 top-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h8M8 14h5m-9 6l1.8-3.6A8 8 0 1112 20H4z" />
            </svg>
            <textarea
              name="nachricht"
              rows={3}
              value={nachricht}
              onChange={(e) => setNachricht(e.target.value)}
              placeholder={b.commentLabel}
              aria-label={b.commentLabel}
              className={`${inputBase} pl-12 pr-4 py-4 resize-y`}
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="btn-gold btn-glow w-full py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
          >
            {sending ? b.sending : b.submitButton}
            {!sending && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            )}
          </button>
        </form>

        {/* Trust row */}
        <ul className="mt-8 grid grid-cols-3 gap-2 text-center text-sm text-gray-400">
          {b.trust.map((label: string, i: number) => (
            <li
              key={label}
              className={`flex flex-col items-center gap-2 px-1 ${i > 0 ? "border-l border-white/10" : ""}`}
            >
              <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {i === 0 && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 10h8M8 14h5m-9 6l1.8-3.6A8 8 0 1112 20H4z" />
                )}
                {i === 1 && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                )}
                {i === 2 && (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                )}
              </svg>
              {label}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
