import { cn } from '@/lib/cn';

const base =
  'inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-[22px] py-3 text-sm font-semibold tracking-[0.04em] whitespace-nowrap transition-colors duration-300';

const variants = {
  solid:
    'bg-ink text-white hover:bg-accent hover:text-white focus-visible:bg-accent focus-visible:text-white',
  outline:
    'border border-ink/28 text-ink hover:border-accent hover:bg-accent/8 hover:text-accent focus-visible:border-accent focus-visible:text-accent',
} as const;

export function buttonClass(variant: keyof typeof variants = 'solid', className?: string): string {
  return cn(base, variants[variant], className);
}
