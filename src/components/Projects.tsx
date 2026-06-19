import { projects } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="-- SELECTED_WORK ---------------------------------------------"
          title="SELECTED_WORK"
          subtitle={`${projects.length} PROJECTS — SORTED BY IMPACT DESC`}
        />

        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-[#00aa2a]">{project.id}</p>
                  <h3 className="mt-1 text-3xl md:text-4xl">{project.name}</h3>
                  <p className="text-sm text-[#00aa2a]">{project.subtitle}</p>
                </div>
                <div className="text-right">
                  <p className="font-['VT323'] text-2xl">{project.year}</p>
                  <p className="text-xs text-[#ff66b2]">{project.status}</p>
                </div>
              </div>

              <p className="mb-4 max-w-3xl text-sm leading-relaxed md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="skill-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
