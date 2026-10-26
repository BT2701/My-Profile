import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillChips } from '@/components/ui/SkillChips';
import { skillGroups, skillsHeading } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Capabilities" title={skillsHeading} />
      <div className="grid gap-x-12 gap-y-7 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={(index % 2) * 0.06}>
            <h3 className="mb-3 text-lg">{group.title}</h3>
            <SkillChips items={group.items} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
