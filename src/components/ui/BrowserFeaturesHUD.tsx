'use client';

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Keyboard, 
  Share2, 
  Volume2, 
  VolumeX, 
  Radio, 
  Sun, 
  Eye, 
  Sparkles, 
  X, 
  Check, 
  HelpCircle,
  Speech,
  Lock,
  Unlock
} from "lucide-react";
import { useAudioEngine } from "@/hooks/useAudioEngine";
import { useStyleEngine } from "@/context/StyleEngineContext";

export function BrowserFeaturesHUD() {
  const router = useRouter();
  const { isMuted, toggleMute, isAmbientActive, toggleAmbient, playUIClick } = useAudioEngine();
  const { toggleCustomizer, activeConfig } = useStyleEngine();

  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [wakeLockActive, setWakeLockActive] = useState(false);
  const [wakeLockSupported, setWakeLockSupported] = useState(false);
  const [shareSupported, setShareSupported] = useState(false);
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // 1. Check Chrome native API capabilities
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWakeLockSupported("wakeLock" in navigator);
      setShareSupported("share" in navigator);
    }
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  }, []);

  // 2. Chrome Screen Wake Lock API implementation
  const toggleWakeLock = useCallback(async () => {
    playUIClick();
    if (!("wakeLock" in navigator)) {
      showToast("Screen Wake Lock not supported in this browser");
      return;
    }

    try {
      if (!wakeLockActive) {
        // @ts-expect-error - Chrome Wake Lock API
        window.__echoshWakeLock = await navigator.wakeLock.request("screen");
        setWakeLockActive(true);
        showToast("Screen Wake Lock Active (Display will not sleep)");
      } else {
        // @ts-expect-error - Chrome Wake Lock API
        if (window.__echoshWakeLock) {
          // @ts-expect-error - Chrome Wake Lock API
          await window.__echoshWakeLock.release();
          // @ts-expect-error - Chrome Wake Lock API
          window.__echoshWakeLock = null;
        }
        setWakeLockActive(false);
        showToast("Screen Wake Lock Released");
      }
    } catch (err) {
      console.warn("Wake lock request failed:", err);
      setWakeLockActive(false);
    }
  }, [wakeLockActive, playUIClick, showToast]);

  // 3. Chrome Web Share API implementation
  const handleNativeShare = useCallback(async () => {
    playUIClick();
    const shareData = {
      title: "echoSH Labs • Sovereign Dossier & Video Transmissions",
      text: "The Art of True Healing (8m 88s Master) & Sovereign Chronicles by Justin Andrew Wood.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast("Shared successfully!");
      } catch (err) {
        // User cancelled or share dismissed
      }
    } else {
      // Fallback to Clipboard API
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast("Link copied to clipboard!");
      } catch {
        showToast("Could not copy link");
      }
    }
  }, [playUIClick, showToast]);

  // 4. Chrome Web Speech API: Native Text-to-Speech Treatise Reader
  const toggleSpeechReader = useCallback(() => {
    playUIClick();
    if (!("speechSynthesis" in window)) {
      showToast("Speech synthesis not supported in this browser");
      return;
    }

    if (isReadingAloud) {
      window.speechSynthesis.cancel();
      setIsReadingAloud(false);
      showToast("Audio treatise reading stopped");
      return;
    }

    const textToRead = "The Art of True Healing, by Doctor Israel Regardie. In this Middle Pillar technique, the human body is conceived as an energetic dynamo. Five great psychic centers along the central axis of equilibrium correspond to the elemental principles of nature: Kether the Crown, Da'ath the Air Center, Tiphereth the Fire Center, Yesod the Water Center, and Malkuth the Earth Center. Follow the Four-Fold breath: Inhale four seconds, hold four seconds, exhale four seconds, and rest four seconds.";
    
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95;
    utterance.pitch = 0.98;
    
    // Choose natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Premium")));
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    utterance.onend = () => setIsReadingAloud(false);
    utterance.onerror = () => setIsReadingAloud(false);

    window.speechSynthesis.speak(utterance);
    setIsReadingAloud(true);
    showToast("Reading Middle Pillar treatise aloud (Chrome Speech API)");
  }, [isReadingAloud, playUIClick, showToast]);

  // 5. Global Keyboard Shortcuts Handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }

      switch (e.key) {
        case " ": // Space to toggle ambient drone
          e.preventDefault();
          toggleAmbient(activeConfig.frequency || 432);
          break;
        case "m":
        case "M":
          toggleMute();
          break;
        case "t":
        case "T":
          toggleCustomizer();
          break;
        case "v":
        case "V":
          router.push("/transmissions");
          break;
        case "?":
        case "h":
        case "H":
          setIsHelpOpen(prev => !prev);
          break;
        case "Escape":
          setIsHelpOpen(false);
          if (isReadingAloud && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            setIsReadingAloud(false);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleAmbient, toggleMute, toggleCustomizer, router, activeConfig.frequency, isReadingAloud]);

  return (
    <>
      {/* Floating Chrome Features Pill (Bottom Right) */}
      <aside 
        aria-label="Browser Utilities and Accessibility"
        className="fixed bottom-4 right-4 z-40 flex items-center gap-1.5 p-1.5 rounded-full bg-slate-950/85 border border-slate-800/90 shadow-2xl backdrop-blur-md text-xs font-mono transition-transform"
      >
        {/* Wake Lock Toggle */}
        {wakeLockSupported && (
          <button
            onClick={toggleWakeLock}
            className={`p-2 rounded-full transition-all ${
              wakeLockActive 
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-glow-amber animate-pulse" 
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
            title={wakeLockActive ? "Screen Keep-Awake Active (Click to disable)" : "Prevent Screen Sleep during meditation"}
            aria-label="Toggle Screen Keep-Awake"
          >
            {wakeLockActive ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
          </button>
        )}

        {/* Web Speech Treatise Narrator */}
        <button
          onClick={toggleSpeechReader}
          className={`p-2 rounded-full transition-all ${
            isReadingAloud 
              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan animate-pulse" 
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
          title={isReadingAloud ? "Stop Audio Treatise Reading" : "Read Middle Pillar treatise aloud (Chrome Speech API)"}
          aria-label="Read treatise aloud"
        >
          <Speech className="w-3.5 h-3.5" />
        </button>

        {/* Native Web Share */}
        <button
          onClick={handleNativeShare}
          className="p-2 rounded-full text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all"
          title="Share Page via Chrome Web Share API"
          aria-label="Share page"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>

        {/* Keyboard Shortcuts Dialog Trigger */}
        <button
          onClick={() => { playUIClick(); setIsHelpOpen(true); }}
          className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
          title="Keyboard Navigation Shortcuts (?)"
          aria-label="Open keyboard shortcuts guide"
        >
          <Keyboard className="w-3.5 h-3.5" />
        </button>
      </aside>

      {/* Accessible Toast Notification */}
      {toastMessage && (
        <div 
          role="status" 
          aria-live="polite"
          className="fixed bottom-16 right-4 z-50 px-4 py-2 rounded-xl bg-slate-900/95 border border-emerald-500/40 text-emerald-300 text-xs font-mono shadow-2xl backdrop-blur flex items-center gap-2 animate-fadeIn"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Keyboard Shortcuts Native-Style Accessible Modal */}
      {isHelpOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsHelpOpen(false)}
        >
          <div 
            className="bg-slate-950 border border-slate-800 rounded-3xl w-full max-w-lg p-6 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="shortcuts-title"
          >
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-emerald-400" />
                <h2 id="shortcuts-title" className="text-lg font-serif font-bold text-white">
                  Chrome Keyboard Navigation
                </h2>
              </div>
              <button 
                onClick={() => setIsHelpOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-900 text-slate-400 hover:text-white transition"
                aria-label="Close shortcuts guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-slate-300">Toggle Ambient Drone (432 Hz)</span>
                <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-amber-300">Space</kbd>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-slate-300">Mute / Unmute All Audio</span>
                <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-amber-300">M</kbd>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-slate-300">Open Visual Theme Drawer</span>
                <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-amber-300">T</kbd>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-slate-300">Jump to Video Transmissions</span>
                <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-amber-300">V</kbd>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-slate-300">Open / Close this Shortcuts Guide</span>
                <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-amber-300">? / H</kbd>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-slate-300">Close Modals &amp; Stop Speech</span>
                <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-amber-300">Esc</kbd>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero-Extension Native Browser Features</span>
              </span>
              <button 
                onClick={() => setIsHelpOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
