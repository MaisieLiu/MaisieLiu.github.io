import { Project } from "@/data/projects";
import { motion } from "framer-motion";

const categoryClass: Record<Project["category"], string> = {
  "Vibe Coding": "bg-cat-vibe/20 text-cat-vibe border-cat-vibe/40",
  "Data Science": "bg-cat-data/20 text-cat-data border-cat-data/40",
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
      className="paper-card relative"
    >
      <span
        className="washi-tape -top-3 left-1/2 -translate-x-1/2"
        aria-hidden
      />
      <span
        className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${categoryClass[project.category]}`}
      >
        {project.category}
      </span>
      <h3 className="font-hand text-2xl mt-3 text-foreground leading-tight">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {project.description}
      </p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
        >
          See more →
        </a>
      )}
    </motion.article>
  );
};

export default ProjectCard;
