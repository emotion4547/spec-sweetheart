import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import retailImg from "@/assets/services/retail.jpg";
import warehouseImg from "@/assets/services/warehouse.jpg";
import foodImg from "@/assets/services/food.jpg";
import cleaningImg from "@/assets/services/cleaning.jpg";
import deliveryImg from "@/assets/services/delivery.jpg";
import callcenterImg from "@/assets/services/callcenter.jpg";
import constructionImg from "@/assets/services/construction.jpg";
import agricultureImg from "@/assets/services/agriculture.jpg";
import securityImg from "@/assets/services/security.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
  image: string;
  title: string;
  desc: string;
  professions: Profession[];
}

const services: Service[] = [
  {
    image: retailImg,
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
    image: warehouseImg,
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
    image: foodImg,
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
    image: cleaningImg,
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
    image: deliveryImg,
    title: "Доставка и транспорт",
    desc: "Курьерская доставка, перевозки",
    professions: [
      { name: "Курьер (пеший, вело, авто)", price: "от 2 200 ₽/смена" },
      { name: "Водитель-курьер", price: "от 3 000 ₽/смена" },
      { name: "Экспедитор (без квалификации)", price: "от 2 500 ₽/смена" },
    ],
  },
  {
    image: callcenterImg,
    title: "Колл-центры и офис",
    desc: "Простая офисная работа, обзвон клиентов",
    professions: [
      { name: "Оператор call-центра", price: "от 1 800 ₽/смена" },
      { name: "Оператор ввода данных", price: "от 1 600 ₽/смена" },
      { name: "Диспетчер (базовый уровень)", price: "от 1 900 ₽/смена" },
    ],
  },
  {
    image: constructionImg,
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
    image: agricultureImg,
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
    image: securityImg,
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

const ScrollRevealCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Services = () => {
  const [selected, setSelected] = useState<Service | null>(null);
  const [selectedProfession, setSelectedProfession] = useState<{ profession: Profession; service: Service } | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({ title: "Заполните обязательные поля", description: "Имя и телефон обязательны", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("requests").insert({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || null,
      service: selectedProfession?.service.title || null,
      profession: selectedProfession?.profession.name || null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Ошибка", description: "Не удалось отправить заявку", variant: "destructive" });
    } else {
      supabase.functions.invoke("notify-max", {
        body: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || null,
          service: selectedProfession?.service.title || null,
          profession: selectedProfession?.profession.name || null,
        },
      }).catch(() => {});
      if (typeof ym === "function") ym(108428947, "reachGoal", "service_form_submit");
      setSelectedProfession(null);
      setFormData({ name: "", phone: "", email: "" });
      setAgreed(false);
      navigate("/thank-you");
    }
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
            <ScrollRevealCard key={i} index={i}>
              <div
                className="hover-lift group bg-card rounded-2xl overflow-hidden border border-orange/20 text-center hover:border-orange/40 transition-colors flex flex-col h-full"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <Button
                    variant="outline"
                    className="rounded-full border-orange/40 text-orange hover:bg-orange hover:text-foreground font-semibold transition-all"
                    onClick={() => setSelected(s)}
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </ScrollRevealCard>
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
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
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
              {selected && <img src={selected.image} alt={selected.title} className="w-8 h-8 rounded-lg object-cover" />}
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
          setAgreed(false);
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
            <div className="flex items-start gap-3">
              <Checkbox
                id="service-agree"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="mt-0.5"
              />
              <label htmlFor="service-agree" className="text-muted-foreground text-xs leading-relaxed cursor-pointer">
                Я соглашаюсь с{" "}
                <Link to="/privacy" target="_blank" className="text-orange hover:underline">
                  Политикой конфиденциальности
                </Link>{" "}
                и даю согласие на обработку персональных данных
              </label>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={loading || !agreed}
              className="w-full h-12 bg-orange hover:bg-orange-light text-accent-foreground font-bold rounded-xl text-base transition-transform hover:scale-[1.02]"
            >
              {loading ? "Отправка..." : "Отправить заявку"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
