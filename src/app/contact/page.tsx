import type { Metadata } from "next";
import { Mail, Phone, Clock, Github, Linkedin, Twitter, Dribbble, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We'll come back with a clear, honest plan, usually within one business day.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title={<>Let&apos;s build something</>}
        description="Tell us what you're working on, timeline, goals, anything useful. We'll get back to you with honest next steps."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Info */}
          <Reveal>
            <div>
              <h2 className="text-xl font-bold text-ink">Get in touch</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-body">
                Prefer email or want to skip the form? Reach us directly, the details
                below are placeholders you can swap for real ones.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-200"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-display uppercase tracking-[0.16em] text-slate-muted">
                      Email
                    </span>
                    <span className="mt-1 block font-medium text-ink">{site.email}</span>
                  </span>
                </a>

                <a
                  href={`tel:${site.phone}`}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-200"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-display uppercase tracking-[0.16em] text-slate-muted">
                      Phone
                    </span>
                    <span className="mt-1 block font-medium text-ink">{site.phone}</span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-display uppercase tracking-[0.16em] text-slate-muted">
                      Response time
                    </span>
                    <span className="mt-1 block font-medium text-ink">Within one business day</span>
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <span className="block text-xs font-display uppercase tracking-[0.16em] text-slate-muted">
                  Follow along
                </span>
                <div className="mt-3 flex gap-3">
                  {site.socials.map((s) => {
                    const Icon = iconMap[s.icon] ?? ArrowUpRight;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-slate-body transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-600"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
