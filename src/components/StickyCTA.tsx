import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { EnrollModal } from "@/components/EnrollModal";

export const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-background/80 backdrop-blur-lg border-t border-border/50 py-3 px-4">
          <div className="container flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold">Старт курса 15 апреля</p>
              <p className="text-xs text-muted-foreground">Количество мест ограничено</p>
            </div>
            <button
              className="btn-primary gap-2 whitespace-nowrap ml-auto"
              onClick={() => setIsEnrollOpen(true)}
            >
              Записаться на курс
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <EnrollModal open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
    </>
  );
};
