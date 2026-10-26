export type SkillGroup = { title: string; items: string[] };

export type EducationEntry = {
  org: string;
  years: string;
  title: string;
  detail: string;
  link?: { label: string; href: string };
};

export const skillsHeading = 'Skills I use in production';

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', items: ['Go', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
  {
    title: 'Backend & APIs',
    items: ['Fiber', 'Gin', 'Echo', 'Spring Boot', 'REST', 'JWT', 'WebSocket'],
  },
  { title: 'Data', items: ['MongoDB', 'Redis', 'PostgreSQL', 'MySQL', 'SQL Server'] },
  {
    title: 'Architecture',
    items: ['Microservices', 'Clean Architecture', 'Hexagonal', 'MVC', 'OOP'],
  },
  { title: 'Frontend', items: ['React', 'Bootstrap', 'Material UI'] },
  {
    title: 'Workflow',
    items: [
      'Git',
      'GitHub',
      'GitLab CI/CD',
      'Docker',
      'Kubernetes',
      'Unit & integration tests',
      'English — conversational',
    ],
  },
];

export const educationHeading = 'Education and award';

export const education: EducationEntry[] = [
  {
    org: 'Saigon University',
    years: '2021 — 2025',
    title: 'Engineer, Software Engineering',
    detail: 'Information Technology · GPA 3.23 / 4.00 (8.07 / 10)',
  },
  {
    org: 'Suntek JSC',
    years: '2025',
    title: 'Improvement Star',
    detail: 'Awarded for outstanding performance and year-over-year improvement.',
    link: {
      label: 'Award photos',
      href: 'https://drive.google.com/drive/folders/1zbzuzzuo1xAOuNT-v0iYd9a_kLXdnf6E?usp=sharing',
    },
  },
];
