import Container from "./Container";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Созвон и разбор профиля",
    description: "Знакомимся, разбираем продукт и цели",
    time: "1-1,5 часа",
  },
  {
    number: "02",
    title: "Анализ ниши",
    description: "Сканируем рынок и тренды под твою экспертность",
    time: "", // пусто — бейдж не покажется
  },
  {
    number: "03",
    title: "Контент-стратегия",
    description: "Составляем контент-план под тебя и твою ЦА",
    time: "",
  },
  {
    number: "04",
    title: "Воронка продаж",
    description:
      "Строим путь клиента от первого просмотра до покупки твоего продукта",
    time: "",
  },
  {
    number: "05",
    title: "Идеи и сценарии",
    description: "Готовим идеи и сценарии для Reels за тебя",
    time: "",
  },
  {
    number: "06",
    title: "Консультирование по съёмке",
    description: "Подробно разбираем, как говорить и двигаться в кадре",
    time: "2-3 часа в неделю",
  },
  {
    number: "07",
    title: "Монтаж",
    description: "Украшаем видео спецэффектами для удержания",
    time: "",
  },
  {
    number: "08",
    title: "Пост-аналитика",
    description: "Собираем цифры и масштабируем залетевший формат",
    time: "",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-20">
      <div className="glow-orb glow-orb-fuchsia animate-drift right-0 top-10 h-96 w-96" />

      <Container>
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#4a3324]">
            Твой <span className="gradient-text-violet glow-violet">личный бренд</span>
            <br />
            по шагам
          </h2>
        </Reveal>

        <div
          className="flex gap-4 overflow-x-auto pb-6 scroll-smooth"
          style={{
            scrollbarColor: "#e0835f #f5e3cd",
            scrollbarWidth: "thin",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card relative w-70 sm:w-75 shrink-0 rounded-2xl p-8 group hover:-translate-y-2"
            >
              {/* Бейдж времени — показываем только если time не пустой */}
              {step.time && (
                <div className="absolute top-4 right-4 bg-[#e0835f]/10 border border-[#e0835f]/30 text-[#c9622f] text-sm font-medium px-3 py-1 rounded-full">
                  {step.time}
                </div>
              )}

              <span className="text-5xl font-bold text-[#d9803f]/30 group-hover:text-[#d9803f]/55 group-hover:scale-110 transition-all duration-300 inline-block">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-[#4a3324] pr-16">
                {step.title}
              </h3>
              <p className="text-[#8a6b55] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic font-semibold text-shimmer-gold glow-violet-strong">
            С тебя — 3-4 часа в неделю
            <br />
            <br />
            Минимум твоего времени — максимум результата
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
