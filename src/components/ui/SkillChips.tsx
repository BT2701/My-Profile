import { cn } from '@/lib/cn';

export function SkillChips({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)} aria-label="Technologies">
      {items.map((item) => (
        <li
          key={item}
          className="bg-chip text-accent rounded-full px-3 py-1.5 text-xs leading-normal font-semibold sm:text-[13px]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
