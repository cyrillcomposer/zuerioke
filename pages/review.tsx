import Head from "next/head";
import QrStage, { QrStageCopy, Lang } from "../components/QrStage";

const TXT: Record<Lang, QrStageCopy> = {
  de: {
    headLine1: "Wie war eure",
    headLine2: "Karaoke-Party?",
    sub: "Eure Bewertung hilft uns enorm – und dauert nur eine Minute.",
    scan: "Scannen & bewerten",
    steps: ["Kamera öffnen", "Link antippen", "Sterne vergeben"],
    footLead: "Danke fürs Mitsingen!",
  },
  en: {
    headLine1: "How was your",
    headLine2: "karaoke night?",
    sub: "Your review means a lot to us — and takes just one minute.",
    scan: "Scan & review",
    steps: ["Open camera", "Tap the link", "Leave stars"],
    footLead: "Thanks for singing with us!",
  },
};

export default function ReviewPage() {
  return (
    <>
      <Head>
        <title>Bewertung · ZÜRIOKE</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <QrStage
        copy={TXT}
        qrSrc="/review-qr.svg"
        qrAlt="QR-Code zur Google-Bewertung"
        badge="★★★★★"
        fullscreenNote="Vollbild auf den Beamer legen · Esc beendet"
      />
    </>
  );
}
