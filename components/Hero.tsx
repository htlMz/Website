import Container from "./Container";
import { TELEGRAM_LINK } from "@/lib/site-config";
import Reveal from "./Reveal";
import PlatformBranches from "./PlatformBranches";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-28 pb-16 text-[var(--fg)] lg:pt-20">
      <div className="glow-orb glow-orb-violet animate-drift -left-32 -top-32 h-[28rem] w-[28rem]" />
      <div
        className="glow-orb glow-orb-pink animate-drift right-0 top-1/3 h-96 w-96"
        style={{ animationDelay: "2s" }}
      />

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent-2)]/30 bg-white/50 px-4 py-1.5 text-sm text-[var(--accent-text)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent-2)]" />
              Контент-продюсирование
            </div>

            <h1 className="mb-6 max-w-xl text-4xl font-semibold leading-[1.2] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Продвижение через{" "}
              <span className="gradient-text-violet glow-violet">короткие ролики</span>
            </h1>

            <PlatformBranches />

            <p className="mb-10 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Контент-система, которая приводит клиентов и строит личный бренд
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] px-8 py-4 text-center font-medium text-white shadow-lg shadow-[var(--accent-2)]/25 transition hover:scale-[1.03] hover:shadow-[var(--accent-2)]/40"
              >
                Получить разбор
              </a>

              <a
                href="#portfolio"
                className="rounded-full border border-[var(--fg)]/20 px-8 py-4 text-center font-medium transition hover:border-[var(--fg)]/40 hover:bg-black/5"
              >
                Посмотреть кейсы
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative hidden items-center justify-center lg:flex">
              <div className="glow-orb-pink pointer-events-none absolute h-125 w-125 rounded-full" />

              <div className="absolute right-6 top-10 h-130 w-62 -rotate-6 overflow-hidden rounded-[40px] border border-[var(--fg)]/10 bg-[#0f0e14] opacity-70 shadow-2xl">
                <video
                  className="h-full w-full object-cover"
                  src="/video/case-4-AI.MP4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="animate-float relative h-144 w-72 overflow-hidden rounded-[48px] border border-[var(--fg)]/15 bg-[#0f0e14] shadow-2xl shadow-[var(--accent-text)]/20">
                <div className="absolute left-1/2 top-3 z-10 h-7 w-36 -translate-x-1/2 rounded-full bg-black" />

                <video
                  className="h-full w-full object-cover"
                  src="/video/case-1-lifecoach.MP4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
