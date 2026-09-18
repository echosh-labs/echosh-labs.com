'use client';

import React from "react";
import { cn } from "@/lib/utils";
import { useAudioEngine } from "@/hooks/useAudioEngine";
import { useStyleEngine, ThemeFlavor } from "@/context/StyleEngineContext";

export interface EchoSHLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "auto" | "emerald" | "cyan" | "amber" | "violet" | "silver";
  font?: "mono" | "sans" | "serif";
  prompt?: boolean | ">" | "$" | "☿" | "~";
  suffix?: string;
  suffixVariant?: "subtle" | "badge" | "glow";
  interactive?: boolean;
}

export function EchoSHLogo({
  size = "md",
  variant = "auto",
  font = "mono",
  prompt = false,
  suffix,
  suffixVariant = "subtle",
  interactive = false,
  className,
  onClick,
  ...props
}: EchoSHLogoProps) {
  const { playUIClick } = useAudioEngine();
  const { theme: globalTheme } = useStyleEngine();

  // Resolve active colorway: inherit from global theme if 'auto'
  const resolvedVariant: ThemeFlavor = variant === "auto" ? globalTheme : variant;

  // Typography & prompt scalings
  const sizeClasses = {
    xs: "text-xs tracking-tight",
    sm: "text-sm tracking-tight",
    md: "text-base tracking-normal",
    lg: "text-xl sm:text-2xl tracking-normal",
    xl: "text-2xl sm:text-3xl tracking-wide",
    "2xl": "text-4xl sm:text-6xl tracking-wide",
  };

  const promptSizes = {
    xs: "text-[10px] mr-1",
    sm: "text-xs mr-1",
    md: "text-sm mr-1.5",
    lg: "text-lg mr-2",
    xl: "text-xl mr-2.5",
    "2xl": "text-3xl mr-3",
  };

  // Font family classes
  const fontClasses = {
    mono: "font-mono",
    sans: "font-sans",
    serif: "font-serif",
  };

  // Color differential configurations:
  // "echo" in smooth liquid silver / platinum, "SH" in vibrant high-voltage accent
  const shColorClasses: Record<ThemeFlavor, string> = {
    emerald: "text-emerald-400 text-echosh-sh drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]",
    cyan: "text-cyan-400 text-echosh-sh-cyan drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]",
    amber: "text-amber-400 text-echosh-sh-amber drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]",
    violet: "text-violet-400 text-echosh-sh-violet drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]",
    silver: "text-slate-100 text-silver-gradient drop-shadow-[0_0_8px_rgba(226,232,240,0.3)]",
  };

  const promptColorClasses: Record<ThemeFlavor, string> = {
    emerald: "text-emerald-500/80",
    cyan: "text-cyan-500/80",
    amber: "text-amber-500/80",
    violet: "text-violet-500/80",
    silver: "text-slate-500",
  };

  const promptSymbol = typeof prompt === "string" ? prompt : ">";

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (interactive) {
      playUIClick();
    }
    onClick?.(e);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center select-none font-bold group",
        fontClasses[font],
        sizeClasses[size],
        interactive && "cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {/* Optional Shell Prompt Glyph */}
      {prompt && (
        <span
          className={cn(
            "font-mono font-semibold opacity-75 group-hover:opacity-100 transition-opacity",
            promptSizes[size],
            promptColorClasses[resolvedVariant]
          )}
          aria-hidden="true"
        >
          {promptSymbol}
        </span>
      )}

      {/* Main Wordmark Container: strictly lowercase echo + uppercase SH (no vertical rectangle cursor) */}
      <span className="inline-flex items-baseline">
        {/* 'echo' — all lowercase in liquid quicksilver / platinum */}
        <span className="font-semibold text-slate-200 text-echosh-echo transition-all duration-300 group-hover:brightness-110">
          echo
        </span>

        {/* 'SH' — uppercase with distinct high-energy color differential */}
        <span
          className={cn(
            "font-extrabold uppercase transition-all duration-300 group-hover:brightness-125",
            shColorClasses[resolvedVariant]
          )}
        >
          SH
        </span>
      </span>

      {/* Optional Suffix (e.g. '-labs' or badge 'LABS') */}
      {suffix && (
        <>
          {suffixVariant === "subtle" && (
            <span className="text-slate-400 font-normal ml-0.5 group-hover:text-slate-300 transition-colors">
              {suffix}
            </span>
          )}

          {suffixVariant === "badge" && (
            <span
              className={cn(
                "ml-2 px-1.5 py-0.5 rounded text-[9px] font-mono tracking-wider uppercase border font-semibold",
                resolvedVariant === "emerald" && "bg-emerald-950/60 text-emerald-300 border-emerald-500/30",
                resolvedVariant === "cyan" && "bg-cyan-950/60 text-cyan-300 border-cyan-500/30",
                resolvedVariant === "amber" && "bg-amber-950/60 text-amber-300 border-amber-500/30",
                resolvedVariant === "violet" && "bg-violet-950/60 text-violet-300 border-violet-500/30",
                resolvedVariant === "silver" && "bg-slate-800/80 text-slate-200 border-slate-700"
              )}
            >
              {suffix.replace(/^[-_\s]+/, "")}
            </span>
          )}

          {suffixVariant === "glow" && (
            <span
              className={cn(
                "ml-1 font-semibold transition-all",
                shColorClasses[resolvedVariant]
              )}
            >
              {suffix}
            </span>
          )}
        </>
      )}
    </div>
  );
}
