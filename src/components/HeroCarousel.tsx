"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface Slide {
  image: string;
  label: string;
  title: string;
  subtitle: string;
  cta: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
}

const defaultSlides: Slide[] = [
  {
    image: "/assets/images/showroom.jpg",
    label: "Flowcycles Bike Studio",
    title: "Vaše kolo.\nNáš rukopis.",
    subtitle:
      "Stavíme, ladíme a servisujeme. Každý projekt začíná rozhovorem a končí kolem, na které se těšíte ráno u kávy.",
    cta: { text: "Prohlédnout kola", href: "/kola" },
    ctaSecondary: { text: "Navštívit studio", href: "/kontakt" },
  },
  {
    image: "/assets/bikes/gallery/phoenix/phoenix-action-03.webp",
    label: "Phoenix DW6 — 2026",
    title: "Na rychlost\njsme si dali čas",
    subtitle:
      "210 mm zdvihu, šestičlánková kinematika DW6, vítěz Světového poháru. Downhill nové generace je tady.",
    cta: { text: "Prohlédnout Phoenix", href: "/kola/phoenix" },
  },
  {
    image: "/assets/bikes/gallery/firebird/action-01.webp",
    label: "Stavba měsíce",
    title: "Firebird\nPurple Galaxy",
    subtitle:
      "Enduro bez kompromisů. 165 mm zdvihu, FOX Live Valve Neo a sestava laděná na míru. Jak jsme stavěli Martinův Firebird.",
    cta: { text: "Číst příběh", href: "/blog/stavba-mesice-firebird-purple-galaxy" },
  },
  {
    image: "/assets/bikes/gallery/switchblade/action-01.webp",
    label: "Pivot Switchblade",
    title: "Jedno kolo.\nKaždý trail.",
    subtitle:
      "142 mm zdvihu, 29\" kola, dw-link. Trail kolo, které nepotřebuje kompromisy. Nejprodávanější model v našem studiu.",
    cta: { text: "Prohlédnout Switchblade", href: "/kola/switchblade" },
  },
  {
    image: "/assets/gallery/action-ebike.jpg",
    label: "Custom stavby",
    title: "Rám vybereme.\nZbytek složíme.",
    subtitle:
      "Od prvního rozhovoru po předání klíčů — kolo na míru vašemu stylu jízdy, tělu i ambicím.",
    cta: { text: "Jak to funguje", href: "/custom-stavby" },
  },
];

export function HeroCarousel({ slides: externalSlides }: { slides?: Slide[] } = {}) {
  const slides = externalSlides && externalSlides.length > 0 ? externalSlides : defaultSlides;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const slide = slides[current];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-28 lg:pb-36 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.p
                className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slide.label}
              </motion.p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95] mb-6 whitespace-pre-line text-shimmer">
                {slide.title}
              </h1>
              <p className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
                >
                  {slide.cta.text}
                </Link>
                {slide.ctaSecondary && (
                  <Link
                    href={slide.ctaSecondary.href}
                    className="inline-flex items-center justify-center px-8 py-4 border border-foreground/30 text-foreground text-sm font-semibold uppercase tracking-[0.15em] hover:border-foreground hover:bg-foreground/5 transition-colors"
                  >
                    {slide.ctaSecondary.text}
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative h-1 overflow-hidden"
            style={{ width: "48px" }}
            aria-label={`Slide ${i + 1}`}
          >
            <div className="absolute inset-0 bg-foreground/20 rounded-full" />
            {i === current && (
              <motion.div
                className="absolute inset-0 bg-accent rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
            {i < current && (
              <div className="absolute inset-0 bg-accent/60 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-6 lg:right-12 text-muted/40 text-sm font-mono z-10">
        <span className="text-foreground">{String(current + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
