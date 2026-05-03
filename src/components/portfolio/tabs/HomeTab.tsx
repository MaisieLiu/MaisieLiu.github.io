import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RECENT_PROJECTS } from "@/data/projects";
import { STICKERS, Sticker } from "@/data/stickers";
import me from "@/assets/stickers/me.png";

const SKILLS = {
  Languages:  ["SQL", "Python"],
  Databases:  ["Snowflake", "BigQuery", "PostgreSQL", "MySQL", "Databricks", "AWS"],
  "BI Tools": ["Tableau", "Power BI", "Looker", "Cognos BI", "Domo", "Shiny"],
  Tech:       ["Jupyter", "GitHub", "Excel", "Google Suite"],
};

const skillColors: Record<string, { bg: string; text: string }> = {
  Languages:  { bg: "#FAEEDA", text: "#633806" },
  Databases:  { bg: "#E1F5EE", text: "#085041" },
  "BI Tools": { bg: "#EEEDFE", text: "#3C3489" },
  Tech:       { bg: "#F1EFE8", text: "#444441" },
};

const categoryClass: Record<string, string> = {
  "Vibe Coding": "bg-cat-vibe/20 text-cat-vibe border-cat-vibe/40",
  "Data Science": "bg-cat-data/20 text-cat-data border-cat-data/40",
  "Project Management": "bg-cat-pm/20 text-cat-pm border-cat-pm/40",
};

const learnMoreColor: Record<string, string> = {
  "Vibe Coding": "text-cat-vibe",
  "Data Science": "text-cat-data",
  "Project Management": "text-cat-pm",
};

const decorativeStickers = [
  STICKERS.find((s) => s.label === "Boba"),
  STICKERS.find((s) => s.label === "Matcha"),
  STICKERS.find((s) => s.label === "Camera"),
  STICKERS.find((s) => s.label === "Read"),
].filter(Boolean) as Sticker[];

const tintBubble: Record<Sticker["tint"], string> = {
  mustard:      "bg-mustard/30 border-mustard",
  sage:         "bg-sage/30 border-sage",
  terracotta:   "bg-terracotta/25 border-terracotta",
  "dusty-pink": "bg-dusty-pink/40 border-dusty-pink",
  sky:          "bg-sky/30 border-sky",
};

const dataProjects = RECENT_PROJECTS.filter(
  (p) => p.category === "Data Science"
);
const vibeProjects = RECENT_PROJECTS.filter(
  (p) => p.category === "Vibe Coding"
);

const MiniSticker = ({ s, style }: { s: Sticker; style: React.CSSProperties }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: (s.rotate ?? 0) + 20 }}
    animate={{ opacity: 1, scale: 1, rotate: s.rotate ?? 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.6 }}
    whileHover={{ scale: 1.2, rotate: 0 }}
    style={style}
    className="absolute pointer-events-auto select-none"
  >
    {s.src ? (
      <img src={s.src} alt={s.label} className="h-12 w-auto object-contain" />
    ) : (
      <div
        className={`h-10 w-10 rounded-full border-2 border-dashed flex items-center justify-center text-xl shadow-sm ${tintBubble[s.tint]}`}
        title={s.label}
      >
        {s.emoji ?? "✨"}
      </div>
    )}
  </motion.div>
);

const HomeTab = () => {
  return (
    <div className="space-y-10">

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="paper-card relative max-w-3xl mx-auto"
      >
        <span className="washi-tape -top-3 left-10 -rotate-2" aria-hidden />
        <h2 className="font-hand text-3xl text-foreground mb-4">Skills</h2>
        <div className="space-y-3">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="flex flex-wrap items-center gap-2">
              <span className="font-note text-xs text-muted-foreground w-20 shrink-0">
                {category}
              </span>
              {items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: skillColors[category].bg,
                    color: skillColors[category].text,
                  }}
                  className="rounded-full px-3 py-0.5 text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Recent Projects */}
      <section aria-labelledby="recent-projects">
        <h2
          id="recent-projects"
          className="font-hand text-4xl sm:text-5xl text-center"
        >
          <span className="dashed-underline">Recent Projects</span>
        </h2>
        <p className="font-note text-center text-muted-foreground mt-2">
          Stuff I've been tinkering with lately.
        </p>

        {/* Three-column layout: Data Science | Me | Vibe Coding */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_80px_1fr] gap-6 items-start max-w-4xl mx-auto">

          {/* Data Science column */}
          <div className="space-y-4">
            <p className="font-note text-xs font-semibold text-cat-data uppercase tracking-widest text-center">
              Data Science
            </p>
            {dataProjects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="paper-card relative"
              >
                {p.images && p.images.length > 0 && (
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-28 object-cover rounded-lg mb-3"
                  />
                )}
                <span
                  className={`inline-block rounded-full border px-2 py-0.5 text-xs font-semibold ${categoryClass[p.category]}`}
                >
                  {p.category}
                </span>
                <h3 className="font-hand text-xl mt-2 text-foreground leading-tight">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-3 flex gap-3 flex-wrap">
                  {p.id && p.bullets && p.bullets.length > 0 && (
                    <Link
                      to={`/work/${p.id}`}
                      className={`text-xs font-semibold hover:underline ${learnMoreColor[p.category]}`}
                    >
                      Learn more →
                    </Link>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-muted-foreground hover:underline"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Center — Me sticker with dashed lines */}
          <div className="hidden sm:flex flex-col items-center justify-start pt-8 gap-0">
            <div
              className="w-px flex-none"
              style={{
                height: "48px",
                borderLeft: "1.5px dashed hsl(var(--border))",
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.3 }}
              whileHover={{ scale: 1.08 }}
              className="relative"
            >
              <img
                src={me}
                alt="Maisie"
                className="h-16 w-16 rounded-full object-cover border-4 border-dashed border-terracotta bg-dusty-pink/20"
                style={{ rotate: "3deg" }}
              />
            </motion.div>
            <div
              className="w-px flex-none"
              style={{
                height: "48px",
                borderLeft: "1.5px dashed hsl(var(--border))",
              }}
            />
          </div>

          {/* Vibe Coding column */}
          <div className="space-y-4">
            <p className="font-note text-xs font-semibold text-cat-vibe uppercase tracking-widest text-center">
              Vibe Coding
            </p>
            {vibeProjects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="paper-card relative"
              >
                {p.images && p.images.length > 0 && (
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-28 object-cover rounded-lg mb-3"
                  />
                )}
                <span
                  className={`inline-block rounded-full border px-2 py-0.5 text-xs font-semibold ${categoryClass[p.category]}`}
                >
                  {p.category}
                </span>
                <h3 className="font-hand text-xl mt-2 text-foreground leading-tight">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-3 flex gap-3 flex-wrap">
                  {p.id && p.bullets && p.bullets.length > 0 && (
                    <Link
                      to={`/work/${p.id}`}
                      className={`text-xs font-semibold hover:underline ${learnMoreColor[p.category]}`}
                    >
                      Learn more →
                    </Link>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-muted-foreground hover:underline"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

        </div>

        {/* Floating mini stickers */}
        <div className="relative h-0">
          {decorativeStickers.map((s, i) => {
            const positions = [
              { top: "-180px", left: "-12px" },
              { top: "-80px", right: "-12px" },
              { top: "-320px", right: "8px" },
              { bottom: "20px", left: "8px" },
            ];
            return (
              <MiniSticker
                key={s.label}
                s={s}
                style={positions[i] ?? { top: 0, left: 0 }}
              />
            );
          })}
        </div>

        {/* Link to Work tab */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="font-note text-sm text-muted-foreground">
            See all projects on the{" "}
            <span className="font-semibold text-foreground">Work</span> tab ✦
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeTab;
