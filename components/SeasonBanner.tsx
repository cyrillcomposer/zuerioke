import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations, useLanguage } from "../translations";

/**
 * Christmas-season banner.
 *
 * Every page here is statically generated, so a build-time date check would
 * freeze: the banner would still be there in January until the next deploy.
 * Instead it renders visible in the static HTML (correct for the season we
 * ship in, and no layout shift) and the browser hides it once the window has
 * passed. Worst case out of season is a brief flash before hydration.
 */
const START = { month: 9, day: 1 }; // 1 September
const END = { month: 12, day: 20 }; // 20 December
const DISMISS_KEY = "zuerioke:seasonBanner:dismissed";

function inSeason(now: Date) {
  const m = now.getMonth() + 1;
  const d = now.getDate();
  const afterStart = m > START.month || (m === START.month && d >= START.day);
  const beforeEnd = m < END.month || (m === END.month && d <= END.day);
  return afterStart && beforeEnd;
}

export default function SeasonBanner() {
  const t = useTranslations();
  const { language } = useLanguage();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // private mode / blocked storage — treat as not dismissed
    }
    if (dismissed || !inSeason(new Date())) setVisible(false);
  }, []);

  if (!visible) return null;

  const href = language === "de" ? "/weihnachtsfeier" : "/christmas-parties";

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // nothing to persist to — hiding for this render is enough
    }
  };

  return (
    <div className="relative z-20 bg-gradient-to-r from-[#F4E5A3] via-[#D4AF37] to-[#B8941F] text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 pr-10 sm:pr-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="text-sm font-medium">{t.seasonBanner.text}</span>
        <Link
          href={href}
          className="text-sm font-bold underline underline-offset-2 hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          {t.seasonBanner.linkText}
        </Link>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label={t.seasonBanner.dismiss}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-black/10 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
