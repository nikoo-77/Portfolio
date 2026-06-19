import { education, profile } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="-- ABOUT.TXT -------------------------------------------------"
          title="EDUCATION.TXT"
          subtitle="Academic background and language proficiency."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {education.map((entry) => (
              <div key={entry.school} className="terminal-border p-5">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl md:text-3xl">{entry.school}</h3>
                  <span className="text-xs text-[#00aa2a]">{entry.period}</span>
                </div>
                <p className="text-sm md:text-base">{entry.degree}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="terminal-border p-5">
              <p className="mb-3 text-sm">
                <span className="text-[#00aa2a]">$</span> cat ./languages.txt
              </p>
              <ul className="space-y-2 text-sm md:text-base">
                {profile.languages.map((language) => (
                  <li key={language}>
                    <span className="text-[#00aa2a]">&gt;</span> {language}
                  </li>
                ))}
              </ul>
            </div>

            <div className="terminal-border p-5">
              <p className="mb-3 text-sm">
                <span className="text-[#00aa2a]">$</span> ./availability.sh
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                Seeking opportunities to apply and expand technical skills in a
                real-world environment — internships, collaborations, and
                project-based work welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
