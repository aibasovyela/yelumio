import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Image, Brain, Workflow, Briefcase, Shield } from "lucide-react";

const results = [
  {
    icon: Image,
    value: "5–10",
    label: "готовых креативов",
  },
  {
    icon: Brain,
    value: "4",
    label: "сферы ИИ освоены",
  },
  {
    icon: Workflow,
    value: "1",
    label: "рабочий пайплайн",
  },
  {
    icon: Briefcase,
    value: "1",
    label: "кейс для портфолио",
  },
  {
    icon: Shield,
    value: "100%",
    label: "уверенность в инструментах",
  },
];

export const ResultsSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Результат после курса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что вы получите, пройдя все модули
            </p>
          </div>
        </ScrollReveal>

        {/* Results grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {results.map((result, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <GlassCard className="text-center space-y-3 py-8 h-full">
                <div className="icon-box mx-auto">
                  <result.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="text-3xl font-bold text-primary">{result.value}</div>
                <p className="text-sm text-muted-foreground">{result.label}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
