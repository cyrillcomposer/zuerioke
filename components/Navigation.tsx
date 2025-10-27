import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage, useTranslations } from "../translations";

const getLinks = (t: ReturnType<typeof useTranslations>) => [
  { href: "/", label: t.nav.home },
  { href: "/angebot", label: t.nav.angebot },
  { href: "/buchen", label: t.nav.buchen },
  { href: "/testimonials", label: t.nav.testimonials },
  { href: "/ueber-uns", label: t.nav.uberUns },
];

export default function Navigation() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();
  const links = getLinks(t);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl shadow-lg shadow-yellow-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="relative group flex items-center"
        >
          {/* Logo Image */}
          <Image 
            src="/zurioke-logo.png" 
            alt="ZÜRIOKE" 
            width={140} 
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors group"
            >
              <span className="relative z-10">{l.label}</span>
              {pathname === l.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${pathname === l.href ? 'hidden' : ''}`} />
            </Link>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
            <button
              onClick={() => setLanguage('de')}
              className={`text-lg transition-opacity ${language === 'de' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              aria-label="Deutsch"
              title="Deutsch"
            >
              🇩🇪
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`text-lg transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              aria-label="English"
              title="English"
            >
              🇬🇧
            </button>
          </div>

          <Link
            href="/buchen"
            className="relative overflow-hidden px-6 py-2.5 text-sm font-semibold text-black bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 btn-glow"
          >
            <span className="relative z-10">{t.nav.ctaButton}</span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Menü öffnen"
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-[#D4AF37]"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <motion.span 
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="block w-6 h-0.5 bg-[#D4AF37]"
            />
            <motion.span 
              animate={{ opacity: open ? 0 : 1 }}
              className="block w-6 h-0.5 bg-[#D4AF37]"
            />
            <motion.span 
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="block w-6 h-0.5 bg-[#D4AF37]"
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-[#D4AF37]/20"
          >
            <nav className="mx-auto max-w-7xl px-4 py-6 grid gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-lg font-medium transition-colors ${
                    pathname === l.href
                      ? 'text-[#D4AF37]'
                      : 'text-gray-300 hover:text-[#D4AF37]'
                  }`}
                >
                  {l.label}
                </Link>
              ))}

              {/* Language Toggle Mobile */}
              <div className="flex items-center gap-3 py-2">
                <span className="text-sm text-gray-400">Language:</span>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                  <button
                    onClick={() => setLanguage('de')}
                    className={`text-lg transition-opacity ${language === 'de' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                    aria-label="Deutsch"
                  >
                    🇩🇪
                  </button>
                  <span className="text-gray-600">|</span>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`text-lg transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                    aria-label="English"
                  >
                    🇬🇧
                  </button>
                </div>
              </div>

              <Link
                href="/buchen"
                onClick={() => setOpen(false)}
                className="inline-flex w-max items-center px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
              >
                {t.nav.ctaButton}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}