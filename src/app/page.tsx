'use client';

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Waves, 
  Video, 
  Film, 
  Layers, 
  Radio, 
  Zap, 
  Activity, 
  CheckCircle2, 
  ExternalLink,
  Volume2,
  Calendar,
  Code2,
  ShieldCheck
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageContainer } from "@/components/layout/PageContainer";
import { EchoSHLogo } from "@/components/ui/EchoSHLogo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col justify-between selection:bg-emerald-500/20 font-sans">
      <Header />

      <main className="flex-1 py-12 sm:py-20">
        <PageContainer size="lg" glow="dual">
          <div className="space-y-20 animate-fadeIn">
            
            {/* Sovereign Identity Banner & Hero */}
            <div className="space-y-6 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="emerald" size="sm" className="gap-1.5 font-mono" dot pulseDot>
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>ECHOSH-LABS // AUTONOMOUS ENGINEERING</span>
                </Badge>
                <span className="text-xs font-mono text-slate-500">JUSTIN ANDREW WOOD</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
                The Voice-Driven Command &amp; Creation Substrate.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg font-serif leading-relaxed">
                The engineering laboratory and software architecture of <strong className="text-slate-100 font-semibold">Justin Andrew Wood</strong>. 
                Built to emancipate human focus through voice-driven command pipelines, zero-token daemon fleets, and automated procedural video and audio synthesis.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-semibold transition-all shadow-lg hover:shadow-cyan-600/25"
                >
                  <Video className="w-4 h-4" />
                  <span>Explore Video Studio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/foundations"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-mono text-xs transition-colors"
                >
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Foundations Chassis</span>
                </Link>

                <Link
                  href="/architecture"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-mono text-xs transition-colors"
                >
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <span>Fleet Architecture</span>
                </Link>
              </div>
            </div>

            {/* The 5 Foundational Epochs: The Authentic Technology Evolution */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-2 uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Technology Evolution &bull; Five Foundational Epochs</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-slate-100">
                    From Audio Terminal to Autonomous Video &amp; Voice Runtime
                  </h2>
                </div>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline">1980s &ndash; 2026</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Epoch 01: echoSH Origin */}
                <Link
                  href="/echosh"
                  className="p-6 rounded-3xl border border-slate-800/80 bg-slate-900/30 hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between space-y-4 shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold">EPOCH 01 // ORIGIN</span>
                      <Waves className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <EchoSHLogo size="sm" variant="auto" />
                      <span className="text-xs font-mono text-slate-400 font-bold">Audio Terminal</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Started as an Electron-based audio generation terminal application, featuring real-time Web Audio 2.0 DSP synthesis, keyboard-first soundboard, and ambient drone engines.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center justify-between">
                    <span>Inspect Terminal &rarr;</span>
                    <span className="text-slate-600">ELECTRON / DSP</span>
                  </div>
                </Link>

                {/* Epoch 02: Axis Mundi */}
                <Link
                  href="/axis-mundi"
                  className="p-6 rounded-3xl border border-slate-800/80 bg-slate-900/30 hover:border-violet-500/50 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between space-y-4 shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-violet-400 font-bold">EPOCH 02 // INGRESS</span>
                      <Activity className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-violet-300 transition-colors">
                      Axis Mundi Bridge
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Zero-token Google Keep synchronization bridge, SSE live event streams, Telegram daily dispatches, and local Model Context Protocol (MCP) tool registry.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-violet-400 flex items-center justify-between">
                    <span>Inspect MCP Bridge &rarr;</span>
                    <span className="text-slate-600">PORT 8088</span>
                  </div>
                </Link>

                {/* Epoch 03: Foundations */}
                <Link
                  href="/foundations"
                  className="p-6 rounded-3xl border border-slate-800/80 bg-slate-900/30 hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between space-y-4 shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold">EPOCH 03 // CHASSIS</span>
                      <Cpu className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      Foundations Orchestrator
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Industrial multi-pipeline Go orchestration chassis. Translates triaged voice intent into code compilation (CODE_DEV), Google Workspace actions (STRATEGIC_PLAN), and procedural storyboards (CREATIVE_STORY).
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center justify-between">
                    <span>Inspect Chassis &rarr;</span>
                    <span className="text-slate-600">PORT 8085</span>
                  </div>
                </Link>

                {/* Epoch 04: AMRA Video Studio */}
                <Link
                  href="/studio"
                  className="p-6 rounded-3xl border border-cyan-500/30 bg-cyan-950/20 hover:border-cyan-500/60 hover:bg-cyan-950/30 transition-all duration-300 group flex flex-col justify-between space-y-4 shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-cyan-400 font-bold">EPOCH 04 // VIDEO FLEET</span>
                      <Film className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      AMRA Video Studio
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Automated 3-tier video generation fleet: Mobile Montage (Mode 1), Procedural Sacred Geometry (Mode 2), and Bicameral Spoken-Voice &amp; Relic Synthesis with kinetic ASS subtitles (Mode 3).
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400 flex items-center justify-between">
                    <span>Inspect Video Pipelines &rarr;</span>
                    <span className="text-slate-600">PORT 8050</span>
                  </div>
                </Link>

                {/* Epoch 05: Sovereign Sensorium */}
                <Link
                  href="/architecture"
                  className="p-6 rounded-3xl border border-slate-800/80 bg-slate-900/30 hover:border-amber-500/50 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between space-y-4 shadow-xl md:col-span-2 lg:col-span-2"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-amber-400 font-bold">EPOCH 05 // SENSORIUM &amp; OODA</span>
                      <Terminal className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                      Continuous Voice Perception &amp; Sovereign Observer
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      The continuous cognitive loop. Google Recorder speaker diarization (:8091), fast-whisper transcription (:8095), local Ollama Moondream VLM image classification (:8086), and the autonomous 5-second Sovereign Observer executive loop (:8092) writing to SQLite WAL.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-amber-400 flex items-center justify-between">
                    <span>View Sensorium Architecture &rarr;</span>
                    <span className="text-slate-600">PORTS 8086, 8091, 8092, 8095</span>
                  </div>
                </Link>

              </div>
            </div>

            {/* Video Production Spotlight Card */}
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-slate-900/40 to-slate-950/80 p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden group space-y-6">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-cyan-500/15 transition-all duration-700" />

              <div className="space-y-3 max-w-2xl relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Film className="w-4 h-4" />
                  <span>CORE CAPABILITY // PROCEDURAL VIDEO SYNTHESIS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
                  Automated Cinema-Grade Video Generation
                </h3>
                <p className="text-sm text-slate-300 font-serif leading-relaxed">
                  AMRA transforms raw spoken-voice recordings and diarized transcripts into vertical 9:16 Shorts or widescreen 16:9 master productions. 
                  Featuring multi-axis Ken Burns rendering across 5,800+ relics, in-memory 48kHz audio beds (-14 LUFS), and kinetic ASS subtitles with platform safe zones.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10 pt-2 font-mono text-xs">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-cyan-400 font-bold mb-1">MODE 01 // MOBILE</div>
                  <p className="text-slate-400 text-[11px]">Pixel 7 clip stitching, xfade transitions, and telemetric lower-thirds.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-amber-400 font-bold mb-1">MODE 02 // GEOMETRY</div>
                  <p className="text-slate-400 text-[11px]">Procedural sacred geometry, Saturnian toroids, and pure Go 48kHz WAV audio.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-red-400 font-bold mb-1">MODE 03 // RELIC SYNTH</div>
                  <p className="text-slate-400 text-[11px]">Bicameral spoken-voice synthesis, kinetic subtitles, and Ken Burns animation.</p>
                </div>
              </div>

              <div className="pt-2 relative z-10">
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-semibold transition-all shadow-md"
                >
                  <span>Launch AMRA Studio Console</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Engineering & Systems Fleet Grid */}
            <div className="space-y-6 pt-6 border-t border-slate-900">
              <div className="flex items-center justify-between">
                <Link
                  href="/architecture"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider hover:text-emerald-400 transition-colors"
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>The Systems Fleet &bull; 13 Active Service daemons</span>
                </Link>
                <Link
                  href="/architecture"
                  className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Fleet Dossier &rarr;</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/studio"
                  className="p-5 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:border-cyan-500/40 hover:bg-slate-900/40 transition-all group space-y-2"
                >
                  <div className="text-xs font-mono text-cyan-400 flex items-center justify-between">
                    <span>🎬 AMRA CREATIVE STUDIO</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    Video Pipelines &bull; Port 8050
                  </div>
                  <p className="text-xs text-slate-400">Headless Modes 1/2/3, pure Go 48kHz WAV audio synthesis &amp; kinetic subtitle burn-in.</p>
                </Link>

                <Link
                  href="/foundations"
                  className="p-5 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:border-emerald-500/40 hover:bg-slate-900/40 transition-all group space-y-2"
                >
                  <div className="text-xs font-mono text-emerald-400 flex items-center justify-between">
                    <span>⚙️ FOUNDATIONS ORCHESTRATION</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                    Autonomous Chassis &bull; Port 8085
                  </div>
                  <p className="text-xs text-slate-400">Multi-pipeline Go orchestrator: CODE_DEV compiler, workspace admin &amp; storyboards.</p>
                </Link>

                <Link
                  href="/axis-mundi"
                  className="p-5 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:border-violet-500/40 hover:bg-slate-900/40 transition-all group space-y-2"
                >
                  <div className="text-xs font-mono text-violet-400 flex items-center justify-between">
                    <span>⚡ AXIS MUNDI</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-violet-300 transition-colors">
                    Zero-Token Ingestion &bull; Port 8088
                  </div>
                  <p className="text-xs text-slate-400">High-speed voice ingestion daemon, MCP tool protocol, and daily telegram digest.</p>
                </Link>

                <Link
                  href="/architecture"
                  className="p-5 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:border-emerald-500/40 hover:bg-slate-900/40 transition-all group space-y-2"
                >
                  <div className="text-xs font-mono text-emerald-400 flex items-center justify-between">
                    <span>☿ MERCURY DASHA</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                    Temporal Engine &bull; Port 8080
                  </div>
                  <p className="text-xs text-slate-400">Ephemeris modeling, photo ingestion pipeline &amp; 85,000-file storehouse indexer.</p>
                </Link>

                <Link
                  href="/architecture"
                  className="p-5 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:border-emerald-500/40 hover:bg-slate-900/40 transition-all group space-y-2"
                >
                  <div className="text-xs font-mono text-emerald-400 flex items-center justify-between">
                    <span>👁️ ECHOSH CLASSIFIER</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                    Cognitive VLM &bull; Port 8086
                  </div>
                  <p className="text-xs text-slate-400">Zero-cloud Ollama Moondream VLM image intake and intelligent ontology categorization.</p>
                </Link>

                <Link
                  href="/architecture"
                  className="p-5 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:border-amber-500/40 hover:bg-slate-900/40 transition-all group space-y-2"
                >
                  <div className="text-xs font-mono text-amber-400 flex items-center justify-between">
                    <span>⚔️ SOVEREIGN OBSERVER</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-amber-300 transition-colors">
                    Executive OODA &bull; Port 8092
                  </div>
                  <p className="text-xs text-slate-400">Continuous 5s executive loop, 12-sensor Sensorium &amp; 102,000+ logged SQLite cycles.</p>
                </Link>
              </div>
            </div>

          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
