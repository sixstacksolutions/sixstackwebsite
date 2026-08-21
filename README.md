# Six Stack Solutions — Website

A modern, premium, fully responsive website for Six Stack Solutions, built with
**Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**
and **Lucide** icons. Light theme, design system derived from the brand logo.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To create a production build:

```bash
npm run build
npm start
```

> Note: dependencies could not be installed in the environment this project was
> generated in (its package registry was locked down), so the build has **not**
> been run here. On any machine with normal npm access, `npm install` followed by
> `npm run dev` / `npm run build` will work with the versions pinned in
> `package.json`.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a custom design system (`tailwind.config.ts`, `globals.css`)
- **Framer Motion** for entrance, scroll and page motion (respects `prefers-reduced-motion`)
- **Lucide React** icons
- Fonts via `next/font`: Space Grotesk (display), Manrope (body), JetBrains Mono (labels)

The hero visual is a **pure CSS-3D + Framer Motion** isometric "stack" that echoes
the logo — no WebGL dependency, so it stays fast on mobile and degrades gracefully.
(If you later want a true Three.js/R3F scene, `src/components/three/HeroVisual.tsx`
is the single place to swap it in.)

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout, metadata, fonts, navbar/footer
│   ├── page.tsx              # Home
│   ├── about/                # About
│   ├── services/             # Services + [service] dynamic detail
│   ├── technologies/         # Technologies
│   ├── projects/             # Projects + [project] dynamic case study
│   ├── process/              # Process
│   ├── contact/              # Contact
│   ├── careers/              # Careers
│   ├── not-found.tsx         # 404
│   ├── sitemap.ts / robots.ts
│   ├── icon.svg              # Favicon (brand mark)
│   └── globals.css           # Design tokens + base styles
├── components/
│   ├── brand/                # Logo + mark
│   ├── layout/               # Navbar, Footer
│   ├── ui/                   # Button, cards, Reveal, Accordion, etc.
│   ├── sections/             # PageHero, CTASection, ContactForm, ProcessTimeline
│   ├── home/                 # Home page sections
│   ├── projects/             # Projects grid (filtering)
│   └── three/                # Hero visual
├── data/                     # services, projects, technologies, process (edit here)
└── lib/                      # site config, fonts, icons, helpers, contact submit
```

## Editing content

Almost all content is data-driven and easy to update:

- **Site info, nav, contact & socials:** `src/lib/site.ts`
  (email, phone, location and social URLs are **placeholders** — replace them).
- **Services:** `src/data/services.ts`
- **Projects / case studies:** `src/data/projects.ts`
  (illustrative **sample** projects — replace with real ones; add real screenshots
  by swapping `ProjectCover` for an `<img>`).
- **Technologies:** `src/data/technologies.ts`
- **Process steps:** `src/data/process.ts`

## Logo

The whole site loads the logo from a single file: **`public/logo.png`**. The
navbar, footer, hero, loading screen and 404 all use it (via the `LogoMark`
component in `src/components/brand/Logo.tsx`), so replacing that one file updates
the logo everywhere.

`public/logo.png` currently holds a close placeholder — **replace it with the
official logo file** (keep the same name `logo.png`, ideally a transparent PNG)
and every placement updates automatically. A vector version and the SVG favicon
(`public/logo-mark.svg`, `src/app/icon.svg`) remain for reference.

## Contact form

The form (`src/components/sections/ContactForm.tsx`) has full validation, loading,
error and success states. There is **no backend wired up** — submission is handled
by a single function in `src/lib/submitContact.ts` that currently simulates a
request (it does **not** send email). Connect a real API route or email service
there when ready; the UI needs no changes.

## Accessibility & performance

- Semantic HTML, heading hierarchy, visible focus states, skip link, `alt`/aria text
- `prefers-reduced-motion` respected throughout
- No WebGL dependency; images/motion kept light; fonts self-hosted via `next/font`
- Per-page metadata + Open Graph, sitemap and robots
```
