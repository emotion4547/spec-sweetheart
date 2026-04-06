import { Package, Boxes, Gift, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Package, title: "Грузчики", desc: "Погрузка, разгрузка и перемещение товаров на складе и производстве" },
  { icon: Boxes, title: "Комплектовщики", desc: "Сборка и комплектация заказов по листам подбора с высокой точностью" },
  { icon: Gift, title: "Упаковщики", desc: "Упаковка, маркировка и подготовка продукции к отправке" },
  { icon: Hammer, title: "Разнорабочие", desc: "Подсобные работы, уборка, помощь на производственных линиях" },
];

const Services = () => (
  <section id="services" className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">Наши услуги</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Подберём персонал под вашу задачу
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="hover-lift group bg-card rounded-2xl p-8 border border-border text-center"
          >
            <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors">
              <s.icon size={28} className="text-orange" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
            <Button
              variant="outline"
              className="rounded-full border-orange/30 text-orange hover:bg-orange hover:text-accent-foreground transition-all"
            >
              Подробнее
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
