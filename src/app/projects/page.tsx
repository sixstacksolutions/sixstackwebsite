import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work across web, mobile, AI, SaaS, automation and e-commerce. Illustrative sample case studies.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Projects"
        title={<>Work that shows how we think</>}
        description="A selection of the kinds of products we build, filterable by category. These are illustrative samples, real case studies drop straight into the same structure."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <ProjectsGrid />
        </div>
      </section>

    </>
  );
}
