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
                href="https://wa.me/41798135848"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F4E5A3] hover:to-[#D4AF37] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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