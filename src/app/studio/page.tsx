'use client';

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageContainer } from "@/components/layout/PageContainer";
import { StudioDashboard } from "@/features/studio/StudioDashboard";

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#04060a] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/20 font-sans relative overflow-x-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Global Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 z-10 py-10 sm:py-16">
        <PageContainer size="lg">
          <StudioDashboard />
        </PageContainer>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
