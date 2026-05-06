import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

const categoryClass: Record<Project["category"], string> = {
  "Vibe Coding": "bg-cat-vibe/20 text-cat-vibe border-cat-vibe/40",
  "Data Science": "bg-cat-data/20 text-cat-data border-cat-data/40",
  "Project Management": "bg-cat-pm/20 text-cat-pm border-cat-pm/40",
  "Business Intelligence": "bg-cat-bi/20 text-cat-bi border-cat-bi/40",
};

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  const tilt = index % 2 === 0 ? -1.5 : 1.5;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: tilt }}
      whileHover={{ rotate: 0, y: -4 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      className="paper-card relative flex flex-col"
    >
      <span className="washi-tape -top-3 left-1/2 -translate-x-1/2" aria-hidden />

      {/* Preview image */}
      {project.images && project.images.length > 0 && (
        <img
          src={project.images[0]}
          alt={`${project.title} preview`}
          className="w-full h-36 object-cover rounded-lg mb-3"
        />
      )}

      {/* Category pill */}
      <span
        className={`inline-block self-start rounded-full border px-3 py-0.5 text-xs font-semibold ${categoryClass[project.category]}`}
      >
        {project.category}
      </span>

      {/* Title */}
      <h3 className="font-hand text-2xl mt-3 text-foreground leading-tight">
        {project.title}
      </h3>

      {/* Year */}
      <p className="font-note text-xs text-muted-foreground mt-1">{project.year}</p>

      {/* Description */}
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Footer links */}
      <div className="mt-4 flex items-center gap-4 flex-wrap">
        {/* Detail page link — only show if there are bullets or images to display */}
        {(project.bullets.length > 0 || (project.images && project.images.length > 0)) && (
          <Link
            to={`/work/${project.id}`}
            className="text-sm font-semibold text-primary hover:underline"
          >
            Learn more →
          </Link>
        )}

        {/* External link (GitHub etc.) */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-muted-foreground hover:underline"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
