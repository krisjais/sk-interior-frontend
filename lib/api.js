/**
 * Centralised API configuration.
 * All frontend components must import from here — never hardcode URLs.
 *
 * NEXT_PUBLIC_API_URL     → e.g. http://localhost:5000/api  (or /api via next.config.js rewrite)
 * NEXT_PUBLIC_BACKEND_URL → e.g. http://localhost:5000      (for /uploads image paths)
 */

export const API =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const BACKEND =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

/**
 * Resolve an image URL that may be a backend /uploads path or an external URL.
 */
export function resolveImageSrc(url) {
  if (!url) return '';
  if (url.startsWith('/uploads')) return `${BACKEND}${url}`;
  return url;
}
