import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { icons } from "@/lib/icons";
import { getService, services, serviceSlugs } from "@/data/services";
import { processSteps } from "@/data/process";

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export function generateMetadata({
  params,
}: {
  params: { service: string };
}): Metadata {
  const service = getService(params.service);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.short,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { service: string };
}) {
  const service = getService(params.service);
  if (!service) notFound();

  const Icon = icons[service.icon];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        kicker={service.tagline}
        title={service.title}
        description={service.intro}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" withArrow>
            Start a Project
          </Button>
          <Button href="/services" variant="outline">
            All services
          </Button>
        </div>
      </PageHero>

      {/* Problems we solve */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            kicker="Problems we solve"
            title="The challenges this addresses"
            description="If any of these sound familiar, this is where we can help."
          />
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {service.problems.map((p) => (
              <StaggerItem key={p}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-5">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                    <AlertTriangle className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-body">{p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            kicker="Our approach"
            title="How we deliver it"
            description="A consistent way of working that keeps quality high and surprises low."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-white p-7">
                  <span className="font-display text-xs text-brand-500">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold text-ink">{a.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-body">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + Technologies */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="rounded-2xl border border-line bg-white p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                {Icon && <Icon className="h-6 w-6" />}
              </div>
              <h2 className="text-xl font-bold text-ink">What you get</h2>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-slate-body">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-xl font-bold text-ink">Technologies we use</h2>
              <p className="mt-2 text-sm text-slate-body">
                Chosen per project, these are the tools we most often reach for here.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-surface-50 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-line bg-surface-50 p-6">
                <p className="text-sm leading-relaxed text-slate-body">
                  Not sure which technology is right? That&apos;s part of the job, we&apos;ll
                  recommend the stack that best fits your goals, team and budget.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Development process */}
      <section className="bg-surface-50 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            kicker="Development process"
            title="How a project runs"
            description="Every engagement follows the same clear, transparent path."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.slice(0, 4).map((step, i) => (
              <Reveal key={step.number} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <span className="font-display text-3xl font-bold text-brand-100">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-body">{step.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-6 text-center">
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                See the full 7-step process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            kicker="FAQ"
            title="Common questions"
            description="A few things clients often ask before we start."
          />
          <div>
            <Accordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-line bg-surface-50 py-16">
        <div className="container-x">
          <h2 className="mb-8 font-display text-xs uppercase tracking-[0.18em] text-slate-muted">
            Explore other services
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {others.map((o) => {
              const OIcon = icons[o.icon];
              return (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-50 text-brand-600">
                    {OIcon && <OIcon className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-4 flex items-center justify-between text-base font-bold text-ink">
                    {o.title}
                    <ArrowRight className="h-4 w-4 text-slate-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-600" />
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
