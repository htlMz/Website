/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useRef } from "react";
import Container from "./Container";

const points = [
  {
    parts: [
      { text: "Эксперты терпят неудачу в Reels, потому что используют ", type: "plain" },
      { text: "не ту стратегию!", type: "highlight" },
    ],
  },
  {
    parts: [
      { text: "Наша цель — получить максимум ", type: "plain" },
      { text: "целевых", type: "highlight" },
      { text: " просмотров от людей, которые станут ", type: "plain" },
      { text: "реальными покупателями", type: "highlight" },
    ],
  },
  {
    parts: [
      { text: "Вместо погони за просмотрами мы формируем и масштабируем ", type: "plain" },
      { text: "доверие контентом", type: "highlight" },
    ],
  },
  {
    parts: [
      { text: "", type: "plain" },
      { text: "Стабильный контент", type: "highlight" },
      { text: " вызывает доверие у целевой аудитории. Грамотно выстроенные воронки удерживают интерес зрителей.", type: "plain" },
    ],
  },
];

function getFullPlainText(parts: { text: string; type: string }[]) {
  return parts.map(p => p.text).join("");
}

export default function Whyitworks() {
  const [displayedLengths, setDisplayedLengths] = useState<number[]>(points.map(() => 0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showFinalPhrase, setShowFinalPhrase] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex >= points.length) {
      setIsComplete(true);
      setTimeout(() => {
        setShowFinalPhrase(true);
      }, 400);
      return;
    }

    const fullText = getFullPlainText(points[currentIndex].parts);
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex <= fullText.length) {
        setDisplayedLengths((prev) => {
          const newLengths = [...prev];
          newLengths[currentIndex] = charIndex;
          return newLengths;
        });
        charIndex++;
        timerRef.current = setTimeout(typeChar, 30);
      } else {
        pauseRef.current = setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, 400);
      }
    };

    typeChar();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (pauseRef.current) clearTimeout(pauseRef.current);
    };
  }, [hasStarted, currentIndex]);

  const renderPoint = (parts: { text: string; type: string }[], index: number) => {
    const isDone = index < currentIndex;
    const isActive = index === currentIndex;
    const displayedLength = displayedLengths[index] || 0;

    const renderFullText = (opacity: number = 1) => {
      let currentPos = 0;
      return parts.map((part, i) => {
        const partText = part.text;
        const start = currentPos;
        const end = start + partText.length;
        currentPos = end;

        if (part.type === "highlight") {
          return (
            <span key={i} className="text-shimmer-gold font-semibold glow-violet-strong">
              {partText}
            </span>
          );
        }

        if (isDone || (isActive && displayedLength >= end)) {
          return <span key={i} style={{ opacity }}>{partText}</span>;
        } else if (isActive && displayedLength > start) {
          const visibleCount = displayedLength - start;
          const visibleText = partText.slice(0, visibleCount);
          const hiddenText = partText.slice(visibleCount);
          return (
            <span key={i}>
              <span style={{ opacity }}>{visibleText}</span>
              <span className="opacity-0">{hiddenText}</span>
            </span>
          );
        } else {
          return <span key={i} className="opacity-0">{partText}</span>;
        }
      });
    };

    const showCursor = isActive && !isComplete && hasStarted;

    return (
      <div
        key={index}
        className={`text-lg md:text-xl lg:text-2xl text-[var(--muted)] leading-relaxed border-l-4 border-[var(--accent-2)]/35 pl-6 py-2 hover:border-[var(--accent-2)] transition-all duration-300 ${
          !isActive && !isDone ? "opacity-50" : ""
        }`}
      >
        {renderFullText()}
        {showCursor && (
          <span className="inline-block w-[2px] h-6 bg-[var(--accent-icon)] ml-1 animate-pulse" />
        )}
        <span className="block text-sm text-[var(--muted)]/70 mt-1 font-mono tracking-wider">
          — {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    );
  };

  return (
    <section
      id="why-it-works"
      ref={sectionRef}
      className="relative py-20 scroll-mt-24"
    >
      <div className="glow-orb glow-orb-pink animate-drift right-0 top-0 h-96 w-96" />

      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--fg)]">
            Почему это <span className="gradient-text-violet glow-violet">работает?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {points.map((point, index) => renderPoint(point.parts, index))}
        </div>

        {showFinalPhrase && (
          <div className="text-center mt-12 animate-fadeIn">
            <p className="text-xl md:text-2xl lg:text-3xl font-serif italic font-semibold text-shimmer-gold glow-violet-strong">
              Система побеждает хаос
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}