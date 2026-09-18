'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAudioEngine } from "@/hooks/useAudioEngine";
import { 
  mercuryFundamentalBell, 
  fmCyberRhodes, 
  fmMetallicSpaceBell, 
  physicalCyberHarp 
} from "@/lib/audio/presets";

export type ThemeFlavor = "emerald" | "cyan" | "amber" | "violet" | "silver";
export type GlowIntensity = "vivid" | "subtle" | "minimal";
export type FontMode = "mono" | "sans" | "serif";

export interface ThemeConfig {
  id: ThemeFlavor;
  name: string;
  subtitle: string;
  accentHex: string;
  accentLightHex: string;
  glowRgba: string;
  borderRgba: string;
  bgRadialRgba: string;
  frequency: number;
  description: string;
}

export const THEME_CONFIGS: Record<ThemeFlavor, ThemeConfig> = {
  emerald: {
    id: "emerald",
    name: "Emerald Talisman",
    subtitle: "Primary Signature // 528 Hz",
    accentHex: "#10b981",
    accentLightHex: "#34d399",
    glowRgba: "rgba(16, 185, 129, 0.45)",
    borderRgba: "rgba(16, 185, 129, 0.35)",
    bgRadialRgba: "rgba(16, 185, 129, 0.12)",
    frequency: 528,
    description: "Quicksilver echo with electric phosphor emerald bloom. Signature terminal aesthetic."
  },
  cyan: {
    id: "cyan",
    name: "Luna Cyan",
    subtitle: "Telemetry & Ice // 528 Hz",
    accentHex: "#06b6d4",
    accentLightHex: "#67e8f9",
    glowRgba: "rgba(6, 182, 212, 0.45)",
    borderRgba: "rgba(6, 182, 212, 0.35)",
    bgRadialRgba: "rgba(6, 182, 212, 0.12)",
    frequency: 528,
    description: "Quicksilver echo with cyan ice telemetry sheen and crisp digital edge clarity."
  },
  amber: {
    id: "amber",
    name: "Hermetic Gold",
    subtitle: "Solar Wisdom // 141.27 Hz",
    accentHex: "#f59e0b",
    accentLightHex: "#fbbf24",
    glowRgba: "rgba(245, 158, 11, 0.45)",
    borderRgba: "rgba(245, 158, 11, 0.35)",
    bgRadialRgba: "rgba(245, 158, 11, 0.12)",
    frequency: 141.27,
    description: "Quicksilver echo with warm alchemical solar amber. Matches Vimshottari Mahadasha lore."
  },
  violet: {
    id: "violet",
    name: "Ether Violet",
    subtitle: "432 Hz Harmonic Synthwave",
    accentHex: "#a855f7",
    accentLightHex: "#c084fc",
    glowRgba: "rgba(168, 85, 247, 0.45)",
    borderRgba: "rgba(168, 85, 247, 0.35)",
    bgRadialRgba: "rgba(168, 85, 247, 0.12)",
    frequency: 432,
    description: "Quicksilver echo with harmonic ether violet glow. Meditative 432 Hz ambient drone."
  },
  silver: {
    id: "silver",
    name: "Monochrome Platinum",
    subtitle: "Liquid Metal Minimal",
    accentHex: "#cbd5e1",
    accentLightHex: "#f1f5f9",
    glowRgba: "rgba(226, 232, 240, 0.3)",
    borderRgba: "rgba(226, 232, 240, 0.25)",
    bgRadialRgba: "rgba(226, 232, 240, 0.08)",
    frequency: 216,
    description: "Pure liquid metal quicksilver gradient for high-density technical interfaces."
  }
};

interface StyleEngineContextType {
  theme: ThemeFlavor;
  setTheme: (theme: ThemeFlavor) => void;
  glowIntensity: GlowIntensity;
  setGlowIntensity: (intensity: GlowIntensity) => void;
  scanlines: boolean;
  setScanlines: (enabled: boolean) => void;
  toggleScanlines: () => void;
  fontMode: FontMode;
  setFontMode: (mode: FontMode) => void;
  activeConfig: ThemeConfig;
  resetDefaults: () => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  toggleCustomizer: () => void;
}

const StyleEngineContext = createContext<StyleEngineContextType | null>(null);

export function StyleEngineProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeFlavor>("emerald");
  const [glowIntensity, setGlowIntensityState] = useState<GlowIntensity>("vivid");
  const [scanlines, setScanlinesState] = useState<boolean>(false);
  const [fontMode, setFontModeState] = useState<FontMode>("mono");
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  const { playBlueprint, playUIClick } = useAudioEngine();

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("echosh_theme") as ThemeFlavor | null;
      if (savedTheme && THEME_CONFIGS[savedTheme]) {
        setThemeState(savedTheme);
      }
      const savedGlow = localStorage.getItem("echosh_glow") as GlowIntensity | null;
      if (savedGlow) {
        setGlowIntensityState(savedGlow);
      }
      const savedScanlines = localStorage.getItem("echosh_scanlines");
      if (savedScanlines !== null) {
        setScanlinesState(savedScanlines === "true");
      }
    } catch {
      // localStorage may be restricted or unavailable
    }
  }, []);

  // Synchronize CSS custom properties and document attributes whenever settings change
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const config = THEME_CONFIGS[theme] || THEME_CONFIGS.emerald;

    root.setAttribute("data-theme", theme);
    root.setAttribute("data-glow", glowIntensity);

    // Apply active theme variables dynamically
    root.style.setProperty("--theme-accent", config.accentHex);
    root.style.setProperty("--theme-accent-light", config.accentLightHex);
    root.style.setProperty("--theme-accent-glow", glowIntensity === "minimal" ? "transparent" : config.glowRgba);
    root.style.setProperty("--theme-border", config.borderRgba);
    root.style.setProperty("--theme-bg-radial", glowIntensity === "minimal" ? "transparent" : config.bgRadialRgba);
  }, [theme, glowIntensity]);

  const setTheme = useCallback((newTheme: ThemeFlavor) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("echosh_theme", newTheme);
    } catch {
      // ignore
    }

    // Play signature auditory frequency for this theme
    if (newTheme === "emerald") playBlueprint(fmMetallicSpaceBell, "Theme: Emerald");
    else if (newTheme === "cyan") playBlueprint(fmCyberRhodes, "Theme: Luna Cyan");
    else if (newTheme === "amber") playBlueprint(mercuryFundamentalBell, "Theme: Hermetic Gold");
    else if (newTheme === "violet") playBlueprint(physicalCyberHarp, "Theme: Ether Violet");
    else if (newTheme === "silver") playUIClick();
  }, [playBlueprint, playUIClick]);

  const setGlowIntensity = useCallback((intensity: GlowIntensity) => {
    setGlowIntensityState(intensity);
    playUIClick();
    try {
      localStorage.setItem("echosh_glow", intensity);
    } catch {
      // ignore
    }
  }, [playUIClick]);

  const setScanlines = useCallback((enabled: boolean) => {
    setScanlinesState(enabled);
    playUIClick();
    try {
      localStorage.setItem("echosh_scanlines", String(enabled));
    } catch {
      // ignore
    }
  }, [playUIClick]);

  const toggleScanlines = useCallback(() => {
    setScanlinesState((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("echosh_scanlines", String(next));
      } catch {
        // ignore
      }
      return next;
    });
    playUIClick();
  }, [playUIClick]);

  const setFontMode = useCallback((mode: FontMode) => {
    setFontModeState(mode);
    playUIClick();
  }, [playUIClick]);

  const resetDefaults = useCallback(() => {
    setTheme("emerald");
    setGlowIntensityState("vivid");
    setScanlinesState(false);
    setFontModeState("mono");
    try {
      localStorage.removeItem("echosh_theme");
      localStorage.removeItem("echosh_glow");
      localStorage.removeItem("echosh_scanlines");
    } catch {
      // ignore
    }
    playUIClick();
  }, [setTheme, playUIClick]);

  const toggleCustomizer = useCallback(() => {
    playUIClick();
    setIsCustomizerOpen((prev) => !prev);
  }, [playUIClick]);

  return (
    <StyleEngineContext.Provider
      value={{
        theme,
        setTheme,
        glowIntensity,
        setGlowIntensity,
        scanlines,
        setScanlines,
        toggleScanlines,
        fontMode,
        setFontMode,
        activeConfig: THEME_CONFIGS[theme] || THEME_CONFIGS.emerald,
        resetDefaults,
        isCustomizerOpen,
        setIsCustomizerOpen,
        toggleCustomizer,
      }}
    >
      {children}
      {/* Global CRT Scanlines Overlay when enabled */}
      {scanlines && (
        <div 
          className="fixed inset-0 pointer-events-none z-50 scanline-crt opacity-75 mix-blend-overlay"
          aria-hidden="true"
        />
      )}
    </StyleEngineContext.Provider>
  );
}

export function useStyleEngine() {
  const context = useContext(StyleEngineContext);
  if (!context) {
    // Graceful fallback if called outside provider
    return {
      theme: "emerald" as ThemeFlavor,
      setTheme: () => {},
      glowIntensity: "vivid" as GlowIntensity,
      setGlowIntensity: () => {},
      scanlines: false,
      setScanlines: () => {},
      toggleScanlines: () => {},
      fontMode: "mono" as FontMode,
      setFontMode: () => {},
      activeConfig: THEME_CONFIGS.emerald,
      resetDefaults: () => {},
      isCustomizerOpen: false,
      setIsCustomizerOpen: () => {},
      toggleCustomizer: () => {},
    };
  }
  return context;
}
