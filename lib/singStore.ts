import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export type SingTarget = { url: string; updatedAt: string };

export async function getSingTarget(): Promise<SingTarget | null> {
  const data = await redis.hgetall<SingTarget>("sing");
  return data && data.url ? data : null;
}

export async function setSingTarget(url: string): Promise<SingTarget> {
  const updatedAt = new Date().toISOString();
  await redis.hset("sing", { url, updatedAt });
  return { url, updatedAt };
}
