'use client';

import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Calendar, MapPin, Sparkles, Heart, Shield, Network } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { ObsidianNodeHeader } from "@/components/chronicles/ObsidianNodeHeader";
import { ObsidianLoreNav } from "@/components/chronicles/ObsidianLoreNav";
import { getLoreNode } from "@/data/lore-graph";

export default function MarkStevenWoodPage() {
  const node = getLoreNode("mark-steven-wood")!;

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
                THE LORE GRAPH // THREAD: PATERNAL LINEAGE
              </Badge>
              <span className="text-xs font-mono text-slate-400">NODE: MSW-1950</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-slate-100 leading-tight">
              Mark Steven Wood: The Principle of Correspondence
            </h1>

            <p className="text-lg sm:text-xl font-serif italic text-slate-400 leading-relaxed">
              The safety trainer, the caregiver&apos;s vigil, and the quiet transmutation of generational inheritance into sovereignty.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2 border-t border-slate-900">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-500/70" />
                December 22, 1950 – March 17, 2024
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-500/70" />
                Welland, Cambridge, &amp; United Mennonite Home (Vineland, ON)
              </span>
            </div>
          </header>

          {/* Memorial Epigraph */}
          <blockquote className="my-6 p-6 sm:p-8 rounded-xl border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-sm space-y-3 font-sans text-sm sm:text-base text-slate-200 not-italic">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider pb-2 border-b border-emerald-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Memorial Inscription (March 17, 2024)</span>
            </div>
            <p className="font-serif italic text-slate-300 leading-relaxed">
              &ldquo;Wood, Mark – At the United Mennonite Home on the 17th of March, Aged 73. Loving father of Justin (Janelle) &amp; Jordan (Alicia) and loving &apos;Papa&apos; to Joshua, Isaac, Luke and Sarah. Predeceased by his parents Vernon and Dorothy Wood of Welland, Ontario. He loved music, movies, camping and making people laugh.&rdquo;
            </p>
          </blockquote>

          {/* Narrative Content */}
          <div className="prose prose-invert prose-slate max-w-none font-serif text-slate-300 leading-relaxed text-base sm:text-lg space-y-6">
            
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 pt-4 tracking-tight">
              The Spark &amp; The Safety Trainer
            </h2>

            <p className="first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:text-emerald-400 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              Born two days before Christmas in 1950 in Welland, Ontario, Mark Steven Wood was the son of WWII Royal Canadian Navy telecommunications veteran Vernon Douglas Wood and Dorothy Wood. He was a man endowed with an infectious warmth: he possessed an encyclopedic love for cinema, treasured recorded music, loved pitching tents under the summer canopy, and held an effortless knack for making anyone in the room laugh.
            </p>

            <p>
              When it came to his life&apos;s vocation, Mark chose not to climb the telephone poles of his linesman father. Instead, he channeled that protective instinct into safeguarding human workers across the industrial plants of Southwestern Ontario. He founded <strong>MSW Training</strong>—bearing his own initials: <em>Mark Steven Wood</em>. For years, he instructed thousands of industrial workers in hazardous materials, safety protocols, and personal accountability.
            </p>

            <p>
              As business currents shifted, the enterprise was restructured and expanded by another gentleman into <em>MidSouthWest</em>. Through the bitter ironies of commerce, Mark was eventually left outside the firm he had birthed, holding no ongoing equity or financial harvest from the ground he had tilled.
            </p>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 pt-6 tracking-tight">
              The Caregiver&apos;s Vigil
            </h2>

            <p>
              In his later years, the crucible deepened. Cognitive decline and Alzheimer&apos;s set in, accompanied by financial distress and the vulnerability that so frequently befalls aging men. 
            </p>

            <p>
              It was during this twilight season that his son, <strong>Justin Andrew Wood</strong>, stepped into the breach as his Power of Attorney, legal guardian, and primary advocate.
            </p>

            <p>
              For years, Justin mounted a fierce, loving vigil on his father&apos;s behalf—navigating the bureaucratic maze of healthcare systems, managing legal and financial affairs, and partnering closely with compassionate social workers and community coordinators, most notably <strong>Kim Hill</strong> (Social Worker) and <strong>Kim Robertson</strong> (CMHA). Together, they supported Mark through geriatric assessments at Freeport Hospital, community care through Lutherwood, and finally secured his placement at the <strong>United Mennonite Home</strong> in Vineland, Ontario.
            </p>

            <p>
              In a profound harmonic synchronicity, the United Mennonite Home that tenderly cared for Mark across his final three years belonged to the very same Mennonite hearth that had sheltered infant Justin and his mother Deborah fifty-three years earlier in St. Catharines during <Link href="/chronicles/the-first-nine-days" className="text-emerald-400 underline decoration-emerald-500/40 hover:decoration-emerald-400">[[The First Nine Days]]</Link>.
            </p>

            <p>
              Mark passed peacefully into the presence of the Lord on <strong>March 17, 2024</strong>, at the age of seventy-three.
            </p>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 pt-6 tracking-tight">
              The Transmutation of the Bounty
            </h2>

            <p>
              In the quiet hours following his father&apos;s passing, Justin sat with a pen and captured the alchemical realization that permanently altered his view of generational inheritance:
            </p>

            <blockquote className="my-6 p-6 rounded-xl border-l-2 border-emerald-400 bg-slate-900/60 font-serif italic text-slate-200 text-sm sm:text-base leading-relaxed">
              &ldquo;I can&apos;t help but comment on the level of correspondence that has appeared to me in these days. It all stems around the relationship that I have with my father... There is a unique set of circumstances brewing around my career in relation to health and safety.<br /><br />
              My father was a health and safety trainer for a number of years and the last place that he worked went by the name of MSW, representing his initials. And now I find myself in an authoritative position in need of health and safety consulting services—and the company recommended to me was MSW.<br /><br />
              I find this the most corresponding, bitter circumstance. Because here I was, waiting my whole life for my dad to bless me financially, and it turns out he has nothing to give in his old age—and yet I must now hire the company that he started which brings me no financial benefit.<br /><br />
              All the while I sat and pined over the loss of a father figure in my life and the regret of not having someone to provide for me and my needs... However, I now realize that that bounty was always mine to take, and that there was no other force preventing me from having it. It belongs to me. Everything that my mind creates comes into being.&rdquo;
            </blockquote>

            <p>
              In that moment, the victim narrative dissolved into self-sovereignty. The debt was cancelled. Justin realized that the father did not owe the son an external fortune—the son was already endowed with the creative agency to build his own kingdom. 
            </p>

            <p>
              The boy from Battersea crossed the ocean in 1903. The naval petty officer strung lines across Bell Canada. The safety trainer protected workers across Ontario. And in 2026, the great-grandson transformed the wire into an autonomous estate.
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
