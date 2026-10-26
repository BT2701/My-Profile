import { MoreProjects } from '@/components/ui/MoreProjects';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillChips } from '@/components/ui/SkillChips';
import { featuredWork, moreProjects, workCards, workHeading } from '@/data/projects';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

const featuredTone = {
  primary: 'bg-[linear-gradient(135deg,rgb(27_58_75/0.06),transparent_48%)]',
  gold: 'bg-[linear-gradient(135deg,rgb(196_160_74/0.08),transparent_48%)]',
};

export function Work() {
  return (
    <Section id="work">
      <SectionHeading eyebrow="Selected work" title={workHeading} />

      <div className="mb-9 grid gap-6 lg:grid-cols-2">
        {featuredWork.map((item) => (
          <Reveal key={item.title} className={cn(item.wide && 'lg:col-span-2')}>
            <article
              className={cn(
                'card h-full px-[18px] py-[22px] md:px-[34px] md:py-8',
                featuredTone[item.tone],
              )}
            >
              <p className="eyebrow mb-2">{item.label}</p>
              <h3 className="mb-2.5 text-[22px] sm:text-[26px]">{item.title}</h3>
              <p className="mb-[18px] max-w-[68ch]">{item.body}</p>
              {item.links && (
                <p className="mb-4 flex flex-wrap gap-x-4 gap-y-2.5">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                      className="text-[13px] font-bold tracking-[0.02em]"
                    >
                      {link.label}
                    </a>
                  ))}
                </p>
              )}
              <SkillChips items={item.stack} />
            </article>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-5 md:gap-7 lg:grid-cols-2">
        {workCards.map((card, index) => (
          <Reveal key={card.title} delay={(index % 2) * 0.06}>
            <a
              href={card.href}
              target="_blank"
              rel="noopener"
              className="group card hover-lift block h-full overflow-hidden rounded-[20px] text-inherit transition-[transform,box-shadow] duration-500 ease-(--ease-out-expo) hover:-translate-y-2 hover:text-inherit hover:shadow-(--shadow-lift-lg) focus-visible:text-inherit"
            >
              <div className="overflow-hidden">
                <div
                  role="img"
                  aria-label={`${card.title} preview`}
                  className="h-[190px] bg-cover bg-center transition-transform duration-700 ease-(--ease-out-expo) group-hover:scale-105 md:h-[220px] [@media(hover:none)]:group-hover:scale-100"
                  style={{ backgroundImage: `url(${asset(card.image)})` }}
                />
              </div>
              <div className="px-6 pt-[22px] pb-6">
                <span className="eyebrow mb-2 block">{card.type}</span>
                <h3 className="mb-2 text-2xl">{card.title}</h3>
                <p className="mb-3.5">{card.body}</p>
                <SkillChips items={card.stack} />
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <MoreProjects projects={moreProjects} />
    </Section>
  );
}
