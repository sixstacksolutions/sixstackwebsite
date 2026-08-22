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

// Real case studies go here. The eight illustrative samples that used to sit
// in this array were removed on request until real work is ready to publish.
//
// TO RESTORE, TWO THINGS ARE NEEDED — not just this array:
//   1. the entries:     git show <commit>~1:src/data/projects.ts
//   2. the detail route, deleted in the same commit because Next cannot
//      static-export a dynamic route whose generateStaticParams() returns
//      an empty list:
//      git checkout <commit>~1 -- "src/app/projects/[project]"
//
// Restoring only this array relights the home page and the /projects grid
// (each renders its own empty state meanwhile), but every card links to
// /projects/<slug>, so without step 2 those links all 404.
export const projects: Project[] = [];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectSlugs = projects.map((p) => p.slug);
