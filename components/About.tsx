import Container from "./Container";
import Reveal from "./Reveal";
import { NAME } from "@/lib/site-config";

// Цифры проверяемые: кейсы и ниши считаются по портфолио на этой же странице
const facts = [
  { value: "11", label: "кейсов в портфолио" },
  { value: "7", label: "ниш в работе" },
  { value: "2", label: "человека в команде" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20">
      <div className="glow-orb glow-orb-fuchsia right-1/4 top-1/4 h-96 w-96" />

      <Container>
        <Reveal className="mb-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
            Кто делает
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[var(--fg)] md:text-5xl lg:text-6xl">
            Кто отвечает
            <br />
            <span className="gradient-text-violet glow-violet">за результат</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="glass-card overflow-hidden rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr]">
              <img
                src="/emil.jpg"
                alt={NAME}
                width={640}
                height={640}
                className="h-72 w-full object-cover object-top md:h-full"
              />

              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="text-3xl font-semibold text-[var(--fg)] sm:text-4xl">
                  {NAME}
                </p>
                <p className="mt-2 text-lg text-[var(--accent-text)]">
                  CEO и креативный директор
                </p>

                <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
                  Стратегия, идеи и сценарии — на мне. Монтаж — на монтажёре.
                  Вдвоём закрываем весь путь ролика, от замысла до цифр после
                  публикации.
                </p>

                <dl className="mt-8 grid grid-cols-1 gap-5 border-t border-[var(--fg)]/10 pt-6 sm:grid-cols-3">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-3xl font-semibold text-[var(--accent-text)]">
                        {fact.value}
                      </dt>
                      <dd className="mt-1 text-sm leading-snug text-[var(--muted)]">
                        {fact.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
