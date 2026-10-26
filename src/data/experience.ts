export type Experience = {
  company: string;
  url?: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  icon: 'pen' | 'briefcase';
  tone: 'primary' | 'secondary';
};

export const experience: Experience[] = [
  {
    company: 'Suntek JSC',
    url: 'https://www.suntekvn.com/',
    role: 'Backend Game Engineer',
    period: 'Oct 2024 — Present · Ho Chi Minh City',
    summary:
      'Sole backend on each title in a squad formed by PM: Game Designer as BA, 1–2 frontend, artist, animation, and QA. 21 production games, including one real-time multiplayer title.',
    highlights: [
      "After the backend lead assigns the project, I implement server-side logic from the Game Designer's requirements and design document.",
      'Work directly with GD on mechanics and balance; after lead code review, support frontend API integration and continue balance tuning.',
      'Session-based titles: core play loop, rewards, player account state, bonus features, events, and economy balance.',
      'Real-time multiplayer title: server-authoritative gameplay, entity sync, rewards, and WebSocket communication.',
      'Keep latency stable with goroutines, channels, and Redis caching that cuts MongoDB read load.',
      'Build simulation tools and result templates for Game Design; promote each title through QA, customer staging, then production on Kubernetes via GitLab CI/CD.',
    ],
    stack: [
      'Go',
      'Fiber',
      'MongoDB',
      'Redis',
      'WebSocket',
      'Docker',
      'GitLab CI/CD',
      'Kubernetes',
      'Clean Architecture',
    ],
    icon: 'pen',
    tone: 'primary',
  },
  {
    company: 'JA Gaming',
    role: 'Backend Engineer · Game portal',
    period: 'Dec 2025 — Present · Remote · Freelance',
    summary:
      'Building the server-side game portal — the backend that hosts games and exposes Fiber APIs to clients.',
    highlights: [
      'Structured the portal in Clean Architecture so domain logic stays independent of Fiber, Redis, and PostgreSQL.',
      'Persist portal data in PostgreSQL; Redis for hot, high-read paths.',
      'Containerize services with Docker for a repeatable deploy path.',
    ],
    stack: ['Go', 'Fiber', 'Redis', 'PostgreSQL', 'Docker', 'Clean Architecture'],
    icon: 'briefcase',
    tone: 'secondary',
  },
];
