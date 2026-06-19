import { bootLines } from "../data/portfolio";

type BootSequenceProps = {
  onComplete: () => void;
};

export function BootSequence({ onComplete }: BootSequenceProps) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0a0a] p-4"
      style={{ animation: "boot-flicker 4s infinite" }}
    >
      <div className="terminal-border w-full max-w-3xl overflow-hidden">
        <div className="titlebar">
          <span className="titlebar-dot titlebar-dot--pink" />
          <span className="titlebar-dot titlebar-dot--yellow" />
          <span className="titlebar-dot titlebar-dot--green" />
          <span>GELO.EXE — boot sequence</span>
        </div>
        <div className="space-y-2 p-4 md:p-6">
          <p className="text-sm text-[#00aa2a]">boot sequence running...</p>
          {bootLines.map((line, index) => (
            <p
              key={line}
              className="text-sm md:text-base"
              style={{
                animation: `fade-up 0.4s ease ${index * 0.12}s both`,
              }}
            >
              <span className="text-[#00aa2a]">&gt;</span> {line}
            </p>
          ))}
          <p
            className="pt-4 text-sm md:text-base"
            style={{ animation: "fade-up 0.4s ease 1.2s both" }}
          >
            <span className="text-[#00aa2a]">&gt;</span> SYSTEM READY — press
            any key to continue
            <span className="crt-blink">█</span>
          </p>
        </div>
      </div>
      <button
        type="button"
        aria-label="Continue to portfolio"
        className="absolute inset-0 cursor-pointer opacity-0"
        onClick={onComplete}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onComplete();
          }
        }}
      />
    </div>
  );
}
