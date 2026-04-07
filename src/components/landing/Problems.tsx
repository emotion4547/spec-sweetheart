import { useState, useEffect, useRef } from "react";
import turnoverImg from "@/assets/problems/turnover.jpg";
import shortageImg from "@/assets/problems/shortage.jpg";
import costsImg from "@/assets/problems/costs.jpg";
import risksImg from "@/assets/problems/risks.jpg";

const problems = [
  { image: turnoverImg, title: "Текучка кадров", desc: "Постоянный поиск и обучение новых сотрудников отнимает время и ресурсы" },
  { image: shortageImg, title: "Нехватка людей", desc: "Недоукомплектованность штата приводит к срыву сроков и потере клиентов" },
  { image: costsImg, title: "Высокие затраты", desc: "Содержание штатных сотрудников обходится дороже аутсорсинга на 30-40%" },
  { image: risksImg, title: "Кадровые риски", desc: "Больничные, прогулы и увольнения создают постоянные простои" },
];

const directions = [
  { x: -60, y: 40, rotate: -8 },
  { x: 0, y: 60, rotate: 5 },
  { x: 0, y: 60, rotate: -5 },
  { x: 60, y: 40, rotate: 8 },
];

const RevealCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const d = directions[index] || directions[0];

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0) translateY(0) rotate(0deg) scale(1)"
          : `translateX(${d.x}px) translateY(${d.y}px) rotate(${d.rotate}deg) scale(0.85)`,
        transitionDuration: "800ms",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {children}
    </div>
  );
};

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
          <RevealCard key={i} index={i}>
            <div className="hover-lift bg-card rounded-2xl overflow-hidden border border-orange/15 group hover:border-orange/30 transition-colors flex flex-col h-full">
              <div className="h-40 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
    </div>
  </section>
);

export default Problems;
