'use client';

import React, { useState } from "react";
import { 
  Swords, 
  Coins, 
  Database, 
  UserCheck, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck, 
  Flame, 
  BookOpen, 
  ShoppingBag, 
  Calendar, 
  Award, 
  Terminal, 
  Sparkles,
  Layers,
  ChevronRight,
  Lock,
  Clock
} from "lucide-react";
import { Panel, PanelHeader, PanelTitle, PanelContent } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useAudioEngine } from "@/hooks/useAudioEngine";
import { 
  MARTIAL_ARTS_DISCIPLINES, 
  SQL_MIGRATION_TIERS, 
  TEST_PERSONAS, 
  SYSTEM_TELEMETRY,
  MartialArtDiscipline,
  TestPersona 
} from "@/lib/data/martial-arts";

export function MartialArtsEngine() {
  const { playUIClick } = useAudioEngine();
  const [activeStage, setActiveStage] = useState<'disciplines' | 'ledger' | 'schema' | 'personas' | 'telemetry'>('disciplines');

  // Discipline state
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string>(MARTIAL_ARTS_DISCIPLINES[0].id);
  const selectedDiscipline = MARTIAL_ARTS_DISCIPLINES.find(d => d.id === selectedDisciplineId) || MARTIAL_ARTS_DISCIPLINES[0];

  // Token simulator state
  const [simTokens, setSimTokens] = useState<number>(14);
  const [simBookings, setSimBookings] = useState<Array<{ id: string; className: string; date: string; time: string; status: 'confirmed' | 'cancelled'; refundEligible: boolean }>>([
    { id: "b-01", className: "Traditional Kung Fu (Foundations)", date: "2026-08-25", time: "18:00 - 19:30", status: "confirmed", refundEligible: true },
  ]);
  const [simLogs, setSimLogs] = useState<string[]>([
    "System Initialized: Student allocated 14 Flex Pass Tokens for Summer 2026 Term.",
    "Ledger: Initial booking b-01 confirmed (-1 Token deducted). Remaining: 14 Tokens (Starting 15)."
  ]);

  // Persona state
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>(TEST_PERSONAS[0].id);
  const selectedPersona = TEST_PERSONAS.find(p => p.id === selectedPersonaId) || TEST_PERSONAS[0];

  // Simulator actions
  const handleBookClass = (className: string, time: string) => {
    playUIClick();
    if (simTokens <= 0) {
      setSimLogs(prev => [`[ERROR] ${new Date().toLocaleTimeString()}: Insufficient token balance to book ${className}.`, ...prev]);
      return;
    }
    const newId = `b-${Math.floor(100 + Math.random() * 900)}`;
    const newBooking = {
      id: newId,
      className,
      date: "2026-08-27",
      time,
      status: 'confirmed' as const,
      refundEligible: true
    };
    setSimTokens(prev => prev - 1);
    setSimBookings(prev => [newBooking, ...prev]);
    setSimLogs(prev => [
      `[POST /api/bookings] 201 Created: ID ${newId} for ${className} (-1 token). Balance: ${simTokens - 1}`,
      ...prev
    ]);
  };

  const handleCancelBooking = (bookingId: string) => {
    playUIClick();
    const target = simBookings.find(b => b.id === bookingId);
    if (!target || target.status === 'cancelled') return;

    setSimBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: 'cancelled' } : b));
    if (target.refundEligible) {
      setSimTokens(prev => prev + 1);
      setSimLogs(prev => [
        `[DELETE /api/bookings/${bookingId}] 200 OK: Cancelled before class time. Token refund credited (+1 token). Balance: ${simTokens + 1}`,
        ...prev
      ]);
    } else {
      setSimLogs(prev => [
        `[DELETE /api/bookings/${bookingId}] 200 OK: Cancelled past refund deadline. 0 tokens refunded.`,
        ...prev
      ]);
    }
  };

  const handleResetSimulator = () => {
    playUIClick();
    setSimTokens(14);
    setSimBookings([
      { id: "b-01", className: "Traditional Kung Fu (Foundations)", date: "2026-08-25", time: "18:00 - 19:30", status: "confirmed", refundEligible: true },
    ]);
    setSimLogs(["Simulator reset to initial 14 token pass fixtures."]);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Stage Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3 font-mono text-xs">
        <button
          onClick={() => { playUIClick(); setActiveStage('disciplines'); }}
          className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-all ${
            activeStage === 'disciplines'
              ? 'bg-slate-800 text-amber-300 border border-amber-500/40 shadow-glow-amber'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
          }`}
        >
          <Swords className="w-3.5 h-3.5" />
          <span>01. 5 Disciplines & Syllabus</span>
        </button>

        <button
          onClick={() => { playUIClick(); setActiveStage('ledger'); }}
          className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-all ${
            activeStage === 'ledger'
              ? 'bg-slate-800 text-emerald-300 border border-emerald-500/40 shadow-glow-emerald'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
          }`}
        >
          <Coins className="w-3.5 h-3.5" />
          <span>02. Token Ledger Simulator</span>
        </button>

        <button
          onClick={() => { playUIClick(); setActiveStage('schema'); }}
          className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-all ${
            activeStage === 'schema'
              ? 'bg-slate-800 text-violet-300 border border-violet-500/40 shadow-glow-violet'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
          }`}
        >
          <Database className="w-3.5 h-3.5" />
          <span>03. 21 SQL Migration Tiers</span>
        </button>

        <button
          onClick={() => { playUIClick(); setActiveStage('personas'); }}
          className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-all ${
            activeStage === 'personas'
              ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>04. Role & Persona Matrix</span>
        </button>

        <button
          onClick={() => { playUIClick(); setActiveStage('telemetry'); }}
          className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-all ${
            activeStage === 'telemetry'
              ? 'bg-slate-800 text-emerald-300 border border-emerald-500/40 shadow-glow-emerald'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>05. Test & Telemetry</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 01. 5 DISCIPLINES & SYLLABUS */}
      {/* ========================================================================= */}
      {activeStage === 'disciplines' && (
        <div className="space-y-6">
          {/* Discipline Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {MARTIAL_ARTS_DISCIPLINES.map((d) => {
              const isSelected = d.id === selectedDisciplineId;
              return (
                <button
                  key={d.id}
                  onClick={() => { playUIClick(); setSelectedDisciplineId(d.id); }}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-28 ${
                    isSelected
                      ? 'bg-slate-900/90 border-amber-500/60 shadow-glow-amber text-slate-100'
                      : 'bg-mercury-900/50 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-slate-100">{d.hanzi}</span>
                    <Badge variant={d.accentColor} size="xs">{d.category.toUpperCase()}</Badge>
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-semibold tracking-tight">{d.name}</h3>
                    <span className="text-[10px] font-mono text-slate-500">{d.signatureForms.length} Forms &bull; {d.beltTracks.length} Ranks</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Discipline Detail Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: Overview & Syllabus */}
            <div className="lg:col-span-2 space-y-6">
              <Panel variant="default" glow className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-serif font-bold text-slate-100">{selectedDiscipline.name}</h2>
                      <span className="font-serif text-xl text-amber-400">{selectedDiscipline.hanzi}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 font-light">{selectedDiscipline.summary}</p>
                  </div>
                  <Badge variant={selectedDiscipline.accentColor} size="sm" className="self-start sm:self-auto">
                    {selectedDiscipline.category.toUpperCase()} PILLAR
                  </Badge>
                </div>

                {/* Philosophical Core */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <Flame className="w-3.5 h-3.5" />
                    <span>PHILOSOPHICAL AXIOM</span>
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed font-serif">
                    &ldquo;{selectedDiscipline.philosophy}&rdquo;
                  </p>
                </div>

                {/* Belt Progression Ranks */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>STANDARDIZED SYLLABUS & RANKING CRITERIA</span>
                  </h4>
                  <div className="space-y-2.5">
                    {selectedDiscipline.beltTracks.map((belt, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-mercury-900/60 border border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-amber-400 font-bold">0{idx + 1}</span>
                          <span className="font-semibold text-slate-200">{belt.rank}</span>
                        </div>
                        <div className="text-slate-400 font-light flex items-center gap-2 text-[11px]">
                          <span className="text-slate-300 font-mono">{belt.focus}</span>
                          <span className="text-slate-600">&bull;</span>
                          <span className="text-emerald-400/90">{belt.requirement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Panel>
            </div>

            {/* Right 1 Col: Stances, Forms & Weapons */}
            <div className="space-y-6">
              <Panel variant="default" className="p-5 space-y-4">
                <h4 className="text-xs font-mono text-slate-300 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CORE DRILLS & STANCES</span>
                </h4>
                <ul className="space-y-2 text-xs font-mono text-slate-400">
                  {selectedDiscipline.coreTechniques.map((tech, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </Panel>

              <Panel variant="default" className="p-5 space-y-4">
                <h4 className="text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Swords className="w-3.5 h-3.5 text-amber-400" />
                  <span>SIGNATURE FORMS & KATAS</span>
                </h4>
                <ul className="space-y-2 text-xs font-mono text-slate-400">
                  {selectedDiscipline.signatureForms.map((form, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                      <span>{form}</span>
                    </li>
                  ))}
                </ul>
              </Panel>

              {selectedDiscipline.weapons && (
                <Panel variant="default" className="p-5 space-y-4">
                  <h4 className="text-xs font-mono text-slate-300 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>TRADITIONAL WEAPONRY</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDiscipline.weapons.map((wep, idx) => (
                      <Badge key={idx} variant="cyan" size="xs">{wep}</Badge>
                    ))}
                  </div>
                </Panel>
              )}
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 02. TOKEN LEDGER & BOOKING SIMULATOR */}
      {/* ========================================================================= */}
      {activeStage === 'ledger' && (
        <div className="space-y-6">
          
          {/* Simulator Header Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Panel variant="emerald" glow className="p-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-emerald-400 tracking-wider">ACTIVE LEDGER BALANCE</span>
                <div className="text-3xl font-serif font-bold text-slate-100 mt-1">{simTokens} Tokens</div>
                <span className="text-[10px] text-slate-400 font-mono">Summer 2026 Pass Holder</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl font-serif font-bold">
                ☯
              </div>
            </Panel>

            <Panel variant="default" className="p-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-slate-400 tracking-wider">CONFIRMED BOOKINGS</span>
                <div className="text-3xl font-serif font-bold text-slate-100 mt-1">
                  {simBookings.filter(b => b.status === 'confirmed').length} Classes
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Capacity Guaranteed</span>
              </div>
              <Calendar className="w-8 h-8 text-slate-600" />
            </Panel>

            <Panel variant="default" className="p-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-slate-400 tracking-wider">REFUND POLICY</span>
                <div className="text-lg font-serif font-bold text-amber-300 mt-1">100% Instant</div>
                <span className="text-[10px] text-slate-400 font-mono">Prior to class occurrence start</span>
              </div>
              <ShieldCheck className="w-8 h-8 text-amber-500/40" />
            </Panel>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: Schedule Booking Console */}
            <div className="lg:col-span-2 space-y-6">
              <Panel variant="default" glow className="p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="font-serif text-lg font-bold text-slate-100">Live Class Schedule & Token Reservation</h3>
                  <Button variant="ghost" size="xs" onClick={handleResetSimulator} className="gap-1 text-slate-400">
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Fixtures</span>
                  </Button>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Traditional Kung Fu (Foundations)", time: "18:00 - 19:30", hall: "Main Dojo (Hall A)", instructor: "Head Master Marcus Vance" },
                    { name: "Traditional Karate (Kata & Kihon)", time: "19:30 - 21:00", hall: "Studio B", instructor: "Chief Instructor Kenji Sato" },
                    { name: "Chen Style Tai Chi (18 Form)", time: "18:30 - 19:45", hall: "Zen Studio C", instructor: "Elena Rostova" },
                    { name: "Kobudo Weapons (Bo Staff & Sai)", time: "18:00 - 19:30", hall: "Main Dojo (Hall A)", instructor: "Chief Instructor Kenji Sato" },
                    { name: "Baduanjin & Yi Jin Jing Qigong", time: "09:30 - 10:45", hall: "Zen Studio C", instructor: "Head Master Marcus Vance" }
                  ].map((cls, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-slate-200 text-sm">{cls.name}</h4>
                          <Badge variant="slate" size="xs">{cls.hall}</Badge>
                        </div>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {cls.time} &bull; Instructor: {cls.instructor}
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        size="xs"
                        onClick={() => handleBookClass(cls.name, cls.time)}
                        className="gap-1.5 shrink-0"
                      >
                        <Coins className="w-3 h-3" />
                        <span>Book (-1 Token)</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </Panel>

              {/* Student's Current Bookings */}
              <Panel variant="default" className="p-6 space-y-4">
                <h3 className="font-serif text-base font-bold text-slate-100">Active Bookings in Ledger</h3>
                <div className="space-y-2">
                  {simBookings.map((b) => (
                    <div key={b.id} className="p-3.5 rounded-xl bg-mercury-900/60 border border-slate-800/70 flex items-center justify-between text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-slate-500 font-bold">[{b.id}]</span>
                          <span className={`font-semibold ${b.status === 'cancelled' ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                            {b.className}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">{b.date} &bull; {b.time}</span>
                      </div>
                      <div>
                        {b.status === 'confirmed' ? (
                          <Button
                            variant="secondary"
                            size="xs"
                            onClick={() => handleCancelBooking(b.id)}
                            className="text-rose-400 hover:text-rose-300 hover:border-rose-500/40"
                          >
                            Cancel (Instant Refund)
                          </Button>
                        ) : (
                          <Badge variant="slate" size="xs">CANCELLED & REFUNDED</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            {/* Right 1 Col: Live Audit Log */}
            <div>
              <Panel variant="default" className="p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h4 className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>LEDGER TRANSACTION AUDIT</span>
                  </h4>
                  <Badge variant="emerald" size="xs" dot pulseDot>TRANSACTIONS ACTIVE</Badge>
                </div>
                <div className="space-y-2 font-mono text-[11px] max-h-96 overflow-y-auto pr-1">
                  {simLogs.map((log, idx) => (
                    <div key={idx} className="p-2 rounded bg-slate-950/80 border border-slate-900 text-slate-400 leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 03. 21 SQL MIGRATION TIERS */}
      {/* ========================================================================= */}
      {activeStage === 'schema' && (
        <div className="space-y-6">
          <Panel variant="default" glow className="p-6 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-serif font-bold text-slate-100">Relational Database Topology</h2>
              <p className="text-xs text-slate-400 mt-1 font-light">
                Architected with 21 sequential, fully reversible SQL schema migration tiers in pure Go SQLite (`modernc.org/sqlite`).
              </p>
            </div>

            <div className="space-y-4">
              {SQL_MIGRATION_TIERS.map((tier) => (
                <div key={tier.step} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-violet-400 px-2 py-1 rounded bg-violet-950/60 border border-violet-500/30">
                        TIER {tier.step}
                      </span>
                      <h4 className="font-mono text-xs font-semibold text-slate-200">{tier.filename}</h4>
                    </div>
                    <Badge variant="violet" size="xs">{tier.domain.toUpperCase()}</Badge>
                  </div>
                  <p className="text-xs text-slate-400 font-light">{tier.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {tier.tablesCreated.map((tbl) => (
                      <span key={tbl} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                        table: {tbl}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 04. ROLE & PERSONA MATRIX */}
      {/* ========================================================================= */}
      {activeStage === 'personas' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TEST_PERSONAS.map((p) => {
              const isSelected = p.id === selectedPersonaId;
              return (
                <button
                  key={p.id}
                  onClick={() => { playUIClick(); setSelectedPersonaId(p.id); }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/60 shadow-glow-cyan text-slate-100'
                      : 'bg-mercury-900/50 border-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase text-cyan-400">{p.role}</span>
                  <h3 className="font-serif text-sm font-semibold mt-1">{p.name}</h3>
                  <span className="text-[11px] font-mono text-slate-500 block truncate">{p.email}</span>
                </button>
              );
            })}
          </div>

          <Panel variant="default" glow className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-100">{selectedPersona.name}</h3>
                <span className="text-xs font-mono text-cyan-400">{selectedPersona.email} &bull; {selectedPersona.currentRank}</span>
              </div>
              <Badge variant="cyan" size="sm">{selectedPersona.role.toUpperCase()} PRIVILEGES</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GRANTED RBAC CAPABILITIES</span>
                </h4>
                <ul className="space-y-2 text-xs font-mono text-slate-400">
                  {selectedPersona.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DECODED JWT AUTH CLAIMS</span>
                </h4>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-900 font-mono text-xs text-cyan-300 overflow-x-auto">
{JSON.stringify(selectedPersona.jwtClaim, null, 2)}
                </pre>
              </div>
            </div>
          </Panel>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 05. TEST & TELEMETRY */}
      {/* ========================================================================= */}
      {activeStage === 'telemetry' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Panel variant="emerald" className="p-5">
              <span className="text-[11px] font-mono text-emerald-400">E2E TEST PASS RATE</span>
              <div className="text-3xl font-serif font-bold text-slate-100 mt-1">100% (11/11)</div>
              <span className="text-[10px] text-slate-400 font-mono">scripts/verify_api.py</span>
            </Panel>

            <Panel variant="default" className="p-5">
              <span className="text-[11px] font-mono text-slate-400">DISPATCH LATENCY P95</span>
              <div className="text-3xl font-serif font-bold text-slate-100 mt-1">{SYSTEM_TELEMETRY.latencyP95}</div>
              <span className="text-[10px] text-emerald-400 font-mono">Go net/http native multiplexer</span>
            </Panel>

            <Panel variant="default" className="p-5">
              <span className="text-[11px] font-mono text-slate-400">MEMORY FOOTPRINT</span>
              <div className="text-3xl font-serif font-bold text-slate-100 mt-1">{SYSTEM_TELEMETRY.memoryFootprint}</div>
              <span className="text-[10px] text-slate-400 font-mono">Zero external cloud tokens required</span>
            </Panel>
          </div>

          <Panel variant="default" glow className="p-6 space-y-5">
            <h3 className="font-serif text-lg font-bold text-slate-100">11-Step E2E Verification Suite Breakdown</h3>
            <div className="space-y-2 font-mono text-xs">
              {[
                { step: "01", name: "Student Authentication & JWT Issuance", result: "PASS", detail: "claims validated, role=student" },
                { step: "02", name: "User Term Tokens Ledger Initial Query", result: "PASS", detail: "balance=14 tokens" },
                { step: "03", name: "Multi-Discipline Classes Catalog Retrieval", result: "PASS", detail: "7 recurring classes across 5 disciplines" },
                { step: "04", name: "Class Occurrences Scheduling Query", result: "PASS", detail: "11 future calendar occurrences loaded" },
                { step: "05", name: "Online Store Categorized Inventory", result: "PASS", detail: "5 gear categories with 11 products" },
                { step: "06", name: "Student & Parent Training Guides", result: "PASS", detail: "4 markdown handbooks loaded" },
                { step: "07", name: "Forum Discussion Boards RBAC", result: "PASS", detail: "3 public & student boards verified" },
                { step: "08", name: "Belt Grading Curriculum Tracks", result: "PASS", detail: "Traditional Kung Fu, Tai Chi, Qigong" },
                { step: "09", name: "Administrator Superuser Authentication", result: "PASS", detail: "role=admin, full CRUD authority" },
                { step: "10", name: "Live Class Booking & Atomic Token Deduction", result: "PASS", detail: "balance 14 -> 13, booking ID created" },
                { step: "11", name: "Instant Cancellation & Transactional Refund", result: "PASS", detail: "refund eligibility=true, balance 13 -> 14" }
              ].map((t) => (
                <div key={t.step} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">[{t.step}]</span>
                    <span className="text-slate-200 font-semibold">{t.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="text-slate-400">{t.detail}</span>
                    <Badge variant="emerald" size="xs">{t.result}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )}

    </div>
  );
}
