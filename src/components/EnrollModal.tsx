import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, CheckCircle } from "lucide-react";

interface EnrollModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EnrollModal = ({ open, onOpenChange }: EnrollModalProps) => {
  const benefits = [
    "8 модулей с видеоуроками",
    "Домашние задания с проверкой",
    "Доступ к закрытому сообществу",
    "Сертификат по окончании",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glass-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Записаться на курс
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Оставьте заявку и мы свяжемся с вами для уточнения деталей
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Benefits list */}
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Ваше имя
              </label>
              <input
                id="name"
                type="text"
                placeholder="Введите имя"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact" className="text-sm font-medium">
                Телефон или Email
              </label>
              <input
                id="contact"
                type="text"
                placeholder="+7 (___) ___-__-__ или email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full gap-2"
              onClick={(e) => {
                e.preventDefault();
                // Handle form submission
                onOpenChange(false);
              }}
            >
              Отправить заявку
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
