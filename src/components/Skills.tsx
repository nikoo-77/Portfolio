import { skills } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

const abilityTiers = [
  { key: "programming", icon: "⚔", label: "WEAPON SKILLS" },
  { key: "frameworks", icon: "🛡", label: "ARMOR ENCHANTS" },
  { key: "tools", icon: "🔧", label: "EQUIPMENT" },
  { key: "soft", icon: "💫", label: "SPECIAL ABILITIES" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="-- ABILITY_TREE -----------------------------------------------"
          title="ABILITY_TREE"
          subtitle="Unlock and master your skills through training and experience."
        />

        <div className="space-y-6">
          {abilityTiers.map(({ key, icon, label }) => (
            <div key={key} className="terminal-border p-5">
              <div className="mb-4 flex items-center gap-3 pb-3 border-b border-[rgba(255,235,59,0.2)]">
                <span className="text-3xl">{icon}</span>
                <div>
                  <h3 className="font-['VT323'] text-2xl text-[#ffeb3b] uppercase">{label}</h3>
                  <p className="text-xs text-[#ffc107]">Tier {abilityTiers.findIndex(t => t.key === key) + 1}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {skills[key].map((skill, idx) => (
                  <div key={skill} className="terminal-border p-3 text-center">
                    <p className="text-xs text-[#ffc107] mb-1">LVL {idx + 1}</p>
                    <p className="text-sm font-bold text-[#ffeb3b]">{skill}</p>
                    <div className="mt-2 h-1 bg-black border border-[rgba(255,235,59,0.2)]">
                      <div className="h-full bg-[#ffeb3b]" style={{width: `${(idx + 1) * (100 / skills[key].length)}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
