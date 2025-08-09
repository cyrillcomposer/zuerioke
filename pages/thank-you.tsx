// pages/thank-you.tsx
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-blue-500 text-white font-sans">
      <Navigation />
      <main className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6 font-[cursive] drop-shadow">🎉 Danke für deine Buchung!</h1>
        <p className="text-lg mb-10">Wir haben deine Nachricht erhalten und melden uns so schnell wie möglich bei dir.</p>
        <Link href="/">
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg rounded-xl shadow-md transition transform hover:scale-105">
            Zurück zur Startseite
          </button>
        </Link>
      </main>
    </div>
  );
}
