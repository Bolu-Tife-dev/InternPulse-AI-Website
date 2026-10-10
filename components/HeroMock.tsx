"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AtSign,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Loader2,
  MailCheck,
  MapPin,
  Minus,
  Search,
  Send,
  Sparkles,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Job = {
  role: string;
  company: string;
  source: string;
  location: string;
  match: number;
};

const jobs: Job[] = [
  {
    role: "Frontend Engineering Intern",
    company: "Lumina Labs",
    source: "Greenhouse",
    location: "Remote · Global",
    match: 97,
  },
  {
    role: "Software Engineering Intern",
    company: "Northwind Systems",
    source: "Ashby",
    location: "Remote · EMEA/AFR",
    match: 94,
  },
  {
    role: "React Developer Intern",
    company: "Corevault",
    source: "Lever",
    location: "Remote · Worldwide",
    match: 91,
  },
  {
    role: "Full-Stack Intern (Node)",
    company: "Driftline",
    source: "Jobicy",
    location: "Remote · Global",
    match: 88,
  },
  {
    role: "UI Engineering Intern",
    company: "Parallax HQ",
    source: "Remotive",
    location: "Remote · Worldwide",
    match: 85,
  },
];

const tracker = [
  {
    company: "Lumina Labs",
    status: "Interview Invite",
    meta: "Outlook · 2m ago",
    tone: "success" as const,
    icon: CheckCircle2,
  },
  {
    company: "Corevault",
    status: "Auto-applied",
    meta: "Playwright · 14m ago",
    tone: "neutral" as const,
    icon: Send,
  },
  {
    company: "Northwind Systems",
    status: "AI Tailoring CV",
    meta: "Gemini 1.5 Flash",
    tone: "info" as const,
    icon: Loader2,
  },
  {
    company: "Driftline",
    status: "Rejected",
    meta: "Outlook · 1h ago",
    tone: "error" as const,
    icon: XCircle,
  },
];

const toneStyles = {
  success: {
    text: "text-emerald-300",
    dot: "bg-emerald-400",
    chip: "border-emerald-400/25 bg-emerald-500/10",
  },
  info: {
    text: "text-indigo-300",
    dot: "bg-indigo-400",
    chip: "border-indigo-400/25 bg-indigo-500/10",
  },
  neutral: {
    text: "text-zinc-300",
    dot: "bg-zinc-400",
    chip: "border-white/15 bg-white/5",
  },
  error: {
    text: "text-rose-300",
    dot: "bg-rose-400",
    chip: "border-rose-400/25 bg-rose-500/10",
  },
} as const;

function MatchBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-14 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className={cn(
            "h-full rounded-full",
            value >= 92 ? "bg-emerald-400" : "bg-indigo-400",
          )}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="font-mono text-[11px] tabular-nums text-zinc-400">{value}%</span>
    </div>
  );
}

export function HeroMock() {
  const reduce = useReducedMotion();
  const [activeSource, setActiveSource] = useState(0);
  const sources = ["Greenhouse", "Lever", "Ashby", "Jobicy", "Jooble"];

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setActiveSource((i) => (i + 1) % sources.length);
    }, 1800);
    return () => clearInterval(id);
  }, [reduce, sources.length]);

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/20 via-transparent to-indigo-500/20 blur-3xl"
      />

      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="glass noise shadow-card"
      >
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 font-mono text-[11px] text-zinc-500">
              internpulse — discovery-matrix
            </span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            LIVE SCAN
          </span>
        </div>

        {/* search bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
          <Search className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
          <p className="truncate font-mono text-[11px] text-zinc-400">
            role: <span className="text-emerald-300">software OR frontend intern</span>
            {"  ·  "}
            remote: <span className="text-emerald-300">true</span>
            {"  ·  "}
            location: <span className="text-indigo-300">NG + worldwide WFH</span>
          </p>
        </div>

        {/* source ticker */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <AtSign className="h-3 w-3 text-zinc-600" />
          {sources.map((s, i) => (
            <span
              key={s}
              className={cn(
                "rounded-md border px-1.5 py-0.5 font-mono text-[10px] transition-colors duration-500",
                i === activeSource
                  ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-300"
                  : "border-white/10 bg-white/[0.03] text-zinc-500",
              )}
            >
              {s}
            </span>
          ))}
          <span className="ml-auto font-mono text-[10px] text-zinc-600">
            +2 boards
          </span>
        </div>

        {/* matrix */}
        <div className="relative overflow-hidden">
          {!reduce && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 z-10 h-16 bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent"
              animate={{ y: ["-100%", "420%"] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
            />
          )}

          <ul className="divide-y divide-white/5">
            {jobs.map((job, i) => (
              <motion.li
                key={job.company}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                className="group flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-white/[0.04]"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.04] font-mono text-[10px] font-bold text-zinc-400">
                  {job.company.slice(0, 2).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-semibold text-zinc-100">
                    {job.role}
                  </p>
                  <p className="flex items-center gap-1 truncate text-[10.5px] text-zinc-500">
                    {job.company}
                    <Minus className="h-2.5 w-2.5 text-zinc-700" />
                    <MapPin className="h-2.5 w-2.5" />
                    {job.location}
                  </p>
                </div>
                <span className="hidden rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-wide text-zinc-500 sm:block">
                  {job.source}
                </span>
                <MatchBar value={job.match} />
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* floating tracker card */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, x: 16 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
        className="glass noise shadow-card absolute -bottom-16 -left-4 w-[268px] sm:-bottom-20 sm:-left-10 sm:w-[300px]"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <MailCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-[12px] font-semibold text-zinc-100">
              Application Tracker
            </span>
          </div>
          <span className="flex items-center gap-1 font-mono text-[9.5px] text-emerald-300/80">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-emerald-400" />
            Outlook synced
          </span>
        </div>
        <ul className="divide-y divide-white/5">
          {tracker.map((item, i) => {
            const tone = toneStyles[item.tone];
            const Icon = item.icon;
            return (
              <motion.li
                key={item.company}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 1.25 + i * 0.14 }}
                className="flex items-center gap-2.5 px-3.5 py-2"
              >
                <Icon
                  className={cn(
                    "h-3.5 w-3.5 shrink-0",
                    tone.text,
                    item.tone === "info" && !reduce && "animate-spin [animation-duration:2.2s]",
                  )}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11.5px] font-medium text-zinc-200">
                    {item.company}
                  </p>
                  <p className="truncate font-mono text-[9.5px] text-zinc-600">
                    {item.meta}
                  </p>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full border px-1.5 py-0.5 text-[9.5px] font-semibold",
                    tone.chip,
                    tone.text,
                  )}
                >
                  {item.status}
                </span>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>

      {/* floating approval pill */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass absolute -top-6 -right-2 flex items-center gap-2 px-3 py-2 shadow-glow sm:-right-8"
      >
        <FileCheck2 className="h-3.5 w-3.5 text-indigo-300" />
        <span className="text-[11px] font-semibold text-zinc-100">
          1-click approval
        </span>
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
      </motion.div>

      {/* floating queue pill */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass absolute top-1/3 -right-3 hidden items-center gap-2 px-3 py-2 shadow-glow-indigo lg:flex"
      >
        <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
        <span className="text-[11px] font-semibold text-zinc-100">
          Tailoring resume…
        </span>
        <Clock3 className="h-3.5 w-3.5 text-zinc-500" />
      </motion.div>
    </div>
  );
}
