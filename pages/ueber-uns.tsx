// pages/ueber-uns.tsx
import Image from "next/image";
import Navigation from "../components/Navigation";

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-blue-500 text-white font-sans">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center font-[cursive] drop-shadow">Über uns</h1>

        <p className="mb-10 text-lg text-center">
          Zürioke wurde von zwei Freunden gegründet, die Musik und gute Stimmung lieben. Unser Ziel:
          Menschen mit Karaoke zum Strahlen zu bringen – ob an Firmenevents, Geburtstagen oder Hochzeiten.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-full">
              <Image
                src="/marcel.jpg"
                alt="Marcel"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <h2 className="text-2xl font-semibold">Marcel</h2>
            <p className="text-sm text-white mt-2">
              Technikliebhaber, Sound-Enthusiast und unser Karaoke-DJ Nr. 1. Er bringt jede Box zum Klingen und sorgt für die perfekte Stimmung.
            </p>
          </div>

          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-full">
              <Image
                src="/cyrill.jpg"
                alt="Cyrill"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <h2 className="text-2xl font-semibold">Cyrill</h2>
            <p className="text-sm text-white mt-2">
              Musiker durch und durch – mit Gespür für Töne, Texte und Emotion. Er bringt Herz in jedes Mikrofon und lässt jeden Auftritt glänzen.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
