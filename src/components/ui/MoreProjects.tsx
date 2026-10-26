'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import type { ProjectRow } from '@/data/projects';
import { buttonClass } from './button';
import { SkillChips } from './SkillChips';

export function MoreProjects({ projects }: { projects: ProjectRow[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            id="more-projects"
            className="mt-2 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {projects.map((project, index) => (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
                className="border-line flex flex-col items-start gap-3 border-t py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6"
              >
                <div>
                  <h3 className="mb-1 text-xl">
                    <a href={project.href} target="_blank" rel="noopener">
                      {project.title}
                    </a>
                  </h3>
                  <p className="m-0">{project.body}</p>
                </div>
                <SkillChips items={project.stack} className="lg:shrink-0 lg:justify-end" />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <p className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls="more-projects"
          className={buttonClass('solid', 'px-7 text-base')}
        >
          {expanded ? 'Show fewer projects' : 'Show more projects'}
          {expanded ? <Minus size={16} aria-hidden /> : <Plus size={16} aria-hidden />}
        </button>
      </p>
    </>
  );
}
