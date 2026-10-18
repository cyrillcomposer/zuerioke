import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

// The old two-step flow lives on /buchen now. Keep this route so existing
// links and bookmarks (/buchen/anfrage?datum=YYYY-MM-DD) still work.
export default function BuchenAnfrageRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const datum = router.query.datum;
    router.replace(typeof datum === "string" ? `/buchen?datum=${encodeURIComponent(datum)}` : "/buchen");
  }, [router]);

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
}
