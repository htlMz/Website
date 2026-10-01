import Container from "./Container";
import {
  TrendingUp,
  PenTool,
  Target,
  Film,
  BarChart3,
  Star,
} from "lucide-react";

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
    <section id="services" className="scroll-mt-24 py-24 bg-[#0b0713]">
      <Container>
        {/* Разделительная линия сверху */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent mb-20" />

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em]">
            Твой контент начнёт
            <br />
            <span className="gradient-text glow-violet">приводить клиентов</span>
          </h2>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-violet-400/40 transition-all duration-300 group"
              >
                <Icon className="w-10 h-10 text-violet-400 mb-4 group-hover:scale-110 group-hover:text-violet-200 transition" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Фраза перед линией */}
        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic font-semibold text-violet-200 glow-violet-strong">
            Не просто короткие ролики,
            <br />а полноценная система
          </p>
        </div>

        {/* Разделительная линия снизу */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent mt-20" />
      </Container>
    </section>
  );
}
