import { Link } from "react-router-dom";
import { CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy/90" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange/10 rounded-full blur-3xl" />

    <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange/20 mb-8 animate-float">
        <CheckCircle className="w-14 h-14 text-orange" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Спасибо за заявку!
      </h1>
      <p className="text-white/60 text-lg mb-10">
        Мы получили вашу заявку и свяжемся с вами в ближайшее время
      </p>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-10 space-y-4">
        <p className="text-white/50 text-sm">Для срочных вопросов:</p>
        <a href="tel:+79228506001" className="flex items-center justify-center gap-2 text-white font-semibold hover:text-orange transition-colors">
          <Phone size={18} className="text-orange" />
          +7 (922) 850-60-01
        </a>
        <a href="mailto:oren.arhimed@mail.ru" className="flex items-center justify-center gap-2 text-white/70 hover:text-orange transition-colors">
          <Mail size={18} className="text-orange" />
          oren.arhimed@mail.ru
        </a>
      </div>

      <Button asChild className="bg-orange hover:bg-orange-light text-accent-foreground font-bold rounded-xl h-12 px-8 text-base">
        <Link to="/">
          <ArrowLeft size={18} />
          Вернуться на главную
        </Link>
      </Button>
    </div>
  </section>
);

export default ThankYou;
