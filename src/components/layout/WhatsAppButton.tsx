import { site } from "@/lib/site";

/**
 * Persistent WhatsApp entry point, bottom-left on every page.
 *
 * Sits opposite FloatingContact (bottom-right) so the two never overlap, and
 * clears the mobile round button by using the left edge.
 *
 * The number is stored internationally without a leading + or 0: wa.me rejects
 * both. Local 0307 5620642 becomes 92 307 5620642 — dropping the trunk 0 and
 * prefixing Pakistan's country code. Getting this wrong fails silently with a
 * "phone number shared via url is invalid" page, so it is derived in one place
 * from site.ts rather than hand-written per link.
 */
export function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi ${site.name}, I'd like to talk about a project.`
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 left-5 z-40 inline-flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] pl-3.5 pr-3.5 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:pr-5 sm:bottom-6 sm:left-6"
      style={{ height: "3.25rem" }}
    >
      {/* Official WhatsApp glyph. Inline rather than a lucide icon so the mark
          is the real one — a generic speech bubble reads as a support widget,
          not as WhatsApp specifically. */}
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
        className="h-7 w-7 shrink-0 fill-current"
      >
        <path d="M16.004 3.2c-7.06 0-12.79 5.73-12.79 12.79 0 2.26.59 4.46 1.71 6.41L3.2 28.8l6.57-1.7a12.74 12.74 0 0 0 6.23 1.6h.01c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.05-3.75Zm0 23.32h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.01 1.04 1.07-3.9-.25-.4a10.56 10.56 0 0 1-1.62-5.64c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.6-10.64 10.6Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="max-w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 ease-premium group-hover:ml-2.5 group-hover:max-w-[10rem] group-hover:opacity-100">
        WhatsApp us
      </span>
    </a>
  );
}
