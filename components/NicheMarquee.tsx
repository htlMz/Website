const niches = [
  "Психологи",
  "Коучи",
  "Дизайнеры",
  "Нутрициологи",
  "Эксперты в AI",
  "Инвесторы",
  "Инфобизнес",
  "Астрологи",
  "Репетиторы",
  "Риелторы",
];

export default function NicheMarquee() {
  const row = [...niches, ...niches];

  return (
    <div className="relative overflow-hidden border-y border-[#4a3324]/10 bg-black/[0.02] py-5">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((niche, index) => (
          <span
            key={`${niche}-${index}`}
            className="flex items-center gap-10 text-lg font-medium text-[#6b5240]"
          >
            {niche}
            <span className="text-[#d9803f]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
