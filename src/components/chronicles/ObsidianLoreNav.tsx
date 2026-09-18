'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Network, Compass, GitFork, Link2, Sparkles, CornerDownRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { LoreNode, getAllLoreNodes, getBacklinks, getOutlinks, getRelatedNodes } from "@/data/lore-graph";

interface ObsidianLoreNavProps {
  currentNode: LoreNode;
}

export function ObsidianLoreNav({ currentNode }: ObsidianLoreNavProps) {
  const allNodes = getAllLoreNodes();
  const outlinks = getOutlinks(currentNode.slug);
  const backlinks = getBacklinks(currentNode.slug);
  const related = getRelatedNodes(currentNode.slug);

  return (
    <nav aria-label="Obsidian Lore Graph Navigation" className="mt-16 pt-10 border-t border-slate-800/80 space-y-10">
      
      {/* 1. Header & Live Graph Topology Bar */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            <Network className="w-4 h-4 text-emerald-400" />
            <span>OBSIDIAN LORE GRAPH // TOPOLOGY</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            ACTIVE NODE: <strong className="text-slate-300 font-normal">[[{currentNode.id}]]</strong>
          </span>
        </div>

        {/* Interactive Node Network Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {allNodes.map((node) => {
            const isCurrent = node.slug === currentNode.slug;
            const isOutlink = currentNode.outlinks.includes(node.slug) || currentNode.outlinks.includes(node.id);
            const isBacklink = backlinks.some((b) => b.slug === node.slug);

            let nodeStyles = "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200";
            let statusText = "UNCONNECTED";

            if (isCurrent) {
              nodeStyles = "bg-emerald-500/20 text-emerald-300 border-emerald-500/60 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/30 font-semibold";
              statusText = "CURRENT";
            } else if (isOutlink && isBacklink) {
              nodeStyles = "bg-cyan-950/40 text-cyan-300 border-cyan-700/60 hover:border-cyan-500/80";
              statusText = "⇄ BIDIRECTIONAL";
            } else if (isOutlink) {
              nodeStyles = "bg-amber-950/30 text-amber-300 border-amber-700/50 hover:border-amber-500/80";
              statusText = "➔ OUTGOING";
            } else if (isBacklink) {
              nodeStyles = "bg-indigo-950/30 text-indigo-300 border-indigo-700/50 hover:border-indigo-500/80";
              statusText = "⬅ INCOMING";
            }

            return (
              <Link
                key={node.id}
                href={node.route}
                className={`group px-3 py-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-2 ${nodeStyles}`}
                title={`${node.title} (${node.epoch})`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? "bg-emerald-400 animate-pulse" : isOutlink ? "bg-amber-400" : isBacklink ? "bg-indigo-400" : "bg-slate-600"}`} />
                <span>[[{node.id}]]</span>
                <span className="hidden group-hover:inline text-[10px] text-slate-400">({statusText})</span>
              </Link>
            );
          })}
        </div>

        <p className="text-xs font-serif italic text-slate-400">
          Hypertext lore graph automatically resolves connected nodes and bidirectional references at build time.
        </p>
      </div>

      {/* 2. Connected Horizons: Outgoing Threads ("Choose Your Next Path") */}
      {outlinks.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
              <Compass className="w-4 h-4" />
              <span>CONNECTED HORIZONS // FORWARD PATHWAYS ({outlinks.length})</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">CHOOSE YOUR ADVENTURE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outlinks.map((target) => (
              <Link
                key={target.id}
                href={target.route}
                className="group p-5 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-400 font-semibold group-hover:underline">
                      [[{target.id}]]
                    </span>
                    <span className="text-slate-500">{target.epoch}</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                    {target.title}
                  </h4>
                  <p className="text-xs font-serif text-slate-400 line-clamp-2 leading-relaxed">
                    {target.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{target.readingTime}</span>
                  <span className="inline-flex items-center gap-1 text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE THREAD</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 3. Linked References: Incoming Backlinks */}
      {backlinks.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
            <Link2 className="w-4 h-4" />
            <span>LINKED REFERENCES // INCOMING BACKLINKS ({backlinks.length})</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {backlinks.map((source) => (
              <Link
                key={source.id}
                href={source.route}
                className="group p-4 rounded-xl bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/50 transition-all flex items-start gap-3"
              >
                <CornerDownRight className="w-4 h-4 text-indigo-400/70 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                <div className="space-y-1 text-xs">
                  <div className="font-mono text-indigo-300 font-semibold group-hover:underline">
                    [[{source.id}]]
                  </div>
                  <div className="text-slate-200 font-serif font-medium">
                    {source.shortTitle} ({source.epoch})
                  </div>
                  <div className="text-[11px] text-slate-400 font-serif line-clamp-1">
                    {source.excerpt}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 4. Global Estate Jump Hub */}
      <div className="pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO SOVEREIGN ESTATE</span>
        </Link>
        <Link
          href="/foundations"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>FOUNDATIONS ARCHITECTURE MATRIX</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </nav>
  );
}
