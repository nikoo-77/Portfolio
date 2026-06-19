export function CRTOverlay() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, var(--scanline) 2px, var(--scanline) 4px)",
          opacity: 0.35,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[99]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 right-0 top-0 z-[101] h-24 opacity-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,213,79,0.12), transparent)",
          animation: "scan 8s linear infinite",
        }}
      />
    </>
  );
}
