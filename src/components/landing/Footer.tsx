import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contacts" className="bg-navy-deep text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="text-2xl font-extrabold mb-4">
            <span className="text-white">Архи</span>
            <span className="text-orange">мет</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            Аутсорсинг линейного персонала для складов, производств и логистических центров по всей России.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-white/70">Меню</h4>
          <ul className="space-y-2 text-sm text-white/50">
            {["Услуги", "Как работаем", "Преимущества", "Стоимость", "FAQ"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-orange transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-white/70">Контакты</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-orange" />
              <a href="tel:+78001234567" className="hover:text-white transition-colors">
                8 (800) 123-45-67
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-orange" />
              <a href="mailto:info@archimet.ru" className="hover:text-white transition-colors">
                info@archimet.ru
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-orange mt-0.5" />
              <span>Москва, ул. Примерная, д. 1</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-white/70">Мы в соцсетях</h4>
          <div className="flex gap-3">
            {["TG", "VK", "WA"].map((s) => (
              <div
                key={s}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white/50 hover:bg-orange hover:text-white transition-colors cursor-pointer"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/30 text-xs">
        © 2024 Архимет. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
