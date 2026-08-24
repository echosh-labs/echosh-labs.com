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
  ShieldAlert,
  ArrowLeft
} from "lucide-react";
import { BuckyballCanvas } from "@/components/canvas/BuckyballCanvas";
import { Badge } from "@/components/ui/Badge";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MartialArtsEngine } from "@/features/martial-arts/MartialArtsEngine";

export default function MartialArtsPage() {
  return (
    <div className="min-h-screen bg-mercury-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500/20 font-sans relative overflow-x-hidden">
      {/* 3D Geometric Buckyball Canvas Ambient Background */}
      <BuckyballCanvas opacity={0.24} />

      {/* Unified Top Navigation Header */}
      <Header />

      {/* Main Archival & Showcase Stage */}
      <main className="flex-1 z-10 py-8">
        <PageContainer size="lg">
          <div className="space-y-10 animate-fadeIn">
            
            {/* Hero Section */}
            <div className="space-y-4 max-w-4xl">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
                <Swords className="w-4 h-4" />
                <span>RELATIONAL ENGINE // ZERO-TOKEN MARTIAL ARTS ACADEMY</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
                Martial Arts Academy Engine: Zero-Token Studio Architecture
              </h1>
              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                A high-throughput, enterprise martial arts studio management engine and student portal. Designed as a zero-token relational system featuring a pure Go REST API, 21 SQL schema migration tiers in SQLite, double-entry token ledger accounting with instant cancellation refunds, a 5-discipline curriculum (Kung Fu, Karate, Kobudo, Tai Chi, Qigong), and automated belt grading evaluations.
              </p>

              {/* GitHub Link Button & Architecture Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/echosh-labs/shaolin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-300 hover:text-amber-100 hover:border-amber-400 hover:bg-amber-900/60 text-xs font-mono transition-all shadow-glow-amber"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>VIEW SOURCE REPOSITORY (echosh-labs/shaolin)</span>
                </a>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <Badge variant="amber" size="xs">5 DISCIPLINES</Badge>
                  <Badge variant="emerald" size="xs">GO REST API</Badge>
                  <Badge variant="violet" size="xs">21 SQL MIGRATIONS</Badge>
                  <Badge variant="cyan" size="xs">TOKEN LEDGER</Badge>
                </div>
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
