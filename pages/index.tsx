import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zürioke – Karaoke für deinen Event</title>
        <meta name="description" content="Karaoke für Firmenanlässe & Partys in Zürich – inkl. Technik, Moderation und Songauswahl." />
      </Head>

      {/* HERO */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-serif">Karaoke, die deinen Event trägt.</h1>
          <p className="mt-6 text-lg text-gray-600">
            Wir bringen Bühne, Technik und Stimmung – für Teams, Hochzeiten und private Feiern im Raum Zürich.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/buchen" className="inline-flex items-center rounded-full border border-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition">Verfügbarkeit prüfen</Link>
            <Link href="/angebot" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium underline underline-offset-8">Angebot ansehen</Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-16 grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Alles aus einer Hand",
            text: "Komplette Infrastruktur mit Profi-Sound, Monitor, Mikrofonen und auf Wunsch Moderation.",
          },
          {
            title: "Schnell & unkompliziert",
            text: "Aufbau in kurzer Zeit, flexible Setups – vom kleinen Office bis zur grossen Bühne.",
          },
          {
            title: "Riesige Songauswahl",
            text: "Aktuelle Hits bis Klassiker. Wunschlisten im Voraus möglich.",
          },
        ].map((f) => (
          <div key={f.title} className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.text}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <div className="inline-flex items-center rounded-2xl border border-gray-200 p-6">
          <div className="text-left">
            <h4 className="text-xl font-semibold">Bereit zu singen?</h4>
            <p className="text-sm text-gray-600 mt-1">Sag uns Datum, Ort und ungefähre Dauer – wir melden uns mit einem passenden Vorschlag.</p>
          </div>
          <Link href="/buchen" className="ml-6 inline-flex items-center rounded-full border border-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition">Jetzt anfragen</Link>
        </div>
      </section>
    </>
  );
}