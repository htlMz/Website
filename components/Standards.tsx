import Container from "./Container";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const checks = [
  "Хук считывается за первые 2 секунды и без звука",
  "Сценарий проверен на удержание до последнего кадра",
  "Субтитры читаются с телефона, ключевые слова выделены",
  "Звук и ритм монтажа совпадают с динамикой кадра",
  "Первый кадр останавливает пролистывание",
  "Призыв в конце ведёт к цели ролика: подписка, комментарий или заявка",
  "Ролик греет к продукту, а не просто набирает охваты",
  "Профиль готов принять трафик: шапка, закрепы, актуальное",
];

export default function Standards() {
  return (
    <section id="standards" className="relative scroll-mt-24 py-20">
      <div className="glow-orb glow-orb-violet left-0 top-1/3 h-96 w-96" />

      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
              Стандарты
            </p>

            <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--fg)] md:text-5xl">
              Через что проходит
              <br />
              <span className="gradient-text-violet glow-violet">
                каждый ролик
              </span>
              <br />
              перед публикацией
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
              Монтажёр с биржи собирает ролик на глаз. Здесь каждый проходит
              один и тот же список проверок
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="glass-card divide-y divide-[var(--fg)]/10 overflow-hidden rounded-2xl">
              {checks.map((check) => (
                <li
                  key={check}
                  className="flex items-start gap-3 px-5 py-4 sm:px-6"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-1)]/15">
                    <Check className="h-3.5 w-3.5 text-[var(--accent-icon)]" />
                  </span>
                  <span className="text-[15px] leading-snug text-[var(--fg)]">
                    {check}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[var(--muted)]">
            Поэтому «случайно залетевших» роликов тут не бывает — есть система,
            которая повышает шансы каждого. Держать весь этот список в голове,
            снимая между консультациями, попросту нереально
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
