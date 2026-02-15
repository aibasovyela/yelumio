import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface EnrollModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const tariffs = [
  { value: "light", label: "Light — 40 000 ₸" },
  { value: "basic", label: "Basic — 70 000 ₸" },
  { value: "pro", label: "PRO / Mentor — 120 000 ₸" },
  { value: "elite", label: "ELITE / Studio — 200 000 ₸" },
];

export const EnrollModal = ({ open, onOpenChange }: EnrollModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [selectedTariff, setSelectedTariff] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || phone.trim() === "+7" || !selectedTariff) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите имя, телефон и выберите тариф",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const plan = tariffs.find((t) => t.value === selectedTariff)?.label || selectedTariff;
      const { error } = await supabase.functions.invoke("send-to-telegram", {
        body: {
          type: "enroll",
          name,
          contact: phone,
          plan,
        },
      });

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });

      setName("");
      setPhone("+7");
      setSelectedTariff("");
      onOpenChange(false);
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте ещё раз или свяжитесь с нами напрямую",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-primary/20 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Записаться на курс
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Оставьте заявку и мы свяжемся с вами для уточнения деталей
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 py-4">
          <div className="space-y-2">
            <Label htmlFor="enroll-name">Имя</Label>
            <Input
              id="enroll-name"
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="enroll-phone">Номер телефона (WhatsApp)</Label>
            <Input
              id="enroll-phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="space-y-3">
            <Label>Выберите тариф</Label>
            <RadioGroup value={selectedTariff} onValueChange={setSelectedTariff} className="space-y-2">
              {tariffs.map((tariff) => (
                <div key={tariff.value} className="flex items-center space-x-3 rounded-xl border border-border px-4 py-3 cursor-pointer hover:bg-secondary/50 transition-colors">
                  <RadioGroupItem value={tariff.value} id={tariff.value} />
                  <Label htmlFor={tariff.value} className="cursor-pointer flex-1 text-sm font-normal">
                    {tariff.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <button
            type="submit"
            className="btn-primary w-full gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Оставить заявку"}
            {!isSubmitting && <ArrowRight size={18} />}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
