import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Check, ArrowRight, Lightbulb, FileText, Camera, Video, Film } from "lucide-react";
import higgsfieldInterface from "@/assets/higgsfield-interface.png";

const benefits = [
  "Стабильный результат",
  "Контроль деталей",
  "Фото + видео в одном пайплайне",
  "Подходит для коммерческих креативов",
  "Не «игрушка», а рабочий инструмент",
  "Очень много своих крутых фишек",
];

const pipelineSteps = [
  { icon: Lightbulb, label: "Идея" },
  { icon: FileText, label: "Текст" },
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
                    <div className="w-6 h-6 rounded-full bg-[#dffb24]/20 flex items-center justify-center flex-shrink-0 border border-[#dffb24]/30">
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
              <div className="p-8 rounded-xl bg-[#dffb24]/10 border-2 border-[#dffb24] transition-all duration-300 hover:shadow-[0_0_40px_rgba(223,251,36,0.4)]">
                <h3 className="text-lg font-semibold mb-6 text-center">Пайплайн создания креатива</h3>
                
                <div className="flex items-center justify-center gap-2 md:gap-4">
                  {pipelineSteps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white flex items-center justify-center border border-[#dffb24]/30">
                          <step.icon size={22} strokeWidth={2} className="text-[#dffb24]" />
                        </div>
                        <span className="text-xs md:text-sm font-medium">{step.label}</span>
                      </div>
                      {index < pipelineSteps.length - 1 && (
                        <ArrowRight size={18} className="mx-1 md:mx-2 text-foreground flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Interface preview */}
              <div className="p-4 rounded-xl bg-[#dffb24]/10 border-2 border-[#dffb24] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(223,251,36,0.4)]">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={higgsfieldInterface} 
                    alt="Интерфейс платформы Higgsfield" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
