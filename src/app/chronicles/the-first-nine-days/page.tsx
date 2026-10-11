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
              October 1, 1971: A crucible of sudden crisis, a father&apos;s solitary crossing, and the Russian Mennonite sanctuary in St. Catharines.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2 border-t border-slate-900">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-500/70" />
                October 1 – October 10, 1971 (9 Days)
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
              On the morning of October 1, 1971, at 04:40 in St. Catharines, Ontario, life began not in tranquil ease, but in an immediate trial of resilience.
            </p>

            <p>
              Moments after delivery, my mother, <strong>Deborah Marie Penner</strong>, fell gravely ill with severe complications and had to remain hospitalized under intensive care and isolation. What was anticipated as a celebration of new life was instantly transformed into an urgent family crisis.
            </p>

            {/* Mother & Father Vignette */}
            <div className="my-8 p-6 sm:p-8 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4 font-sans text-sm text-slate-300">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                <Shield className="w-3.5 h-3.5" />
                <span>The Paternal Crossing</span>
              </div>
              <p className="font-serif italic text-base text-slate-200 leading-relaxed">
                Separated from my mother, I was placed into the arms of my father, <strong>Mark Steven Wood</strong>. A young man thrust without warning into total, solitary responsibility, he carried his newborn son through the hospital doors into the autumn chill of St. Catharines alone.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 pt-6 tracking-tight">
              The Sanctuary of Catherine &amp; Jacob Penner
            </h2>

            <p>
              My father brought me home to the house of my maternal grandparents, <strong>Catherine and Jacob Penner</strong>.
            </p>

            <p>
              The Penners were Russian Mennonites who had migrated from the border community of <strong>Gretna, Manitoba</strong>—a culture forged across generations of quiet agrarian faith, mutual aid, and unyielding fortitude in the face of displacement and upheaval.
            </p>

            <p>
              In their St. Catharines home, under the unwavering care of my father and grandparents, I was nurtured through the first nine days of my life while my mother fought her illness in the hospital.
            </p>

            <p>
              For nine days and nights, this familial sanctuary held the line. On October 10, 1971, the vigil concluded: my mother overcame the illness, returned home, and our family foundation was restored.
            </p>

            <p>
              That opening trial became an enduring touchstone for my life and work. It instilled an early reverence for quiet fortitude, the irreplaceable sanctuary of family, and the imperative to build systems—whether human, mechanical, or digital—capable of withstanding acute disruption and safeguarding life.
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
