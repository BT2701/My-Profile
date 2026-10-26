'use client';

import { useViewerCount } from '@/hooks/useViewerCount';

export function ViewerCount({ className }: { className?: string }) {
  const value = useViewerCount();
  return (
    <span className={className} aria-live="polite">
      {value === null ? '—' : value.toLocaleString('en-US')}
    </span>
  );
}
