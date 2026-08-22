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
  image,
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
  align?: "left" | "center";
  /**
   * Path under /public for a background photograph. With one the banner
   * inverts to light-on-dark; without one it keeps the original light
   * treatment, so pages can be converted one at a time.
   */
  image?: string;
}) {
  const onImage = Boolean(image);

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-[var(--nav-h)]",
        onImage ? "bg-ink" : "border-b border-line bg-surface-50"
      )}
    >
      {onImage ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/*
            Two stacked washes rather than one flat overlay. The brand-hued
            `mix-blend-color` pass pulls whatever palette the photograph
            happens to have onto the brand hue — the same trick the services
            panel uses — and the gradient below it does the actual contrast
            work, weighted to the left where the copy sits so the right side
            of the picture stays visible instead of going uniformly muddy.
          */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-brand-800/40 mix-blend-color"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/75 to-ink/45"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/40"
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-fade"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-24 h-[440px] w-[440px] rounded-full opacity-70 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(22,119,255,0.12), transparent 70%)" }}
          />
        </>
      )}
      <div
        className={cn(
          "container-x relative",
          // A photograph needs room to read as one; the flat variant does not.
          onImage ? "py-24 sm:py-32" : "py-16 sm:py-20"
        )}
      >
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {breadcrumb && (
            <Reveal>
              <nav
                className={cn(
                  "mb-6 flex items-center gap-1.5 text-xs",
                  onImage ? "text-white/60" : "text-slate-muted",
                  align === "center" && "justify-center"
                )}
                aria-label="Breadcrumb"
              >
                {breadcrumb.map((b, i) => (
                  <span key={b.label} className="inline-flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="h-3 w-3" />}
                    {b.href ? (
                      <Link
                        href={b.href}
                        className={cn(
                          "transition-colors",
                          onImage ? "hover:text-white" : "hover:text-ink"
                        )}
                      >
                        {b.label}
                      </Link>
                    ) : (
                      <span className={onImage ? "text-white" : "text-ink"}>{b.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            </Reveal>
          )}
          {kicker && (
            <Reveal>
              <div className={cn("mb-3", align === "center" && "text-center")}>
                <span className={cn("kicker", onImage && "text-brand-300")}>{kicker}</span>
              </div>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            {/* h1 is styled text-ink globally, so on a photo it must be overridden. */}
            <h1 className={cn("text-display-lg font-bold", onImage && "text-white")}>
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className={cn("lead mt-5", onImage && "text-white/75")}>{description}</p>
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
