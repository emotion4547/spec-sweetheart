import halyal from "@/assets/clients/halyal.svg";
import wheat from "@/assets/clients/logo-wheat.png";
import safa from "@/assets/clients/safa.png";
import vostochnaya from "@/assets/clients/vostochnaya.jpeg";
import orenburgskaya from "@/assets/clients/orenburgskaya.jpg";
import monetka from "@/assets/clients/monetka.webp";
import stavropolskiy from "@/assets/clients/stavropolskiy.jpg";
import vladimirskiy from "@/assets/clients/vladimirskiy.png";
import logoBlack from "@/assets/clients/logo-black.svg";
import agromax from "@/assets/clients/agromax.png";

const clients = [
  { name: "Халяль", logo: halyal },
  { name: "Колос", logo: wheat },
  { name: "Сафа", logo: safa },
  { name: "Восточная", logo: vostochnaya },
  { name: "Оренбургская", logo: orenburgskaya },
  { name: "Монетка", logo: monetka },
  { name: "Ставропольский Бройлер", logo: stavropolskiy },
  { name: "Владимирский Стандарт", logo: vladimirskiy },
  { name: "Вкусвилл", logo: logoBlack },
  { name: "Agromax", logo: agromax },
];

const Clients = () => (
  <section className="py-16 border-y border-border">
    <div className="container mx-auto px-4">
      <p className="text-center text-muted-foreground text-sm mb-8 uppercase tracking-widest font-semibold">
        Нам доверяют
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {clients.map((client, i) => (
          <div
            key={i}
            className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-default select-none"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-10 md:h-14 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
