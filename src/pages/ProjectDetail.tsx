import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { WORK_PROJECTS, Project } from "@/data/projects";

const categoryClass: Record<Project["category"], string> = {
  "Vibe Coding": "bg-cat-vibe/20 text-cat-vibe border-cat-vibe/40",
  "Data Science": "bg-cat-data/20 text-cat-data border-cat-data/40",
  "Project Management": "bg-cat-pm/20 text-cat-pm border-cat-pm/40",
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = WORK_PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
        <p className="font-hand text-4xl text-muted-foreground">Project not found 🔍</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 sm:px-8 max-w-3xl mx-auto">

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/?tab=work"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </motion.div>

      {/* Header card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="paper-card relative mb-8"
      >
        <span className="washi-tape -top-3 left-8 -rotate-2" aria-hidden />
        <span className="washi-tape -top-3 right-12 rotate-3" aria-hidden />

        <span
          className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${categoryClass[project.category]}`}
        >
          {project.category}
        </span>

        <h1 className="font-hand text-3xl sm:text-4xl mt-3 text-foreground leading-tight">
          {project.title}
        </h1>
        <p className="font-note text-sm text-muted-foreground mt-1">{project.year}</p>

        <p className="mt-4 text-base text-foreground/80 leading-relaxed font-note">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            <ExternalLink className="h-4 w-4" />
            View on GitHub
          </a>
        )}
      </motion.div>

      {/* Images */}
      {project.images && project.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {project.images.map((src, i) => (
            <div key={i} className="paper-card relative p-3">
              <span
                className="washi-tape -top-3"
                style={{ left: `${20 + i * 30}%` }}
                aria-hidden
              />
              <img
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full rounded-lg object-cover shadow-sm"
              />
            </div>
          ))}
        </motion.div>
      )}

      {/* My Role */}
      {project.bullets.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="paper-card relative"
        >
          <span className="washi-tape -top-3 left-1/2 -translate-x-1/2 rotate-1" aria-hidden />

          <h2 className="font-hand text-2xl text-foreground mb-4">
            <span className="dashed-underline">My Role</span>
          </h2>

          <ul className="space-y-4">
            {project.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
                className="flex gap-3 items-start"
              >
                <span className="mt-1 text-primary font-bold text-lg leading-none select-none">
                  ✦
                </span>
                <p className="font-note text-sm leading-relaxed text-foreground/80">
                  {bullet}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

    </div>
  );
};

export default ProjectDetail;
