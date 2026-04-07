import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy/90" />
    <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange/15 rounded-full blur-3xl" />

    <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
      <h1 className="text-8xl md:text-9xl font-extrabold text-orange mb-4">404</h1>
      <p className="text-2xl md:text-3xl font-bold text-white mb-3">Страница не найдена</p>
      <p className="text-white/50 text-lg mb-10">
        Возможно, она была удалена или вы ввели неверный адрес
      </p>

      <Button asChild className="bg-orange hover:bg-orange-light text-accent-foreground font-bold rounded-xl h-12 px-8 text-base mb-8">
        <Link to="/">
          <Home size={18} />
          На главную
        </Link>
      </Button>

      <div className="flex flex-wrap justify-center gap-4 text-sm">
        {[
          { label: "Услуги", href: "/#services" },
          { label: "Преимущества", href: "/#advantages" },
          { label: "Отзывы", href: "/#reviews" },
          { label: "Контакты", href: "/#cta" },
        ].map((l) => (
          <a key={l.href} href={l.href} className="text-white/50 hover:text-orange transition-colors">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default NotFound;
