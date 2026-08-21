// NOTE: These are illustrative SAMPLE projects used to demonstrate layout and
// structure. They are not real clients and contain no fabricated metrics.
// Replace the entries below with real case studies when available, the shape
// is intentionally simple. Add a `image`/`gallery` of real screenshot paths to
// override the generated brand cover art.

export type Project = {
  slug: string;
  title: string;
  category: string; // primary category (used for the filter)
  tags: string[]; // all applicable categories
  accent: "blue" | "teal" | "navy" | "indigo";
  year: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  outcomes: string[]; // qualitative, no invented numbers
  image?: string;
  gallery?: string[];
};

export const categories = ["All", "Web", "Mobile", "AI", "SaaS", "Automation", "E-commerce"] as const;

export const projects: Project[] = [
  {
    slug: "northwind-commerce",
    title: "Northwind Commerce",
    category: "E-commerce",
    tags: ["Web", "E-commerce"],
    accent: "blue",
    year: "Sample",
    summary: "A headless e-commerce storefront with a streamlined, high-converting checkout.",
    overview:
      "A modern headless storefront built for speed, with a clean product experience and a checkout designed to reduce drop-off.",
    problem:
      "The previous platform was slow, hard to customize, and its multi-step checkout leaked customers at every stage.",
    solution:
      "We built a headless front end backed by a flexible commerce API, rebuilt the checkout into a focused single flow, and tuned performance across the catalog.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    features: [
      "Fast, SEO-friendly product & category pages",
      "Streamlined single-page checkout",
      "Search, filtering & personalized recommendations",
      "Content-managed merchandising",
    ],
    outcomes: [
      "Noticeably faster page loads across the catalog",
      "Simpler checkout with fewer steps to purchase",
      "A codebase the team can extend without specialist help",
    ],
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    category: "SaaS",
    tags: ["SaaS", "Web"],
    accent: "teal",
    year: "Sample",
    summary: "A real-time analytics dashboard that makes complex data easy to read.",
    overview:
      "A SaaS analytics product turning high-volume event data into clear, real-time dashboards teams actually use.",
    problem:
      "Users were overwhelmed by dense tables and slow queries, and couldn't get answers fast enough to act on them.",
    solution:
      "We designed a focused dashboard with clear visual hierarchy, added an efficient data layer with caching, and built flexible, shareable views.",
    technologies: ["React", "TypeScript", "Node.js", "Redis", "PostgreSQL", "WebSockets"],
    features: [
      "Real-time charts & live metrics",
      "Custom, shareable dashboards",
      "Fast filtering across large datasets",
      "Role-based access control",
    ],
    outcomes: [
      "Faster time-to-insight for everyday questions",
      "A visual system that scales to new metrics cleanly",
      "Reduced load on the data backend through caching",
    ],
  },
  {
    slug: "waypoint-logistics",
    title: "Waypoint",
    category: "Mobile",
    tags: ["Mobile", "Automation"],
    accent: "navy",
    year: "Sample",
    summary: "A driver & dispatch mobile app for delivery and logistics teams.",
    overview:
      "A cross-platform app coordinating drivers and dispatchers in real time, with offline resilience for the road.",
    problem:
      "Field teams relied on phone calls and paper, causing missed updates, poor visibility, and avoidable delays.",
    solution:
      "We built one app for drivers and dispatch with live location, route awareness and an offline-first data layer that syncs when back online.",
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
    features: [
      "Live driver tracking & status",
      "Offline-first job management",
      "Push notifications & deep links",
      "Dispatch dashboard",
    ],
    outcomes: [
      "Real-time visibility replacing manual check-ins",
      "Reliable operation even with spotty connectivity",
      "One shared workflow for drivers and dispatch",
    ],
  },
  {
    slug: "lumen-ai-assistant",
    title: "Lumen AI Assistant",
    category: "AI",
    tags: ["AI", "SaaS"],
    accent: "indigo",
    year: "Sample",
    summary: "An AI support assistant grounded in a company's own knowledge base.",
    overview:
      "A support assistant that answers customer and internal questions from a company's real documentation, with sources, not guesses.",
    problem:
      "Support teams answered the same questions repeatedly, and generic AI chat gave confident but unreliable answers.",
    solution:
      "We built a retrieval-grounded assistant that cites its sources, with evaluation and guardrails, wrapped in a clean support workflow.",
    technologies: ["Python", "OpenAI APIs", "LangChain", "Vector DB", "Next.js"],
    features: [
      "Retrieval-grounded answers with citations",
      "Human handoff for edge cases",
      "Answer evaluation & quality tracking",
      "Admin controls & analytics",
    ],
    outcomes: [
      "Answers grounded in real docs, with sources shown",
      "Guardrails that reduce confident-but-wrong replies",
      "A measurable quality loop rather than a black box",
    ],
  },
  {
    slug: "flowops-automation",
    title: "FlowOps",
    category: "Automation",
    tags: ["Automation", "SaaS"],
    accent: "blue",
    year: "Sample",
    summary: "A workflow automation suite connecting a team's disconnected tools.",
    overview:
      "An internal automation platform that moves data between business systems and triggers actions without manual work.",
    problem:
      "Teams spent hours moving data between tools by hand, introducing errors and creating single points of failure.",
    solution:
      "We mapped the highest-friction workflows and automated them with reliable pipelines, retries and clear monitoring.",
    technologies: ["Node.js", "Python", "PostgreSQL", "Message Queues", "REST APIs"],
    features: [
      "Event-driven & scheduled automations",
      "Integrations across internal tools",
      "Retries & failure alerting",
      "Run history & monitoring",
    ],
    outcomes: [
      "Repetitive manual steps removed from daily work",
      "Fewer errors from copy-paste between systems",
      "Automations that run unattended with visibility",
    ],
  },
  {
    slug: "ledgerly-fintech",
    title: "Ledgerly",
    category: "Web",
    tags: ["Web", "SaaS"],
    accent: "teal",
    year: "Sample",
    summary: "A fintech dashboard for payments, balances and reconciliation.",
    overview:
      "A secure financial dashboard giving teams a clear, real-time view of payments, balances and reconciliation.",
    problem:
      "Financial data was scattered across spreadsheets and tools, making reconciliation slow and error-prone.",
    solution:
      "We built a secure, well-structured dashboard with strong auth, clear data visualization and reliable reconciliation flows.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "OAuth 2.0"],
    features: [
      "Consolidated payments & balances view",
      "Reconciliation workflows",
      "Role-based access & audit trails",
      "Exportable reports",
    ],
    outcomes: [
      "A single, trustworthy view of financial data",
      "Reconciliation that's faster and less error-prone",
      "Security and access controls built in from the start",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectSlugs = projects.map((p) => p.slug);
