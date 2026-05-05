import { TIMELINE } from "@/data/timeline";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIALS } from "../Header";
import { FileText } from "lucide-react";

const AboutTab = () => {
  return (
    <div className="space-y-12">
      {/* Bio */}
      <section className="paper-card relative max-w-3xl mx-auto">
        <span className="washi-tape -top-3 left-10 -rotate-2" aria-hidden />
        <h2 className="font-hand text-4xl text-foreground">What Made Me Who I Am</h2>
        <div className="mt-4 space-y-4 font-note text-lg text-foreground/90 leading-relaxed">
          <p className="italic text-foreground/70">
            I believe that everybody is a book worth reading again and again. This is mine.
          </p>
          <p className="italic text-foreground/70">
            I believe that everybody is a book worth reading again and again. This is mine.
          </p>
          <p>
            With a passion for sports, I grew up as a triathlete, track and field, and swimming
            athlete. Starting later than most of my counterparts, I learned early that{" "}
            <span className="font-bold text-mustard">persistence on the right path matters more than a head start</span>.
            Every week I showed up, fixed what could be done better, and kept going, until I made
            it to the nationwide competition. That experience built something in me that no
            classroom could:{" "}
            <span className="font-bold text-mustard">resilience and self-discipline</span>.
          </p>
          <p>
            Academically, I was fortunate to attend one of the top three high schools in Taiwan.
            The curriculum was rigorous and demanding, and it pushed me to develop strong time
            management skills early, juggling multiple subjects and commitments without losing
            quality. More importantly, it shaped how I think. I learned to{" "}
            <span className="font-bold text-mustard">slow down, find the key information, think thoroughly, and then act</span>.
            That deliberate approach has followed me into every complex problem I have faced since.
            The school was also known for a{" "}
            <span className="font-bold text-mustard">"work hard, play hard"</span>{" "}
            culture, which I genuinely believe in. Giving your best effort matters, and so does
            stepping back to rest and recharge. That balance is what allows sustained high
            performance over the long run.
          </p>
          <p>
            Growing up across multiple countries made me{" "}
            <span className="font-bold text-mustard">open-minded and curious about the world</span>.
            Navigating different cultures, systems, and ways of thinking taught me that{" "}
            <span className="font-bold text-mustard">diverse perspectives spark better solutions</span>{" "}
            and shorten the path to getting there. I have always believed that{" "}
            <span className="font-bold text-mustard">two minds are better than one</span>,
            and that the best work happens when people with different backgrounds bring their
            full selves to the table.
          </p>
          <p>
            Sport taught me to persist. School taught me to think. The world taught me to listen.
            And that led to who I am today. 😄
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline">
        <h2 id="timeline" className="font-hand text-4xl sm:text-5xl text-center">
          <span className="dashed-underline">My Journey</span>
        </h2>
        <p className="font-note text-center text-muted-foreground mt-2">
          A zig-zag of education and work — so far.
        </p>

        <ol className="relative mt-10 max-w-3xl mx-auto">
          {/* center dashed line */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, hsl(var(--border)) 0 6px, transparent 6px 12px)",
            }}
          />

          {TIMELINE.map((item, i) => {
            const isLast = i === TIMELINE.length - 1;
            const isLeft = i % 2 === 0;
            const Icon = isLast
              ? Sparkles
              : item.kind === "education"
              ? GraduationCap
              : Briefcase;
            const dotColor =
              item.kind === "education" ? "bg-sage" : "bg-mustard";

            return (
              <motion.li
                key={`${item.years}-${item.title}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 mb-8"
              >
                {/* dot */}
                <span
                  className={`absolute left-4 sm:left-1/2 top-3 -translate-x-1/2 h-7 w-7 rounded-full border-4 border-background flex items-center justify-center text-card ${dotColor} ${
                    isLast ? "border-dashed bg-card !text-muted-foreground" : ""
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>

                {/* card */}
                <div
                  className={`paper-card ${
                    isLeft ? "sm:col-start-1" : "sm:col-start-2"
                  } ${isLast ? "border-dashed bg-card/60" : ""}`}
                >
                  <div className="text-xs font-semibold text-primary">
                    {item.years}
                  </div>
                  <div className="font-hand text-2xl mt-1 leading-tight">
                    {item.title}
                  </div>
                  {item.org && (
                    <div className="text-sm text-muted-foreground mt-0.5">
                      {item.org}
                    </div>
                  )}
                  {item.note && (
                    <p className="mt-2 text-sm text-foreground/80">{item.note}</p>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ol>

        {/* legend */}
        <div className="mt-4 flex justify-center gap-6 text-sm font-note text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-sage" /> Education
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-mustard" /> Work
          </span>
        </div>

        <div className="mt-8 text-center">
          <a
            href={SOCIALS.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-md hover:opacity-90 transition-opacity"
          >
            <FileText className="h-4 w-4" /> Download my resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutTab;
