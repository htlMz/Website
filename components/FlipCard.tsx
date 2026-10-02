"use client";

import { useState, type ReactNode } from "react";
import { RotateCw } from "lucide-react";

type FlipCardProps = {
  icon: ReactNode;
  front: string;
  back: string;
};

export default function FlipCard({ icon, front, back }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setFlipped((v) => !v);
      }}
      aria-pressed={flipped}
      className="group h-60 w-full cursor-pointer select-none [perspective:1200px]"
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Лицевая сторона */}
        <div className="glass-card absolute inset-0 flex h-full flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center [backface-visibility:hidden]">
          <div className="text-[var(--accent-icon)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-lg font-semibold leading-snug text-[var(--fg)]">
            {front}
          </h3>
          <RotateCw className="absolute bottom-3 right-3 h-4 w-4 text-[var(--muted)] opacity-50" />
        </div>

        {/* Обратная сторона */}
        <div className="glass-card absolute inset-0 flex h-full items-center justify-center rounded-2xl p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="leading-relaxed text-[var(--muted)]">{back}</p>
        </div>
      </div>
    </div>
  );
}
