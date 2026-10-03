'use client';

import React, { useState } from "react";
import Link from "next/link";
import { 
  Play, 
  ExternalLink, 
  Sparkles, 
  Radio, 
  Clock, 
  Calendar, 
  Compass, 
  Layers, 
  Activity,
  ArrowRight,
  Filter,
  CheckCircle2,
  X
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageContainer } from "@/components/layout/PageContainer";
import { VIDEO_TRANSMISSIONS, VideoTransmission } from "@/data/video-transmissions";

type CategoryFilter = "all" | "mode2" | "sacred-geometry" | "sovereign-chronicle" | "media-engineering";

export default function TransmissionsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [activeEmbed, setActiveEmbed] = useState<VideoTransmission | null>(null);

  const featured = VIDEO_TRANSMISSIONS.find((v) => v.id === "7SbQY9Ya0O4") || VIDEO_TRANSMISSIONS[0];

  const filteredVideos = activeCategory === "all" 
    ? VIDEO_TRANSMISSIONS 
    : VIDEO_TRANSMISSIONS.filter((v) => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col justify-between selection:bg-emerald-500/20 font-sans">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <PageContainer size="lg" glow="dual">
          <div className="space-y-12 animate-fadeIn">
            
            {/* Header Breadcrumbs & Title */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="emerald" size="sm" className="gap-1.5 font-mono" dot pulseDot>
                  <Radio className="w-3 h-3 text-emerald-400" />
                  <span>SOVEREIGN BROADCAST ARCHIVE</span>
                </Badge>
                <span className="text-xs font-mono text-slate-500">YOUTUBE TRANSMISSIONS &bull; LONG-FORM PRODUCTIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-100 tracking-tight">
                Sovereign Video Transmissions
              </h1>

              <p className="text-slate-300 text-base sm:text-lg font-serif leading-relaxed max-w-3xl">
                The complete visual and acoustic catalogue of long-form works by <strong className="text-slate-100">Justin Andrew Wood</strong>. 
                Spanning Mode 2 zero-token autonomous video engines, Hermetic &amp; Kabbalistic breathwork rituals, 
                high-precision Solfeggio sound baths, and daily sovereign life chronicles.
              </p>
            </div>

            {/* Featured Master Release Banner (The Art of True Healing) */}
            <div className="rounded-3xl border border-red-500/40 bg-gradient-to-br from-red-950/30 via-slate-900/60 to-slate-950/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-red-500/15 transition-all duration-700" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Thumbnail with Live YouTube Badge & Play Trigger */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black aspect-video group/thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.thumbnailUrl}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 opacity-90 group-hover/thumb:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Overlay */}
                  <button 
                    onClick={() => setActiveEmbed(featured)}
                    className="absolute inset-0 flex items-center justify-center group-hover/thumb:scale-110 transition-transform"
                    aria-label={`Play ${featured.title}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg hover:bg-red-500 transition-colors">
                      <Play className="w-7 h-7 fill-white ml-1" />
                    </div>
                  </button>

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-600 text-white uppercase tracking-wider flex items-center gap-1 shadow">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      NEW RELEASE
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 text-slate-200 border border-slate-700 backdrop-blur">
                      {featured.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="truncate text-amber-300">{featured.relicMetadata?.split('•')[0]}</span>
                    <span className="text-slate-400">ID: {featured.id}</span>
                  </div>
                </div>

                {/* Content Details & Direct Backlinks */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      {featured.categoryLabel}
                    </span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {featured.publishedAt}
                    </span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-emerald-400 font-semibold">{featured.dashaAlignment}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 group-hover:text-red-200 transition-colors leading-snug">
                    {featured.title}
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base font-serif leading-relaxed line-clamp-3">
                    {featured.summary}
                  </p>

                  {/* Frequencies Badges */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Resonant Frequencies &amp; Solfeggio Centers:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {featured.frequencies?.map((freq) => (
                        <span key={freq} className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                          {freq}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons with External YouTube Backlinks */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={featured.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sans font-bold text-sm transition-all shadow-lg hover:shadow-red-600/30"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>

                    <button
                      onClick={() => setActiveEmbed(featured)}
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-mono text-xs border border-slate-700 transition"
                    >
                      <span>Preview In-Page</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                <Filter className="w-4 h-4 text-emerald-400" />
                <span>Filter Transmissions ({filteredVideos.length})</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: "all", label: "All Works" },
                  { id: "mode2", label: "Mode 2 Autonomous" },
                  { id: "sacred-geometry", label: "Sacred Geometry & Audio" },
                  { id: "sovereign-chronicle", label: "Chronicles" },
                  { id: "media-engineering", label: "Media Engineering" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeCategory === tab.id
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                        : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* All Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <article
                  key={video.id}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/60 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
                >
                  <div>
                    {/* Thumbnail & Video Header */}
                    <div className="relative aspect-video bg-black overflow-hidden border-b border-slate-800/60">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-emerald-400 border border-slate-700/80 backdrop-blur">
                          {video.categoryLabel}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 right-2.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-slate-200 border border-slate-700 backdrop-blur flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {video.duration}
                        </span>
                      </div>

                      {/* Play Hover Overlay */}
                      <button
                        onClick={() => setActiveEmbed(video)}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs"
                        aria-label={`Preview ${video.title}`}
                      >
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </button>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>{video.publishedAt}</span>
                        <span className="text-amber-400/90">{video.dashaAlignment || "Sovereign Substrate"}</span>
                      </div>

                      <h3 className="text-base font-serif font-bold text-slate-100 group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {video.title}
                      </h3>

                      <p className="text-xs text-slate-400 font-serif leading-relaxed line-clamp-3">
                        {video.summary}
                      </p>

                      {video.frequencies && video.frequencies.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {video.frequencies.slice(0, 2).map((f) => (
                            <span key={f} className="px-1.5 py-0.5 rounded bg-slate-950/80 border border-cyan-500/20 text-[10px] font-mono text-cyan-300">
                              {f}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Links */}
                  <div className="p-5 pt-0 border-t border-slate-800/40 mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setActiveEmbed(video)}
                      className="text-xs font-mono text-slate-400 hover:text-white transition flex items-center gap-1"
                    >
                      <Play className="w-3 h-3 text-red-500" />
                      <span>Preview</span>
                    </button>

                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 hover:text-red-300 transition group/link"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* In-Page Video Modal / Embed Viewer */}
            {activeEmbed && (
              <div 
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
                onClick={() => setActiveEmbed(null)}
              >
                <div 
                  className="bg-slate-950 border border-slate-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl space-y-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">{activeEmbed.categoryLabel}</span>
                      <h3 className="text-lg font-serif font-bold text-white truncate max-w-xl">{activeEmbed.title}</h3>
                    </div>
                    <button 
                      onClick={() => setActiveEmbed(null)}
                      className="p-2 rounded-full hover:bg-slate-900 text-slate-400 hover:text-white transition"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* YouTube Embed Container */}
                  <div className="px-4 sm:px-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-inner">
                      <iframe
                        src={`${activeEmbed.embedUrl}?autoplay=1`}
                        title={activeEmbed.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Modal Footer & Actions */}
                  <div className="p-4 sm:p-6 pt-0 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs font-mono text-slate-400">
                      Duration: <span className="text-slate-200">{activeEmbed.duration}</span> &bull; Released: <span className="text-slate-200">{activeEmbed.publishedAt}</span>
                    </div>

                    <a
                      href={activeEmbed.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold transition shadow"
                    >
                      <span>Open in YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
