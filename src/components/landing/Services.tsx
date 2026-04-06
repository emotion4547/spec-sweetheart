import { useState } from "react";
import {
  ShoppingCart, Warehouse, UtensilsCrossed, SprayCan,
  Truck, Headphones, HardHat, Wheat, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Profession {
  name: string;
  price: string;
}

interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
  professions: Profession[];
}

const services: Service[] = [
  {
    icon: ShoppingCart,
    title: "Ритейл",
    desc: "Магазины, супермаркеты, торговые точки",
    professions: [
      { name: "Кассир", price: "от 1 800 ₽/смена" },
      { name: "Продавец (без спецподготовки)", price: "от 1 900 ₽/смена" },
      { name: "Работник торгового зала", price: "от 1 600 ₽/смена" },
      { name: "Мерчендайзер", price: "от 2 000 ₽/смена" },
      { name: "Грузчик", price: "от 2 000 ₽/смена" },
      { name: "Упаковщик товаров", price: "от 1 500 ₽/смена" },
    ],
  },
  {
    icon: Warehouse,
    title: "Склады и логистика",
    desc: "Складские комплексы, распределительные центры",
    professions: [
      { name: "Комплектовщик заказов", price: "от 2 200 ₽/смена" },
      { name: "Упаковщик", price: "от 1 800 ₽/смена" },
      { name: "Сортировщик", price: "от 1 700 ₽/смена" },
      { name: "Грузчик", price: "от 2 000 ₽/смена" },
      { name: "Разнорабочий на складе", price: "от 1 900 ₽/смена" },
      { name: "Кладовщик (начального уровня)", price: "от 2 100 ₽/смена" },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Общепит",
    desc: "Кафе, рестораны, фастфуд",
    professions: [
      { name: "Официант", price: "от 1 800 ₽/смена" },
      { name: "Бариста (базовый уровень)", price: "от 2 000 ₽/смена" },
      { name: "Посудомойщик", price: "от 1 500 ₽/смена" },
      { name: "Кухонный рабочий", price: "от 1 600 ₽/смена" },
      { name: "Помощник повара", price: "от 1 800 ₽/смена" },
      { name: "Уборщик кухни", price: "от 1 400 ₽/смена" },
    ],
  },
  {
    icon: SprayCan,
    title: "Клининг и обслуживание",
    desc: "Уборка помещений, техническое обслуживание",
    professions: [
      { name: "Уборщик / уборщица", price: "от 1 500 ₽/смена" },
      { name: "Дворник", price: "от 1 400 ₽/смена" },
      { name: "Клинер", price: "от 1 600 ₽/смена" },
      { name: "Технический работник", price: "от 2 000 ₽/смена" },
      { name: "Мойщик окон", price: "от 2 000 ₽/смена" },
    ],
  },
  {
    icon: Truck,
    title: "Доставка и транспорт",
    desc: "Курьерская доставка, перевозки",
    professions: [
      { name: "Курьер (пеший, вело, авто)", price: "от 2 200 ₽/смена" },
      { name: "Водитель-курьер", price: "от 3 000 ₽/смена" },
      { name: "Экспедитор (без квалификации)", price: "от 2 500 ₽/смена" },
    ],
  },
  {
    icon: Headphones,
    title: "Колл-центры и офис",
    desc: "Простая офисная работа, обзвон клиентов",
    professions: [
      { name: "Оператор call-центра", price: "от 1 800 ₽/смена" },
      { name: "Оператор ввода данных", price: "от 1 600 ₽/смена" },
      { name: "Диспетчер (базовый уровень)", price: "от 1 900 ₽/смена" },
    ],
  },
  {
    icon: HardHat,
    title: "Строительство",
    desc: "Строительные площадки, физический труд",
    professions: [
      { name: "Разнорабочий", price: "от 2 200 ₽/смена" },
      { name: "Подсобный рабочий", price: "от 2 000 ₽/смена" },
      { name: "Демонтажник", price: "от 2 500 ₽/смена" },
      { name: "Грузчик на стройке", price: "от 2 300 ₽/смена" },
    ],
  },
  {
    icon: Wheat,
    title: "Сельское хозяйство",
    desc: "Полевые работы, сбор урожая, теплицы",
    professions: [
      { name: "Сборщик урожая", price: "от 1 800 ₽/смена" },
      { name: "Рабочий фермы", price: "от 1 700 ₽/смена" },
      { name: "Тепличный работник", price: "от 1 600 ₽/смена" },
      { name: "Сортировщик овощей и фруктов", price: "от 1 500 ₽/смена" },
    ],
  },
  {
    icon: Shield,
    title: "Охрана и базовое обслуживание",
    desc: "Охрана объектов, контроль доступа",
    professions: [
      { name: "Охранник", price: "от 2 200 ₽/смена" },
      { name: "Сторож", price: "от 1 800 ₽/смена" },
      { name: "Вахтёр", price: "от 1 700 ₽/смена" },
      { name: "Контролёр", price: "от 2 000 ₽/смена" },
    ],
  },
];

const Services = () => {
  const [selected, setSelected] = useState<Service | null>(null);
  const [selectedProfession, setSelectedProfession] = useState<{ profession: Profession; service: Service } | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({ title: "Заполните обязательные поля", description: "Имя и телефон обязательны", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка отправлена!", description: `Мы свяжемся с вами по поводу: ${selectedProfession?.profession.name}` });
    setSelectedProfession(null);
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">Наши услуги</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Подберём персонал под вашу задачу
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                onClick={() => setSelected(s)}
              >
                Подробнее
              </Button>
            </div>
          ))}
        </div>

        {/* Individual request block */}
        <div className="mt-12 text-center bg-muted/50 rounded-2xl border border-border p-8">
          <p className="text-lg font-semibold text-foreground mb-2">
            Не нашли подходящую специальность?
          </p>
          <p className="text-muted-foreground text-sm mb-5">
            Оставьте заявку — мы подберём персонал индивидуально под ваши задачи
          </p>
          <Button
            className="rounded-full bg-orange hover:bg-orange-light text-accent-foreground font-bold px-8 h-12 text-base transition-transform hover:scale-[1.02]"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Оставить заявку
          </Button>
        </div>
      </div>

      {/* Service details dialog */}
      <Dialog open={!!selected && !selectedProfession} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl">
              {selected && <selected.icon size={24} className="text-orange" />}
              {selected?.title}
            </DialogTitle>
            <DialogDescription>{selected?.desc}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-3">
            {selected?.professions.map((p, i) => (
              <div
                key={i}
                onClick={() => setSelectedProfession({ profession: p, service: selected })}
                className="group/item flex items-center justify-between rounded-xl border border-border bg-muted/50 px-5 py-3 cursor-pointer hover:bg-orange/10 hover:border-orange/30 hover:shadow-md transition-all duration-200 hover:translate-x-1"
              >
                <span className="font-medium text-foreground group-hover/item:text-orange transition-colors">{p.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-orange font-semibold text-sm whitespace-nowrap">{p.price}</span>
                  <span className="text-orange/0 group-hover/item:text-orange transition-all duration-200 text-lg">→</span>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Request form dialog */}
      <Dialog open={!!selectedProfession} onOpenChange={(open) => {
        if (!open) {
          setSelectedProfession(null);
          setFormData({ name: "", phone: "", email: "" });
        }
      }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Оставить заявку</DialogTitle>
            <DialogDescription>
              {selectedProfession?.profession.name} — {selectedProfession?.profession.price}
              <br />
              <span className="text-muted-foreground">Категория: {selectedProfession?.service.title}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <Input
              placeholder="Ваше имя *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 rounded-xl"
            />
            <Input
              placeholder="Телефон *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12 rounded-xl"
            />
            <Input
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 rounded-xl"
            />
            <Button
              onClick={handleSubmit}
              className="w-full h-12 bg-orange hover:bg-orange-light text-accent-foreground font-bold rounded-xl text-base transition-transform hover:scale-[1.02]"
            >
              Отправить заявку
            </Button>
            <p className="text-muted-foreground text-xs text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
