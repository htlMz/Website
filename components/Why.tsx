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
import FlipCard from "./FlipCard";

const reasons = [
  {
    question: "Не знаешь, с чего начать и что снимать?",
    answer:
      "Начинаем не с камеры, а с понимания, кто тебя смотрит и что ему нужно. Дальше даю готовый план тем, и вопрос “что снимать” закрыт",
    icon: Lightbulb,
  },
  {
    question: "Нет времени на контент?",
    answer:
      "Твоя часть работы - съёмка 1-2 часа в неделю. Идеи, сценарии, монтаж и публикации беру на себя",
    icon: Clock,
  },
  {
    question: "Снимаешь хаотично, без системы?",
    answer:
      "Выстраиваю систему: каждый ролик работает на свою задачу, темы идут по плану, и ты знаешь, что снимать на неделю вперёд",
    icon: Calendar,
  },
  {
    question: "Reels набирают мало просмотров?",
    answer:
      "Чаще всего дело в первых 3 секундах и удержании. Переписываю хуки и структуру, а по цифрам смотрим, что заходит",
    icon: Eye,
  },
  {
    question: "Просмотры есть, а заявок нет?",
    answer:
      "Значит, рвётся путь от ролика к сообщению: профиль, призыв, воронка. Нахожу, где теряются люди, и чиню именно там",
    icon: SquarePen,
  },
  {
    question: "Не знаешь, как зарабатывать на блоге?",
    answer:
      "Упакуем твою экспертизу в продукт и выстроим путь от ролика до оплаты. Блог начнёт приносить клиентов, а не только просмотры, лайки и подписчиков",
    icon: DollarSign,
  },
];

export default function Why() {
  return (
    <section id="why" className="relative scroll-mt-24 py-20">
      <div className="glow-orb glow-orb-violet animate-drift left-0 bottom-0 h-96 w-96" />

      <Container>
        <Reveal className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--fg)]">
            Почему <span className="gradient-text-violet glow-violet">тебе нужен</span>
            <br />
            контент-продюсер?
          </h2>
        </Reveal>

        <p className="mb-12 text-center text-sm text-[var(--muted)]">
          Нажми на карточку, чтобы узнать решение
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 80}>
                <FlipCard
                  icon={<Icon className="h-10 w-10" />}
                  front={item.question}
                  back={item.answer}
                />
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
