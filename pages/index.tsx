// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-blue-500 text-white font-sans">
      <Head>
        <title>Zürioke – Karaoke für deinen Event</title>
      </Head>

      <Navigation />

      <header className="text-center py-10">
        <Image src="/logo.png" alt="Zürioke Logo" width={380} height={380} className="mx-auto mb-4 drop-shadow-lg" />
        <p className="text-xl font-light italic">Karaoke für Firmenanlässe & Partys in Zürich</p>
      </header>

      <main className="max-w-4xl mx-auto px-4 space-y-20">
        <section className="text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-pink-100 font-[cursive] drop-shadow">🎤 Was ist Zürioke?</h2>
          <p className="text-lg">
            Wir bringen die Karaoke-Party zu dir! Mit kompletter Infrastruktur, Technik
            und auf Wunsch einem charmanten Moderator – für unvergessliche Firmenanlässe,
            Geburtstage oder andere Feiern.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/angebot">
            <div className="bg-white/20 hover:bg-white/30 p-6 rounded-2xl shadow-xl backdrop-blur-md transition transform hover:scale-105 cursor-pointer text-center">
              <h3 className="text-2xl font-semibold font-[cursive] mb-2">🎁 Angebot</h3>
              <p>Alles rund um Technik, Optionen und Preise</p>
            </div>
          </Link>
          <Link href="/buchen">
            <div className="bg-white/20 hover:bg-white/30 p-6 rounded-2xl shadow-xl backdrop-blur-md transition transform hover:scale-105 cursor-pointer text-center">
              <h3 className="text-2xl font-semibold font-[cursive] mb-2">📝 Buchen</h3>
              <p>Formular zur unkomplizierten Anfrage</p>
            </div>
          </Link>
          <Link href="/ueber-uns">
            <div className="bg-white/20 hover:bg-white/30 p-6 rounded-2xl shadow-xl backdrop-blur-md transition transform hover:scale-105 cursor-pointer text-center">
              <h3 className="text-2xl font-semibold font-[cursive] mb-2">👋 Über uns</h3>
              <p>Marcel & Cyrill – wer steckt hinter Zürioke?</p>
            </div>
          </Link>
          <Link href="/testimonials">
            <div className="bg-white/20 hover:bg-white/30 p-6 rounded-2xl shadow-xl backdrop-blur-md transition transform hover:scale-105 cursor-pointer text-center">
              <h3 className="text-2xl font-semibold font-[cursive] mb-2">🌟 Stimmen</h3>
              <p>Was unsere Gäste über uns sagen</p>
            </div>
          </Link>
        </section>

        <section className="flex justify-center">
          <div className="bg-white/20 hover:bg-white/30 p-6 rounded-2xl shadow-xl backdrop-blur-md transition transform hover:scale-105 text-center max-w-md">
            <h2 className="text-3xl font-bold mb-4 font-[cursive]">📍 Kontakt</h2>
            <p className="mb-2">Email: <a className="underline text-white hover:text-yellow-300" href="mailto:hello@zuerioke.ch">hello@zuerioke.ch</a></p>
            <p>Instagram: <a className="underline text-white hover:text-pink-200" href="https://instagram.com/zuerioke">@zuerioke</a></p>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm py-6 opacity-70">
        © 2025 Zürioke – Karaoke made in Zürich 🎶
      </footer>
    </div>
  );
}
