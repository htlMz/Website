import Container from "./Container";
import VideoCard from "./VideoCard";
import Reveal from "./Reveal";
import AutoScrollRow from "./AutoScrollRow";

// Порядок подобран так, чтобы одинаковые ниши не стояли рядом.
// Лента зациклена, поэтому последний кейс тоже не должен совпадать с первым:
// нутрициологи стоят на 2, 4, 7, 9, дизайнеры разведены на 3 и 10.
const cases = [
  {
    id: "case-1-lifecoach",
    title: "Reels для лайф-коуча",
    category: "Личный бренд",
    video: "/video/case-1-lifecoach.MP4",
  },
  {
    id: "case-7-nutr",
    title: "Reels для нутрициолога",
    category: "Здоровье",
    video: "/video/case-7-nutr.MP4",
  },
  {
    id: "case-2-designer",
    title: "Reels для дизайнера",
    category: "Личный бренд",
    video: "/video/case-2-designer.mp4",
  },
  {
    id: "case-8-nutr",
    title: "Reels для нутрициолога",
    category: "Здоровье",
    video: "/video/case-8-nutr.MP4",
  },
  {
    id: "case-11-psychomentor",
    title: "Reels для психолога-ментора",
    category: "Психология",
    video: "/video/case-11-psychomentor.mp4",
  },
  {
    id: "case-4-AI",
    title: "Reels в нише AI",
    category: "Технологии",
    video: "/video/case-4-AI.MP4",
  },
  {
    id: "case-9-nutrW",
    title: "Reels для нутрициолога",
    category: "Здоровье",
    video: "/video/case-9-nutrW.mp4",
  },
  {
    id: "case-5-invest",
    title: "Reels для инвестора",
    category: "Финансы",
    video: "/video/case-5-invest.mp4",
  },
  {
    id: "case-10-nutrW",
    title: "Reels для нутрициолога",
    category: "Здоровье",
    video: "/video/case-10-nutrW.mp4",
  },
  {
    id: "case-3-designer",
    title: "Reels для дизайнера",
    category: "Личный бренд",
    video: "/video/case-3-designer.mp4",
  },
  {
    id: "case-6-infobiz",
    title: "Reels для инфобизнеса",
    category: "Образование",
    video: "/video/case-6-infobiz.mp4",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative scroll-mt-24 py-20 text-[var(--fg)]">
      <div className="glow-orb glow-orb-violet animate-drift left-0 top-1/4 h-96 w-96" />
      <div
        className="glow-orb glow-orb-pink animate-drift right-0 bottom-0 h-96 w-96"
        style={{ animationDelay: "3s" }}
      />

      <Container>
        <Reveal className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
            Кейсы
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl text-[var(--fg)]">
            Что мы уже делали
          </h2>
        </Reveal>

        <AutoScrollRow>
          {[...cases, ...cases].map((item, index) => (
            <div key={`${item.id}-${index}`} className="w-44 shrink-0 sm:w-52 md:w-56">
              <VideoCard
                src={item.video}
                title={item.title}
                category={item.category}
              />
            </div>
          ))}
        </AutoScrollRow>
      </Container>
    </section>
  );
}
