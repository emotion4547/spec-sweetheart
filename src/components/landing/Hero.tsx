import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Clock, MapPin, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import worker from "@/assets/worker.png";

const floatingCards = [
  { icon: Users, label: "1000+ сотрудников", pos: "top-0 -right-8", delay: "" },
  { icon: Clock, label: "Вывод за 24 часа", pos: "top-[18%] -left-12", delay: "animate-float-delayed" },
  { icon: MapPin, label: "Работаем по всей РФ", pos: "top-[36%] -right-10", delay: "" },
  { icon: ShieldCheck, label: "Контроль качества", pos: "top-[54%] -left-14", delay: "animate-float-delayed" },
  { icon: Clock, label: "Гарантия замены", pos: "top-[72%] -right-8", delay: "animate-float-delayed" },
  { icon: Users, label: "Договор и документы", pos: "top-[90%] -left-10", delay: "" },
];

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-visible py-16 lg:py-20 min-h-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy/90" />
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full text-background" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L0,120Z"
          />
        </svg>
      </div>
      {/* Blur blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight -mt-8">
            Аутсорсинг линейного персонала{" "}
            <span className="text-orange">за 24 часа</span>
          </h1>
          <p className="text-lg text-white/70 max-w-lg">
            Предоставим квалифицированных сотрудников для вашего склада, производства
            или логистического центра. Без рисков — с гарантией замены.
          </p>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 space-y-3 max-w-xl border border-white/20 shadow-lg shadow-black/20">
            <div className="grid grid-cols-2 gap-3">
              <Input
                placeholder="Ваше имя"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 rounded-xl"
              />
              <Input
                placeholder="Телефон"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <select className="w-full h-10 rounded-xl bg-white/10 border border-white/20 text-white/70 px-3 text-sm">
                <option value="">Выберите услугу</option>
                <option>Грузчики</option>
                <option>Комплектовщики</option>
                <option>Упаковщики</option>
                <option>Разнорабочие</option>
              </select>
              <Button className="w-full h-10 bg-orange hover:bg-orange-light text-accent-foreground font-bold rounded-xl text-sm transition-transform hover:scale-[1.02]">
                Получить предложение
              </Button>
            </div>
          </div>
        </div>

        {/* Right — circle + floating cards */}
        <div className="hidden lg:flex justify-center relative mb-[-80px]">
          
          <img src={worker} alt="Сотрудник Архимед" className="w-[28rem] xl:w-[34rem] h-auto object-contain relative z-20" style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 8px 16px rgba(0,0,0,0.3))" }} />

          {floatingCards.map((c, i) => (
            <div
              key={i}
              className={`absolute ${c.pos} bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 flex items-center gap-3 border border-white/10 ${
                c.delay || "animate-float"
              }`}
            >
              <c.icon size={20} className="text-orange" />
              <span className="text-white text-sm font-medium whitespace-nowrap">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
