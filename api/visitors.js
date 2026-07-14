import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

export default async function handler(req, res) {
  const cookieHeader = req.headers.cookie || "";
  const hasVisited = cookieHeader
    .split(";")
    .some((c) => c.trim() === "visited=true");

  let count;
  if (!hasVisited) {
    count = await redis.incr("portfolio_visits");
    res.setHeader(
      "Set-Cookie",
      "visited=true; Max-Age=31536000; Path=/; SameSite=Lax"
    );
  } else {
    count = await redis.get("portfolio_visits");
  }

  res.status(200).json({ count });
}
