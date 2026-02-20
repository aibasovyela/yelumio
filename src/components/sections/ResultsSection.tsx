import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import slide01 from "@/assets/carousel/slide-01.jpg";
import slide02 from "@/assets/carousel/slide-02.jpg";
import slide03 from "@/assets/carousel/slide-03.jpg";
import slide04 from "@/assets/carousel/slide-04.jpg";
import slide05 from "@/assets/carousel/slide-05.jpg";
import slide06 from "@/assets/carousel/slide-06.jpg";
import slide07 from "@/assets/carousel/slide-07.jpg";
import slide08 from "@/assets/carousel/slide-08.jpg";
import slide09 from "@/assets/carousel/slide-09.jpg";
import slide10 from "@/assets/carousel/slide-10.jpg";

const slides = [
  { src: slide01, label: "Генерация изображений" },
  { src: slide02, label: "Создание видео" },
  { src: slide03, label: "AI-музыка и звук" },
  { src: slide04, label: "Копирайтинг с ИИ" },
  { src: slide05, label: "Анимация персонажей" },
  { src: slide06, label: "Ретушь фото" },
  { src: slide07, label: "3D-моделирование" },
  { src: slide08, label: "Клонирование голоса" },
  { src: slide09, label: "Автоматизация процессов" },
  { src: slide10, label: "Дизайн презентаций" },
];

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
              10 ключевых навыков, которые вы освоите на курсе
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            {/* Carousel */}
            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
              <div className="flex gap-4">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="flex-none w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px]"
                  >
                    <div className="glass-card overflow-hidden group cursor-pointer">
                      <div className="aspect-[9/16] relative overflow-hidden">
                        <img
                          src={slide.src}
                          alt={slide.label}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Gradient overlay with label */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                          <span className="text-white font-semibold text-sm md:text-base">
                            {slide.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
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

            {/* Dots */}
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
