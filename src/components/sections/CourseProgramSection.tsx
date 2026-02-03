import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Pencil,
  CheckCircle,
  ClipboardCheck,
  Lightbulb,
  Camera,
  Video,
  Music,
  Mic,
  Package,
  Briefcase,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const modules = [
  {
    number: "01",
    title: "Идея и сценарий: креатив, который работает",
    icon: Lightbulb,
    learn: [
      "Формулы креативов для соцсетей: проблема-решение, до/после, процесс, сравнение, UGC, разбор, POV",
      "Как сделать сильный хук (первые 2 секунды)",
      "Как превратить 1 идею в 5 вариаций",
      "Как писать короткий сценарий под 15–20 секунд",
    ],
    result: "3 идеи + 1 выбранная концепция для финального креатива",
    homework: "Написать 3 хука + 3 сценария, выбрать 1 сценарий и сделать шот-лист (3–6 кадров)",
    check: "Ясность оффера/смысла, логика кадра, \"цепляет ли начало\"",
  },
  {
    number: "02",
    title: "ИИ для фото: реализм, стиль, продукт и сцены",
    icon: Camera,
    learn: [
      "Какие задачи решает ИИ-фото (продукт/персонаж/сцена)",
      "Структура сильного промпта: объект → стиль → камера → свет → фон → детали → негатив",
      "Как делать \"дорого\": depth, текстуры, отражения, несовершенства",
      "Базовые схемы света и когда их применять",
    ],
    result: "3 сильных фото под один продукт/идею: hero / macro / lifestyle",
    homework: "Сгенерировать 3 фото + приложить промпты, сделать 2 вариации света",
    check: "Фокус, композиция, реализм, соответствие сценарию, читабельность продукта",
  },
  {
    number: "03",
    title: "ИИ для видео: движение, камера, \"живое\" ощущение",
    icon: Video,
    learn: [
      "Типы генерации: image→video и text→video",
      "3 вида движения: environment motion / camera motion / subject motion",
      "Как избегать \"дерганины\" и пластика",
      "Как готовить фото к анимации (что анимируется лучше)",
    ],
    result: "2 видео-варианта из твоих фото: спокойный и динамичный",
    homework: "Оживить 1 кадр в 2 стилях движения, собрать мини-сцену 2–3 клипа по 3–5 секунд",
    check: "Логичность движения камеры, естественность, отсутствие артефактов",
  },
  {
    number: "04",
    title: "Музыка и саунд: почему \"дорого\" звучит важнее \"дорого\" выглядит",
    icon: Music,
    learn: [
      "Разница между музыкой и саунд-дизайном",
      "Как подобрать трек под темп и настроение",
      "Как делать акценты: удар/пауза/подводка",
      "Базовый микс: громкость, баланс, чистота",
    ],
    result: "2 звуковые версии для одного ролика (разные эмоции)",
    homework: "Подобрать/сгенерировать 2 музыкальные дорожки, добавить 3–5 звуковых акцентов (SFX)",
    check: "Попадание в ритм, читаемость, \"не орёт\", поддерживает смысл",
  },
  {
    number: "05",
    title: "Речь и голос: озвучка, диктор, аватары, субтитры",
    icon: Mic,
    learn: [
      "Когда нужен голос, а когда лучше текст на экране",
      "Как писать текст для озвучки (коротко, разговорно, без \"робота\")",
      "Варианты: синтез-голос, диктор, озвучка + субтитры",
      "Как делать читаемые субтитры и \"safe zones\"",
    ],
    result: "1 ролик с голосом и 1 без голоса (только текст + звук)",
    homework: "Написать 2 варианта текста (с голосом/без), собрать 2 версии ролика",
    check: "Естественность, темп, дикция/читабельность субтитров, попадание в смысл",
  },
  {
    number: "06",
    title: "Упаковка и монтаж под соцсети: чтобы досматривали и сохраняли",
    icon: Package,
    learn: [
      "Монтажная логика 15–20 сек: хук → развитие → финал → CTA",
      "Типографика: шрифты, контраст, размеры, расположение",
      "Кадрирование 9:16, безопасные зоны, обложка",
      "\"Анти-кринж CTA\": как призывать к действию нормально",
    ],
    result: "Финальный ролик под Reels/TikTok/Shorts + обложка",
    homework: "Собрать финальную версию 15–20 секунд, сделать 2 обложки (A/B)",
    check: "Первые 2 секунды, темп, читабельность, финальный смысл, упаковка",
  },
  {
    number: "07",
    title: "Кейсы, портфолио и продажи: как монетизировать навык",
    icon: Briefcase,
    learn: [
      "Как оформить кейс: задача → процесс → результат",
      "Как показывать промпты/пайплайн (это повышает доверие)",
      "Как собирать пакетные предложения (3/5/10 креативов)",
      "Как презентовать работу клиенту и защищать правки",
    ],
    result: "Оформленный мини-кейс + структура портфолио",
    homework: "Кейс: сценарий + 3 фото + 2–3 видео + звук/речь + итоговый ролик + описание",
    check: "Связность кейса, качество результата, умение объяснить \"почему так\"",
  },
];

const reviewScale = [
  { title: "Смысл", description: "Идея и сценарий" },
  { title: "Визуал", description: "Фото/композиция/свет" },
  { title: "Техничка", description: "Артефакты/движение/качество" },
  { title: "Упаковка", description: "Текст/субтитры/обложка" },
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
            7 практических модулей: от идеи до готового кейса в портфолио
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`module-${index}`}
                  className="glass-card-static bg-secondary border-none px-6 data-[state=open]:shadow-glow"
                >
                  <>
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <IconComponent size={22} className="text-foreground" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-primary uppercase">Модуль {module.number}</span>
                          <p className="text-lg font-semibold">{module.title}</p>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-6">
                      <div className="space-y-6 pt-2">
                        {/* What you'll learn */}
                        <div className="flex items-start gap-3">
                          <BookOpen size={18} className="text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Что изучишь</p>
                            <ul className="space-y-1.5">
                              {module.learn.map((item, i) => (
                                <li key={i} className="text-sm flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Result */}
                          <div className="flex items-start gap-3">
                            <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Результат</p>
                              <p className="text-sm">{module.result}</p>
                            </div>
                          </div>

                          {/* Homework */}
                          <div className="flex items-start gap-3">
                            <Pencil size={18} className="text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Домашнее задание</p>
                              <p className="text-sm">{module.homework}</p>
                            </div>
                          </div>
                        </div>

                        {/* Check */}
                        <div className="pt-4 border-t border-border/50">
                          <div className="flex items-start gap-3">
                            <ClipboardCheck size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-xs font-semibold uppercase text-muted-foreground">Что проверим: </span>
                              <span className="text-sm text-muted-foreground">{module.check}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Homework Review Block */}
        <div className="max-w-4xl mx-auto mt-16">
          <GlassCard className="p-8 md:p-10 bg-primary/5 border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Проверка домашних заданий — главный ускоритель
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Вы получаете не общие слова, а конкретные правки: что исправить, почему, и как сделать лучше.
              </p>
            </div>

            {/* Review Scale */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {reviewScale.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 rounded-xl bg-background/50 border border-border/50"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
