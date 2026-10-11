'use client';

import React, { useState } from "react";
import Link from "next/link";
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Activity, 
  Terminal, 
  ShieldCheck, 
  Layers, 
  Globe, 
  RefreshCw, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  ArrowRight,
  Database,
  Radio,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { useAudioEngine } from "@/hooks/useAudioEngine";

interface FleetService {
  port: number | string;
  name: string;
  substrate: string;
  role: string;
  protocol: string;
  status: 'ONLINE' | 'ACTIVE' | 'DAEMON';
}

const FLEET_SERVICES: FleetService[] = [
  { port: 3000, name: "echosh-labs.com", substrate: "WSL2 Ubuntu", role: "Static Next.js Dossier & Showcase", protocol: "HTTP", status: "ONLINE" },
  { port: 8050, name: "amra-treasury", substrate: "WSL2 Ubuntu", role: "AMRA Sovereign Treasury, Video Studio (Mode 1/2/3), BoltDB", protocol: "REST / MCP", status: "ACTIVE" },
  { port: 8080, name: "mercury-dasha", substrate: "WSL2 Ubuntu", role: "Ephemeris Engine, Photo Ingress Pipeline, 85k File Indexer", protocol: "REST / SSE", status: "ACTIVE" },
  { port: 8081, name: "shaolin", substrate: "WSL2 Ubuntu", role: "Shaolin Martial Arts Academy Go REST API & Student Portal", protocol: "REST", status: "ACTIVE" },
  { port: 8082, name: "sovereign-genesis", substrate: "WSL2 Ubuntu", role: "Character Sanctuary & Agentic MCP Core, Genesis Engine", protocol: "REST / MCP", status: "ACTIVE" },
  { port: 8084, name: "mercury-comm", substrate: "WSL2 Ubuntu", role: "Sovereign Discord Bot Gateway, Charter Channels & Voice Bridge", protocol: "Socket", status: "ACTIVE" },
  { port: 8086, name: "echosh-classifier", substrate: "WSL2 Ubuntu", role: "Cognitive Classification Engine & Local Moondream VLM Bridge", protocol: "REST", status: "ACTIVE" },
  { port: 8088, name: "axis-mundi", substrate: "WSL2 Ubuntu", role: "Zero-Token Workspace Ingestion & Daily Telegram Dispatcher", protocol: "REST / MCP", status: "ACTIVE" },
  { port: 8091, name: "google-recorder", substrate: "WSL2 Ubuntu", role: "Speaker-Diarized Google Recorder API Gateway (M4A & JSON)", protocol: "REST", status: "ACTIVE" },
  { port: 8092, name: "sovereign-observer", substrate: "WSL2 Ubuntu", role: "Layer 0 Webhook Ingress & Continuous 5s OODA Loop, SQLite WAL", protocol: "Webhook / DB", status: "ACTIVE" },
  { port: 8095, name: "whisper", substrate: "WSL2 Ubuntu", role: "Standalone Fast-Whisper Local Audio Transcription Service", protocol: "REST", status: "ACTIVE" },
  { port: 8384, name: "syncthing", substrate: "WSL2 Ubuntu", role: "P2P Pixel 7 Phone Camera Roll Sync to native dropzone", protocol: "P2P TLS", status: "DAEMON" },
  { port: 11434, name: "ollama", substrate: "WSL2 Ubuntu", role: "Local Neural Inference Engine (qwen2.5:7b & moondream VLM)", protocol: "REST", status: "ACTIVE" },
];

export function ArchitectureDashboard() {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'CORE' | 'MEDIA' | 'PERCEPTION'>('ALL');
  const { playUIClick } = useAudioEngine();

  return (
    <div className="space-y-12 animate-fadeIn font-sans">
      
      {/* Header Hero Section */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="emerald" size="sm" className="font-mono gap-1.5" dot pulseDot>
            <Server className="w-3.5 h-3.5 text-emerald-400" />
            <span>SOVEREIGN ARCHITECTURAL DOSSIER // FLEET TOPOLOGY</span>
          </Badge>
          <span className="text-xs font-mono text-slate-500">WSL2 EXT4 &bull; ZERO-TOKEN PRECEDENCE</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
          Systems Fleet &amp; Autonomous Runtime
        </h1>

        <p className="text-slate-300 text-sm sm:text-base font-serif leading-relaxed">
          The distributed systems topology powering Justin Andrew Wood&apos;s digital sovereignty. 
          Operating natively on WSL2 Ubuntu POSIX substrates, the fleet coordinates continuous OODA perception, 
          zero-token media intake, local neural inference, and real-time audio/video synthesis.
        </p>
      </div>

      {/* The 6 Invariant Laws Quick Reference */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>The Invariant Laws of Sovereign Engineering</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <span className="text-emerald-400 font-bold">LAW I &bull; DUAL-SANCTUM</span>
            <p className="text-slate-400 font-sans">Inner spiritual engines shielded; outer public showcase generates enterprise respect and wealth.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <span className="text-emerald-400 font-bold">LAW II &bull; ZERO-TOKEN FIRST</span>
            <p className="text-slate-400 font-sans">Check running service endpoints and local database ledgers before spending cognitive tokens.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <span className="text-emerald-400 font-bold">LAW III &bull; SUBSTRATE PRIMACY</span>
            <p className="text-slate-400 font-sans">WSL2 Ubuntu ext4 is the canonical execution anchor; Windows host is creative workstation.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <span className="text-emerald-400 font-bold">LAW IV &bull; DETERMINISTIC ASSETS</span>
            <p className="text-slate-400 font-sans">Zero blind disk crawls. Dropzone $\rightarrow$ VLM Classifier $\rightarrow$ Vault $\rightarrow$ AMRA Ledger.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <span className="text-emerald-400 font-bold">LAW V &bull; ZERO-TOKEN DAEMONS</span>
            <p className="text-slate-400 font-sans">Continuous monitoring in Go/Python daemons; clean port ownership and lock reclamation.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <span className="text-emerald-400 font-bold">LAW VI &bull; TRI-ZONE GOVERNANCE</span>
            <p className="text-slate-400 font-sans">Zone 1 autonomous execution, Zone 2 supervised code updates, Zone 3 gated Sovereign consent.</p>
          </div>
        </div>
      </div>

      {/* Complete Network Fleet Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Active Network Fleet Topology</span>
          </div>
          <span className="text-xs font-mono text-slate-500">13 RUNNING SERVICES</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-950/80 text-slate-400 uppercase border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Port</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4 hidden sm:table-cell">Substrate</th>
                <th className="py-3 px-4">Role &amp; Responsibility</th>
                <th className="py-3 px-4 hidden md:table-cell">Protocol</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {FLEET_SERVICES.map((svc) => (
                <tr key={svc.name} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-4 text-emerald-400 font-bold">
                    {svc.port === "N/A" ? "—" : svc.port}
                  </td>
                  <td className="py-3 px-4 font-semibold text-slate-100 whitespace-nowrap">
                    {svc.name}
                  </td>
                  <td className="py-3 px-4 text-slate-500 hidden sm:table-cell">
                    {svc.substrate}
                  </td>
                  <td className="py-3 px-4 text-slate-300 font-sans text-xs">
                    {svc.role}
                  </td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">
                    {svc.protocol}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                      {svc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Autonomous Ingress Pipeline Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>DETERMINISTIC INGRESS &bull; VLM CLASSIFICATION</span>
          </div>
          <h3 className="text-lg font-serif font-bold text-slate-100">
            Zero-Cloud Media Pipeline
          </h3>
          <p className="text-xs text-slate-300 font-serif leading-relaxed">
            Photographs taken on Pixel 7 synchronize over local P2P Syncthing to WSL2 dropzones. 
            The Go ingestion daemon detects new files, queries local Ollama Moondream VLM (:11434) for semantic captioning, 
            archives to canonical storage, and writes companion <code className="text-cyan-400">.meta.json</code> sidecars in zero tokens.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
            <Database className="w-4 h-4 text-amber-400" />
            <span>LAYER 0 EXECUTIVE &bull; 102,000+ LOGGED CYCLES</span>
          </div>
          <h3 className="text-lg font-serif font-bold text-slate-100">
            Sovereign Observer &amp; SQLite WAL
          </h3>
          <p className="text-xs text-slate-300 font-serif leading-relaxed">
            The Sovereign Executive runtime (<code className="text-amber-400">agent_core.py</code>) executes a continuous 5-second OODA loop. 
            It consumes the 12-sensor Sensorium, enforces gatekeeper rules, and logs state immutably to <code className="text-amber-400">sovereign.db</code>. 
            Hourly systemd timers take atomic zero-lock snapshots for cloud replication.
          </p>
        </div>
      </div>

    </div>
  );
}
