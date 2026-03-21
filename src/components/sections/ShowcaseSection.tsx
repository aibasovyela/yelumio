import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const videos = [
  "/carousel/showcase-01.mov",
  "/carousel/showcase-02.mov",
  "/carousel/showcase-03.mov",
];

export const ShowcaseSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  // Play/pause videos based on selection
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === selectedIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [selectedIndex]);

  return (
    <section className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Такие кадры вы сможете создавать<br />
              <span className="text-gradient">по окончанию курса</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {videos.map((src, index) => {
                  const isActive = index === selectedIndex;
                  return (
                    <div
                      key={index}
                      className="flex-none px-3 transition-all duration-500 flex justify-center"
                      style={{ flexBasis: "50%", minWidth: 0 }}
                    >
                      <div
                        className={`overflow-hidden rounded-2xl border transition-all duration-500 w-fit ${
                          isActive
                            ? "border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.15)] scale-100 opacity-100"
                            : "border-border scale-90 opacity-40 blur-[2px]"
                        }`}
                      >
                        <div className="h-[60vh] md:h-[70vh] aspect-[9/16] relative overflow-hidden bg-secondary">
                          <video
                            ref={(el) => { videoRefs.current[index] = el; }}
                            src={src}
                            className="w-full h-full object-cover"
                            loop
                            muted
                            playsInline
                            preload="metadata"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center shadow-lg transition-all hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center shadow-lg transition-all hover:bg-primary hover:text-primary-foreground"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary w-8"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
