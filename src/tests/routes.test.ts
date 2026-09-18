import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Core Static Routes Integrity", () => {
  const appDir = path.resolve(__dirname, "../app");

  const requiredRoutes = [
    { name: "Root Dossier", path: path.join(appDir, "page.tsx") },
    { name: "Astrological Compendium", path: path.join(appDir, "compendium/page.tsx") },
    { name: "Foundations Storyboard", path: path.join(appDir, "foundations/page.tsx") },
    { name: "Axis Mundi Archive", path: path.join(appDir, "axis-mundi/page.tsx") },
    { name: "Martial Arts Relational Engine", path: path.join(appDir, "martial-arts/page.tsx") },
    { name: "echoSH Progenitor", path: path.join(appDir, "echosh/page.tsx") },
    { name: "Legacy Python Archive", path: path.join(appDir, "archive/page.tsx") },
    { name: "Services & Telemetry", path: path.join(appDir, "services/page.tsx") },
    { name: "Treasury & Fiscal Telemetry", path: path.join(appDir, "treasury/page.tsx") },
  ];

  requiredRoutes.forEach((route) => {
    it(`should have valid source file for ${route.name}`, () => {
      expect(fs.existsSync(route.path)).toBe(true);
      const content = fs.readFileSync(route.path, "utf-8");
      expect(content).toContain("export default function");
      expect(content.length).toBeGreaterThan(100);
    });
  });

  it("should have streamlined Header with Mercury logo, echoSH-labs, and audio controls", () => {
    const headerPath = path.resolve(__dirname, "../components/layout/Header.tsx");
    expect(fs.existsSync(headerPath)).toBe(true);

    const headerContent = fs.readFileSync(headerPath, "utf-8");
    // Header links back to home
    expect(headerContent).toContain('href="/"');
    expect(headerContent).toContain("echoSH-labs");
    expect(headerContent).toContain("☿");
    // Audio controls
    expect(headerContent).toContain("toggleAmbient");
    expect(headerContent).toContain("toggleMute");
  });

  it("should have unified Footer linking to all 9 core dossier routes", () => {
    const footerPath = path.resolve(__dirname, "../components/layout/Footer.tsx");
    expect(fs.existsSync(footerPath)).toBe(true);

    const footerContent = fs.readFileSync(footerPath, "utf-8");

    // Footer must link to all core routes
    expect(footerContent).toContain('"/"');
    expect(footerContent).toContain('"/compendium"');
    expect(footerContent).toContain('"/foundations"');
    expect(footerContent).toContain('"/axis-mundi"');
    expect(footerContent).toContain('"/martial-arts"');
    expect(footerContent).toContain('"/echosh"');
    expect(footerContent).toContain('"/archive"');
    expect(footerContent).toContain('"/services"');
    expect(footerContent).toContain('"/treasury"');
  });
});
