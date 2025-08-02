// pages/testimonials.tsx
import Navigation from "../components/Navigation";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-blue-500 text-white font-sans">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center font-[cursive] drop-shadow">🎉 Stimmen unserer Gäste</h1>

        <div className="space-y-12">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <Image src="/sandra.jpg" alt="Sandra M." width={80} height={80} className="rounded-full border border-white shadow-md" />
              <div>
                <p className="text-lg italic">„Ich hätte nie gedacht, dass unsere Firmenfeier so aus dem Ruder laufen könnte – im besten Sinne! Danke für die beste Karaoke-Nacht ever.“</p>
                <p className="mt-2 font-semibold">– Sandra M., HR-Managerin</p>
              </div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <Image src="/jonas.jpg" alt="Jonas K." width={80} height={80} className="rounded-full border border-white shadow-md" />
              <div>
                <p className="text-lg italic">„Professionell, sympathisch und einfach total fun. Unsere Gäste sprechen heute noch über die spontanen Duette!“</p>
                <p className="mt-2 font-semibold">– Jonas K., Eventplaner</p>
              </div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <Image src="/nico.jpg" alt="Laura & Nico" width={80} height={80} className="rounded-full border border-white shadow-md" />
              <div>
                <p className="text-lg italic">„Ich war skeptisch, ob Karaoke auf meiner Hochzeit passt – aber es war der Hit! Merci vielmal, Zürioke.“</p>
                <p className="mt-2 font-semibold">– Laura & Nico, frisch verheiratet</p>
              </div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <Image src="/remo.jpg" alt="Remo Z." width={80} height={80} className="rounded-full border border-white shadow-md" />
              <div>
                <p className="text-lg italic">„Selten so gelacht und gesungen. Danke für die perfekte Technik und das charmante Hosting!“</p>
                <p className="mt-2 font-semibold">– Remo Z., Geburtstagskind</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
