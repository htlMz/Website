import Container from "./Container";

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
    <section id="process" className="scroll-mt-24 py-24 bg-[#0b0713]">
      <Container>
        <div className="w-full h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent mb-20" />

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-white">
            Твой <span className="gradient-text glow-violet">личный бренд</span>
            <br />
            по шагам
          </h2>
        </div>

        <div
          className="flex gap-4 overflow-x-auto pb-6 scroll-smooth"
          style={{
            scrollbarColor: "#8b5cf6 #1a1a1a",
            scrollbarWidth: "thin",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative w-70 sm:w-75 shrink-0 bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-violet-400/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Бейдж времени — показываем только если time не пустой */}
              {step.time && (
                <div className="absolute top-4 right-4 bg-violet-400/10 border border-violet-400/30 text-violet-300 text-sm font-medium px-3 py-1 rounded-full">
                  {step.time}
                </div>
              )}

              <span className="text-5xl font-bold text-violet-400/20 group-hover:text-violet-400/40 group-hover:scale-110 transition-all duration-300 inline-block">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white pr-16">
                {step.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic font-semibold text-violet-200 glow-violet-strong">
            С тебя — 3-4 часа в неделю
            <br />
            <br />
            Минимум твоего времени — максимум результата
          </p>
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent mt-20" />
      </Container>
    </section>
  );
}
