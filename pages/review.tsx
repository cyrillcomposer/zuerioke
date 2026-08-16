import Head from "next/head";
import { useRef, useState } from "react";

type Variant = "dark" | "light";
type Lang = "de" | "en";

const TXT: Record<Lang, {
  headLine1: string;
  headLine2: string;
  sub: string;
  scan: string;
  s1: string;
  s2: string;
  s3: string;
  thanks: string;
}> = {
  de: {
    headLine1: "Wie war eure",
    headLine2: "Karaoke-Party?",
    sub: "Eure Bewertung hilft uns enorm – und dauert nur eine Minute.",
    scan: "Scannen & bewerten",
    s1: "Kamera öffnen",
    s2: "Link antippen",
    s3: "Sterne vergeben",
    thanks: "Danke fürs Mitsingen!",
  },
  en: {
    headLine1: "How was your",
    headLine2: "karaoke night?",
    sub: "Your review means a lot to us — and takes just one minute.",
    scan: "Scan & review",
    s1: "Open camera",
    s2: "Tap the link",
    s3: "Leave stars",
    thanks: "Thanks for singing with us!",
  },
};

export default function ReviewPage() {
  const [variant, setVariant] = useState<Variant>("dark");
  const [lang, setLang] = useState<Lang>("de");
  const stageRef = useRef<HTMLDivElement>(null);
  const t = TXT[lang];

  const goFullscreen = () => {
    const el = stageRef.current as (HTMLDivElement & { webkitRequestFullscreen?: () => void }) | null;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  };

  return (
    <>
      <Head>
        <title>Bewertung · ZÜRIOKE</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="page">
        <div className="bar">
          <div className="grp">
            <label>Variante</label>
            <button className={variant === "dark" ? "on" : ""} onClick={() => setVariant("dark")}>
              Schwarz
            </button>
            <button className={variant === "light" ? "on" : ""} onClick={() => setVariant("light")}>
              Weiss
            </button>
          </div>
          <div className="grp">
            <label>Text</label>
            <button className={lang === "de" ? "on" : ""} onClick={() => setLang("de")}>
              DE
            </button>
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>
              EN
            </button>
          </div>
          <button className="primary" onClick={goFullscreen}>
            Vollbild
          </button>
          <span className="note">Vollbild auf den Beamer legen · Esc beendet</span>
        </div>

        <div ref={stageRef} className={`stage ${variant}`}>
          <div className="edge top" />
          <div className="edge bot" />

          <div className="left">
            <div className="body">
              <div className="logo">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gold9" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F6E9B2" />
                      <stop offset="35%" stopColor="#D4AF37" />
                      <stop offset="65%" stopColor="#C9A227" />
                      <stop offset="100%" stopColor="#A8811A" />
                    </linearGradient>
                    <clipPath id="kopf9">
                      <rect x="148" y="26" width="104" height="170" rx="52" />
                    </clipPath>
                  </defs>
                  <circle cx="200" cy="200" r="200" fill="#000" />
                  <circle cx="200" cy="200" r="188" fill="none" stroke="url(#gold9)" strokeWidth="7" />
                  <circle cx="200" cy="200" r="169" fill="none" stroke="#fff" strokeWidth="5" />
                  <g>
                    <rect x="148" y="26" width="104" height="170" rx="52" fill="url(#gold9)" />
                    <g clipPath="url(#kopf9)" fill="#000">
                      <rect x="140" y="44" width="120" height="8" />
                      <rect x="140" y="64" width="120" height="8" />
                      <rect x="140" y="84" width="120" height="8" />
                      <rect x="140" y="104" width="120" height="8" />
                      <rect x="140" y="124" width="120" height="8" />
                      <rect x="140" y="144" width="120" height="8" />
                      <rect x="140" y="164" width="120" height="8" />
                    </g>
                    <path d="M176 196 h48 l-5 30 h-38 z" fill="url(#gold9)" />
                    <rect x="178" y="204" width="44" height="5" fill="#000" />
                    <rect x="180" y="215" width="40" height="5" fill="#000" />
                    <rect x="193" y="226" width="14" height="30" fill="url(#gold9)" />
                    <rect x="168" y="256" width="64" height="13" rx="5" fill="url(#gold9)" />
                  </g>
                  <g fill="url(#gold9)">
                    <ellipse cx="272" cy="152" rx="24" ry="18" transform="rotate(-22 272 152)" />
                    <rect x="288" y="76" width="9" height="72" />
                    <path d="M297 76 c22 12 30 26 22 46 c-2-18-10-26-22-32 z" />
                  </g>
                  <g fill="url(#gold9)" transform="rotate(38 300 210)">
                    <rect x="290" y="150" width="16" height="26" rx="4" />
                    <path d="M290 176 h16 l9 26 v52 a8 8 0 0 1 -8 8 h-18 a8 8 0 0 1 -8 -8 v-52 z" />
                    <rect x="286" y="212" width="24" height="5" fill="#000" />
                  </g>
                  <g fill="url(#gold9)">
                    <circle cx="322" cy="146" r="6" />
                    <circle cx="337" cy="134" r="4.5" />
                    <circle cx="330" cy="163" r="3.5" />
                  </g>
                  <path
                    d="M16 250 H384 L366 322 H34 Z"
                    fill="#000"
                    stroke="url(#gold9)"
                    strokeWidth="6"
                    strokeLinejoin="round"
                  />
                  <text
                    x="200"
                    y="308"
                    textAnchor="middle"
                    fill="#fff"
                    fontFamily="Georgia, 'Times New Roman', serif"
                    fontSize="66"
                    fontWeight="700"
                    letterSpacing="3"
                  >
                    ZÜRIOKE
                  </text>
                </svg>
              </div>

              <div className="stars">★★★★★</div>
              <h1>
                {t.headLine1}
                <br />
                <span className="gold">{t.headLine2}</span>
              </h1>
              <p className="sub">{t.sub}</p>

              <div className="steps">
                <div className="step">
                  <div className="n">1</div>
                  <span>{t.s1}</span>
                </div>
                <div className="step">
                  <div className="n">2</div>
                  <span>{t.s2}</span>
                </div>
                <div className="step">
                  <div className="n">3</div>
                  <span>{t.s3}</span>
                </div>
              </div>
            </div>

            <div className="foot">
              <span>{t.thanks}</span> &nbsp;·&nbsp; <span className="hl">www.zuerioke.ch</span> &nbsp;·&nbsp; @zuerioke
            </div>
          </div>

          <div className="right">
            <div className="qrframe">
              <img src="/review-qr.svg" alt="QR-Code zur Google-Bewertung" />
            </div>
            <div className="scanhint">{t.scan}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #050505;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
        }
        * {
          box-sizing: border-box;
        }

        .bar {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          max-width: 1400px;
          background: #0f0f0f;
          border: 1px solid #d4af37;
          border-radius: 12px;
          padding: 12px 14px;
          margin-bottom: 16px;
          color: #eee;
          font-size: 13px;
        }
        .grp {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .bar label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #d4af37;
        }
        .bar button {
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid #d4af37;
          background: transparent;
          color: #d4af37;
          font-weight: 600;
          font-size: 12.5px;
          cursor: pointer;
          font-family: inherit;
        }
        .bar button.on {
          background: linear-gradient(135deg, #f4e5a3, #d4af37);
          color: #000;
          border: none;
        }
        .bar button.primary {
          background: linear-gradient(135deg, #f4e5a3, #d4af37);
          color: #000;
          border: none;
        }
        .bar button:hover {
          opacity: 0.85;
        }
        .note {
          color: #888;
          font-size: 11px;
          margin-left: auto;
        }

        .stage {
          width: 100%;
          max-width: 1400px;
          aspect-ratio: 16 / 9;
          container-type: inline-size;
          position: relative;
          display: flex;
          align-items: stretch;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 6px 34px rgba(0, 0, 0, 0.3);
          padding: 4.5cqw 0;
        }
        .stage.dark {
          background: radial-gradient(ellipse at 30% 40%, #141414 0%, #050505 70%);
          color: #fff;
        }
        .stage.light {
          background: #fff;
          color: #111;
        }
        .stage.dark .sub {
          color: #a8a8a8;
        }
        .stage.light .sub {
          color: #5f5f5f;
        }
        .stage.dark .foot {
          color: #8f8f8f;
        }
        .stage.light .foot {
          color: #6b6b6b;
        }

        .edge {
          position: absolute;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          height: 2px;
          left: 6cqw;
          right: 6cqw;
          opacity: 0.7;
        }
        .edge.top {
          top: 4.5cqw;
        }
        .edge.bot {
          bottom: 4.5cqw;
        }

        .left {
          flex: 1.15;
          padding: 0 2cqw 0 8cqw;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }
        .body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 0;
        }
        .right {
          flex: 0.85;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-right: 8cqw;
        }

        .logo {
          margin-bottom: 1.8cqw;
        }
        .logo svg {
          height: 10.5cqw;
          width: 10.5cqw;
          display: block;
        }

        .stars {
          font-size: 2.8cqw;
          letter-spacing: 0.12em;
          color: #d4af37;
          margin-bottom: 1cqw;
        }
        h1 {
          font-size: 4.8cqw;
          line-height: 1.08;
          margin: 0 0 1.2cqw;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        h1 .gold {
          background: linear-gradient(135deg, #f4e5a3, #d4af37, #b8941f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sub {
          font-size: 1.9cqw;
          line-height: 1.45;
          max-width: 44cqw;
          margin: 0;
        }

        .steps {
          display: flex;
          gap: 1.6cqw;
          margin-top: 1.6cqw;
        }
        .step {
          display: flex;
          align-items: center;
          gap: 0.9cqw;
          font-size: 1.55cqw;
        }
        .step .n {
          width: 2.6cqw;
          height: 2.6cqw;
          border-radius: 50%;
          background: linear-gradient(135deg, #f4e5a3, #d4af37);
          color: #000;
          font-weight: 800;
          font-size: 1.5cqw;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: none;
        }

        .qrframe {
          background: #fff;
          padding: 1.7cqw;
          border-radius: 1.4cqw;
          box-shadow: 0 0 0 0.45cqw #d4af37, 0 1.5cqw 4cqw rgba(0, 0, 0, 0.45);
        }
        .qrframe img {
          display: block;
          width: 30cqw !important;
          height: 30cqw !important;
        }
        .scanhint {
          font-size: 1.8cqw;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #d4af37;
          margin-top: 2cqw;
          font-weight: 700;
          text-align: center;
        }

        .foot {
          margin-top: 2.4cqw;
          font-size: 1.5cqw;
          letter-spacing: 0.06em;
        }
        .hl {
          color: #d4af37;
          font-weight: 600;
        }

        .stage:fullscreen {
          border-radius: 0;
          aspect-ratio: auto;
          width: 100vw;
          height: 100vh;
          box-shadow: none;
        }
        .stage:-webkit-full-screen {
          border-radius: 0;
          width: 100vw;
          height: 100vh;
        }

        @media print {
          .bar {
            display: none !important;
          }
          .stage {
            box-shadow: none;
            border-radius: 0;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
