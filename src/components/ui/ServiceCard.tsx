import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { icons, type IconKey } from "@/lib/icons";
import { cn } from "@/lib/cn";

export function ServiceCard({
  slug,
  icon,
  title,
  short,
  index,
  className,
}: {
  slug: string;
  icon: IconKey;
  title: string;
  short: string;
  index?: number;
  className?: string;
}) {
  const Icon = icons[icon];
  return (
    <Link
      href={`/services/${slug}`}
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card",
        className
      )}
    >
      {typeof index === "number" && (
        <span className="absolute right-6 top-6 font-display text-xs text-slate-muted/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface-50 text-brand-600 transition-colors duration-300 group-hover:border-brand-200 group-hover:bg-brand-50">
        {Icon && <Icon className="h-6 w-6" />}
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
