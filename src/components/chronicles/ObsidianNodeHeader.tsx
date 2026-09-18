'use client';

import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Compass, GitCommit, Network } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { LoreNode } from "@/data/lore-graph";

interface ObsidianNodeHeaderProps {
  node: LoreNode;
}

export function ObsidianNodeHeader({ node }: ObsidianNodeHeaderProps) {
  return (
    <div className="space-y-4 border-b border-slate-800/80 pb-6 mb-8">
      {/* Top Breadcrumb & Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>[[ESTATE]]</span>
          </Link>
          <span className="text-slate-600">/</span>
          <Link
            href="/foundations"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            [[FOUNDATIONS]]
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-emerald-400/90 font-semibold flex items-center gap-1">
            <Network className="w-3 h-3 text-emerald-500" />
            [[{node.id}]]
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{node.readingTime}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
            <GitCommit className="w-3 h-3 text-emerald-500/70" />
            <span>GRAPH NODE</span>
          </span>
        </div>
      </div>

      {/* Node Metadata Bar */}
      <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
        <Badge variant="emerald" size="sm" className="font-mono">
          {node.wikilink}
        </Badge>
        <span className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300">
          EPOCH: {node.epoch}
        </span>
        <span className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300">
          ALCHEMICAL: {node.alchemicalElement}
        </span>
        <span className="hidden sm:inline-flex px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-400">
          DASHA: {node.dashaAlignment}
        </span>
      </div>
    </div>
  );
}
