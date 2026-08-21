"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";

const megaGroups = [
  {
    title: "Software Development",
    items: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "Backend Development", href: "/services/backend-development" },
      { label: "Software Consulting", href: "/services/software-consulting" },
    ],
  },
  {
    title: "AI & Data",
    items: [
      { label: "AI & Machine Learning", href: "/services/ai-development" },
      { label: "Automation", href: "/services/automation" },
    ],
  },
  {
    title: "Cloud & Security",
    items: [
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
    ],
  },
  {
    title: "Design",
    items: [{ label: "UI/UX Design", href: "/services/ui-ux-design" }],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50" onMouseLeave={() => setMega(false)}>
      <div
        className={cn(
          "border-b bg-white/90 backdrop-blur-xl transition-all duration-500 ease-premium",
          scrolled ? "border-line/80 shadow-soft" : "border-line/50"
        )}
      >
        <nav
          className={cn(
            "container-x flex items-center justify-between transition-all duration-500 ease-premium",
            scrolled ? "h-[64px]" : "h-[76px]"
          )}
          aria-label="Primary"
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const isServices = item.label === "Services";
              return (
                <li
                  key={item.href}
                  onMouseEnter={() => setMega(isServices)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors duration-200",
                      isActive(item.href) ? "text-ink" : "text-slate-body hover:text-ink"
                    )}
                  >
                    {item.label}
                    {isServices && (
                      <ChevronDown
                        className={cn("h-3.5 w-3.5 transition-transform duration-300", mega && "rotate-180")}
                      />
                    )}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-600"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(22,119,255,0.6)] transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface-100 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mega menu */}
        <AnimatePresence>
          {mega && (
            <motion.div
              key="mega"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-white/95 backdrop-blur-xl lg:block"
            >
              <div className="container-x grid grid-cols-4 gap-8 py-10">
                {megaGroups.map((g) => (
                  <div key={g.title}>
                    <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                      {g.title}
                    </h3>
                    <ul className="mt-4 space-y-1">
                      {g.items.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            className="group flex items-center gap-1.5 rounded-lg py-2 text-[0.95rem] font-medium text-ink transition-colors hover:text-brand-600"
                          >
                            {it.label}
                            <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={reduce ? { opacity: 0 } : { y: "-100%" }}
              animate={reduce ? { opacity: 1 } : { y: 0 }}
              exit={reduce ? { opacity: 0 } : { y: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute inset-x-0 top-0 rounded-b-3xl border-b border-line bg-white px-5 pb-8 pt-[84px] shadow-card"
            >
              <ul className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium transition-colors",
                        isActive(item.href) ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-surface-100"
                      )}
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 opacity-40" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-4 text-base font-semibold text-white"
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
