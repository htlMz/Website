"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";

type VideoCardProps = {
  src: string;
  title: string;
  category: string;
};

export default function VideoCard({ src, title, category }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Фоновое превью играет только когда карточка реально видна — экономит батарею и CPU на телефоне
  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        ref={cardRef}
        onClick={() => setIsOpen(true)}
        className="group relative aspect-[9/16] w-full cursor-pointer overflow-hidden rounded-3xl border border-[#4a3324]/10 bg-[#2b1a10] shadow-lg shadow-[#c9622f]/10 transition-colors duration-300 hover:border-[#e0835f]/50"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            <Play className="h-4 w-4 fill-white" />
            Смотреть
          </span>
        </div>

        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition group-hover:opacity-0">
          <Play className="h-3.5 w-3.5 fill-white" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#f0b485]">
            {category}
          </p>
          <h3 className="text-base font-medium leading-snug text-white">
            {title}
          </h3>
        </div>
      </div>

      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <video
              className="max-h-[90vh] max-w-full rounded-2xl"
              src={src}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  );
}
