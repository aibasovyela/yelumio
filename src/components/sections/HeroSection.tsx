import { ArrowRight, Play, Lightbulb, Camera, Video, Music, Mic } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 stagger-children">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium">Старт нового потока</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Создавай креативы с помощью{" "}
              <span className="neon-underline">ИИ</span>: от идеи до готового видео
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Практический видеокурс про фото, видео, музыку и речь.
              С домашними заданиями, проверкой работ и реальными кейсами.
            </p>

            <p className="text-sm text-muted-foreground/80 italic">
              Не просто нейросети — система, мышление и результат
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary gap-2">
                Записаться на курс
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary gap-2">
                <Play size={18} />
                Смотреть программу
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main mockup container */}
            <div className="relative">
              {/* Laptop mockup */}
              <div className="glass-card p-4 animate-float">
                <div className="bg-foreground/5 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                  <div className="text-center space-y-3 relative z-10">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Play size={28} className="text-foreground ml-1" />
                    </div>
                    <p className="text-sm font-medium">Видео-урок</p>
                  </div>
                </div>
              </div>

              {/* Floating UI panels */}
              <div className="absolute -top-4 -left-4 glass-card p-3 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Lightbulb size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-medium">IDEA</span>
                </div>
              </div>

              <div className="absolute top-1/4 -right-6 glass-card p-3 animate-float">
                <div className="flex items-center gap-2">
                  <Camera size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-medium">PHOTO</span>
                </div>
              </div>

              <div className="absolute bottom-1/3 -left-8 glass-card p-3 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Video size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-medium">VIDEO</span>
                </div>
              </div>

              <div className="absolute -bottom-4 right-1/4 glass-card p-3 animate-float">
                <div className="flex items-center gap-2">
                  <Music size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-medium">SOUND</span>
                </div>
              </div>

              <div className="absolute bottom-1/4 -right-4 glass-card p-3 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Mic size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-xs font-medium">SPEECH</span>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="absolute -bottom-8 -left-12 w-32 glass-card p-2 animate-float-delayed">
                <div className="bg-foreground/5 rounded-lg aspect-[9/16] flex items-center justify-center">
                  <div className="text-center space-y-1">
                    <div className="w-6 h-6 mx-auto rounded bg-primary/20 flex items-center justify-center">
                      <Play size={12} className="text-foreground ml-0.5" />
                    </div>
                    <p className="text-[8px] font-medium">Чек-лист</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
