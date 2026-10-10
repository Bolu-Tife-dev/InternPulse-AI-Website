"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
};

export function CodeBlock({ code, language, filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={cn("group relative", className)}>
      {(filename || language) && (
        <div className="flex items-center justify-between rounded-t-xl border border-b-0 border-white/10 bg-white/[0.04] px-4 py-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
            {filename ?? language}
          </span>
          <button
            type="button"
            onClick={copy}
            aria-label="Copy to clipboard"
            className="rounded-md p-1.5 text-zinc-500 transition hover:bg-white/10 hover:text-zinc-200"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      )}
      <pre
        className={cn(
          "code-block",
          filename || language ? "rounded-t-none border-t border-dashed border-white/10" : "",
        )}
      >
        <code>{code}</code>
      </pre>
      {!filename && !language && (
        <button
          type="button"
          onClick={copy}
          aria-label="Copy to clipboard"
          className="absolute right-2 top-2 rounded-md bg-black/40 p-1.5 text-zinc-500 opacity-0 transition hover:bg-white/10 hover:text-zinc-200 focus-visible:opacity-100 group-hover:opacity-100"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      )}
    </div>
  );
}
