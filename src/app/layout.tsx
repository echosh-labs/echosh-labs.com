import type { Metadata } from "next";
import "./globals.css";
import { StyleEngineProvider } from "@/context/StyleEngineContext";
import { VisualThemeDrawer } from "@/components/ui/VisualThemeDrawer";

export const metadata: Metadata = {
  title: "echoSH Labs | Justin Andrew Wood",
  description: "Master Systems Dossier, Generative Web Audio DSP, and Autonomous Architecture Laboratory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" data-theme="emerald" data-glow="vivid">
      <body className="bg-[#05070a] text-slate-100 min-h-screen antialiased">
        <StyleEngineProvider>
          {/* Dynamic Theme Ambient Glow Backgrounds */}
          <div 
            className="fixed inset-0 pointer-events-none z-0 transition-colors duration-700"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 50% -20%, var(--theme-bg-radial, rgba(16,185,129,0.12)), transparent)"
            }}
          />
          <div 
            className="fixed inset-0 pointer-events-none z-0 transition-colors duration-700"
            style={{
              background: "radial-gradient(circle at bottom right, var(--theme-accent-glow, rgba(6,182,212,0.08)), transparent 60%)"
            }}
          />
          
          <main className="relative z-10">{children}</main>
          
          {/* Global Theme & Visual Styling Drawer */}
          <VisualThemeDrawer />
        </StyleEngineProvider>
      </body>
    </html>
  );
}

