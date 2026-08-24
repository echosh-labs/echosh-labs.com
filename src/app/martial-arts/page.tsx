'use client';

import React from "react";
import Link from "next/link";
import { 
  Swords, 
  Terminal, 
  Cpu, 
  Database, 
  ExternalLink, 
  Sparkles, 
  Flame,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Award
} from "lucide-react";
import { BuckyballCanvas } from "@/components/canvas/BuckyballCanvas";
import { Badge } from "@/components/ui/Badge";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MartialArtsEngine } from "@/features/martial-arts/MartialArtsEngine";

export default function MartialArtsPage() {
  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col justify-between selection:bg-red-500/20 font-sans relative overflow-x-hidden">
      {/* Dynamic Dojo Ambient Glow Orbs */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* 3D Geometric Buckyball Canvas Ambient Background */}
      <BuckyballCanvas opacity={0.20} />

      {/* Unified Top Navigation Header */}
      <Header />

      {/* Main Archival & Showcase Stage */}
      <main className="flex-1 z-10 py-8">
        <PageContainer size="lg">
          <div className="space-y-10 animate-fadeIn">
            
            {/* Authentic Bold Dojo Hero Section */}
            <div className="space-y-5 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-300 text-xs font-semibold uppercase tracking-wider shadow-lg dojo-glow">
                  <Flame className="h-3.5 w-3.5 text-red-500 animate-pulse" />
                  <span className="font-mono text-amber-400 font-bold">武道</span>
                  <span>Traditional Martial Arts & Fitness Academy</span>
                </div>
                <Badge variant="amber" size="xs">SYSTEM ARCHIVE // 2026</Badge>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-100 uppercase leading-[1.05]">
                Master Traditional{" "}
                <span className="text-dojo-gradient">
                  Martial Arts
                </span>{" "}
                & Internal Flow
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
                A high-throughput, enterprise martial arts studio management engine and student portal. Designed as a zero-token relational system featuring a pure Go REST API, 21 SQL schema migration tiers in SQLite, double-entry token ledger accounting with instant cancellation refunds, a 5-discipline curriculum (Kung Fu, Karate, Kobudo, Tai Chi, Qigong), and automated belt grading evaluations.
              </p>

              {/* Live Feature Checkmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs text-slate-300 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-red-500 shrink-0" />
                  <span>5 Core Disciplines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                  <span>Hybrid Live Dojo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Double-Entry Tokens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500 shrink-0" />
                  <span>Go REST &lt;1ms API</span>
                </div>
              </div>

              {/* GitHub Link Button & Architecture Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/echosh-labs/shaolin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-950/70 border border-red-700/60 text-red-200 hover:text-white hover:border-red-500 hover:bg-red-900/80 text-xs font-mono transition-all dojo-glow"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>VIEW SOURCE REPOSITORY (echosh-labs/shaolin)</span>
                </a>
              </div>
            </div>

            {/* Interactive Engine Stage */}
            <div className="pt-2">
              <MartialArtsEngine />
            </div>

          </div>
        </PageContainer>
      </main>

      {/* Unified Footer */}
      <Footer />
    </div>
  );
}
