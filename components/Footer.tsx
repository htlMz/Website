import Container from "./Container";
import { TELEGRAM_LINK, SITE_NAME } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0713] py-10 text-zinc-500">
      <Container>
        <div className="flex flex-col items-center gap-4 text-sm sm:flex-row sm:justify-between">
          <p className="text-white">{SITE_NAME}</p>

          <nav className="flex gap-6">
            <a href="#services" className="transition hover:text-white">
              Услуги
            </a>
            <a href="#portfolio" className="transition hover:text-white">
              Кейсы
            </a>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Telegram
            </a>
          </nav>

          <p>© {new Date().getFullYear()} {SITE_NAME}</p>
        </div>
      </Container>
    </footer>
  );
}
