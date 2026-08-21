import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Target, Lightbulb, Sparkles } from "lucide-react";
import { WorkArt, kindFromCategory } from "@/components/ui/WorkArt";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getProject, projects, projectSlugs } from "@/data/projects";

export function generateStaticParams() {
  return projectSlugs.map((project) => ({ project }));
}

export function generateMetadata({
  params,
}: {
  params: { project: string };
}): Metadata {
  const project = getProject(params.project);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { project: string };
}) {
  const project = getProject(params.project);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-surface-50 pt-[var(--nav-h)]">
        <div className="container-x py-14 sm:py-16">
          <Reveal>
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-slate-muted">
              <Link href="/" className="hover:text-ink">Home</Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-ink">Projects</Link>
              <span>/</span>
              <span className="text-ink">{project.title}</span>
            </nav>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <Reveal>
              <div>
                <div className="flex items-center gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="font-display text-[0.7rem] uppercase tracking-[0.16em] text-brand-600">
                      {t}
                    </span>
                  ))}
                </div>
                <h1 className="mt-3 text-display-md font-bold">{project.title}</h1>
                <p className="lead mt-4 max-w-xl">{project.summary}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex gap-3 lg:justify-end">
                <Button href="/contact" withArrow>Start a similar project</Button>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.05}>
          <div className="container-x pb-14">
            <div className="aspect-[16/8] overflow-hidden rounded-3xl border border-line shadow-card">
              <WorkArt kind={kindFromCategory(project.category)} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Overview + meta */}
      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="kicker">Overview</span>
              <p className="mt-4 text-lg leading-relaxed text-ink">{project.overview}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-surface-50 p-6">
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-muted">Category</dt>
                  <dd className="font-medium text-ink">{project.category}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-line pt-4">
                  <dt className="text-slate-muted">Type</dt>
                  <dd className="text-right font-medium text-ink">{project.tags.join(", ")}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-line pt-4">
                  <dt className="text-slate-muted">Status</dt>
                  <dd className="font-medium text-ink">{project.year}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="bg-surface-50 py-16 sm:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-bold text-ink">The problem</h2>
              <p className="mt-3 leading-relaxed text-slate-body">{project.problem}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-white p-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-bold text-ink">Our solution</h2>
              <p className="mt-3 leading-relaxed text-slate-body">{project.solution}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features + Technologies */}
      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="kicker">Key features</span>
              <ul className="mt-6 space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-body">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="kicker">Technologies</span>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-surface-50 px-4 py-2 text-sm font-medium text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery (generated) */}
      <section className="pb-16 sm:pb-20">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-3">
            {["Interface", "Dashboard", "Detail"].map((label, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                  <WorkArt kind={kindFromCategory(project.category)} label={label} />
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-slate-muted">
            Illustrative visuals, replace with real screenshots per project.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="container-x">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-brand-300" />
            <span className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-brand-300">
              Outcomes
            </span>
          </div>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-3">
            {project.outcomes.map((o) => (
              <StaggerItem key={o}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <Check className="h-5 w-5 text-brand-400" />
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{o}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-line py-12">
        <div className="container-x">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 transition-all hover:border-brand-200 hover:shadow-card"
          >
            <div>
              <span className="font-display text-[0.7rem] uppercase tracking-[0.18em] text-slate-muted">
                Next project
              </span>
              <p className="mt-1 text-lg font-bold text-ink">{next.title}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-brand-600 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

    </>
  );
}
