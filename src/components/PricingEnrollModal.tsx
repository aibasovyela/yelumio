import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, CreditCard } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PricingEnrollModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName: string;
  planPrice: string;
}

const formSchema = z.object({
  phone: z.string().min(10, "Введите корректный номер телефона"),
  email: z.string().email("Введите корректный email"),
});

const paymentLinks: Record<string, string> = {
  "Light": "https://pay.example.com/light",
  "Basic": "https://pay.example.com/basic",
  "PRO / Mentor": "https://pay.example.com/pro",
  "ELITE / Studio": "https://pay.example.com/elite",
};

export const PricingEnrollModal = ({ open, onOpenChange, planName, planPrice }: PricingEnrollModalProps) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = formSchema.safeParse({ phone, email });
    
    if (!result.success) {
      const fieldErrors: { phone?: string; email?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "phone") fieldErrors.phone = err.message;
        if (err.path[0] === "email") fieldErrors.email = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-to-telegram", {
        body: {
          type: "pricing",
          plan: planName,
          email,
          phone,
        },
      });

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Переходим к оплате...",
      });

      // Open payment link
      const paymentLink = paymentLinks[planName] || "#";
      window.open(paymentLink, "_blank");
      
      onOpenChange(false);
      setPhone("");
      setEmail("");
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте ещё раз",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPlanColor = () => {
    if (planName === "ELITE / Studio") return "text-[#9ab800]";
    if (planName === "PRO / Mentor") return "text-primary";
    return "text-foreground";
  };

  const getButtonStyle = () => {
    if (planName === "ELITE / Studio") {
      return "w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 bg-[#dffb24] text-foreground hover:shadow-lg hover:shadow-[#dffb24]/30";
    }
    return "btn-primary w-full gap-2";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-primary/20 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Запись на тариф
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Заполните данные для оформления
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Selected plan info */}
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Выбранный тариф</p>
                <p className={`text-xl font-bold ${getPlanColor()}`}>{planName}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Стоимость</p>
                <p className="text-xl font-bold">{planPrice} ₸</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Номер телефона
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors"
              />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors"
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className={getButtonStyle()}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Отправка..."
              ) : (
                <>
                  <CreditCard size={18} />
                  Перейти к оплате
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            После заполнения вы будете перенаправлены на страницу оплаты
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
