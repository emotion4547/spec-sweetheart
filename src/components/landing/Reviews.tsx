import { Star } from "lucide-react";

const reviews = [
  {
    text: "Сотрудничаем с Архимед уже 2 года. Персонал выходит вовремя, замены оперативные. Рекомендую всем, кто устал от текучки.",
    name: "Алексей Петров",
    role: "Директор склада, Ozon",
  },
  {
    text: "Благодаря аутсорсингу сократили расходы на ФОТ на 35%. Менеджер всегда на связи, отчётность прозрачная.",
    name: "Мария Иванова",
    role: "HR-директор, Leroy Merlin",
  },
  {
    text: "В сезон нужно было вывести 200 человек за 3 дня — справились. Качество работы на высоте.",
    name: "Дмитрий Козлов",
    role: "Операционный директор, Wildberries",
  },
  {
    text: "Перешли на аутсорсинг полгода назад. Забыли про проблемы с больничными и прогулами. Отличный сервис!",
    name: "Елена Сидорова",
    role: "Руководитель логистики, СДЭК",
  },
];

const Reviews = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">Отзывы</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Что говорят клиенты
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="hover-lift bg-card rounded-2xl p-8 border border-border">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="text-orange fill-orange" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-6">"{r.text}"</p>
            <div>
              <p className="font-bold text-foreground text-sm">{r.name}</p>
              <p className="text-muted-foreground text-xs">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
