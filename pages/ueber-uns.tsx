import Image from "next/image";

export default function UeberUns() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-serif tracking-tight">Über uns</h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        Zürioke wurde von zwei Freunden gegründet, die Musik und gute Stimmung lieben. Unser Ziel: Menschen mit Karaoke zum Strahlen zu bringen.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {[{
          name: "Marcel",
          img: "/marcel.jpg",
          text: "Technikliebhaber, Sound-Enthusiast und unser Karaoke-DJ Nr. 1. Er bringt jede Box zum Klingen und sorgt für die perfekte Stimmung.",
        }, {
          name: "Cyrill",
          img: "/cyrill.jpg",
          text: "Musiker durch und durch – mit Gespür für Töne, Texte und Emotion. Er bringt Herz in jedes Mikrofon und lässt jeden Auftritt glänzen.",
        }].map((p) => (
          <div key={p.name} className="grid grid-cols-[96px_1fr] gap-6 items-start">
            <div className="relative w-24 h-24 overflow-hidden rounded-full border border-gray-200">
              <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="mt-2 text-sm text-gray-700">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}