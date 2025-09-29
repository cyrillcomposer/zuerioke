import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThankYou() {
  const [confetti, setConfetti] = useState<Array<{id: number, x: number, delay: number}>>([]);

  useEffect(() => {
    // Create confetti particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setConfetti(particles);
  }, []);

  return (
    <>
      <Head>
        <title>Danke für Ihre Anfrage – Zürioke</title>
        <meta name="description" content="Vielen Dank für Ihre Buchungsanfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen." />
      </Head>

      <div className="relative min-h-[80vh] flex items-center justify-center">
        {/* Animated confetti background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {confetti.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ y: -20, x: `${particle.x}%`, opacity: 0 }}
              animate={{ 
                y: "100vh", 
                opacity: [0, 1, 1, 0],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 3,
                delay: particle.delay,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600"
              style={{ left: `${particle.x}%` }}
            />
          ))}
        </div>

        {/* Success icon animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.2
          }}
          className="absolute top-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative text-center px-4 max-w-2xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Vielen Dank</span>
            <span className="block text-white mt-2">für Ihre Anfrage!</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 text-gray-300"
          >
            <p className="text-xl">
              Ihre Buchungsanfrage wurde erfolgreich übermittelt.
            </p>
            <p>
              Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 
              <span className="text-pink-500 font-semibold"> 24 Stunden </span>
              bei Ihnen melden.
            </p>
          </motion.div>

          {/* What's next section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              Was passiert als Nächstes?
            </h2>
            <div className="space-y-3 text-left max-w-md mx-auto">
              {[
                { step: "1", text: "Wir prüfen Ihre Anfrage und Verfügbarkeit" },
                { step: "2", text: "Sie erhalten eine persönliche Rückmeldung" },
                { step: "3", text: "Gemeinsame Besprechung aller Details" },
                { step: "4", text: "Bestätigung und let's party!" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/" 
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 btn-glow"
            >
              Zur Startseite
            </Link>
            <Link 
              href="/angebot" 
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Pakete ansehen
            </Link>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-12 text-sm text-gray-400"
          >
            <p className="mb-2">Bei dringenden Fragen erreichen Sie uns unter:</p>
            <a 
              href="mailto:hello@zuerioke.ch" 
              className="text-pink-500 hover:text-pink-400 transition-colors"
            >
              hello@zuerioke.ch
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-12 flex items-center justify-center gap-2"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-400 ml-3">
              <span className="text-white font-semibold">500+</span> zufriedene Kunden
            </span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}