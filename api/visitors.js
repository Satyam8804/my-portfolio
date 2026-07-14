import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  // parse existing cookie
  const cookieHeader = req.headers.cookie || '';
  const hasVisited = cookieHeader.includes('visited=true');

  let count;
  if (!hasVisited) {
    count = await redis.incr('portfolio_visits');
    res.setHeader('Set-Cookie', 'visited=true; Max-Age=31536000; Path=/; SameSite=Lax');
  } else {
    count = await redis.get('portfolio_visits');
  }

  res.status(200).json({ count });
}