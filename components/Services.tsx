import Container from "./Container";
import {
  TrendingUp,
  PenTool,
  Target,
  Film,
  BarChart3,
  Star,
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    title: "Контент-стратегия",
    description: "Выстраиваем систему, которая превращает просмотры в заявки",
    icon: TrendingUp,
  },
  {
    title: "Сценарии",
    description: "Готовые идеи, сценарии и механики удержания внимания",
    icon: PenTool,
  },
  {
    title: "Продюсирование",
    description: "Полностью выстраиваем структуру контента и воронку продаж",
    icon: Target,
  },
  {
    title: "Монтаж",
    description:
      "Динамичный монтаж, титры, эффекты, музыка и работа с удержанием",
    icon: Film,
  },
  {
    title: "Аналитика",
    description: "Находим форматы и масштабируем",
    icon: BarChart3,
  },
  {
    title: "Личный бренд",
    description: "Превращаем экспертность в узнаваемый медиаобраз",
    icon: Star,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20">
      <div className="glow-orb glow-orb-violet animate-drift left-1/4 top-0 h-96 w-96" />

      <Container>
        {/* Заголовок */}
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#4a3324]">
            Твой контент начнёт
            <br />
            <span className="gradient-text-violet glow-violet">приводить клиентов</span>
          </h2>
        </Reveal>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={index * 80}>
                <div className="glass-card h-full rounded-2xl p-8 group">
                  <Icon className="w-10 h-10 text-[#d9803f] mb-4 group-hover:scale-110 group-hover:text-[#c9622f] transition" />
                  <h3 className="text-xl font-semibold mb-3 text-[#4a3324]">
                    {service.title}
                  </h3>
                  <p className="text-[#8a6b55] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Фраза */}
        <Reveal className="text-center mt-14">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic font-semibold text-shimmer-gold glow-violet-strong">
            Не просто короткие ролики,
            <br />а полноценная система
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
