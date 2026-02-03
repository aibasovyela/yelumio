import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Pencil, CheckCircle, ClipboardCheck } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Введение в ИИ-креатив",
    learn: "Базовые принципы работы с генеративными инструментами",
    do: "Настройка рабочего окружения и первый тестовый креатив",
    result: "Понимание логики работы ИИ и готовое рабочее место",
    homework: "Создать 3 тестовых изображения с разными промптами",
    check: "Личный разбор каждой работы с рекомендациями",
  },
  {
    number: "02",
    title: "Идея и сценарий",
    learn: "Как структурировать идею и писать сценарии для ИИ",
    do: "Разработка концепции для вашего первого кейса",
    result: "Готовый сценарий и понимание принципов формулировки",
    homework: "Написать сценарий для рекламного ролика продукта",
    check: "Разбор логики сценария и правки",
  },
  {
    number: "03",
    title: "Генерация фото",
    learn: "Создание качественных изображений: свет, ракурс, стиль",
    do: "Серия фотографий для выбранного продукта/концепции",
    result: "5-7 готовых изображений профессионального уровня",
    homework: "Сгенерировать product-shot и lifestyle-сцену",
    check: "Детальный разбор композиции и технического качества",
  },
  {
    number: "04",
    title: "Анимация и видео",
    learn: "Принципы оживления изображений и работа с движением",
    do: "Анимация ваших фотографий из модуля 3",
    result: "3-5 анимированных клипов с правильным движением",
    homework: "Создать 2 анимации: спокойную и динамичную",
    check: "Анализ движения, тайминга и естественности",
  },
  {
    number: "05",
    title: "Звук и музыка",
    learn: "Саунд-дизайн, подбор музыки, работа с голосом",
    do: "Озвучивание созданных видео",
    result: "Полноценные ролики со звуковым оформлением",
    homework: "Добавить музыку и звуковые эффекты к видео",
    check: "Оценка соответствия звука визуалу",
  },
  {
    number: "06",
    title: "Голос и речь",
    learn: "ИИ-озвучка, синтез речи, обработка голоса",
    do: "Добавление голосового сопровождения",
    result: "Ролики с профессиональной озвучкой",
    homework: "Создать ролик с закадровым голосом",
    check: "Анализ интонации и читаемости",
  },
  {
    number: "07",
    title: "Монтаж и финализация",
    learn: "Сборка финального ролика, переходы, ритм",
    do: "Монтаж итогового кейса",
    result: "Готовый к публикации креатив",
    homework: "Смонтировать финальную версию проекта",
    check: "Полный разбор готовой работы",
  },
  {
    number: "08",
    title: "Портфолио и кейс",
    learn: "Как оформлять работы и презентовать результат",
    do: "Финальное оформление кейса для портфолио",
    result: "Готовый кейс и понимание дальнейшего развития",
    homework: "Подготовить презентацию кейса",
    check: "Финальный разбор и рекомендации",
  },
];

export const CourseProgramSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Программа курса
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8 практических модулей: от идеи до готового кейса в портфолио
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem
                key={index}
                value={`module-${index}`}
                className="glass-card border-none px-6 data-[state=open]:shadow-glow"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-3xl font-bold text-primary/50">{module.number}</span>
                    <span className="text-xl font-semibold">{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid md:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Что изучишь</p>
                          <p className="text-sm">{module.learn}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Pencil size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Что сделаешь</p>
                          <p className="text-sm">{module.do}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Результат</p>
                          <p className="text-sm">{module.result}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ClipboardCheck size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Домашнее задание</p>
                          <p className="text-sm">{module.homework}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Проверка:</span> {module.check}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
