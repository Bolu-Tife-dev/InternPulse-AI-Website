# InternPulse AI — Landing Page

High-converting marketing site for **InternPulse AI**, the open-source desktop app that matches developers with global remote software internships and auto-applies with tailored resumes.

## Tech Stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS** (dark mode, custom design tokens)
- **Framer Motion** (scroll reveals, staggered grids, tab transitions)
- **Lucide Icons**

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx          # Fonts, metadata, SEO/OG tags
  page.tsx            # Section composition
  globals.css         # Tailwind layers, glassmorphism, grid/noise utilities
  icon.svg            # App icon
components/
  Navbar.tsx          # Sticky glass navbar + mobile drawer
  Hero.tsx            # Hero copy, CTAs, stats, platform marquee
  HeroMock.tsx        # Animated job discovery matrix + Outlook tracker preview
  Features.tsx        # 6-card core features grid
  SetupGuide.tsx      # Pipeline diagram + 4-step free API setup cards
  InstallGuide.tsx    # Windows / macOS / Linux tabs + CLI instructions
  SecurityBanner.tsx  # Local-first privacy section
  Footer.tsx          # Repo, docs, license, contact links
  ui/                 # Button, Reveal, SectionHeading, CodeBlock primitives
lib/
  site.ts             # ⚠️ All site-wide links & copy live here
  utils.ts            # cn() classname helper
```

## Configure Before Deploying

All site-wide links live in **`lib/site.ts`**:

```ts
repoUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website",
releasesUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website/releases/latest",
docsUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website#readme",
issuesUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website/issues",
contactEmail: "dev@internpulse.ai",
```

Update `metadataBase` / OpenGraph URLs in `app/layout.tsx` to your production domain after deploying.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected.
3. Click **Deploy**. No environment variables are required for the landing page.

Or with the CLI:

```bash
npx vercel
```

## Design Notes

- **Palette**: Zinc/slate dark base (`#09090b`) with Emerald (`#10b981`) and Indigo (`#6366f1`) accents.
- **Glassmorphism**: `.glass` utility in `globals.css` — translucent cards with `backdrop-blur-xl`.
- **Motion**: `Reveal` / `StaggerContainer` respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion`.
- **Responsive**: mobile-first; grids collapse to single column below `sm`, navbar swaps to a drawer under `md`.
- **Performance**: the entire page is statically prerendered (~148 kB first load JS).
