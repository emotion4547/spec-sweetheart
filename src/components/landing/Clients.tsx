const clients = [
  "Ozon", "Wildberries", "Яндекс.Маркет", "СберЛогистика", "DPD", "СДЭК", "Leroy Merlin", "X5 Group",
];

const Clients = () => (
  <section className="py-16 border-y border-border">
    <div className="container mx-auto px-4">
      <p className="text-center text-muted-foreground text-sm mb-8 uppercase tracking-widest font-semibold">
        Нам доверяют
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {clients.map((name, i) => (
          <div
            key={i}
            className="text-lg md:text-xl font-bold text-muted-foreground/40 hover:text-foreground/60 transition-colors cursor-default select-none"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
