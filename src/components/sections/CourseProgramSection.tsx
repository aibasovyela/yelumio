import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Pencil, CheckCircle, Lightbulb, MessageSquareText, Camera, Video, Music, Package, Briefcase } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const modules = [{
  number: "01", title: "Идея и сценарий: как работает креатив", icon: Lightbulb,
  description: "В этом модуле разбираемся с самым главным — идеей. Потому что без идеи ИИ не спасает, а просто делает \"красиво, но пусто\".",
  learn: ["Как рождаются идеи для креативов", "Где брать вдохновение и какие сайты использовать", "Как смотреть на визуал и понимать: это красиво или нет", "Почему один креатив работает, а другой нет", "Как из одной идеи делать несколько вариантов", "Как превращать идею в короткий сценарий под видео"],
  result: "Понимание креативного мышления и готовые идеи для дальнейшей работы.",
  homework: ["Найти референсы", "Сформулировать идею", "Написать короткий сценарий под будущий креатив"]
}, {
  number: "02", title: "ИИ для текста и промптов", icon: MessageSquareText,
  description: "Здесь мы учимся думать и говорить с нейросетями правильно. Текст — это фундамент всего.",
  learn: ["Как работать с текстом в ИИ", "Как правильно писать промпты", "Какие текстовые нейросети лучшие", "Как нейросети воспринимают наши запросы", "Почему один и тот же запрос даёт разный результат", "Как формулировать запросы чётко и понятно", "Типичные ошибки в текстах и промптах"],
  result: "Ты понимаешь, как управлять ИИ через текст, а не гадать.",
  homework: ["Написать несколько промптов", "Протестировать разные формулировки", "Сравнить результат и сделать выводы"]
}, {
  number: "03", title: "ИИ для фото", icon: Camera,
  description: "Переходим к визуалу. Здесь ты учишься делать качественные ИИ-фото, которые выглядят дорого.",
  learn: ["Какие нейросети мы используем для создания ИИ-фото", "В чём разница между ними", "Какую нейросеть выбирать под конкретную задачу", "Как делать продуктовые, сценовые и lifestyle-кадры", "Свет, ракурс, глубина, фокус", "Как избегать \"пластика\" и дешёвого вида"],
  result: "Готовые ИИ-фото, которые можно использовать в работе или портфолио.",
  homework: ["Создать несколько фото под одну идею", "Поработать со светом и ракурсами"]
}, {
  number: "04", title: "ИИ для видео", icon: Video,
  description: "Оживляем визуал и учимся работать с движением.",
  learn: ["Какие нейросети сейчас лучшие для видео", "Какие стоит использовать, а какие нет", "Чем отличаются разные способы генерации видео", "Как правильно оживлять фото", "Движение камеры, среды и объектов", "Типичные ошибки в ИИ-видео"],
  result: "Понимание, как делать видео, которое выглядит естественно и профессионально.",
  homework: ["Оживить свои изображения", "Сделать несколько коротких видео-сцен"]
}, {
  number: "05", title: "Музыка и речь", icon: Music,
  description: "Звук — это то, что делает креатив дорогим на ощущение.",
  learn: ["Как музыка влияет на восприятие видео", "Чем отличается музыка от саунд-дизайна", "Как подбирать звук под настроение", "Когда нужен голос, а когда лучше без него", "Работа с речью, диктором и субтитрами", "Типичные ошибки со звуком"],
  result: "Ты понимаешь, как правильно работать со звуком и речью в креативах.",
  homework: ["Подобрать или создать звук для видео", "Сделать вариант с речью и без неё"]
}, {
  number: "06", title: "Упаковка и монтаж", icon: Package,
  description: "Очень важный модуль. Даже хороший креатив можно \"убить\" плохим монтажом.",
  learn: ["Как правильно монтировать короткие видео", "Структура ролика: начало, развитие, финал", "Как сделать, чтобы видео досматривали", "Правильные форматы под соцсети", "Какие программы лучше использовать", "Типографика, обложки, безопасные зоны"],
  result: "Готовый, упакованный креатив, который можно публиковать.",
  homework: ["Смонтировать финальный ролик", "Подготовить обложку"]
}, {
  number: "07", title: "Монетизация и кейсы", icon: Briefcase,
  description: "Финальный модуль — про деньги и применение навыка.",
  learn: ["Как оформить свою страницу или портфолио", "Какую презентацию подготовить", "Как показать свою работу заказчику", "Как оформлять кейсы", "Как презентовать результат", "Как использовать навык для заработка"],
  result: "Понимание, как применять полученные навыки в реальной жизни.",
  homework: ["Оформить кейс", "Подготовить презентацию своей работы"]
}];

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
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Программа курса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              7 практических модулей: от идеи до готового кейса в портфолио
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <AccordionItem key={index} value={`module-${index}`} className="glass-card-static border-border px-6 data-[state=open]:border-primary/20 data-[state=open]:shadow-glow">
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent size={22} className="text-primary" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Модуль {module.number}</span>
                          <p className="text-lg font-semibold">{module.title}</p>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-6">
                      <div className="space-y-6 pt-2">
                        <p className="text-sm text-muted-foreground italic">{module.description}</p>

                        <div className="flex items-start gap-3">
                          <BookOpen size={18} className="text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold uppercase text-muted-foreground mb-2 tracking-wide">Что изучишь</p>
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
                          <div className="flex items-start gap-3">
                            <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1 tracking-wide">Результат</p>
                              <p className="text-sm">{module.result}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Pencil size={18} className="text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1 tracking-wide">Домашнее задание</p>
                              <ul className="space-y-1">
                                {module.homework.map((item, i) => (
                                  <li key={i} className="text-sm flex items-start gap-2">
                                    <span className="text-primary">–</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </ScrollReveal>

        {/* Блок "Проверка домашних заданий" скрыт */}
      </div>
    </section>
  );
};
