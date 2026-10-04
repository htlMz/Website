"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AutoScrollRowProps = {
  children: ReactNode;
  speed?: number; // пикселей за кадр
};

export default function AutoScrollRow({ children, speed = 1.3 }: AutoScrollRowProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const onScreenRef = useRef(true);
  const hoveredCardRef = useRef<Element | null>(null);

  // Не анимируем (и не грузим видеокарту/видео), пока лента вообще не видна на экране
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreenRef.current = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Двигаем через transform (композитится видеокартой), а не scrollLeft —
    // это не трогает layout на каждый кадр и не лагает при большом числе видео
    let position = 0;
    let rafId: number;

    const tick = () => {
      if (!pausedRef.current && onScreenRef.current) {
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

  // Карточка ленты, внутри которой лежит элемент — это прямой потомок трека
  const cardOf = (el: Element | null) => {
    const track = trackRef.current;
    if (!track) return null;
    let node: Element | null = el;
    while (node && node.parentElement !== track) node = node.parentElement;
    return node;
  };

  // Под курсором играет только одно видео, остальные замирают
  const playOnly = (card: Element | null) => {
    trackRef.current?.querySelectorAll("video").forEach((video) => {
      if (card?.contains(video)) video.play().catch(() => {});
      else video.pause();
    });
  };

  const resumeVisible = () => {
    trackRef.current?.querySelectorAll("video").forEach((video) => {
      const rect = video.getBoundingClientRect();
      const middle = rect.left + rect.width / 2;
      if (middle > 0 && middle < window.innerWidth) video.play().catch(() => {});
    });
  };

  return (
    <div
      ref={wrapperRef}
      className="w-full overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseOver={(e) => {
        const card = cardOf(e.target as Element);
        // в зазоре между карточками карточки нет — оставляем как было,
        // иначе видео дёргались бы при каждом проходе курсора между ними
        if (!card || card === hoveredCardRef.current) return;
        hoveredCardRef.current = card;
        playOnly(card);
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
        hoveredCardRef.current = null;
        resumeVisible();
      }}
      onTouchStart={() => (pausedRef.current = true)}
      onTouchEnd={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex w-max gap-4 will-change-transform sm:gap-6">
        {children}
      </div>
    </div>
  );
}
