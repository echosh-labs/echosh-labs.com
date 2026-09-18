import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("echoSH Brand Logo & Styling Integrity", () => {
  const rootDir = path.resolve(__dirname, "../../");
  const logoComponentPath = path.join(rootDir, "src/components/ui/EchoSHLogo.tsx");
  const globalsCssPath = path.join(rootDir, "src/app/globals.css");
  const headerPath = path.join(rootDir, "src/components/layout/Header.tsx");

  it("should have EchoSHLogo component created and exported", () => {
    expect(fs.existsSync(logoComponentPath)).toBe(true);
    const content = fs.readFileSync(logoComponentPath, "utf-8");
    expect(content).toContain("export function EchoSHLogo");
    expect(content).toContain("echo");
    expect(content).toContain("SH");
  });

  it("should enforce lowercase 'echo' and uppercase 'SH' anatomy with color differentials", () => {
    const content = fs.readFileSync(logoComponentPath, "utf-8");
    // Verify lowercase echo
    expect(content).toMatch(/<span[^>]*>[\s\n]*echo[\s\n]*<\/span>/);
    // Verify uppercase SH
    expect(content).toMatch(/<span[^>]*>[\s\n]*SH[\s\n]*<\/span>/);
    // Verify separate color differential classes
    expect(content).toContain("text-echosh-echo");
    expect(content).toContain("text-echosh-sh");
  });

  it("should have dedicated echoSH CSS classes defined in globals.css", () => {
    const cssContent = fs.readFileSync(globalsCssPath, "utf-8");
    expect(cssContent).toContain(".text-echosh-echo");
    expect(cssContent).toContain(".text-echosh-sh");
    expect(cssContent).toContain(".glow-echosh");
  });

  it("should strictly omit any vertical cursor rectangle artifact from the logo", () => {
    const content = fs.readFileSync(logoComponentPath, "utf-8");
    // Ensure no cursor prop or cursor block artifact exists in EchoSHLogo
    expect(content).not.toContain("cursorColorClasses");
    expect(content).not.toContain("cursorSizes");
    expect(content).not.toContain("cursor?:");
    expect(content).toContain("no vertical rectangle cursor");
  });

  it("should support 'auto' theme variant dynamically resolving to global theme", () => {
    const content = fs.readFileSync(logoComponentPath, "utf-8");
    expect(content).toContain('variant = "auto"');
    expect(content).toContain("useStyleEngine");
    expect(content).toContain("resolvedVariant");
  });

  it("should have complete StyleEngineContext with all 5 colorway themes and visual controls", () => {
    const styleContextPath = path.join(rootDir, "src/context/StyleEngineContext.tsx");
    expect(fs.existsSync(styleContextPath)).toBe(true);
    const contextContent = fs.readFileSync(styleContextPath, "utf-8");
    expect(contextContent).toContain("THEME_CONFIGS");
    expect(contextContent).toContain("emerald");
    expect(contextContent).toContain("cyan");
    expect(contextContent).toContain("amber");
    expect(contextContent).toContain("violet");
    expect(contextContent).toContain("silver");
    expect(contextContent).toContain("setGlowIntensity");
    expect(contextContent).toContain("setScanlines");
  });

  it("should have VisualThemeDrawer component for global interactive customization", () => {
    const drawerPath = path.join(rootDir, "src/components/ui/VisualThemeDrawer.tsx");
    expect(fs.existsSync(drawerPath)).toBe(true);
    const drawerContent = fs.readFileSync(drawerPath, "utf-8");
    expect(drawerContent).toContain("export function VisualThemeDrawer");
    expect(drawerContent).toContain("THEME_CONFIGS");
  });

  it("should integrate EchoSHLogo into the main Header navigation", () => {
    const headerContent = fs.readFileSync(headerPath, "utf-8");
    expect(headerContent).toContain("EchoSHLogo");
    expect(headerContent).toContain("echoSH-labs");
  });
});

