'use client';

import React from "react";
import Link from "next/link";
import { Github, Sparkles, Music2, ExternalLink } from "lucide-react";
import { EchoSHLogo } from "@/components/ui/EchoSHLogo";

export function Footer() {
  return (
    <footer className="border-t border-slate-900/90 bg-mercury-950/90 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 font-mono z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Info */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-slate-300 font-semibold font-serif hover:text-emerald-400 transition-colors">
            Justin Andrew Wood
          </Link>
          <span>&bull;</span>
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <EchoSHLogo size="xs" variant="auto" suffix="-labs" />
          </Link>
        </div>

        {/* Center Links (Dossier & Archives) */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
          <Link
            href="/"
            className="text-slate-400 hover:text-emerald-300 transition-colors"
          >
            Dossier
          </Link>
          <span>&bull;</span>
          <Link
            href="/compendium"
            className="text-slate-400 hover:text-amber-300 transition-colors"
          >
            Compendium
          </Link>
          <span>&bull;</span>
          <Link
            href="/foundations"
            className="text-slate-400 hover:text-emerald-300 transition-colors"
          >
            Foundations Story
          </Link>
          <span>&bull;</span>
          <Link
            href="/axis-mundi"
            className="text-slate-400 hover:text-violet-300 transition-colors"
          >
            Axis Mundi (Archive)
          </Link>
          <span>&bull;</span>
          <Link
            href="/martial-arts"
            className="text-slate-400 hover:text-amber-300 transition-colors"
          >
            Martial Arts
          </Link>
          <span>&bull;</span>
          <Link
            href="/echosh"
            className="text-slate-400 hover:text-emerald-300 transition-colors inline-flex items-center"
          >
            <EchoSHLogo size="xs" variant="auto" />
            <span className="ml-1 text-[10px] text-slate-500">(Origin)</span>
          </Link>
          <span>&bull;</span>
          <Link
            href="/archive"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            Archive (Legacy)
          </Link>
          <span>&bull;</span>
          <Link
            href="/services"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Services (Telemetry)
          </Link>
          <span>&bull;</span>
          <Link
            href="/treasury"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            Treasury (Fiscal)
          </Link>
          <span>&bull;</span>
          <a
            href="https://github.com/echosh-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-emerald-300 transition-colors"
          >
            <Github className="w-3 h-3 text-slate-400" />
            <span>GitHub</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1 text-emerald-400">
            <Sparkles className="w-3 h-3 text-emerald-500" />
            Static Architecture
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Music2 className="w-3 h-3 text-slate-400" />
            Web Audio DSP
          </span>
        </div>
      </div>
    </footer>
  );
}