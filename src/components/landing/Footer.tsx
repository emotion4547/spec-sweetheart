import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="contacts" className="bg-navy-deep text-white py-16 overflow-hidden">
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
            {[
              { label: "Услуги", href: "#services" },
              { label: "Как работаем", href: "#how-we-work" },
              { label: "Преимущества", href: "#advantages" },
              { label: "FAQ", href: "#faq" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-orange transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-white/70">Контакты</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-start gap-2 min-w-0">
              <Phone size={14} className="text-orange shrink-0 mt-0.5" />
              <a href="tel:+79228506001" className="hover:text-white transition-colors break-all">
                +7 (922) 850-60-01
              </a>
            </li>
            <li className="flex items-start gap-2 min-w-0">
              <Mail size={14} className="text-orange shrink-0 mt-0.5" />
              <a href="mailto:oren.arhimed@mail.ru" className="hover:text-white transition-colors break-all">
                oren.arhimed@mail.ru
              </a>
            </li>
            <li className="flex items-start gap-2 min-w-0">
              <MapPin size={14} className="text-orange mt-0.5 shrink-0" />
              <span className="break-words">460026, г. Оренбург, ул. Одесская, д. 100</span>
            </li>
          </ul>
        </div>

        {/* Реквизиты */}
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-white/70">Реквизиты</h4>
          <ul className="space-y-1 text-xs text-white/40 break-words">
            <li>ООО «АРХИМЕД ЛИР»</li>
            <li>ИНН: 5610256637</li>
            <li>ОГРН: 1255600003955</li>
            <li>КПП: 5611001001</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
        <span>© {new Date().getFullYear()} Архимед. Все права защищены.</span>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Пользовательское соглашение</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
