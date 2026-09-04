import Head from "next/head";
import { FormEvent, useState } from "react";

type SingTarget = { url: string; updatedAt: string };
type Status = "idle" | "loading" | "error" | "success";

const ERROR_MESSAGES: Record<string, string> = {
  invalid_password: "Falsches Passwort.",
  invalid_url: "Das ist keine gültige URL.",
  must_be_https: "Der Link muss mit https:// beginnen.",
  storage_unavailable: "Speicher nicht erreichbar – bitte kurz nochmals versuchen.",
  method_not_allowed: "Unerwarteter Fehler.",
};

function formatTimestamp(iso: string) {
  try {
    return new Date(iso).toLocaleString("de-CH", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
}

export default function SingAdmin() {
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [current, setCurrent] = useState<SingTarget | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const urlLooksValid = (() => {
    try {
      return new URL(url).protocol === "https:";
    } catch {
      return false;
    }
  })();

  async function call(body: { password: string; url?: string }) {
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/sing-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(ERROR_MESSAGES[data.error] ?? "Unerwarteter Fehler.");
        return;
      }
      setCurrent(data.current ?? null);
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Verbindung fehlgeschlagen.");
    }
  }

  function handlePeek() {
    if (!password) {
      setStatus("error");
      setError("Bitte zuerst das Passwort eingeben.");
      return;
    }
    call({ password });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!password || !urlLooksValid) return;
    call({ password, url });
  }

  return (
    <>
      <Head>
        <title>Sing-Admin · ZÜRIOKE</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="page">
        <div className="card">
          <h1>KaraFun-Link aktualisieren</h1>
          <p className="hint">
            Trage hier zu Beginn des Events den aktuellen KaraFun-Session-Link ein. Der QR-Code
            auf <span className="hl">zuerioke.ch/sing</span> bleibt für die Gäste immer gleich —
            nur die Weiterleitung im Hintergrund ändert sich.
          </p>

          <label>
            Passwort
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </label>

          <button type="button" className="secondary" onClick={handlePeek} disabled={status === "loading"}>
            Aktuellen Link anzeigen
          </button>

          {current && (
            <div className="current">
              <div className="current-label">Aktuell aktiv:</div>
              <div className="current-url">{current.url}</div>
              <div className="current-time">Gesetzt am {formatTimestamp(current.updatedAt)}</div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label>
              Neuer KaraFun-Link
              <input
                type="url"
                placeholder="https://karafun.com/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                autoComplete="off"
              />
            </label>
            <button type="submit" className="primary" disabled={!password || !urlLooksValid || status === "loading"}>
              {status === "loading" ? "Speichern …" : "Speichern"}
            </button>
          </form>

          {status === "error" && <div className="msg error">{error}</div>}
          {status === "success" && <div className="msg success">Gespeichert.</div>}
        </div>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #050505;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
        }
        .card {
          width: 100%;
          max-width: 440px;
          background: #0f0f0f;
          border: 1px solid #d4af37;
          border-radius: 16px;
          padding: 28px;
          color: #eee;
        }
        h1 {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px;
        }
        .hint {
          font-size: 13px;
          line-height: 1.5;
          color: #999;
          margin: 0 0 20px;
        }
        .hl {
          color: #d4af37;
          font-weight: 600;
        }
        label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #d4af37;
          margin-bottom: 16px;
        }
        input {
          display: block;
          width: 100%;
          margin-top: 6px;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #333;
          background: #1a1a1a;
          color: #fff;
          font-size: 14px;
          font-family: inherit;
        }
        input:focus {
          outline: none;
          border-color: #d4af37;
        }
        button {
          font-family: inherit;
          font-weight: 600;
          font-size: 13.5px;
          border-radius: 999px;
          cursor: pointer;
          padding: 10px 18px;
        }
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .secondary {
          width: 100%;
          background: transparent;
          border: 1px solid #d4af37;
          color: #d4af37;
          margin-bottom: 8px;
        }
        .primary {
          width: 100%;
          background: linear-gradient(135deg, #f4e5a3, #d4af37);
          color: #000;
          border: none;
          margin-top: 4px;
        }
        .current {
          background: #161616;
          border: 1px solid #333;
          border-radius: 10px;
          padding: 12px 14px;
          margin-bottom: 20px;
          font-size: 13px;
        }
        .current-label {
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: 11px;
          margin-bottom: 4px;
        }
        .current-url {
          color: #d4af37;
          word-break: break-all;
          font-weight: 600;
        }
        .current-time {
          color: #666;
          margin-top: 4px;
          font-size: 12px;
        }
        .msg {
          margin-top: 14px;
          font-size: 13px;
          border-radius: 8px;
          padding: 10px 12px;
        }
        .msg.error {
          background: rgba(220, 60, 60, 0.15);
          color: #ff8080;
          border: 1px solid rgba(220, 60, 60, 0.4);
        }
        .msg.success {
          background: rgba(60, 200, 120, 0.15);
          color: #7ee0a0;
          border: 1px solid rgba(60, 200, 120, 0.4);
        }
      `}</style>
    </>
  );
}
