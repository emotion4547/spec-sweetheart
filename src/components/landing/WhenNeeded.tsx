import { TrendingUp, CalendarDays, UserMinus, Building2, Zap, Repeat } from "lucide-react";

const items = [
  { icon: CalendarDays, title: "Сезонные пики", text: "Быстрый набор персонала в периоды повышенного спроса — праздники, распродажи, сезоны" },
  { icon: TrendingUp, title: "Масштабирование", text: "Расширение штата при росте бизнеса без затрат на поиск и оформление" },
  { icon: UserMinus, title: "Замена штатных", text: "Покрытие отпусков, больничных и отсутствий без простоев" },
  { icon: Building2, title: "Новый объект", text: "Комплектование штата для нового склада или производственной площадки" },
  { icon: Zap, title: "Срочные задачи", text: "Внеплановые работы, инвентаризации, переезды и разовые проекты" },
  { icon: Repeat, title: "Оптимизация ФОТ", text: "Снижение расходов на персонал через аутсорсинг непрофильных функций" },
];

const WhenNeeded = () => (
  <section className="py-20 lg:py-28 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">Ситуации</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Когда нужен аутсорсинг персонала
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex gap-5 items-start group">
            <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center shrink-0 group-hover:bg-orange/20 transition-colors">
              <item.icon size={22} className="text-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
              <div className="w-10 h-0.5 bg-orange/40 mb-2 rounded-full" />
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhenNeeded;
