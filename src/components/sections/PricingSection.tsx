import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Check, Star, Users, Video, FileText, MessageCircle, Zap, Briefcase, Sparkles, Crown } from "lucide-react";
import { useState } from "react";
import { PricingEnrollModal } from "@/components/PricingEnrollModal";

const lightPlan = {
  name: "Light", price: "50 000", currency: "₸",
  features: [
    { icon: Video, text: "Доступ ко всем 8 модулям" },
    { icon: Zap, text: "5–6 часов видео" },
    { icon: FileText, text: "Презентации и инструкции" },
  ]
};

const basicPlan = {
  name: "Basic", price: "70 000", currency: "₸",
  features: [
    { icon: Video, text: "Доступ ко всем 8 модулям" },
    { icon: Zap, text: "5–6 часов видео" },
    { icon: FileText, text: "Презентации и инструкции" },
    { icon: Check, text: "Домашние задания" },
    { icon: Check, text: "Проверка ДЗ" },
    { icon: MessageCircle, text: "Обратная связь по работам" },
  ]
};

const proPlan = {
  name: "PRO / Mentor", price: "120 000", currency: "₸", highlight: "Максимум результата",
  features: [
    { icon: Check, text: "Всё из тарифа Basic" },
    { icon: Star, text: "Личное участие автора курса" },
    { icon: Users, text: "2 живых созвона в неделю" },
    { icon: Zap, text: "Разбор каждого креатива" },
    { icon: Check, text: "Детальная работа с кадрами, светом, движением" },
    { icon: MessageCircle, text: "Ответы на вопросы вживую" },
    { icon: Star, text: "Ускоренный рост и глубина" },
  ]
};

const elitePlan = {
  name: "ELITE / Studio", price: "200 000", currency: "₸",
  highlight: "Работа как с креативной студией",
  description: "Это уже не просто обучение, а совместное продакшн-мышление.",
  features: [
    { icon: Check, text: "Всё из тарифа PRO / Mentor" },
    { icon: Briefcase, text: "1 реальный платный заказ от компании (30 000 ₸)", sub: "портфолио, клиенты, бренд — создаем на деле" },
    { icon: Sparkles, text: "Совместная сборка 1 креатива «под ключ»", sub: "идея → промпт → визуал → видео → звук → финал" },
    { icon: Zap, text: "Разбор промптов и пайплайна до идеала" },
    { icon: Star, text: "Приоритетная обратная связь" },
    { icon: Crown, text: "Личное видение автора курса" },
  ],
  footer: "Тем, кто хочет результат уровня студии, а не просто обучение."
};

export const PricingSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });

  const openModal = (name: string, price: string) => {
    setSelectedPlan({ name, price });
    setModalOpen(true);
  };

  return (
    <>
      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Выберите свой тариф
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Четыре формата обучения для разных целей и темпов
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start pt-6">
            {/* Light */}
            <ScrollReveal delay={100}>
              <GlassCard className="p-6 md:p-8 space-y-6" hover={false}>
                <div>
                  <h3 className="text-2xl font-bold">{lightPlan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold">{lightPlan.price}</span>
                    <span className="text-lg text-muted-foreground">{lightPlan.currency}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {lightPlan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <f.icon size={12} className="text-primary" />
                      </div>
                      <span className="text-sm">{f.text}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-secondary w-full" onClick={() => openModal(lightPlan.name, lightPlan.price)}>
                  Выбрать Light
                </button>
              </GlassCard>
            </ScrollReveal>

            {/* Basic */}
            <ScrollReveal delay={150}>
              <GlassCard className="p-6 md:p-8 space-y-6" hover={false}>
                <div>
                  <h3 className="text-2xl font-bold">{basicPlan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold">{basicPlan.price}</span>
                    <span className="text-lg text-muted-foreground">{basicPlan.currency}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {basicPlan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <f.icon size={12} className="text-primary" />
                      </div>
                      <span className="text-sm">{f.text}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-secondary w-full" onClick={() => openModal(basicPlan.name, basicPlan.price)}>
                  Выбрать Basic
                </button>
              </GlassCard>
            </ScrollReveal>

            {/* Pro */}
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-lg opacity-50" />
                <div className="absolute -top-4 right-6 z-10">
                  <span className="rounded-full bg-primary text-primary-foreground font-semibold text-sm px-3 py-1">
                    Рекомендуем
                  </span>
                </div>
                <GlassCard className="relative p-6 md:p-8 space-y-6 border-primary/30">
                  <div>
                    <h3 className="text-2xl font-bold">{proPlan.name}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{proPlan.highlight}</p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold">{proPlan.price}</span>
                      <span className="text-lg text-muted-foreground">{proPlan.currency}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {proPlan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <f.icon size={12} className="text-primary" />
                        </div>
                        <span className="text-sm">{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary w-full" onClick={() => openModal(proPlan.name, proPlan.price)}>
                    Выбрать PRO
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    Подходит тем, кто хочет максимум результата и личный разбор
                  </p>
                </GlassCard>
              </div>
            </ScrollReveal>

            {/* Elite */}
            <ScrollReveal delay={300}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-lg opacity-40 transition-opacity duration-300 group-hover:opacity-70" />
                <div className="absolute -top-4 right-6 z-10">
                  <span className="rounded-full bg-primary text-primary-foreground font-semibold text-sm px-3 py-1">
                    Premium
                  </span>
                </div>
                <GlassCard className="relative p-6 md:p-8 space-y-6 border-primary/20" hover={false}>
                  <div>
                    <h3 className="text-2xl font-bold">{elitePlan.name}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{elitePlan.highlight}</p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold">{elitePlan.price}</span>
                      <span className="text-lg text-muted-foreground">{elitePlan.currency}</span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground italic border-l-2 border-primary/40 pl-3">
                    {elitePlan.description}
                  </div>

                  <ul className="space-y-3">
                    {elitePlan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <f.icon size={12} className="text-primary" />
                        </div>
                        <div>
                          <span className="text-sm">{f.text}</span>
                          {f.sub && <p className="text-xs text-muted-foreground mt-0.5">{f.sub}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className="btn-primary w-full"
                    onClick={() => openModal(elitePlan.name, elitePlan.price)}
                  >
                    Выбрать ELITE
                  </button>

                  <p className="text-xs text-center text-muted-foreground">{elitePlan.footer}</p>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PricingEnrollModal open={modalOpen} onOpenChange={setModalOpen} planName={selectedPlan.name} planPrice={selectedPlan.price} />
    </>
  );
};
