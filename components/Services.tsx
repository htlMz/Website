import Container from "./Container";
import {
  ClipboardList,
  PenTool,
  Target,
  Film,
  BarChart3,
  Star,
} from "lucide-react";
import Reveal from "./Reveal";
import FlipCard from "./FlipCard";

const services = [
  {
    title: "Контент-стратегия",
    description:
      "Разбираю нишу, ЦА и конкурентов. На выходе план тем и форматов на 1-3 месяца, где у каждого ролика есть цель",
    icon: ClipboardList,
  },
  {
    title: "Упаковка профиля",
    description:
      "Шапка, закрепы и лента, которые за 3 секунды объясняют, кто вы и зачем на вас подписываться",
    icon: Star,
  },
  {
    title: "Сценарии Reels",
    description:
      "Пишу покадровые сценарии с хуком, удержанием и призывом к действию. Простым языком, с вашим смыслом и под вашу аудиторию",
    icon: PenTool,
  },
  {
    title: "Монтаж Reels",
    description:
      "Динамичный монтаж с субтитрами, звуком и обложками, который удержит внимание до конца ролика",
    icon: Film,
  },
  {
    title: "Аналитика",
    description:
      "Каждую неделю разбираю цифры: досмотры, репосты, переходы. Что сработало — масштабируем. Что нет — меняем",
    icon: BarChart3,
  },
  {
    title: "Полное продюсирование",
    description:
      "Беру на себя всё: стратегию, сценарии, монтаж, воронку и аналитику. От вас только съёмка 2-5 часов в неделю",
    icon: Target,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20">
      <div className="glow-orb glow-orb-violet animate-drift left-1/4 top-0 h-96 w-96" />

      <Container>
        {/* Заголовок */}
        <Reveal className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--fg)]">
            Твой контент начнёт
            <br />
            <span className="gradient-text-violet glow-violet">приводить клиентов</span>
          </h2>
        </Reveal>

        <p className="mb-12 text-center text-sm text-[var(--muted)]">
          Нажми на карточку, чтобы раскрыть подробности
        </p>

        {/* Карточки — горизонтальная лента, как в разделе шагов */}
        <div
          className="flex gap-4 overflow-x-auto pb-6 pt-2"
          style={{
            scrollbarColor: "var(--accent-2) var(--bg-mid)",
            scrollbarWidth: "thin",
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="w-70 shrink-0 sm:w-75">
                <FlipCard
                  icon={<Icon className="h-10 w-10" />}
                  front={service.title}
                  back={service.description}
                />
              </div>
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
