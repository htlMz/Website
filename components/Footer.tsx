import Container from "./Container";
import { TELEGRAM_LINK, SITE_NAME, NAME, BRAND } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-[#4a3324]/10 bg-black/[0.02] py-10 text-[#8a6b55]">
      <Container>
        <div className="flex flex-col items-center gap-4 text-sm sm:flex-row sm:justify-between">
          <p className="font-medium text-[#4a3324]">
            {NAME} <span className="text-shimmer-gold">{BRAND}</span>
          </p>

          <nav className="flex gap-6">
            <a href="#services" className="transition hover:text-[#4a3324]">
              Услуги
            </a>
            <a href="#portfolio" className="transition hover:text-[#4a3324]">
              Кейсы
            </a>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#4a3324]"
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
