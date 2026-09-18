'use client';

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageContainer } from "@/components/layout/PageContainer";
import { TreasuryDashboard } from "@/features/treasury/TreasuryDashboard";

export default function TreasuryPage() {
  return (
    <div className="min-h-screen bg-[#04060a] text-slate-100 flex flex-col justify-between selection:bg-emerald-500/20 font-sans relative overflow-x-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-cyan-600/6 rounded-full blur-3xl pointer-events-none" />

      {/* Global Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 z-10 py-8">
        <PageContainer size="lg">
          <TreasuryDashboard />
        </PageContainer>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
