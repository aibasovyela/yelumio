import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Подойдёт ли курс новичкам?",
    answer: "Да, курс рассчитан на новичков. Модуль 0 даёт всю необходимую базу. Главное — желание учиться и готовность практиковаться.",
  },
  {
    question: "Нужен ли ноутбук или можно с телефона?",
    answer: "Для полноценной работы рекомендуется компьютер. Но часть инструментов (Syntx, VeoCIBot) работают с телефона — для быстрых задач этого достаточно.",
  },
  {
    question: "Сколько времени в неделю нужно уделять?",
    answer: "Рекомендуем 5–7 часов в неделю: просмотр видео + практика. Видеоуроки короткие (6–10 минут), основное время уходит на практику.",
  },
  {
    question: "Какие подписки обязательны?",
    answer: "Минимум — подписка на Higgsfield (основной инструмент курса). Остальные платформы опциональны и зависят от ваших задач.",
  },
  {
    question: "Как проходит проверка домашних заданий?",
    answer: "Вы загружаете работу, куратор проверяет и даёт конкретные рекомендации: что хорошо, что улучшить, как это сделать. Не просто «молодец», а детальный разбор.",
  },
  {
    question: "Можно ли зарабатывать после курса?",
    answer: "Да, курс даёт практические навыки для создания коммерческих креативов. Многие выпускники берут заказы на рекламные ролики, продуктовые фото, контент для соцсетей.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - CTA */}
          <ScrollReveal direction="left">
            <div className="space-y-8 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Остались вопросы?
              </h2>
              <p className="text-lg text-muted-foreground">
                Готовы начать создавать профессиональные креативы с помощью ИИ? 
                Записывайтесь на ближайший поток.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary gap-2">
                  Записаться на поток
                  <ArrowRight size={18} />
                </button>
                <button className="btn-secondary gap-2">
                  <MessageCircle size={18} />
                  Задать вопрос
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - FAQ */}
          <ScrollReveal direction="right" delay={200}>
            <div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="glass-card border-none px-6 data-[state=open]:shadow-glow"
                  >
                    <AccordionTrigger className="hover:no-underline py-5 text-left">
                      <span className="font-semibold pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
