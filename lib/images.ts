/** Local SVGs in /public need unoptimized — Next.js Image skips the optimizer for them */
export function imageNeedsUnoptimized(src: string): boolean {
  return src.startsWith("/") && src.endsWith(".svg");
}
