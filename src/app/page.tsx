import { Sidebar } from '@/components/layout/Sidebar';
import { About } from '@/components/sections/About';
import { Activity } from '@/components/sections/Activity';
import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Work } from '@/components/sections/Work';

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="bg-ink sr-only z-[3000] rounded-lg px-3.5 py-2.5 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:text-white"
      >
        Skip to content
      </a>
      <Sidebar />
      <main id="main" className="md:ml-(--sidebar-width)">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Activity />
        <Contact />
      </main>
    </>
  );
}
