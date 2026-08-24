'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Terminal, 
  Sparkles, 
  Swords, 
  Activity, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Coins, 
  Layers, 
  Flame, 
  ShieldCheck, 
  Clock, 
  FileCode, 
  Cpu, 
  Database, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Send,
  Zap,
  Dice5,
  Radar,
  Box
} from "lucide-react";
import { Panel, PanelHeader, PanelTitle, PanelContent } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useAudioEngine } from "@/hooks/useAudioEngine";
import { 
  ARCHIVE_PROJECTS, 
  EMOTIONS_TAXONOMY_TREE,
  BOHNANZA_BEANS,
  calculateBeanPayout,
  ArchiveProject,
  ArchiveModule 
} from "@/lib/data/archive";

export function ArchiveEngine() {
  const { playUIClick, playBlueprint } = useAudioEngine();
  const [activeProjectId, setActiveProjectId] = useState<string>('nitsujlabs');
  const activeProject = ARCHIVE_PROJECTS.find(p => p.id === activeProjectId) || ARCHIVE_PROJECTS[0];

  const [activeModuleId, setActiveModuleId] = useState<string>(activeProject.modules[0]?.id || '');

  // Keep module sync with project
  useEffect(() => {
    if (activeProject.modules.length > 0) {
      setActiveModuleId(activeProject.modules[0].id);
    }
  }, [activeProjectId, activeProject.modules]);

  const activeModule = activeProject.modules.find(m => m.id === activeModuleId) || activeProject.modules[0];

  // ---------------------------------------------------------------------------
  // 1. NITSUJLABS SIMULATORS STATE
  // ---------------------------------------------------------------------------
  // Blockchain State
  const [chain, setChain] = useState<Array<{ index: number; proof: number; prevHash: string; hash: string; txCount: number }>>([
    { index: 1, proof: 100, prevHash: "0000000000000000", hash: "0000a89f3c82e1", txCount: 0 }
  ]);
  const [isMining, setIsMining] = useState(false);
  const [miningNonce, setMiningNonce] = useState(100);

  const handleMineBlock = () => {
    playUIClick();
    setIsMining(true);
    let nonce = Math.floor(Math.random() * 9000) + 1000;
    setTimeout(() => {
      const prevBlock = chain[chain.length - 1];
      const newHash = `0000${Math.random().toString(16).substring(2, 10)}`;
      const newBlock = {
        index: chain.length + 1,
        proof: nonce,
        prevHash: prevBlock.hash,
        hash: newHash,
        txCount: Math.floor(Math.random() * 5) + 1
      };
      setChain(prev => [...prev, newBlock]);
      setMiningNonce(nonce);
      setIsMining(false);
    }, 600);
  };

  // Bohnanza Market & Field State
  const [selectedBeanName, setSelectedBeanName] = useState<string>('Green');
  const [harvestCount, setHarvestCount] = useState<number>(5);
  const [playerTreasury, setPlayerTreasury] = useState<number>(14);
  const [fields, setFields] = useState<Array<{ id: number; bean: string; count: number }>>([
    { id: 1, bean: 'Green', count: 5 },
    { id: 2, bean: 'Red', count: 3 },
    { id: 3, bean: 'Cocoa', count: 2 },
  ]);
  const [farmLogs, setFarmLogs] = useState<string[]>([
    "Game Initialized: Player treasury started with 14 Gold Coins.",
    "Field 1 planted with 5 Green Beans (Current valuation: 2 Gold).",
  ]);

  const selectedBean = BOHNANZA_BEANS.find(b => b.name === selectedBeanName) || BOHNANZA_BEANS[5];
  const currentPayoutResult = calculateBeanPayout(selectedBean.name, harvestCount);

  const handlePlantField = (fieldId: number) => {
    playUIClick();
    setFields(prev => prev.map(f => {
      if (f.id === fieldId) {
        return { id: fieldId, bean: selectedBean.name, count: harvestCount };
      }
      return f;
    }));
    const payout = calculateBeanPayout(selectedBean.name, harvestCount);
    setFarmLogs(prev => [
      `Planted Field ${fieldId} with ${harvestCount} ${selectedBean.name} beans (Harvest Value: ${payout.coins} Gold).`,
      ...prev.slice(0, 4)
    ]);
  };

  const handleHarvestField = (fieldId: number) => {
    playUIClick();
    const field = fields.find(f => f.id === fieldId);
    if (!field || field.count === 0) return;
    const payout = calculateBeanPayout(field.bean, field.count);
    setPlayerTreasury(prev => prev + payout.coins);
    setFields(prev => prev.map(f => {
      if (f.id === fieldId) {
        return { id: fieldId, bean: 'Empty', count: 0 };
      }
      return f;
    }));
    setFarmLogs(prev => [
      `💰 HARVEST: Field ${fieldId} (${field.count} ${field.bean} beans) harvested for +${payout.coins} Gold Coins!`,
      ...prev.slice(0, 4)
    ]);
  };

  // Particle Canvas State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (activeProjectId !== 'nitsujlabs' || activeModuleId !== 'particles') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles = Array.from({ length: 24 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 4,
      dy: (Math.random() - 0.5) * 4,
      radius: Math.random() * 3 + 2,
      color: '#22c55e'
    }));

    const render = () => {
      ctx.fillStyle = 'rgba(2, 18, 8, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x <= p.radius || p.x >= canvas.width - p.radius) p.dx *= -1;
        if (p.y <= p.radius || p.y >= canvas.height - p.radius) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#22c55e';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animId);
  }, [activeProjectId, activeModuleId]);

  // ---------------------------------------------------------------------------
  // 2. EMOTIONS SIMULATOR STATE
  // ---------------------------------------------------------------------------
  const [selectedPrimary, setSelectedPrimary] = useState<string>('joy');
  const [selectedSecondary, setSelectedSecondary] = useState<string>('content');

  const currentPrimaryTree = (EMOTIONS_TAXONOMY_TREE as any)[selectedPrimary] || EMOTIONS_TAXONOMY_TREE.joy;
  const currentSecondarySubs = currentPrimaryTree.subs[selectedSecondary] || Object.values(currentPrimaryTree.subs)[0] || [];

  // ---------------------------------------------------------------------------
  // 3. D&D SIMULATOR STATE
  // ---------------------------------------------------------------------------
  // Coin Converter State
  const [wallet, setWallet] = useState<{ cp: number; sp: number; ep: number; gp: number; pp: number }>({
    cp: 45,
    sp: 12,
    ep: 2,
    gp: 8,
    pp: 1
  });

  const totalCopper = (wallet.cp * 1) + (wallet.sp * 10) + (wallet.ep * 50) + (wallet.gp * 100) + (wallet.pp * 1000);
  const totalGoldValue = (totalCopper / 100).toFixed(2);
  const totalWeightLbs = ((wallet.cp + wallet.sp + wallet.ep + wallet.gp + wallet.pp) / 50).toFixed(1);

  // Conway Grid State (8x8 for lightweight interactive)
  const [conwayGrid, setConwayGrid] = useState<number[][]>([
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [conwayGen, setConwayGen] = useState(0);

  const stepConway = () => {
    playUIClick();
    const h = conwayGrid.length;
    const w = conwayGrid[0].length;
    const next = conwayGrid.map((row, y) =>
      row.map((cell, x) => {
        let live = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const ny = (y + dy + h) % h;
            const nx = (x + dx + w) % w;
            if (conwayGrid[ny][nx] === 1) live++;
          }
        }
        if (cell === 1 && (live === 2 || live === 3)) return 1;
        if (cell === 0 && live === 3) return 1;
        return 0;
      })
    );
    setConwayGrid(next);
    setConwayGen(prev => prev + 1);
  };

  const randomizeConway = () => {
    playUIClick();
    setConwayGrid(
      Array.from({ length: 8 }, () =>
        Array.from({ length: 8 }, () => (Math.random() > 0.7 ? 1 : 0))
      )
    );
    setConwayGen(0);
  };

  // Loot Roller
  const [lootResult, setLootResult] = useState<string>("Roll d100 to generate tabletop loot");
  const handleRollLoot = () => {
    playUIClick();
    const roll = Math.floor(Math.random() * 100) + 1;
    if (roll < 40) {
      setLootResult(`🎲 d100 Roll [${roll}]: Pouch containing 24 GP and a carved silver idol (worth 25 GP).`);
    } else if (roll < 75) {
      setLootResult(`🎲 d100 Roll [${roll}]: Potion of Healing & Spell Scroll of Misty Step.`);
    } else if (roll < 95) {
      setLootResult(`🎲 d100 Roll [${roll}]: Cloak of Elvenkind (+2 Stealth) & 150 GP.`);
    } else {
      setLootResult(`🌟 CRITICAL [${roll}]: Flametongue Longsword (2d6 Fire) & Amulet of Health (Con 19).`);
    }
  };

  // ---------------------------------------------------------------------------
  // 4. DASHTASTIC SIMULATOR STATE
  // ---------------------------------------------------------------------------
  const [stands, setStands] = useState<Array<{ gate: string; code: string; status: 'Occupied' | 'Available' | 'Turnaround'; durationMins: number }>>([
    { gate: "Stand 01", code: "AC-892 (B777)", status: "Occupied", durationMins: 45 },
    { gate: "Stand 02", code: "AF-341 (A350)", status: "Turnaround", durationMins: 18 },
    { gate: "Stand 03", code: "---", status: "Available", durationMins: 0 },
    { gate: "Stand 04", code: "DL-1104 (B738)", status: "Occupied", durationMins: 62 },
    { gate: "Stand 05", code: "---", status: "Available", durationMins: 0 },
    { gate: "Stand 06", code: "BA-092 (A380)", status: "Occupied", durationMins: 80 },
    { gate: "Stand 07", code: "LH-472 (A330)", status: "Turnaround", durationMins: 25 },
    { gate: "Stand 08", code: "---", status: "Available", durationMins: 0 },
  ]);

  const [clockTick, setClockTick] = useState<string>("06:00:00 EST");
  const [lastPdfDispatch, setLastPdfDispatch] = useState<string>("2026-08-24 06:00 EST (Executive_PDF.pdf - Sent to 14 Recipients)");

  const handleSimulateClockJob = () => {
    playUIClick();
    const randomHour = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const randomMin = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    setClockTick(`${randomHour}:${randomMin}:00 EST`);
    setLastPdfDispatch(`Triggered Cron Batch: Executive Stand Metrics Digest (${randomHour}:${randomMin} EST) -> Dispatched to SFO Airport Operations.`);
  };

  return (
    <div className="space-y-12">
      {/* Track Selector Bar with Period Badges & Vintage Theming */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {ARCHIVE_PROJECTS.map((proj) => {
          const isSelected = proj.id === activeProjectId;
          return (
            <button
              key={proj.id}
              onClick={() => {
                playUIClick();
                setActiveProjectId(proj.id);
              }}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group ${
                isSelected
                  ? "bg-slate-900 border-slate-700 shadow-lg scale-[1.02]"
                  : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/40"
              }`}
            >
              {isSelected && (
                <div 
                  className="absolute top-0 left-0 right-0 h-1" 
                  style={{ backgroundColor: proj.accentColor }} 
                />
              )}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase tracking-wider">
                  {proj.period}
                </span>
                <span 
                  className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold tracking-tight"
                  style={{
                    backgroundColor: `${proj.accentColor}20`,
                    color: proj.accentColor,
                    border: `1px solid ${proj.accentColor}40`
                  }}
                >
                  {proj.fontBadge}
                </span>
              </div>
              <h3 className={`text-base font-bold tracking-tight mb-1 ${
                proj.id === 'nitsujlabs' ? 'font-pixel text-xs leading-relaxed text-emerald-400' :
                proj.id === 'dandd' ? 'font-serif text-amber-300' :
                proj.id === 'dashtastic' ? 'font-mono text-cyan-300' : 'text-slate-100'
              }`}>
                {proj.title}
              </h3>
              <p className="text-[11px] text-slate-400 font-light line-clamp-2 leading-relaxed">
                {proj.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Project Hero Banner with Lineage Connection */}
      <Panel variant="default" className={`p-6 sm:p-8 bg-gradient-to-r ${activeProject.bgGradient} border-slate-800 shadow-xl`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                {activeProject.period} ARCHIVE
              </span>
              <span className="text-slate-600">&bull;</span>
              <Badge variant="emerald" size="xs">
                {activeProject.themeName}
              </Badge>
            </div>
            <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight ${
              activeProject.id === 'nitsujlabs' ? 'font-pixel text-lg sm:text-2xl text-emerald-400 leading-normal' :
              activeProject.id === 'dandd' ? 'font-serif text-amber-300' :
              activeProject.id === 'dashtastic' ? 'font-mono text-cyan-300' : 'text-slate-100'
            }`}>
              {activeProject.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {activeProject.description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold">{"//"} PROVENANCE:</span>
              <span className="text-slate-300">{activeProject.provenance}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 lg:max-w-xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
              <Zap className="w-3.5 h-3.5" />
              <span>MODERN LINEAGE</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {activeProject.modernConnection}
            </p>
          </div>
        </div>
      </Panel>

      {/* Interactive Sandbox & AST Code Inspection Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Interactive Period Sandbox (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider">
                Live Interactive Sandbox
              </h3>
            </div>
            {activeProject.modules.length > 1 && (
              <div className="flex items-center gap-1.5">
                {activeProject.modules.map(mod => (
                  <button
                    key={mod.id}
                    onClick={() => {
                      playUIClick();
                      setActiveModuleId(mod.id);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeModuleId === mod.id
                        ? "bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold"
                        : "text-slate-400 hover:text-slate-200 bg-slate-950/60 border border-slate-800"
                    }`}
                  >
                    {mod.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 1. NITSUJLABS SANDBOXES */}
          {activeProjectId === 'nitsujlabs' && (
            <div className="space-y-4">
              {activeModuleId === 'blockchain' && (
                <div className="crt-green-screen p-6 rounded-xl border border-emerald-500/40 relative overflow-hidden font-vt323 text-lg space-y-4 scanline-retro shadow-glow-retro">
                  <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2">
                    <span className="font-pixel text-[10px] tracking-widest text-emerald-300">
                      [NITSUJ-CHAIN // SHA-256 MINER]
                    </span>
                    <span className="text-xs font-mono">TARGET: 0000****</span>
                  </div>

                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {chain.map((b) => (
                      <div key={b.index} className="p-2.5 bg-emerald-950/40 border border-emerald-500/30 rounded flex items-center justify-between text-sm font-mono">
                        <div>
                          <span className="font-bold text-emerald-300">BLOCK #{b.index}</span>
                          <div className="text-[11px] text-emerald-400/80">HASH: {b.hash}</div>
                          <div className="text-[10px] text-emerald-500/60">PREV: {b.prevHash}</div>
                        </div>
                        <div className="text-right">
                          <Badge variant="emerald" size="xs">NONCE {b.proof}</Badge>
                          <div className="text-[10px] text-emerald-400 mt-1">{b.txCount} TXs</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <div className="text-xs font-mono text-emerald-400">
                      Current Nonce: <span className="font-bold text-emerald-300">{miningNonce}</span>
                    </div>
                    <button
                      onClick={handleMineBlock}
                      disabled={isMining}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-pixel text-[10px] rounded transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isMining ? "MINING SHA-256..." : "MINE NEXT BLOCK"}</span>
                    </button>
                  </div>
                </div>
              )}

              {activeModuleId === 'beans' && (
                <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                        Bohnanza Commodity Market & Harvest Engine
                      </span>
                      <div className="text-[11px] text-slate-500 font-mono">
                        Exact expand() payout ranges from beans.py by Justin Wood
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="amber" size="xs" className="font-bold flex items-center gap-1">
                        <Coins className="w-3 h-3 text-amber-400" />
                        <span>TREASURY: {playerTreasury} GP</span>
                      </Badge>
                    </div>
                  </div>

                  {/* 11 Bean Species Selector Bar */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Select Bean Species (11 Total in Deck):
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-1.5">
                      {BOHNANZA_BEANS.map(bean => {
                        const isSelected = selectedBeanName === bean.name;
                        return (
                          <button
                            key={bean.name}
                            onClick={() => {
                              playUIClick();
                              setSelectedBeanName(bean.name);
                              if (harvestCount > bean.count) {
                                setHarvestCount(bean.count);
                              }
                            }}
                            className={`px-2 py-1.5 rounded text-left font-mono text-xs transition-all border ${
                              isSelected
                                ? "bg-amber-500/20 text-amber-300 border-amber-500/60 font-bold shadow-sm scale-105"
                                : "bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900"
                            }`}
                          >
                            <div className="truncate font-semibold">{bean.name}</div>
                            <div className="text-[9px] text-slate-500">{bean.count} in deck</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Range-Expanded Step Payout Thresholds */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Payout Threshold Tiers for <strong className="text-amber-300">{selectedBean.name} Bean</strong>:</span>
                      <span className="text-[11px] text-slate-500">Max Deck: {selectedBean.count} Cards</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {selectedBean.payoutRanges.map((range, idx) => {
                        const isCurrentActive = harvestCount >= range.min && harvestCount <= range.max;
                        return (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-lg border text-center transition-all ${
                              isCurrentActive
                                ? "bg-amber-950/40 border-amber-500/60 text-amber-200 shadow-glow-amber scale-105"
                                : "bg-slate-950 border-slate-800/80 text-slate-500"
                            }`}
                          >
                            <div className="text-[10px] font-mono font-bold uppercase text-slate-400">
                              {range.min === range.max ? `${range.min} Cards` : `${range.min}–${range.max} Cards`}
                            </div>
                            <div className={`text-base font-serif font-bold ${isCurrentActive ? 'text-amber-300' : 'text-slate-400'}`}>
                              {range.coins} Gold {range.coins === 1 ? 'Coin' : 'Coins'}
                            </div>
                            {isCurrentActive && (
                              <span className="inline-block mt-1 text-[9px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                                ACTIVE TIER
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quantity Slider & Dynamic Payout Metrics */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-300">Planted Quantity to Harvest:</span>
                      <span className="text-sm font-bold text-amber-400 bg-amber-950/50 px-2.5 py-0.5 rounded border border-amber-500/30">
                        {harvestCount} / {selectedBean.count} Cards
                      </span>
                    </div>

                    <input
                      type="range"
                      min={1}
                      max={selectedBean.count}
                      value={harvestCount}
                      onChange={(e) => setHarvestCount(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800/80">
                      <div>
                        <div className="text-[10px] text-slate-400 font-mono uppercase">Calculated Market Payout:</div>
                        <div className="text-2xl font-serif font-bold text-amber-400 flex items-center gap-1.5">
                          <span>{currentPayoutResult.coins} Gold Coins</span>
                          <span className="text-xs font-mono text-emerald-400 font-normal">
                            ({currentPayoutResult.efficiency.toFixed(0)}% Yield)
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-slate-300 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">
                        {currentPayoutResult.nextGoal}
                      </div>
                    </div>
                  </div>

                  {/* Interactive 3-Field Farm Planting & Harvest Arena */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        <span>Player Bean Fields (3 Fields Active)</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">Click to plant or harvest</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {fields.map(field => {
                        const fieldPayout = calculateBeanPayout(field.bean, field.count);
                        const hasCrops = field.count > 0;
                        return (
                          <div
                            key={field.id}
                            className={`p-3.5 rounded-xl border space-y-2.5 transition-all ${
                              hasCrops
                                ? "bg-slate-950 border-amber-500/30 shadow-sm"
                                : "bg-slate-950/50 border-slate-800/60 border-dashed"
                            }`}
                          >
                            <div className="flex justify-between items-center text-xs font-mono">
                              <span className="font-bold text-slate-400">FIELD 0{field.id}</span>
                              <Badge variant={hasCrops ? "amber" : "slate"} size="xs">
                                {hasCrops ? `${field.count} CARDS` : "EMPTY"}
                              </Badge>
                            </div>

                            <div className="space-y-0.5">
                              <div className="text-sm font-bold text-slate-100 font-mono">
                                {hasCrops ? `${field.bean} Bean` : "Unplanted Field"}
                              </div>
                              <div className="text-[11px] font-mono text-amber-400 font-medium">
                                {hasCrops ? `Harvest: +${fieldPayout.coins} Gold Coins` : "Ready for planting"}
                              </div>
                            </div>

                            <div className="flex flex-col gap-1.5 pt-1">
                              {hasCrops ? (
                                <button
                                  onClick={() => handleHarvestField(field.id)}
                                  className="w-full py-1.5 bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold rounded transition-colors flex items-center justify-center gap-1"
                                >
                                  <Coins className="w-3 h-3" />
                                  <span>Harvest Field (+{fieldPayout.coins} GP)</span>
                                </button>
                              ) : (
                                <button
                                  onClick={() => handlePlantField(field.id)}
                                  className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-emerald-300 font-mono text-xs font-semibold rounded border border-emerald-500/30 transition-colors"
                                >
                                  Plant {harvestCount} {selectedBean.name}
                                </button>
                              )}
                              {hasCrops && (
                                <button
                                  onClick={() => handlePlantField(field.id)}
                                  className="text-[10px] text-slate-500 hover:text-slate-300 font-mono text-center transition-colors"
                                >
                                  Re-plant with {harvestCount} {selectedBean.name}
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Live Farm Logs */}
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1 font-mono text-[11px] text-slate-400 max-h-24 overflow-y-auto">
                    <div className="text-[10px] uppercase font-bold text-slate-500">Farm Transaction Log:</div>
                    {farmLogs.map((log, i) => (
                      <div key={i} className="text-slate-300 truncate">
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeModuleId === 'particles' && (
                <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      2D Kinematic Canvas Dynamics (z_class_particle.py)
                    </span>
                    <Badge variant="emerald" size="xs">24 PARTICLES</Badge>
                  </div>
                  <canvas
                    ref={canvasRef}
                    width={480}
                    height={200}
                    className="w-full h-48 bg-[#021208] rounded border border-emerald-500/30"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Elastic Boundaries: Clamped [0, 480] x [0, 200]</span>
                    <span className="text-emerald-400">Velocity Vectors: Active</span>
                  </div>
                </div>
              )}

              {activeModuleId === 'blackjack' && (
                <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-mono text-slate-300 font-bold">
                      Blackjack OOP Card Shoe Engine (blackjack.py)
                    </span>
                    <Badge variant="slate" size="xs">52 CARDS</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-1">
                      <span className="text-xs font-mono text-slate-400">Dealer Hand:</span>
                      <div className="text-lg font-mono font-bold text-red-400">🂠 🂡 (Soft 17)</div>
                    </div>
                    <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-1">
                      <span className="text-xs font-mono text-slate-400">Player Hand:</span>
                      <div className="text-lg font-mono font-bold text-emerald-400">🂪 🂡 (Blackjack 21)</div>
                    </div>
                  </div>
                  <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded text-center text-xs font-mono text-emerald-400">
                    ✔ Payout 3:2 Awarded (+150 Tokens to Ledger)
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. EMOTIONS SANDBOX */}
          {activeProjectId === 'emotions' && (
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-violet-400 font-bold uppercase">
                  Concentric Junto Emotion Wheel Taxonomy
                </span>
                <Badge variant="violet" size="xs">emocore.py</Badge>
              </div>

              {/* Primary 6 Root Moods */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {Object.keys(EMOTIONS_TAXONOMY_TREE).map((key) => {
                  const node = (EMOTIONS_TAXONOMY_TREE as any)[key];
                  const isSelected = selectedPrimary === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        playUIClick();
                        setSelectedPrimary(key);
                        setSelectedSecondary(Object.keys(node.subs)[0]);
                      }}
                      className={`p-2.5 rounded-lg text-center font-mono text-xs transition-all ${
                        isSelected
                          ? "ring-2 font-bold shadow-md scale-105"
                          : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200"
                      }`}
                      style={{
                        backgroundColor: isSelected ? `${node.color}25` : undefined,
                        borderColor: isSelected ? node.color : undefined,
                        color: isSelected ? node.color : undefined,
                      }}
                    >
                      {node.label}
                    </button>
                  );
                })}
              </div>

              {/* Secondary & Granular Tier Traversal */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                  <span>ROOT: <strong className="text-slate-200 uppercase">{selectedPrimary}</strong></span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>SECONDARY: <strong className="text-violet-400 uppercase">{selectedSecondary}</strong></span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>AFFECTIVE NODES: <strong className="text-emerald-400">{currentSecondarySubs.length} Tags</strong></span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {Object.keys(currentPrimaryTree.subs).map(sub => (
                    <button
                      key={sub}
                      onClick={() => {
                        playUIClick();
                        setSelectedSecondary(sub);
                      }}
                      className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                        selectedSecondary === sub
                          ? "bg-violet-600 text-white font-bold"
                          : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200"
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {currentSecondarySubs.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. D&D SANDBOX */}
          {activeProjectId === 'dandd' && (
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  Tabletop Mechanics & Cellular Grid (game/economy.py)
                </span>
                <Badge variant="amber" size="xs">CINZEL / VT323</Badge>
              </div>

              {/* 5-Tier Coin Currency Converter */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase">
                  5-Tier Currency Double-Entry Ledger
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { key: 'cp', label: 'Copper (CP)', rate: '1x' },
                    { key: 'sp', label: 'Silver (SP)', rate: '10x' },
                    { key: 'ep', label: 'Electrum (EP)', rate: '50x' },
                    { key: 'gp', label: 'Gold (GP)', rate: '100x' },
                    { key: 'pp', label: 'Platinum (PP)', rate: '1000x' },
                  ].map(c => (
                    <div key={c.key} className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 block">{c.label}</label>
                      <input
                        type="number"
                        min={0}
                        value={(wallet as any)[c.key]}
                        onChange={(e) => setWallet(prev => ({ ...prev, [c.key]: Math.max(0, parseInt(e.target.value) || 0) }))}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs font-mono text-amber-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-300 border-t border-slate-800/80">
                  <div>Base Copper: <strong className="text-amber-400">{totalCopper} CP</strong></div>
                  <div>Gold Value: <strong className="text-amber-300">{totalGoldValue} GP</strong></div>
                  <div>Pouch Weight: <strong className="text-slate-400">{totalWeightLbs} lbs</strong></div>
                </div>
              </div>

              {/* Conway Life Cellular Automata */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-slate-300">
                    Conway’s Game of Life (game/random/conway.py)
                  </div>
                  <span className="text-xs font-mono text-slate-500">Gen: {conwayGen}</span>
                </div>

                <div className="grid grid-cols-8 gap-1 w-48 mx-auto">
                  {conwayGrid.map((row, y) =>
                    row.map((cell, x) => (
                      <button
                        key={`${y}-${x}`}
                        onClick={() => {
                          playUIClick();
                          setConwayGrid(prev => {
                            const copy = prev.map(r => [...r]);
                            copy[y][x] = copy[y][x] === 1 ? 0 : 1;
                            return copy;
                          });
                        }}
                        className={`w-5 h-5 rounded-sm transition-colors ${
                          cell === 1 ? "bg-amber-400 shadow-sm" : "bg-slate-900 hover:bg-slate-800"
                        }`}
                      />
                    ))
                  )}
                </div>

                <div className="flex justify-center gap-2 pt-1">
                  <button
                    onClick={stepConway}
                    className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold rounded"
                  >
                    Step Next
                  </button>
                  <button
                    onClick={randomizeConway}
                    className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs rounded"
                  >
                    Randomize
                  </button>
                </div>
              </div>

              {/* Loot Roller */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    D&D Magic Item & Loot Table Roller (treasure.py)
                  </span>
                  <button
                    onClick={handleRollLoot}
                    className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded text-xs font-mono hover:bg-amber-500/30"
                  >
                    Roll d100
                  </button>
                </div>
                <p className="text-xs font-mono text-slate-300 bg-slate-900 p-2.5 rounded border border-slate-800">
                  {lootResult}
                </p>
              </div>
            </div>
          )}

          {/* 4. DASHTASTIC SANDBOX */}
          {activeProjectId === 'dashtastic' && (
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-1.5">
                  <Radar className="w-4 h-4 text-cyan-400" />
                  Aerodrome Stand Telemetry & Flight Ops (customer/performance.py)
                </span>
                <Badge variant="cyan" size="xs">APScheduler</Badge>
              </div>

              {/* 8-Stand Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {stands.map(stand => (
                  <div
                    key={stand.gate}
                    className={`p-3 rounded-lg border text-xs font-mono space-y-1 ${
                      stand.status === 'Occupied' ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200' :
                      stand.status === 'Turnaround' ? 'bg-amber-950/30 border-amber-500/40 text-amber-200' :
                      'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="flex justify-between font-bold">
                      <span>{stand.gate}</span>
                      <span className={
                        stand.status === 'Occupied' ? 'text-cyan-400' :
                        stand.status === 'Turnaround' ? 'text-amber-400' : 'text-slate-500'
                      }>
                        {stand.status}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400">{stand.code}</div>
                    {stand.durationMins > 0 && (
                      <div className="text-[10px] text-slate-500">{stand.durationMins}m on stand</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Clock Job Dispatcher */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Background Clock Worker (clock.py)</span>
                  </div>
                  <span className="text-xs font-mono text-cyan-300 font-bold">{clockTick}</span>
                </div>

                <p className="text-xs font-mono text-slate-400 bg-slate-900 p-2.5 rounded border border-slate-800">
                  {lastPdfDispatch}
                </p>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSimulateClockJob}
                  className="w-full"
                >
                  Simulate Scheduled Executive Report Trigger
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Right Col: AST Code Inspection & Lineage Breakdown (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider">
                AST Code Inspector
              </h3>
            </div>
            <Badge variant="slate" size="xs">
              {activeModule.lineCount} LINES
            </Badge>
          </div>

          <div className="space-y-4">
            {/* File Header */}
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>File: <strong className="text-emerald-400">{activeModule.filename}</strong></span>
                <span className="text-slate-500">{activeModule.language.toUpperCase()}</span>
              </div>
              <div className="text-[11px] text-slate-500 truncate">{activeModule.path}</div>
            </div>

            {/* Docstring */}
            <div className="p-3.5 bg-slate-900/60 rounded-lg border border-slate-800 font-mono text-xs text-slate-400 whitespace-pre-wrap leading-relaxed">
              {activeModule.docstring}
            </div>

            {/* Syntax Code Snippet */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed max-h-72">
              <pre><code>{activeModule.highlightSnippet}</code></pre>
            </div>

            {/* Modern Lineage Bridge Card */}
            <div className="p-4 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Foundational Impact & Lineage</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {activeModule.modernLineage}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
