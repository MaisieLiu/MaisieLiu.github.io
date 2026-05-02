import { Github, Linkedin, Mail, FileText } from "lucide-react";

// Edit these in one place to update everywhere.
export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/hmliu48/",
  github: "https://github.com/MaisieLiu",
  email: "maisiehmliu@gmail.com",
  // Drop your resume.pdf into the /public folder and it'll be served from this URL.
  resume: "/HsiaoManLiu_Resume.pdf",
};

const Header = () => {
  return (
    <header className="text-center relative">
      <h1 className="font-hand text-5xl sm:text-6xl md:text-7xl text-foreground leading-tight">
        Welcome to <span className="text-primary">Maisie's Playground!</span>
      </h1>
      <p className="font-note mt-3 text-lg sm:text-xl text-muted-foreground">
        Data Scientist with curiosity to always try new things ✨
      </p>

      <nav
        aria-label="Social links"
        className="mt-5 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href={SOCIALS.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-4 w-4 text-sky" />
          LinkedIn
        </a>
        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4 text-foreground" />
          GitHub
        </a>
        <a
          href={`mailto:${SOCIALS.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
          aria-label="Email"
        >
          <Mail className="h-4 w-4 text-terracotta" />
          Email
        </a>
        <a
          href={SOCIALS.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
        >
          <FileText className="h-4 w-4" />
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
