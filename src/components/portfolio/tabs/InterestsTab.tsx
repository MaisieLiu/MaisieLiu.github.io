import { PHOTOS } from "@/data/photos";
import { Camera, MapPin } from "lucide-react";

const InterestsTab = () => {
  return (
    <div className="space-y-12">
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
