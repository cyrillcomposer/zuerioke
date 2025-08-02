// pages/angebot.tsx
import Head from "next/head";
import Navigation from "../components/Navigation";

export default function Angebot() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200 text-gray-900 font-sans px-4 py-10 relative">
      <Head>
        <title>Angebot – Zürioke</title>
      </Head>

      <Navigation />

      <div className="max-w-3xl mx-auto space-y-10 mt-10">
        <h1 className="text-5xl font-extrabold text-center mb-6 font-[cursive]">🎶 Unser Angebot</h1>

        <p className="text-lg text-center">
          Ob Firmenfeier, Geburtstag oder Gartenparty – Zürioke bringt die Musik zu dir!
          Wir sorgen für gute Stimmung, professionelles Equipment und unvergessliche Karaoke-Erlebnisse.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white/60 rounded-xl shadow-md p-6 backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-2">🎤 Basic-Paket</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>2 Stunden Karaoke-Betreuung</li>
              <li>Lautsprecher & Mikrofon(e)</li>
              <li>Bildschirm mit Songtexten</li>
              <li>Playlist-Auswahl vorab möglich</li>
            </ul>
          </div>

          <div className="bg-white/60 rounded-xl shadow-md p-6 backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-2">🎉 Party-Paket</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>3 Stunden Karaoke mit Moderator</li>
              <li>2 Mikrofone + Funkverbindung</li>
              <li>Lichteffekte & Nebelmaschine</li>
              <li>Individualisierte Songauswahl</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href="/buchen">
            <button className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl shadow-md transition transform hover:scale-105">
              Jetzt buchen
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
