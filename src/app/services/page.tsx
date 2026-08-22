import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { kindBySlug } from "@/lib/serviceKinds";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software services across web, mobile, AI, backend, UI/UX, cloud & DevOps, automation, cybersecurity, databases and consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title={<>Everything you need to design, build and ship software</>}
        description="Bring us a single discipline or the whole problem. Each service is delivered by senior people who care about the details."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        image="/images/heroes/services.jpg"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="divide-y divide-line">
            {services.map((s, i) => {
              return (
                <Reveal key={s.slug}>
                  <article className="group grid gap-8 py-12 lg:grid-cols-[auto_1fr_1fr] lg:gap-12">
                    <div className="flex items-start gap-5 lg:block">
                      <span className="font-display text-5xl font-bold text-brand-100 transition-colors group-hover:text-brand-200 lg:text-6xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div>
                      {/* The photograph replaces the icon tile. A glyph in a
                          bordered square said nothing the heading did not
                          already say; the picture shows the actual work.
                          SmartImage keeps the generated illustration as the
                          fallback for any service without a photo yet. */}
                      <div className="relative mb-5 aspect-[16/10] max-w-md overflow-hidden rounded-xl">
                        <SmartImage
                          src={`/images/services/${s.slug}.jpg`}
                          alt={s.title}
                          kind={kindBySlug[s.slug] ?? "web"}
                          label={s.title}
                          className="saturate-[0.8] contrast-[1.04] transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
                        />
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 bg-brand-700/30 mix-blend-color"
                        />
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
                        />
                      </div>
                      <h2 className="text-2xl font-bold text-ink">{s.title}</h2>
                      <p className="mt-1 font-display text-xs uppercase tracking-[0.16em] text-brand-600">
                        {s.tagline}
                      </p>
                      <p className="mt-4 max-w-md leading-relaxed text-slate-body">{s.intro}</p>
                      <Link
                        href={`/services/${s.slug}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                      >
                        Explore {s.title}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                    <div className="lg:pt-16">
                      <h3 className="font-display text-[0.7rem] uppercase tracking-[0.18em] text-slate-muted">
                        What we provide
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-sm text-slate-body">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {s.technologies.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-line bg-surface-50 px-3 py-1 text-xs font-medium text-ink"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
