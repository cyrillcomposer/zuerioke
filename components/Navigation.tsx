// components/Navigation.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        className="flex flex-col items-center justify-center space-y-1 p-3 bg-yellow-400 hover:bg-yellow-500 rounded-md shadow-md min-w-[48px] min-h-[48px]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menü öffnen"
      >
        {menuOpen ? (
          <span className="text-black font-extrabold text-2xl leading-none">×</span>
        ) : (
          <>
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </>
        )}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-3 w-48 bg-yellow-100 text-black rounded-lg shadow-xl text-center"
          >
            <Link href="/" className="block px-4 py-2 hover:bg-yellow-200" onClick={() => setMenuOpen(false)}>Startseite</Link>
            <Link href="/angebot" className="block px-4 py-2 hover:bg-yellow-200" onClick={() => setMenuOpen(false)}>Angebot</Link>
            <Link href="/buchen" className="block px-4 py-2 hover:bg-yellow-200" onClick={() => setMenuOpen(false)}>Buchen</Link>
            <Link href="/ueber-uns" className="block px-4 py-2 hover:bg-yellow-200" onClick={() => setMenuOpen(false)}>Über uns</Link>
            <Link href="/testimonials" className="block px-4 py-2 hover:bg-yellow-200" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
