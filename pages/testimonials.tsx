export default function Testimonials() {
  const quotes = [
    {
      name: "Sandra M.",
      role: "HR-Managerin",
      text:
        "Ich hätte nie gedacht, dass unsere Firmenfeier so aus dem Ruder laufen könnte – im besten Sinne! Die beste Karaoke-Nacht ever.",
    },
    {
      name: "Jonas K.",
      role: "Eventplaner",
      text:
        "Professionell, sympathisch und einfach total fun. Unsere Gäste sprechen heute noch über die spontanen Duette!",
    },
    {
      name: "Laura & Nico",
      role: "Hochzeitspaar",
      text: "Ich war skeptisch – aber es war der Hit! Merci vielmal, Zürioke.",
    },
    {
      name: "Remo Z.",
      role: "Geburtstagskind",
      text: "Selten so gelacht und gesungen. Technik top, Hosting charmant!",
    },
  ];

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-serif tracking-tight">Stimmen</h1>
      <p className="mt-4 max-w-2xl text-gray-600">Was unsere Gäste über uns sagen.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {quotes.map((q) => (
          <figure key={q.name} className="rounded-2xl border border-gray-200 p-6">
            <blockquote className="text-lg leading-relaxed">“{q.text}”</blockquote>
            <figcaption className="mt-4 text-sm text-gray-600">— {q.name}{q.role ? `, ${q.role}` : ""}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}