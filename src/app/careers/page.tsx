import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Heart, Globe2, TrendingUp, Coffee } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Six Stack Solutions, a senior, remote-first software studio that values craft, ownership and continuous learning.",
};

const perks = [
  { icon: Globe2, title: "Remote-first", text: "Work from wherever you do your best thinking, on a schedule that suits you." },
  { icon: TrendingUp, title: "Real growth", text: "Senior mentorship, varied projects and a genuine budget to keep learning." },
  { icon: Heart, title: "Craft-led culture", text: "We care about doing things well. Your best work will be seen and valued." },
  { icon: Coffee, title: "Sane pace", text: "Sustainable workloads and honest timelines, no crunch as a default." },
];

// Placeholder roles, replace with real openings, or remove when none are open.
const roles = [
  { title: "Senior Full-Stack Engineer", type: "Full-time · Remote", area: "Engineering" },
  { title: "Mobile Engineer (React Native / Flutter)", type: "Full-time · Remote", area: "Engineering" },
  { title: "Product Designer (UI/UX)", type: "Full-time · Remote", area: "Design" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title={<>Build great software with people who care</>}
        description="We're a small, senior, remote-first studio. When we grow, we grow carefully, with people who value craft and ownership as much as we do."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* Perks */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading kicker="Life here" title="What it's like to work with us" align="center" />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-50 text-brand-600">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Openings */}
      <section className="bg-surface-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            kicker="Open roles"
            title="Current openings"
            description="These are sample listings to show the layout. Update or remove them to reflect real openings."
          />
          <div className="mt-12 space-y-3">
            {roles.map((r) => (
              <Reveal key={r.title}>
                <Link
                  href="/contact"
                  className="group flex flex-col gap-3 rounded-2xl border border-line bg-white p-6 transition-all hover:border-brand-200 hover:shadow-card sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <span className="font-display text-[0.7rem] uppercase tracking-[0.16em] text-brand-600">
                      {r.area}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-ink">{r.title}</h3>
                    <p className="mt-1 text-sm text-slate-body">{r.type}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Apply
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-center text-sm text-slate-body">
              Don&apos;t see a fit but think you&apos;d belong here?{" "}
              <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
                Introduce yourself
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

    </>
  );
}
