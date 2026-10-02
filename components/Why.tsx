import Container from "./Container";
import {
  Lightbulb, // идеи
  SquarePen, // заявок нет → карандаш в квадрате
  Calendar, // система
  DollarSign, // заработок
  Eye, // мало просмотров → глаз
  Clock, // нет времени → часы
} from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  {
    question: "Нет времени на контент?",
    answer: "Возьмём на себя все процессы. С тебя — только снять",
    icon: Clock,
  },
  {
    question: "Не знаешь, что снимать или как начать?",
    answer: "Найдём сильные темы и переведём экспертность в контент",
    icon: Lightbulb,
  },
  {
    question: "Не понимаешь, как зарабатывать с блога?",
    answer: "Упакуем продукт, выстроим воронку и запустим продажи",
    icon: DollarSign,
  },
  {
    question: "Снимаешь не системно, а как попало?",
    answer:
      "Выстроим контент-стратегию и составим план публикацииНе снимать не получится",
    icon: Calendar,
  },
  {
    question: "Снимаешь, а заявок нет?",
    answer: "Разберём блог и найдём, где теряется внимание аудитории",
    icon: SquarePen,
  },
  {
    question: "Reels набирают мало просмотров?",
    answer: "Подстроим твой контент под алгоритмы и психологию вирусности",
    icon: Eye,
  },
];

export default function Why() {
  return (
    <section id="why" className="relative scroll-mt-24 py-20">
      <div className="glow-orb glow-orb-violet animate-drift left-0 bottom-0 h-96 w-96" />

      <Container>
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--fg)]">
            Почему <span className="gradient-text-violet glow-violet">тебе нужен</span>
            <br />
            контент-продюсер?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 80}>
                <div className="glass-card h-full rounded-2xl p-8 group">
                  <Icon className="w-10 h-10 text-[var(--accent-icon)] mb-4 group-hover:scale-110 group-hover:text-[var(--accent-text)] transition" />
                  <h3 className="text-lg font-semibold mb-3 text-[var(--fg)] leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{item.answer}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center mt-14">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic font-semibold text-shimmer-gold glow-violet-strong">
            Контент без системы — это просто видео
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
