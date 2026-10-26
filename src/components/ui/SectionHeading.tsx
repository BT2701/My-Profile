import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = { eyebrow: string; title: string; children?: ReactNode };

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <Reveal>
      <span className="text-accent mb-[15px] block text-xs font-bold tracking-[0.22em] uppercase">
        {eyebrow}
      </span>
      <h2 className="mb-[0.9em] text-[clamp(26px,7vw,32px)] tracking-[-0.03em] md:mb-[1.2em] md:text-4xl">
        {title}
      </h2>
      {children}
    </Reveal>
  );
}
