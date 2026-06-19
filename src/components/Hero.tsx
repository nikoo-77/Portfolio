import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="section-label">C:\PORTFOLIO\&gt; LOADING_{profile.firstName.toUpperCase()}</p>

          <div className="space-y-2">
            <h1 className="glow-text text-6xl leading-none md:text-8xl">
              {profile.firstName.toUpperCase()}
            </h1>
            <h1 className="glow-text text-5xl leading-none text-[#ff66b2] md:text-7xl">
              {profile.lastName.toUpperCase()}
            </h1>
          </div>

          <p className="text-lg text-[#d1a100] md:text-xl">{profile.title}</p>
          <p className="max-w-xl text-sm leading-relaxed md:text-base">
            {profile.tagline} {profile.subtitle}
          </p>

          <div className="terminal-border p-4 text-sm md:text-base">
            <p>
              <span className="text-[#d1a100]">$</span> whoami
            </p>
            <p className="mt-2 text-[#d1a100]">{profile.summary}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              [ VIEW PROJECTS ]
            </a>
            <a href={profile.resumePath} download className="btn-secondary">
              [ DOWNLOAD RESUME ]
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="terminal-border overflow-hidden">
            <div className="titlebar">
              <span className="titlebar-dot titlebar-dot--pink" />
              <span className="titlebar-dot titlebar-dot--yellow" />
              <span className="titlebar-dot titlebar-dot--green" />
              <span>{profile.handle} — bash — 80x24</span>
            </div>
            <div className="space-y-3 p-4 text-xs md:text-sm">
              <p>
                <span className="text-[#d1a100]">$</span> cat ./stack.txt
              </p>
              <p>Next.js • React • TypeScript</p>
              <p>Supabase • PostgreSQL • Tailwind</p>
              <p>
                <span className="text-[#d1a100]">$</span> echo $LOCATION
              </p>
              <p>{profile.location}</p>
              <p>
                <span className="text-[#d1a100]">$</span> ping gelo.lajera@gmail.com
              </p>
              <p className="text-[#d1a100]">PING OK — inbox reachable</p>
              <p>
                <span className="text-[#d1a100]">$</span> ./status.sh
                <span className="crt-blink">█</span>
              </p>
            </div>
          </div>

          <div className="sticker sticker-pink absolute -right-2 top-8 rotate-3">
            Full-Stack &amp; C++
          </div>
          <div className="sticker sticker-green absolute -left-3 bottom-16 -rotate-2">
            CIT-U BS CpE
          </div>
          <div className="sticker sticker-cyan absolute -right-4 bottom-4 rotate-1">
            Multi-tenant RLS
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
              <p className="text-xs text-[#d1a100]">{greeting.lang}</p>
              <p className="font-['VT323'] text-2xl glow-text">{greeting.native}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
