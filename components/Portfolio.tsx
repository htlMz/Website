import Container from "./Container";

const cases = [
  {
    id: "case-1-lifecoach",
    title: "Reels для лайф-коуча",
    category: "Личный бренд",
    video: "/video/case-1-lifecoach.MP4",
  },
  {
    id: "case-2-designer",
    title: "Reels для дизайнера",
    category: "Личный бренд",
    video: "/video/case-2-designer.mp4",
  },
  {
    id: "case-3-designer",
    title: "Reels для дизайнера",
    category: "Личный бренд",
    video: "/video/case-3-designer.mp4",
  },
  {
    id: "case-4-AI",
    title: "Reels в нише AI",
    category: "Технологии",
    video: "/video/case-4-AI.MP4",
  },
  {
    id: "case-5-invest",
    title: "Reels для инвестора",
    category: "Финансы",
    video: "/video/case-5-invest.mp4",
  },
  {
    id: "case-6-infobiz",
    title: "Reels для инфобизнеса",
    category: "Образование",
    video: "/video/case-6-infobiz.mp4",
  },
  {
    id: "case-7-nutr",
    title: "Reels для нутрициолога",
    category: "Здоровье",
    video: "/video/case-7-nutr.MP4",
  },
  {
    id: "case-8-nutr",
    title: "Reels для нутрициолога",
    category: "Здоровье",
    video: "/video/case-8-nutr.MP4",
  },
  {
    id: "case-9-nutrW",
    title: "Reels для нутрициолога",
    category: "Здоровье",
    video: "/video/case-9-nutrW.mp4",
  },
  {
    id: "case-10-nutrW",
    title: "Reels для нутрициолога",
    category: "Здоровье",
    video: "/video/case-10-nutrW.mp4",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-[#0b0713] py-24 text-white">
      <Container>
        <div className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
            Кейсы
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Что мы уже делали
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <div className="aspect-video bg-black">
                <video
                  className="h-full w-full object-cover"
                  src={item.video}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="p-5">
                <p className="mb-2 text-sm text-violet-400">
                  {item.category}
                </p>

                <h3 className="text-xl font-medium text-white">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}