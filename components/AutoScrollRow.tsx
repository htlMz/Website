"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AutoScrollRowProps = {
  children: ReactNode;
  speed?: number; // пикселей за кадр
};

export default function AutoScrollRow({ children, speed = 1.3 }: AutoScrollRowProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Двигаем через transform (композитится видеокартой), а не scrollLeft —
    // это не трогает layout на каждый кадр и не лагает при большом числе видео
    let position = 0;
    let rafId: number;

    const tick = () => {
      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        position += speed;
        if (position >= half) {
          position -= half;
        }
        track.style.transform = `translateX(-${position}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
      onTouchEnd={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex w-max gap-4 will-change-transform sm:gap-6">
        {children}
      </div>
    </div>
  );
}
