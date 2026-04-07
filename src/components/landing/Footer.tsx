import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="contacts" className="bg-navy-deep text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="Архимед" className="h-20 w-auto brightness-0 invert mb-4 -my-3" />
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
              <a href="tel:+79228506001" className="hover:text-white transition-colors">
                +7 (922) 850-60-01
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-orange" />
              <a href="mailto:oren.arhimed@mail.ru" className="hover:text-white transition-colors">
                oren.arhimed@mail.ru
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-orange mt-0.5" />
              <span>460026, г. Оренбург, ул. Одесская, д. 100</span>
            </li>
          </ul>
        </div>

        {/* Реквизиты */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-white/70">Реквизиты</h4>
          <ul className="space-y-1 text-xs text-white/40">
            <li>ООО «АРХИМЕД ЛИР»</li>
            <li>ИНН: 5610256637</li>
            <li>ОГРН: 1255600003955</li>
            <li>КПП: 5611001001</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/30 text-xs">
        © {new Date().getFullYear()} Архимед. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
