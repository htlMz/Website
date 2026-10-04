import Container from "./Container";
import Reveal from "./Reveal";
import { NAME } from "@/lib/site-config";

// Цифры здесь проверяемые: они считаются по тому, что есть на самой странице
const facts = [
  { value: "11", label: "кейсов в портфолио" },
  { value: "7", label: "ниш в работе" },
  { value: "1", label: "человек отвечает за весь проект" },
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
          <div className="glass-card rounded-3xl p-6 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] text-3xl font-semibold text-white">
                {NAME.charAt(0)}
              </div>

              <div>
                <p className="text-2xl font-semibold text-[var(--fg)]">{NAME}</p>
                <p className="text-[var(--muted)]">Контент-продюсер и монтажёр</p>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-[var(--muted)]">
              <p>
                Я не агентство и не студия. Над блогом работает один человек: я веду
                проект от стратегии до аналитики, поэтому не бывает так, что
                сценарист не знает, что задумал монтажёр, а монтажёр — зачем снимали
                этот ролик.
              </p>
              <p>
                Работаю на заявки, а не на просмотры. Просмотры — промежуточная
                цифра: если ролик собрал охват, но человеку дальше некуда пойти,
                работа сделана наполовину. Поэтому воронку продумываю до съёмок, а
                не после.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-[var(--fg)]/10 pt-8 sm:grid-cols-3">
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
        </Reveal>
      </Container>
    </section>
  );
}
