import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionProps = { id: string; children: ReactNode; className?: string };

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-[3.5em] md:py-[5.5em]', className)}>
      <div className="content-narrow">{children}</div>
    </section>
  );
}
