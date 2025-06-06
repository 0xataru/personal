export interface ProjectItem {
  title: string;
  description: string;
  language: string;
  stars?: number;
  url: string;
  color: string;
}

export const featuredProjects: ProjectItem[] = [
  {
    title: "dfox",
    description: "Rust-based database management tool with TUI for PostgreSQL and MySQL databases",
    language: "Rust",
    stars: 5,
    url: "https://github.com/0xataru/dfox",
    color: "bg-orange-500"
  },
  {
    title: "cardcheck", 
    description: "Simple validator for credit card number and expiration date",
    language: "Go",
    stars: 2,
    url: "https://github.com/0xataru/cardcheck",
    color: "bg-blue-500"
  },
  {
    title: "go_scheduler",
    description: "Lightweight and efficient task scheduler for Go applications with future execution",
    language: "Go", 
    url: "https://github.com/0xataru/go_scheduler",
    color: "bg-green-500"
  },
  {
    title: "go_eventmanager",
    description: "Thread-safe event management system implementing publish-subscribe pattern",
    language: "Go",
    url: "https://github.com/0xataru/go_eventmanager", 
    color: "bg-purple-500"
  }
]; 