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
    <div className="relative overflow-hidden border-y border-[var(--fg)]/10 bg-white/[0.02] py-5">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((niche, index) => (
          <span
            key={`${niche}-${index}`}
            className="flex items-center gap-10 text-lg font-medium text-[var(--muted)]"
          >
            {niche}
            <span className="text-[var(--accent-icon)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
