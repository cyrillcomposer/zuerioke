import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "../translations";

export default function ThankYou() {
  const t = useTranslations();
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
        <title>{t.thankYou.meta.title}</title>
        <meta name="description" content={t.thankYou.meta.description} />
        <meta name="robots" content="noindex, nofollow" />
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
              className="absolute w-2 h-2 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37]"
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] rounded-full flex items-center justify-center">
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
            <span className="gradient-text">{t.thankYou.title}</span>
            <span className="block text-white mt-2">{t.thankYou.subtitle}</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 text-gray-300"
          >
            <p className="text-xl">
              {t.thankYou.message1}
            </p>
            <p>
              {t.thankYou.message2}{' '}
              <span className="text-[#D4AF37] font-semibold">{t.thankYou.timeframe}</span>{' '}
              {t.thankYou.message2.includes('innerhalb von') ? 'bei Ihnen melden.' : 'contact you.'}
            </p>
          </motion.div>

          {/* What's next section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              {t.thankYou.nextStepsTitle}
            </h2>
            <div className="space-y-3 text-left max-w-md mx-auto">
              {t.thankYou.steps.map((item: { text: string }, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0">
                    {i + 1}
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
              className="px-6 py-3 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 btn-glow"
            >
              {t.thankYou.homeButton}
            </Link>
            <Link
              href="/angebot"
              className="px-6 py-3 border border-[#D4AF37]/30 text-white font-semibold rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              {t.thankYou.packagesButton}
            </Link>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-12 text-sm text-gray-400"
          >
            <p className="mb-2">{t.thankYou.urgentText}</p>
            <a
              href="mailto:hello@zuerioke.ch"
              className="text-[#D4AF37] hover:text-[#F4E5A3] transition-colors"
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
                  className="w-8 h-8 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] rounded-full border-2 border-black flex items-center justify-center text-black text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-400 ml-3">
              <span className="text-white font-semibold">500+</span> {t.thankYou.socialProof}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}