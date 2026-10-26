'use client';

import { useEffect, useState } from 'react';

/** Tracks which section sits under the top band of the viewport (replaces jQuery waypoints). */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
        const current = ids.find((id) => visible.get(id));
        if (current) setActive(current);
      },
      { rootMargin: '-150px 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
