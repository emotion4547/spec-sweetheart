import { useState, useEffect, useRef } from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Presentation = () => {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy/90" />
      <div className="hidden md:block absolute top-1/3 left-1/4 w-72 h-72 bg-orange/15 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-1/4 right-1/3 w-60 h-60 bg-orange/10 rounded-full blur-3xl" />

      <div
        ref={ref}
        className="container mx-auto px-4 relative z-10 text-center transition-all duration-1000 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        }}
      >
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">Познакомьтесь с нами</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Скачайте нашу презентацию
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
          Узнайте больше о компании «Архимед», наших услугах, ценах и преимуществах работы с нами
        </p>

        <a
          href="/files/arhimed-presentation.pdf"
          download="Архимед_Презентация.pdf"
          onClick={() => { if (typeof ym === "function") ym(108428947, "reachGoal", "download_presentation"); }}
          className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-light text-accent-foreground font-bold rounded-xl h-14 px-10 text-base transition-transform hover:scale-105"
        >
          <FileDown size={20} />
          Скачать презентацию
        </a>

        <p className="text-white/30 text-xs mt-4">PDF · Коммерческое предложение</p>
      </div>
    </section>
  );
};

export default Presentation;
