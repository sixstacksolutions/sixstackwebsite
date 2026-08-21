import type { IconKey } from "@/lib/icons";

export type Service = {
  slug: string;
  icon: IconKey;
  title: string;
  tagline: string;
  short: string;
  intro: string;
  problems: string[];
  approach: { title: string; text: string }[];
  deliverables: string[];
  technologies: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: "globe",
    title: "Web Development",
    tagline: "Websites, web apps & SaaS platforms",
    short:
      "Modern websites, web applications, dashboards and SaaS platforms built for speed and scale.",
    intro:
      "We build fast, accessible, production-grade web products, from marketing sites to complex SaaS dashboards, with clean architecture that stays maintainable as you grow.",
    problems: [
      "Slow, hard-to-maintain legacy front ends that block new features.",
      "Marketing sites that look generic and convert poorly.",
      "Dashboards that don't scale as data and users grow.",
      "Poor Core Web Vitals hurting SEO and user trust.",
    ],
    approach: [
      {
        title: "Architecture first",
        text: "We define data models, routing and component structure before writing UI, so the product stays coherent as it grows.",
      },
      {
        title: "Design-driven build",
        text: "Pixel-accurate implementation of a real design system, spacing, type and motion, not a template reskin.",
      },
      {
        title: "Performance as a feature",
        text: "Server rendering, image optimization and code-splitting to keep pages fast on every device.",
      },
    ],
    deliverables: [
      "Responsive marketing sites & landing pages",
      "SaaS dashboards & admin panels",
      "Design systems & reusable component libraries",
      "API integration & authentication flows",
      "SEO, analytics & performance tuning",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
    faqs: [
      {
        q: "Do you work from existing designs or create them?",
        a: "Both. We can build from your Figma files or handle design and development end-to-end.",
      },
      {
        q: "Can you improve our existing site instead of rebuilding?",
        a: "Often yes, we audit first and recommend refactor vs. rebuild based on the real cost of each.",
      },
    ],
  },
  {
    slug: "mobile-development",
    icon: "smartphone",
    title: "Mobile Development",
    tagline: "iOS & Android applications",
    short: "Native-quality iOS and Android apps from a single, maintainable codebase.",
    intro:
      "We ship polished mobile apps that feel native on both platforms, with offline support, smooth animations and reliable release pipelines.",
    problems: [
      "Maintaining separate iOS and Android codebases doubles cost.",
      "Janky performance and clunky navigation lose users.",
      "Fragile release process makes shipping updates risky.",
      "Offline and sync behavior that breaks in the real world.",
    ],
    approach: [
      {
        title: "One codebase, native feel",
        text: "Cross-platform with React Native / Flutter, dropping to native modules only where it genuinely matters.",
      },
      {
        title: "Motion & polish",
        text: "60fps interactions, gesture handling and micro-interactions that make the app feel considered.",
      },
      {
        title: "Reliable delivery",
        text: "Automated builds, staged rollouts and crash reporting so releases are calm, not chaotic.",
      },
    ],
    deliverables: [
      "iOS & Android apps from one codebase",
      "Offline-first data & sync",
      "Push notifications & deep linking",
      "App Store & Play Store release setup",
      "Analytics & crash monitoring",
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Swift", "Kotlin", "Firebase"],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "We recommend cross-platform for most products and reserve fully native for hardware-heavy use cases. We'll advise based on your goals.",
      },
      {
        q: "Do you handle store submission?",
        a: "Yes, we set up signing, store listings and the release pipeline as part of delivery.",
      },
    ],
  },
  {
    slug: "ai-development",
    icon: "brain",
    title: "AI & Machine Learning",
    tagline: "AI features, automation & intelligent systems",
    short:
      "AI-powered features, automation, recommendation systems and intelligent workflows that actually ship.",
    intro:
      "We help teams move AI from demo to production, grounding models in your data, wrapping them in dependable software, and measuring whether they move real metrics.",
    problems: [
      "Impressive prototypes that never make it to production.",
      "LLM features that hallucinate without guardrails.",
      "No clear way to evaluate model quality or cost.",
      "Data scattered across systems and hard to use.",
    ],
    approach: [
      {
        title: "Grounded, not guessing",
        text: "Retrieval and structured context so AI answers from your data, with evaluation baked in.",
      },
      {
        title: "Product, not experiment",
        text: "We treat AI as a feature inside solid software, with fallbacks, logging and cost controls.",
      },
      {
        title: "Measure what matters",
        text: "Clear evals and metrics so you know the feature is helping, not just impressive.",
      },
    ],
    deliverables: [
      "LLM & RAG-powered features",
      "Chat, search & recommendation systems",
      "Document & data extraction pipelines",
      "Workflow & decision automation",
      "Model evaluation & monitoring",
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenAI APIs", "LangChain", "Vector DBs"],
    faqs: [
      {
        q: "Do we need our own model?",
        a: "Rarely. Most value comes from combining strong foundation models with your data and good product design.",
      },
      {
        q: "How do you handle accuracy and safety?",
        a: "With retrieval grounding, structured outputs, guardrails and evaluation datasets tailored to your use case.",
      },
    ],
  },
  {
    slug: "backend-development",
    icon: "server",
    title: "Backend Development",
    tagline: "APIs, databases & scalable systems",
    short:
      "APIs, databases, authentication and scalable backend systems that stay reliable under load.",
    intro:
      "We build the engine room, well-designed APIs, robust data models and secure services that scale predictably and are a pleasure to build on.",
    problems: [
      "APIs that are inconsistent and painful to integrate with.",
      "Databases that slow down as data grows.",
      "Auth and permissions bolted on as an afterthought.",
      "Systems that fall over under real traffic.",
    ],
    approach: [
      {
        title: "Clean contracts",
        text: "Well-typed, documented APIs (REST or GraphQL) that front ends and partners can trust.",
      },
      {
        title: "Data done right",
        text: "Thoughtful schema design, indexing and caching so performance holds as you scale.",
      },
      {
        title: "Secure by default",
        text: "Authentication, authorization and validation designed in from the start.",
      },
    ],
    deliverables: [
      "REST & GraphQL APIs",
      "Authentication & role-based access",
      "Database design & optimization",
      "Background jobs & queues",
      "Third-party & payment integrations",
    ],
    technologies: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Docker"],
    faqs: [
      {
        q: "REST or GraphQL?",
        a: "Depends on your clients and team. We'll pick the approach that reduces long-term complexity for your case.",
      },
      {
        q: "Can you work with our existing backend?",
        a: "Yes, we regularly extend and refactor existing systems rather than starting from scratch.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "pen",
    title: "UI/UX Design",
    tagline: "Interfaces & digital experiences",
    short: "Modern, user-focused interfaces and digital experiences backed by a real design system.",
    intro:
      "We design products people enjoy using, from research and flows to a polished, consistent interface and a design system your team can build on.",
    problems: [
      "Interfaces that look dated or inconsistent.",
      "Confusing flows that increase support load.",
      "Design and engineering drifting out of sync.",
      "No shared system, so every screen is reinvented.",
    ],
    approach: [
      {
        title: "Understand, then design",
        text: "We map real user goals and flows before pushing pixels, so the interface solves the right problem.",
      },
      {
        title: "Systems, not screens",
        text: "Tokens, components and patterns that keep the whole product consistent and fast to extend.",
      },
      {
        title: "Design for build",
        text: "We design with implementation in mind, so what's designed is what actually ships.",
      },
    ],
    deliverables: [
      "Product & app UI design",
      "UX research & user flows",
      "Design systems & component libraries",
      "Prototypes & usability testing",
      "Design-to-code handoff",
    ],
    technologies: ["Figma", "Design Tokens", "Framer", "Storybook", "Tailwind CSS"],
    faqs: [
      {
        q: "Can you just do design, not development?",
        a: "Absolutely, design is a standalone service, and we hand off cleanly to any engineering team.",
      },
      {
        q: "Do you run user research?",
        a: "Yes, scaled to your budget, from quick usability tests to structured research programs.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    icon: "cloud",
    title: "Cloud & DevOps",
    tagline: "Infrastructure, CI/CD & scalability",
    short: "Cloud infrastructure, deployment, CI/CD and scalable systems you can trust.",
    intro:
      "We set up cloud infrastructure and delivery pipelines that make shipping safe and boring, automated, observable and cost-aware.",
    problems: [
      "Manual, risky deployments that everyone dreads.",
      "Unpredictable cloud bills with no visibility.",
      "No monitoring, so issues surface from users first.",
      "Infrastructure nobody fully understands.",
    ],
    approach: [
      {
        title: "Infrastructure as code",
        text: "Reproducible, version-controlled infrastructure instead of manual console clicking.",
      },
      {
        title: "Ship with confidence",
        text: "CI/CD with automated tests and staged rollouts so releases are routine.",
      },
      {
        title: "See everything",
        text: "Logging, metrics and alerts so you catch problems before customers do.",
      },
    ],
    deliverables: [
      "Cloud architecture & setup",
      "CI/CD pipelines",
      "Containerization & orchestration",
      "Monitoring, logging & alerting",
      "Cost optimization & scaling",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    faqs: [
      {
        q: "Which cloud do you use?",
        a: "We work primarily with AWS and are comfortable across the major providers; we'll match your existing setup.",
      },
      {
        q: "Can you reduce our cloud costs?",
        a: "Usually, right-sizing, autoscaling and cleanup often cut spend meaningfully without hurting reliability.",
      },
    ],
  },
  {
    slug: "automation",
    icon: "workflow",
    title: "Automation",
    tagline: "Workflows & business process automation",
    short: "Business process automation and workflow solutions that remove repetitive work.",
    intro:
      "We automate the manual, repetitive work draining your team, connecting tools, moving data and triggering actions reliably so people focus on higher-value work.",
    problems: [
      "Hours lost to copy-paste between tools.",
      "Manual steps that quietly introduce errors.",
      "Disconnected systems that don't talk to each other.",
      "Processes that only one person knows how to run.",
    ],
    approach: [
      {
        title: "Map the process",
        text: "We document the real workflow, find the friction, and automate the parts with the highest payoff first.",
      },
      {
        title: "Connect the tools",
        text: "Integrations and pipelines that move data reliably between the systems you already use.",
      },
      {
        title: "Trustworthy by design",
        text: "Retries, logging and clear failure handling so automation runs unattended with confidence.",
      },
    ],
    deliverables: [
      "Workflow & process automation",
      "System & API integrations",
      "Data pipelines & syncing",
      "Scheduled & event-driven jobs",
      "Internal tools & dashboards",
    ],
    technologies: ["Python", "Node.js", "Webhooks", "REST APIs", "Message Queues"],
    faqs: [
      {
        q: "Do you use no-code tools or custom code?",
        a: "Whichever fits, we combine no-code platforms and custom code to get the most reliable result for the cost.",
      },
      {
        q: "How do we know automations keep working?",
        a: "We add logging and alerts so failures are visible and recoverable, not silent.",
      },
    ],
  },
  {
    slug: "cybersecurity",
    icon: "shield",
    title: "Cybersecurity",
    tagline: "Secure applications & practices",
    short: "Secure applications, authentication and security-focused development practices.",
    intro:
      "We build security into the way software is designed and shipped, from authentication and data protection to reviews that catch issues before attackers do.",
    problems: [
      "Security treated as a checkbox at the end.",
      "Weak authentication and session handling.",
      "Sensitive data stored or transmitted unsafely.",
      "No process to catch vulnerabilities in code.",
    ],
    approach: [
      {
        title: "Secure foundations",
        text: "Strong authentication, least-privilege access and safe data handling from day one.",
      },
      {
        title: "Review & harden",
        text: "Code review, dependency scanning and sensible hardening across the stack.",
      },
      {
        title: "Reduce the blast radius",
        text: "Design choices that limit the damage if any one component is compromised.",
      },
    ],
    deliverables: [
      "Authentication & authorization",
      "Data encryption & secure storage",
      "Security reviews & hardening",
      "Dependency & vulnerability scanning",
      "Secure development practices",
    ],
    technologies: ["OAuth 2.0 / OIDC", "JWT", "Encryption", "OWASP", "SAST / DAST"],
    faqs: [
      {
        q: "Do you do formal penetration testing?",
        a: "We provide practical security reviews and hardening, and coordinate specialist pen-testing partners when a formal audit is required.",
      },
      {
        q: "Can you help with compliance?",
        a: "We can align engineering practices with common frameworks; formal certification is handled with your compliance team.",
      },
    ],
  },
  {
    slug: "software-consulting",
    icon: "compass",
    title: "Software Consulting",
    tagline: "Architecture, planning & strategy",
    short: "Technical architecture, planning and development strategy to de-risk your build.",
    intro:
      "Sometimes you need a clear plan before you need code. We help teams choose the right architecture, technology and roadmap, and avoid expensive wrong turns.",
    problems: [
      "Unsure which technology or architecture to commit to.",
      "A roadmap that keeps slipping without clear reasons.",
      "Technical debt slowing every new feature.",
      "Need a credible plan before investing in a build.",
    ],
    approach: [
      {
        title: "Understand the goal",
        text: "We start from business outcomes, not tech preferences, and work backwards to the right approach.",
      },
      {
        title: "Pragmatic architecture",
        text: "Clear, documented decisions that balance speed now against maintainability later.",
      },
      {
        title: "A plan you can act on",
        text: "A roadmap with scope, sequencing and risks, something your team can actually execute.",
      },
    ],
    deliverables: [
      "Technical architecture & planning",
      "Technology selection & audits",
      "Roadmaps & scoping",
      "Code & system reviews",
      "Team & process guidance",
    ],
    technologies: ["Architecture", "System Design", "Code Audits", "Roadmapping"],
    faqs: [
      {
        q: "Is consulting a fixed engagement?",
        a: "It can be a short audit, an ongoing advisory role, or a lead-in to a full build, whatever fits your stage.",
      },
      {
        q: "Will you work with our existing team?",
        a: "Yes, much of our consulting is done alongside in-house teams, augmenting rather than replacing them.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const serviceSlugs = services.map((s) => s.slug);
