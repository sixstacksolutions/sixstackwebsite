import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function PageHero({
  kicker,
  title,
  description,
  breadcrumb,
  children,
  align = "left",
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface-50 pt-[var(--nav-h)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fade"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[440px] w-[440px] rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(22,119,255,0.12), transparent 70%)" }}
      />
      <div className="container-x relative py-16 sm:py-20">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {breadcrumb && (
            <Reveal>
              <nav
                className={cn(
                  "mb-6 flex items-center gap-1.5 text-xs text-slate-muted",
                  align === "center" && "justify-center"
                )}
                aria-label="Breadcrumb"
              >
                {breadcrumb.map((b, i) => (
                  <span key={b.label} className="inline-flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="h-3 w-3" />}
                    {b.href ? (
                      <Link href={b.href} className="transition-colors hover:text-ink">
                        {b.label}
                      </Link>
                    ) : (
                      <span className="text-ink">{b.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            </Reveal>
          )}
          {kicker && (
            <Reveal>
              <div className={cn("mb-3", align === "center" && "text-center")}>
                <span className="kicker">{kicker}</span>
              </div>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-display-lg font-bold">{title}</h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="lead mt-5">{description}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className={cn("mt-8", align === "center" && "flex justify-center")}>
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
