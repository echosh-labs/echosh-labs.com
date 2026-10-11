'use client';

import React from "react";
import Link from "next/link";
import { Waves, Volume2, VolumeX, Palette, Radio, Compass, Server, Video, Flame } from "lucide-react";
import { useAudioEngine } from "@/hooks/useAudioEngine";
import { useStyleEngine } from "@/context/StyleEngineContext";
import { EchoSHLogo } from "@/components/ui/EchoSHLogo";

export function Header() {
  const {
    isMuted,
    toggleMute,
    isAmbientActive,
    toggleAmbient,
    playUIClick,
  } = useAudioEngine();

  const { toggleCustomizer, activeConfig } = useStyleEngine();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900/90 bg-mercury-950/85 backdrop-blur-md px-4 sm:px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Mercury Logo & echoSH-labs Home Link */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            onClick={playUIClick}
            className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-serif font-bold text-sm shadow-glow-emerald hover:scale-105 transition-transform"
            style={{ 
              borderColor: activeConfig.borderRgba, 
              color: activeConfig.accentLightHex,
              boxShadow: `0 0 15px -3px ${activeConfig.glowRgba}`
            }}
            title="Return to Main Dossier"
          >
            ☿
          </Link>
          <Link
            href="/"
            onClick={playUIClick}
            className="transition-transform hover:scale-[1.02] flex items-center"
            title="Return to Main Dossier (echoSH-labs)"
            aria-label="echoSH-labs"
          >
            <EchoSHLogo size="sm" variant="auto" suffix="-labs" />
          </Link>
        </div>

        {/* Center: Core Sovereign Navigation Routes */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-mono">
          <Link
            href="/foundations"
            onClick={playUIClick}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-emerald-300 hover:bg-slate-900/60 transition-colors"
          >
            FOUNDATIONS
          </Link>
          <Link
            href="/architecture"
            onClick={playUIClick}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-emerald-300 hover:bg-slate-900/60 transition-colors"
          >
            ARCHITECTURE
          </Link>
          <Link
            href="/studio"
            onClick={playUIClick}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60 transition-colors"
          >
            STUDIO
          </Link>
          <Link
            href="/martial-arts"
            onClick={playUIClick}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-amber-300 hover:bg-slate-900/60 transition-colors"
          >
            DOJO
          </Link>
          <Link
            href="/transmissions"
            onClick={playUIClick}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-red-300 hover:bg-slate-900/60 transition-colors"
          >
            TRANSMISSIONS
          </Link>
        </nav>

        {/* Right: Ambient, Styling & Audio Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Sovereign Video Transmissions Quick Button for Mobile */}
          <Link
            href="/transmissions"
            onClick={playUIClick}
            className="md:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border transition-all bg-red-950/40 border-red-500/40 text-red-300 hover:text-white"
            title="Sovereign Video Transmissions & YouTube Archive"
          >
            <Radio className="w-3 h-3 text-red-400" />
            <span className="hidden sm:inline">VIDEO</span>
          </Link>

          {/* Visual Styling Engine Toggle */}
          <button
            onClick={toggleCustomizer}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border transition-all bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
            title="Open Visual Styling & Theme Customizer"
          >
            <Palette className="w-3 h-3" style={{ color: activeConfig.accentHex }} />
            <span className="hidden sm:inline">THEME</span>
          </button>

          <button
            onClick={() => toggleAmbient(activeConfig.frequency || 432)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border transition-all ${
              isAmbientActive
                ? "bg-violet-950/80 border-violet-500/60 text-violet-300 shadow-glow-violet animate-pulse"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
            title={`Toggle Continuous Generative Ambient Drone (${activeConfig.frequency || 432} Hz)`}
          >
            <Waves className={`w-3 h-3 ${isAmbientActive ? "text-violet-400" : "text-slate-500"}`} />
            <span>{isAmbientActive ? `AMBIENT: ${activeConfig.frequency || 432} HZ` : "AMBIENT"}</span>
          </button>

          <button
            onClick={toggleMute}
            className={`p-1.5 rounded-full border transition-all ${
              isMuted
                ? "bg-rose-950/80 border-rose-500/50 text-rose-400"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-emerald-300"
            }`}
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </header>
  );
}
