"use client";

import { Database, EyeOff, KeyRound, Lock, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const points = [
  {
    icon: Database,
    title: "Local SQLite storage",
    text: "CVs, cover letters and application history live in a single local database file you control.",
  },
  {
    icon: EyeOff,
    title: "No telemetry, no cloud sync",
    text: "There is no InternPulse server. The app never phones home — traffic only goes to the APIs you configure.",
  },
  {
    icon: KeyRound,
    title: "Tokens stay on device",
    text: "OAuth refresh tokens and API keys are stored locally and used solely to act on your behalf.",
  },
  {
    icon: Lock,
    title: "Open source, auditable",
    text: "MIT-licensed code you can read, fork and verify before granting any permission.",
  },
];

export function SecurityBanner() {
  return (
    <section id="privacy" className="relative py-24 sm:py-28">
      <div className="container">
        <Reveal>
          <div className="glass noise relative overflow-hidden p-8 sm:p-12">
            {/* decorative gradients */}
            <div
              aria-hidden
              className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-[100px]"
            />
            <div
              aria-hidden
              className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-indigo-500/15 blur-[100px]"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Security &amp; Privacy
                </div>
                <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Runs 100% locally.
                  <br />
                  <span className="text-gradient">Your data never leaves.</span>
                </h2>
                <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-zinc-400">
                  InternPulse AI is a desktop application, not a SaaS. Your CV, credentials and
                  Microsoft OAuth tokens stay inside an SQLite database on your machine — there is
                  no vendor database to breach.
                </p>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {points.map((point) => (
                  <li
                    key={point.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-emerald-400/25 hover:bg-white/[0.06]"
                  >
                    <span
                      className={cn(
                        "grid h-9 w-9 place-items-center rounded-lg border border-emerald-400/25 bg-emerald-500/10",
                      )}
                    >
                      <point.icon className="h-4 w-4 text-emerald-300" />
                    </span>
                    <p className="mt-3 text-[14px] font-semibold text-zinc-100">
                      {point.title}
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-zinc-500">
                      {point.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
