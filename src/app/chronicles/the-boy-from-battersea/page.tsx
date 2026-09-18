'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Clock, Calendar, MapPin, Share2, Compass } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { ObsidianNodeHeader } from "@/components/chronicles/ObsidianNodeHeader";
import { ObsidianLoreNav } from "@/components/chronicles/ObsidianLoreNav";
import { getLoreNode } from "@/data/lore-graph";

export default function TheBoyFromBatterseaPage() {
  const node = getLoreNode("the-boy-from-battersea")!;

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
                THE LORE GRAPH // ANCHOR NODE
              </Badge>
              <span className="text-xs font-mono text-slate-400">NODE: BATTERSEA-1903</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-slate-100 leading-tight">
              The Boy from Battersea
            </h1>

            <p className="text-lg sm:text-xl font-serif italic text-slate-400 leading-relaxed">
              The voyage of thirteen-year-old Vernon Wood on the SS Dominion (July 1903) and the century-long genesis of the wire.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2 border-t border-slate-900">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-500/70" />
                March 27, 1890 – July 15, 1903
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-500/70" />
                Battersea, London ➔ Watford & Sarnia, Ontario
              </span>
            </div>
          </header>

          {/* Hero Portrait & Caption */}
          <figure className="space-y-3">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/60 shadow-2xl max-w-md mx-auto aspect-[3/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/great_grandfather_vernon_wood.jpg"
                alt="Vernon Wood as a young boy prior to sailing on the SS Dominion (circa 1902)"
                className="w-full h-full object-cover grayscale contrast-110"
              />
            </div>
            <figcaption className="text-center text-xs font-mono text-slate-400 max-w-md mx-auto leading-relaxed">
              <strong className="text-slate-200">Vernon Wood</strong>, circa 1902 (aged 12), at Dr. Barnardo’s Home in Epsom before his transatlantic departure to Canada.
            </figcaption>
          </figure>

          {/* The Narrative Core */}
          <div className="prose prose-invert prose-slate max-w-none font-serif text-slate-300 leading-relaxed text-base sm:text-lg space-y-6">
            
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:text-emerald-400 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              When I looked into the eyes of this boy for the first time, a profound, unexplainable sadness welled up from somewhere deep within me. It felt like a sorrow without reason—until I recognized that it was not mine alone. It was his. And it had been waiting over one hundred and twenty years to be felt, honored, and understood.
            </p>

            <p>
              Imagine being thirteen years old in July 1903. 
            </p>

            <p>
              Your father, once a respected waiter in the dining rooms of London, has fallen into the grip of alcohol. Your home has shattered. Your mother, exhausted by hardship, has been forced into institutional care. You are admitted to Dr. Barnardo’s Home in Epsom. One afternoon, your mother Susan Ada visits you in the parlour to say goodbye. Neither of you know it then, but it will be the last time in your mortal life that you will ever feel her touch or hear her voice.
            </p>

            <p>
              Days later, on July 15, 1903, you are marched up the wooden gangplank of the <em>SS Dominion</em>. You clutch a single small trunk, turn toward the rail, and watch the grey shores of England dissolve into the North Atlantic fog. You are a British Home Child—one of more than one hundred thousand children sent into the vast Canadian dominion to forge a future out of exile.
            </p>

            {/* Archival Callout: Dr. Barnardo's Letter with Scanned Document */}
            <div className="my-8 space-y-4">
              <blockquote className="p-6 sm:p-8 rounded-xl border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-sm space-y-3 font-sans text-sm sm:text-base text-slate-200 not-italic">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider pb-2 border-b border-emerald-500/20">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>The Official Dr. Barnardo’s Archive Letter</span>
                </div>
                <p className="font-serif italic text-slate-300 leading-relaxed">
                  &ldquo;When Vernon was admitted to Dr. Barnardo&apos;s on the 5th December 1902, it is recorded that he had been born on the 27th March 1890 at Battersea, and that the parents were Church of England and he had been baptized.
                </p>
                <p className="font-serif italic text-slate-300 leading-relaxed">
                  The father, Henry Wood, aged 31, and the mother, Susan Ada Wood, aged 36, were not caring for Vernon as well as they might. The father had at one time held good positions as a waiter but had taken to drink, and the mother had been in a home also. It was therefore felt to be in Vernon&apos;s best interest that the boy be admitted to Barnardo&apos;s.
                </p>
                <p className="font-serif italic text-slate-300 leading-relaxed">
                  When Vernon was admitted to Barnardo&apos;s, he stayed at our Epsom home prior to sailing to Canada on the 15th July 1903 on the SS Dominion, arriving in Quebec on the 25th July that year. Just prior to his sailing to Canada, the records show that the mother visited him at Epsom.
                </p>
                <p className="font-serif italic text-slate-300 leading-relaxed">
                  Vernon was placed with a Mr. Watson at Watford, Ontario, and said to be doing very well at school. In 1908, he was awarded the Barnardo Silver Medal, and in 1910 was living in Sarnia, and we learned that he was working for the Bell Telephone Company.&rdquo;
                </p>
                <div className="text-right text-xs font-mono text-emerald-400 pt-2">
                  — Miss L. F. Clargo, Deputy Head of Aftercare (January 5, 1987)
                </div>
              </blockquote>

              <figure className="space-y-2">
                <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/70 shadow-xl max-w-xl mx-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/barnardos_letter_1987.jpg"
                    alt="Original Dr. Barnardo's archive letter regarding Vernon Henry Wood (1987)"
                    className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
                <figcaption className="text-center text-xs font-mono text-slate-400 leading-relaxed">
                  Original certified Dr. Barnardo’s archive verification letter (ACS/LFC/MS) for Vernon Henry Wood.
                </figcaption>
              </figure>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 pt-6 tracking-tight">
              The Genesis of the Wire
            </h2>

            <p>
              That thirteen-year-old boy could not afford the luxury of grief. In the farming fields of Watford, Ontario, he had to be resilient. He rose before dawn, earned top marks in school, and in 1908 received the <strong>Barnardo Silver Medal</strong>—a rare distinction reserved solely for youth of unyielding moral character and diligence.
            </p>

            <p>
              By 1910, at age twenty in Sarnia, Vernon strapped climbing spurs to his boots and scaled his first telephone pole for <strong>The Bell Telephone Company</strong>. 
            </p>

            {/* Bell Canada Vintage Switchboard Photo */}
            <figure className="my-8 space-y-2">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/70 shadow-xl max-w-2xl mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/bell_canada_switchboard.jpg"
                  alt="Vintage Bell Canada manual telephone switchboard operators"
                  className="w-full h-auto object-cover contrast-105"
                />
              </div>
              <figcaption className="text-center text-xs font-mono text-slate-400 leading-relaxed">
                The manual copper patch-bay switchboards of Bell Canada, where voice and signal routing were forged.
              </figcaption>
            </figure>

            <p>
              In that moment, an unbroken four-generation dynasty of communications began:
            </p>

            <div className="my-6 p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3 font-sans text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-slate-100">Vernon Henry Wood (Great-Grandfather)</strong>: Strung the pioneering copper telephone wires across Southwestern Ontario for Bell (1910).
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-slate-100">Vernon Douglas Wood (Grandfather, 1922–1984)</strong>: WWII Royal Canadian Navy Telecommunications Petty Officer; Bell Canada technician for over 30 years.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <Link href="/chronicles/mark-steven-wood" className="text-emerald-400 hover:underline">
                    <strong>Mark Steven Wood (Father, 1950–2024)</strong>
                  </Link>: Industrial health and safety trainer (MSW Training); carried the family lineage through the industrial crucible of Ontario.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold flex-shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-slate-100">Justin Andrew Wood (Great-Grandson)</strong>: Transformed the copper circuits of his forebears into sovereign intelligence, distributed systems, and generative audio architectures.
                </div>
              </div>
            </div>

            {/* Generational Continuity: Grandpa Vernon & Toddler Justin Gardening */}
            <figure className="my-8 space-y-2">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/70 shadow-xl max-w-md mx-auto aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/grandpa_vernon_and_justin_gardening.jpg"
                  alt="Grandpa Vernon Douglas Wood with young Justin in the garden"
                  className="w-full h-full object-cover contrast-105"
                />
              </div>
              <figcaption className="text-center text-xs font-mono text-slate-400 leading-relaxed">
                Generational Continuity: WWII Navy telecom veteran Vernon Douglas Wood (with his classic anchor tattoo) tending the garden with young Justin.
              </figcaption>
            </figure>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 pt-6 tracking-tight">
              Breaking the Generational Cycle
            </h2>

            <p>
              The shadow of alcohol that broke Henry Wood in Victorian London did not disappear overnight. It rippled through the generations, testing each man in turn. But the story does not end in tragedy. It ends in triumph.
            </p>

            <p>
              On September 11, 2009, I faced that same furnace. Through the grace of God and the name of Yeshua, the cycle was broken. The locked grief of that displaced boy on the <em>SS Dominion</em> has finally found a safe harbor. 
            </p>

            <p>
              Vernon Wood did not cross the Atlantic in vain. Every line of code I author, every system I build, and every story I record stands on the shoulders of the boy from Battersea.
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
