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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--fg)]/10 bg-[var(--bg-top)]/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-xl font-semibold text-[var(--fg)]">
            Эмиль <span className="text-shimmer-gold">LOGO$</span>
          </a>

          <nav className="hidden gap-8 text-sm text-[var(--muted)] md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--fg)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-[var(--accent-2)] px-5 py-2 text-sm font-medium text-[var(--accent-text)] transition hover:bg-[var(--accent-2)] hover:text-white md:inline-block"
          >
            Получить разбор
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--fg)]/15 text-[var(--fg)] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-[var(--fg)]/10 bg-[var(--bg-top)]/95 backdrop-blur-xl md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4 text-base text-[var(--muted)]">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 transition hover:bg-black/5 hover:text-[var(--fg)]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] px-5 py-3 text-center font-medium text-white transition hover:opacity-90"
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
