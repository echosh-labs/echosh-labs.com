/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, MapPin, Users, Sparkles, Compass, Shield, ArrowRight, Sun, Moon } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { ObsidianNodeHeader } from "@/components/chronicles/ObsidianNodeHeader";
import { ObsidianLoreNav } from "@/components/chronicles/ObsidianLoreNav";
import { getLoreNode } from "@/data/lore-graph";

export default function AFamilyAffairPage() {
  const [activePhoto, setActivePhoto] = useState<"day" | "night">("day");
  const node = getLoreNode("a-family-affair")!;

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
                THE LORE GRAPH // FELLOWSHIP NODE
              </Badge>
              <span className="text-xs font-mono text-slate-400">NODE: VOXEL-2026</span>
            </div>


            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-slate-100 leading-tight">
              A Family Affair: The Builders of the Digital Hearth
            </h1>

            <p className="text-lg sm:text-xl font-serif italic text-slate-400 leading-relaxed">
              From wee children punching wood at dawn to soaring spires at the world limit: how Minecraft bound the Wood family across decades and dimensions.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2 border-t border-slate-900">
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-500/70" />
                Joshua (Server Architect) • Isaac • Luke • Sarah • Justin (&ldquo;Mage Dad&rdquo;)
              </span>
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-500/70" />
                Dedicated Paper Multiplayer Server
              </span>
            </div>
          </header>

          {/* Interactive Archival Artifact: Day & Night Views */}
          <figure className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Voxel Artifacts ({activePhoto === "day" ? "Daylight Beacon Terrace" : "Midnight Star Vault"})
              </span>
              <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActivePhoto("day")}
                  className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                    activePhoto === "day"
                      ? "bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Day (Y=222)</span>
                </button>
                <button
                  onClick={() => setActivePhoto("night")}
                  className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                    activePhoto === "night"
                      ? "bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Moon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Night (Y=330)</span>
                </button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 group">
              <img
                src={activePhoto === "day" ? "/images/minecraft_magedad_day.png" : "/images/minecraft_magedad.png"}
                alt="Justin as Mage Dad on Joshua's Minecraft server"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>

            <figcaption className="text-xs font-mono text-slate-500 text-center leading-relaxed">
              {activePhoto === "day" ? (
                <span>
                  Figure 2.1: Daytime terrace at coordinates <span className="text-emerald-400">[-257.565, 222.000, -441.683]</span>. Mage Dad stands before the soaring sky-beacon on Joshua&apos;s Paper server.
                </span>
              ) : (
                <span>
                  Figure 2.2: Midnight vault at coordinates <span className="text-emerald-400">[-320.610, 330.352, -393.441]</span>. Mage Dad suspended high above the cloud ceiling with torches and stone bricks.
                </span>
              )}
            </figcaption>
          </figure>

          {/* Narrative Body */}
          <div className="prose prose-invert prose-emerald max-w-none space-y-6 text-slate-300 font-serif leading-relaxed text-base sm:text-lg">
            
            <p>
              Long before distributed cloud clusters, zero-token ingestion daemons, and sovereign agentic OODA loops, the Wood family established their shared digital commons inside the infinite block landscapes of <em>Minecraft</em>.
            </p>

            <p>
              Justin introduced his family to the sandbox when the children were wee. In those early years, the game was an intimate family crucible of collaborative survival. Together around glowing monitors, they learned the elementary grammar of creation: punching oak trees at daybreak, crafting crude wooden picks, braving the hiss of creepers in subterranean caverns, and quarrying deep bedrock to light the dark.
            </p>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 my-8 space-y-3 font-sans not-prose">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>The Family Fellowship</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-serif">
                <li><strong className="text-slate-100 font-sans">Joshua</strong> — The eldest, who stepped into the pivotal role of <strong>Server Architect</strong>. He engineered and maintained the dedicated Paper multiplayer substrate, managing network pipes, world configurations, and the bedrock infrastructure that supported the entire family.</li>
                <li><strong className="text-slate-100 font-sans">Isaac</strong> — The second son, carving deep paths through complex subterranean terrain with quiet industrious focus and persistent mining.</li>
                <li><strong className="text-slate-100 font-sans">Luke</strong> — The third son, whose presence anchors the heart of the fellowship. A steadfast builder whose shared companionship across the decades reflects the profound restorative journey of the family.</li>
                <li><strong className="text-slate-100 font-sans">Sarah</strong> — The youngest, completing the fellowship, bringing vibrant color, imaginative architecture, and artistic grace to their shared realm.</li>
              </ul>
            </div>

            <p>
              What began as childhood play evolved across two decades into a cherished generational ritual. As the children grew into young adults, charted their own courses, and established their lives, the server remained an immutable digital hearth—a sanctuary where miles dissolved and family gathered at the touch of a keyboard.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-100 pt-4">
              Mage Dad at the Vault of Stars
            </h2>

            <p>
              In these twin archival artifacts, Justin appears as <strong>Mage Dad</strong>. Cloaked in an emerald hooded robe with gold-trimmed vestments, he stands as both architect and alchemist. By daylight at $Y = 222$, he stands before a colossal sky-beacon punching straight through the atmosphere. By night at $Y = 330$, he ascends to the very ceiling of the world, gazing out into the midnight celestial vault where only the void and the stars remain.
            </p>

            <p>
              Look closely at the hotbar of Mage Dad: it is the timeless inventory of an enduring builder:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono not-prose my-6">
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                <span className="text-emerald-400 font-bold block">01-02. TOOLS</span>
                <span className="text-slate-300">Pickaxe &amp; Spade</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                <span className="text-cyan-400 font-bold block">03-05. TIMBER</span>
                <span className="text-slate-300">Chains, Oak &amp; Sign</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                <span className="text-yellow-400 font-bold block">06-08. MASONRY</span>
                <span className="text-slate-300">64 Stone &amp; 18 Stairs</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                <span className="text-amber-400 font-bold block">09. FIRE</span>
                <span className="text-slate-300">30 Golden Torches</span>
              </div>
            </div>

            <p>
              He carries 64 stone bricks, 64 cobblestone, 18 stairs, suspension chains, and 30 torches—ready to anchor living architecture into the black sky.
            </p>

            <h2 className="text-2xl font-serif font-bold text-slate-100 pt-4">
              The Century-Long Arc of the Lineman
            </h2>

            <p>
              When viewed against the backdrop of the Sovereign Master Timeline, this image completes a breathtaking alchemical symmetry:
            </p>

            <blockquote className="p-6 rounded-2xl bg-emerald-950/20 border-l-4 border-emerald-500 my-6 not-prose">
              <p className="text-slate-200 font-serif italic text-base leading-relaxed">
                In 1910, great-grandfather <strong>Vernon Wood</strong> strapped iron spurs onto his boots as a Bell Telephone lineman, hauling copper wire up wooden poles into the windswept skies of Canada to build a nation&apos;s auditory nervous system.
                <br /><br />
                In 2026, <strong>Mage Dad</strong> stands atop the clouds on a multiplayer server engineered by his eldest son <strong>Joshua</strong>, placing stone alongside <strong>Isaac</strong>, <strong>Luke</strong>, and <strong>Sarah</strong>.
              </p>
            </blockquote>

            <p>
              The medium transformed from heavy copper wires to digital voxels, but the prime directive is identical: building durable bridges across space, conquering isolation, and maintaining an unbroken covenant of family craftsmanship across a century of change.
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
