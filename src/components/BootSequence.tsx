import { useEffect, useRef } from "react";
import { bootLines } from "../data/portfolio";

type BootSequenceProps = {
  onComplete: () => void;
};

export function BootSequence({ onComplete }: BootSequenceProps) {
  const audioContextRef = useRef<AudioContext | null>(null);

  const initAudioContext = () => {
    if (audioContextRef.current) return;

    const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;

    audioContextRef.current = new AudioCtx();
  };

  const playTone = (frequency: number, duration: number, delay = 0) => {
    const ctx = audioContextRef.current;
    if (!ctx) return;

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "square";
    oscillator.frequency.value = frequency;
    gain.gain.value = 0.05;

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    const start = ctx.currentTime + delay;
    oscillator.start(start);
    oscillator.stop(start + duration);
  };

  const playBootSound = () => {
    const ctx = audioContextRef.current;
    if (!ctx) return;

    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    playTone(280, 0.1, 0);
    playTone(340, 0.08, 0.16);
    playTone(220, 0.12, 0.36);
    playTone(440, 0.1, 0.56);
  };

  const playCompleteSound = () => {
    const ctx = audioContextRef.current;
    if (!ctx) return;

    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    playTone(520, 0.08, 0);
    playTone(620, 0.06, 0.12);
  };

  const bootPlayedRef = useRef(false);

  const handleInteraction = () => {
    if (bootPlayedRef.current) return;
    initAudioContext();
    playBootSound();
    bootPlayedRef.current = true;
  };

  useEffect(() => {
    initAudioContext();

    const onUserGesture = () => {
      handleInteraction();
    };

    window.addEventListener("pointerdown", onUserGesture);
    window.addEventListener("keydown", onUserGesture);

    return () => {
      window.removeEventListener("pointerdown", onUserGesture);
      window.removeEventListener("keydown", onUserGesture);
    };
  }, []);

  const handleContinue = () => {
    handleInteraction();
    playCompleteSound();
    onComplete();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0a0a] p-4"
      style={{ animation: "boot-flicker 4s infinite" }}
      onPointerDown={handleInteraction}
    >
      <div className="terminal-border w-full max-w-3xl overflow-hidden">
        <div className="titlebar">
          <span className="titlebar-dot titlebar-dot--pink" />
          <span className="titlebar-dot titlebar-dot--yellow" />
          <span className="titlebar-dot titlebar-dot--green" />
          <span>GELO.EXE — boot sequence</span>
        </div>
        <div className="space-y-2 p-4 md:p-6">
          <p className="text-sm text-[#d1a100]">boot sequence running...</p>
          {bootLines.map((line, index) => (
            <p
              key={line}
              className="text-sm md:text-base"
              style={{
                animation: `fade-up 0.4s ease ${index * 0.12}s both`,
              }}
            >
              <span className="text-[#d1a100]">&gt;</span> {line}
            </p>
          ))}
          <p
            className="pt-4 text-sm md:text-base"
            style={{ animation: "fade-up 0.4s ease 1.2s both" }}
          >
            <span className="text-[#d1a100]">&gt;</span> SYSTEM READY — press
            any key to continue
            <span className="crt-blink">█</span>
          </p>
        </div>
      </div>
      <button
        type="button"
        aria-label="Continue to portfolio"
        className="absolute inset-0 cursor-pointer opacity-0"
        onClick={handleContinue}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            handleContinue();
          }
        }}
      />
    </div>
  );
}
