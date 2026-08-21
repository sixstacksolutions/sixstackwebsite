import type { Metadata } from "next";
import { Award, Rss, Eye, UserCheck, GraduationCap, Boxes } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { icons } from "@/lib/icons";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "About",
  description:
    "Six Stack Solutions is a senior, full-stack software studio that designs, builds and scales modern products with a focus on quality and maintainability.",
};

const beliefs = [
  { icon: Award, title: "Quality", text: "We'd rather do less and do it properly. Craft is the point, not a nice-to-have." },
  { icon: Rss, title: "Innovation", text: "We stay current and apply new tools where they create real value, not for novelty." },
  { icon: Eye, title: "Transparency", text: "Clear scope, honest timelines and visible progress. No surprises at the end." },
  { icon: UserCheck, title: "User-first thinking", text: "We optimize for the people who use what we build, not just the spec." },
  { icon: GraduationCap, title: "Continuous learning", text: "Every project makes the next one better. We invest in getting sharper." },
  { icon: Boxes, title: "Ownership", text: "We treat your product like ours, accountable from first commit to launch and beyond." },
];

const whyUs = [
  { title: "Senior by default", text: "You work directly with experienced engineers and designers, not a rotating cast of juniors." },
  { title: "Design and engineering together", text: "One team across UX and code means fewer handoffs and a product that ships as designed." },
  { title: "Built to hand over", text: "Typed, documented, maintainable code your team can own and extend without us." },
  { title: "Right-sized process", text: "Enough structure to stay predictable, not so much that it slows the work down." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title={<>A senior software studio that sweats the details</>}
        description="We're Six Stack Solutions, a compact, full-stack team that designs, builds and scales modern software for teams who care about quality as much as we do."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Who we are */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading
            kicker="Who we are"
            title="Software built the way it should be"
            description="Six Stack Solutions exists to build software that's genuinely good, fast, thoughtful and maintainable."
          />
          <Reveal delay={0.1}>
            <div className="space-y-4 text-slate-body">
              <p className="leading-relaxed">
                We span the full stack of modern software: web, mobile, backend, AI,
                cloud, DevOps, UI/UX, databases, security and automation. That breadth
                lets us take real ownership of a product rather than one slice of it.
              </p>
              <p className="leading-relaxed">
                Our approach is simple: understand the real problem, choose the right
                tools for it, and build with the kind of care that holds up long after
                launch. We keep teams small and senior so quality and communication
                never get diluted.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-surface-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            kicker="What we believe"
            title="Principles we actually work by"
            align="center"
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((b) => (
              <StaggerItem key={b.title} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-50 text-brand-600">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body">{b.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Our expertise */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            kicker="Our expertise"
            title="Full-stack, in the truest sense"
            description="A single team you can trust across every layer of a modern product."
          />
          <div className="mt-12 flex flex-wrap gap-3">
            {services.map((s) => {
              const Icon = icons[s.icon];
              return (
                <div
                  key={s.slug}
                  className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand-200"
                >
                  {Icon && <Icon className="h-4 w-4 text-brand-600" />}
                  {s.title}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-surface-50 py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            kicker="Why choose us"
            title="What makes working with us different"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <span className="font-display text-xs text-brand-500">0{i + 1}</span>
                  <h3 className="mt-2 text-base font-bold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team / culture (placeholder) */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            kicker="Team & culture"
            title="Small team, high standards"
            description="We're a close-knit group of engineers and designers who care about craft. This space is ready for real team profiles when you'd like to add them."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="rounded-2xl border border-dashed border-line bg-surface-50 p-6">
                  <div className="h-16 w-16 rounded-full bg-brand-gradient-soft" />
                  <div className="mt-4 h-3 w-24 rounded bg-line" />
                  <div className="mt-2 h-2.5 w-16 rounded bg-line" />
                  <p className="mt-4 text-xs text-slate-muted">
                    Team member placeholder, easy to replace with real profiles.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
