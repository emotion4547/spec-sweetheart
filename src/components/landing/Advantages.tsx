import { Shield, Headphones, RefreshCw, FileCheck, Banknote, Award } from "lucide-react";

const advantages = [
  { icon: Shield, title: "Юридическая чистота", desc: "Полное оформление по ТК РФ — все риски берём на себя" },
  { icon: Headphones, title: "Персональный менеджер", desc: "Выделенный специалист на связи 24/7 для решения любых вопросов" },
  { icon: RefreshCw, title: "Бесплатная замена", desc: "Заменим сотрудника в течение 2 часов, если он не подошёл" },
  { icon: FileCheck, title: "Прозрачная отчётность", desc: "Еженедельные отчёты по KPI и учёту рабочего времени" },
  { icon: Banknote, title: "Гибкая оплата", desc: "Платите только за фактически отработанные часы" },
  { icon: Award, title: "Гарантия качества", desc: "Все сотрудники проходят проверку и инструктаж перед выходом" },
];

const Advantages = () => (
  <section id="advantages" className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">Почему мы</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Наши преимущества
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {advantages.map((a, i) => (
          <div key={i} className="hover-lift flex gap-5 bg-card rounded-2xl p-6 border border-border items-start">
            <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
              <a.icon size={22} className="text-orange" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Advantages;
