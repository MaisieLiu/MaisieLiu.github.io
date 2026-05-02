import { WORK_PROJECTS } from "@/data/projects";
import ProjectCard from "../ProjectCard";

const WorkTab = () => {
  return (
    <div className="space-y-8">
      <header className="text-center max-w-2xl mx-auto">
        <h2 className="font-hand text-4xl sm:text-5xl">
          <span className="dashed-underline">Projects I've worked on</span>
        </h2>
        <p className="font-note text-muted-foreground mt-3 text-lg">
          A growing scrapbook of past projects across data science, analytics, and ops.
        </p>
      </header>

      {WORK_PROJECTS.length === 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <article
              key={i}
              className="paper-card relative border-dashed bg-card/50 text-center"
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1.5}deg)` }}
            >
              <span className="washi-tape -top-3 left-1/2 -translate-x-1/2" aria-hidden />
              <div className="font-hand text-2xl text-muted-foreground mt-2">
                Coming soon ✨
              </div>
              <p className="font-note text-sm text-muted-foreground mt-2">
                Tape a project here — edit{" "}
                <code className="text-xs bg-secondary rounded px-1 py-0.5">
                  src/data/projects.ts
                </code>
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORK_PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkTab;
