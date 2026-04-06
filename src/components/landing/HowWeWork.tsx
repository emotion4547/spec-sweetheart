import { FileText, Search, UserCheck, BarChart3 } from "lucide-react";
import logo from "@/assets/logo.png";

const steps = [
  { icon: FileText, title: "Заявка", desc: "Оставьте заявку на сайте или по телефону" },
  { icon: Search, title: "Подбор", desc: "Подберём подходящих сотрудников за 2 часа" },
  { icon: UserCheck, title: "Выход на объект", desc: "Персонал выходит на работу в течение 24 часов" },
  { icon: BarChart3, title: "Контроль", desc: "Контролируем качество и заменяем сотрудников при необходимости" },
];

const HowWeWork = () => (
  <section id="how-we-work" className="py-20 lg:py-28 bg-secondary/50 relative overflow-hidden">
    {/* Background logo watermark */}
    <img
      src={logo}
      alt=""
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[700px] h-auto opacity-[0.04] pointer-events-none select-none"
    />
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">Процесс</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Как мы работаем
        </h2>
      </div>

      {/* Desktop timeline */}
      <div className="hidden md:block relative max-w-4xl mx-auto">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border" />

        <div className="grid grid-cols-4 gap-8 relative">
          {steps.map((step, i) => {
            const isUp = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col items-center ${isUp ? "pt-0 pb-32" : "pt-32 pb-0"}`}>
                {/* Dot */}
                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange border-4 border-background z-10" />

                <div className={`text-center ${isUp ? "order-first" : "order-last"}`}>
                  <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon size={28} className="text-orange" />
                  </div>
                  <div className="text-xs font-bold text-orange mb-1">Шаг {i + 1}</div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-8">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-5 items-start">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                <step.icon size={22} className="text-orange" />
              </div>
              {i < steps.length - 1 && <div className="w-0.5 h-12 bg-border mt-2" />}
            </div>
            <div>
              <div className="text-xs font-bold text-orange mb-1">Шаг {i + 1}</div>
              <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWork;
