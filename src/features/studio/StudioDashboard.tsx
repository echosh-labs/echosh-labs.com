'use client';

import React, { useState } from "react";
import Link from "next/link";
import { 
  Video, 
  Music2, 
  Play, 
  Terminal, 
  Layers, 
  Cpu, 
  Sparkles, 
  ExternalLink, 
  Film, 
  Volume2, 
  Activity, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  Database,
  Sliders
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { useAudioEngine } from "@/hooks/useAudioEngine";
import { 
  fmCyberRhodes, 
  fmMetallicSpaceBell, 
  fmLaserSweep, 
  mercuryFundamentalBell,
  physicalCyberHarp
} from "@/lib/audio/presets";

type PipelineMode = 'mode1' | 'mode2' | 'mode3';

export function StudioDashboard() {
  const [activeMode, setActiveMode] = useState<PipelineMode>('mode2');
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const { playBlueprint, playUIClick } = useAudioEngine();

  const handlePlaySound = (preset: any, name: string) => {
    setActivePreset(name);
    playBlueprint(preset, `Studio: ${name}`);
    setTimeout(() => setActivePreset(null), 1200);
  };

  return (
    <div className="space-y-12 animate-fadeIn font-sans">
      
      {/* Studio Hero Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="cyan" size="sm" className="font-mono gap-1.5" dot pulseDot>
            <Video className="w-3.5 h-3.5 text-cyan-400" />
            <span>AMRA SOVEREIGN CREATIVE STUDIO // PORT 8050</span>
          </Badge>
          <span className="text-xs font-mono text-slate-500">HEADLESS FFMPEG &bull; PURE GO DSP</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
          Video Pipelines &amp; Acoustic DSP Studio
        </h1>

        <p className="text-slate-300 text-sm sm:text-base font-serif leading-relaxed">
          The sovereign multi-modal compilation engine. Powered by a high-performance Go backend, 
          AMRA compiles automated mobile video montages, bare-metal procedural sacred geometry, 
          and speaker-diarized kinetic subtitle broadcasts through headless FFmpeg stdin pipes and in-memory 48kHz audio synthesis.
        </p>
      </div>

      {/* The Three Production Video Pipelines Navigator */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <Film className="w-4 h-4 text-cyan-400" />
            <span>Production Video Engines</span>
          </div>
          <span className="text-xs font-mono text-slate-500">MODES 1, 2 &amp; 3</span>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => { playUIClick(); setActiveMode('mode1'); }}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activeMode === 'mode1'
                ? 'bg-cyan-950/40 border-cyan-500/60 shadow-lg shadow-cyan-950/30'
                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="text-[11px] font-mono text-cyan-400 mb-1">MODE 01</div>
            <div className="text-sm font-serif font-bold text-slate-100">Mobile Montage</div>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">Multi-clip concatenation, xfade transitions, and audio superimposition.</p>
          </button>

          <button
            onClick={() => { playUIClick(); setActiveMode('mode2'); }}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activeMode === 'mode2'
                ? 'bg-amber-950/40 border-amber-500/60 shadow-lg shadow-amber-950/30'
                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="text-[11px] font-mono text-amber-400 mb-1">MODE 02</div>
            <div className="text-sm font-serif font-bold text-slate-100">Sacred Geometry &amp; DSP</div>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">100% bare-metal mathematical video &amp; pure Go in-memory 48kHz WAV synthesis.</p>
          </button>

          <button
            onClick={() => { playUIClick(); setActiveMode('mode3'); }}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activeMode === 'mode3'
                ? 'bg-red-950/40 border-red-500/60 shadow-lg shadow-red-950/30'
                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="text-[11px] font-mono text-red-400 mb-1">MODE 03</div>
            <div className="text-sm font-serif font-bold text-slate-100">Google Recorder &bull; Kinetic</div>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">Speaker-diarized timestamp burn-in, kinetic ASS/SRT subtitles, and M4A audio.</p>
          </button>
        </div>

        {/* Selected Mode Detail Panel */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md space-y-6">
          {activeMode === 'mode1' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <Badge variant="cyan" size="xs" className="font-mono">mode1_mobile</Badge>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 mt-2">
                    Mobile Montage &amp; Clip Superimposition
                  </h3>
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800">
                  Target: 1080x1920 (9:16) / 1920x1080 (16:9)
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-500">INGRESS DROPZONE</span>
                  <div className="text-slate-200">/home/justin/syncthing/pixel7</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-500">XFADE TRANSITIONS</span>
                  <div className="text-cyan-400">fade &bull; dissolve &bull; smoothleft</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-500">AUDIO ENCODING</span>
                  <div className="text-slate-200">AAC @ 192kbps (48kHz Stereo)</div>
                </div>
              </div>

              <p className="text-sm text-slate-300 font-serif leading-relaxed">
                Stitches raw 4K mobile camera roll takes synced seamlessly over local Syncthing peer-to-peer Wi-Fi. 
                Applies automated crossfade filters via FFmpeg filtergraphs and overlays ambient harmonic audio tracks without re-encoding quality loss.
              </p>
            </div>
          )}

          {activeMode === 'mode2' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <Badge variant="amber" size="xs" className="font-mono">mode2_geometry</Badge>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 mt-2">
                    Pure Go Procedural Geometry &amp; 48kHz DSP Synthesizer
                  </h3>
                </div>
                <div className="text-xs font-mono text-amber-400 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-amber-900/50">
                  100% Bare-Metal &bull; Zero External Assets
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-500">AUDIO SYNTH ENGINE</span>
                  <div className="text-amber-300">Pure Go In-Memory 48kHz WAV</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-500">COSMIC HARMONICS</span>
                  <div className="text-cyan-400">147.85Hz (Saturn) &bull; 432Hz &bull; 7.83Hz</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-500">ENVELOPE MODULATION</span>
                  <div className="text-emerald-400">108mHz Deep Respiration</div>
                </div>
              </div>

              <p className="text-sm text-slate-300 font-serif leading-relaxed">
                Generates hypnotic procedural animations (e.g. <em>Saturn Sacred Geometry</em>, <em>Synthetic Mango Parametric</em>) frame-by-frame directly in Go memory. 
                Simultaneously generates mathematically pure acoustic synthesis without external audio samples, streaming raw RGBA buffers and PCM WAV directly into FFmpeg stdin.
              </p>
            </div>
          )}

          {activeMode === 'mode3' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <Badge variant="rose" size="xs" className="font-mono">mode3_recorder</Badge>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 mt-2">
                    Google Recorder Diarization &amp; Kinetic Subtitles
                  </h3>
                </div>
                <div className="text-xs font-mono text-red-400 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-red-900/50">
                  Diarized Voice Diary Pipeline
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-500">API GATEWAY</span>
                  <div className="text-slate-200">Port 8091 (/api/v1/sync)</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-500">TIMESTAMPS</span>
                  <div className="text-red-400">Word-Level Speaker Alignment</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-500">SUBTITLE FILTER</span>
                  <div className="text-amber-400">Kinetic ASS / SRT Burn-In</div>
                </div>
              </div>

              <p className="text-sm text-slate-300 font-serif leading-relaxed">
                Ingests voice notes from Google Recorder, extracting speaker labels, word-level timing, and synchronized M4A audio. 
                Synthesizes elegant kinetic typography and dynamic audio waveforms directly onto background visuals for immediate publication.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Web Audio DSP Preview Soundboard */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <Volume2 className="w-4 h-4 text-amber-400" />
            <span>Interactive Web Audio DSP Soundboard</span>
          </div>
          <span className="text-xs font-mono text-slate-500">TEST BLUEPRINTS</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={() => handlePlaySound(fmCyberRhodes, "Cyber Rhodes")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activePreset === "Cyber Rhodes"
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 scale-[1.02]"
                : "bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 text-slate-300"
            }`}
          >
            <div className="text-[10px] font-mono text-cyan-400">432 HZ &bull; FM</div>
            <div className="text-sm font-serif font-bold mt-1">Cyber Rhodes</div>
            <div className="text-[11px] font-mono text-slate-500 mt-1">Warm Harmonic EP</div>
          </button>

          <button
            onClick={() => handlePlaySound(fmMetallicSpaceBell, "Space Bell")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activePreset === "Space Bell"
                ? "bg-violet-500/20 border-violet-400 text-violet-200 scale-[1.02]"
                : "bg-slate-900/50 border-slate-800 hover:border-violet-500/50 text-slate-300"
            }`}
          >
            <div className="text-[10px] font-mono text-violet-400">528 HZ &bull; METALLIC</div>
            <div className="text-sm font-serif font-bold mt-1">Space Bell</div>
            <div className="text-[11px] font-mono text-slate-500 mt-1">Inharmonic Resonator</div>
          </button>

          <button
            onClick={() => handlePlaySound(physicalCyberHarp, "Cyber Harp")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activePreset === "Cyber Harp"
                ? "bg-emerald-500/20 border-emerald-400 text-emerald-200 scale-[1.02]"
                : "bg-slate-900/50 border-slate-800 hover:border-emerald-500/50 text-slate-300"
            }`}
          >
            <div className="text-[10px] font-mono text-emerald-400">639 HZ &bull; STRING</div>
            <div className="text-sm font-serif font-bold mt-1">Cyber Harp</div>
            <div className="text-[11px] font-mono text-slate-500 mt-1">Karplus-Strong Pluck</div>
          </button>

          <button
            onClick={() => handlePlaySound(mercuryFundamentalBell, "Mercury Bell")}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activePreset === "Mercury Bell"
                ? "bg-amber-500/20 border-amber-400 text-amber-200 scale-[1.02]"
                : "bg-slate-900/50 border-slate-800 hover:border-amber-500/50 text-slate-300"
            }`}
          >
            <div className="text-[10px] font-mono text-amber-400">141.27 HZ &bull; ROOT</div>
            <div className="text-sm font-serif font-bold mt-1">Mercury Bell</div>
            <div className="text-[11px] font-mono text-slate-500 mt-1">Cosmic Octave Drone</div>
          </button>
        </div>
      </div>

      {/* Video Generation Pipeline & Delivery Architecture */}
      <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-slate-900/40 to-slate-950/80 p-6 sm:p-8 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-left max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>VIDEO PRODUCTION FLEET &bull; PIPELINE SPECIFICATIONS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
            Automated Video Generation Architecture
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-serif leading-relaxed">
            All videos are compiled via headless Go daemons piping raw frames directly to FFmpeg. Video assets are deterministically staged in Google Cloud Storage with byte-level verification, 30 FPS constant framerate, in-memory 48kHz audio beds (-14 LUFS), and kinetic ASS subtitle burn-in.
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto">
          <Link
            href="/architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-semibold transition-all shadow-lg hover:shadow-cyan-600/25 flex-shrink-0"
          >
            <span>Fleet Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/foundations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-mono text-xs transition-colors flex-shrink-0"
          >
            <span>Foundations Chassis</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
