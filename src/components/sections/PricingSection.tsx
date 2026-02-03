import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Check, Star, Users, Video, FileText, MessageCircle, Zap } from "lucide-react";

const basePlan = {
  name: "Базовый",
  price: "70 000",
  currency: "₸",
  features: [
    { icon: Video, text: "Доступ ко всем 8 модулям" },
    { icon: Zap, text: "5–6 часов видео" },
    { icon: FileText, text: "Презентации и инструкции" },
    { icon: Check, text: "Домашние задания" },
    { icon: Check, text: "Проверка ДЗ" },
    { icon: MessageCircle, text: "Обратная связь по работам" },
  ],
};

const proPlan = {
  name: "PRO / Mentor",
  price: "120 000",
  currency: "₸",
  highlight: "Максимум результата",
  features: [
    { icon: Check, text: "Всё из базового тарифа" },
    { icon: Star, text: "Личное участие автора курса" },
    { icon: Users, text: "2 живых созвона в неделю" },
    { icon: Zap, text: "Разбор каждого креатива" },
    { icon: Check, text: "Детальная работа с кадрами, светом, движением" },
    { icon: MessageCircle, text: "Ответы на вопросы вживую" },
    { icon: Star, text: "Ускоренный рост и глубина" },
  ],
};

export const PricingSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Выберите свой тариф
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Два формата обучения для разных целей и темпов
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Base Plan */}
          <ScrollReveal delay={100}>
            <GlassCard className="p-8 space-y-6 h-full">
              <div>
                <h3 className="text-2xl font-bold">{basePlan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{basePlan.price}</span>
                  <span className="text-xl text-muted-foreground">{basePlan.currency}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {basePlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={12} />
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-secondary w-full">
                Выбрать базовый
              </button>
            </GlassCard>
          </ScrollReveal>

          {/* Pro Plan */}
          <ScrollReveal delay={200}>
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-3xl blur-lg opacity-50" />
              <GlassCard className="relative p-8 space-y-6 border-primary/30 h-full">
                <div className="absolute -top-3 right-6">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Рекомендуем
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">{proPlan.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{proPlan.highlight}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{proPlan.price}</span>
                    <span className="text-xl text-muted-foreground">{proPlan.currency}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {proPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                        <feature.icon size={12} />
                      </div>
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <button className="btn-primary w-full">
                  Выбрать PRO
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  Подходит тем, кто хочет максимум результата и личный разбор
                </p>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
