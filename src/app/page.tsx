'use client';

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, Compass, Shield, Terminal, Waves, History, Radio, Play, ExternalLink, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageContainer } from "@/components/layout/PageContainer";
import { getAllLoreNodes } from "@/data/lore-graph";
import { VIDEO_TRANSMISSIONS } from "@/data/video-transmissions";

export default function HomePage() {
  const loreNodes = getAllLoreNodes();

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col justify-between selection:bg-emerald-500/20 font-sans">
      <Header />

      <main className="flex-1 py-12 sm:py-20">
        <PageContainer size="md" glow="dual">
          <div className="space-y-16 animate-fadeIn">
            
            {/* Sovereign Identity Banner */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="emerald" size="sm" className="gap-1.5 font-mono" dot pulseDot>
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>THE SOVEREIGN ESTATE</span>
                </Badge>
                <span className="text-xs font-mono text-slate-500">JUSTIN ANDREW WOOD</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
                Telling the Sovereign Story.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg font-serif leading-relaxed max-w-2xl">
                The personal estate, ancestral chronicles, and systems laboratory of <strong className="text-slate-100 font-semibold">Justin Andrew Wood</strong>. 
                From a British Home Child sailing on the <em>SS Dominion</em> in 1903 to autonomous AI architectures, 
                this is an unbroken century-long arc of resilience, telecommunications, and digital sovereignty.
              </p>
            </div>

            {/* Featured Chronicle Card: Chapter 0 */}
            <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-slate-900/40 to-slate-950/80 p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-emerald-500/15 transition-all duration-700" />

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center relative z-10">
                {/* Photo Thumbnail */}
                <div className="sm:col-span-4 aspect-[3/4] max-w-[220px] mx-auto sm:mx-0 rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/great_grandfather_vernon_wood.jpg"
                    alt="Vernon Wood (1902)"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="sm:col-span-8 space-y-4 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <History className="w-3.5 h-3.5" />
                    <span>FEATURED CHRONICLE • CHAPTER 0</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                    The Boy from Battersea
                  </h2>

                  <p className="text-slate-400 text-sm sm:text-base font-serif leading-relaxed line-clamp-4">
                    In July 1903, thirteen-year-old Vernon Wood was placed aboard the <em>SS Dominion</em> bound for Quebec. Carrying nothing but a wool coat and the silent grief of a broken family, he earned the Barnardo Silver Medal, strung the first copper circuits for Bell Telephone in 1910, and founded a four-generation communications dynasty.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/chronicles/the-boy-from-battersea"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-sans font-semibold text-sm hover:bg-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/25"
                    >
                      <span>Read Chapter 0</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* The Life Chronicles Index */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>The Life Chronicles</span>
                </div>
                <span className="text-xs font-mono text-slate-500">VOYAGE 1890 – 2026</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {loreNodes.map((node) => (
                  <Link
                    key={node.id}
                    href={node.route}
                    className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all group flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[11px] font-mono text-emerald-400">[[{node.id}]]</span>
                        <span className="text-[11px] font-mono text-slate-500">{node.epoch}</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-emerald-300 transition-colors mb-2">
                        {node.shortTitle}
                      </h3>
                      <p className="text-xs text-slate-400 font-serif leading-relaxed line-clamp-3">
                        {node.excerpt}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-emerald-500/70 group-hover:text-emerald-400">
                      <span>Explore thread ➔</span>
                      <span className="text-slate-500">{node.readingTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sovereign Video Transmissions & Long-Form Works */}
            <div className="space-y-6 pt-6 border-t border-slate-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <Radio className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>Sovereign Video Transmissions &bull; Long-Form Works</span>
                </div>
                <Link
                  href="/transmissions"
                  className="text-xs font-mono text-red-400 hover:text-red-300 transition flex items-center gap-1"
                >
                  <span>View All ({VIDEO_TRANSMISSIONS.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Featured Long-Form Release: The Art of True Healing (8m 88s) */}
              <div className="rounded-3xl border border-red-500/40 bg-gradient-to-br from-red-950/20 via-slate-900/50 to-slate-950/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-red-500/15 transition-all duration-700" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                  {/* Thumbnail */}
                  <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl bg-black aspect-video group/thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={VIDEO_TRANSMISSIONS[0].thumbnailUrl}
                      alt={VIDEO_TRANSMISSIONS[0].title}
                      className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 opacity-90 group-hover/thumb:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-600 text-white uppercase tracking-wider flex items-center gap-1 shadow">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        LATEST RELEASE
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 text-slate-200 border border-slate-700">
                        {VIDEO_TRANSMISSIONS[0].duration}
                      </span>
                    </div>
                  </div>

                  {/* Meta & Watch Link */}
                  <div className="lg:col-span-7 space-y-3 text-left">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {VIDEO_TRANSMISSIONS[0].categoryLabel}
                      </span>
                      <span className="text-slate-400">&bull;</span>
                      <span className="text-emerald-400 font-semibold">{VIDEO_TRANSMISSIONS[0].dashaAlignment}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 group-hover:text-red-200 transition-colors">
                      {VIDEO_TRANSMISSIONS[0].title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm font-serif leading-relaxed line-clamp-2">
                      {VIDEO_TRANSMISSIONS[0].summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {VIDEO_TRANSMISSIONS[0].frequencies?.slice(0, 4).map((freq) => (
                        <span key={freq} className="px-2 py-0.5 rounded bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                          {freq}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={VIDEO_TRANSMISSIONS[0].youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sans font-bold text-xs transition-all shadow-lg hover:shadow-red-600/30"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Watch on YouTube</span>
                        <ExternalLink className="w-3 h-3 opacity-80" />
                      </a>

                      <Link
                        href="/transmissions"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700 transition"
                      >
                        <span>Transmissions Archive &rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid of Other Published Long-Form Videos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {VIDEO_TRANSMISSIONS.slice(1, 5).map((v) => (
                  <a
                    key={v.id}
                    href={v.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:border-red-500/40 hover:bg-slate-900/60 transition-all group flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2.5">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-slate-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={v.thumbnailUrl}
                          alt={v.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                        />
                        <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded text-[9px] font-mono bg-black/80 text-slate-200 border border-slate-700">
                          {v.duration}
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                        <span className="text-amber-400 truncate max-w-[120px]">{v.categoryLabel}</span>
                        <span>{v.publishedAt}</span>
                      </div>

                      <h4 className="text-sm font-serif font-bold text-slate-100 group-hover:text-red-300 transition-colors line-clamp-2">
                        {v.shortTitle}
                      </h4>
                    </div>

                    <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-red-400">
                      <span>Watch video &rarr;</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Engineering & Systems Laboratories */}
            <div className="space-y-6 pt-6 border-t border-slate-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>The Systems Laboratory</span>
                </div>
                <span className="text-xs font-mono text-slate-500">AUTONOMOUS ENGINES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl border border-slate-800/60 bg-slate-950/40 space-y-2">
                  <div className="text-xs font-mono text-emerald-400">☿ MERCURY DASHA</div>
                  <div className="text-sm font-semibold text-slate-200">Sidereal Moon Ephemeris</div>
                  <p className="text-xs text-slate-400">120-year Vimshottari Dasha timeline, 7 Sacred Metals & Chrono-Pulse SSE ticker.</p>
                </div>

                <div className="p-5 rounded-xl border border-slate-800/60 bg-slate-950/40 space-y-2">
                  <div className="text-xs font-mono text-emerald-400">⚡ AXIS MUNDI</div>
                  <div className="text-sm font-semibold text-slate-200">Zero-Token Ingestion</div>
                  <p className="text-xs text-slate-400">High-speed voice ingestion daemon and MCP tool protocol in Go.</p>
                </div>

                <Link
                  href="/foundations"
                  className="p-5 rounded-xl border border-slate-800/60 bg-slate-950/40 space-y-2 hover:border-emerald-500/40 hover:bg-slate-900/40 transition-all group"
                >
                  <div className="text-xs font-mono text-emerald-400 flex items-center justify-between">
                    <span>🏛️ FOUNDATIONS</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                    Lore Matrix &amp; Storyteller
                  </div>
                  <p className="text-xs text-slate-400">Voice-to-structure synthesis, 2008 healing chronicle, and Solfeggio harmonics.</p>
                </Link>

                <div className="p-5 rounded-xl border border-slate-800/60 bg-slate-950/40 space-y-2">
                  <div className="text-xs font-mono text-emerald-400">⚔️ SOVEREIGN RUNTIME</div>
                  <div className="text-sm font-semibold text-slate-200">Autonomous Executive</div>
                  <p className="text-xs text-slate-400">Persistent OODA loop, Life Vault stewardship, and narrative synthesis.</p>
                </div>
              </div>
            </div>

          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}