// Central site configuration. Replace placeholder contact + social details
// with real values when available, everything else references these.

export const site = {
  name: "Six Stack Solutions",
  shortName: "SixStack",
  domain: "https://sixstacksolutions.com", // placeholder, update when live
  tagline: "Software engineering for products that scale.",
  description:
    "Six Stack Solutions designs, builds, and scales modern software, web, mobile, AI, cloud and automation, for teams that care about quality.",
  // --- Contact ---
  email: "sixstacksolutions@gmail.com",
  phone: "03354309966",
  // WhatsApp, international form with no "+" and no trunk "0" — wa.me rejects
  // both and fails with an "invalid phone number" page rather than an error.
  // Local 0307 5620642 -> 92 (Pakistan) + 3075620642.
  whatsapp: "923075620642",
  whatsappDisplay: "+92 307 5620642",
  // --- Social (placeholders, set real URLs, or leave as # ) ---
  socials: [
    { label: "GitHub", href: "#", icon: "github" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "X (Twitter)", href: "#", icon: "twitter" },
    { label: "Dribbble", href: "#", icon: "dribbble" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Technologies", href: "/technologies" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Development", href: "/services/mobile-development" },
    { label: "AI & Machine Learning", href: "/services/ai-development" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
  ],
  technologies: [
    { label: "Frontend", href: "/technologies#frontend" },
    { label: "Backend", href: "/technologies#backend" },
    { label: "Mobile", href: "/technologies#mobile" },
    { label: "AI / ML", href: "/technologies#ai-ml" },
    { label: "Cloud / DevOps", href: "/technologies#cloud-devops" },
  ],
} as const;
