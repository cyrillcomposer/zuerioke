import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/angebot", label: "Angebot" },
  { href: "/buchen", label: "Buchen" },
  { href: "/testimonials", label: "Stimmen" },
  { href: "/ueber-uns", label: "Über uns" },
];

export default function Navigation() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? 'bg-black/90 backdrop-blur-xl shadow-lg shadow-pink-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="relative group"
        >
          <span className="text-2xl font-bold text-white tracking-wider relative z-10">
            ZÜRI<span className="text-pink-500">OKE</span>
          </span>
          <motion.div 
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 w-0 group-hover:w-full transition-all duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
            >
              <span className="relative z-10">{l.label}</span>
              {pathname === l.href && (
                <motion.div 
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${pathname === l.href ? 'hidden' : ''}`} />
            </Link>
          ))}
          <Link
            href="/buchen"
            className="relative overflow-hidden px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 btn-glow"
          >
            <span className="relative z-10">Jetzt anfragen</span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Menü öffnen"
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <motion.span 
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span 
              animate={{ opacity: open ? 0 : 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span 
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="block w-6 h-0.5 bg-white"
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
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <nav className="mx-auto max-w-7xl px-4 py-6 grid gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-lg font-medium transition-colors ${
                    pathname === l.href 
                      ? 'text-pink-500' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/buchen"
                onClick={() => setOpen(false)}
                className="inline-flex w-max items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              >
                Jetzt anfragen
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}