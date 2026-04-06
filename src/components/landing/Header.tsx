import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Как работаем", href: "#how-we-work" },
  { label: "Преимущества", href: "#advantages" },
  
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "h-16 bg-navy-deep/95 backdrop-blur-md shadow-lg"
          : "h-20 bg-transparent"
      }`}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-tight">
          <span className="text-white">Архи</span>
          <span className="text-orange">мед</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-white/80 hover:text-orange transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+78001234567"
            className="flex items-center gap-2 text-sm font-semibold text-white"
          >
            <Phone size={16} className="text-orange" />
            8 (800) 123-45-67
          </a>
          <Button
            onClick={() => scrollTo("#cta")}
            className="bg-orange hover:bg-orange-light text-accent-foreground font-semibold rounded-full px-6"
          >
            Оставить заявку
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-xl border-t border-border p-6 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-base font-medium text-foreground py-2"
            >
              {l.label}
            </button>
          ))}
          <a href="tel:+78001234567" className="flex items-center gap-2 text-sm font-semibold">
            <Phone size={16} className="text-orange" /> 8 (800) 123-45-67
          </a>
          <Button
            onClick={() => scrollTo("#cta")}
            className="bg-orange hover:bg-orange-light text-accent-foreground font-semibold rounded-full w-full"
          >
            Оставить заявку
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
