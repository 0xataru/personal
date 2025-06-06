export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
}

export interface TechCategory {
  name: string;
  icon: string;
  color: string;
  technologies: string[];
}

export const techStackData: Record<string, TechCategory> = {
  Frontend: {
    name: "Frontend",
    icon: "🎨",
    color: "bg-blue-500",
    technologies: [
      "React", "TypeScript", "JavaScript", "Redux", "Next.js", "Tailwind CSS"
    ]
  },
  Backend: {
    name: "Backend",
    icon: "⚙️",
    color: "bg-green-500", 
    technologies: [
      "Rust", "Go", "Python", "Java", "C++", "PostgreSQL", "MySQL", "Redis"
    ]
  },
  Tools: {
    name: "Tools",
    icon: "🛠️",
    color: "bg-purple-500",
    technologies: [
      "Git", "GitHub", "Terraform", "Helm", "Docker", "Kubernetes", "Linux", "Google Cloud"
    ]
  }
}; 