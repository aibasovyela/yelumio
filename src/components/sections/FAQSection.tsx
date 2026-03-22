import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { EnrollModal } from "@/components/EnrollModal";
import { QuestionModal } from "@/components/QuestionModal";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "Подойдёт ли курс новичкам?", answer: "Да. Курс построен так, что мы начинаем с базы и мышления. Если ты вообще раньше не работал с ИИ — разберёшься. Если уже что-то пробовал — просто быстрее пойдёшь." },
  { question: "Нужен ли ноутбук или можно с телефона?", answer: "Можно и с телефона, и с ноутбука. Но если хочешь максимальное качество и контроль — ноутбук даст больше возможностей. Мы покажем оба варианта." },
  { question: "Сколько времени в неделю нужно уделять?", answer: "В среднем 4–6 часов в неделю. Можно проходить в своём темпе, но чем честнее делаешь домашки — тем больше пользы получаешь." },
  { question: "Какие подписки обязательны?", answer: "Минимум одна платная подписка на ИИ-инструмент. Без этого нормальную практику не сделать. Мы заранее покажем варианты и объясним, что выбрать." },
  { question: "Как проходит проверка домашних заданий?", answer: "Ты сдаёшь работу — получаешь конкретную обратную связь: что хорошо, что исправить и почему. Без шаблонных «норм» и «молодец»." },
  { question: "Можно ли зарабатывать после курса?", answer: "Да. После курса у тебя будут готовые креативы, кейс и понимание процесса — этого достаточно, чтобы брать заказы или использовать навык в своём бизнесе." },
];

export const FAQSection = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  return (
    <>
      <section id="faq" className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                  <button className="btn-primary gap-2" onClick={() => setIsEnrollOpen(true)}>
                    Записаться на поток
                    <ArrowRight size={18} />
                  </button>
                  <button className="btn-secondary gap-2" onClick={() => setIsQuestionOpen(true)}>
                    <MessageCircle size={18} />
                    Задать вопрос
                  </button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="glass-card-static border-border px-6 data-[state=open]:border-primary/20 data-[state=open]:shadow-glow"
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      <EnrollModal open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
      <QuestionModal open={isQuestionOpen} onOpenChange={setIsQuestionOpen} />
    </>
  );
};
