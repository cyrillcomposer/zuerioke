import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "../translations";

interface PriceCardsProps {
  /** Which package gets the highlight badge. Defaults to the middle one. */
  highlightIndex?: number;
  /** Overrides the badge text, e.g. "Beliebt für Weihnachtsfeiern". */
  highlightLabel?: string;
  className?: string;
}

export default function PriceCards({
  highlightIndex = 1,
  highlightLabel,
  className = "",
}: PriceCardsProps) {
  const t = useTranslations();
  const packages = t.angebot.packages.map(
    (
      pkg: { name: string; price: string; duration: string; features: string[]; originalPrice?: string },
      i: number
    ) => ({ ...pkg, popular: i === highlightIndex })
  );

  return (
    <div className={`grid gap-8 md:grid-cols-3 ${className}`}>
      {packages.map((pkg: any, i: number) => (
        <motion.div
          key={pkg.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className={`relative ${pkg.popular ? "md:-mt-4" : ""}`}
        >
          {pkg.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="px-4 py-1 bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black text-sm font-semibold rounded-full whitespace-nowrap">
                {highlightLabel ?? t.angebot.popular}
              </span>
            </div>
          )}
          <div
            className={`relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
              pkg.popular
                ? "border-[#D4AF37]/50 shadow-lg shadow-yellow-500/20"
                : "border-white/10"
            } hover:border-[#D4AF37]/30 transition-all duration-300 card-hover`}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              {pkg.originalPrice ? (
                <div className="mb-1">
                  <div className="text-lg text-gray-500 line-through mb-1">{pkg.originalPrice}</div>
                  <div className="text-4xl font-bold gradient-text">{pkg.price}</div>
                  <div className="text-sm text-[#F4E5A3] font-semibold mt-1">
                    {t.angebot.savingsText}{" "}
                    {(() => {
                      const original = parseInt(pkg.originalPrice.replace(/[^0-9]/g, ""));
                      const current = parseInt(pkg.price.replace(/[^0-9]/g, ""));
                      return `CHF ${original - current}`;
                    })()}
                    !
                  </div>
                </div>
              ) : (
                <div className="text-4xl font-bold gradient-text mb-1">{pkg.price}</div>
              )}
              <div className="text-gray-400">{pkg.duration}</div>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature: string, j: number) => (
                <li key={j} className="flex items-start text-gray-300">
                  <svg
                    className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/buchen"
              className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-r from-[#F4E5A3] to-[#D4AF37] text-black hover:shadow-lg hover:shadow-yellow-500/30"
                  : "border border-[#D4AF37]/30 text-white hover:bg-[#D4AF37]/10"
              }`}
            >
              {t.angebot.selectPackage}
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
