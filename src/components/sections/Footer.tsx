import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Sparkles size={20} strokeWidth={1.5} />
            </div>
            <span className="font-bold text-lg">ИИ-КРЕАТИВ</span>
          </div>
          
          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#program" className="hover:text-foreground transition-colors">Программа</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2025 ИИ-Креатив. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};
