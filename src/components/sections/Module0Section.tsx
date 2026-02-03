import { GlassCard } from "@/components/ui/GlassCard";
import { IconBox } from "@/components/ui/IconBox";
import { Lightbulb, FileText, Camera, Video, Music, AlertCircle } from "lucide-react";

const modules = [
  {
    icon: Lightbulb,
    title: "ИДЕЯ",
    points: [
      "Как рождается идея",
      "Как формулировать задачу для ИИ",
      "Почему без идеи ИИ не спасает",
    ],
  },
  {
    icon: FileText,
    title: "ТЕКСТ",
    points: [
      "Как писать сценарии и хуки",
      "Как текст управляет визуалом",
      "Ошибки в формулировках",
    ],
  },
  {
    icon: Camera,
    title: "ФОТО",
    points: [
      "ИИ для фото: продукт, сцены, персонажи",
      "Свет, ракурс, глубина",
      "Реализм vs стиль",
    ],
  },
  {
    icon: Video,
    title: "ВИДЕО",
    points: [
      "Как оживлять изображения",
      "Движение камеры и среды",
      "Что нельзя анимировать",
    ],
  },
  {
    icon: Music,
    title: "МУЗЫКА И РЕЧЬ",
    points: [
      "Почему звук делает «дорого»",
      "Музыка, саунд-дизайн, голос",
      "Когда нужен голос, а когда нет",
    ],
  },
];

const mistakes = [
  "Длинные промпты",
  "Хаотичное движение",
  "Красивая картинка без смысла",
  "Игнор звука",
  "Ожидание «волшебной кнопки»",
];

export const Module0Section = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-sm font-semibold">С ЧЕГО ВСЁ НАЧИНАЕТСЯ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Модуль 0. Фундамент ИИ-креатива
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Этот модуль — основа всего курса. Он объясняет, как правильно работать с ИИ, 
            чтобы получать результат, а не просто красивые, но бесполезные картинки.
          </p>
        </div>

        {/* Module cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((module, index) => (
            <GlassCard key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                <IconBox icon={module.icon} />
                <h3 className="text-xl font-bold">{module.title}</h3>
              </div>
              <ul className="space-y-2">
                {module.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}

          {/* Mistakes card - spans full width on lg */}
          <GlassCard className="md:col-span-2 lg:col-span-3 lg:max-w-3xl lg:mx-auto bg-destructive/5 border-destructive/20">
            <div className="flex items-center gap-4 mb-6">
              <IconBox icon={AlertCircle} className="bg-destructive/15" />
              <h3 className="text-xl font-bold">Типичные ошибки новичков</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {mistakes.map((mistake, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-foreground/5 text-sm font-medium border border-foreground/10"
                >
                  {mistake}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
