import type { IconKey } from "@/lib/icons";

export type TechCategory = {
  id: string;
  icon: IconKey;
  title: string;
  description: string;
  items: string[];
};

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    icon: "code",
    title: "Frontend",
    description: "Interfaces that are fast, accessible and a pleasure to use.",
    items: ["React", "Next.js", "Vue", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    icon: "server",
    title: "Backend",
    description: "Reliable services and APIs that scale with your product.",
    items: ["Node.js", "Python", "Java", "C#", "Go", "Express", "FastAPI", "GraphQL"],
  },
  {
    id: "mobile",
    icon: "smartphone",
    title: "Mobile",
    description: "Native-quality apps for iOS and Android.",
    items: ["React Native", "Flutter", "Swift", "Kotlin", "Android", "iOS"],
  },
  {
    id: "ai-ml",
    icon: "brain",
    title: "AI / ML",
    description: "Intelligent features grounded in your data.",
    items: ["Python", "PyTorch", "TensorFlow", "OpenAI APIs", "LangChain", "Hugging Face", "Vector DBs"],
  },
  {
    id: "databases",
    icon: "database",
    title: "Databases",
    description: "Data modeled and tuned to stay fast under load.",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite", "Prisma"],
  },
  {
    id: "cloud-devops",
    icon: "cloud",
    title: "Cloud / DevOps",
    description: "Infrastructure and pipelines that make shipping safe.",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Vercel", "Git"],
  },
];

// Compact list used for the hero trust strip.
export const trustStrip = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "Flutter",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "AI / ML",
];
