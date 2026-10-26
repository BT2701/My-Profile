export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix a path inside `public/` with the deploy base path (GitHub Pages serves under /My-Profile). */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
