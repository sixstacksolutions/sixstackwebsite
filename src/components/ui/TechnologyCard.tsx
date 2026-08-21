import { icons, type IconKey } from "@/lib/icons";

export function TechnologyCard({
  icon,
  title,
  description,
  items,
}: {
  icon: IconKey;
  title: string;
  description: string;
  items: string[];
}) {
  const Icon = icons[icon];
  return (
    <div className="group h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-[0_10px_24px_-12px_rgba(14,154,141,0.7)]">
          {Icon && <Icon className="h-5 w-5" />}
        </div>
        <h3 className="text-lg font-bold text-ink">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-body">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-surface-50 px-3 py-1 text-xs font-medium text-ink transition-colors group-hover:border-brand-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
