'use client';

import { Mail, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { ViewerCount } from '@/components/ui/ViewerCount';
import { navItems, profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

const sectionIds = navItems.map((item) => item.id);

const quickLinks = [
  { label: 'Resume', href: asset(profile.resume) },
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
];

const socials = [
  { label: 'GitHub', href: profile.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const asideRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';

    const close = () => setOpen(false);
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!asideRef.current?.contains(target) && !toggleRef.current?.contains(target)) close();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className={cn(
          'text-ink fixed top-[env(safe-area-inset-top)] left-0 z-[1100] flex size-14 items-center justify-center rounded-br-xl transition-[left,background-color] duration-[450ms] ease-(--ease-out-expo) md:hidden',
          open
            ? 'text-cream left-[calc(min(86vw,var(--sidebar-width))-56px)] bg-transparent'
            : 'bg-paper/96',
        )}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div
        aria-hidden
        className={cn(
          'fixed inset-0 z-[1000] bg-[rgb(12_18_22/0.46)] backdrop-blur-[4px] transition-opacity duration-300 md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <aside
        ref={asideRef}
        id="site-nav"
        aria-label="Profile and navigation"
        className={cn(
          'bg-sidebar fixed inset-y-0 left-0 z-[1050] flex h-dvh w-[min(86vw,var(--sidebar-width))] flex-col overflow-x-hidden overflow-y-auto px-6 pt-[calc(4.5em+env(safe-area-inset-top))] pb-[calc(24px+env(safe-area-inset-bottom))] transition-transform duration-[450ms] ease-(--ease-out-expo) md:h-screen md:w-(--sidebar-width) md:translate-x-0 md:px-7 md:pt-9 md:pb-7',
          open ? 'translate-x-0' : 'max-md:-translate-x-full',
        )}
      >
        <div>
          <div
            role="img"
            aria-label={`Portrait of ${profile.name}`}
            className="border-gold/45 mb-5 size-[92px] rounded-full border-2 bg-cover bg-center shadow-[0_0_0_6px_rgb(255_255_255/0.03)]"
            style={{ backgroundImage: `url(${asset(profile.avatar)})` }}
          />
          <p className="text-sand mb-3.5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase">
            <span
              aria-hidden
              className="bg-online size-2 rounded-full shadow-[0_0_0_4px_rgb(94_194_122/0.16)]"
            />
            {profile.status}
          </p>
          <p className="mb-1.5 font-serif text-[28px] leading-[1.15] font-semibold tracking-[-0.03em]">
            <a href="#top" className="text-cream hover:text-cream">
              {profile.name}
            </a>
          </p>
          <p className="text-gold m-0 text-xs font-bold tracking-[0.14em] uppercase">
            {profile.role}
          </p>
          <p className="text-sidebar-muted mt-2 mb-4 text-[13px]">
            {profile.company.name} · {profile.location}
          </p>

          <div className="border-cream/10 bg-cream/4 mb-[22px] flex items-baseline justify-between gap-3 rounded-[10px] border px-3 py-2.5">
            <span className="text-sidebar-muted text-[11px] font-bold tracking-[0.1em] uppercase">
              Profile viewers
            </span>
            <ViewerCount className="text-cream font-serif text-xl font-semibold tracking-[-0.02em]" />
          </div>

          <div className="mb-8 flex flex-wrap gap-3.5">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="text-cream hover:text-gold focus-visible:text-gold border-gold/50 border-b pb-0.5 text-xs font-semibold tracking-[0.08em] uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Sections" className="flex-1">
          <ul>
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="mb-0.5 text-[13px] tracking-[0.14em] uppercase">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'group relative block py-2 pl-4 font-sans transition-colors',
                      isActive ? 'text-cream' : 'text-sidebar-muted hover:text-cream',
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        'bg-gold absolute top-1/2 left-0 h-px w-2.5 origin-left transition-transform duration-300',
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <footer className="text-sidebar-muted pt-6 text-xs">
          <ul className="mb-4 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener"
                  aria-label={label}
                  className="text-cream hover:text-gold hover:border-gold/50 focus-visible:text-gold border-cream/12 inline-flex size-9 items-center justify-center rounded-full border text-base"
                >
                  <Icon width={16} height={16} />
                </a>
              </li>
            ))}
          </ul>
          <p className="mb-1.5">
            <small>
              &copy; {new Date().getFullYear()} {profile.name}
            </small>
          </p>
        </footer>
      </aside>
    </>
  );
}
