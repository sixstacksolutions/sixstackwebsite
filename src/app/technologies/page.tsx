import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TechnologyCard } from "@/components/ui/TechnologyCard";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { techCategories, trustStrip } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "The technology ecosystem we build with, frontend, backend, mobile, AI/ML, databases and cloud/DevOps.",
};

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        kicker="Technologies"
        title={<>The stack behind the software we ship</>}
        description="We're deliberately technology-agnostic, we choose tools per project. Here's the ecosystem we work in most often, grouped by discipline."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Technologies" }]}
        image="/images/heroes/technologies.jpg"
      />

      {/* marquee band */}
      <section className="border-b border-line bg-white py-8">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-3">
            {trustStrip.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-surface-50 px-4 py-2 text-sm font-medium text-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((cat) => (
              <StaggerItem key={cat.id} className="h-full scroll-mt-28">
                <div id={cat.id} className="h-full">
                  <TechnologyCard
                    icon={cat.icon}
                    title={cat.title}
                    description={cat.description}
                    items={cat.items}
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <div className="mt-14 rounded-2xl border border-line bg-surface-50 p-8 text-center sm:p-10">
              <h2 className="text-xl font-bold text-ink">
                Don&apos;t see your stack?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-body">
                These are the tools we reach for most, not a hard limit. We regularly
                work in adjacent technologies and pick the right one for your goals,
                team and constraints, not our preferences.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}
