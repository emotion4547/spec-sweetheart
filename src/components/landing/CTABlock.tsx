import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CTABlock = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

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
      supabase.functions.invoke("notify-max", {
        body: { name: formData.name.trim(), phone: formData.phone.trim(), email: formData.email.trim() || null },
      }).catch(() => {});
      setFormData({ name: "", phone: "", email: "" });
      setAgreed(false);
      navigate("/thank-you");
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
          <div className="flex items-start gap-3">
            <Checkbox
              id="cta-agree"
              checked={agreed}
              onCheckedChange={(v) => setAgreed(v === true)}
              className="mt-0.5 border-white/40 data-[state=checked]:bg-orange data-[state=checked]:border-orange"
            />
            <label htmlFor="cta-agree" className="text-white/50 text-xs leading-relaxed cursor-pointer">
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
            {loading ? "Отправка..." : "Получить предложение"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
