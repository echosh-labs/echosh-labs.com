/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
  ExternalLink,
  Mic,
  Music2,
  Code2,
  Palette,
  BookOpen,
  Heart,
  Shield,
  Layers,
  Radio,
  Clock,
  Compass,
  FileText,
  Flame,
  Feather,
  RefreshCw,
  Terminal,
  Activity,
  ArrowRight
} from "lucide-react";
import { useAudioEngine } from "@/hooks/useAudioEngine";
import {
  intuitionVioletDrone,
  idealismCyanArpeggio,
  mercuryFundamentalBell,
  alchemicalTransmutationDrone
} from "@/lib/audio/presets";
import { SoundBlueprint } from "@/lib/audio/types";
import { FoundationsStage } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function getSoundBlueprintForStage(stageNum: number, blueprintId?: string): SoundBlueprint {
  if (stageNum === 1 || blueprintId === "intuition-violet-drone") {
    return intuitionVioletDrone;
  }
  if (stageNum === 2 || blueprintId === "idealism-cyan-arpeggio") {
    return idealismCyanArpeggio;
  }
  if (stageNum === 3 || blueprintId === "mercury-fundamental-bell") {
    return mercuryFundamentalBell;
  }
  return alchemicalTransmutationDrone;
}

const staticStages: (FoundationsStage & { imageSrc: string; prompt: string })[] = [
  {
    id: "stage-1",
    stage_number: 1,
    title: "Intuition: The Inner Staircase",
    subtitle: "The Void & Psychic Guidance",
    narrative: "Our intuition forms a series of subtle steps to climb—a deep inner guidance satisfying our highest psychic self. Before form or code exists, the uncreated spark resonates as raw potential, waiting for the architect to give it shape.",
    prompt: "Sleek cybernetic figure standing at the base of a glowing neon staircase, soft neon violet aura, projecting faint holographic glyphs into deep moody indigo space.",
    aesthetic_theme: "minimalist-violet",
    chakra_color: "#a855f7",
    frequency_hz: 432,
    harmonic_blueprint_id: "intuition-violet-drone",
    imageSrc: "/assets/scene1.png"
  },
  {
    id: "stage-2",
    stage_number: 2,
    title: "Idealism: The Ascent of Aspiration",
    subtitle: "Architecture & Frameworks",
    narrative: "Each step in turn becomes an ideal—ever more advanced, broadening our consciousness and preparing it for breakthrough. Here, the Architect converts ephemeral voice directives into rigid structures, enterprise chassis, and resilient pipelines.",
    prompt: "Sleek cybernetic figure climbing a high glowing neon staircase towards a soaring futuristic light architecture, bright cyan lines, glowing orange ember shadows.",
    aesthetic_theme: "structured-cyan",
    chakra_color: "#06b6d4",
    frequency_hz: 528,
    harmonic_blueprint_id: "idealism-cyan-arpeggio",
    imageSrc: "/assets/scene2.png"
  },
  {
    id: "stage-3",
    stage_number: 3,
    title: "Illumination: Radiant Consciousness",
    subtitle: "Autonomy & Cosmic Alignment",
    narrative: "The summit of understanding. Idealism prepares the consciousness, and Illumination follows as a radiant, unified state of being. The system awakens into complete autonomy—executing workflows seamlessly without continuous human drag.",
    prompt: "A figure at the summit of a high neon structure, consciousness expanding as a brilliant golden and peach watercolor nebula in deep space-age cosmic harmony.",
    aesthetic_theme: "radiant-gold",
    chakra_color: "#f59e0b",
    frequency_hz: 639,
    harmonic_blueprint_id: "mercury-fundamental-bell",
    imageSrc: "/assets/scene3.png"
  },
  {
    id: "stage-4",
    stage_number: 4,
    title: "Genesis Workshop: Grounded Action",
    subtitle: "Physical Craftsmanship & Tangible Reality",
    narrative: "Ethereal architecture is meaningless without physical grounding. In the physical workshop—sorting parts, clearing workspaces, and building tangible chassis—the ethereal concepts of AI, astrology, and code become real-world artifacts.",
    prompt: "A grounded workshop environment bathed in warm ambient emerald lighting, tools organized, workbench cleared for creative execution and physical fabrication.",
    aesthetic_theme: "grounded-emerald",
    chakra_color: "#10b981",
    frequency_hz: 741,
    harmonic_blueprint_id: "alchemical-drone",
    imageSrc: "/assets/garage_cleanup.png"
  }
];

interface StorySeedDisplay {
  id: string;
  title: string;
  source_type: string;
  sanctuary_label: string;
  note_date: string;
  narrative_hook: string;
  dialogue_anchor?: string;
  cosmic_alignment: {
    mahadasha: string;
    antardasha: string;
    sacred_metal: string;
    hermetic_axiom: string;
    magnum_opus_stage: string;
    resonant_frequency_hz: number;
    chakra_focus?: string;
  };
  scene_beats: {
    act: number;
    title: string;
    premise: string;
    emotional_tone: string;
    prompt_directive: string;
  }[];
}

const defaultSeeds: StorySeedDisplay[] = [
  {
    id: "seed-20090911-sovereign",
    title: "Foundational Story • Healing & Revelation",
    source_type: "foundational_chronicle",
    sanctuary_label: "Sovereign Genesis Cornerstone",
    note_date: "2009-09-11",
    narrative_hook: "Circa September 11, 2009: Under the active ingress of the Saturn Mahadasha, severe sleep deprivation precipitated a state of heightened visceral awareness.",
    dialogue_anchor: "The confession of remorse and the eternal restoration of family love.",
    cosmic_alignment: {
      mahadasha: "Saturn (Shani)",
      antardasha: "Saturn (Shani) / Mercury (Budha)",
      sacred_metal: "Lead (Plumbum) / Quicksilver (Hydrargyrum)",
      hermetic_axiom: "The Principle of Cause and Effect: Every Cause has its Effect; every Effect has its Cause.",
      magnum_opus_stage: "Calcination & Solutio",
      resonant_frequency_hz: 528,
      chakra_focus: "Muladhara Base (Root) → Anahata (Heart)"
    },
    scene_beats: [
      {
        act: 1,
        title: "Act I: The Visceral Interconnection",
        premise: "A frightening, overwhelming awakening to profound human interconnectedness and the existential dread of centralized psychological dominion.",
        emotional_tone: "Visceral Awe, Trembling Dread & Acute Awareness",
        prompt_directive: "Cinematic night landscape illuminated by violent lightning flashes, a solitary man looking out over an interconnected web of glowing psychic Ley lines."
      },
      {
        act: 2,
        title: "Act II: The Crucible of Confession & Sorrow",
        premise: "Facing the terrifying fear of having endangered infant son Luke, followed by deep confession, sorrow, and radical personal accountability.",
        emotional_tone: "Raw Agony, Cathartic Release & Sacred Grief",
        prompt_directive: "Chiaroscuro frame of glowing embers and falling tears, heart center illuminated in deep rose and golden amber light."
      },
      {
        act: 3,
        title: "Act III: The Sanctuary of Restoration",
        premise: "Decades of healing unfold into profound mutual love for Luke in adulthood, cementing authentic personal and digital sovereignty as the cornerstone of the Great Work.",
        emotional_tone: "Serene Grace, Unbreakable Covenant & Sovereign Triumph",
        prompt_directive: "Warm golden sunlight flooding an expansive sanctuary library, an elder and young adult embraced in mutual honor and peace."
      }
    ]
  },
  {
    id: "seed-20130315-1ac2907b",
    title: "The Comet Cowboy & Beyond Neptune",
    source_type: "written_note",
    sanctuary_label: "Chronological Journals",
    note_date: "2013-03-15",
    narrative_hook: "Comet cowboy Capt. Dmitry Chandler was understandably annoyed the message from Earth had taken six hours to reach the space tech Goliath here beyond the orbit of Neptune...",
    dialogue_anchor: "hands off set to return!",
    cosmic_alignment: {
      mahadasha: "Saturn (Shani)",
      antardasha: "Mercury (Budha)",
      sacred_metal: "Lead (Plumbum) / Quicksilver (Hydrargyrum)",
      hermetic_axiom: "The Principle of Mentalism: Quick transmigration of ideas and logos.",
      magnum_opus_stage: "Separation",
      resonant_frequency_hz: 147.85,
      chakra_focus: "Muladhara Base -> Vishuddha (Throat)"
    },
    scene_beats: [
      {
        act: 1,
        title: "Act I: Genesis under Saturn",
        premise: "The seeker enters the crucible of experience. Contemplative reflection in deep space stasis.",
        emotional_tone: "Contemplative Reflection & Primal Stasis",
        prompt_directive: "Cinematic establishing shot of an ancient sanctuary bathed in Lead and Quicksilver tones, warm candle amber, solitary figure contemplating manuscripts."
      },
      {
        act: 2,
        title: "Act II: The Crucible of Separation",
        premise: "The Great Work confronts the soul. Volatile quicksilver meeting dense lead.",
        emotional_tone: "Intense Transmutation & Dynamic Friction",
        prompt_directive: "Macro cinematic frame of dynamic alchemical transmutation, fluid metals merging with glowing embers, volatile quicksilver meeting dense lead."
      },
      {
        act: 3,
        title: "Act III: The Sovereign Stone of Mercury",
        premise: "Wisdom is crystallized from experience. The protagonist embodies sovereign authority and returns to the world transformed.",
        emotional_tone: "Serene Mastery & Sovereign Grounding",
        prompt_directive: "Expansive panoramic vista at dawn, golden hour atmospheric haze, the perfected alchemical stone resting upon a carved stone altar."
      }
    ]
  },
  {
    id: "seed-20260913-1828aa77",
    title: "Voice Chronicle • Spoken Intent",
    source_type: "spoken_transcript",
    sanctuary_label: "Spoken Transcripts (Google Recorder)",
    note_date: "2026-09-13",
    narrative_hook: "Live ambient acoustic telemetry captured by mobile sensorium and routed through the zero-token Axis Mundi ingestion protocol.",
    dialogue_anchor: "Test audio and harmonic alignment.",
    cosmic_alignment: {
      mahadasha: "Saturn (Shani)",
      antardasha: "Jupiter (Guru)",
      sacred_metal: "Lead (Plumbum) / Tin (Stannum)",
      hermetic_axiom: "The Principle of Correspondence: Expansion across micro and macrocosm.",
      magnum_opus_stage: "Fermentation",
      resonant_frequency_hz: 147.85,
      chakra_focus: "Muladhara Base -> Anahata (Heart)"
    },
    scene_beats: [
      {
        act: 1,
        title: "Act I: Genesis under Saturn",
        premise: "The speaker initiates vocal intent. Vibrational disturbances registering on the digital receiver.",
        emotional_tone: "Focused Introspection & Grounded Signal",
        prompt_directive: "Intimate studio microphone illuminated in soft blue and lead tones, sound waves rippling across dark liquid."
      },
      {
        act: 2,
        title: "Act II: The Crucible of Fermentation",
        premise: "Vocal frequency transmuting into executable code directives and watercolor story scripts.",
        emotional_tone: "Dynamic Alchemy & Creative Expansion",
        prompt_directive: "Neural pathways intertwining with code syntax and geometric sigils in emerald and gold."
      },
      {
        act: 3,
        title: "Act III: The Sovereign Stone of Jupiter",
        premise: "The directive is compiled into immutable software assets and deployed across serverless infrastructure.",
        emotional_tone: "Triumphant Harmonization",
        prompt_directive: "Sunlight bursting across mountain peaks with glowing crystalline server monoliths."
      }
    ]
  }
];

export default function FoundationsPage() {
  const stages = staticStages;
  const [activeTab, setActiveTab] = useState<"storyboard" | "chronicle" | "seeds" | "architecture">("storyboard");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlayingHarmonic, setIsPlayingHarmonic] = useState<boolean>(false);
  const [selectedSeedIndex, setSelectedSeedIndex] = useState<number>(0);
  const [liveSeeds, setLiveSeeds] = useState<StorySeedDisplay[]>(defaultSeeds);
  const [isBackendConnected, setIsBackendConnected] = useState<boolean>(false);

  const { playBlueprint, setAmbientFrequency, playUIClick } = useAudioEngine();

  const currentStage = stages[currentIndex];
  const blueprint = currentStage
    ? getSoundBlueprintForStage(currentStage.stage_number, currentStage.harmonic_blueprint_id)
    : intuitionVioletDrone;

  // Probe live MercuryDasha API on port 8080
  useEffect(() => {
    async function checkMercuryDashaSeeds() {
      try {
        const res = await fetch("http://localhost:8080/api/v1/foundations/seeds");
        if (res.ok) {
          const data = await res.json();
          if (data.seeds && data.seeds.length > 0) {
            setIsBackendConnected(true);
            const mapped = data.seeds.map((s: any) => ({
              id: s.id,
              title: s.title || s.sanctuary_label,
              source_type: s.source_type,
              sanctuary_label: s.sanctuary_label,
              note_date: s.note_date,
              narrative_hook: s.narrative_hook,
              dialogue_anchor: s.dialogue_anchor,
              cosmic_alignment: s.cosmic_alignment,
              scene_beats: s.scene_beats || []
            }));
            setLiveSeeds([defaultSeeds[0], ...mapped]);
          }
        }
      } catch {
        setIsBackendConnected(false);
      }
    }
    checkMercuryDashaSeeds();
  }, []);

  // Set ambient drone frequency to match active scene
  useEffect(() => {
    if (activeTab === "storyboard" && currentStage?.frequency_hz) {
      setAmbientFrequency(currentStage.frequency_hz);
    }
  }, [activeTab, currentIndex, currentStage?.frequency_hz, setAmbientFrequency]);

  const handleNext = useCallback(() => {
    playUIClick();
    setCurrentIndex((prev) => (prev + 1) % stages.length);
  }, [playUIClick, stages.length]);

  const handlePrev = useCallback(() => {
    playUIClick();
    setCurrentIndex((prev) => (prev - 1 + stages.length) % stages.length);
  }, [playUIClick, stages.length]);

  const handleSelectStage = useCallback((index: number) => {
    playUIClick();
    setCurrentIndex(index);
  }, [playUIClick]);

  const handleResonateHarmonic = useCallback(() => {
    if (!currentStage) return;
    setIsPlayingHarmonic(true);
    playBlueprint(blueprint, currentStage.title);
    setTimeout(() => setIsPlayingHarmonic(false), 2000);
  }, [blueprint, currentStage, playBlueprint]);

  // Keyboard navigation for storyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab !== "storyboard") return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "1") handleSelectStage(0);
      if (e.key === "2") handleSelectStage(1);
      if (e.key === "3") handleSelectStage(2);
      if (e.key === "4") handleSelectStage(3);
      if (e.key === " ") {
        e.preventDefault();
        handleResonateHarmonic();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab, handleNext, handlePrev, handleSelectStage, handleResonateHarmonic]);

  const activeSeed = liveSeeds[selectedSeedIndex] || liveSeeds[0];

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col justify-between selection:bg-emerald-500/20 font-sans relative overflow-x-hidden">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 flex flex-col items-center z-10 space-y-8">
        
        {/* Hero Banner with Celestial Transit Context */}
        <div className="w-full bg-gradient-to-br from-slate-900/90 via-slate-950 to-[#080b12] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="emerald" size="sm" className="gap-1.5 font-mono" dot pulseDot>
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>THE FOUNDATIONAL MATRIX</span>
                </Badge>
                
                <span className="text-xs font-mono text-slate-500">AUTONOMOUS LIVING THROUGH AUTHENTIC FREEDOM</span>
                
                {isBackendConnected ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>MERCURY DASHA ENGINE LINKED</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-[11px] font-mono">
                    <Radio className="w-3 h-3 text-slate-500" />
                    <span>STATIC SOVEREIGN ARCHIVE</span>
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 tracking-tight">
                Foundations: From Spoken Intent to Sovereign Reality
              </h1>

              <p className="text-slate-400 text-sm sm:text-base font-serif leading-relaxed">
                The creative, alchemical, and architectural execution chassis of <strong className="text-slate-200">Justin Andrew Wood</strong>. 
                Bridging voice-ingested intent from <span className="text-emerald-400 font-mono">Axis Mundi</span> with procedural watercolor storyboards, Solfeggio harmonics, and the 120-year Vimshottari Dasha timeline.
              </p>
            </div>

            {/* Alchemical Transit Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-xs font-mono space-y-2 min-w-[280px]">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>GOVERNING AXIS</span>
                </span>
                <span className="text-slate-500">1971 — 2026+</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Current Mahadasha:</span>
                <span className="text-blue-400 font-bold">Saturn (Shani / Lead)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Current Antardasha:</span>
                <span className="text-yellow-400 font-bold">Jupiter (Guru / Tin)</span>
              </div>
              <div className="flex justify-between py-1 border-t border-slate-800/60 pt-1.5">
                <span className="text-slate-400">Axiom:</span>
                <span className="text-slate-300">Cause &amp; Effect (Law)</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-800/80">
            <button
              onClick={() => { playUIClick(); setActiveTab("storyboard"); }}
              className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                activeTab === "storyboard"
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Storyboard &amp; Harmonics</span>
            </button>

            <button
              onClick={() => { playUIClick(); setActiveTab("chronicle"); }}
              className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                activeTab === "chronicle"
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>2009 Revelation &amp; Healing</span>
            </button>

            <button
              onClick={() => { playUIClick(); setActiveTab("seeds"); }}
              className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                activeTab === "seeds"
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Story Seeds &amp; Lore Matrix</span>
            </button>

            <button
              onClick={() => { playUIClick(); setActiveTab("architecture"); }}
              className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
                activeTab === "architecture"
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Voice-to-Structure Engine</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: STORYBOARD & SONIC SYNESTHESIA                    */}
        {/* ======================================================== */}
        {activeTab === "storyboard" && (
          <div className="w-full space-y-12 animate-fadeIn">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Artwork Image with Dynamic Chakra Glow */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="relative w-full aspect-square max-w-lg rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl group">
                  <img
                    src={currentStage.imageSrc}
                    alt={currentStage.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dynamic Chromatic Radial Ambient Glow */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-25 blur-2xl transition-all duration-700"
                    style={{
                      background: `radial-gradient(circle at center, ${currentStage.chakra_color} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Stage Number Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="slate" size="sm" className="backdrop-blur-md bg-slate-950/80 border-slate-700/60">
                      Stage 0{currentStage.stage_number} of 04
                    </Badge>
                  </div>

                  {/* Frequency Harmonic Badge */}
                  <div
                    className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs font-mono font-bold tracking-wider"
                    style={{ color: currentStage.chakra_color }}
                  >
                    {currentStage.frequency_hz} Hz Harmonic
                  </div>
                </div>

                {/* Stage Selector Thumbnails Strip */}
                <div className="grid grid-cols-4 gap-2 w-full max-w-lg mt-4">
                  {stages.map((stage, idx) => (
                    <button
                      key={stage.id}
                      onClick={() => handleSelectStage(idx)}
                      className={`relative rounded-xl overflow-hidden border transition-all aspect-video group ${
                        idx === currentIndex
                          ? "border-emerald-400 ring-2 ring-emerald-500/30 scale-[1.02] shadow-lg"
                          : "border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600"
                      }`}
                    >
                      <img
                        src={stage.imageSrc}
                        alt={stage.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1 left-1.5 text-[9px] font-mono text-slate-200 font-bold drop-shadow">
                        0{stage.stage_number}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Editorial & Narrative Text */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono tracking-wider uppercase font-semibold" style={{ color: currentStage.chakra_color }}>
                      {"//"} STAGE 0{currentStage.stage_number}
                    </span>
                    <span className="text-slate-600">&bull;</span>
                    <span className="text-xs font-mono text-slate-400">{currentStage.subtitle}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 leading-tight">
                    {currentStage.title}
                  </h2>
                </div>

                {/* Narrative Body */}
                <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                    Narrative Intent
                  </span>
                  <p className="text-slate-300 text-sm font-serif leading-relaxed">
                    {currentStage.narrative}
                  </p>
                </div>

                {/* Prompt & Audio Blueprint Info */}
                <div className="p-4 rounded-xl bg-black/40 border border-slate-800/60 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Palette className="w-3.5 h-3.5 text-emerald-400" />
                      <span>VISUAL PROMPT DIRECTIVE</span>
                    </span>
                    <span className="text-slate-500">{currentStage.aesthetic_theme}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 italic font-sans border-l-2 border-slate-700 pl-2.5 py-0.5">
                    &ldquo;{currentStage.prompt}&rdquo;
                  </p>
                </div>

                {/* Interactive Navigation & Resonate Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <Button
                    onClick={handleResonateHarmonic}
                    variant={isPlayingHarmonic ? "primary" : "secondary"}
                    size="sm"
                    className={`font-mono text-xs flex-1 ${isPlayingHarmonic ? "animate-pulse shadow-glow-emerald" : ""}`}
                    iconLeft={<Play className="w-3.5 h-3.5 fill-current" />}
                  >
                    {isPlayingHarmonic ? "Resonating..." : `Resonate (${currentStage.frequency_hz} Hz)`}
                  </Button>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-all"
                      title="Previous Stage [Left Arrow]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-all"
                      title="Next Stage [Right Arrow]"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Keyboard Hint */}
                <div className="text-[10px] font-mono text-slate-500 flex items-center gap-2">
                  <span>KEYS:</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">←</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">→</kbd>
                  <span>Browse</span>
                  <span>&bull;</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">1-4</kbd>
                  <span>Jump</span>
                  <span>&bull;</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">Space</kbd>
                  <span>Resonate</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: THE 2009 FOUNDATIONAL CHRONICLE                   */}
        {/* ======================================================== */}
        {activeTab === "chronicle" && (
          <div className="w-full space-y-8 animate-fadeIn max-w-4xl text-left">
            <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8 backdrop-blur-md">
              <div className="border-b border-slate-800 pb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <Heart className="w-4 h-4" />
                  <span>THE CORNERSTONE NARRATIVE • SEPTEMBER 11, 2009</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
                  Foundational Story: A Journey of Healing and Revelation
                </h2>
                <p className="text-sm font-mono text-slate-400">
                  The Inception of the Saturn (Shani) Mahadasha (April 2009 – 2028)
                </p>
              </div>

              {/* Narrative Breakdown */}
              <div className="space-y-6 text-slate-300 font-serif leading-relaxed text-base sm:text-lg">
                <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/20 space-y-3">
                  <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    I. The Context &amp; Heightened Visceral Awareness
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base">
                    Circa September 11th, 2009. Characterized by clinical observers as a severe manic episode triggered by acute sleep deprivation, this period ruptured everyday perceptual filters, ushering in an intense state of visceral, unbuffered consciousness just five months into the Saturn Mahadasha.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                  <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    II. The Core Revelation: Interconnectedness &amp; Existential Dread
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base">
                    At the heart of the experience was a staggering revelation of radical human interconnectedness. Every consciousness, word, and intention resonated across an invisible nervous system. Accompanying this wonder was deep existential terror: the acute realization of how vulnerable humanity is to centralized command, high-level manipulation, and psychological dominion by self-appointed rulers over the thoughts and destinies of many.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-3">
                  <h3 className="text-sm font-mono text-rose-400 uppercase tracking-wider font-semibold">
                    III. Confession, Remorse &amp; The Sacred Crucible
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base">
                    In the depths of this disorienting crucible came a deeply personal confession of immense sorrow and responsibility: the haunting terror of having placed his infant son, <strong>Luke</strong>, in grave peril by the fear of dropping him into a fire. This acute agony burned away superficial ego, becoming the alchemical <em>Calcination</em> of Justin&apos;s life.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-3">
                  <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    IV. Reconciliation, Restoration &amp; Digital Sovereignty
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base">
                    Through the years, grace and conscious dedication have wrought profound healing within the family unit. Today, with Luke now in his early twenties, this journey is honored with fierce love, unshakeable mutual respect, and gratitude. This narrative forms the inviolable ethical cornerstone of <strong>Project Sovereign</strong> and <strong>Foundations</strong>: ensuring that human systems serve to emancipate, protect, and heal rather than control or fracture.
                  </p>
                </div>
              </div>

              {/* Chronicle Footer */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                <span>Vimshottari Dasha Anchor: Saturn Mahadasha (2009–2028) • Lead (Plumbum)</span>
                <Link
                  href="/chronicles/the-boy-from-battersea"
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>Explore Lineage Chapter 0</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: STORY SEEDS & LORE MATRIX                         */}
        {/* ======================================================== */}
        {activeTab === "seeds" && (
          <div className="w-full space-y-8 animate-fadeIn text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Seed Selector List */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Story Seeds Repository ({liveSeeds.length})
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    {isBackendConnected ? "Live API Linked" : "Pre-Baked Vault"}
                  </span>
                </div>

                {liveSeeds.map((seed, idx) => (
                  <button
                    key={seed.id}
                    onClick={() => { playUIClick(); setSelectedSeedIndex(idx); }}
                    className={`w-full p-4 rounded-2xl border text-left transition-all space-y-2 ${
                      idx === selectedSeedIndex
                        ? "bg-slate-900 border-emerald-500/50 shadow-lg ring-1 ring-emerald-500/20"
                        : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-semibold">{seed.note_date}</span>
                      <span className="text-slate-500 uppercase text-[10px]">{seed.sanctuary_label}</span>
                    </div>

                    <h3 className="text-sm font-serif font-bold text-slate-100 line-clamp-1">
                      {seed.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-serif line-clamp-2 leading-relaxed">
                      {seed.narrative_hook}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {seed.cosmic_alignment?.sacred_metal || "Alchemical Vessel"}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {seed.cosmic_alignment?.magnum_opus_stage || "Stage"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Column: Active Seed 3-Act Structure */}
              <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 backdrop-blur-md">
                <div className="border-b border-slate-800 pb-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ALCHEMICAL 3-ACT PROGRESSION // {activeSeed.sanctuary_label}</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-slate-100">
                    {activeSeed.title}
                  </h2>
                  <p className="text-xs font-mono text-slate-400">
                    {activeSeed.cosmic_alignment?.hermetic_axiom}
                  </p>
                </div>

                {/* 3-Act Beats */}
                <div className="space-y-4">
                  {activeSeed.scene_beats?.map((beat) => (
                    <div key={beat.act} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-emerald-400 font-bold uppercase">Act 0{beat.act}</span>
                        <span className="text-slate-400">{beat.emotional_tone}</span>
                      </div>
                      <h4 className="text-sm font-serif font-bold text-slate-200">
                        {beat.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-serif leading-relaxed">
                        {beat.premise}
                      </p>
                      <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                        <span className="text-slate-500">PROMPT DIRECTIVE: </span>
                        <span className="italic">{beat.prompt_directive}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Celestial Alignment Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-black/40 border border-slate-800/80 text-xs font-mono">
                  <div>
                    <div className="text-[10px] text-slate-500">MAHADASHA</div>
                    <div className="text-slate-200 font-semibold">{activeSeed.cosmic_alignment?.mahadasha}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">ANTARDASHA</div>
                    <div className="text-slate-200 font-semibold">{activeSeed.cosmic_alignment?.antardasha}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">SACRED METAL</div>
                    <div className="text-amber-400 font-semibold">{activeSeed.cosmic_alignment?.sacred_metal}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">FREQUENCY</div>
                    <div className="text-emerald-400 font-semibold">{activeSeed.cosmic_alignment?.resonant_frequency_hz || 432} Hz</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: THE VOICE-TO-STRUCTURE ENGINE                     */}
        {/* ======================================================== */}
        {activeTab === "architecture" && (
          <div className="w-full space-y-8 animate-fadeIn text-left max-w-5xl">
            <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8 backdrop-blur-md">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Terminal className="w-4 h-4" />
                  <span>INDUSTRIAL PIPELINE ARCHITECTURE // GOLANG CORE</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-100">
                  Autonomous Living through Authentic Freedom
                </h2>
                <p className="text-sm text-slate-400 font-serif leading-relaxed">
                  In a world saturated with fragmented screens and high-friction interfaces, Foundations was built to return focus to physical presence and creative mastery. Speak intent naturally, step away, and let a local, multi-threaded Go chassis translate directives into verified execution.
                </p>
              </div>

              {/* Three Core Pipelines */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Panel variant="default" className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-100 text-base">
                    1. CREATIVE_STORY
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-serif">
                    Generates visual storyboards, scene scripts, and HSL-tailored watercolor fallbacks. Compiles raw speech into responsive web presentation layers.
                  </p>
                  <div className="text-[10px] font-mono text-violet-400">
                    Output: Dynamic watercolor suites &amp; soundscapes
                  </div>
                </Panel>

                <Panel variant="default" className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-100 text-base">
                    2. CODE_DEV
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-serif">
                    Automates engineering directives without token fatigue. Runs Go test suites, verifies TypeScript typing, compiles binaries, and restarts daemons.
                  </p>
                  <div className="text-[10px] font-mono text-cyan-400">
                    Output: Compiled Go binaries &amp; Docker images
                  </div>
                </Panel>

                <Panel variant="default" className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-100 text-base">
                    3. STRATEGIC_PLAN
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-serif">
                    Performs deep Google Workspace automation using GCP Service Accounts with Domain-Wide Delegation. Updates ledgers, queues emails, and drafts docs.
                  </p>
                  <div className="text-[10px] font-mono text-emerald-400">
                    Output: Financial ledgers &amp; calendar blocks
                  </div>
                </Panel>
              </div>

              {/* Telemetry Hub Section */}
              <div className="p-6 rounded-2xl bg-black/50 border border-slate-800 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-3">
                  <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <Radio className="w-4 h-4" />
                    <span>HIGH-SPEED LOGGING BROKER (UNIX DOMAIN SOCKETS)</span>
                  </span>
                  <span className="text-slate-500">/tmp/foundations.sock → Port 8085</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 font-sans text-xs leading-relaxed">
                  <div>
                    <h4 className="font-mono font-bold text-slate-200 mb-1">Dual-Pane TUI Command Center</h4>
                    <p className="text-slate-400">
                      Built in Go using Bubble Tea and Lipgloss. Splits the viewport into a live task registry on the left and a scrolling telemetry monitor on the right.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-slate-200 mb-1">Glassmorphic SSE Console</h4>
                    <p className="text-slate-400">
                      Real-time Server-Sent Events broadcasting subsystem stabilization progress rings, flux density gauges, and operational integrity metrics.
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub Link Bar */}
              <div className="flex flex-wrap items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300">
                    Explore the Foundations Repository &amp; Execution Chassis
                  </span>
                </div>
                <a
                  href="https://github.com/echosh-labs/foundations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  <span>echosh-labs/foundations</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
