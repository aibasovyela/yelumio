import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Логотип" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold text-lg">ИИ-КРЕАТИВ</span>
          </div>
          
          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#program" className="hover:text-primary transition-colors">Программа</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2025 ИИ-Креатив. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};
