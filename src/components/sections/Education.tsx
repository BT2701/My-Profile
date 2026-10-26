import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education, educationHeading } from '@/data/skills';

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title={educationHeading} />
      <div className="flex flex-col gap-5">
        {education.map((entry) => (
          <Reveal key={entry.title}>
            <article className="card px-[18px] py-[22px] md:p-8">
              <div className="mb-2 flex flex-col items-start gap-x-4 lg:flex-row lg:justify-between">
                <p className="eyebrow m-0 text-[13px] tracking-[0.08em]">{entry.org}</p>
                <p className="m-0">{entry.years}</p>
              </div>
              <h3 className="mb-2 text-[22px] sm:text-[28px]">{entry.title}</h3>
              <p className="m-0">
                {entry.detail}
                {entry.link && (
                  <>
                    {' '}
                    <a href={entry.link.href} target="_blank" rel="noopener">
                      {entry.link.label}
                    </a>
                  </>
                )}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
