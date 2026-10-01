import Container from "./Container";
import {
  Lightbulb, // идеи
  SquarePen, // заявок нет → карандаш в квадрате
  Calendar, // система
  DollarSign, // заработок
  Eye, // мало просмотров → глаз
  Clock, // нет времени → часы
} from "lucide-react";

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
    <section id="why" className="scroll-mt-24 py-24 bg-[#0b0713]">
      <Container>
        <div className="w-full h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent mb-20" />

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em]">
            Почему <span className="gradient-text glow-violet">тебе нужен</span>
            <br />
            контент-продюсер?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-violet-400/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <Icon className="w-10 h-10 text-violet-400 mb-4 group-hover:scale-110 group-hover:text-violet-200 transition" />
                <h3 className="text-lg font-semibold mb-3 text-white leading-snug">
                  {item.question}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{item.answer}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic font-semibold text-violet-200 glow-violet-strong">
            Контент без системы — это просто видео
          </p>
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent mt-20" />
      </Container>
    </section>
  );
}
