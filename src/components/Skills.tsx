import { skills } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

const categories = [
  { key: "programming", label: "Programming Languages", prefix: "01" },
  { key: "frameworks", label: "Frameworks & Libraries", prefix: "02" },
  { key: "tools", label: "Tools & Platforms", prefix: "03" },
  { key: "soft", label: "Soft Skills", prefix: "04" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="-- SKILLS.EXE ------------------------------------------------"
          title="SKILLS.EXE"
          subtitle="Technical stack from coursework, projects, and self-directed learning."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map(({ key, label, prefix }) => (
            <div key={key} className="terminal-border p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-['VT323'] text-2xl text-[#ff66b2]">
                  [{prefix}]
                </span>
                <h3 className="text-2xl md:text-3xl">{label.toUpperCase()}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
