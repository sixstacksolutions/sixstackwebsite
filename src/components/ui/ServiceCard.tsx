import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import { kindBySlug } from "@/lib/serviceKinds";
import { cn } from "@/lib/cn";

export function ServiceCard({
  slug,
  title,
  short,
  index,
  className,
}: {
  slug: string;
  title: string;
  short: string;
  index?: number;
  className?: string;
}) {
  return (
    <Link
      href={`/services/${slug}`}
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card",
        className
      )}
    >
      {/*
        The icon tile is replaced by the work itself. A photograph of the thing
        being sold says more than an outline glyph in a rounded square, and the
        glyphs were the tell that made the grid read as generated. SmartImage
        keeps the old illustration as the fallback, so a service without a photo
        still renders something deliberate rather than a gap.
      */}
      <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl">
        <SmartImage
          src={`/images/services/${slug}.jpg`}
          alt={title}
          kind={kindBySlug[slug] ?? "web"}
          label={title}
          className="saturate-[0.8] contrast-[1.04] transition-transform duration-700 ease-premium group-hover:scale-[1.06]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-brand-700/30 mix-blend-color"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
        />
        {typeof index === "number" && (
          <span className="absolute left-3 top-3 rounded-md bg-ink/55 px-2 py-1 font-display text-[0.7rem] font-semibold text-white/90 backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-body">{short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
