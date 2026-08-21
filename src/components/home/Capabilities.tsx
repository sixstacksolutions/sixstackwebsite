import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

const groups = [
  { no: "01", title: "Digital Products", slugs: ["web-development", "mobile-development", "ui-ux-design", "backend-development"] },
  { no: "02", title: "AI & Automation", slugs: ["ai-development", "automation", "software-consulting"] },
  { no: "03", title: "Cloud & Security", slugs: ["cloud-devops", "cybersecurity"] },
];

const titleOf = (slug: string) => services.find((s) => s.slug === slug)?.title ?? slug;

export function Capabilities() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">
                Capabilities
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-display-lg font-extrabold text-ink">
                Everything you need
                <br />
                to build and scale
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-body">
                One senior team across the whole stack. Pick a single discipline or hand us
                the entire problem, from first idea to a product in production.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-brand-600"
              >
                View all services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="space-y-14">
            {groups.map((g, gi) => (
              <Reveal key={g.no} delay={gi * 0.08}>
                <div>
                  <div className="flex items-baseline gap-4 border-b border-line pb-3">
                    <span className="text-sm font-bold text-brand-600">{g.no}</span>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight text-ink">
                      {g.title}
                    </h3>
                  </div>
                  <ul className="mt-2">
                    {g.slugs.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          className="group flex items-center justify-between border-b border-line/70 py-4 transition-colors hover:border-brand-300"
                        >
                          <span className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <span className="text-lg font-semibold text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-600 sm:text-xl">
                              {titleOf(slug)}
                            </span>
                          </span>
                          <ArrowRight className="h-5 w-5 -translate-x-2 text-brand-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
