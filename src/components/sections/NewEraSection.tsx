import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Image, Video, Sparkles, ArrowRight, Wand2, Film } from "lucide-react";

const capabilities = [
  { icon: Image, label: "Фото" },
  { icon: Video, label: "Видео" },
  { icon: Wand2, label: "Стиль" },
  { icon: Film, label: "Монтаж" },
  { icon: Sparkles, label: "Эффекты" },
];

export const NewEraSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Новая эра контента уже здесь
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Умные бренды не ждут перемен — они создают будущее прямо сейчас.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-xl bg-card border border-border p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Генерируйте креативы профессионального уровня
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Создавайте студийные фото, видеоролики и полноценные рекламные креативы с помощью ИИ. 
                  Без фотостудии, без видеографа, без огромных бюджетов.
                </p>
                
                <div className="flex items-center gap-4 pt-2">
                  <div className="px-5 py-3 rounded-xl bg-secondary border border-border">
                    <span className="text-sm font-medium text-muted-foreground">Идея в голове</span>
                  </div>
                  <ArrowRight className="text-primary flex-shrink-0" size={24} />
                  <div className="px-5 py-3 rounded-xl bg-primary/10 border border-primary/20">
                    <span className="text-sm font-bold text-primary">Готовый креатив</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {capabilities.map((cap, index) => (
                  <div key={index} className="aspect-square rounded-xl bg-secondary border border-border flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <cap.icon size={24} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-semibold">{cap.label}</span>
                  </div>
                ))}
                <div className="aspect-square rounded-xl bg-primary/10 border border-primary/20 flex flex-col items-center justify-center gap-3">
                  <span className="text-3xl font-bold text-primary">∞</span>
                  <span className="text-sm font-semibold">Вариации</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
