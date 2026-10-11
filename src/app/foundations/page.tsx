'use client';

import React from "react";
import Link from "next/link";
import { 
  History, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Network, 
  Layers, 
  Clock, 
  ShieldCheck,
  Terminal,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageContainer } from "@/components/layout/PageContainer";
import { getAllLoreNodes } from "@/data/lore-graph";

export default function FoundationsPage() {
  const loreNodes = getAllLoreNodes();

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col justify-between selection:bg-emerald-500/20 font-sans">
      <Header />

      <main className="flex-1 py-12 sm:py-20">
        <PageContainer size="lg" glow="dual">
          <div className="space-y-16 animate-fadeIn">

            {/* Foundations Hero Section */}
            <div className="space-y-6 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="emerald" size="sm" className="gap-1.5 font-mono" dot pulseDot>
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>FOUNDATIONS OF THE SOVEREIGN ESTATE</span>
                </Badge>
                <span className="text-xs font-mono text-slate-500">VOYAGE 1890 – 2026</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
                Foundations of Sovereign Lineage.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg font-serif leading-relaxed">
                The authentic origins, ancestral chronicles, and technological bedrock of <strong className="text-slate-100 font-semibold">Justin Andrew Wood</strong>. 
                From a British Home Child stringing the first copper circuits for Bell Telephone in 1910 to industrial safety systems and modern distributed autonomous AI fleets, 
                this is an unbroken, century-long arc of resilience, parental protection, and telecommunications craftsmanship.
              </p>
            </div>

            {/* Generational Lineage Architecture Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm space-y-3">
                <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>1903–1987 • THE COPPER ERA</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-100">Vernon Wood</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-serif">
                  British Home Child sailing on the <em>SS Dominion</em>. Earned the Barnardo Silver Medal, strung early copper circuits for Bell Telephone, and laid the family&apos;s telecommunications foundation.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm space-y-3">
                <div className="text-xs font-mono text-cyan-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>1950–2024 • THE INDUSTRIAL SHIELD</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-100">Mark Steven Wood</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-serif">
                  Life dedicated to industrial electrical safety, paternal vigilance, and technical mastery under rigorous pressure. Protected the sovereign hearth across multi-decade corporate shifts.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm space-y-3">
                <div className="text-xs font-mono text-amber-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>1971–2026 • THE SOVEREIGN STACK</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-100">Justin Andrew Wood</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-serif">
                  Transmuting four generations of communications craftsmanship into zero-token daemons, local neural inference, and sovereign autonomous software architectures.
                </p>
              </div>
            </div>

            {/* The Core Foundational Chapters Grid */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sm font-mono text-slate-300 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Foundational Chapters &bull; Lore Graph</span>
                </div>
                <span className="text-xs font-mono text-slate-500">4 HISTORICAL NODES REGISTERED</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loreNodes.map((node) => (
                  <Link
                    key={node.id}
                    href={node.route}
                    className="p-6 sm:p-8 rounded-3xl border border-slate-800/80 bg-slate-900/30 hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between space-y-6 shadow-xl"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-emerald-400 font-semibold">[[{node.id}]]</span>
                        <span className="text-xs font-mono text-slate-500 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50">
                          {node.epoch}
                        </span>
                      </div>

                      <h2 className="text-2xl font-serif font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                        {node.title}
                      </h2>

                      <p className="text-sm text-slate-300 font-serif leading-relaxed">
                        {node.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {node.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-emerald-400 group-hover:text-emerald-300">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <span>Read Foundational Node</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-slate-500">{node.readingTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Provenance & Stewardship Callout */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8 text-center space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                IMMUTABLE PERSISTENCE &bull; SOVEREIGN ARCHIVAL VAULT
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-serif leading-relaxed">
                All foundational documents, photographic scans, Barnardo migration ledgers, and biographical relics 
                are deterministically cataloged in the sovereign vault at <code className="text-emerald-400">/home/justin/Dropbox/Sovereign/chronicles/assets/</code> and registered within <code className="text-emerald-400">sovereign.db</code>.
              </p>
            </div>

          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
