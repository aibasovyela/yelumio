import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Layers, Zap, TrendingUp } from "lucide-react";

const reasons = [
  { icon: Layers, title: "Контент в масштабе", description: "Рост требует больше контента. ИИ позволяет масштабировать производство без роста бюджета и команды." },
  { icon: Zap, title: "Скорость — ваше преимущество", description: "Пока другие думают неделями, вы генерируете полноценные креативы за часы. ИИ ускоряет процесс в разы." },
  { icon: TrendingUp, title: "Инвестиция в будущее", description: "Те, кто осваивает ИИ сейчас — получают преимущество завтра. Навык, который будет только дорожать." },
];

export const WhyNowSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Лучшее время учить ИИ — сейчас
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Контент уже никогда не будет прежним. Те, кто адаптируется первым — выигрывают.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="space-y-6">
                <div className="aspect-[4/3] rounded-xl bg-secondary border border-border flex items-center justify-center p-8">
                  <div className="w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <reason.icon size={36} className="text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
