export type NavItem = { id: string; label: string };

export type Stat = { value: string; label: string; live?: boolean };

export type FocusArea = { title: string; body: string };

export const profile = {
  name: 'Duong Thanh Truong',
  shortName: 'Truong',
  role: 'Backend Game Engineer',
  company: { name: 'Suntek JSC', url: 'https://www.suntekvn.com/' },
  location: 'Ho Chi Minh City',
  country: 'Vietnam',
  status: 'Open to conversations',
  email: 'dttruong2701@gmail.com',
  phone: { display: '038 609 4783', tel: '+84386094783' },
  github: 'https://github.com/BT2701',
  githubUser: 'BT2701',
  linkedin: 'https://www.linkedin.com/in/bt2701/',
  resume: '/pdf/resume.pdf',
  resumeFileName: 'DuongThanhTruong_SE.pdf',
  avatar: '/images/avt.jpg',
  portrait: '/images/bg_main1.png',
} as const;

export const site = {
  title: `${profile.name} — ${profile.role}`,
  description:
    'Portfolio of Duong Thanh Truong, a backend game engineer at Suntek JSC. I ship Go services for 21 live entertainment titles with Redis, MongoDB, Docker, and Kubernetes.',
  ogDescription:
    'Backend game engineer. 21 live titles in Go — from design document to production.',
  keywords: [
    'Duong Thanh Truong',
    'Backend Engineer',
    'Game Backend',
    'Golang',
    'Fiber',
    'Redis',
    'MongoDB',
    'Kubernetes',
    'Suntek',
  ],
  url: 'https://bt2701.github.io/My-Profile/',
  themeColor: '#1b3a4b',
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  kicker: 'Backend · Game systems · Go',
  title: 'From GDD to production. 21 live titles.',
  lead: "I'm Truong — sole backend on each Suntek squad. I take a Game Design Document through implementation, lead review, frontend integration, QA, staging, and production.",
  caption: 'Ho Chi Minh City · Backend Game Engineer',
  portraitAlt: 'Duong Thanh Truong standing against a teal wall in Ho Chi Minh City',
  stats: [
    { value: '21', label: 'Production titles' },
    { value: '2 yrs', label: 'Shipping in production' },
    { value: 'Go', label: 'Fiber, Redis, Kubernetes' },
    { value: '', label: 'Profile viewers', live: true },
  ] satisfies Stat[],
};

export const about = {
  heading: 'A backend engineer who owns the title',
  focus: [
    {
      title: 'Game backend',
      body: 'Core play loop, rewards, bonus features, and economy logic built for live traffic.',
    },
    {
      title: 'Concurrency',
      body: 'Goroutines, channels, and caching so thousands of requests stay responsive.',
    },
    {
      title: 'APIs & data',
      body: 'Fiber APIs, MongoDB or PostgreSQL, Redis for hot state, WebSockets when the game is live.',
    },
    {
      title: 'Ship path',
      body: 'GitLab CI/CD and Docker images onto Kubernetes: QA, customer staging, then production.',
    },
  ] satisfies FocusArea[],
};

export const contact = {
  heading: "Let's work together",
  lead: 'A short note is enough. I read every message and usually reply within a day.',
  hireLabel: 'Next conversation',
  hire: '21 production titles at Suntek, plus a game portal at JA Gaming. Happy to talk about the next one.',
};
