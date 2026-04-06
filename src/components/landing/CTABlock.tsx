import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTABlock = () => (
  <section id="cta" className="py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy/90" />
    <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange/15 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Готовы начать?
        </h2>
        <p className="text-white/60 text-lg max-w-md mx-auto">
          Оставьте заявку и получите персональное предложение в течение 30 минут
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 space-y-4">
        <Input
          placeholder="Ваше имя"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl"
        />
        <Input
          placeholder="Телефон"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl"
        />
        <Input
          placeholder="Email"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl"
        />
        <Button className="w-full h-12 bg-orange hover:bg-orange-light text-accent-foreground font-bold rounded-xl text-base transition-transform hover:scale-[1.02]">
          Получить предложение
        </Button>
        <p className="text-white/40 text-xs text-center">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </div>
    </div>
  </section>
);

export default CTABlock;
