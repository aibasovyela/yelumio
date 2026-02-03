import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-border/50" />
      
      <div className="container relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Sparkles size={20} strokeWidth={1.5} />
            </div>
            <span className="font-bold text-lg hidden sm:block">ИИ-КРЕАТИВ</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#module0" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Фундамент
            </a>
            <a href="#program" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Программа
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Тарифы
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="btn-primary py-3 px-6 text-sm">
              Записаться
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 space-y-4">
            <a href="#module0" className="block text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Фундамент
            </a>
            <a href="#program" className="block text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Программа
            </a>
            <a href="#pricing" className="block text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Тарифы
            </a>
            <a href="#faq" className="block text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <button className="btn-primary w-full py-3 text-sm mt-4">
              Записаться
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
