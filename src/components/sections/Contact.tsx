import type { ReactNode } from 'react';
import { ContactForm } from '@/components/ui/ContactForm';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { contact, profile } from '@/data/profile';

function ContactCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Reveal className="bg-card border-line mb-4 rounded-2xl border px-[22px] py-[18px]">
      <span className="eyebrow mb-1 block tracking-[0.14em]">{label}</span>
      <div className="text-ink m-0 flex flex-wrap items-center justify-between gap-3 text-base md:flex-nowrap md:text-[17px]">
        {children}
      </div>
    </Reveal>
  );
}

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title={contact.heading}>
        <p className="-mt-[1.6em] mb-8 max-w-[48ch] text-base">{contact.lead}</p>
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-[5fr_7fr]">
        <div>
          <ContactCard label="Email">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <CopyEmailButton email={profile.email} />
          </ContactCard>
          <ContactCard label="Location">
            {profile.location}, {profile.country}
          </ContactCard>
          <ContactCard label="Phone">
            <a href={`tel:${profile.phone.tel}`}>{profile.phone.display}</a>
          </ContactCard>
          <div className="text-cream mt-2 rounded-2xl bg-[linear-gradient(145deg,#12202b_0%,#1b3a4b_100%)] px-[26px] py-7">
            <p className="text-gold mb-2 text-[11px] tracking-[0.16em] uppercase">
              {contact.hireLabel}
            </p>
            <p className="text-cream m-0 font-serif text-[22px] leading-[1.35] font-semibold">
              {contact.hire}
            </p>
          </div>
        </div>
        <Reveal>
          <ContactForm email={profile.email} />
        </Reveal>
      </div>
    </Section>
  );
}
