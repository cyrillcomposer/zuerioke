import Head from "next/head";

export default function Buchen() {
  return (
    <>
      <Head>
        <title>Buchungsanfrage – Zürioke</title>
      </Head>

      <h1 className="text-3xl sm:text-4xl font-serif tracking-tight">Buchungsanfrage</h1>
      <p className="mt-4 max-w-2xl text-gray-600">Fülle das Formular aus – wir melden uns in der Regel innert 24 Stunden.</p>

      <form className="mt-10 grid gap-6" action="https://formspree.io/f/mkgzqvdr" method="POST">
        <input type="hidden" name="_redirect" value="https://zuerioke.ch/thank-you" />

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Dein Name</label>
            <input type="text" name="name" required className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium">E-Mail</label>
            <input type="email" name="email" required className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Firma (optional)</label>
          <input type="text" name="firma" className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium">Datum</label>
            <input type="date" name="datum" required className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium">Zeit</label>
            <input type="time" name="zeit" required className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium">Dauer</label>
            <select name="dauer" required className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900">
              <option value="">Bitte wählen…</option>
              <option value="2h Basic Paket">2h – Basic Paket</option>
              <option value="3h Party Paket">3h – Party Paket</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Veranstaltungsort – Name</label>
            <input type="text" name="ort_name" required className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium">Strasse + Nr</label>
            <input type="text" name="adresse" required className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium">PLZ</label>
            <input type="text" name="plz" required className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium">Ort</label>
            <input type="text" name="stadt" required className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Nachricht (optional)</label>
          <textarea name="nachricht" rows={4} className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"></textarea>
        </div>

        <div>
          <button type="submit" className="inline-flex items-center rounded-full border border-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition">
            Anfrage senden
          </button>
        </div>
      </form>
    </>
  );
}