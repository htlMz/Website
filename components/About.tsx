import Container from "./Container";
import Reveal from "./Reveal";
import { NAME, STAGE_NAME } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20">
      <div className="glow-orb glow-orb-fuchsia right-1/4 top-1/4 h-96 w-96" />

      <Container>
        <Reveal className="mb-10">
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
                  {NAME} <span className="text-shimmer-gold">{STAGE_NAME}</span>
                </p>
                <p className="mt-2 text-lg text-[var(--accent-text)]">
                  CEO и креативный директор
                </p>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)]">
                  <p>
                    Глубокое{" "}
                    <span className="gradient-text-violet font-medium">
                      погружение
                    </span>{" "}
                    в твою ситуацию
                  </p>
                  <p>
                    Понятная{" "}
                    <span className="gradient-text-violet font-medium">
                      траектория
                    </span>{" "}
                    и конкретные{" "}
                    <span className="gradient-text-violet font-medium">
                      действия
                    </span>{" "}
                    на пути к поставленной цели, а не типичное впаривание услуг
                  </p>
                  <p className="pt-1 font-serif text-lg italic text-[var(--fg)]/80">
                    Процесс и результат сольются воедино
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
