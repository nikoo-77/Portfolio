import { education, profile } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="-- ACHIEVEMENTS -----------------------------------------------"
          title="ACHIEVEMENTS"
          subtitle="Completed milestones and earned certifications."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {education.map((entry) => (
              <div key={entry.school} className="terminal-border p-5">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🏆</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#ffeb3b]">{entry.school}</h3>
                    </div>
                    <p className="text-xs text-[#ffc107] mt-1">{entry.degree}</p>
                  </div>
                  <span className="text-xs text-[#ffc107] bg-[rgba(255,235,59,0.1)] px-2 py-1">{entry.period}</span>
                </div>
                <div className="pt-3 border-t border-[rgba(255,235,59,0.15)]">
                  <p className="text-xs text-[#ffeb3b]">✓ UNLOCKED</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="terminal-border p-5">
              <p className="mb-3 text-sm font-bold text-[#ffeb3b]">
                <span className="text-[#ffc107]">🗣</span> LANGUAGE PROFICIENCY
              </p>
              <ul className="space-y-2 text-sm">
                {profile.languages.map((language) => (
                  <li key={language} className="flex items-center justify-between">
                    <span className="text-[#ffc107]">▸</span>
                    <span className="flex-1 ml-2">{language}</span>
                    <div className="w-16 h-2 bg-black border border-[rgba(255,235,59,0.2)]">
                      <div className="h-full bg-[#ffeb3b]" style={{width: "85%"}} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="terminal-border p-5">
              <p className="mb-3 text-sm font-bold text-[#ffeb3b]">
                <span className="text-[#ffc107]">📊</span> STATUS
              </p>
              <p className="text-xs text-[#ffc107] leading-relaxed">
                Seeking opportunities to apply and expand technical skills in a real-world environment — internships, collaborations, and project-based work welcome.
              </p>
              <p className="mt-2 text-xs text-[#ffeb3b]">► AVAILABILITY: OPEN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
