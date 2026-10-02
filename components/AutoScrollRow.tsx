"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AutoScrollRowProps = {
  children: ReactNode;
  speed?: number; // пикселей за кадр
};

export default function AutoScrollRow({ children, speed = 0.6 }: AutoScrollRowProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // scrollLeft округляется браузером до целого пикселя при каждом чтении,
    // поэтому дробная скорость накапливается в отдельной переменной, а не через el.scrollLeft
    let position = el.scrollLeft;
    let rafId: number;

    const tick = () => {
      if (!pausedRef.current) {
        const half = el.scrollWidth / 2;
        position += speed;
        if (position >= half) {
          position -= half;
        }
        el.scrollLeft = position;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return (
    <div
      ref={scrollerRef}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
      onTouchEnd={() => (pausedRef.current = false)}
      className="no-scrollbar flex gap-4 overflow-x-auto sm:gap-6"
      style={{ scrollBehavior: "auto" }}
    >
      {children}
    </div>
  );
}
