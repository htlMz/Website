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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b0713]/80 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-xl font-semibold text-white">
            Эмиль <span className="text-violet-400">LOGO$</span>
          </a>

          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-violet-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-600 md:inline-block"
          >
            Получить разбор
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-[#0b0713]/95 backdrop-blur md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4 text-base text-zinc-200">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-violet-600 px-5 py-3 text-center font-medium text-white transition hover:bg-violet-500"
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
