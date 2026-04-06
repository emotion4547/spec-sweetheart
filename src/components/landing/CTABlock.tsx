import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CTABlock = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

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
    });
    setLoading(false);
    if (error) {
      toast({ title: "Ошибка", description: "Не удалось отправить заявку", variant: "destructive" });
    } else {
      toast({ title: "Заявка отправлена!", description: "Мы свяжемся с вами в ближайшее время" });
      setFormData({ name: "", phone: "", email: "" });
    }
  };

  return (
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
            placeholder="Ваше имя *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl"
          />
          <Input
            placeholder="Телефон *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl"
          />
          <Input
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl"
          />
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full h-12 bg-orange hover:bg-orange-light text-accent-foreground font-bold rounded-xl text-base transition-transform hover:scale-[1.02]"
          >
            {loading ? "Отправка..." : "Получить предложение"}
          </Button>
          <p className="text-white/40 text-xs text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
