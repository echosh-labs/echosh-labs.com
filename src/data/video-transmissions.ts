export interface VideoTransmission {
  id: string; // YouTube ID e.g. "7SbQY9Ya0O4"
  slug: string;
  title: string;
  shortTitle: string;
  youtubeUrl: string;
  embedUrl: string;
  thumbnailUrl: string;
  duration: string;
  durationSec: number;
  publishedAt: string;
  category: "mode2" | "sacred-geometry" | "sovereign-chronicle" | "media-engineering";
  categoryLabel: string;
  isFeatured?: boolean;
  dashaAlignment?: string;
  frequencies?: string[];
  relicMetadata?: string;
  summary: string;
  description: string;
  chapters?: { time: string; title: string }[];
  tags: string[];
}

export const VIDEO_TRANSMISSIONS: VideoTransmission[] = [
  {
    id: "7SbQY9Ya0O4",
    slug: "art-of-true-healing-middle-pillar-8m88s",
    title: "The Art of True Healing: 5-Chakra Alignment & Middle Pillar Breathing (8m 88s) | Israel Regardie",
    shortTitle: "The Art of True Healing (8m 88s Master)",
    youtubeUrl: "https://youtu.be/7SbQY9Ya0O4",
    embedUrl: "https://www.youtube-nocookie.com/embed/7SbQY9Ya0O4",
    thumbnailUrl: "https://i.ytimg.com/vi/7SbQY9Ya0O4/hqdefault.jpg",
    duration: "09:28 (8m 88s)",
    durationSec: 568,
    publishedAt: "2026-10-03",
    category: "mode2",
    categoryLabel: "Mode 2 Autonomous Master",
    isFeatured: true,
    dashaAlignment: "Saturn Mahadasha • Mars Hora",
    frequencies: ["963 Hz (Crown)", "741 Hz (Air)", "528 Hz (Fire)", "417 Hz (Water)", "396 Hz (Earth)"],
    relicMetadata: "Pixel 7 Sovereign Relic (PXL_20261002_232544333.jpg) • 40.7128° N, -74.0060° W",
    summary: "Complete Middle Pillar healing ritual from Dr. Israel Regardie's 1937 classic. 35 Four-Fold Breath cycles, bare-metal 48 kHz binaural brainwave sweeps, Himalayan singing bowls, and composited photographic montage substrate layer.",
    description: `Immerse yourself in the complete 8-minute 88-second (09:28) Middle Pillar healing ritual from Dr. Israel Regardie's 1937 classic, "The Art of True Healing: A Treatise on the Mechanism of Prayer and the Operation of the Law of Attraction in Nature".

Through 35 complete cycles of the Four-Fold Breath (Inhale 4s • Hold 4s • Exhale 4s • Rest 4s), awaken the five psychic dynamos of the human body and circulate divine light throughout your auric field.

✨ ARCHITECTURAL INNOVATION:
• Photographic Relic Intro featuring Pixel 7 capture (PXL_20261002_232544333.jpg) with Ken Burns pan/zoom, Chaldean Hora (Mars), Vimshottari Dasha (Saturn), and Spatial GPS HUD.
• Modular Graphical Substrate: The entire meditative silhouette, central Sushumna axis, 5 chakra coronas/yantras, dynamic circulation ropes, and 4-fold breath metronome bar are composited as a layered broadcast graphics engine directly on top of cycling sovereign photo relics with a 70% dark obsidian ambient scrim.
• Complete Israel Regardie Teachings & Subtitles rendered dynamically with zero LLM token generation overhead.
• Bare-Metal 48 kHz Alchemical Audio: 4-fold breath-synchronized binaural sweeps (Beta ➔ Alpha ➔ Theta ➔ Sunyata), authentic Tibetan bronze bowl multiphonics & puja friction drone, and algorithmic Schroeder cathedral reverb.`,
    chapters: [
      { time: "00:00", title: "Photographic Relic Intro & Grounding" },
      { time: "00:20", title: "Orientation & Rhythmic Breath Instructions" },
      { time: "00:40", title: "1. Spirit Center (Crown / Kether) • 963 Hz • 'EH-HEH-YEH'" },
      { time: "01:45", title: "2. Air Center (Throat & Face / Da'ath) • 741 Hz • 'YHVH ELOHIM'" },
      { time: "02:50", title: "3. Fire Center (Heart / Tiphereth) • 528 Hz • 'YHVH ELOAH VE-DAATH'" },
      { time: "03:55", title: "4. Water Center (Groin / Yesod) • 417 Hz • 'SHADDAI EL CHAI'" },
      { time: "04:14", title: "Harmonic Breath Repose (Monetization Slot #1)" },
      { time: "05:00", title: "5. Earth Center (Feet / Malkuth) • 396 Hz • 'ADONAI HA-ARETZ'" },
      { time: "06:05", title: "The Four Circulations of Light (Sagittal, Lateral, Helical)" },
      { time: "07:35", title: "Vibrant Outro: Five Centers Radiating • Complete Torus Dispersion" },
      { time: "08:43", title: "Outro YouTube End-Screen Safe Zones & Sovereign Dispatch" },
    ],
    tags: ["middle-pillar", "israel-regardie", "5-chakras", "four-fold-breath", "solfeggio", "mode-2", "binaural-beats", "sound-bath"],
  },
  {
    id: "QgvFcofYIaM",
    slug: "saturnian-chronos-3d-shani-yantra",
    title: "Saturnian Chronos & 3D Shani Yantra • 221.23 Hz Harmonic Drone",
    shortTitle: "Saturnian Chronos & 3D Shani Yantra",
    youtubeUrl: "https://youtu.be/QgvFcofYIaM",
    embedUrl: "https://www.youtube-nocookie.com/embed/QgvFcofYIaM",
    thumbnailUrl: "https://i.ytimg.com/vi/QgvFcofYIaM/hqdefault.jpg",
    duration: "10:00 (Long-Form)",
    durationSec: 600,
    publishedAt: "2026-10-02",
    category: "sacred-geometry",
    categoryLabel: "Vedic Astronomy & Yantra",
    isFeatured: true,
    dashaAlignment: "Saturn Mahadasha (Shani Bhagavan)",
    frequencies: ["221.23 Hz (Saturn Orbital Resonance)", "7.83 Hz (Schumann)"],
    relicMetadata: "3D Procedural Mesh • Alchemical Lead Matrix",
    summary: "Deep meditative journey into the archetypal geometry of Saturn (Shani Bhagavan). Featuring a 3D precessing Shani Yantra with sacred alchemical geometry and continuous 221.23 Hz acoustic drone.",
    description: `A profound alchemical exploration of Chronos, boundaries, time, and karma. Synthesized using procedural 3D raymarched wireframes aligned to the Shani Yantra with continuous planetary fundamental resonance.`,
    tags: ["saturn", "shani-yantra", "sacred-geometry", "221-hz", "vedic-astrology", "meditation"],
  },
  {
    id: "CPlPmPlEu1M",
    slug: "sovereign-chronicle-20261002-venus-hora",
    title: "Sovereign Chronicle — 2026-10-02 (Saturn / Venus Hora)",
    shortTitle: "Sovereign Chronicle • 2026-10-02",
    youtubeUrl: "https://youtu.be/CPlPmPlEu1M",
    embedUrl: "https://www.youtube-nocookie.com/embed/CPlPmPlEu1M",
    thumbnailUrl: "https://i.ytimg.com/vi/CPlPmPlEu1M/hqdefault.jpg",
    duration: "Chronicle Stream",
    durationSec: 320,
    publishedAt: "2026-10-02",
    category: "sovereign-chronicle",
    categoryLabel: "Sovereign Voice & Ephemeris",
    dashaAlignment: "Saturn Mahadasha • Venus Hora",
    frequencies: ["Venusian Harmonics"],
    relicMetadata: "Pixel 7 Direct Stream • Echosh Event Bus",
    summary: "Daily sovereign audio-video reflection under Venus Hora and Saturn Mahadasha. Exploring generative systems, autonomous pipelines, and creative synthesis.",
    description: `Spontaneous audio-visual sovereign log recorded on Google Pixel 7 and ingested autonomously through the Echosh event bus into the Life Vault.`,
    tags: ["chronicle", "venus-hora", "saturn-dasha", "sovereign-voice", "autonomous-ingestion"],
  },
  {
    id: "NkmQawRgKug",
    slug: "sovereign-chronicle-saturnian-harmonic-observatory",
    title: "Sovereign Chronicle — Saturnian Harmonic Observatory (2:44)",
    shortTitle: "Saturnian Harmonic Observatory",
    youtubeUrl: "https://youtu.be/NkmQawRgKug",
    embedUrl: "https://www.youtube-nocookie.com/embed/NkmQawRgKug",
    thumbnailUrl: "https://i.ytimg.com/vi/NkmQawRgKug/hqdefault.jpg",
    duration: "02:44",
    durationSec: 164,
    publishedAt: "2026-09-29",
    category: "sacred-geometry",
    categoryLabel: "Acoustic Observatory",
    dashaAlignment: "Saturn Mahadasha • Quicksilver / Lead",
    frequencies: ["221.23 Hz (Saturn)", "7.83 Hz (Schumann)"],
    summary: "High-precision acoustic stream exploring planetary octaves and binomial breath envelopes, synthesized on the echosh-labs single-binary engine.",
    description: `A mathematical synthesis of Hans Cousto's Cosmic Octave for Saturn with the Earth's Schumann fundamental. Built on the Go bare-metal audio DSP engine.`,
    tags: ["cosmic-octave", "saturn", "schumann-resonance", "acoustic-observatory", "echosh-labs"],
  },
  {
    id: "fAz2E4tIKRc",
    slug: "sovereign-chronicle-saturn-lead",
    title: "Sovereign Chronicle — Saturn (Lead (Plumbum))",
    shortTitle: "Saturn Chronicle • Lead (Plumbum)",
    youtubeUrl: "https://youtu.be/fAz2E4tIKRc",
    embedUrl: "https://www.youtube-nocookie.com/embed/fAz2E4tIKRc",
    thumbnailUrl: "https://i.ytimg.com/vi/fAz2E4tIKRc/hqdefault.jpg",
    duration: "Alchemical Chronicle",
    durationSec: 180,
    publishedAt: "2026-09-29",
    category: "sovereign-chronicle",
    categoryLabel: "Hermetic Alchemical Chronicle",
    dashaAlignment: "Saturn Mahadasha • Venus Hora",
    frequencies: ["Lead Alchemical Resonance"],
    summary: "Reflections on the Principle of Gender, creative magnetism, and architectural discipline across the echosh-labs WSL2 Ubuntu substrate.",
    description: `A Hermetic inquiry into the transmutation of Saturnian lead into solar gold through steady operational cadence and zero-token systems.`,
    tags: ["saturn", "lead-plumbum", "alchemical-chronicle", "hermetic-philosophy"],
  },
  {
    id: "uc661Aqwjuk",
    slug: "why-your-phone-and-mic-is-all-you-need",
    title: "Why Your Phone + Mic is All You Need to Start Podcasting",
    shortTitle: "Phone + Mic Podcasting Rig",
    youtubeUrl: "https://youtu.be/uc661Aqwjuk",
    embedUrl: "https://www.youtube-nocookie.com/embed/uc661Aqwjuk",
    thumbnailUrl: "https://i.ytimg.com/vi/uc661Aqwjuk/hqdefault.jpg",
    duration: "Technical Essay",
    durationSec: 240,
    publishedAt: "2026-09-29",
    category: "media-engineering",
    categoryLabel: "Media Engineering & Podcasting",
    dashaAlignment: "Mercury Hora (Budha)",
    summary: "Testing the simplest and most accessible mobile broadcasting rig: Google Pixel 7 paired with dedicated external mic. Proving zero-friction content production.",
    description: `Practical proof that excessive equipment is an obstacle to authentic voice. Exploring the mobile direct-to-video workflow paired with autonomous downstream compilation.`,
    tags: ["podcasting", "pixel7", "audio-setup", "media-engineering", "zero-friction"],
  },
  {
    id: "hAyUSVMVW7k",
    slug: "toroidal-singularity-akasha-spanda-432hz",
    title: "Toroidal Singularity (Akasha Spanda) — Sacred Harmonic Geometry (432Hz)",
    shortTitle: "Toroidal Singularity (Akasha Spanda)",
    youtubeUrl: "https://youtu.be/hAyUSVMVW7k",
    embedUrl: "https://www.youtube-nocookie.com/embed/hAyUSVMVW7k",
    thumbnailUrl: "https://i.ytimg.com/vi/hAyUSVMVW7k/hqdefault.jpg",
    duration: "01:48 (108s Cycle)",
    durationSec: 108,
    publishedAt: "2026-09-24",
    category: "sacred-geometry",
    categoryLabel: "Sacred Geometry & Torus",
    frequencies: ["432.0 Hz Harmonic Sine"],
    summary: "108 precessing filaments forming an event horizon black hole void with intentional non-closing miss margin. Generated via AMRA Sovereign Studio & Treasury.",
    description: `Parametric Sacred Geometry & Harmonic Torus Dynamics with 108 precessing curves at 35.0° isometric tilt and 432 Hz pure Solfeggio fundamental.`,
    tags: ["torus", "akasha-spanda", "432hz", "sacred-geometry", "amra-treasury"],
  },
  {
    id: "OMiWxnbONcI",
    slug: "toroidal-singularity-amra-rupa-528hz",
    title: "Toroidal Singularity & Āmra Rūpa — Alchemical Transmutation (528Hz)",
    shortTitle: "Toroidal Singularity & Āmra Rūpa",
    youtubeUrl: "https://youtu.be/OMiWxnbONcI",
    embedUrl: "https://www.youtube-nocookie.com/embed/OMiWxnbONcI",
    thumbnailUrl: "https://i.ytimg.com/vi/OMiWxnbONcI/hqdefault.jpg",
    duration: "01:48 (108s Cycle)",
    durationSec: 108,
    publishedAt: "2026-09-24",
    category: "sacred-geometry",
    categoryLabel: "Sacred Geometry & Torus",
    frequencies: ["528.0 Hz (Transformation & Miracles)"],
    summary: "Circumscribed precessing filaments forming an event horizon black hole void with layered parametric Āmra Rūpa sacred geometry. Prānic evolution from Āma Emerald to Amara Pearl.",
    description: `Layered parametric Vedic Āmra Rūpa (Kairi curve and Bīja seed) nested within standing wave toroidal dynamics, resonating at 528 Hz.`,
    tags: ["torus", "amra-rupa", "528hz", "solfeggio", "sacred-geometry", "alchemical-transmutation"],
  },
  {
    id: "L6JrAo54E7E",
    slug: "mode2-synthetic-cyber-amra-mango",
    title: "Mode 2 — Synthetic Cyber Āmra Mango & Toroidal Harmonics",
    shortTitle: "Synthetic Cyber Āmra Mango",
    youtubeUrl: "https://youtu.be/L6JrAo54E7E",
    embedUrl: "https://www.youtube-nocookie.com/embed/L6JrAo54E7E",
    thumbnailUrl: "https://i.ytimg.com/vi/L6JrAo54E7E/hqdefault.jpg",
    duration: "Mode 2 Showcase",
    durationSec: 90,
    publishedAt: "2026-09-30",
    category: "mode2",
    categoryLabel: "Mode 2 Autonomous Media",
    frequencies: ["Solfeggio Multiphonics"],
    summary: "Autonomous Mode 2 video synthesis exploring cybernetic mango geometry, parametric toroids, and zero-token media generation.",
    description: `Early milestone proof of programmatic video compilation without LLM token expenditure, rendered directly from Go raster routines and ffmpeg stdin pipes.`,
    tags: ["mode-2", "synthetic-mango", "zero-token", "toroidal-harmonics", "echosh-labs"],
  },
];

export function getAllVideoTransmissions(): VideoTransmission[] {
  return VIDEO_TRANSMISSIONS;
}

export function getFeaturedVideoTransmissions(): VideoTransmission[] {
  return VIDEO_TRANSMISSIONS.filter((v) => v.isFeatured);
}

export function getVideoTransmissionById(id: string): VideoTransmission | undefined {
  return VIDEO_TRANSMISSIONS.find((v) => v.id === id);
}
