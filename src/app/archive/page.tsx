'use client';

import React from "react";
import Link from "next/link";
import { 
  Terminal, 
  Sparkles, 
  Cpu, 
  Database, 
  ExternalLink, 
  FolderArchive,
  History,
  FileCode2,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArchiveEngine } from "@/features/archive/ArchiveEngine";

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#04060a] text-slate-100 flex flex-col justify-between selection:bg-emerald-500/20 font-sans relative overflow-x-hidden">
      {/* Retro Phosphor & Amber Ambient Glow Orbs */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-amber-600/8 rounded-full blur-3xl pointer-events-none" />

      {/* Unified Top Navigation Header */}
      <Header />

      {/* Main Archival & Showcase Stage */}
      <main className="flex-1 z-10 py-8">
        <PageContainer size="lg">
          <div className="space-y-10 animate-fadeIn">
            
            {/* Header Hero Section */}
            <div className="space-y-5 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-emerald-950/40">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="font-pixel text-[10px] text-emerald-400">8-BIT LINEAGE</span>
                  <span>Legacy Python Archive & Capabilities Dossier</span>
                </div>
                <Badge variant="emerald" size="xs">PROVENANCE // 2018 — 2021</Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-100 leading-tight">
                Historical Python Systems &{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Architectural Lineage
                </span>
              </h1>

              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
                A curated museum and interactive sandbox preserving foundational software lineage across four historical Python platforms: from decentralized Proof-of-Work blockchains and Bohnanza market models in <code className="text-emerald-300">nitsujlabs</code>, to Junto affective psychometrics in <code className="text-violet-300">emotions</code>, 5-tier coin accounting in <code className="text-amber-300">DandD</code>, and aerodrome gate telemetry in <code className="text-cyan-300">dashtastic</code>.
              </p>
            </div>

            {/* The Unified Interactive Archive Engine Component */}
            <ArchiveEngine />

          </div>
        </PageContainer>
      </main>

      {/* Clean Minimal Footer */}
      <Footer />
    </div>
  );
}
