import Link from "next/link";
import { Github, Linkedin, Twitter, Dribbble, Mail, Phone, ArrowRight, ArrowUpRight } from "lucide-react";
import { site, footerLinks } from "@/lib/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#071A33" }} className="relative text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(22,119,255,0.22), transparent 70%)" }}
      />

      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" aria-label={`${site.name} home`} className="inline-flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.png" alt={`${site.name} icon`} width={298} height={484} className="h-9 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold uppercase tracking-tight text-white">
                  <span className="text-brand-400">Six</span>Stack
                </span>
                <span className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.4em] text-white/50">
                  Solutions
                </span>
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              We design, build and scale modern software, web, mobile, AI, cloud and
              automation, for teams that care about quality.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-brand-500"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <FooterCol title="Services" links={footerLinks.services} />
          <FooterCol title="Company" links={footerLinks.company} />
          <FooterCol title="Technologies" links={footerLinks.technologies} />

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white">Contact us</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 text-white/60 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-brand-400" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2.5 text-white/60 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-brand-400" />
                  {site.phone}
                </a>
              </li>
            </ul>

            <h4 className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Connect with us
            </h4>
            <div className="mt-4 flex items-center gap-3">
              {site.socials.map((s) => {
                const Icon = iconMap[s.icon] ?? ArrowUpRight;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {legal.map((l) => (
              <Link key={l.label} href={l.href} className="text-white/50 transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
