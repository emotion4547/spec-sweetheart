import { AlertTriangle, UserX, Clock, DollarSign } from "lucide-react";

const problems = [
  { icon: UserX, title: "Текучка кадров", desc: "Постоянный поиск и обучение новых сотрудников отнимает время и ресурсы" },
  { icon: Clock, title: "Нехватка людей", desc: "Недоукомплектованность штата приводит к срыву сроков и потере клиентов" },
  { icon: DollarSign, title: "Высокие затраты", desc: "Содержание штатных сотрудников обходится дороже аутсорсинга на 30-40%" },
  { icon: AlertTriangle, title: "Кадровые риски", desc: "Больничные, прогулы и увольнения создают постоянные простои" },
];

const Problems = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">Знакомо?</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Проблемы, которые мы решаем
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <div
            key={i}
            className="hover-lift bg-card rounded-2xl p-8 border border-border group"
          >
            <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-orange/10 transition-colors">
              <p.icon size={24} className="text-destructive group-hover:text-orange transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Problems;
