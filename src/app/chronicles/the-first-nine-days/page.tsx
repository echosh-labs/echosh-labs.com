'use client';

import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, MapPin, HeartHandshake, Shield, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { ObsidianNodeHeader } from "@/components/chronicles/ObsidianNodeHeader";
import { ObsidianLoreNav } from "@/components/chronicles/ObsidianLoreNav";
import { getLoreNode } from "@/data/lore-graph";

export default function TheFirstNineDaysPage() {
  const node = getLoreNode("the-first-nine-days")!;

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col justify-between selection:bg-emerald-500/20 font-sans">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6">
        <article className="max-w-3xl mx-auto space-y-12">
          
          {/* Obsidian Dynamic Node Header */}
          <ObsidianNodeHeader node={node} />

          {/* Header & Title */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="emerald" size="sm" className="font-mono">
                THE LORE GRAPH // HEARTH NODE
              </Badge>
              <span className="text-xs font-mono text-slate-400">NODE: HEARTH-1971</span>
            </div>


            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-slate-100 leading-tight">
              The First Nine Days
            </h1>

            <p className="text-lg sm:text-xl font-serif italic text-slate-400 leading-relaxed">
              October 1, 1971: The Mangala–Shani crucible, maternal illness, and the Russian Mennonite hearth in St. Catharines.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2 border-t border-slate-900">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-500/70" />
                October 1 – October 10, 1971 (9.4 Days)
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-500/70" />
                St. Catharines, Ontario (Penner Hearth)
              </span>
            </div>
          </header>

          {/* The Narrative Core */}
          <div className="prose prose-invert prose-slate max-w-none font-serif text-slate-300 leading-relaxed text-base sm:text-lg space-y-6">
            
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:text-emerald-400 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              On the morning of October 1, 1971, at 04:40 Eastern Daylight Time in St. Catharines, Ontario, I drew my first breath under the celestial cadence of <em>Dhanishta Nakshatra</em>—the rhythm of the cosmic drum.
            </p>

            <p>
              According to the authoritative Vimshottari Dasha calculations of MercuryDasha, I did not enter at a gentle midpoint. I entered at the tail end of the <strong>Mars–Saturn (Mangala–Shani)</strong> balance: a precise window of <strong>9.4 days</strong> spanning from the moment of birth until October 10, 1971 at 14:21 EDT.
            </p>

            <p>
              In alchemy and celestial mechanics, Mars is <em>Iron (Ferrum)</em>—the acute shock of delivery, the friction of flesh, the biological battle to live. Saturn is <em>Lead (Plumbum)</em>—gravity, distance, cold containment, and physical separation.
            </p>

            <p>
              That planetary mathematics was not abstract. It manifested immediately in the hospital room: my mother, <strong>Deborah Marie Penner</strong>, fell gravely ill right after delivery and had to remain hospitalized.
            </p>

            {/* Mother & Father Vignette */}
            <div className="my-8 p-6 sm:p-8 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4 font-sans text-sm text-slate-300">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                <Shield className="w-3.5 h-3.5" />
                <span>The Paternal Crossing</span>
              </div>
              <p className="font-serif italic text-base text-slate-200 leading-relaxed">
                Separated from my mother’s breast, I was taken into the arms of my father, <strong>Mark Steven Wood</strong>. A young man thrust into sudden, solitary responsibility, he carried me through the hospital doors into the autumn chill of St. Catharines alone.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 pt-6 tracking-tight">
              The Sanctuary of Catherine & Jacob Penner
            </h2>

            <p>
              My father brought me home to the house of my maternal grandparents, <strong>Catherine and Jacob Penner</strong>. 
            </p>

            <p>
              The Penners were Russian Mennonites who had migrated from the border town of <strong>Gretna, Manitoba</strong>—a community that carried centuries of quiet agrarian faith, resilience against revolution and exile, and an instinct for mutual protection.
            </p>

            <p>
              In their St. Catharines home, under the care of my father and grandparents, I was nurtured through the first nine days of my life while my mother fought her illness in isolation.
            </p>

            <p>
              For nine days, nine hours, and forty-one minutes, the Lead of Saturn tested our family. And on October 10, 1971, at 18:21 UTC, the Saturnian vigil ended. The timeline crossed into <strong>Budha (Mercury)</strong>—the quickening spirit of language, intellectual curiosity, and restoration. My mother returned, and life resumed under the sign of the Messenger.
            </p>

          </div>

          {/* Obsidian Dynamic Connected Lore Graph Navigation */}
          <ObsidianLoreNav currentNode={node} />

        </article>
      </main>

      <Footer />
    </div>
  );
}
