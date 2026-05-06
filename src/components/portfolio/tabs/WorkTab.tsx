import { useState } from "react";
import { WORK_PROJECTS, ProjectCategory } from "@/data/projects";
import ProjectCard from "../ProjectCard";

const FILTERS: { label: string; value: ProjectCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Data Science", value: "Data Science" },
  { label: "Vibe Coding", value: "Vibe Coding" },
  { label: "Project Management", value: "Project Management" },
];

const filterClass: Record<ProjectCategory, string> = {
  "Data Science":       "bg-cat-data/20 text-cat-data border-cat-data/40",
  "Vibe Coding":        "bg-cat-vibe/20 text-cat-vibe border-cat-vibe/40",
  "Project Management": "bg-cat-pm/20 text-cat-pm border-cat-pm/40",
};

const WorkTab = () => {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered =
    active === "All"
      ? WORK_PROJECTS
      : WORK_PROJECTS.filter((p) => p.category === active);

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

      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => {
          const isActive = active === f.value;
          const colorClass =
            f.value === "All"
              ? "bg-foreground/10 text-foreground border-foreground/20"
              : filterClass[f.value as ProjectCategory];
          return (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-full border px-4 py-1 text-sm font-semibold transition-all ${colorClass} ${
                isActive
                  ? "opacity-100 shadow-sm scale-105"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Project grid */}
      {filtered.length === 0 ? (
        <div className="text-center font-note text-muted-foreground py-12">
          No projects here yet ✨
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkTab;
