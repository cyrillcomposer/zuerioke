import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-xl">ZÜRIOKE</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition hover:opacity-70 underline-offset-8 ${
                pathname === l.href ? "underline" : "no-underline"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/buchen"
            className="inline-flex items-center rounded-full border border-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition"
          >
            Jetzt anfragen
          </Link>
        </nav>

        {/* Mobile */}
        <button
          aria-label="Menü öffnen"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-300 w-10 h-10"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i-heroicons-bars-3 w-5 h-5">≡</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-4 grid gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-1 ${pathname === l.href ? "font-semibold underline" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/buchen"
              onClick={() => setOpen(false)}
              className="inline-flex w-max items-center rounded-full border border-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition"
            >
              Jetzt anfragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
