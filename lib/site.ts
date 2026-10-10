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
  version: "1.0.1",
  tag: "v1.0.1",
  releasedAt: "2026-10-10",
  windows: {
    note: "NSIS installer. SmartScreen may prompt on first run — choose “More info → Run anyway”.",
    requirements: "Windows 10 (64-bit) or later · ~300 MB free disk space",
    downloads: [
      {
        label: "64-bit installer",
        asset: "internpulse-ai-1.0.1-win-x64-setup.exe",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.1/internpulse-ai-1.0.1-win-x64-setup.exe",
        size: "101.8 MB",
        sha256: "c438b8765f8afcb1fa6082eb542e5acea07f75fd4331ec4d3d1a06c388803c32",
      },
    ],
  },
  macos: {
    note: "DMG images, currently unsigned — right-click → Open on first launch to bypass Gatekeeper.",
    requirements: "macOS 12 Monterey or later · ~300 MB free disk space",
    downloads: [
      {
        label: "Apple Silicon (M1–M4)",
        asset: "internpulse-ai-1.0.1-mac-arm64.dmg",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.1/internpulse-ai-1.0.1-mac-arm64.dmg",
        size: "128.1 MB",
        sha256: "40a21070df2d0e3616f8921fd830bc2e51d32fbb0b34a72df7f8027c1c7dc8ef",
      },
      {
        label: "Intel",
        asset: "internpulse-ai-1.0.1-mac-x64.dmg",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.1/internpulse-ai-1.0.1-mac-x64.dmg",
        size: "132.5 MB",
        sha256: "97caceec38715d5bd099609f866a7f92176aeafcf96c23f0a10fc4ec961351f4",
      },
    ],
  },
  linux: {
    note: "AppImage runs anywhere; the deb targets Debian/Ubuntu. Make the AppImage executable before launching.",
    requirements: "Any modern 64-bit distro · ~300 MB free disk space",
    downloads: [
      {
        label: "AppImage (any distro)",
        asset: "internpulse-ai-1.0.1-linux-x86_64.AppImage",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.1/internpulse-ai-1.0.1-linux-x86_64.AppImage",
        size: "136.8 MB",
        sha256: "bf4bbe2612cc93a49cd963a4f0da681b3517f9c36bf20f34191c21352d7aeb29",
      },
      {
        label: "deb (Debian/Ubuntu)",
        asset: "internpulse-ai-1.0.1-linux-amd64.deb",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.1/internpulse-ai-1.0.1-linux-amd64.deb",
        size: "102.3 MB",
        sha256: "1061f17c3ae9a7e62c524503d01d62ec2b20c7053f81fc89c6f6d44bfdfc863e",
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
