import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useTranslations } from '../translations';

interface EventPageTemplateProps {
  eventType: 'birthdays' | 'corporate' | 'weddings' | 'bachelor' | 'clubs';
}

export default function EventPageTemplate({ eventType }: EventPageTemplateProps) {
  const t = useTranslations();
  const router = useRouter();
  const content = t.eventPages[eventType];

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content={content.meta.ogTitle} />
        <meta property="og:description" content={content.meta.ogDescription} />
        <meta property="og:url" content={`https://zuerioke.ch${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zuerioke.ch/og/zuerioke-share-1200x630.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.ogTitle} />
        <meta name="twitter:description" content={content.meta.ogDescription} />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": content.hero.title,
              "serviceType": "Karaoke Entertainment",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Zürioke"
              },
              "areaServed": {
                "@type": "City",
                "name": "Zürich"
              }
            })
          }}
        />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{content.hero.title}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {content.hero.subtitle}
          </p>
        </div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              {content.description.paragraph1}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {content.description.paragraph2}
            </p>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="aspect-video rounded-2xl border-2 border-[#D4AF37]/30 flex items-center justify-center bg-gradient-to-br from-black/50 to-[#D4AF37]/10">
            <span className="text-2xl text-gray-500">{content.imagePlaceholder}</span>
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            {content.benefits.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.benefits.items.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 card-hover"
              >
                {/* Icon placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Examples Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {content.examples.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.examples.items.map((example, i) => (
              <div
                key={i}
                className="flex items-start bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <svg className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">{example}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            {content.faqs.title}
          </h2>

          <div className="space-y-4">
            {content.faqs.items.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#D4AF37]/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 rounded-3xl p-10 backdrop-blur-sm border border-[#D4AF37]/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {content.cta.title}
            </h2>
            <p className="text-gray-300 mb-6">
              {content.cta.description}
            </p>
            <Link
              href={`${content.cta.buttonLink}?event=${eventType}`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
            >
              {content.cta.buttonText}
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
