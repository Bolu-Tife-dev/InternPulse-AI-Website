"use client";

import { motion } from "framer-motion";
import {
  Filter,
  HardDrive,
  MailCheck,
  MousePointerClick,
  Radar,
  Wand2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "emerald" | "indigo";
  tag?: string;
};

const features: Feature[] = [
  {
    icon: Filter,
    title: "Smart Eligibility Filter",
    description:
      "Explicitly targets remote software and frontend engineering internships that accept Nigerian citizens and work-from-home candidates worldwide — no more dead-end applications.",
    accent: "emerald",
    tag: "NG + Global WFH",
  },
  {
    icon: Radar,
    title: "Multi-Platform Scraping",
    description:
      "A real-time aggregator scanning company ATS pages (Greenhouse, Lever, Ashby) alongside remote boards like Jobicy, Remotive and Jooble in every cycle.",
    accent: "indigo",
    tag: "7+ sources",
  },
  {
    icon: MousePointerClick,
    title: "Human-in-the-Loop Approval",
    description:
      "Preview every scraped job, drop the irrelevant listings, and approve the rest with one click. You stay in full control before anything is submitted.",
    accent: "emerald",
    tag: "You decide",
  },
  {
    icon: Wand2,
    title: "Automated Form & Email Submissions",
    description:
      "Auto-fills ATS application forms with Playwright and dispatches tailored emails with a resume and cover letter generated per role.",
    accent: "indigo",
    tag: "Playwright + Gemini",
  },
  {
    icon: MailCheck,
    title: "Outlook Status Tracker",
    description:
      "OAuth connection to Microsoft Outlook reads responses, rejections and interview invites automatically, then updates each application's status for you.",
    accent: "emerald",
    tag: "Microsoft Graph",
  },
  {
    icon: HardDrive,
    title: "100% Local & Free",
    description:
      "Runs on free-tier APIs (Gemini 1.5 Flash, Microsoft Graph) and stores every CV, credential and token in a local SQLite database on your machine.",
    accent: "indigo",
    tag: "SQLite · $0",
  },
];

const accentStyles = {
  emerald: {
    icon: "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
    glow: "group-hover:shadow-[0_0_50px_-18px_rgba(16,185,129,0.75)]",
    bar: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    tag: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300/90",
  },
  indigo: {
    icon: "border-indigo-400/25 bg-indigo-500/10 text-indigo-300",
    glow: "group-hover:shadow-[0_0_50px_-18px_rgba(99,102,241,0.75)]",
    bar: "bg-gradient-to-r from-indigo-400 to-indigo-600",
    tag: "border-indigo-400/20 bg-indigo-500/10 text-indigo-300/90",
  },
} as const;

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute left-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.06] blur-[110px]"
      />
      <div className="container">
        <SectionHeading
          eyebrow="Core Features"
          title={
            <>
              Everything between a job posting and your{" "}
              <span className="text-gradient">interview call</span>
            </>
          }
          description="Six tightly integrated modules turn a noisy global job market into a shortlist you actually approve — then track to the offer."
        />

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const styles = accentStyles[feature.accent];
            return (
              <motion.article
                key={feature.title}
                variants={staggerItem}
                className={cn(
                  "glass glass-hover group relative flex flex-col p-6",
                  styles.glow,
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    styles.bar,
                  )}
                />
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-xl border transition-transform duration-300 group-hover:scale-105",
                      styles.icon,
                    )}
                  >
                    <feature.icon className="h-5 w-5" />
                  </span>
                  {feature.tag && (
                    <span
                      className={cn(
                        "rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium",
                        styles.tag,
                      )}
                    >
                      {feature.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </StaggerContainer>

        <Reveal delay={0.15} className="mt-14">
          <div className="glass flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-base font-semibold text-zinc-100">
                Ready to stop scrolling and start applying?
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Grab a free build from GitHub Releases — set up takes under 10 minutes.
              </p>
            </div>
            <a
              href="#install"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 px-5 text-sm font-semibold text-emerald-950 shadow-[0_10px_40px_-12px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400"
            >
              See install steps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
