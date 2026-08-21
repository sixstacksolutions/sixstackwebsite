export type ProcessStep = {
  number: string;
  title: string;
  summary: string;
  details: string;
  outputs: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    summary: "Understand requirements and business goals.",
    details:
      "We start by understanding the problem, the users and what success looks like, so we build the right thing, not just the thing that was asked for.",
    outputs: ["Goals & success metrics", "Scope & constraints", "Risk assessment"],
  },
  {
    number: "02",
    title: "Planning",
    summary: "Define architecture, technology and roadmap.",
    details:
      "We choose the architecture and stack, break the work into a sequenced roadmap, and agree on what ships first and why.",
    outputs: ["Technical architecture", "Roadmap & milestones", "Stack decisions"],
  },
  {
    number: "03",
    title: "Design",
    summary: "Create UI/UX and prototypes.",
    details:
      "We design flows, interfaces and a component system, validated with prototypes before a line of production code is written.",
    outputs: ["User flows", "UI design system", "Interactive prototypes"],
  },
  {
    number: "04",
    title: "Development",
    summary: "Build the product.",
    details:
      "We build in short iterations with clean, reviewed code, shipping working software you can see and steer throughout.",
    outputs: ["Working increments", "Code reviews", "Regular demos"],
  },
  {
    number: "05",
    title: "Testing",
    summary: "Quality assurance and testing.",
    details:
      "Automated and manual testing across devices and edge cases, so the product is dependable before it reaches real users.",
    outputs: ["Automated test suites", "QA across devices", "Bug triage"],
  },
  {
    number: "06",
    title: "Deployment",
    summary: "Launch the product.",
    details:
      "We ship through automated pipelines with staged rollouts and monitoring, so launches are calm and reversible.",
    outputs: ["CI/CD pipeline", "Staged rollout", "Monitoring & alerts"],
  },
  {
    number: "07",
    title: "Support",
    summary: "Maintenance and improvements.",
    details:
      "After launch we monitor, maintain and keep improving, turning real usage into the next round of enhancements.",
    outputs: ["Monitoring & upkeep", "Iterative improvements", "Roadmap updates"],
  },
];
