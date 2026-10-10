"use client";

import { ArrowRight, Github, ShieldCheck, Terminal, Users } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig, platforms } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { HeroMock } from "@/components/HeroMock";

const stats = [
  { icon: Terminal, value: "7+", label: "Job boards & ATS sources scanned" },
  { icon: Users, value: "1-tap", label: "Human approval before every send" },
  { icon: ShieldCheck, value: "100%", label: "Local storage — nothing leaves" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-32 sm:pt-36 lg:pb-48">
      {/* background layers */}
      <div aria-hidden className="absolute inset-0 -z-30 bg-[rgb(var(--bg))]" />
      <div aria-hidden className="absolute inset-0 -z-20 bg-grid-fade" />
      <div aria-hidden className="absolute inset-0 -z-10 surface-grid" />
      <div
        aria-hidden
        className="absolute left-1/2 top-[-14rem] -z-10 h-[32rem] w-[60rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.08] blur-[120px]"
      />

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
            >
              <span className="flex h-4 items-center rounded-full bg-emerald-500/20 px-1.5 font-mono text-[10px] font-bold text-emerald-300">
                v1.0
              </span>
              Open source · MIT · Built for Nigerian & international devs
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Land Remote Software Internships Worldwide —{" "}
              <span className="text-gradient">Fully Automated.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              Finding legit remote software &amp; frontend internships that actually accept
              Nigerian and international candidates is exhausting. InternPulse AI filters the
              noise across global boards and company ATS pages, auto-applies with a tailored
              resume in one click, and tracks every response live through your Outlook inbox.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <ButtonLink
                href={siteConfig.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full sm:w-auto"
              >
                Download Desktop App
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Github className="h-4 w-4" />
                View Source on GitHub
              </ButtonLink>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1.5">
                  <stat.icon className="h-4 w-4 text-emerald-400" />
                  <dt className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="text-[11px] leading-snug text-zinc-500">{stat.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* mockup */}
          <div className="relative pb-16 sm:pb-24 lg:pb-0">
            <HeroMock />
          </div>
        </div>
      </div>

      {/* platform marquee */}
      <div className="mask-fade-x mt-24 overflow-hidden border-y border-white/5 bg-white/[0.015] py-4">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
          Scanning these sources every cycle
        </p>
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {[...platforms, ...platforms].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-600 transition-colors hover:text-zinc-300"
            >
              <span className="h-1 w-1 rounded-full bg-emerald-500/50" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
