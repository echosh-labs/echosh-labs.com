export interface LoreNode {
  id: string; // e.g. "BATTERSEA-1903"
  slug: string; // e.g. "the-boy-from-battersea"
  route: string; // "/chronicles/the-boy-from-battersea"
  title: string;
  shortTitle: string;
  wikilink: string;
  epoch: string;
  anchorDate: string;
  dashaAlignment: string;
  alchemicalElement: string;
  location: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  keyFigures: string[];
  outlinks: string[]; // slugs of connected nodes
}

export const LORE_NODES: LoreNode[] = [
  {
    id: "BATTERSEA-1903",
    slug: "the-boy-from-battersea",
    route: "/foundations/the-boy-from-battersea",
    title: "The Boy from Battersea",
    shortTitle: "The Boy from Battersea",
    wikilink: "[[ORIGIN 1903]] The Boy from Battersea",
    epoch: "1903–1987",
    anchorDate: "March 31, 1903",
    dashaAlignment: "Pioneer Era: Transatlantic Crossing",
    alchemicalElement: "Bell Telephone Copper Circuits",
    location: "Battersea, London ➔ St. Catharines, Ontario",
    readingTime: "7 MIN READ",
    excerpt: "From Dr. Barnardo's home in Victorian London and the SS Dominion crossing to the pole-climbing linemen of the Bell Telephone Company.",
    tags: ["origin", "dr-barnardos", "home-boy", "bell-telephone", "lineman", "telecommunications"],
    keyFigures: ["Vernon Wood (Great-Grandfather)", "Vernon Douglas Wood (Grandfather)", "Dorothy Wood"],
    outlinks: ["the-first-nine-days", "mark-steven-wood", "a-family-affair"],
  },
  {
    id: "HEARTH-1971",
    slug: "the-first-nine-days",
    route: "/foundations/the-first-nine-days",
    title: "The First Nine Days",
    shortTitle: "The First Nine Days",
    wikilink: "[[HEARTH 1971]] The First Nine Days",
    epoch: "1971",
    anchorDate: "October 1 – October 10, 1971",
    dashaAlignment: "Crisis Inception ➔ Generational Restoration",
    alchemicalElement: "Mennonite Hearth & Paternal Shield",
    location: "St. Catharines, Ontario (Penner Hearth)",
    readingTime: "5 MIN READ",
    excerpt: "A nine-day crucible of acute maternal illness, a young father's solitary vigil, and the quiet Russian Mennonite sanctuary in St. Catharines.",
    tags: ["birth", "resilience", "paternal-vigil", "mennonite", "gretna-manitoba", "st-catharines"],
    keyFigures: ["Justin Andrew Wood", "Deborah Marie Penner", "Mark Steven Wood", "Catherine & Jacob Penner"],
    outlinks: ["the-boy-from-battersea", "mark-steven-wood", "a-family-affair"],
  },
  {
    id: "MSW-1950",
    slug: "mark-steven-wood",
    route: "/foundations/mark-steven-wood",
    title: "The Principle of Correspondence: The Living Legacy of Mark Steven Wood",
    shortTitle: "Mark Steven Wood",
    wikilink: "[[MSW 1950–2024]] Mark Steven Wood",
    epoch: "1950–2024",
    anchorDate: "December 22, 1950 – March 17, 2024",
    dashaAlignment: "Industrial Enterprise & Succession",
    alchemicalElement: "Industrial Safety Systems",
    location: "Welland ➔ Vineland, Ontario (United Mennonite Home)",
    readingTime: "8 MIN READ",
    excerpt: "Industrial safety trainer, founder of MSW Training, and Justin's caregiver vigil alongside community advocates.",
    tags: ["paternal", "msw-training", "safety-trainer", "caregiver-vigil", "united-mennonite-home", "sovereignty"],
    keyFigures: ["Mark Steven Wood", "Justin Andrew Wood", "Kim Hill", "Kim Robertson", "Dorothy Wood"],
    outlinks: ["the-boy-from-battersea", "the-first-nine-days", "a-family-affair"],
  },
  {
    id: "VOXEL-2026",
    slug: "a-family-affair",
    route: "/foundations/a-family-affair",
    title: "A Family Affair: The Builders of the Digital Hearth",
    shortTitle: "The Builders at Y=330",
    wikilink: "[[FELLOWSHIP]] A Family Affair",
    epoch: "2009–2026",
    anchorDate: "September 11, 2009",
    dashaAlignment: "Digital Commons & Multi-Agent Architecture",
    alchemicalElement: "Distributed Voxel Infrastructure",
    location: "Paper Multiplayer Server [Y=222 / Y=330]",
    readingTime: "6 MIN READ",
    excerpt: "From early collaborative building at dawn to soaring architectures: how shared craftsmanship bound the Wood family across generations.",
    tags: ["fellowship", "systems-craft", "server-architect", "mage-dad", "paper-mc", "y330", "digital-hearth"],
    keyFigures: ["Joshua (Server Architect)", "Isaac", "Luke", "Sarah", "Justin (\"Mage Dad\")"],
    outlinks: ["the-boy-from-battersea", "the-first-nine-days", "mark-steven-wood"],
  },
];

/**
 * Retrieves all registered lore nodes in canonical graph order.
 */
export function getAllLoreNodes(): LoreNode[] {
  return LORE_NODES;
}

/**
 * Look up a lore node by slug or ID.
 */
export function getLoreNode(slugOrId: string): LoreNode | undefined {
  return LORE_NODES.find(
    (n) => n.slug === slugOrId || n.id.toLowerCase() === slugOrId.toLowerCase()
  );
}

/**
 * Returns all nodes that point to the given node (Incoming Backlinks).
 */
export function getBacklinks(slugOrId: string): LoreNode[] {
  const target = getLoreNode(slugOrId);
  if (!target) return [];

  return LORE_NODES.filter(
    (n) => n.slug !== target.slug && (n.outlinks.includes(target.slug) || n.outlinks.includes(target.id))
  );
}

/**
 * Returns all nodes that the given node points to (Outgoing Horizons).
 */
export function getOutlinks(slugOrId: string): LoreNode[] {
  const source = getLoreNode(slugOrId);
  if (!source) return [];

  return source.outlinks
    .map((targetKey) => getLoreNode(targetKey))
    .filter((n): n is LoreNode => Boolean(n));
}

/**
 * Computes related nodes based on shared tags or historical resonance.
 */
export function getRelatedNodes(slugOrId: string): LoreNode[] {
  const current = getLoreNode(slugOrId);
  if (!current) return [];

  return LORE_NODES.filter((n) => {
    if (n.slug === current.slug) return false;
    const sharedTags = n.tags.filter((tag) => current.tags.includes(tag));
    return sharedTags.length > 0 || current.outlinks.includes(n.slug);
  });
}
