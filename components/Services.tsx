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
      "Разбираю нишу, аудиторию и конкурентов. На выходе план тем и форматов на 1–3 месяца, где у каждого ролика есть цель.",
    icon: ClipboardList,
  },
  {
    title: "Упаковка профиля",
    description:
      "Шапка, закрепы и лента, которые за 3 секунды объясняют, кто вы и зачем на вас подписываться.",
    icon: Star,
  },
  {
    title: "Сценарии Reels",
    description:
      "Пишу сценарии с хуком, удержанием и призывом к действию. Простым языком, с вашим смыслом и под вашу аудиторию.",
    icon: PenTool,
  },
  {
    title: "Монтаж Reels",
    description:
      "Динамичный монтаж с субтитрами, звуком и обложками, который держит внимание до конца ролика.",
    icon: Film,
  },
  {
    title: "Аналитика",
    description:
      "Каждую неделю разбираю цифры: досмотры, репосты, переходы. Что сработало — масштабируем. Что нет — меняем.",
    icon: BarChart3,
  },
  {
    title: "Полное продюсирование",
    description:
      "Беру на себя всё: стратегию, сценарии, монтаж, воронку и аналитику. От вас только съёмка 1–2 часа в неделю.",
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

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={index * 80}>
                <FlipCard
                  icon={<Icon className="h-10 w-10" />}
                  front={service.title}
                  back={service.description}
                />
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
