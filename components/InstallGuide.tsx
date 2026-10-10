"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Apple,
  ArrowUpRight,
  Download,
  Github,
  TerminalSquare,
  Cpu,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type OsKey = "windows" | "macos" | "linux";

const osTabs: {
  key: OsKey;
  label: string;
  icon: typeof Apple;
  artifact: string;
  note: string;
}[] = [
  {
    key: "windows",
    label: "Windows",
    icon: Cpu,
    artifact: "InternPulse-Setup-1.0.0.exe",
    note: "Windows 10 (64-bit) or later. SmartScreen may prompt — choose “More info → Run anyway”.",
  },
  {
    key: "macos",
    label: "macOS",
    icon: Apple,
    artifact: "InternPulse-1.0.0.dmg",
    note: "macOS 12 Monterey or later (Apple Silicon & Intel). Right-click → Open on first launch.",
  },
  {
    key: "linux",
    label: "Linux",
    icon: TerminalSquare,
    artifact: "InternPulse-1.0.0.AppImage",
    note: "Any modern distro. Make it executable with chmod +x before running.",
  },
];

const cliCommand = `git clone ${siteConfig.repoUrl}.git
cd InternPulse-AI
npm install
cp .env.example .env   # add your free API keys
npm run dev`;

const linuxCommands = `chmod +x InternPulse-1.0.0.AppImage
./InternPulse-1.0.0.AppImage`;

export function InstallGuide() {
  const [active, setActive] = useState<OsKey>("windows");
  const current = osTabs.find((t) => t.key === active) ?? osTabs[0];

  return (
    <section id="install" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="container">
        <SectionHeading
          eyebrow="Installation & Usage"
          title={
            <>
              Download once, <span className="text-gradient">apply forever</span>
            </>
          }
          description="Grab the prebuilt desktop app for your platform, or clone the repo and run it locally in a handful of commands."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="glass noise p-4 sm:p-6">
            {/* tab strip */}
            <div
              role="tablist"
              aria-label="Choose your operating system"
              className="grid grid-cols-3 gap-1 rounded-xl border border-white/10 bg-black/30 p-1"
            >
              {osTabs.map((tab) => (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={active === tab.key}
                  onClick={() => setActive(tab.key)}
                  className={cn(
                    "relative flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-colors",
                    active === tab.key
                      ? "text-emerald-200"
                      : "text-zinc-500 hover:text-zinc-200",
                  )}
                >
                  {active === tab.key && (
                    <motion.span
                      layoutId="os-tab"
                      className="absolute inset-0 rounded-lg border border-emerald-400/25 bg-emerald-500/12"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <tab.icon className="relative h-4 w-4" />
                  <span className="relative">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mt-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      Latest release artifact
                    </p>
                    <p className="mt-1 break-all font-mono text-[13px] text-emerald-300">
                      {current.artifact}
                    </p>
                    <p className="mt-2 max-w-md text-[13px] leading-relaxed text-zinc-500">
                      {current.note}
                    </p>
                  </div>
                  <ButtonLink
                    href={siteConfig.releasesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="shrink-0"
                  >
                    <Download className="h-4 w-4" />
                    Download {current.label} build
                  </ButtonLink>
                </div>

                {current.key === "linux" && (
                  <CodeBlock code={linuxCommands} filename="terminal" className="mt-6" />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                or build from source
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <CodeBlock code={cliCommand} filename="terminal — clone & run" />

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
              >
                <Github className="h-4 w-4" />
                Clone the repository
              </ButtonLink>
              <ButtonLink
                href={siteConfig.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="sm"
              >
                Full documentation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
