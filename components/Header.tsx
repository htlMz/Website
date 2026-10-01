"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { TELEGRAM_LINK } from "@/lib/site-config";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#portfolio", label: "Кейсы" },
  { href: "#faq", label: "Вопросы" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#4a3324]/10 bg-[#fdf3e7]/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-xl font-semibold text-[#4a3324]">
            Эмиль <span className="text-shimmer-gold">LOGO$</span>
          </a>

          <nav className="hidden gap-8 text-sm text-[#8a6b55] md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#4a3324]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-[#e0835f] px-5 py-2 text-sm font-medium text-[#c9622f] transition hover:bg-[#e0835f] hover:text-white md:inline-block"
          >
            Получить разбор
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4a3324]/15 text-[#4a3324] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-[#4a3324]/10 bg-[#fdf3e7]/95 backdrop-blur-xl md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4 text-base text-[#5c4635]">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 transition hover:bg-black/5 hover:text-[#4a3324]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-[#d9a441] to-[#e0835f] px-5 py-3 text-center font-medium text-white transition hover:opacity-90"
              >
                Получить разбор
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
