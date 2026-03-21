import { ArrowRight, Play, Lightbulb, Camera, Video, Music, Mic } from "lucide-react";
import { useState } from "react";
import { EnrollModal } from "@/components/EnrollModal";

import authorPhoto from "@/assets/author-photo.png";
import yelumioLogo from "@/assets/yelumio-logo.png";

export const HeroSection = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Yelumio Logo */}
              <div>
                <img 
                  src={yelumioLogo} 
                  alt="Yelumio" 
                  className="h-14 md:h-18 w-auto object-contain"
                  loading="eager"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gradient">Поток 2</h2>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold tracking-widest uppercase text-primary">Начало 15 апреля</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15]">
                Крутые <span className="neon-underline">ИИ</span> креативы за 1 месяц.{" "}
                <span className="text-muted-foreground">От идеи до монтажа.</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Практический видеокурс про фото, видео, музыку и речь.
                С домашними заданиями, проверкой работ и реальными кейсами.
              </p>

              <p className="text-sm text-muted-foreground/60 italic font-light">
                Не просто нейросети — система, мышление и результат
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="btn-primary gap-2" onClick={() => setIsEnrollOpen(true)}>
                  Записаться на курс
                  <ArrowRight size={18} />
                </button>
                <button 
                  className="btn-secondary gap-2"
                  onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Play size={18} />
                  Смотреть программу
                </button>
              </div>
            </div>

            {/* Right Visual - Author Photo */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[100px]" />
              </div>
              
              <div className="relative">
                <div className="cursor-pointer">
                  <div className="relative p-3 rounded-2xl border border-border bg-card/50">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={authorPhoto} 
                        alt="Автор курса" 
                        className="w-full max-w-[280px] md:max-w-xs h-auto object-cover rounded-xl"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Floating panels */}
                <div className="absolute -top-4 -left-4 p-3 rounded-xl bg-card border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <Lightbulb size={18} className="text-primary" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-wide">ИДЕЯ</span>
                  </div>
                </div>

                <div className="absolute top-1/4 -right-6 p-3 rounded-xl bg-card border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <Camera size={18} className="text-primary" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-wide">ФОТО</span>
                  </div>
                </div>

                <div className="absolute bottom-1/3 -left-8 p-3 rounded-xl bg-card border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <Video size={18} className="text-primary" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-wide">ВИДЕО</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-1/4 p-3 rounded-xl bg-card border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <Music size={18} className="text-primary" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-wide">ЗВУК</span>
                  </div>
                </div>

                <div className="absolute bottom-1/4 -right-4 p-3 rounded-xl bg-card border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <Mic size={18} className="text-primary" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-wide">РЕЧЬ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnrollModal open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
    </>
  );
};
