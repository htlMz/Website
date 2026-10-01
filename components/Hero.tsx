import Container from "./Container";
import { TELEGRAM_LINK } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-[#0b0713] pt-28 pb-16 text-white lg:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-8 text-4xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Продвигаю
              <br />
              экспертов через
              <br />
              <span className="relative inline-block font-bold italic text-violet-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.7)]">
                REELS
                <span className="absolute inset-0 -z-10 animate-pulse bg-violet-500/50 blur-2xl" />
                <span
                  className="absolute inset-0 -z-20 animate-pulse bg-violet-500/30 blur-3xl"
                  style={{ animationDelay: "0.5s" }}
                />
              </span>
              <br />и строю
              <br />
              личный бренд
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-8 text-zinc-400">
              Контент-стратегия: идеи, сценарии, монтаж и аналитика
              <br />
              Система, которая приводит клиентов
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-violet-600 px-8 py-4 text-center font-medium transition hover:bg-violet-500"
              >
                Получить разбор
              </a>

              <a
                href="#portfolio"
                className="rounded-full border border-zinc-700 px-8 py-4 text-center font-medium transition hover:border-zinc-500"
              >
                Посмотреть кейсы
              </a>
            </div>
          </div>

          <div className="relative hidden items-center justify-start lg:flex">
            <div className="absolute h-125 w-125 rounded-full bg-violet-700/20 blur-[140px]" />

            <div className="relative h-160 w-80 overflow-hidden rounded-[52px] border border-zinc-800 bg-[#050505] shadow-2xl">
              <div className="absolute left-1/2 top-3 z-10 h-7 w-36 -translate-x-1/2 rounded-full bg-black" />

              <video
                className="h-full w-full object-cover"
                src="/video/case-7-nutr.MP4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
