'use client';

import { Briefcase, Download } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { buttonClass } from '@/components/ui/button';
import { ViewerCount } from '@/components/ui/ViewerCount';
import { hero, profile } from '@/data/profile';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { asset } from '@/lib/asset';

const ease = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const copy: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 769px)');
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const parallax = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section
      ref={ref}
      id="top"
      className="flex flex-col md:grid md:min-h-svh md:grid-cols-[1.1fr_0.9fr] md:overflow-hidden xl:grid-cols-[minmax(22rem,1.05fr)_minmax(18rem,0.95fr)]"
    >
      <motion.div
        variants={copy}
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
        className="flex flex-col justify-center px-5 pt-[calc(72px+env(safe-area-inset-top))] pb-7 md:min-h-svh md:px-8 md:pt-20 md:pb-12 lg:px-12 xl:px-[4.5em] xl:pt-28 xl:pb-20"
      >
        <motion.p
          variants={rise}
          className="text-gold mb-[18px] text-xs font-bold tracking-[0.2em] uppercase"
        >
          {hero.kicker}
        </motion.p>
        <motion.h1
          variants={rise}
          className="mb-[18px] max-w-[14em] text-[clamp(30px,8vw,38px)] leading-[1.08] tracking-[-0.035em] md:text-[clamp(40px,5vw,58px)] xl:max-w-[11em]"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          variants={rise}
          className="text-ink-soft mb-[22px] text-base leading-[1.6] md:mb-8 md:max-w-[38ch] md:text-lg"
        >
          {hero.lead}
        </motion.p>
        <motion.p
          variants={rise}
          className="mb-6 flex flex-col gap-3 md:mb-10 md:flex-row md:flex-wrap"
        >
          <a
            href={asset(profile.resume)}
            download={profile.resumeFileName}
            className={buttonClass('outline', 'px-5')}
          >
            Download CV <Download size={16} aria-hidden />
          </a>
          <a href="#experience" className={buttonClass('outline', 'px-5')}>
            View experience <Briefcase size={16} aria-hidden />
          </a>
        </motion.p>
        <motion.dl
          variants={rise}
          className="border-line m-0 grid grid-cols-2 gap-x-2.5 gap-y-3.5 border-t pt-7 sm:gap-x-3 sm:gap-y-4 lg:gap-x-4 lg:gap-y-[18px] xl:grid-cols-4 xl:gap-5"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-ink mb-1 font-serif text-[22px] md:text-[28px]">
                {stat.live ? <ViewerCount /> : stat.value}
              </dt>
              <dd className="text-ink-soft m-0 text-[11px] tracking-[0.04em] uppercase md:text-xs md:tracking-[0.08em]">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <figure className="relative m-0 flex items-center justify-center overflow-hidden px-4 pb-6 md:min-h-svh md:p-0">
        <motion.img
          src={asset(profile.portrait)}
          alt={hero.portraitAlt}
          width={1448}
          height={1086}
          fetchPriority="high"
          initial={reduceMotion ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ y: isDesktop && !reduceMotion ? parallax : 0 }}
          className="block aspect-[4/3] h-auto w-full object-contain md:max-h-svh"
        />
        <figcaption className="text-ink-soft absolute bottom-4 left-4 font-sans text-xs tracking-[0.12em] uppercase md:bottom-6 md:left-6">
          {hero.caption}
        </figcaption>
      </figure>
    </section>
  );
}
