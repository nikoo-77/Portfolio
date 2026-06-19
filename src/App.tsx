import { useState } from "react";
import { BootSequence } from "./components/BootSequence";
import { Contact } from "./components/Contact";
import { CRTOverlay } from "./components/CRTOverlay";
import { Education } from "./components/Education";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Ticker } from "./components/Ticker";
import { TopBar } from "./components/TopBar";
import { profile } from "./data/portfolio";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#ffeb3b]">
      <CRTOverlay />
      {!booted ? <BootSequence onComplete={() => setBooted(true)} /> : null}

      <TopBar />
      <Ticker />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-[rgba(255,235,59,0.2)] px-4 py-8 text-center text-xs text-[#ffc107]">
        <p>Made with care by {profile.firstName}.</p>
        <p className="mt-2">
          $ kubectl delete pod brain — pod not found
          <span className="crt-blink">█</span>
        </p>
      </footer>
    </div>
  );
}
