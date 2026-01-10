import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage, useTranslations } from "../translations";

const getLinks = (t: ReturnType<typeof useTranslations>) => [
  { href: "/buchen", label: t.nav.buchen },
  { href: "/testimonials", label: t.nav.testimonials },
  { href: "/empfehlungen", label: t.nav.empfehlungen },
  { href: "/ueber-uns", label: t.nav.uberUns },
];

export default function Navigation() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAngebotExpanded, setMobileAngebotExpanded] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();
  const links = getLinks(t);

  const getEventLinks = () => {
    const basePath = language === 'de' ? '/angebot' : '/packages';
    return [
      { href: `${basePath}/${language === 'de' ? 'geburtstagsfeiern' : 'birthday-parties'}`, label: t.nav.angebotDropdown.birthdays },
      { href: `${basePath}/${language === 'de' ? 'firmenevents-teambuilding' : 'corporate-events-teambuilding'}`, label: t.nav.angebotDropdown.corporate },
      { href: `${basePath}/${language === 'de' ? 'hochzeiten-jubilaeen' : 'weddings-anniversaries'}`, label: t.nav.angebotDropdown.weddings },
      { href: `${basePath}/${language === 'de' ? 'jga-polterabende' : 'bachelor-bachelorette-parties'}`, label: t.nav.angebotDropdown.bachelor },
      { href: `${basePath}/${language === 'de' ? 'vereinsanlaesse-dorffeste' : 'club-events-village-festivals'}`, label: t.nav.angebotDropdown.clubs },
    ];
  };

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
          {/* Home Link */}
          <Link
            href="/"
            className="relative text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors group"
          >
            <span className="relative z-10">{t.nav.home}</span>
            {pathname === '/' && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${pathname === '/' ? 'hidden' : ''}`} />
          </Link>

          {/* Angebot Dropdown */}
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative"
          >
            <Link
              href="/angebot"
              className="relative text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors group flex items-center gap-1"
            >
              <span className="relative z-10">{t.nav.angebot}</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {pathname.startsWith('/angebot') && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${pathname.startsWith('/angebot') ? 'hidden' : ''}`} />
            </Link>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/20 rounded-xl shadow-lg overflow-hidden"
                >
                  <Link
                    href="/angebot"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                  >
                    {t.nav.angebotDropdown.overview}
                  </Link>
                  <div className="h-px bg-white/10" />
                  {getEventLinks().map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Links */}
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
              {/* Home Link */}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`py-2 text-lg font-medium transition-colors ${
                  pathname === '/'
                    ? 'text-[#D4AF37]'
                    : 'text-gray-300 hover:text-[#D4AF37]'
                }`}
              >
                {t.nav.home}
              </Link>

              {/* Angebot Collapsible */}
              <div>
                <button
                  onClick={() => setMobileAngebotExpanded(!mobileAngebotExpanded)}
                  className="w-full flex justify-between items-center py-2 text-lg font-medium text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  {t.nav.angebot}
                  <svg className={`w-5 h-5 transition-transform ${mobileAngebotExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {mobileAngebotExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 space-y-2 overflow-hidden"
                    >
                      <Link
                        href="/angebot"
                        onClick={() => setOpen(false)}
                        className="block py-2 text-gray-400 hover:text-[#D4AF37] transition-colors"
                      >
                        {t.nav.angebotDropdown.overview}
                      </Link>
                      {getEventLinks().map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-gray-400 hover:text-[#D4AF37] transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Links */}
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