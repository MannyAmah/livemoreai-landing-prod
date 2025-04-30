const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export function rateLimit(ip: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;

  const existing = rateLimitMap.get(ip);

  if (existing) {
    if (existing.timestamp > windowStart) {
      if (existing.count >= maxRequests) {
        return false;
      }
      existing.count += 1;
      rateLimitMap.set(ip, existing);
      return true;
    }
  }

  // New window
  rateLimitMap.set(ip, { count: 1, timestamp: now });
  return true;
}
