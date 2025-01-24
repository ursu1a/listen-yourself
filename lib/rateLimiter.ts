const rateLimitMap = new Map<string, number[]>();
const MAX_REQUESTS = 2; // Maximum number of requests
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

export const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const updatedTimestamps = timestamps.filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  updatedTimestamps.push(now);
  rateLimitMap.set(ip, updatedTimestamps);

  return updatedTimestamps.length > MAX_REQUESTS;
};
