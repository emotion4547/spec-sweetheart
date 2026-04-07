import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Как быстро вы можете вывести персонал?", a: "В стандартном режиме — в течение 24 часов с момента подтверждения заявки. В срочных случаях возможен вывод в тот же день." },
  { q: "Какие документы нужны для начала работы?", a: "Для заключения договора потребуется карточка компании и реквизиты. Весь документооборот берём на себя." },
  { q: "Что если сотрудник не подойдёт?", a: "Мы произведём бесплатную замену в течение 2 часов. Качество — наш приоритет." },
  { q: "Как происходит оплата?", a: "Оплата по факту отработанных часов. Выставляем счёт еженедельно или ежемесячно — как удобно вам." },
  { q: "Работаете ли вы в регионах?", a: "Да, мы работаем по всей России. Имеем представительства в 50+ городах." },
  { q: "Несёте ли вы ответственность за сотрудников?", a: "Полностью. Все сотрудники оформлены у нас по ТК РФ, мы несём все кадровые и юридические риски." },
];

const FAQ = () => (
  <section id="faq" className="py-20 lg:py-28 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Частые вопросы
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
