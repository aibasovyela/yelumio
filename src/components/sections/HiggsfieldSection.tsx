import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Check, ArrowRight, Lightbulb, Camera, Video, Film } from "lucide-react";

const benefits = [
  "Стабильный результат",
  "Контроль деталей",
  "Фото + видео в одном пайплайне",
  "Подходит для коммерческих креативов",
  "Не «игрушка», а рабочий инструмент",
];

const pipelineSteps = [
  { icon: Lightbulb, label: "Идея" },
  { icon: Camera, label: "Фото" },
  { icon: Video, label: "Видео" },
  { icon: Film, label: "Монтаж" },
];

export const HiggsfieldSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Почему мы работаем через{" "}
                <span className="neon-underline">Higgsfield</span>
              </h2>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-foreground" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right visual - Pipeline */}
          <ScrollReveal direction="right" delay={200}>
            <div className="space-y-6">
              <GlassCard className="p-8">
                <h3 className="text-lg font-semibold mb-6 text-center">Пайплайн создания креатива</h3>
                
                <div className="flex items-center justify-between">
                  {pipelineSteps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center border border-primary/20">
                          <step.icon size={24} strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-medium">{step.label}</span>
                      </div>
                      {index < pipelineSteps.length - 1 && (
                        <ArrowRight size={20} className="mx-2 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Interface preview placeholder */}
              <GlassCard className="p-4">
                <div className="bg-foreground/5 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square rounded-lg bg-primary/10 border border-primary/20" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">Интерфейс платформы</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
