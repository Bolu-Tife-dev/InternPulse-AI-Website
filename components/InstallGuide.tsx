"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Apple,
  ArrowUpRight,
  Check,
  Clipboard,
  Download,
  Github,
  TerminalSquare,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { siteConfig, currentRelease, type ReleasePlatform } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type OsKey = "windows" | "macos" | "linux";

const osTabs: { key: OsKey; label: string; icon: typeof Apple; platform: ReleasePlatform }[] = [
  { key: "windows", label: "Windows", icon: Cpu, platform: currentRelease.windows },
  { key: "macos", label: "macOS", icon: Apple, platform: currentRelease.macos },
  { key: "linux", label: "Linux", icon: TerminalSquare, platform: currentRelease.linux },
];

const cliCommand = `git clone ${siteConfig.repoUrl}.git
cd InternPulse-AI
npm install
npm run playwright:install
cp .env.example .env   # add your free API keys
npm run dev`;

const linuxCommands = `chmod +x internpulse-ai-${currentRelease.version}-linux-x86_64.AppImage
./internpulse-ai-${currentRelease.version}-linux-x86_64.AppImage`;

const macCommands = `hdiutil attach internpulse-ai-${currentRelease.version}-mac-arm64.dmg
cp -R "InternPulse AI.app" /Applications/
hdiutil detach /Volumes/"InternPulse AI"`;

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => {
        void navigator.clipboard.writeText(value).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        });
      }}
      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-zinc-400 transition hover:border-emerald-400/40 hover:text-emerald-300"
    >
      {copied ? <Check className="h-3 w-3" /> : <Clipboard className="h-3 w-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function InstallGuide() {
  const [active, setActive] = useState<OsKey>("windows");
  const current = osTabs.find((t) => t.key === active) ?? osTabs[0];
  const [primary, ...alternates] = current.platform.downloads;

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
          description="Prebuilt installers for Windows, macOS and Linux — or clone the repository and build from source."
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
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      v{currentRelease.version} · {primary.size}
                    </p>
                    <p className="mt-1 break-all font-mono text-[13px] text-emerald-300">
                      {primary.asset}
                    </p>
                    <p className="mt-2 max-w-md text-[13px] leading-relaxed text-zinc-500">
                      {current.platform.note}
                    </p>
                    <p className="mt-1 max-w-md text-[13px] leading-relaxed text-zinc-600">
                      {current.platform.requirements}
                    </p>

                    <dl className="mt-4 space-y-2 rounded-lg border border-white/10 bg-black/25 p-3 text-[12px]">
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-zinc-500">SHA-256</dt>
                        <dd className="flex min-w-0 items-center gap-2">
                          <code className="block max-w-[14rem] truncate font-mono text-[11px] text-zinc-400">
                            {primary.sha256}
                          </code>
                          <CopyButton
                            value={primary.sha256}
                            label="Copy SHA-256 checksum"
                          />
                        </dd>
                      </div>
                    </dl>

                    {alternates.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {alternates.map((alt) => (
                          <li key={alt.asset} className="flex flex-wrap items-center gap-2 text-[12px]">
                            <a
                              href={alt.url}
                              className="font-mono text-zinc-400 underline decoration-white/20 underline-offset-2 transition hover:text-emerald-300"
                            >
                              {alt.label}
                            </a>
                            <span className="text-zinc-600">
                              {alt.asset} · {alt.size}
                            </span>
                            <CopyButton value={alt.sha256} label={`Copy ${alt.label} checksum`} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <ButtonLink href={primary.url} size="lg" className="shrink-0">
                    <Download className="h-4 w-4" />
                    Download for {current.label}
                  </ButtonLink>
                </div>

                {current.key === "linux" && (
                  <CodeBlock code={linuxCommands} filename="terminal" className="mt-6" />
                )}
                {current.key === "macos" && (
                  <CodeBlock code={macCommands} filename="terminal (optional drag-and-drop works too)" className="mt-6" />
                )}

                <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-emerald-400/20 bg-emerald-500/[0.06] p-3 text-[12.5px] leading-relaxed text-emerald-100/80">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <p>
                    {current.key === "windows" && (
                      <>
                        The installer is not code-signed yet, so Windows SmartScreen may warn on
                        first run. Choose <strong>More info → Run anyway</strong>. Verify the
                        download with the SHA-256 above before installing.
                      </>
                    )}
                    {current.key === "macos" && (
                      <>
                        The DMG is not notarized yet, so Gatekeeper will block a double-click
                        launch. Right-click the app → <strong>Open</strong> the first time, or run{" "}
                        <code className="font-mono text-[11px]">xattr -cr /Applications/"InternPulse AI.app"</code>.
                      </>
                    )}
                    {current.key === "linux" && (
                      <>
                        The AppImage is built on Ubuntu runners and runs on any modern 64-bit
                        distro with FUSE. Verify the download with the SHA-256 above, then{" "}
                        <code className="font-mono text-[11px]">chmod +x</code> before launching.
                      </>
                    )}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                or build from source
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <CodeBlock code={cliCommand} filename="terminal — clone & run the desktop app" />

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
              >
                <Github className="h-4 w-4" />
                Clone the app repository
              </ButtonLink>
              <ButtonLink
                href={siteConfig.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="sm"
              >
                All releases
                <ArrowUpRight className="h-3.5 w-3.5" />
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
