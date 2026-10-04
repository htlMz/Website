import Container from "./Container";
import type { ReactNode } from "react";
import { Rocket } from "lucide-react";
import { SiZoom } from "react-icons/si";
import Reveal from "./Reveal";

// Плашка под значок инструмента. Логотипы Adobe и Яндекс.Телемоста
// отсутствуют в пакетах иконок, поэтому часть значков нарисована своими силами
function ToolBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--accent-1)]/35 bg-[var(--accent-1)]/10 text-sm font-semibold">
      {children}
    </span>
  );
}

function TelemostIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="2.5" y="6" width="12.5" height="12" rx="3.5" />
      <path d="M15 11.2l5-3.1a.6.6 0 0 1 .9.5v6.8a.6.6 0 0 1-.9.5l-5-3.1z" />
    </svg>
  );
}

function ReelsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <path d="M2.8 8.6h18.4" />
      <path d="m7.2 2.7 3.3 5.9" />
      <path d="m13.6 2.7 3.3 5.9" />
      <path d="M10.4 12.4v5l4.4-2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const formats = [
  {
    title: "Консультация по продвижению",
    forWhom: "Блог есть, но непонятно, что не так и куда двигаться",
    includes:
      "Созвон-разбор блога: профиль, контент, воронка. Анализ ниши, аудитории и конкурентов, подбор тем и форматов",
    result:
      "Список конкретных правок и готовый документ с контент-планом",
    billing: "Разово",
    icon: (
      <div className="flex gap-2">
        <ToolBadge>
          <SiZoom className="h-5 w-5" />
        </ToolBadge>
        <ToolBadge>
          <TelemostIcon />
        </ToolBadge>
      </div>
    ),
  },
  {
    title: "Монтаж под ключ",
    forWhom: "Знаешь, что снимать, но нет времени или навыка монтировать",
    includes: "Монтаж, субтитры, звук, обложки",
    result: "Готовые ролики",
    billing: "Помесячно",
    icon: (
      <div className="flex gap-2">
        <ToolBadge>Pr</ToolBadge>
        <ToolBadge>Ae</ToolBadge>
      </div>
    ),
  },
  {
    title: "Reels под ключ",
    forWhom:
      "Хочешь регулярно получать готовые ролики и не тратить время на рутину",
    includes: "Идеи, сценарии, раскадровка, монтаж, обложки",
    result: "От тебя только съёмка",
    billing: "Помесячно",
    icon: <ReelsIcon />,
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
    icon: <Rocket className="h-9 w-9" />,
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
            return (
              <Reveal key={format.title} delay={index * 80}>
                <div className="glass-card flex h-full flex-col rounded-2xl p-7">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="shrink-0 text-[var(--accent-icon)]">
                      {format.icon}
                    </div>
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
