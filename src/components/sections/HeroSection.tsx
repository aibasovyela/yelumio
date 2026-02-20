import { ArrowRight, Play, Lightbulb, Camera, Video, Music, Mic } from "lucide-react";
import { useState } from "react";
import { EnrollModal } from "@/components/EnrollModal";
import { CountdownTimer } from "@/components/CountdownTimer";
import authorPhoto from "@/assets/author-photo.png";

const COURSE_START = new Date("2026-03-10T10:00:00");

export const HeroSection = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 pt-24 pb-16 py-[30px] my-0 border-none border">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-base font-bold tracking-wide uppercase">Начало 10 марта</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-4xl">
                Зарабатывай на{" "}
                <span className="neon-underline">ИИ</span>
                {" "}с телефоном сидя дома
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Практический видеокурс про фото, видео, музыку и речь.
                С домашними заданиями, проверкой работ и реальными кейсами.
              </p>

              <p className="text-sm text-muted-foreground/80 italic">
                Не просто нейросети — система, мышление и результат
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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

              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide font-medium">До старта осталось:</p>
                <CountdownTimer targetDate={COURSE_START} />
              </div>
            </div>

          {/* Right Visual - Author Photo */}
          <div className="relative flex items-center justify-center">
            {/* Decorative glow behind photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl" />
            </div>
            
            {/* Main photo container */}
            <div className="relative">
              {/* Wrapper for hover scale effect */}
              <div className="transition-transform duration-300 hover:scale-105 cursor-pointer">
                {/* Photo with stylish frame */}
                <div className="relative glass-card p-3 rounded-2xl animate-float-tilted">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={authorPhoto} 
                      alt="Автор курса" 
                      className="w-full max-w-[280px] md:max-w-xs h-auto object-cover rounded-xl"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Floating UI panels around photo */}
              <div className="absolute -top-4 -left-4 glass-card p-3 animate-float-fast-delayed shadow-lg">
                <div className="flex items-center gap-2">
                  <Lightbulb size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-medium">ИДЕЯ</span>
                </div>
              </div>

              <div className="absolute top-1/4 -right-6 glass-card p-3 animate-float-fast shadow-lg">
                <div className="flex items-center gap-2">
                  <Camera size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-medium">ФОТО</span>
                </div>
              </div>

              <div className="absolute bottom-1/3 -left-8 glass-card p-3 animate-float-fast-delayed shadow-lg">
                <div className="flex items-center gap-2">
                  <Video size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-medium">ВИДЕО</span>
                </div>
              </div>

              <div className="absolute -bottom-4 right-1/4 glass-card p-3 animate-float-fast shadow-lg">
                <div className="flex items-center gap-2">
                  <Music size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-medium">ЗВУК</span>
                </div>
              </div>

              <div className="absolute bottom-1/4 -right-4 glass-card p-3 animate-float-fast-delayed shadow-lg">
                <div className="flex items-center gap-2">
                  <Mic size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-medium">РЕЧЬ</span>
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