import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const includes = [
  "Подбор и вывод персонала",
  "Оформление по ТК РФ",
  "Замена в течение 2 часов",
  "Персональный менеджер",
  "Еженедельная отчётность",
];

const Pricing = () => (
  <section id="pricing" className="py-20 lg:py-28 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">Тарифы</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Стоимость</h2>
      </div>

      <div className="max-w-md mx-auto bg-card rounded-3xl border-2 border-orange/30 p-10 text-center shadow-xl hover-lift">
        <p className="text-muted-foreground text-sm mb-2">Стоимость от</p>
        <div className="text-5xl font-extrabold text-foreground mb-1">
          280 ₽<span className="text-xl font-semibold text-muted-foreground">/час</span>
        </div>
        <p className="text-muted-foreground text-sm mb-8">за одного сотрудника</p>

        <div className="space-y-3 text-left mb-8">
          {includes.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check size={18} className="text-orange shrink-0" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>

        <Button
          className="w-full h-12 bg-orange hover:bg-orange-light text-accent-foreground font-bold rounded-xl text-base transition-transform hover:scale-[1.02]"
          onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
        >
          Рассчитать стоимость
        </Button>
      </div>
    </div>
  </section>
);

export default Pricing;
