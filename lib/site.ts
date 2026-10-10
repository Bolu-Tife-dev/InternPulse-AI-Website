export type NavItem = { label: string; href: string };

export const siteConfig = {
  name: "InternPulse AI",
  tagline:
    "Automated Global Remote Internship Matcher & Application Engine for Developers.",
  description:
    "An open-source desktop app that scans global job platforms for remote software and frontend engineering internships accepting Nigerian and international candidates, auto-applies with tailored resumes, and tracks every response through Outlook email integration.",
  // ── Replace these with your own repository links before deploying ──────────
  repoUrl: "https://github.com/internpulse-ai/internpulse-ai",
  releasesUrl: "https://github.com/internpulse-ai/internpulse-ai/releases/latest",
  docsUrl: "https://github.com/internpulse-ai/internpulse-ai#readme",
  issuesUrl: "https://github.com/internpulse-ai/internpulse-ai/issues",
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
