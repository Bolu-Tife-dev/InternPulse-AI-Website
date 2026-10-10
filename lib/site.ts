export type NavItem = { label: string; href: string };

export const siteConfig = {
  name: "InternPulse AI",
  tagline:
    "Automated Global Remote Internship Matcher & Application Engine for Developers.",
  description:
    "An open-source desktop app that scans global job platforms for remote software and frontend engineering internships accepting Nigerian and international candidates, auto-applies with tailored resumes, and tracks every response through Outlook email integration.",
  // ── Repository links ──────────────────────────────────────────────────────
  /** Desktop application source code + installers (GitHub Releases) */
  repoUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI",
  /** This landing page repository */
  siteRepoUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI-Website",
  /** Release page hosting the installers (assets are attached here) */
  releasesUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/latest",
  docsUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI#readme",
  issuesUrl: "https://github.com/Bolu-Tife-dev/InternPulse-AI/issues",
  contactEmail: "dev@internpulse.ai",
  license: "MIT",
} as const;

export type ReleaseDownload = {
  label: string;
  asset: string;
  url: string;
  size: string;
  sha256: string;
};

export type ReleasePlatform = {
  note: string;
  requirements: string;
  downloads: readonly ReleaseDownload[];
};

/** Current published build — kept in sync with the GitHub release assets. */
export const currentRelease = {
  version: "1.0.2",
  tag: "v1.0.2",
  releasedAt: "2026-10-10",
  windows: {
    note: "NSIS installer. SmartScreen may prompt on first run — choose “More info → Run anyway”.",
    requirements: "Windows 10 (64-bit) or later · ~300 MB free disk space",
    downloads: [
      {
        label: "64-bit installer",
        asset: "internpulse-ai-1.0.2-win-x64-setup.exe",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.2/internpulse-ai-1.0.2-win-x64-setup.exe",
        size: "108.7 MB",
        sha256: "5a60fecef74a16bf440801ef7eb27b16df71f0b23ca5dd7d1f77cc4e15bdfe31",
      },
    ],
  },
  macos: {
    note: "DMG images, currently unsigned — right-click → Open on first launch to bypass Gatekeeper.",
    requirements: "macOS 12 Monterey or later · ~300 MB free disk space",
    downloads: [
      {
        label: "Apple Silicon (M1–M4)",
        asset: "internpulse-ai-1.0.2-mac-arm64.dmg",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.2/internpulse-ai-1.0.2-mac-arm64.dmg",
        size: "138.2 MB",
        sha256: "9579d8c914d6df84070759ad7904fd12cdc24e98649adbd5f218c398f6a27284",
      },
      {
        label: "Intel",
        asset: "internpulse-ai-1.0.2-mac-x64.dmg",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.2/internpulse-ai-1.0.2-mac-x64.dmg",
        size: "142.6 MB",
        sha256: "29109d6e5c7e1e2a47656a9ef27f728984a598d0acf56a1eec097ccbc0718fca",
      },
    ],
  },
  linux: {
    note: "AppImage runs anywhere; the deb targets Debian/Ubuntu. Make the AppImage executable before launching.",
    requirements: "Any modern 64-bit distro · ~300 MB free disk space",
    downloads: [
      {
        label: "AppImage (any distro)",
        asset: "internpulse-ai-1.0.2-linux-x86_64.AppImage",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.2/internpulse-ai-1.0.2-linux-x86_64.AppImage",
        size: "145.4 MB",
        sha256: "1ab83695ab485e87f94e89c5e4a70030b5a476cd0e228f87cbd2d3ffacfcd0d2",
      },
      {
        label: "deb (Debian/Ubuntu)",
        asset: "internpulse-ai-1.0.2-linux-amd64.deb",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.2/internpulse-ai-1.0.2-linux-amd64.deb",
        size: "109.2 MB",
        sha256: "ad3a49f91f1b841284aa8dccaae865e139ebcd6c1b97d0aeb2def0949951b2c5",
      },
    ],
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
