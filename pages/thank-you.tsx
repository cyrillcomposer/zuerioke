import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="mx-auto max-w-2xl text-center py-20">
      <h1 className="text-3xl sm:text-4xl font-serif tracking-tight">Danke für deine Anfrage!</h1>
      <p className="mt-4 text-gray-600">Wir haben deine Nachricht erhalten und melden uns so schnell wie möglich bei dir.</p>
      <div className="mt-8">
        <Link href="/" className="inline-flex items-center rounded-full border border-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition">Zur Startseite</Link>
      </div>
    </div>
  );
}