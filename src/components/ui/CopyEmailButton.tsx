'use client';

import { useEffect, useState } from 'react';

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.prompt('Copy email address', email);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address"
      className="border-line bg-chip text-ink hover:border-accent-2 hover:text-accent focus-visible:border-accent-2 rounded-full border px-2.5 py-1 text-xs font-bold tracking-[0.06em] uppercase transition-colors"
    >
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}
