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
  version: "1.0.3",
  tag: "v1.0.3",
  releasedAt: "2026-10-10",
  windows: {
    note: "NSIS installer. SmartScreen may prompt on first run — choose “More info → Run anyway”.",
    requirements: "Windows 10 (64-bit) or later · ~300 MB free disk space",
    downloads: [
      {
        label: "64-bit installer",
        asset: "internpulse-ai-1.0.3-win-x64-setup.exe",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.3/internpulse-ai-1.0.3-win-x64-setup.exe",
        size: "108.7 MB",
        sha256: "4db8a9315f885410719f8c04a62dde23f49a1cfaeca3bffdb167952d321bf742",
      },
    ],
  },
  macos: {
    note: "DMG images, currently unsigned — right-click → Open on first launch to bypass Gatekeeper.",
    requirements: "macOS 12 Monterey or later · ~300 MB free disk space",
    downloads: [
      {
        label: "Apple Silicon (M1–M4)",
        asset: "internpulse-ai-1.0.3-mac-arm64.dmg",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.3/internpulse-ai-1.0.3-mac-arm64.dmg",
        size: "138.2 MB",
        sha256: "1a5c6aeb40ce1da06299487bf3ada7c0f5eddcc794125be311f02edf835332f9",
      },
      {
        label: "Intel",
        asset: "internpulse-ai-1.0.3-mac-x64.dmg",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.3/internpulse-ai-1.0.3-mac-x64.dmg",
        size: "142.6 MB",
        sha256: "fc2f222b3f6810503290d9cbd8a199e7417df5061467c6e2210e02e6a3cfbab8",
      },
    ],
  },
  linux: {
    note: "AppImage runs anywhere; the deb targets Debian/Ubuntu. Make the AppImage executable before launching.",
    requirements: "Any modern 64-bit distro · ~300 MB free disk space",
    downloads: [
      {
        label: "AppImage (any distro)",
        asset: "internpulse-ai-1.0.3-linux-x86_64.AppImage",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.3/internpulse-ai-1.0.3-linux-x86_64.AppImage",
        size: "145.4 MB",
        sha256: "bb6d670b32675a5395818e8e0ec5818c2cccd8a3d8c362a03b24935a919fca58",
      },
      {
        label: "deb (Debian/Ubuntu)",
        asset: "internpulse-ai-1.0.3-linux-amd64.deb",
        url: "https://github.com/Bolu-Tife-dev/InternPulse-AI/releases/download/v1.0.3/internpulse-ai-1.0.3-linux-amd64.deb",
        size: "109.2 MB",
        sha256: "36f5aa7f92a21894383a508b82b15b065f07ad08d6b1f03f82e5c6847cc0bafb",
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
