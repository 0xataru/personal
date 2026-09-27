// Single source of truth for the CV.
// Both the website sections and the generated PDF (/cv.pdf) read from this file,
// so editing anything here updates both.

export interface ContactLink {
  label: string;
  href: string;
  /** text shown in the PDF, defaults to label */
  display?: string;
  /** include in the PDF header */
  inCv: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  start: string;
  end: string;
  project?: string;
  stack: string[];
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
  /** show on the website stack section (PDF always shows every group) */
  onSite: boolean;
}

export interface EducationItem {
  title: string;
  school: string;
  start: string;
  end: string;
  notes: string[];
}

export const profile = {
  name: "Mark Raiter",
  title: "Software Engineer",
  tagline: "Go & Rust, backend systems and cloud infrastructure",
  email: "raitermark@proton.me",
  phone: "+34 661 120 278",
};

export const links: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/0xataru/",
    display: "linkedin",
    inCv: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/0xataru",
    display: "github",
    inCv: true,
  },
  { label: "X", href: "https://x.com/0xataru", inCv: false },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    display: profile.email,
    inCv: false,
  },
];

export const summary: string[] = [
  "Experienced Software Engineer specializing in Golang and Rust, with a strong focus on building scalable and reliable B2B SaaS solutions.",
  "I work extensively with Go (Gin, Gorilla, Fiber) and Rust (Actix-Web, Axum). My backend expertise includes relational and NoSQL databases such as Postgres, MySQL, DynamoDB and MongoDB, along with caching systems like Redis.",
  "I follow a test-driven development (TDD) approach to ensure code quality, maintainability, and confidence in delivery.",
  "On the infrastructure side, I'm experienced with containerization using Docker, orchestration with Kubernetes, infrastructure management via Helm, and cloud deployment on GCP.",
  "Additionally, I have a solid background in frontend development with JavaScript/TypeScript, React, Next.js, and Tailwind CSS.",
  "I'm passionate about designing efficient, maintainable systems and delivering thoughtful, high-impact solutions.",
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Sombra",
    start: "Jan 2026",
    end: "until now",
    project:
      "Leading Real Estate Portal in the MENA Region (5.5M+ monthly users, 600K+ property listings across 6 countries)",
    stack: [
      "Go (Gin)",
      "Rust (Axum)",
      "TypeScript",
      "React",
      "DynamoDB",
      "MySQL",
      "MongoDB",
      "RabbitMQ",
      "AWS",
    ],
    highlights: [
      "Member of the Core B2B team (7 engineers), owning ~15 catalog-related services within a 200+ microservice ecosystem spanning B2C and B2B streams.",
      "Maintain backend services powering a high-traffic real estate marketplace serving millions of monthly users.",
      "Build scalable APIs and integrations supporting the property catalog domain.",
      "Use agentic development workflows (Claude Code, spec-driven development) and custom MCP integrations to accelerate feature delivery and improve code quality.",
      "Contribute to performance optimization, reliability improvements, and feature delivery within a distributed, event-driven architecture.",
    ],
  },
  {
    role: "Software Engineer - Tech Lead",
    company: "Zero Task Labs (formerly Valsydev)",
    start: "Dec 2024",
    end: "Jan 2026",
    project:
      "Multi-Tenant B2B SaaS CRM Platform for commerce businesses (10+ tenants, one processing 1,000-1,200 orders/day)",
    stack: [
      "Go (Fiber)",
      "Rust (Axum)",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "GCP",
    ],
    highlights: [
      "Led a team of 6 engineers building a multi-tenant CRM platform on a modular monolith architecture.",
      "Built internal products including a client feedback service, incident tracking system, and automated incident reminder service.",
      "Automated release and code review processes by building an internal AI-powered review bot.",
      "Introduced spec-driven development and agentic workflows (Claude Code, MCP integrations) across the team, improving development velocity and consistency.",
      "Optimized database performance, caching, and service communication.",
      "Participated in architectural decisions, code reviews, mentoring, and technical leadership.",
    ],
  },
  {
    role: "Software Engineer",
    company: "WebUzvar",
    start: "Aug 2023",
    end: "Dec 2024",
    stack: ["Go", "PostgreSQL", "REST", "gRPC"],
    highlights: [
      "Delivered multiple greenfield projects across edtech and sciencetech domains, owning architecture design through implementation.",
      "Took full ownership of features from planning to post-production monitoring and continuous improvement.",
      "Improved performance and reliability of products through refactoring and monitoring enhancements.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Freelance",
    start: "Nov 2022",
    end: "Aug 2023",
    stack: ["Go", "REST", "gRPC"],
    highlights: [
      "Delivered projects across multiple domains, including landing pages, CRM systems, and Telegram/Slack bots.",
      "Built and maintained backend services with REST and gRPC APIs using Go.",
      "Managed full project lifecycle for clients, from requirements gathering to deployment and support.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "General",
    onSite: false,
    items: [
      "Software Development",
      "Problem Solving",
      "Analytical Skills",
      "Technical & Business Requirements",
      "System Performance",
      "Debugging",
      "Concurrency & Parallelism",
      "Database Management",
      "Unit Testing",
      "Integration Testing",
      "Communication",
      "Teamwork",
      "Agile Methodologies",
      "Scrum",
      "Kanban",
    ],
  },
  {
    label: "Languages",
    onSite: true,
    items: ["Rust", "Go", "TypeScript/JavaScript", "Python"],
  },
  {
    label: "Back-end",
    onSite: true,
    items: [
      "Go (fiber, gin, gorm)",
      "Rust (actix-web, axum, sqlx)",
      "REST",
      "gRPC",
      "Postgres",
      "Mongo",
      "Redis",
      "Nginx",
    ],
  },
  {
    label: "Front-end",
    onSite: true,
    items: ["React", "Redux", "Next", "CSS", "Webpack", "tailwindcss"],
  },
  { label: "Cloud", onSite: true, items: ["AWS", "GCP", "Digital Ocean"] },
  {
    label: "Testing",
    onSite: true,
    items: ["Playwright", "go testing", "Jest"],
  },
  {
    label: "AI-Assisted Development",
    onSite: true,
    items: [
      "Claude Code",
      "MCP (Model Context Protocol): server development & integration",
      "spec-driven development",
      "agentic workflows",
    ],
  },
  {
    label: "Tools",
    onSite: true,
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "CI/CD",
      "Linux",
      "Docker",
      "Kubernetes",
      "Jira... and many more",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Computer Science (CS50)",
    school: "Harvard Online",
    start: "Mar 2022",
    end: "Jul 2022",
    notes: ["Finished Computer Science Course."],
  },
];
