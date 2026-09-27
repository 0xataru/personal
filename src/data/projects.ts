export interface ProjectItem {
  title: string;
  description: string;
  language: "Rust" | "Go";
  stars?: number;
  url: string;
}

export const featuredProjects: ProjectItem[] = [
  {
    title: "dfox",
    description: "Rust-based database management tool with a TUI for PostgreSQL and MySQL",
    language: "Rust",
    stars: 5,
    url: "https://github.com/0xataru/dfox",
  },
  {
    title: "ascii-rs",
    description: "Simple image-to-ASCII converter written in Rust",
    language: "Rust",
    stars: 1,
    url: "https://github.com/0xataru/ascii-rs",
  },
  {
    title: "workerpool",
    description: "Zero-dependency Go library that runs a function over many inputs on a fixed number of goroutines",
    language: "Go",
    url: "https://github.com/0xataru/workerpool",
  },
  {
    title: "go_scheduler",
    description: "Lightweight task scheduler for Go applications with deferred execution",
    language: "Go",
    url: "https://github.com/0xataru/go_scheduler",
  },
  {
    title: "go_eventmanager",
    description: "Thread-safe event management system implementing the publish-subscribe pattern",
    language: "Go",
    url: "https://github.com/0xataru/go_eventmanager",
  },
];
