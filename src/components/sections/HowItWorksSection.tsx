import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Play, Target, CheckSquare, MessageSquare, Trophy } from "lucide-react";

const steps = [
  {
    icon: Play,
    title: "Короткие видео",
    description: "6–10 минут на урок. Без воды, только практика.",
  },
  {
    icon: Target,
    title: "Практика",
    description: "Задание после каждого модуля с чётким ТЗ.",
  },
  {
    icon: CheckSquare,
    title: "Проверка работ",
    description: "Каждая работа получает обратную связь.",
  },
  {
    icon: MessageSquare,
    title: "Конкретные правки",
    description: "Не «молодец», а что именно улучшить.",
  },
  {
    icon: Trophy,
    title: "Итоговый кейс",
    description: "Финальный проект для портфолио.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Как проходит обучение
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Практический формат с фокусом на результат
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <GlassCard className="text-center space-y-4 h-full">
                <div className="icon-box mx-auto">
                  <step.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-secondary-foreground/80">{step.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
