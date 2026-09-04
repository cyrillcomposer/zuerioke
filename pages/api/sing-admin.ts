import type { NextApiRequest, NextApiResponse } from "next";
import { getSingTarget, setSingTarget } from "../../lib/singStore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });

  const { password, url } = req.body as { password?: string; url?: string };
  if (!password || password !== process.env.SING_ADMIN_PASSWORD) {
    return res.status(401).json({ error: "invalid_password" });
  }

  if (!url) {
    try {
      return res.status(200).json({ current: await getSingTarget() });
    } catch {
      return res.status(502).json({ error: "storage_unavailable" });
    }
  }

  const trimmed = url.trim();
  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return res.status(400).json({ error: "invalid_url" });
  }
  if (parsed.protocol !== "https:") {
    return res.status(400).json({ error: "must_be_https" });
  }

  try {
    return res.status(200).json({ ok: true, current: await setSingTarget(trimmed) });
  } catch {
    return res.status(502).json({ error: "storage_unavailable" });
  }
}
