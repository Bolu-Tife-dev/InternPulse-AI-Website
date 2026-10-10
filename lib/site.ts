export type NavItem = { label: string; href: string };

export const siteConfig = {
  name: "InternPulse AI",
  tagline:
    "Automated Global Remote Internship Matcher & Application Engine for Developers.",
  description:
    "An open-source desktop app that scans global job platforms for remote software and frontend engineering internships accepting Nigerian and international candidates, auto-applies with tailored resumes, and tracks every response through Outlook email integration.",
  // ── Repository links ──────────────────────────────────────────────────────
  repoUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website",
  releasesUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website/releases/latest",
  docsUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website#readme",
  issuesUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website/issues",
  contactEmail: "dev@internpulse.ai",
  license: "MIT",
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
