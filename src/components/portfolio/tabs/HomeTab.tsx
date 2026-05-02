import { motion } from "framer-motion";
import { STICKERS, Sticker } from "@/data/stickers";
import { RECENT_PROJECTS } from "@/data/projects";
import ProjectCard from "../ProjectCard";

const tintBg: Record<Sticker["tint"], string> = {
  mustard: "bg-mustard/30 border-mustard",
  sage: "bg-sage/30 border-sage",
  terracotta: "bg-terracotta/25 border-terracotta",
  "dusty-pink": "bg-dusty-pink/40 border-dusty-pink",
  sky: "bg-sky/30 border-sky",
};

const StickerBubble = ({ s, i }: { s: Sticker; i: number }) => {
  const fromLeft = s.left < 50;
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: fromLeft ? -120 : 120,
        y: -40,
        rotate: s.rotate + (fromLeft ? -25 : 25),
        scale: 0.6,
      }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: s.rotate, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 14,
        delay: 0.15 + i * 0.08,
      }}
      whileHover={{ rotate: 0, scale: 1.1, transition: { duration: 0.2 } }}
      className="absolute select-none"
      style={{ top: `${s.top}%`, left: `${s.left}%` }}
    >
      {s.src ? (
        <img
          src={s.src}
          alt={s.label}
          className="h-24 sm:h-28 w-auto object-contain drop-shadow-md pointer-events-auto"
        />
      ) : (
        <div
          className={`h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-dashed flex items-center justify-center text-3xl sm:text-4xl shadow-md ${tintBg[s.tint]}`}
          aria-label={s.label}
          title={s.label}
        >
          {s.emoji ?? "✨"}
        </div>
      )}
    </motion.div>
  );
};

const HomeTab = () => {
  return (
    <div className="space-y-12">
      {/* Sticker collage */}
      <section
        aria-label="About-me sticker collage"
        className="relative mx-auto w-full h-[480px] sm:h-[540px] rounded-3xl border-2 border-dashed border-border bg-card/60 overflow-hidden"
      >
        <span className="washi-tape -top-2 left-8 -rotate-3" />
        <span className="washi-tape -top-2 right-12 rotate-6" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <h2 className="font-hand text-3xl sm:text-4xl text-foreground">
            A few of my favorite things
          </h2>
          <p className="font-note text-muted-foreground mt-2 max-w-md">
            Boba, matcha, food, swimming, biking, and reading.
            Hover the stickers — they like attention. ✨
          </p>
        </div>

        {STICKERS.map((s, i) => (
          <StickerBubble key={s.label} s={s} i={i} />
        ))}
      </section>

      {/* Recent projects */}
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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RECENT_PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeTab;
