'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Terminal, 
  Cpu, 
  Database, 
  Workflow, 
  Radio, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  FileCode, 
  CheckCircle2, 
  Play,
  RotateCw,
  Activity,
  ShieldCheck,
  ShieldAlert 
} from "lucide-react";
import { BuckyballCanvas } from "@/components/canvas/BuckyballCanvas";
import { Badge } from "@/components/ui/Badge";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useAudioEngine } from "@/hooks/useAudioEngine";
import { fmCyberRhodes, fmLaserSweep, fmMetallicSpaceBell } from "@/lib/audio/presets";

export default function AxisMundiPage() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'mcp' | 'tui'>('architecture');
  const [activeMcpTool, setActiveMcpTool] = useState<string | null>(null);
  const [mcpResult, setMcpResult] = useState<string | null>(null);
  const [tuiMode, setTuiMode] = useState<'AUTO' | 'MANUAL'>('AUTO');
  const [tuiTicks, setTuiTicks] = useState<number>(29);
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([
    "2026-08-24 09:00:00 [POLLER] Keep sync pass executed (0 notes modified)",
    "2026-08-24 09:00:30 [BROADCAST] tick=29s next_pass in 1s",
    "2026-08-24 09:00:31 [MCP_CALL] tools/list requested by autonomous agent",
    "2026-08-24 09:00:32 [SSE_HUB] Dispatched state telemetry to 1 client"
  ]);

  const { playUIClick, playBlueprint } = useAudioEngine();

  // Simulated TUI tick timer
  useEffect(() => {
    if (tuiMode !== 'AUTO') return;
    const interval = setInterval(() => {
      setTuiTicks((prev) => (prev <= 1 ? 30 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [tuiMode]);

  const handleSimulateMcp = (toolName: string, payload: object) => {
    playBlueprint(fmCyberRhodes, `MCP: ${toolName}`);
    setActiveMcpTool(toolName);
    setMcpResult(JSON.stringify({
      jsonrpc: "2.0",
      id: `req-${Date.now().toString().slice(-4)}`,
      result: {
        tool: toolName,
        status: "SUCCESS",
        timestamp: new Date().toISOString(),
        executed_by: "AutonomousPairAgent",
        ...payload
      }
    }, null, 2));
  };

  const handleToggleTuiMode = () => {
    playUIClick();
    const newMode = tuiMode === 'AUTO' ? 'MANUAL' : 'AUTO';
    setTuiMode(newMode);
    setTelemetryLogs((prev) => [
      `${new Date().toISOString().slice(11, 19)} [MODE_CHANGE] Toggled operating mode to ${newMode}`,
      ...prev.slice(0, 5)
    ]);
  };

  const handleManualSync = () => {
    playBlueprint(fmMetallicSpaceBell, 'Keep Sync Triggered');
    setTelemetryLogs((prev) => [
      `${new Date().toISOString().slice(11, 19)} [MANUAL_SYNC] Keep on-demand pass: 4 notes verified`,
      ...prev.slice(0, 5)
    ]);
  };

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 flex flex-col justify-between selection:bg-violet-500/20 font-sans relative overflow-x-hidden">
      {/* Dynamic Cyber Violet Ambient Glow */}
      <div className="absolute top-20 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-60 right-10 w-[500px] h-[500px] bg-emerald-600/08 rounded-full blur-3xl pointer-events-none" />

      {/* 3D Geometric Buckyball Canvas Ambient Background */}
      <BuckyballCanvas opacity={0.28} />

      {/* Unified Top Navigation Header */}
      <Header />

      {/* Main Archival Stage */}
      <main className="flex-1 z-10 py-8">
        <PageContainer size="lg">
          <div className="space-y-12 animate-fadeIn">
            
            {/* Hero Section */}
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 font-mono text-xs text-violet-400">
                <Terminal className="w-4 h-4 text-violet-400" />
                <span>SYSTEM ARCHIVE // ZERO-TOKEN INGESTION ENGINE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
                Axis Mundi: A Personal Engine for Authentic Freedom
              </h1>
              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                Engineered to emancipate human consciousness from routine screen-time. Axis Mundi served as a high-speed, zero-token ingestion daemon in Go—passively capturing ambient voice notes from Google Keep, triaging intent into local SQLite/BoltDB registries, and exposing direct tool execution to autonomous coding agents over the Model Context Protocol (MCP).
              </p>

              {/* GitHub Link Button & Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/echosh-labs/axis-mundi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-950/60 border border-violet-500/40 text-violet-300 hover:text-violet-100 hover:border-violet-400 hover:bg-violet-900/60 text-xs font-mono transition-all shadow-glow-violet"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>VIEW SOURCE ON GITHUB (echosh-labs/axis-mundi)</span>
                </a>

                <Badge variant="violet" size="xs">GO DAEMON</Badge>
                <Badge variant="emerald" size="xs">MCP JSON-RPC</Badge>
                <Badge variant="cyan" size="xs">KEEP DWD API</Badge>
              </div>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3 font-mono text-xs">
              <button
                onClick={() => { playUIClick(); setActiveTab('architecture'); }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-slate-800 text-violet-300 border border-violet-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                01. Pipeline Architecture
              </button>
              <button
                onClick={() => { playUIClick(); setActiveTab('mcp'); }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'mcp'
                    ? 'bg-slate-800 text-emerald-400 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                02. MCP Tool Registry & Sandbox
              </button>
              <button
                onClick={() => { playUIClick(); setActiveTab('tui'); }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'tui'
                    ? 'bg-slate-800 text-cyan-400 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                03. Split-Pane Terminal TUI
              </button>
            </div>

            {/* TAB 1: ARCHITECTURE PIPELINE */}
            {activeTab === 'architecture' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Step 1 */}
                  <Panel variant="default" className="p-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs">
                        01
                      </div>
                      <h3 className="font-serif font-bold text-slate-200 text-sm">Voice Ingestion</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Ambient thoughts spoken on mobile are recorded via Gemini Mobile / Google Keep without firing high-latency LLM completions.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-800/40">
                      Zero-Token Ingest
                    </div>
                  </Panel>

                  {/* Step 2 */}
                  <Panel variant="default" className="p-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs">
                        02
                      </div>
                      <h3 className="font-serif font-bold text-slate-200 text-sm">Background Daemon</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Native Go daemon polls Google Keep and Google Workspace APIs using Service Account Domain-Wide Delegation (DWD).
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-1 rounded border border-cyan-800/40">
                      Go Poller (10s-300s)
                    </div>
                  </Panel>

                  {/* Step 3 */}
                  <Panel variant="default" className="p-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 font-mono text-xs">
                        03
                      </div>
                      <h3 className="font-serif font-bold text-slate-200 text-sm">Gatekeeper Triage</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Actionable directives are triaged into <code className="text-emerald-300">QUEUED_FOR_AGENT</code>, while passive notes store conversational context.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-violet-400 bg-violet-950/40 px-2 py-1 rounded border border-violet-800/40">
                      BoltDB / SQLite Core
                    </div>
                  </Panel>

                  {/* Step 4 */}
                  <Panel variant="default" className="p-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-xs">
                        04
                      </div>
                      <h3 className="font-serif font-bold text-slate-200 text-sm">Agentic Execution</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Autonomous agents read triaged directives over JSON-RPC 2.0 MCP endpoints, compile code, and broadcast telemetry over SSE.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-amber-400 bg-amber-950/40 px-2 py-1 rounded border border-amber-800/40">
                      MCP JSON-RPC Tools
                    </div>
                  </Panel>
                </div>

                {/* Conceptual Evolution Callout */}
                <Panel variant="default" className="p-6 border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mt-1">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-slate-100 text-base">
                        How This Evolved into Modern Antigravity Remote Interface
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                        Axis Mundi proved that human thought could be translated directly into code actions without burning tokens in synchronous loops. Today, the direct remote AI pair-programming interface handles conversational memory, background execution, and tool coordination directly—allowing the Go daemon to be gracefully archived as a historical milestone.
                      </p>
                    </div>
                  </div>
                </Panel>
              </div>
            )}

            {/* TAB 2: MCP TOOL REGISTRY */}
            {activeTab === 'mcp' && (
              <div className="space-y-6 animate-fadeIn">
                <p className="text-xs font-mono text-slate-400">
                  Axis Mundi exposed 5 native tools over JSON-RPC 2.0 at <code className="text-emerald-400">/api/mcp</code>. Click any tool below to simulate live agent execution and inspect JSON responses:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Tool 1 */}
                  <Panel variant="default" className="p-5 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400 font-bold font-mono">axismundi_list_directives</span>
                      <Button
                        size="xs"
                        variant="primary"
                        onClick={() => handleSimulateMcp("axismundi_list_directives", {
                          directives: [
                            { id: "dir-101", title: "Compile watercolor scenes for foundations", status: "QUEUED_FOR_AGENT" },
                            { id: "dir-102", title: "Verify SQLite 21 migration tiers", status: "COMPLETED" }
                          ]
                        })}
                        className="gap-1"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Run Test</span>
                      </Button>
                    </div>
                    <p className="text-slate-400 font-sans text-xs">
                      Returns all triaged directives filtered by status (<code className="text-slate-300">QUEUED_FOR_AGENT</code>, <code className="text-slate-300">IN_PROGRESS</code>, <code className="text-slate-300">COMPLETED</code>).
                    </p>
                  </Panel>

                  {/* Tool 2 */}
                  <Panel variant="default" className="p-5 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400 font-bold font-mono">axismundi_update_status</span>
                      <Button
                        size="xs"
                        variant="primary"
                        onClick={() => handleSimulateMcp("axismundi_update_status", {
                          id: "dir-891",
                          previous_status: "IN_PROGRESS",
                          new_status: "COMPLETED",
                          execution_duration_ms: 412
                        })}
                        className="gap-1"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Run Test</span>
                      </Button>
                    </div>
                    <p className="text-slate-400 font-sans text-xs">
                      Mutates directive status, sets execution logs, and broadcasts live SSE notifications across the telemetry hub.
                    </p>
                  </Panel>

                  {/* Tool 3 */}
                  <Panel variant="default" className="p-5 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400 font-bold font-mono">axismundi_sync_keep</span>
                      <Button
                        size="xs"
                        variant="primary"
                        onClick={() => handleSimulateMcp("axismundi_sync_keep", {
                          notes_scanned: 18,
                          new_directives_created: 2,
                          sync_duration_ms: 128
                        })}
                        className="gap-1"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Run Test</span>
                      </Button>
                    </div>
                    <p className="text-slate-400 font-sans text-xs">
                      Forces an on-demand synchronization pass against Google Keep notes without waiting for the background timer tick.
                    </p>
                  </Panel>

                  {/* Tool 4 */}
                  <Panel variant="default" className="p-5 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400 font-bold font-mono">axismundi_set_mode</span>
                      <Button
                        size="xs"
                        variant="primary"
                        onClick={() => handleSimulateMcp("axismundi_set_mode", {
                          mode: "AUTO",
                          interval_seconds: 30,
                          next_tick: new Date(Date.now() + 30000).toISOString()
                        })}
                        className="gap-1"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Run Test</span>
                      </Button>
                    </div>
                    <p className="text-slate-400 font-sans text-xs">
                      Toggles daemon operating mode between <code className="text-violet-300">AUTO</code> (continuous background tick) and <code className="text-slate-300">MANUAL</code>.
                    </p>
                  </Panel>
                </div>

                {/* Simulated JSON-RPC Console Output */}
                {mcpResult && (
                  <Panel variant="default" className="p-5 space-y-2 border-emerald-500/40 bg-black/60 font-mono text-xs">
                    <div className="flex items-center justify-between text-emerald-400 border-b border-emerald-500/20 pb-2">
                      <span className="font-bold">JSON-RPC 2.0 RESPONSE [200 OK]</span>
                      <Badge variant="emerald" size="xs">MOCK PROTOCOL PASS</Badge>
                    </div>
                    <pre className="text-[11px] text-emerald-300 overflow-x-auto p-2 bg-slate-950/80 rounded border border-slate-900">
                      {mcpResult}
                    </pre>
                  </Panel>
                )}
              </div>
            )}

            {/* TAB 3: SPLIT-PANE TUI SIMULATOR */}
            {activeTab === 'tui' && (
              <div className="space-y-4 animate-fadeIn">
                <Panel variant="default" className="p-6 border-slate-800 bg-[#07090e] font-mono text-xs space-y-4 relative overflow-hidden">
                  <div className="absolute inset-0 scanline-crt opacity-30" />

                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Terminal className="w-4 h-4" />
                      <span className="font-bold">AXIS MUNDI TUI COMMAND CENTER</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px]">
                      <Button size="xs" variant="secondary" onClick={handleToggleTuiMode}>
                        MODE: {tuiMode} ({tuiTicks}s)
                      </Button>
                      <Button size="xs" variant="secondary" onClick={handleManualSync}>
                        <RotateCw className="w-3 h-3" />
                        <span>Force Sync</span>
                      </Button>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                        <span>LIVE</span>
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                    {/* Left pane */}
                    <div className="border border-slate-800/80 rounded p-3 space-y-2 bg-black/60">
                      <div className="text-slate-400 font-bold text-[11px] border-b border-slate-800 pb-1 flex items-center justify-between">
                        <span>TASK REGISTRY (SQLite / BoltDB)</span>
                        <Badge variant="slate" size="xs">2 ACTIVE</Badge>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="p-2 rounded bg-emerald-950/30 border border-emerald-500/30 text-slate-200">
                          <div className="flex items-center justify-between text-emerald-400">
                            <span>#directive // Storyboard Gen</span>
                            <Badge variant="emerald" size="xs">EXEC</Badge>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-1">Compile watercolor scenes for foundations storyline</p>
                        </div>
                        <div className="p-2 rounded bg-slate-900/40 border border-slate-800 text-slate-400">
                          <div className="flex items-center justify-between text-slate-300">
                            <span>#context // Harmonic Models</span>
                            <Badge variant="slate" size="xs">PASSIVE</Badge>
                          </div>
                          <p className="text-[10px] text-slate-500 mt-1">Mercury synesthetic scale frequencies (432Hz root)</p>
                        </div>
                      </div>
                    </div>

                    {/* Right pane */}
                    <div className="border border-slate-800/80 rounded p-3 space-y-2 bg-black/60">
                      <div className="text-slate-400 font-bold text-[11px] border-b border-slate-800 pb-1 flex items-center justify-between">
                        <span>TELEMETRY EVENT STREAM (SSE)</span>
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="space-y-1 font-mono text-[10px] text-slate-400">
                        {telemetryLogs.map((log, i) => (
                          <p key={i} className={i === 0 ? "text-emerald-400" : "text-slate-400"}>
                            {log}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Panel>
              </div>
            )}

          </div>
        </PageContainer>
      </main>

      {/* Clean Minimal Footer */}
      <Footer />
    </div>
  );
}

