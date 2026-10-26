/* eslint-disable @next/next/no-img-element -- external, dynamically rendered SVG charts */
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';

const user = profile.githubUser;
const statsTheme =
  'hide_border=true&bg_color=0,12202b,1b3a4b&title_color=c4a04a&icon_color=8a97a0&text_color=e8e4dc';

export function Activity() {
  return (
    <Section id="activity">
      <SectionHeading eyebrow="Activity" title="GitHub" />
      <Reveal>
        <div className="card overflow-x-auto px-[18px] py-[22px] md:p-7">
          <a href={profile.github} target="_blank" rel="noopener">
            <img
              src={`https://ghchart.rshah.org/1b3a4b/${user}`}
              alt={`GitHub contribution chart for ${user}`}
              loading="lazy"
              className="h-auto max-w-full"
            />
          </a>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&${statsTheme}`}
              alt={`GitHub stats for ${user}`}
              loading="lazy"
              className="h-auto max-w-full"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&${statsTheme}`}
              alt={`Top languages for ${user}`}
              loading="lazy"
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
