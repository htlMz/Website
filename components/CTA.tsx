import Container from "./Container";
import { TELEGRAM_LINK } from "@/lib/site-config";

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#0b0713] py-24 text-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-white/5 px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

          <p className="relative mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
            Бесплатный разбор
          </p>

          <h2 className="relative mb-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            Разберём твою ситуацию
            <br />и подберём формат работы
          </h2>

          <p className="relative mx-auto mb-10 max-w-xl text-lg leading-7 text-zinc-400">
            Созвон в Telegram: расскажи о своей нише и целях — предложу
            реалистичный план, без готовых шаблонов и завышенных обещаний.
          </p>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block rounded-full bg-violet-600 px-10 py-4 font-medium text-white transition hover:bg-violet-500"
          >
            Написать в Telegram
          </a>
        </div>
      </Container>
    </section>
  );
}
