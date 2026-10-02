"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

const items = [
  {
    question: "Снимаешь ролики сам?",
    answer:
      "Нет, съёмку не беру на себя — даю готовые сценарии и раскадровки, снимаешь сам или с оператором. Моя часть: стратегия, идеи, сценарии, монтаж и аналитика.",
  },
  {
    question: "С какими нишами работаешь?",
    answer:
      "С экспертами, которым есть что показать и чему научить аудиторию: психологи, коучи, репетиторы и похожие ниши. Если сомневаешься, подходит ли твоя — обсудим на созвоне.",
  },
  {
    question: "Сколько времени это займёт с моей стороны?",
    answer:
      "Зависит от формата. При полном продюсировании — несколько часов в неделю на съёмку по готовому сценарию. Если нужен только монтаж — присылаешь отснятый материал, остальное беру на себя.",
  },
  {
    question: "Сколько стоит работа?",
    answer:
      "Цена зависит от формата: от разового монтажа ролика до полного продюсирования с воронкой и стратегией. Разберём твою ситуацию на созвоне и подберу вариант под бюджет и цели.",
  },
  {
    question: "Когда будет результат?",
    answer:
      "Системный контент не даёт результат за один день — честно обсудим реалистичные сроки под твою нишу на созвоне, без завышенных обещаний.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 text-[var(--fg)]">
      <div className="glow-orb glow-orb-fuchsia animate-drift left-1/3 top-0 h-96 w-96" />

      <Container>
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl lg:text-6xl text-[var(--fg)]">
            Частые <span className="gradient-text-violet glow-violet">вопросы</span>
          </h2>
        </Reveal>

        <div className="mx-auto max-w-3xl space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
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
      </Container>
    </section>
  );
}
