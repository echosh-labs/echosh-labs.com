'use client';

import React from "react";
import { 
  Palette, 
  Sparkles, 
  Tv, 
  Volume2, 
  RotateCcw, 
  X, 
  Check, 
  Sliders, 
  Layers 
} from "lucide-react";
import { 
  useStyleEngine, 
  THEME_CONFIGS, 
  ThemeFlavor, 
  GlowIntensity 
} from "@/context/StyleEngineContext";
import { EchoSHLogo } from "@/components/ui/EchoSHLogo";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function VisualThemeDrawer() {
  const {
    theme,
    setTheme,
    glowIntensity,
    setGlowIntensity,
    scanlines,
    toggleScanlines,
    activeConfig,
    resetDefaults,
    isCustomizerOpen,
    setIsCustomizerOpen,
  } = useStyleEngine();

  if (!isCustomizerOpen) return null;

  const themesList: ThemeFlavor[] = ["emerald", "cyan", "amber", "violet", "silver"];
  const glowLevels: { id: GlowIntensity; label: string; desc: string }[] = [
    { id: "vivid", label: "Vivid Bloom", desc: "Full neon drop-shadow bloom & ambient radials" },
    { id: "subtle", label: "Subtle Glow", desc: "Understated atmospheric aura" },
    { id: "minimal", label: "Minimal Void", desc: "Monochrome darkness, zero ambient bloom" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close */}
      <div 
        className="absolute inset-0" 
        onClick={() => setIsCustomizerOpen(false)} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-xl rounded-2xl bg-[#090d16]/95 border border-slate-800 shadow-2xl p-6 sm:p-7 space-y-6 z-10 overflow-hidden font-sans">
        {/* Dynamic theme accent top bar */}
        <div 
          className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
          style={{ backgroundColor: activeConfig.accentHex }}
        />

        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-emerald-400" style={{ color: activeConfig.accentHex }} />
              <h2 className="text-lg font-serif font-bold text-slate-100">
                Visual Styling & Theme Engine
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-light">
              Customize the global colorway, CRT scanlines, and atmospheric bloom across the dossier.
            </p>
          </div>

          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors"
            title="Close Visual Customizer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Logo Preview Box */}
        <div className="p-4 rounded-xl bg-black/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">LIVE GLOBAL WORDMARK PREVIEW</span>
            <div>
              <EchoSHLogo size="xl" prompt=">" suffix="-labs" interactive />
            </div>
          </div>
          <Badge variant="slate" size="xs" className="font-mono">
            {activeConfig.name}
          </Badge>
        </div>

        {/* 1. Theme Selection Matrix */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono text-slate-400 uppercase font-semibold flex items-center justify-between">
            <span>1. Global Colorway Flavor</span>
            <span className="text-[11px] font-normal" style={{ color: activeConfig.accentHex }}>
              Active: {activeConfig.name}
            </span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {themesList.map((t) => {
              const cfg = THEME_CONFIGS[t];
              const isSelected = theme === t;
              return (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-slate-900 border-emerald-500/60 shadow-lg scale-[1.01]"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                  style={isSelected ? { borderColor: cfg.accentHex } : {}}
                >
                  <div className="flex items-center gap-2.5">
                    <span 
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                      style={{ 
                        backgroundColor: cfg.accentHex,
                        boxShadow: `0 0 10px ${cfg.accentHex}` 
                      }} 
                    />
                    <div>
                      <div className="text-xs font-serif font-bold text-slate-200">
                        {cfg.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">
                        {cfg.subtitle}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5" style={{ color: cfg.accentHex }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Glow Intensity */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-400 uppercase font-semibold">
            2. Glow & Atmospheric Bloom
          </label>
          <div className="grid grid-cols-3 gap-2">
            {glowLevels.map((g) => (
              <button
                key={g.id}
                onClick={() => setGlowIntensity(g.id)}
                className={`px-3 py-2 rounded-lg text-xs font-mono border transition-all text-center ${
                  glowIntensity === g.id
                    ? "bg-slate-900 border-slate-500 text-slate-100 font-bold shadow-sm"
                    : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. CRT Scanlines Retro Toggle */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
          <div className="flex items-center gap-3">
            <Tv className={`w-4 h-4 ${scanlines ? "text-emerald-400 animate-pulse" : "text-slate-500"}`} />
            <div>
              <div className="text-xs font-mono font-semibold text-slate-200">
                1980s CRT Scanline Simulation
              </div>
              <div className="text-[10px] text-slate-500 font-light">
                Adds vintage cathode-ray tube horizontal scanlines across viewport
              </div>
            </div>
          </div>

          <button
            onClick={toggleScanlines}
            className={`px-3 py-1 rounded-full text-xs font-mono border transition-all ${
              scanlines
                ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/50 font-bold"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
            }`}
          >
            {scanlines ? "ACTIVE" : "OFF"}
          </button>
        </div>

        {/* Drawer Footer Actions */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs font-mono">
          <button
            onClick={resetDefaults}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <Button
            variant="primary"
            size="xs"
            onClick={() => setIsCustomizerOpen(false)}
            className="font-mono"
          >
            Apply & Close
          </Button>
        </div>
      </div>
    </div>
  );
}
