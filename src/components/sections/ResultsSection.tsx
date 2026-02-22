import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

import video01 from "@/assets/carousel/video-01.mp4";
import slide02 from "@/assets/carousel/slide-02.jpg";
import video02 from "@/assets/carousel/video-02.mp4";
import slide04 from "@/assets/carousel/slide-04.jpg";
import video03 from "@/assets/carousel/video-03.mp4";
import slide06 from "@/assets/carousel/slide-06.jpg";
import video04 from "@/assets/carousel/video-04.mp4";
import slide08 from "@/assets/carousel/slide-08.jpg";

type SlideItem = { type: "video"; src: string } | { type: "image"; src: string };

const slides: SlideItem[] = [
  { type: "video", src: video01 },
  { type: "image", src: slide02 },
  { type: "video", src: video02 },
  { type: "image", src: slide04 },
  { type: "video", src: video03 },
  { type: "image", src: slide06 },
  { type: "video", src: video04 },
  { type: "image", src: slide08 },
];

const LazyVideo = ({ src }: { src: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={isVisible ? src : undefined}
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
    />
  );
};

export const ResultsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding bg-primary/5">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Чему вы научитесь?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры работ, которые вы сможете создавать после курса
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
              <div className="flex gap-4">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="flex-none w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px]"
                  >
                    <div className="glass-card overflow-hidden group cursor-pointer bg-muted/20">
                      <div className="aspect-[9/16] relative overflow-hidden">
                        {slide.type === "video" ? (
                          <LazyVideo src={slide.src} />
                        ) : (
                          <img
                            src={slide.src}
                            alt={`Пример работы ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading={index < 4 ? "eager" : "lazy"}
                            decoding="async"
                            onLoad={(e) => {
                              e.currentTarget.style.opacity = "1";
                            }}
                            style={{ opacity: 0, transition: "opacity 0.3s ease-in-out" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center shadow-lg transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center shadow-lg transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary w-6"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
