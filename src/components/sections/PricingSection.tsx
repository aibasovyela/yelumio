import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Check, Star, Users, Video, FileText, MessageCircle, Zap, Briefcase, Sparkles, Crown } from "lucide-react";
import { useState } from "react";
import { PricingEnrollModal } from "@/components/PricingEnrollModal";

const lightPlan = {
  name: "Light",
  price: "40 000",
  currency: "₸",
  features: [{
    icon: Video,
    text: "Доступ ко всем 8 модулям"
  }, {
    icon: Zap,
    text: "5–6 часов видео"
  }, {
    icon: FileText,
    text: "Презентации и инструкции"
  }]
};

const basicPlan = {
  name: "Basic",
  price: "70 000",
  currency: "₸",
  features: [{
    icon: Video,
    text: "Доступ ко всем 8 модулям"
  }, {
    icon: Zap,
    text: "5–6 часов видео"
  }, {
    icon: FileText,
    text: "Презентации и инструкции"
  }, {
    icon: Check,
    text: "Домашние задания"
  }, {
    icon: Check,
    text: "Проверка ДЗ"
  }, {
    icon: MessageCircle,
    text: "Обратная связь по работам"
  }]
};

const proPlan = {
  name: "PRO / Mentor",
  price: "120 000",
  currency: "₸",
  highlight: "Максимум результата",
  features: [{
    icon: Check,
    text: "Всё из тарифа Basic"
  }, {
    icon: Star,
    text: "Личное участие автора курса"
  }, {
    icon: Users,
    text: "2 живых созвона в неделю"
  }, {
    icon: Zap,
    text: "Разбор каждого креатива"
  }, {
    icon: Check,
    text: "Детальная работа с кадрами, светом, движением"
  }, {
    icon: MessageCircle,
    text: "Ответы на вопросы вживую"
  }, {
    icon: Star,
    text: "Ускоренный рост и глубина"
  }]
};

const elitePlan = {
  name: "ELITE / Studio",
  price: "200 000",
  currency: "₸",
  highlight: "Работа как с креативной студией",
  description: "Это уже не просто обучение, а совместное продакшн-мышление.",
  features: [{
    icon: Check,
    text: "Всё из тарифа PRO / Mentor"
  }, {
    icon: Briefcase,
    text: "1 реальный платный заказ от компании (40 000–60 000 ₸)",
    sub: "портфолио, клиенты, бренд — создаем на деле"
  }, {
    icon: Sparkles,
    text: "Совместная сборка 1 креатива «под ключ»",
    sub: "идея → промпт → визуал → видео → звук → финал"
  }, {
    icon: Zap,
    text: "Разбор промптов и пайплайна до идеала"
  }, {
    icon: Star,
    text: "Приоритетная обратная связь"
  }, {
    icon: Crown,
    text: "Личное видение автора курса"
  }],
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
          {/* Header */}
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

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start pt-6">
            {/* Light Plan */}
            <ScrollReveal delay={100}>
              <div className="relative">
                <GlassCard className="p-6 md:p-8 space-y-6 bg-yellow-50 border-yellow-400" hover={false}>
                  <div>
                    <h3 className="text-2xl font-bold">{lightPlan.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold">{lightPlan.price}</span>
                      <span className="text-lg text-muted-foreground">{lightPlan.currency}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {lightPlan.features.map((feature, index) => <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-muted/30 flex items-center justify-center flex-shrink-0">
                          <feature.icon size={12} />
                        </div>
                        <span className="text-sm">{feature.text}</span>
                      </li>)}
                  </ul>

                  <button 
                    className="btn-secondary w-full"
                    onClick={() => openModal(lightPlan.name, lightPlan.price)}
                  >
                    Выбрать Light
                  </button>
                </GlassCard>
              </div>
            </ScrollReveal>

            {/* Basic Plan */}
            <ScrollReveal delay={150}>
              <div className="relative">
                <GlassCard className="p-6 md:p-8 space-y-6 bg-yellow-50 border-yellow-400">
                  <div>
                    <h3 className="text-2xl font-bold">{basicPlan.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold">{basicPlan.price}</span>
                      <span className="text-lg text-muted-foreground">{basicPlan.currency}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {basicPlan.features.map((feature, index) => <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <feature.icon size={12} />
                        </div>
                        <span className="text-sm">{feature.text}</span>
                      </li>)}
                  </ul>

                  <button 
                    className="btn-secondary w-full"
                    onClick={() => openModal(basicPlan.name, basicPlan.price)}
                  >
                    Выбрать Basic
                  </button>
                </GlassCard>
              </div>
            </ScrollReveal>

            {/* Pro Plan */}
            <ScrollReveal delay={200}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-3xl blur-lg opacity-50" />
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
                    {proPlan.features.map((feature, index) => <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                          <feature.icon size={12} />
                        </div>
                        <span className="text-sm">{feature.text}</span>
                      </li>)}
                  </ul>

                  <button 
                    className="btn-primary w-full"
                    onClick={() => openModal(proPlan.name, proPlan.price)}
                  >
                    Выбрать PRO
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    Подходит тем, кто хочет максимум результата и личный разбор
                  </p>
                </GlassCard>
              </div>
            </ScrollReveal>

            {/* Elite Plan */}
            <ScrollReveal delay={300}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#dffb24]/40 to-[#dffb24]/20 rounded-3xl blur-lg opacity-40 transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute -top-4 right-6 z-10">
                  <span className="rounded-full bg-[#dffb24] text-foreground font-semibold text-sm px-3 py-1">
                    Premium
                  </span>
                </div>
                <GlassCard className="relative p-6 md:p-8 space-y-6 border-[#dffb24]/50 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(223,251,36,0.4)] group-hover:bg-[#dffb24]/5" hover={false}>
                  <div>
                    <h3 className="text-2xl font-bold">{elitePlan.name}</h3>
                    <p className="text-sm text-[#9ab800] font-medium mt-1">{elitePlan.highlight}</p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold">{elitePlan.price}</span>
                      <span className="text-lg text-muted-foreground">{elitePlan.currency}</span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground italic border-l-2 border-[#dffb24] pl-3">
                    {elitePlan.description}
                  </div>

                  <ul className="space-y-3">
                    {elitePlan.features.map((feature, index) => <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#dffb24]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <feature.icon size={12} className="text-foreground" />
                        </div>
                        <div>
                          <span className="text-sm">{feature.text}</span>
                          {feature.sub && <p className="text-xs text-muted-foreground mt-0.5">{feature.sub}</p>}
                        </div>
                      </li>)}
                  </ul>

                  <button 
                    className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 bg-[#dffb24] text-foreground hover:shadow-lg hover:shadow-[#dffb24]/30 hover:-translate-y-0.5"
                    onClick={() => openModal(elitePlan.name, elitePlan.price)}
                  >
                    Выбрать ELITE
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    {elitePlan.footer}
                  </p>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PricingEnrollModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        planName={selectedPlan.name}
        planPrice={selectedPlan.price}
      />
    </>
  );
};