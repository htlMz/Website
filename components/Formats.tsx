import Container from "./Container";
import { MessagesSquare, Scissors, Clapperboard, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const formats = [
  {
    title: "Консультация по продвижению",
    forWhom: "Блог есть, но непонятно, что не так и куда двигаться",
    includes: "Созвон-разбор блога: профиль, контент, воронка",
    result:
      "Список конкретных правок и готовый документ с контент-планом",
    billing: "Разово",
    icon: MessagesSquare,
  },
  {
    title: "Монтаж под ключ",
    forWhom: "Знаешь, что снимать, но нет времени или навыка монтировать",
    includes: "Монтаж, субтитры, звук, обложки",
    result: "Готовые к публикации ролики",
    billing: "Помесячно",
    icon: Scissors,
  },
  {
    title: "Reels под ключ",
    forWhom: "Хочешь регулярные ролики без лишней возни",
    includes: "Идеи, сценарии, раскадровка, монтаж, обложки",
    result: "От тебя только съёмка",
    billing: "Помесячно",
    icon: Clapperboard,
  },
  {
    title: "Полное продюсирование",
    forWhom: "Нужен результат в заявках, а не только ролики",
    includes:
      "Стратегия, упаковка профиля, сценарии, монтаж, воронка в Telegram, аналитика",
    result:
      "Система, которая приводит клиентов. От тебя съёмка 2-5 часов в неделю",
    extra:
      "Также: воронки, запуски онлайн-продуктов и сопровождение. Обсуждаем индивидуально",
    billing: "Помесячно",
    icon: Rocket,
  },
];

export default function Formats() {
  return (
    <section id="formats" className="relative scroll-mt-24 py-20">
      <div className="glow-orb glow-orb-pink right-1/4 top-0 h-96 w-96" />

      <Container>
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--fg)]">
            Форматы <span className="gradient-text-violet glow-violet">работы</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <Reveal key={format.title} delay={index * 80}>
                <div className="glass-card flex h-full flex-col rounded-2xl p-7">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <Icon className="h-9 w-9 shrink-0 text-[var(--accent-icon)]" />
                    <span className="shrink-0 rounded-full border border-[var(--accent-2)]/30 bg-[var(--accent-2)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-text)]">
                      {format.billing}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-semibold leading-snug text-[var(--fg)]">
                    {format.title}
                  </h3>

                  <dl className="flex flex-1 flex-col gap-3 text-sm leading-relaxed">
                    <div>
                      <dt className="mb-0.5 text-xs uppercase tracking-[0.15em] text-[var(--accent-text)]">
                        Для кого
                      </dt>
                      <dd className="text-[var(--muted)]">{format.forWhom}</dd>
                    </div>
                    <div>
                      <dt className="mb-0.5 text-xs uppercase tracking-[0.15em] text-[var(--accent-text)]">
                        Что входит
                      </dt>
                      <dd className="text-[var(--muted)]">{format.includes}</dd>
                    </div>
                    <div className="mt-auto border-t border-[var(--fg)]/10 pt-3">
                      <dt className="mb-0.5 text-xs uppercase tracking-[0.15em] text-[var(--accent-text)]">
                        Результат
                      </dt>
                      <dd className="font-medium text-[var(--fg)]">{format.result}</dd>
                      {format.extra && (
                        <dd className="mt-3 text-[var(--muted)]">{format.extra}</dd>
                      )}
                    </div>
                  </dl>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
