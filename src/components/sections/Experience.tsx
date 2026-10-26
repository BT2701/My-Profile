import { Briefcase, PenLine } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillChips } from '@/components/ui/SkillChips';
import { experience } from '@/data/experience';
import { cn } from '@/lib/cn';

const icons = { pen: PenLine, briefcase: Briefcase };

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I own the backend" />

      <ol className="relative mb-8 before:absolute before:top-5 before:bottom-5 before:left-[18px] before:w-1 before:bg-[#e6e9ec]">
        {experience.map((job) => {
          const Icon = icons[job.icon];
          return (
            <Reveal as="li" key={job.company} className="relative mb-2.5 flex gap-3 md:gap-5">
              <span
                aria-hidden
                className={cn(
                  'relative z-[1] flex size-10 shrink-0 items-center justify-center rounded-full text-white shadow-[0_0_0_5px_var(--color-paper)]',
                  job.tone === 'primary' ? 'bg-accent' : 'bg-accent-2',
                )}
              >
                <Icon size={18} />
              </span>
              <article className="card relative flex-1 rounded-2xl px-4 py-5 before:absolute before:top-2.5 before:-left-[9px] before:border-y-[9px] before:border-r-[9px] before:border-y-transparent before:border-r-white md:px-[22px] md:py-6 xl:px-8 xl:py-[30px]">
                <p className="eyebrow mb-2 tracking-[0.08em]">{job.period}</p>
                <h3 className="mb-3 text-[22px] md:text-[28px]">
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noopener" className="text-ink">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                  <span className="text-ink-soft mt-1 block font-sans text-[15px] font-semibold">
                    {job.role}
                  </span>
                </h3>
                <p className="mb-4">{job.summary}</p>
                <ul className="mb-[18px] list-disc pl-[18px]">
                  {job.highlights.map((item) => (
                    <li key={item} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <SkillChips items={job.stack} />
                {job.projects?.map((project) => (
                  <section
                    key={project.name}
                    aria-label={project.name}
                    className="border-gold/60 bg-paper/60 mt-7 rounded-xl border-l-[3px] px-4 py-5 md:px-6"
                  >
                    <p className="eyebrow text-gold mb-1.5 tracking-[0.08em]">{project.period}</p>
                    <h4 className="mb-2 text-xl md:text-[22px]">{project.name}</h4>
                    <p className="mb-3">{project.summary}</p>
                    <ul className="mb-4 list-disc pl-[18px]">
                      {project.highlights.map((item) => (
                        <li key={item} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <SkillChips items={project.stack} />
                  </section>
                ))}
              </article>
            </Reveal>
          );
        })}
        <li aria-hidden className="relative ml-2.5 size-5 rounded-full bg-white" />
      </ol>
    </Section>
  );
}
