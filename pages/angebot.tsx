import Head from "next/head";

export default function Angebot() {
  return (
    <>
      <Head>
        <title>Angebot – Zürioke</title>
      </Head>

      <h1 className="text-3xl sm:text-4xl font-serif tracking-tight">Unser Angebot</h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        Ob Firmenfeier, Geburtstag oder Hochzeit – wir bringen die Karaoke-Party dorthin, wo ihr seid. Zwei beliebte Pakete zur Orientierung:
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">Basic-Paket</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li>2 Stunden Karaoke-Betreuung</li>
            <li>1–2 Mikrofone, Monitor/TV für Songtexte</li>
            <li>Profi-Lautsprecher</li>
            <li>Playlist-Auswahl vorab möglich</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">Party-Paket</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li>3 Stunden Karaoke mit Moderation</li>
            <li>2 Funkmikrofone</li>
            <li>Lichteffekte</li>
            <li>Individualisierte Songauswahl</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold">Optionen</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700 list-disc pl-5">
          <li>Zusatzstunde(n)</li>
          <li>Grössere PA für grosse Räume</li>
          <li>DJ-Set im Anschluss</li>
          <li>Branding/Logo auf Startscreen</li>
        </ul>
      </div>
    </>
  );
}