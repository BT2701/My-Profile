const BASE = 4999;
const API = 'https://abacus.jasoncameron.dev';
const NAMESPACE = 'bt2701-portfolio-views';
const KEY = 'visits';
const SESSION_FLAG = 'portfolio-session-counted';
const SESSION_COUNT = 'portfolio-view-count';

function readSession(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key: string, value: string): void {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Storage may be blocked (private mode); the count still renders.
  }
}

async function fetchCount(increment: boolean): Promise<number> {
  const response = await fetch(`${API}/${increment ? 'hit' : 'get'}/${NAMESPACE}/${KEY}`, {
    cache: 'no-store',
  });
  if (!response.ok) throw new Error('counter unavailable');
  const data: { value?: number } = await response.json();
  return BASE + Number(data.value ?? 0);
}

async function loadCount(): Promise<number | null> {
  const counted = Boolean(readSession(SESSION_FLAG));
  const cached = Number(readSession(SESSION_COUNT) ?? 0);
  if (counted && cached) return cached;

  try {
    const total = await fetchCount(!counted);
    writeSession(SESSION_FLAG, '1');
    writeSession(SESSION_COUNT, String(total));
    return total;
  } catch {
    return cached || null;
  }
}

let pending: Promise<number | null> | null = null;

/** Every counter on the page shares one request, so a visit is counted once per session. */
export function getViewerCount(): Promise<number | null> {
  pending ??= loadCount();
  return pending;
}
