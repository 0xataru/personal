export interface TechItem {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Cloud" | "Testing" | "Tools";
}

export interface TechCategory {
  name: string;
  icon: string;
  color: string;
  borderColor: string;
  technologies: string[];
}

export const techStackData: Record<string, TechCategory> = {
  Languages: {
    name: "Languages",
    icon: "💻",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    borderColor: "border-blue-500",
    technologies: [
      "Rust", "Go", "Typescript/Javascript", "Python"
    ]
  },
  Backend: {
    name: "Backend",
    icon: "⚙️",
    color: "bg-gradient-to-r from-orange-500 to-red-500", 
    borderColor: "border-orange-500",
    technologies: [
      "Go (fiber, gorm)", "Rust (actix-web, axum, tokio, sqlx)", "REST", "gRPC", "Postgres", "Mongo", "Redis", "RabbitMQ", "DynamoDB", "Nginx"
    ]
  },
  Frontend: {
    name: "Frontend",
    icon: "🎨",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    borderColor: "border-green-500",
    technologies: [
      "React", "Redux", "NextJS", "CSS", "Webpack", "TailwindCSS"
    ]
  },
  Cloud: {
    name: "Cloud",
    icon: "☁️",
    color: "bg-gradient-to-r from-sky-500 to-blue-500",
    borderColor: "border-sky-500",
    technologies: [
      "AWS", "GCP", "Digital Ocean"
    ]
  },
  Tools: {
    name: "Tools",
    icon: "🛠️",
    color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    borderColor: "border-indigo-500",
    technologies: [
      "Git", "GitHub", "GitLab", "CI/CD", "Linux", "Docker", "Kubernetes", "Jira"
    ]
  }
}; 