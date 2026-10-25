'use client';

import React from "react";
import Link from "next/link";
import { 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Activity, 
  CheckCircle2, 
  ShieldCheck,
  Code2,
  Calendar,
  Palette,
  Radio,
  FileCode2,
  Zap,
  Server
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageContainer } from "@/components/layout/PageContainer";

export default function FoundationsPage() {
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
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>FOUNDATIONS ORCHESTRATION CHASSIS // PORT 8085</span>
                </Badge>
                <span className="text-xs font-mono text-slate-500">AUTONOMOUS LIVING THROUGH AUTHENTIC FREEDOM</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
                Foundations: The Autonomous Execution Chassis.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg font-serif leading-relaxed">
                An industrial-grade, multi-pipeline orchestration engine designed to emancipate human focus from routine screen-time. 
                Receiving triaged directives from <strong className="text-slate-100 font-semibold">Axis Mundi</strong>&apos;s SQLite event stream, 
                Foundations operates as the autonomous execution backbone—translating natural spoken voice intents into compiled code, test suites, procedural storyboards, and workspace actions.
              </p>
            </div>

            {/* Architecture Overview Diagram Card */}
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>Foundations Event &amp; Triage Lifecycle</span>
                </div>
                <span className="text-xs font-mono text-slate-500">VOICE &rarr; SQLITE &rarr; DISPATCH</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>01 // Ingress Ingestion</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Voice directives captured via mobile/desktop microphones drop into Google Keep and local audio stores, ingested zero-token by Axis Mundi.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>02 // SQLite Triage</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Event classification categorizes incoming intent into CODE_DEV, STRATEGIC_PLAN, or CREATIVE_STORY queues with deterministic priority.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <div className="text-amber-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>03 // Chassis Execution</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Go execution engines compile binaries, execute test suites, run browser automation, or stage media pipelines with zero manual clicks.
                  </p>
                </div>
              </div>
            </div>

            {/* The 3 Core Execution Pipelines Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sm font-mono text-slate-300 uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>The Three Core Foundations Pipelines</span>
                </div>
                <span className="text-xs font-mono text-slate-500">PARALLEL GO DISPATCHERS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Pipeline 1: CODE_DEV */}
                <div className="p-6 rounded-3xl border border-emerald-500/30 bg-emerald-950/10 backdrop-blur-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono text-emerald-400 font-bold">PIPELINE: CODE_DEV</div>
                    <h3 className="text-xl font-serif font-bold text-slate-100">Compiler Chassis</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Autonomous software engineering pipeline. Runs static analysis, executes test runners, compiles Go and Rust binaries, and pushes git commits with conventional formatting.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 space-y-1">
                    <div>&bull; Multi-language build runner</div>
                    <div>&bull; Unit &amp; regression test verification</div>
                    <div>&bull; Local daemon hot-reloading</div>
                  </div>
                </div>

                {/* Pipeline 2: STRATEGIC_PLAN */}
                <div className="p-6 rounded-3xl border border-cyan-500/30 bg-cyan-950/10 backdrop-blur-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono text-cyan-400 font-bold">PIPELINE: STRATEGIC_PLAN</div>
                    <h3 className="text-xl font-serif font-bold text-slate-100">Workspace Automation</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Automated operational governance. Schedules calendar agendas, synchronizes Google Docs &amp; Drive assets, audits ledger budgets, and generates daily executive briefs.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 space-y-1">
                    <div>&bull; Google Workspace API bridge</div>
                    <div>&bull; AMRA Treasury ledger updates</div>
                    <div>&bull; Daily schedule and dispatch digest</div>
                  </div>
                </div>

                {/* Pipeline 3: CREATIVE_STORY */}
                <div className="p-6 rounded-3xl border border-amber-500/30 bg-amber-950/10 backdrop-blur-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono text-amber-400 font-bold">PIPELINE: CREATIVE_STORY</div>
                    <h3 className="text-xl font-serif font-bold text-slate-100">Procedural Storyboards</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Visual storyboard generation and responsive media synthesis. Translates spoken narrative outlines into visual concept cards, prompt blueprints, and AMRA video manifests.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 space-y-1">
                    <div>&bull; Procedural asset staging</div>
                    <div>&bull; AMRA Video Studio manifest bridge</div>
                    <div>&bull; SVG &amp; responsive UI drafting</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Telemetry Hub & Live IPC Section */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-6 sm:p-10 backdrop-blur-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>FOUNDATIONS TELEMETRY STREAM &bull; SSE PORT 8085</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-100">
                    Real-Time Unix Domain Socket &amp; SSE Hub
                  </h3>
                </div>
                <Link
                  href="/architecture"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors self-start sm:self-auto"
                >
                  <span>Fleet Architecture</span>
                  <ArrowRight className="w-3 h-3 text-emerald-400" />
                </Link>
              </div>

              <p className="text-sm text-slate-400 font-serif leading-relaxed max-w-3xl">
                Foundations broadcasts pipeline lifecycle events over a local Unix domain socket stream and an HTTP Server-Sent Events (SSE) broadcaster on port 8085. 
                Connected interfaces monitor active compilation progress, test results, and deployment health with sub-millisecond local latency.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/60">
                  <div className="text-slate-500 text-[10px]">DAEMON STATUS</div>
                  <div className="text-emerald-400 font-bold mt-1">ACTIVE</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/60">
                  <div className="text-slate-500 text-[10px]">IPC INTERFACE</div>
                  <div className="text-slate-300 font-bold mt-1">UNIX DOMAIN</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/60">
                  <div className="text-slate-500 text-[10px]">SSE TELEMETRY</div>
                  <div className="text-slate-300 font-bold mt-1">PORT 8085</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/60">
                  <div className="text-slate-500 text-[10px]">STORAGE AUDIT</div>
                  <div className="text-slate-300 font-bold mt-1">SQLITE WAL</div>
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
