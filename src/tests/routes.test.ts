import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Core Static Routes Integrity", () => {
  const appDir = path.resolve(__dirname, "../app");

  const requiredRoutes = [
    { name: "Root Dossier", path: path.join(appDir, "page.tsx") },
    { name: "Foundations Master Hub", path: path.join(appDir, "foundations/page.tsx") },
    { name: "Systems Architecture", path: path.join(appDir, "architecture/page.tsx") },
    { name: "AMRA Sovereign Studio", path: path.join(appDir, "studio/page.tsx") },
    { name: "Axis Mundi Workspace", path: path.join(appDir, "axis-mundi/page.tsx") },
    { name: "Martial Arts Relational Engine", path: path.join(appDir, "martial-arts/page.tsx") },
    { name: "echoSH Progenitor", path: path.join(appDir, "echosh/page.tsx") },
    { name: "Video Transmissions", path: path.join(appDir, "transmissions/page.tsx") },
  ];

  requiredRoutes.forEach((route) => {
    it(`should have valid source file for ${route.name}`, () => {
      expect(fs.existsSync(route.path)).toBe(true);
      const content = fs.readFileSync(route.path, "utf-8");
      expect(content).toContain("export default function");
      expect(content.length).toBeGreaterThan(100);
    });
  });

  it("should have streamlined Header with Mercury logo, echoSH-labs, primary nav, and audio controls", () => {
    const headerPath = path.resolve(__dirname, "../components/layout/Header.tsx");
    expect(fs.existsSync(headerPath)).toBe(true);

    const headerContent = fs.readFileSync(headerPath, "utf-8");
    // Header links back to home
    expect(headerContent).toContain('href="/"');
    expect(headerContent).toContain("echoSH-labs");
    expect(headerContent).toContain("☿");
    // Primary navigation links
    expect(headerContent).toContain('href="/foundations"');
    expect(headerContent).toContain('href="/architecture"');
    expect(headerContent).toContain('href="/studio"');
    expect(headerContent).toContain('href="/martial-arts"');
    expect(headerContent).toContain('href="/transmissions"');
    // Audio controls
    expect(headerContent).toContain("toggleAmbient");
    expect(headerContent).toContain("toggleMute");
  });

  it("should have unified Footer linking to all core sovereign routes", () => {
    const footerPath = path.resolve(__dirname, "../components/layout/Footer.tsx");
    expect(fs.existsSync(footerPath)).toBe(true);

    const footerContent = fs.readFileSync(footerPath, "utf-8");

    // Footer must link to core sovereign routes
    expect(footerContent).toContain('"/"');
    expect(footerContent).toContain('"/foundations"');
    expect(footerContent).toContain('"/architecture"');
    expect(footerContent).toContain('"/studio"');
    expect(footerContent).toContain('"/axis-mundi"');
    expect(footerContent).toContain('"/martial-arts"');
    expect(footerContent).toContain('"/transmissions"');
    expect(footerContent).toContain('"/echosh"');
  });
});
