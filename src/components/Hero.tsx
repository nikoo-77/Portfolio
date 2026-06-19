import { profile } from "../data/portfolio";

export function Hero() {
  const stats = {
    level: 3,
    experience: 65,
    health: 100,
    mana: 85,
    strength: 18,
    intelligence: 19,
    dexterity: 16,
    wisdom: 17,
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="section-label">[▼] {profile.firstName.toUpperCase()} PROFILE</p>

          <div className="space-y-2">
            <h1 className="glow-text text-6xl leading-none md:text-8xl">
              {profile.firstName.toUpperCase()}
            </h1>
            <h1 className="glow-text text-5xl leading-none text-[#ff66b2] md:text-7xl">
              {profile.lastName.toUpperCase()}
            </h1>
          </div>

          <div className="terminal-border space-y-3 p-4">
            <div className="flex items-center justify-between text-sm">
              <span>LVL {stats.level}</span>
              <span className="text-[#ffeb3b]">{stats.experience}% EXP</span>
            </div>
            <div className="h-2 bg-black border border-[rgba(255,235,59,0.3)]">
              <div className="h-full bg-[#ffeb3b]" style={{width: `${stats.experience}%`}} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="terminal-border p-3 text-center">
              <p className="text-xs text-[#ffc107]">HP</p>
              <p className="font-['VT323'] text-2xl text-[#ffeb3b]">{stats.health}</p>
              <div className="mt-1 h-1 bg-black border border-[rgba(255,235,59,0.2)]">
                <div className="h-full bg-green-500" style={{width: `${stats.health}%`}} />
              </div>
            </div>
            <div className="terminal-border p-3 text-center">
              <p className="text-xs text-[#ffc107]">MANA</p>
              <p className="font-['VT323'] text-2xl text-[#ffeb3b]">{stats.mana}</p>
              <div className="mt-1 h-1 bg-black border border-[rgba(255,235,59,0.2)]">
                <div className="h-full bg-blue-500" style={{width: `${stats.mana}%`}} />
              </div>
            </div>
            <div className="terminal-border p-3 text-center">
              <p className="text-xs text-[#ffc107]">STR</p>
              <p className="font-['VT323'] text-2xl text-[#ffeb3b]">{stats.strength}</p>
            </div>
            <div className="terminal-border p-3 text-center">
              <p className="text-xs text-[#ffc107]">INT</p>
              <p className="font-['VT323'] text-2xl text-[#ffeb3b]">{stats.intelligence}</p>
            </div>
          </div>

          <p className="text-lg text-[#ffc107] md:text-xl">{profile.title}</p>
          <p className="max-w-xl text-sm leading-relaxed md:text-base">
            {profile.tagline} {profile.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              [ QUEST LOG ]
            </a>
            <a href={profile.resumePath} download className="btn-secondary">
              [ CHARACTER SHEET ]
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="terminal-border overflow-hidden">
            <div className="titlebar">
              <span className="titlebar-dot titlebar-dot--pink" />
              <span className="titlebar-dot titlebar-dot--yellow" />
              <span className="titlebar-dot titlebar-dot--green" />
              <span>LOADOUT — {profile.handle}</span>
            </div>
            <div className="space-y-3 p-4 text-xs md:text-sm">
              <p>
                <span className="text-[#ffc107]">⚔</span> MAIN SKILLS
              </p>
              <p>Next.js • React • TypeScript</p>
              <p>Supabase • PostgreSQL • Tailwind</p>
              <p>
                <span className="text-[#ffc107]">🛡</span> ARTIFACTS
              </p>
              <p>{profile.location}</p>
              <p>
                <span className="text-[#ffc107]">📡</span> CONTACT
              </p>
              <p className="text-[#ffc107]">ONLINE — Inbox Active</p>
              <p>
                <span className="text-[#ffc107]">⏱</span> STATUS
                <span className="crt-blink">█</span>
              </p>
            </div>
          </div>

          <div className="sticker sticker-pink absolute -right-2 top-8 rotate-3">
            Full-Stack
          </div>
          <div className="sticker sticker-green absolute -left-3 bottom-16 -rotate-2">
            CIT-U BS CpE
          </div>
          <div className="sticker sticker-cyan absolute -right-4 bottom-4 rotate-1">
            Multi-tenant
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <div className="flex flex-wrap gap-3">
          {profile.greetings.map((greeting) => (
            <div
              key={greeting.lang}
              className="terminal-border px-4 py-3 text-center"
            >
              <p className="text-xs text-[#ffc107]">{greeting.lang}</p>
              <p className="font-['VT323'] text-2xl glow-text">{greeting.native}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
