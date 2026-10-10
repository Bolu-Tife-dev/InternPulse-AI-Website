"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Inbox, KeyRound, Search, Send, Sparkles, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, staggerItem } from "@/components/ui/Reveal";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { cn } from "@/lib/utils";

const pipeline = [
  { label: "Scrape", detail: "ATS + remote boards", icon: Search },
  { label: "Filter", detail: "NG / WFH eligibility", icon: Workflow },
  { label: "Tailor", detail: "Gemini 1.5 Flash", icon: Sparkles },
  { label: "Approve", detail: "You review & send", icon: KeyRound },
  { label: "Submit", detail: "Playwright forms", icon: Send },
  { label: "Track", detail: "Outlook / Graph", icon: Inbox },
];

const steps = [
  {
    step: "01",
    title: "Google Gemini API Key",
    purpose: "Free-tier AI model used to tailor your resume summary and cover letter per job.",
    how: [
      "Visit aistudio.google.com and sign in with any Google account.",
      "Click “Get API key” → “Create API key”.",
      "Copy the key (starts with AIza…) — the free tier is more than enough.",
    ],
    link: { label: "Get your free Gemini key", href: "https://aistudio.google.com/app/apikey" },
    code: `# .env
GEMINI_API_KEY=AIzaSy...your_free_key`,
  },
  {
    step: "02",
    title: "Microsoft Azure App (Client ID)",
    purpose: "Powers OAuth sign-in and Microsoft Graph access so responses are read from Outlook.",
    how: [
      "Go to the Azure Portal → App registrations → New registration.",
      "Set a name, choose “Accounts in any organizational directory and personal Microsoft accounts”.",
      "Add a Mobile & desktop redirect URI such as http://localhost:17000/auth/callback.",
      "Under API permissions, add Microsoft Graph → Mail.Read and offline_access.",
      "Copy the Application (client) ID into your .env file.",
    ],
    link: {
      label: "Open Azure App registrations",
      href: "https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",
    },
    code: `# .env
MS_CLIENT_ID=00000000-0000-0000-0000-000000000000
MS_REDIRECT_URI=http://localhost:17000/auth/callback`,
  },
  {
    step: "03",
    title: "Job Search API Keys (Jobicy & Jooble)",
    purpose: "Free remote-job aggregators that expand coverage beyond direct ATS scraping.",
    how: [
      "Jobicy: create a free account at jobicy.com, then open Account → API access.",
      "Jooble: request a free key at jooble.org/api/info (rate-limited but free).",
      "Paste both keys into .env — the scraper degrades gracefully if either is missing.",
    ],
    link: { label: "Jobicy API access page", href: "https://jobicy.com/jobs-rss-feed" },
    code: `# .env
JOBICY_API_KEY=your_jobicy_key
JOOBLE_API_KEY=your_jooble_key`,
  },
  {
    step: "04",
    title: "Create the local .env file",
    purpose: "Every credential stays on your machine in an untracked file — never committed to git.",
    how: [
      "Copy .env.example to .env in the project root.",
      "Paste the three credentials from the steps above.",
      "Launch the desktop app — it validates keys and shows a green “All systems” badge.",
    ],
    link: null,
    code: `cp .env.example .env
# fill in the values, then:
npm run dev`,
  },
];

export function SetupGuide() {
  return (
    <section id="setup" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute right-0 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-emerald-500/[0.05] blur-[120px]"
      />
      <div className="container">
        <SectionHeading
          eyebrow="Architecture & API Setup"
          title={
            <>
              Bring your own free keys —{" "}
              <span className="text-gradient">setup in minutes</span>
            </>
          }
          description="InternPulse AI is designed around free tiers. Follow these four steps once and the engine runs indefinitely at zero cost."
        />

        {/* pipeline diagram */}
        <Reveal className="mt-14">
          <div className="glass overflow-x-auto p-5">
            <ol className="flex min-w-max items-stretch gap-3">
              {pipeline.map((node, i) => (
                <li key={node.label} className="flex items-center gap-3">
                  <div className="flex min-w-[7.5rem] flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
                    <node.icon className="h-4 w-4 text-emerald-400" />
                    <span className="text-[12px] font-semibold text-zinc-100">
                      {node.label}
                    </span>
                    <span className="font-mono text-[9.5px] text-zinc-500">
                      {node.detail}
                    </span>
                  </div>
                  {i < pipeline.length - 1 && (
                    <span aria-hidden className="text-zinc-700">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* steps */}
        <StaggerContainer className="mt-8 grid gap-5 lg:grid-cols-2">
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={staggerItem}
              className="glass glass-hover flex flex-col p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-400/25 bg-emerald-500/10 font-mono text-[13px] font-bold text-emerald-300">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{item.purpose}</p>

              <ul className="mt-4 space-y-2">
                {item.how.map((line) => (
                  <li key={line} className="flex gap-2.5 text-[13px] leading-relaxed text-zinc-400">
                    <span
                      aria-hidden
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-emerald-500"
                    />
                    {line}
                  </li>
                ))}
              </ul>

              <CodeBlock code={item.code} className="mt-5" />

              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-4 inline-flex items-center gap-1 self-start text-[13px] font-medium text-emerald-300 transition-colors hover:text-emerald-200",
                  )}
                >
                  {item.link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
