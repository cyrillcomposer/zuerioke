import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
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
