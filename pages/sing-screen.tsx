import Head from "next/head";
import QrStage, { QrStageCopy, Lang } from "../components/QrStage";

const TXT: Record<Lang, QrStageCopy> = {
  de: {
    headLine1: "Jetzt",
    headLine2: "mitsingen!",
    sub: "Scannt den Code, sucht euren Lieblingssong aus und tragt euch ein – wir rufen euch auf, wenn ihr dran seid.",
    scan: "Scannen & Song wählen",
    steps: ["QR scannen", "Song aussuchen", "Losjodeln"],
    footLead: "Viel Spass beim Mitsingen!",
  },
  en: {
    headLine1: "Ready to",
    headLine2: "sing along?",
    sub: "Scan the code, pick your favorite song, and add yourself to the queue — we'll call you up when it's your turn.",
    scan: "Scan & pick a song",
    steps: ["Scan the QR", "Choose a song", "Get singing"],
    footLead: "Have fun singing along!",
  },
};

export default function SingScreen() {
  return (
    <>
      <Head>
        <title>Mitsingen · ZÜRIOKE</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <QrStage
        copy={TXT}
        qrSrc="/sing-qr.svg"
        qrAlt="QR-Code für den Songwunsch-Link"
        fullscreenNote="Vollbild auf den zweiten Bildschirm legen · Esc beendet"
      />
    </>
  );
}
