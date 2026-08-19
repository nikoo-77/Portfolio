import { projects } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

const getQuestDifficulty = (status: string) => {
  if (status.includes("PRODUCTION")) return "S-RANK";
  if (status.includes("ACTIVE")) return "A-RANK";
  return "ARCHIVE";
};

const getDifficultyColor = (difficulty: string) => {
  switch(difficulty) {
    case "S-RANK": return "text-red-400";
    case "A-RANK": return "text-yellow-400";
    default: return "text-gray-400";
  }
};

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="-- QUEST_LOG --------------------------------------------------"
          title="QUEST_LOG"
          subtitle={`${projects.length} QUESTS — RANKED BY DIFFICULTY`}
        />

        <div className="space-y-4">
          {projects.map((project) => {
            const difficulty = getQuestDifficulty(project.status);
            const diffColor = getDifficultyColor(difficulty);
            
            return (
              <article key={project.id} className="terminal-border p-5 hover:border-[rgba(255,235,59,0.4)]">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`font-['VT323'] text-lg ${diffColor}`}>[{difficulty}]</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#ffeb3b]">{project.name}</h3>
                    </div>
                    <p className="text-xs text-[#ffc107] mt-1">QUEST ID: {project.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-['VT323'] text-lg text-[#ffc107]">{project.year}</p>
                    <p className={`text-xs ${diffColor}`}>{difficulty}</p>
                  </div>
                </div>

                <p className="text-xs text-[#ffc107] mb-2">{project.subtitle}</p>
                {"role" in project ? (
                  <p className="mb-2 text-xs text-[#ffc107]">ROLE: {project.role}</p>
                ) : null}
                <p className="mb-3 max-w-3xl text-sm leading-relaxed text-[#ffeb3b]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="terminal-border px-2 py-1 text-xs bg-[rgba(255,235,59,0.05)]">
                      ⚙ {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-3 pt-3 border-t border-[rgba(255,235,59,0.15)] flex justify-between items-center">
                  <p className="text-xs text-[#ffc107]">✓ REWARDS: 500 EXP</p>
                  <span className="text-xs text-[#ffeb3b]">STATUS: {project.status}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
