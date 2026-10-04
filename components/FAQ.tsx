"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

const groups = [
  {
    title: "О работе",
    items: [
      {
        question: "С чего начинается работа?",
        answer:
          "С короткого созвона: разбираю твой блог и задачу. Дальше стратегия, упаковка профиля и только потом съёмка. Так каждый ролик с первого дня работает на цель",
      },
      {
        question: "Сколько времени это займёт у меня?",
        answer:
          "При полном продюсировании 2-5 часов в неделю на съёмку. Идеи, сценарии, монтаж и публикации на мне",
      },
      {
        question: "Кто снимает?",
        answer:
          "Снимаешь ты, по готовому сценарию и раскадровке: что сказать, где встать, как держать телефон. Думать на съёмке не придётся",
      },
      {
        question: "Нужна профессиональная техника?",
        answer:
          "Нет. Для старта хватит телефона, штатива и дневного света из окна",
      },
      {
        question: "У меня мало подписчиков. Есть смысл начинать?",
        answer:
          "Да. Reels показывают в первую очередь новым людям, поэтому охваты почти не зависят от числа подписчиков. Начинать можно с нуля",
      },
      {
        question: "Можно начать с одной услуги?",
        answer:
          "Да. Можно взять только монтаж, только Reels под ключ или начать с консультации. Если зайдёт, расширяем",
      },
    ],
  },
  {
    title: "О результате",
    items: [
      {
        question: "Когда будут результаты?",
        answer:
          "Первые охваты обычно через 2-3 недели, первые заявки через 1-2 месяца. Точный срок зависит от ниши и от того, как быстро найдём рабочие темы",
      },
      {
        question: "А точно будет результат?",
        answer:
          "Конкретное число клиентов не обещаю: так честнее. Обещаю систему и прозрачные цифры каждую неделю. Видно, что работает, а что нет, и план меняется по данным, а не по ощущениям",
      },
      {
        question: "Сработает ли в моей нише?",
        answer:
          "Подход не завязан на нишу: в любой теме есть люди с вопросами, которые ты закрываешь",
      },
    ],
  },
  {
    title: "Сомнения",
    items: [
      {
        question: "Почему это стоит больше, чем просто монтажёр?",
        answer:
          "Монтажёр делает одну часть. Здесь стратегия, сценарии, монтаж, воронка и аналитика, и один человек отвечает за результат, а не за отдельный этап",
      },
      {
        question: "У меня уже есть монтажёр",
        answer:
          "Монтаж почти никогда не причина, почему нет заявок. Чаще дело в идее, формате, сценариях и в том, куда ролик ведёт человека. Могу взять эту часть, а монтажёр останется твоим",
      },
      {
        question: "Я и сам справляюсь",
        answer:
          "Если блог уже приносит клиентов, продюсер не нужен. Если ролики выходят, а заявок мало, или контент съедает много часов, стоит посчитать, сколько стоит твоё время",
      },
      {
        question: "Уже был опыт с SMM, и не сработало",
        answer:
          "Начну с разбора, что пошло не так. Частая причина: ролики снимали без цели и без призыва к действию, поэтому просмотры не превращались в заявки. Здесь каждый ролик знает, куда ведёт",
      },
    ],
  },
];

export default function FAQ() {
  // ключ вида "группа-вопрос", чтобы открытым оставался только один пункт на всю секцию
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 text-[var(--fg)]">
      <div className="glow-orb glow-orb-fuchsia animate-drift left-1/3 top-0 h-96 w-96" />

      <Container>
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl lg:text-6xl text-[var(--fg)]">
            Частые <span className="gradient-text-violet glow-violet">вопросы</span>
          </h2>
        </Reveal>

        <div className="mx-auto max-w-3xl space-y-10">
          {groups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent-text)]">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.items.map((item, itemIndex) => {
                  const key = `${groupIndex}-${itemIndex}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={item.question}
                      className="glass-card rounded-2xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenKey(isOpen ? null : key)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-lg font-medium text-[var(--fg)]">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-[var(--accent-icon)] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5 text-[var(--muted)] leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
