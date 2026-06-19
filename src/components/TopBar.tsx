import { profile } from "../data/portfolio";

export function TopBar() {
  const time = new Date().toLocaleTimeString("en-PH", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: profile.timezone,
  });

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,255,65,0.2)] bg-[rgba(10,10,10,0.92)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs md:text-sm">
        <div className="flex items-center gap-3">
          <span className="glow-text font-['VT323'] text-xl tracking-widest">
            {profile.handle.toUpperCase()}
          </span>
          <span className="hidden text-[#00aa2a] sm:inline">█ ONLINE</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {[
            ["#skills", "SKILLS"],
            ["#projects", "PROJECTS"],
            ["#education", "EDUCATION"],
            ["#contact", "CONTACT"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[#00aa2a] transition hover:text-[#00ff41] hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]"
            >
              {label}
            </a>
          ))}
        </nav>
        <span className="text-[#00aa2a]">{time} PHT</span>
      </div>
    </header>
  );
}
