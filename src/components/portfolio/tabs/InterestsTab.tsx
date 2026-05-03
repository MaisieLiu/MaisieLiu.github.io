import { motion } from "framer-motion";
import { PHOTOS } from "@/data/photos";
import { STICKERS, Sticker } from "@/data/stickers";
import { Camera, MapPin } from "lucide-react";

const tintBg: Record<Sticker["tint"], string> = {
  mustard:      "bg-mustard/30 border-mustard",
  sage:         "bg-sage/30 border-sage",
  terracotta:   "bg-terracotta/25 border-terracotta",
  "dusty-pink": "bg-dusty-pink/40 border-dusty-pink",
  sky:          "bg-sky/30 border-sky",
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

const InterestsTab = () => {
  return (
    <div className="space-y-12">

      {/* Sticker collage */}
      <section
        aria-label="About-me sticker collage"
        className="relative mx-auto w-full h-[480px] sm:h-[540px] rounded-3xl border-2 border-dashed border-border bg-card/60 overflow-hidden"
      >
        <span className="washi-tape -top-2 left-8 -rotate-3" aria-hidden />
        <span className="washi-tape -top-2 right-12 rotate-6" aria-hidden />

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

      {/* Bio */}
      <section className="paper-card relative max-w-3xl mx-auto">
        <span className="washi-tape -top-3 right-10 rotate-3" aria-hidden />
        <h2 className="font-hand text-4xl text-foreground">Off the clock 📓</h2>
        <p className="mt-4 font-note text-lg text-foreground/90 leading-relaxed">
          I love to read, travel, and café-hop — and lately I've been very into photography!
        </p>
        <p className="mt-3 font-note text-lg text-foreground/90 leading-relaxed">
          One day I want to build an interactive café-hopping map with photos right here.
          For now, please enjoy the photos I've taken with my{" "}
          <span className="font-bold text-terracotta">Sony ZV-E10 II</span>.
        </p>
      </section>

      {/* Future cafe map placeholder */}
      <section
        aria-label="Future café map"
        className="relative max-w-3xl mx-auto rounded-3xl border-2 border-dashed border-border bg-card/60 p-8 text-center"
      >
        <MapPin className="h-8 w-8 mx-auto text-terracotta" />
        <h3 className="font-hand text-3xl mt-2">Café-hopping map</h3>
        <p className="font-note text-muted-foreground mt-1">
          Coming soon — an interactive map of every café worth visiting. ☕
        </p>
      </section>

      {/* Photo grid */}
      <section aria-labelledby="photos">
        <h2 id="photos" className="font-hand text-4xl sm:text-5xl text-center">
          <span className="dashed-underline">Through my lens</span>
        </h2>

        <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3">
          {(PHOTOS.length > 0 ? PHOTOS : Array.from({ length: 6 })).map((p, i) => {
            const photo = PHOTOS[i];
            return (
              <figure
                key={i}
                className="relative aspect-square rounded-2xl border-2 border-dashed border-border bg-card/60 overflow-hidden flex items-center justify-center"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1.5}deg)` }}
              >
                <span className="washi-tape -top-2 left-1/2 -translate-x-1/2" aria-hidden />
                {photo?.src ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-center px-3">
                    <Camera className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p className="font-note text-sm text-muted-foreground mt-1">
                      Photo coming soon
                    </p>
                  </div>
                )}
              </figure>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default InterestsTab;
