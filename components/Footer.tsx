import Link from "next/link";
import { ArrowUpRight, BookOpen, Github, Heart, Mail, Scale, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site";

type FooterLink = {
  label: string;
  href: string;
  external: boolean;
  icon?: LucideIcon;
};

type LinkColumn = { heading: string; links: FooterLink[] };

const linkColumns: LinkColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features", external: false },
      { label: "Setup Guide", href: "#setup", external: false },
      { label: "Install", href: "#install", external: false },
      { label: "Security & Privacy", href: "#privacy", external: false },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "GitHub Repository", href: siteConfig.repoUrl, external: true, icon: Github },
      { label: "Documentation", href: siteConfig.docsUrl, external: true, icon: BookOpen },
      {
        label: "Releases",
        href: siteConfig.releasesUrl,
        external: true,
        icon: ArrowUpRight,
      },
      { label: "Report an Issue", href: siteConfig.issuesUrl, external: true },
    ],
  },
  {
    heading: "Legal & Contact",
    links: [
      { label: "MIT License", href: `${siteConfig.repoUrl}/blob/main/LICENSE`, external: true, icon: Scale },
      { label: "Developer Contact", href: `mailto:${siteConfig.contactEmail}`, external: true, icon: Mail },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[rgb(var(--bg))]">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
      />
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <Link href="#top" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-emerald-400/30 bg-emerald-500/10">
                <Zap className="h-[18px] w-[18px] text-emerald-400" />
              </span>
              <span className="text-[15px] font-bold tracking-tight text-white">
                InternPulse<span className="text-emerald-400"> AI</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">{siteConfig.tagline}</p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/25 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                aria-label="Email the developer"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/25 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkColumns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-emerald-300"
                      >
                        {link.icon && <link.icon className="h-3.5 w-3.5" />}
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {year} {siteConfig.name}. Released under the {siteConfig.license} License.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-zinc-600">
            Built for developers seeking global remote internships
            <Heart className="h-3 w-3 text-emerald-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
