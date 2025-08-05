// pages/buchen.tsx
import Head from "next/head";
import Navigation from "../components/Navigation";

export default function Buchen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 text-gray-900 font-sans px-4 py-10">
      <Head>
        <title>Buchungsanfrage – Zürioke</title>
      </Head>

      <Navigation />

      <div className="max-w-2xl mx-auto space-y-8 mt-10">
        <h1 className="text-4xl font-extrabold text-center mb-6 font-[cursive]">📅 Buchungsanfrage</h1>

        <form className="space-y-6" action="https://formspree.io/f/mkgzqvdr" method="POST">
          <div>
            <label className="block font-semibold mb-1">Dein Name</label>
            <input type="text" name="name" required className="w-full p-2 rounded border border-gray-300" />
          </div>

          <div>
            <label className="block font-semibold mb-1">E-Mail</label>
            <input type="email" name="email" required className="w-full p-2 rounded border border-gray-300" />
          </div>

          <div>
            <label className="block font-semibold mb-1">Firma</label>
            <input type="text" name="firma" className="w-full p-2 rounded border border-gray-300" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Datum</label>
              <input type="date" name="datum" required className="w-full p-2 rounded border border-gray-300" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Zeit</label>
              <input type="time" name="zeit" required className="w-full p-2 rounded border border-gray-300" />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Dauer</label>
            <select name="dauer" required className="w-full p-2 rounded border border-gray-300">
              <option value="">Bitte wählen…</option>
              <option value="2h Basic Paket">2h – Basic Paket</option>
              <option value="3h Party Paket">3h – Party Paket</option>
            </select>
          </div>

          <div className="grid gap-4">
            <div>
              <label className="block font-semibold mb-1">Veranstaltungsort – Name</label>
              <input type="text" name="ort_name" required className="w-full p-2 rounded border border-gray-300" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Strasse + Nr</label>
              <input type="text" name="adresse" required className="w-full p-2 rounded border border-gray-300" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">PLZ</label>
                <input type="text" name="plz" required className="w-full p-2 rounded border border-gray-300" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Ort</label>
                <input type="text" name="stadt" required className="w-full p-2 rounded border border-gray-300" />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Nachricht (optional)</label>
            <textarea name="nachricht" rows={4} className="w-full p-2 rounded border border-gray-300"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg rounded-xl shadow-md transition transform hover:scale-105">
              Anfrage senden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
