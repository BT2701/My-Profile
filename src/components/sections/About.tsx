import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { about, profile } from '@/data/profile';

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title={about.heading}>
        <div className="mb-[30px] text-base md:text-[17px] [&>p]:mb-4 [&>p]:max-w-[64ch]">
          <p>
            I&apos;m <strong>{profile.name}</strong>, a backend engineer at{' '}
            <a href={profile.company.url} target="_blank" rel="noopener">
              {profile.company.name}
            </a>
            . After the lead assigns a project, I receive the design document and requirements from
            Game Design and build the server-side game logic — 21 live titles so far, including one
            real-time multiplayer game.
          </p>
          <p>
            I work directly with GD on mechanics and balance, then with frontend on API integration
            after lead review. Since June 2026 I have also been building Suntek&apos;s AI-assisted
            QA platform alongside the game work, and I freelance at JA Gaming on a game-portal
            backend. Clean Architecture, a fair game economy, and services that stay fast under
            concurrency are the bar I hold.
          </p>
        </div>
      </SectionHeading>

      <div className="mt-2 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {about.focus.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <div className="card hover-lift h-full px-[22px] pt-[26px] pb-[22px] transition-[transform,box-shadow] duration-[450ms] ease-(--ease-out-expo) hover:-translate-y-1.5 hover:shadow-(--shadow-lift) md:min-h-[204px]">
              <span className="text-gold mb-4 block text-xs font-bold tracking-[0.16em]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-2.5 text-[22px]">{item.title}</h3>
              <p className="m-0 text-sm">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
