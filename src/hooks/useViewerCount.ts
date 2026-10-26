'use client';

import { useEffect, useState } from 'react';
import { getViewerCount } from '@/lib/viewers';

const DURATION = 900;

/** Fetches the shared viewer count and counts up to it (ease-out cubic). */
export function useViewerCount(): number | null {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    let frame = 0;
    let cancelled = false;

    getViewerCount().then((total) => {
      if (cancelled || total === null) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setValue(total);
        return;
      }

      const started = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - started) / DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(total * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  return value;
}
