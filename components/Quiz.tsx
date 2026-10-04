"use client";

import { useState } from "react";
import { ArrowLeft, RotateCcw, Send } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";
import { TELEGRAM_LINK } from "@/lib/site-config";

type FormatKey = "consult" | "editing" | "reels" | "producing";

type Points = Partial<Record<FormatKey, number>>;

const results: Record<FormatKey, { title: string; text: string }> = {
  consult: {
    title: "Консультация по продвижению",
    text: "Сначала нужно понять, что мешает блогу расти. Разберём всё на одном созвоне",
  },
  editing: {
    title: "Монтаж под ключ",
    text: "Ты знаешь, что снимать. Остаётся отдать монтаж",
  },
  reels: {
    title: "Reels под ключ",
    text: "Регулярные ролики без возни: от тебя только съёмка",
  },
  producing: {
    title: "Полное продюсирование",
    text: "Тебе нужна система, которая приводит клиентов, и минимум твоего времени",
  },
};

// Контент-стратегия входит в консультацию, сценарии — в Reels под ключ,
// поэтому их баллы здесь уже сведены к родительским форматам
const questions: { question: string; options: { label: string; points: Points }[] }[] = [
  {
    question: "На каком ты этапе?",
    options: [
      {
        label: "Блог только начинаю или почти не веду",
        points: { consult: 2 },
      },
      {
        label: "Снимаю регулярно, но результата нет",
        points: { consult: 2, reels: 1 },
      },
      {
        label: "Блог работает, хочу масштабировать",
        points: { producing: 2, reels: 1 },
      },
    ],
  },
  {
    question: "Сколько времени готов тратить на контент в неделю?",
    options: [
      { label: "1-2 часа, только съёмка", points: { producing: 2, reels: 1 } },
      { label: "3-5 часов", points: { editing: 1, reels: 1 } },
      { label: "Сколько нужно, хочу разобраться сам", points: { consult: 2 } },
    ],
  },
  {
    question: "Что сложнее всего?",
    options: [
      { label: "Не знаю, что снимать", points: { reels: 2, consult: 1 } },
      { label: "Нет времени или навыка монтировать", points: { editing: 2 } },
      { label: "Не понимаю, почему нет результата", points: { consult: 2 } },
      { label: "Всё сразу", points: { producing: 2, reels: 1 } },
    ],
  },
  {
    question: "Что для тебя важнее?",
    options: [
      { label: "Понять, что делать, и делать самому", points: { consult: 2 } },
      {
        label: "Чтобы часть работы делал кто-то другой",
        points: { reels: 2, editing: 1 },
      },
      { label: "Чтобы всё делали за меня", points: { producing: 2 } },
    ],
  },
];

const KEYS = Object.keys(results) as FormatKey[];

// При равенстве баллов побеждает формат, набравший баллы в вопросе 3 —
// он про главную сложность, то есть самый точный
function rank(answers: number[]) {
  const totals = {} as Record<FormatKey, number>;
  for (const key of KEYS) totals[key] = 0;

  answers.forEach((choice, index) => {
    const points = questions[index].options[choice].points;
    for (const key of KEYS) totals[key] += points[key] ?? 0;
  });

  const tieBreaker = questions[2].options[answers[2]].points;

  return KEYS.map((key) => ({
    key,
    total: totals[key],
    fromKeyQuestion: tieBreaker[key] ?? 0,
  })).sort(
    (a, b) => b.total - a.total || b.fromKeyQuestion - a.fromKeyQuestion
  );
}

export default function Quiz() {
  const [answers, setAnswers] = useState<number[]>([]);

  const step = answers.length;
  const finished = step === questions.length;
  const current = questions[step];

  const choose = (option: number) => setAnswers([...answers, option]);
  const back = () => setAnswers(answers.slice(0, -1));
  const restart = () => setAnswers([]);

  const ranked = finished ? rank(answers) : null;
  const winner = ranked?.[0];
  const runnerUp = ranked?.[1];

  return (
    <section id="quiz" className="relative scroll-mt-24 py-20">
      <div className="glow-orb glow-orb-violet left-1/4 bottom-0 h-96 w-96" />

      <Container>
        <Reveal className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--fg)]">
            Какой формат
            <br />
            <span className="gradient-text-violet glow-violet">подойдёт тебе</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="glass-card mx-auto max-w-2xl rounded-3xl p-6 sm:p-10">
            {!finished && current && (
              <>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={back}
                    disabled={step === 0}
                    className="flex items-center gap-1.5 text-sm text-[var(--muted)] transition-opacity hover:text-[var(--fg)] disabled:pointer-events-none disabled:opacity-0"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Назад
                  </button>
                  <span className="text-sm font-medium text-[var(--accent-text)]">
                    {step + 1}/{questions.length}
                  </span>
                </div>

                <div
                  className="mb-7 h-1 w-full overflow-hidden rounded-full bg-[var(--fg)]/10"
                  role="progressbar"
                  aria-valuenow={step + 1}
                  aria-valuemin={1}
                  aria-valuemax={questions.length}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] transition-[width] duration-300"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  />
                </div>

                <h3 className="mb-6 text-2xl font-semibold leading-snug text-[var(--fg)]">
                  {current.question}
                </h3>

                <div className="flex flex-col gap-3">
                  {current.options.map((option, index) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => choose(index)}
                      className="w-full rounded-2xl border border-[var(--accent-1)]/20 bg-white/50 px-5 py-4 text-left text-base leading-snug text-[var(--fg)] transition-colors hover:border-[var(--accent-2)]/50 hover:bg-white/80"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {finished && winner && (
              <div className="text-center">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--accent-text)]">
                  Тебе подойдёт
                </p>

                <h3 className="mb-4 text-3xl font-semibold leading-tight text-[var(--fg)] sm:text-4xl">
                  {results[winner.key].title}
                </h3>

                <p className="mx-auto mb-6 max-w-md text-base leading-relaxed text-[var(--muted)]">
                  {results[winner.key].text}
                </p>

                {runnerUp && runnerUp.total > 0 && (
                  <p className="mb-8 text-sm text-[var(--muted)]">
                    Также подойдёт:{" "}
                    <span className="font-medium text-[var(--fg)]">
                      {results[runnerUp.key].title}
                    </span>
                  </p>
                )}

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] px-8 py-3.5 font-medium text-white transition-transform hover:scale-[1.03] sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    Обсудить
                  </a>
                  <button
                    type="button"
                    onClick={restart}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-[var(--fg)]/15 px-8 py-3.5 font-medium text-[var(--fg)] transition-colors hover:bg-white/60 sm:w-auto"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Пройти заново
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
