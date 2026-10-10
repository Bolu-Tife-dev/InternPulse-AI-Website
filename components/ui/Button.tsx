import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-emerald-500 text-emerald-950 shadow-[0_10px_40px_-12px_rgba(16,185,129,0.7)] hover:bg-emerald-400 hover:shadow-[0_14px_50px_-10px_rgba(16,185,129,0.85)] active:scale-[0.98]",
  secondary:
    "border border-white/12 bg-white/5 text-zinc-100 hover:border-white/25 hover:bg-white/10 active:scale-[0.98]",
  ghost: "text-zinc-300 hover:bg-white/5 hover:text-white",
  indigo:
    "bg-indigo-500/15 text-indigo-200 border border-indigo-400/25 hover:bg-indigo-500/25 hover:border-indigo-400/40",
} as const;

const sizes = {
  sm: "h-9 px-3.5",
  md: "h-11 px-5",
  lg: "h-12 px-6 text-[15px]",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: LinkProps & { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
