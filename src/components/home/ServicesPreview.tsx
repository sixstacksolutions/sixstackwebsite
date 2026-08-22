import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { kindBySlug } from "@/lib/serviceKinds";
import { services } from "@/data/services";

export function ServicesPreview() {
  const featured = services.slice(0, 4);
  return (
    <section className="relative overflow-hidden bg-surface-50 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
            Our Services
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl text-display-md font-extrabold text-ink">
            Transform your business
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lead mt-4 max-w-xl">
            From first idea to a product in production, pick a discipline or bring us
            the whole problem.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) => (
            <StaggerItem key={s.slug} className="h-full">
              <Link
                href={`/services/${s.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-card"
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-premium group-hover:scale-105">
                  <SmartImage
                    src={`/images/services/${s.slug}.jpg`}
                    alt={s.title}
                    kind={kindBySlug[s.slug] ?? "web"}
                    label={s.title}
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,17,32,0.88) 0%, rgba(10,17,32,0.25) 45%, transparent 75%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-white/85">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white px-6 py-3.5 text-base font-semibold text-ink transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-50"
            >
              View More Services
              <ArrowDown className="h-4 w-4 text-brand-600 transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
