import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Monitor, Smartphone, MessageCircle, Zap } from "lucide-react";
const platforms = [{
  icon: Monitor,
  name: "Higgsfield",
  highlight: "Основной инструмент курса",
  features: ["Работа с фото и видео", "Максимальный контроль", "Используется с компьютера"]
}, {
  icon: Smartphone,
  name: "Syntx",
  highlight: "Удобен для соцсетей",
  features: ["Можно работать с телефона", "Быстрые визуалы", "Интуитивный интерфейс"]
}, {
  icon: MessageCircle,
  name: "VeoSeeBot",
  highlight: "Идеален для новичков",
  features: ["Telegram-бот", "Можно без компьютера", "Простой старт"]
}];
export const PlatformsSection = () => {
  return <section className="section-padding bg-primary/5">
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Почему без подписок не получится
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Качественный ИИ-креатив почти всегда требует платных инструментов. Ниже платформы для использования нейросетей в одном месте.</p>
          </div>
        </ScrollReveal>

        {/* Platform cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {platforms.map((platform, index) => <ScrollReveal key={index} delay={index * 150}>
              <GlassCard className="space-y-4 h-full">
                <div className="flex items-center gap-3">
                  <div className="icon-box">
                    <platform.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{platform.name}</h3>
                    <span className="text-xs text-primary font-medium">{platform.highlight}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {platform.features.map((feature, i) => <li key={i} className="flex items-center gap-2 text-foreground/80 text-sm">
                      <Zap size={14} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </GlassCard>
            </ScrollReveal>)}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground">
          Достаточно одной платформы под вашу задачу.
        </p>
      </div>
    </section>;
};