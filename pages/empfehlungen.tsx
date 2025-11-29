import Head from "next/head";
import { motion } from "framer-motion";
import { useTranslations } from "../translations";

export default function Empfehlungen() {
  const t = useTranslations();

  const songs = {
    classics: [
      { song: "Beggin'", artist: "Måneskin" },
      { song: "Riptide", artist: "Vance Joy" },
      { song: "Alors on danse", artist: "Stromae" },
      { song: "Skyfall", artist: "James Bond (Adele)" },
      { song: "Jolene", artist: "Dolly Parton" },
      { song: "Anarchy in the U.K.", artist: "Sex Pistols" },
      { song: "Shallow", artist: "Lady Gaga & Bradley Cooper" },
      { song: "Can't Help Falling in Love", artist: "Elvis Presley" },
      { song: "Tequila", artist: "The Champs" },
    ],
    dance: [
      { song: "Be Mine", artist: "Ofenbach" },
      { song: "Stolen Dance", artist: "Milky Chance" },
      { song: "Blurred Lines", artist: "Robin Thicke" },
      { song: "When Love Takes Over", artist: "David Guetta" },
      { song: "Around the World", artist: "A Touch of Class" },
      { song: "Be My Lover (Radio E.)", artist: "La Bouche" },
      { song: "Blinding Lights", artist: "The Weeknd" },
      { song: "I Gotta Feeling", artist: "Black Eyed Peas" },
      { song: "I'm Good", artist: "David Guetta" },
      { song: "Watermelon Sugar", artist: "Harry Styles" },
    ],
    swissGerman: [
      { song: "Major Tom", artist: "Peter Schilling" },
      { song: "99 Luftballons", artist: "Nena" },
      { song: "Skandal im Sperrbezirk", artist: "Spider Murphy Gang" },
      { song: "Alpenrose", artist: "Polo Hofer" },
      { song: "Rosalie", artist: "Bligg" },
      { song: "Nur noch kurz die Welt retten", artist: "Tim Bendzko" },
      { song: "Hier kommt Alex", artist: "Die Toten Hosen" },
      { song: "Haus am See", artist: "Peter Fox" },
      { song: "Astronaut", artist: "Sido" },
    ],
    latin: [
      { song: "Ai se eu te pegu (live)", artist: "Michel Teló" },
      { song: "Balada Boa", artist: "Gusttavo Lima" },
      { song: "Pepas", artist: "Farruko" },
      { song: "Suavemente", artist: "Nossa" },
      { song: "Hips Don't Lie", artist: "Shakira & Wyclef Jean" },
      { song: "Jerusalema", artist: "Master KG & Zikode" },
      { song: "Lambada", artist: "Kaome" },
      { song: "Échame la Culpa", artist: "Luis Fonsi & Demi L" },
      { song: "La camisa negra", artist: "Juanes" },
    ],
    techno: [
      { song: "Creep Hardstyle (Remix)", artist: "Naeleck" },
      { song: "The Sound of Silence (Cyril remix)", artist: "Disturbed" },
      { song: "Thank you (not so bad)", artist: "Dimitri Vegas" },
      { song: "Ramp! (The Logical Song)", artist: "Scooter" },
      { song: "L'Amour Toujours", artist: "Gigi D'Agostino" },
      { song: "Vois sur ton chemin (techno remix)", artist: "Bennet" },
      { song: "Better Off Alone", artist: "Alice Deejay" },
      { song: "Sweet Dreams", artist: "Eurythmics" },
    ],
    hardRock: [
      { song: "Enter Sandman", artist: "Metallica" },
      { song: "Du Hast", artist: "Rammstein" },
      { song: "Thunderstruck", artist: "AC/DC" },
      { song: "Breaking the Law", artist: "Judas Priest" },
      { song: "Self Esteem", artist: "The Offspring" },
      { song: "Ace of Spades", artist: "Motörhead" },
      { song: "Kids in America", artist: "Kim Wilde" },
      { song: "The Passenger", artist: "Iggy Pop" },
    ],
    allTimeHits: [
      { song: "I Want It That Way", artist: "Backstreet Boys" },
      { song: "Bohemian Rhapsody", artist: "Queen" },
      { song: "Mamma Mia", artist: "Abba" },
      { song: "Sweet Caroline", artist: "Neil Diamond" },
      { song: "Wannabe", artist: "Spice Girls" },
      { song: "I Will Survive", artist: "Gloria Gaynor" },
      { song: "In the End", artist: "Linkin Park" },
      { song: "Baby One more Time", artist: "Britney Spears" },
      { song: "Hey Ya!", artist: "OutKast" },
    ],
    pop: [
      { song: "American Boy", artist: "Estelle & Kanye West" },
      { song: "Material girl", artist: "Madonna" },
      { song: "Girls Just Want to Have Fun", artist: "Cyndi Lauper" },
      { song: "Flowers", artist: "Miley Cyrus" },
      { song: "Another Love", artist: "Tom Odell" },
      { song: "Ice Ice Baby", artist: "Vanilla Ice" },
      { song: "Valerie", artist: "Amy Winehouse" },
      { song: "Summertime Sadness", artist: "Lana Del Rey" },
      { song: "Billie Jean", artist: "Michael Jackson" },
    ],
    sixties: [
      { song: "Yesterday", artist: "Beatles" },
      { song: "Piece of my Heart", artist: "Janis Joplin" },
      { song: "Respect", artist: "Aretha Franklin" },
      { song: "Surfin USA", artist: "The Beach Boys" },
      { song: "Satisfaction", artist: "The Rolling Stones" },
      { song: "Ring of Fire", artist: "Johnny Cash" },
      { song: "Sympathy for the Devil", artist: "The Rolling Stones" },
      { song: "No Milk Today", artist: "Herman's Hermits" },
      { song: "Son of a Preacher Man", artist: "Dusty Springfield" },
    ],
    nineties: [
      { song: "Don't Speak", artist: "No Doubt" },
      { song: "Zombie", artist: "The Cranberries" },
      { song: "Come as you are", artist: "Nirvana" },
      { song: "Basket Case", artist: "Green Day" },
      { song: "Losing My Religion", artist: "R.E.M." },
      { song: "Under the Bridge", artist: "Red Hot Chili Peppers" },
      { song: "Mr. Vain", artist: "Culture Beat" },
      { song: "Killing me Softly", artist: "The Fugees" },
      { song: "Creep", artist: "Radiohead" },
    ],
    frenchItalian: [
      { song: "Bella Ciao", artist: "Money Heist" },
      { song: "Non, je ne regrette rien", artist: "Edith Piaf" },
      { song: "Azzurro", artist: "Adriano Celentano" },
      { song: "Tu vuo' fa l'americano", artist: "Renato Carosone" },
      { song: "Ça plane pour moi", artist: "Plastic Bertrand" },
      { song: "L'Italiano", artist: "Toto Cutugno" },
      { song: "Je Veux", artist: "Zaz" },
      { song: "Dernière danse", artist: "Indila" },
      { song: "Papaoutai", artist: "Stromae" },
    ],
    christmas: [
      { song: "All I want for Christmas is you", artist: "Mariah Carey" },
      { song: "Last Christmas", artist: "Wham!" },
      { song: "Feliz Navidad", artist: "José Feliciano" },
      { song: "Hallelujah", artist: "Leonard Cohen" },
      { song: "Ghostbusters", artist: "Ray Parker Jr." },
      { song: "Thriller", artist: "Michael Jackson" },
      { song: "Somebody's Watching Me", artist: "Rockwell" },
    ],
  };

  const categories = [
    { key: 'classics', icon: '🎤', songs: songs.classics },
    { key: 'dance', icon: '💃', songs: songs.dance },
    { key: 'swissGerman', icon: '🇨🇭', songs: songs.swissGerman },
    { key: 'latin', icon: '🌶️', songs: songs.latin },
    { key: 'techno', icon: '🎧', songs: songs.techno },
    { key: 'hardRock', icon: '🤘', songs: songs.hardRock },
    { key: 'allTimeHits', icon: '⭐', songs: songs.allTimeHits },
    { key: 'pop', icon: '🎵', songs: songs.pop },
    { key: 'sixties', icon: '☮️', songs: songs.sixties },
    { key: 'nineties', icon: '📻', songs: songs.nineties },
    { key: 'frenchItalian', icon: '🗼', songs: songs.frenchItalian },
    { key: 'christmas', icon: '🎄', songs: songs.christmas },
  ];

  return (
    <>
      <Head>
        <title>{t.empfehlungen.meta.title}</title>
        <meta name="description" content={t.empfehlungen.meta.description} />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Zürioke – Song Empfehlungen" />
        <meta property="og:description" content="Entdecke unsere handverlesenen Karaoke-Song-Empfehlungen – Klassiker, Dance-Hits, Swiss Classics und mehr." />
        <meta property="og:url" content="https://zuerioke.ch/empfehlungen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zürioke Logo auf hellem Hintergrund" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zürioke – Song Empfehlungen" />
        <meta name="twitter:description" content="Entdecke unsere handverlesenen Karaoke-Song-Empfehlungen – Klassiker, Dance-Hits, Swiss Classics und mehr." />
        <meta name="twitter:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-20"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="gradient-text">{t.empfehlungen.title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          >
            {t.empfehlungen.subtitle}
          </motion.p>

          {/* Download PDF Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="/recommendation.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t.empfehlungen.downloadPdf}
          </motion.a>
        </div>

        {/* Song Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-xl font-semibold text-white">
                  {t.empfehlungen.categories[category.key as keyof typeof t.empfehlungen.categories]}
                </h2>
              </div>

              <ul className="space-y-2">
                {category.songs.map((song, i) => (
                  <li key={i} className="text-sm">
                    <span className="text-gray-300">{song.song}</span>
                    <span className="text-gray-500 ml-2">• {song.artist}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-[#D4AF37]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.empfehlungen.subtitle.includes('Unsere') ? 'Bereit für deine Karaoke-Party?' : 'Ready for your karaoke party?'}
            </h3>
            <p className="text-gray-400 mb-6">
              {t.empfehlungen.subtitle.includes('Unsere')
                ? 'Wir haben über 100.000 Songs für dein Event!'
                : 'We have over 100,000 songs for your event!'}
            </p>
            <a
              href="/buchen"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
            >
              {t.nav.ctaButton}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
