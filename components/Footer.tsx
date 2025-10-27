import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "../translations";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="relative border-t border-[#D4AF37]/20 bg-black/50 backdrop-blur-xl">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image 
                src="/zurioke-logo.png" 
                alt="ZÜRIOKE" 
                width={120} 
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-sm">
              {t.footer.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a 
                href="https://instagram.com/zuerioke" 
                className="group relative w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F4E5A3] hover:to-[#D4AF37] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a 
                href="mailto:hello@zuerioke.ch" 
                className="group relative w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F4E5A3] hover:to-[#D4AF37] transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <div className="text-sm font-semibold text-white mb-4">{t.footer.pagesTitle}</div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/angebot" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  {t.nav.angebot}
                </Link>
              </li>
              <li>
                <Link href="/buchen" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  {t.nav.buchen}
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  {t.nav.testimonials}
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  {t.nav.uberUns}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white mb-4">{t.footer.contactTitle}</div>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                {t.footer.email}
                <a className="text-[#D4AF37] hover:text-[#F4E5A3] ml-1 transition-colors" href="mailto:hello@zuerioke.ch">
                  hello@zuerioke.ch
                </a>
              </li>
              <li className="text-gray-400">
                {t.footer.instagram}
                <a className="text-[#D4AF37] hover:text-[#F4E5A3] ml-1 transition-colors" href="https://instagram.com/zuerioke">
                  @zuerioke
                </a>
              </li>
              <li className="text-gray-400">
                {t.footer.location}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <motion.div
            className="text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t.footer.madeWith} <span className="text-[#D4AF37]">♪</span> in Zürich
          </motion.div>
        </div>
      </div>
    </footer>
  );
}