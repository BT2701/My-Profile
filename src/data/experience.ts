/** A project run in parallel inside the same role. */
export type ExperienceProject = {
  name: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type Experience = {
  company: string;
  url?: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  projects?: ExperienceProject[];
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
    projects: [
      {
        name: 'QA Agent — AI-assisted test platform for web games',
        period: 'Jun 2026 — Present · in parallel with game titles',
        summary:
          'An internal platform that runs spreadsheet-driven test suites on live web games, checks screens against Figma, and writes bug reports with AI. I built the API, the job worker, and the knowledge pipeline; the Playwright runner and UI are owned separately.',
        highlights: [
          'Go/Fiber API at the centre: run state machine, worker leases, Google sign-in, SSE progress over Redis, Prometheus metrics, and a per-user dashboard and tool audit.',
          'Job queue kept in PostgreSQL with no broker. A TypeScript worker claims runs under a lease, drives the test runner in-process with configurable concurrency, and reports results back.',
          'Private RAG knowledge base: a Python pipeline ingests PDF, DOCX and XLSX from MinIO, embeds with BGE-M3 on Ollama into pgvector, and answers with a local Qwen model so private documents stay on our network.',
          'LLM features through a model router: a chat agent whose write tools need user approval, test-case generation with state-machine coverage, failure analysis, and bug reports de-duplicated by signature and embedding.',
          'Figma sync into a versioned Design Contract: resolve frames per test row, export images only when the file version changes, and mark dynamic layers so screen comparisons ignore them.',
          'Data-driven checks on the backend: per-spin balance reconciliation, risk-ranked smoke runs, and an offline evaluation harness that fails when AI scores fall below a threshold.',
        ],
        stack: [
          'Go',
          'Fiber',
          'PostgreSQL',
          'pgvector',
          'Redis',
          'MinIO',
          'Python',
          'TypeScript',
          'Ollama',
          'RAG',
          'Docker',
        ],
      },
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
