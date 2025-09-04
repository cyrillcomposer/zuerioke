import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold tracking-tight text-lg">ZÜRIOKE</div>
          <p className="mt-3 text-sm text-gray-600 max-w-sm">
            Mobile Karaoke für Firmenanlässe, Hochzeiten und Partys im Raum Zürich.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Seiten</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/angebot" className="hover:underline">Angebot</Link></li>
            <li><Link href="/buchen" className="hover:underline">Buchen</Link></li>
            <li><Link href="/testimonials" className="hover:underline">Stimmen</Link></li>
            <li><Link href="/ueber-uns" className="hover:underline">Über uns</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Kontakt</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              Email: <a className="underline" href="mailto:hello@zuerioke.ch">hello@zuerioke.ch</a>
            </li>
            <li>
              Instagram: <a className="underline" href="https://instagram.com/zuerioke">@zuerioke</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} Zürioke</div>
    </footer>
  );
}