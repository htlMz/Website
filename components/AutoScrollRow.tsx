"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AutoScrollRowProps = {
  children: ReactNode;
  speed?: number; // пикселей за кадр
};

export default function AutoScrollRow({ children, speed = 0.4 }: AutoScrollRowProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let rafId: number;

    const tick = () => {
      if (!pausedRef.current) {
        const half = el.scrollWidth / 2;
        el.scrollLeft += speed;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
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
      className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth sm:gap-6"
    >
      {children}
    </div>
  );
}
