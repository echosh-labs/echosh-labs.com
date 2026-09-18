import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import {
  getAllLoreNodes,
  getLoreNode,
  getBacklinks,
  getOutlinks,
  getRelatedNodes,
} from "../data/lore-graph";

describe("Obsidian Lore Graph Build-Time Integrity", () => {
  const nodes = getAllLoreNodes();
  const appDir = path.resolve(__dirname, "../app");

  it("should have at least 4 registered foundational lore nodes", () => {
    expect(nodes.length).toBeGreaterThanOrEqual(4);
  });

  it("should have existing page.tsx files for every lore node", () => {
    nodes.forEach((node) => {
      const pagePath = path.join(appDir, "chronicles", node.slug, "page.tsx");
      expect(
        fs.existsSync(pagePath),
        `Route file missing for lore node ${node.id} at ${pagePath}`
      ).toBe(true);

      const pageContent = fs.readFileSync(pagePath, "utf-8");
      expect(pageContent).toContain("ObsidianLoreNav");
      expect(pageContent).toContain("ObsidianNodeHeader");
    });
  });

  it("should have valid outlinks where every destination node exists", () => {
    nodes.forEach((node) => {
      expect(node.outlinks.length).toBeGreaterThan(0);
      node.outlinks.forEach((targetSlugOrId) => {
        const target = getLoreNode(targetSlugOrId);
        expect(
          target,
          `Node ${node.id} has invalid dangling outlink to '${targetSlugOrId}'`
        ).toBeDefined();
      });
    });
  });

  it("should calculate symmetric backlinks for connected nodes", () => {
    // If Battersea outlinks to Hearth, then Hearth must have Battersea in its backlinks
    const battersea = getLoreNode("the-boy-from-battersea")!;
    expect(battersea).toBeDefined();

    const hearthBacklinks = getBacklinks("the-first-nine-days");
    const hasBatterseaBacklink = hearthBacklinks.some(
      (b) => b.slug === "the-boy-from-battersea"
    );
    expect(hasBatterseaBacklink).toBe(true);
  });

  it("should ensure the graph is fully connected with zero orphan nodes", () => {
    nodes.forEach((node) => {
      const out = getOutlinks(node.slug);
      const back = getBacklinks(node.slug);
      const totalDegree = out.length + back.length;
      expect(
        totalDegree,
        `Node ${node.id} (${node.slug}) is an orphan with no connections`
      ).toBeGreaterThan(0);
    });
  });

  it("should support lookup by either slug or node ID case-insensitively", () => {
    expect(getLoreNode("the-boy-from-battersea")).toBeDefined();
    expect(getLoreNode("BATTERSEA-1903")).toBeDefined();
    expect(getLoreNode("battersea-1903")).toBeDefined();
  });
});
