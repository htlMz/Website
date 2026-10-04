import Container from "./Container";
import { TELEGRAM_LINK } from "@/lib/site-config";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 text-[var(--fg)]">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--accent-2)]/25 bg-gradient-to-br from-white/70 to-white/30 px-6 py-16 text-center sm:px-12">
            <div className="glow-orb-pink pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full" />
            <div className="glow-orb-violet pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full" />

            <p className="relative mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
              Бесплатный разбор
            </p>

            <h2 className="relative mb-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl text-[var(--fg)]">
              Разберём твою ситуацию
              <br />и подберём формат работы
            </h2>

            <p className="relative mx-auto mb-10 max-w-xl text-lg leading-7 text-[var(--muted)]">
              Созвон в Telegram: расскажи о своей нише и целях — предложу
              реалистичный план, без готовых шаблонов и завышенных обещаний.
            </p>

            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] px-10 py-4 font-medium text-white shadow-lg shadow-[var(--accent-2)]/25 transition hover:scale-[1.03] hover:shadow-[var(--accent-2)]/40"
            >
              Написать в Telegram
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
