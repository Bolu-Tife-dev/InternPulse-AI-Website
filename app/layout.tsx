import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://internpulse-ai.vercel.app"),
  title: {
    default: `${siteConfig.name} — Land Remote Software Internships Worldwide`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "remote internships",
    "software engineering intern",
    "frontend internship",
    "Nigerian developers",
    "auto apply",
    "job scraper",
    "open source",
    "Outlook email tracking",
    "Gemini AI",
  ],
  authors: [{ name: "InternPulse AI Contributors" }],
  creator: "InternPulse AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://internpulse-ai.vercel.app",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} dark`}>
      <body className="min-h-screen bg-[rgb(var(--bg))] font-sans text-zinc-200">
        {children}
      </body>
    </html>
  );
}
