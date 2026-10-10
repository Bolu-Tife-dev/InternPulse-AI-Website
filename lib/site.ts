export type NavItem = { label: string; href: string };

export const siteConfig = {
  name: "InternPulse AI",
  tagline:
    "Automated Global Remote Internship Matcher & Application Engine for Developers.",
  description:
    "An open-source desktop app that scans global job platforms for remote software and frontend engineering internships accepting Nigerian and international candidates, auto-applies with tailored resumes, and tracks every response through Outlook email integration.",
  // ── Repository links ──────────────────────────────────────────────────────
  /** Desktop application source code */
  repoUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI",
  /** This landing page repository */
  siteRepoUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website",
  /** Release page hosting the installers (assets are attached here) */
  releasesUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website/releases/latest",
  docsUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI#readme",
  issuesUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI/issues",
  contactEmail: "dev@internpulse.ai",
  license: "MIT",
} as const;

/** Current published build — kept in sync with the GitHub release assets. */
export const currentRelease = {
  version: "1.0.0",
  tag: "v1.0.0",
  releasedAt: "2026-10-10",
  windows: {
    asset: "InternPulse-AI-1.0.0-win-x64-setup.exe",
    url: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website/releases/download/v1.0.0/InternPulse-AI-1.0.0-win-x64-setup.exe",
    size: "101.8 MB",
    sha256: "B0CCAADAB6264FE4A5C7494C610F82D9C7D06D6B10F67EF28A22AAD9D196B46E",
    requirements: "Windows 10 (64-bit) or later · ~300 MB free disk space",
  },
} as const;

export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Setup Guide", href: "#setup" },
  { label: "Install", href: "#install" },
  { label: "Privacy", href: "#privacy" },
];

export const platforms = [
  "Greenhouse",
  "Lever",
  "Ashby",
  "Workday",
  "Jobicy",
  "Remotive",
  "Jooble",
  "LinkedIn",
  "Indeed",
  "Company ATS",
] as const;
