import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useTranslations } from '../translations';
import Carousel from './Carousel';
import PriceCards from './PriceCards';

const GALLERY = ['/gallery4.jpg', '/gallery5.jpg', '/gallery1.jpg'];

export default function ChristmasPage() {
  const t = useTranslations();
  const router = useRouter();
  const c = t.weihnachten;

  return (
    <>
      <Head>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />

        <meta property="og:title" content={c.meta.ogTitle} />
        <meta property="og:description" content={c.meta.ogDescription} />
        <meta property="og:url" content={`https://zuerioke.ch${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.meta.ogTitle} />
        <meta name="twitter:description" content={c.meta.ogDescription} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: c.hero.title,
              serviceType: 'Karaoke Entertainment',
              description: c.meta.description,
              provider: { '@type': 'LocalBusiness', name: 'Zürioke' },
              areaServed: { '@type': 'City', name: 'Zürich' },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'CHF',
                lowPrice: '599',
                highPrice: '1299',
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: c.faqs.items.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            }),
          }}
        />
      </Head>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 hyphens-auto break-words">
            <span className="gradient-text">{c.hero.title}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{c.hero.subtitle}</p>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">{c.description.paragraph1}</p>
            <p className="text-lg text-gray-300 leading-relaxed">{c.description.paragraph2}</p>
          </div>
        </motion.div>

        <Carousel
          images={GALLERY.map((src) => ({ src, alt: c.hero.title }))}
          fit="video"
          className="max-w-4xl mx-auto mb-16"
          viewportClassName="rounded-2xl"
          sizes="(max-width: 1024px) 100vw, 896px"
        />

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">{c.benefits.title}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {c.benefits.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prices */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.pricing.title}</h2>
            <p className="text-gray-400">{c.pricing.subtitle}</p>
          </div>
          <PriceCards highlightIndex={1} highlightLabel={c.pricing.highlightLabel} />
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.availability.title}</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{c.availability.text}</p>
            <Link
              href="/buchen"
              className="inline-block px-8 py-3 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-semibold hover:bg-[#D4AF37]/10 transition-colors"
            >
              {c.availability.linkText}
            </Link>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">{c.faqs.title}</h2>
          <div className="space-y-4">
            {c.faqs.items.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#D4AF37]/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
          <p className="text-gray-300 mb-8">{c.cta.description}</p>
          <Link
            href="/buchen"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
          >
            {c.cta.buttonText}
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
