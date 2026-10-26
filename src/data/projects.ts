export type FeaturedWork = {
  label: string;
  title: string;
  body: string;
  links?: { label: string; href: string }[];
  stack: string[];
  tone: 'primary' | 'gold';
  /** Spans both columns of the featured grid on large screens. */
  wide?: boolean;
};

export type WorkCard = {
  title: string;
  type: string;
  body: string;
  href: string;
  image: string;
  stack: string[];
};

export type ProjectRow = {
  title: string;
  body: string;
  href: string;
  stack: string[];
};

export const workHeading = 'Production first, then the builds that got me here';

export const featuredWork: FeaturedWork[] = [
  {
    label: 'Production · Suntek JSC · Private',
    title: '21 live game backends',
    body: 'Session-based entertainment titles plus one real-time multiplayer game. I own the Go services: feature logic, economy balance, Redis-backed hot state, WebSockets, and the Fiber APIs clients call. Source stays internal — the work is the traffic.',
    links: [
      {
        label: 'Demo 1',
        href: 'https://drive.google.com/file/d/1hnxNy2LMgRfw70peeOG7dNiM1QQWYtnP/view?usp=drive_link',
      },
      {
        label: 'Demo 2',
        href: 'https://drive.google.com/file/d/1uwckWR6tEto0xekhFZhJ_4sqd0f2yScC/view?usp=drive_link',
      },
      {
        label: 'Demo 3',
        href: 'https://drive.google.com/file/d/1e2XuFcczE4lKgiHxqDaFtchsdRSlrDFi/view?usp=drive_link',
      },
      {
        label: 'More titles',
        href: 'https://drive.google.com/drive/folders/17AJcPNIPNa36EAWrIVv-5E_AcyiOttZj?usp=sharing',
      },
      {
        label: 'Multiplayer',
        href: 'https://drive.google.com/drive/folders/1hNi_6-U7D7AQ8mZgcmdYCK3tEjK5c7Ho',
      },
    ],
    stack: ['Go', 'Fiber', 'MongoDB', 'Redis', 'WebSocket', 'Kubernetes'],
    tone: 'primary',
  },
  {
    label: 'Freelance · JA Gaming · Private',
    title: 'Game portal backend',
    body: 'The server that hosts games and exposes Fiber APIs to clients. Clean Architecture, PostgreSQL for portal data, Redis for hot reads, Docker for deploy.',
    stack: ['Go', 'Fiber', 'PostgreSQL', 'Redis', 'Docker', 'Clean Architecture'],
    tone: 'gold',
  },
  {
    label: 'In progress · Suntek JSC · Internal',
    title: 'QA Agent — AI-assisted test platform',
    body: 'Runs spreadsheet-driven test suites on live web games, checks screens against versioned Figma contracts, and files de-duplicated bug reports with AI. I built the Go API, the job worker, and the private RAG pipeline (BGE-M3 + pgvector, local Qwen); LLM features run through a model router.',
    stack: [
      'Go',
      'Fiber',
      'PostgreSQL',
      'pgvector',
      'Redis',
      'MinIO',
      'Python',
      'TypeScript',
      'RAG',
    ],
    tone: 'primary',
    wide: true,
  },
];

export const workCards: WorkCard[] = [
  {
    title: 'Bus Ticket Booking',
    type: 'Full-stack · Team lead · 4 people',
    body: 'Customer and staff flows with JWT auth, trip search, booking, VNPay checkout, and notifications.',
    href: 'https://github.com/BT2701/bus-ticket-booking-frontend',
    image: '/images/xe3.gif',
    stack: ['React', 'Spring Boot', 'MySQL', 'VNPay'],
  },
  {
    title: 'Social networking platform',
    type: 'Personal · Go microservices',
    body: 'Hexagonal Go services behind Kong: auth, posts, friends, chat, notifications, and an embedded mini-game. React client.',
    href: 'https://github.com/BT2701/facebook-be-v2',
    image: '/images/f2.gif',
    stack: ['Go', 'Echo', 'MongoDB', 'Redis', 'React'],
  },
  {
    title: 'Pizza Shop',
    type: 'Full-stack · Solo',
    body: 'Catalog, cart, checkout, order tracking, and reviews for a complete storefront.',
    href: 'https://github.com/BT2701/E-commerce-Reactjs-SpringBoot',
    image: '/images/pizza1.gif',
    stack: ['React', 'Spring Boot', 'MySQL'],
  },
  {
    title: 'Social Website',
    type: 'Full-stack · 4 people',
    body: 'An Instagram-inspired community for profiles, posts, and conversation, built with Django.',
    href: 'https://github.com/BT2701/InstagramProject.git',
    image: '/images/ins.gif',
    stack: ['Django', 'Bootstrap', 'SQLite'],
  },
];

export const moreProjects: ProjectRow[] = [
  {
    title: 'SaleSphere',
    body: 'E-commerce with customer, staff, and admin roles. Ideator and team lead, 5 people.',
    href: 'https://github.com/BT2701/SaleSphere.git',
    stack: ['PHP', 'MySQL'],
  },
  {
    title: 'Educational Device Booking',
    body: 'Layered Spring Boot app for booking lab devices. Team lead, 11 people.',
    href: 'https://github.com/BT2701/Spring-Boot-project.git',
    stack: ['Spring Boot', 'Thymeleaf', 'MySQL'],
  },
  {
    title: 'Hotel Management',
    body: 'Desktop suite for rooms, reservations, payments, and reporting. 3 people.',
    href: 'https://github.com/BT2701/Hotel-management-software-construction-and-development-project',
    stack: ['Java Swing', 'JDBC', 'MySQL'],
  },
  {
    title: 'Learning Material Management',
    body: 'Layered desktop system with Hibernate. Team lead, 11 people.',
    href: 'https://github.com/BT2701/Learning-Materials-Management.git',
    stack: ['Java Swing', 'Hibernate', 'MySQL'],
  },
  {
    title: 'Courses Management',
    body: 'First layered-architecture desktop project in the series. Team lead, 11 people.',
    href: 'https://github.com/BT2701/Course-management-project.git',
    stack: ['Java Swing', 'JDBC', 'MySQL'],
  },
  {
    title: 'Mini Supermarket',
    body: 'Inventory, customers, suppliers, and analytics. Team lead, 3 people.',
    href: 'https://github.com/BT2701/Mini-supermarket-management-desktop-app',
    stack: ['Java Swing', 'JDBC', 'MySQL'],
  },
  {
    title: 'FlapDino',
    body: 'Three-level Pygame title: flight, boss fight, and a combined mode. 3 people.',
    href: 'https://github.com/BT2701/FlapDino_Game',
    stack: ['Python', 'Pygame'],
  },
];
