export function TechnologyCard({
  title,
  description,
  items,
  index,
}: {
  title: string;
  description: string;
  items: string[];
  index?: number;
}) {
  return (
    /*
      No icon chip. A rounded blue square holding a white outline glyph is the
      default look of every generated template, and six of them stacked in a
      grid is the thing that makes a page read as boilerplate.
      What replaces it is typographic: an oversized index numeral set in the
      display face, hairline-thin and low-contrast, with a rule that draws
      itself across the card on hover. It carries the same "this is item N of a
      set" information the icon never actually carried, it cannot collide with
      anyone else's icon language, and it costs no assets.
    */
    <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
      {typeof index === "number" && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-[7rem] font-extralight leading-none tracking-tighter text-ink/[0.045] transition-colors duration-500 group-hover:text-brand-600/10"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <div className="relative">
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        {/* Hairline that extends on hover — the card's only moving part, so the
            eye is drawn to the one it is actually pointing at. */}
        <span
          aria-hidden
          className="mt-3 block h-px w-10 origin-left bg-brand-600 transition-transform duration-500 ease-premium group-hover:scale-x-[3.2]"
        />
      </div>
      <p className="relative mt-4 text-sm leading-relaxed text-slate-body">{description}</p>
      <div className="relative mt-5 flex flex-wrap gap-2">
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
