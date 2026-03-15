"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Bike } from "@/data/bikes";
import { bikeCategories } from "@/data/bikes";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ImageGallery } from "@/components/ImageGallery";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GeometryDiagram } from "@/components/GeometryDiagram";

interface Props {
  bike: Bike;
}

/* ────────────────────────────────────────────
   1. HERO — full-screen bike + color switcher
   ──────────────────────────────────────────── */
function HeroSection({ bike, colorIndex, setColorIndex }: Props & { colorIndex: number; setColorIndex: (i: number) => void }) {
  const currentImage = bike.colors[colorIndex]?.image ?? bike.heroImage;
  const currentColor = bike.colors[colorIndex];

  // Dynamic background gradient that changes with selected color (like Pivot)
  const bgColor = currentColor?.hex ?? "#2a2a2a";
  const bgSecondary = currentColor?.hexSecondary ?? bgColor;

  return (
    <section className="relative min-h-[92vh] flex flex-col pt-20 overflow-hidden">
      {/* Dynamic color background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${colorIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 55%, ${bgColor}20 0%, ${bgSecondary}12 35%, #1c1c1c 70%)`,
          }}
        />
      </AnimatePresence>

      {/* Bike — maximum size, no unnecessary padding */}
      <div className="relative flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={colorIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-[90vw] lg:w-[75vw] max-w-[1400px] aspect-[16/9]"
          >
            <Image
              src={currentImage}
              alt={`${bike.name} — ${currentColor?.name ?? ""}`}
              fill
              className="object-contain drop-shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
              priority
              sizes="(max-width: 768px) 90vw, 75vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Color name + swatches at bottom center */}
      <div className="relative pb-10 flex flex-col items-center gap-4 z-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={colorIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/70 text-sm tracking-wide"
          >
            {currentColor?.name}
          </motion.p>
        </AnimatePresence>
        {bike.colors.length > 1 && (
          <div className="flex gap-5">
            {bike.colors.map((color, i) => (
              <button
                key={i}
                onClick={() => setColorIndex(i)}
                title={color.name}
                className="relative"
              >
                <span
                  className="block w-10 h-10 rounded-full transition-all duration-300"
                  style={{
                    background: color.hexSecondary
                      ? `linear-gradient(135deg, ${color.hex} 50%, ${color.hexSecondary} 50%)`
                      : color.hex,
                    boxShadow:
                      i === colorIndex
                        ? `0 0 0 3px #1c1c1c, 0 0 0 5px rgba(255,255,255,0.6)`
                        : "inset 0 0 0 1px rgba(255,255,255,0.15)",
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   2. CTA BANNER — big tagline centered
   ──────────────────────────────────────────── */
function CtaBanner({ bike }: Props) {
  return (
    <section className="py-24 lg:py-36 text-center">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-shimmer">
            {bike.tagline}
          </h1>
          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            {bike.description}
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
          >
            Domluvit prohlídku {bike.name}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   3. CONTENT BLOCKS — alternating image + text
   ──────────────────────────────────────────── */
function ContentBlocks({ bike }: Props) {
  if (bike.highlights.length === 0) return null;

  return (
    <section>
      {bike.highlights.map((hl, i) => {
        const imageRight = i % 2 === 0;
        const galleryImg = bike.galleryImages[i];

        return (
          <div key={i} className="border-t border-border/20">
            <div className="max-w-7xl mx-auto">
              <div className={`grid lg:grid-cols-2 min-h-[500px] ${imageRight ? "" : ""}`}>
                {/* Text */}
                <div className={`flex flex-col justify-center px-8 lg:px-16 py-16 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                  <ScrollReveal>
                    <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                      {hl.title}
                    </h2>
                    <p className="text-muted text-base md:text-lg leading-relaxed">
                      {hl.description}
                    </p>
                  </ScrollReveal>
                </div>
                {/* Image */}
                <div className={`relative min-h-[350px] lg:min-h-0 ${imageRight ? "lg:order-2" : "lg:order-1"}`}>
                  {galleryImg ? (
                    <Image
                      src={galleryImg}
                      alt={hl.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-surface-light flex items-center justify-center">
                      <Image
                        src={bike.heroImage}
                        alt={hl.title}
                        fill
                        className="object-contain p-12"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

/* ────────────────────────────────────────────
   4. VIDEO SECTION
   ──────────────────────────────────────────── */
function VideoSection({ bike }: Props) {
  if (bike.videos.length === 0) return null;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {bike.videos.map((video) => (
          <ScrollReveal key={video.id}>
            <VideoPlayer videoId={video.id} title={video.title} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   5. REVIEWS
   ──────────────────────────────────────────── */
function ReviewsSection({ bike }: Props) {
  if (bike.reviews.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {bike.reviews.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <blockquote className="bg-background p-10 lg:p-14 h-full flex flex-col shine-effect">
                <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8">
                  {review.publication}
                </p>
                <p className="text-foreground text-xl lg:text-2xl leading-relaxed italic flex-1 mb-8">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-muted text-sm">
                  — {review.author}
                </p>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   6. TECHNOLOGY GRID — feature cards
   ──────────────────────────────────────────── */
function TechGrid({ bike }: Props) {
  if (bike.features.length === 0) return null;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-16 text-center">
            Technologie
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bike.features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="relative group bg-surface border border-border/30 p-8 h-full hover:border-accent/30 transition-colors duration-500 shine-effect glow-border">
                <span className="text-accent/40 text-5xl font-bold absolute top-4 right-6 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground font-medium text-sm leading-relaxed relative z-10 mt-8">
                  {feature}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   7. SPECS ACCORDION — Build Specs, Product
      Details, Geometry, Size Chart, Tech
      Resources, FAQs
   ──────────────────────────────────────────── */
function AccordionItem({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className="text-lg font-bold uppercase tracking-[0.1em] group-hover:text-accent transition-colors">
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-accent flex-shrink-0 ml-4"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SpecsAccordion({ bike }: Props) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggle = (id: string) => setOpenSection(openSection === id ? null : id);

  const sizeLabels: Record<string, string> = { xs: "XS", sm: "S", md: "M", lg: "L", xl: "XL" };
  const sizes = (["xs", "sm", "md", "lg", "xl"] as const).filter((s) =>
    bike.geometry.some((row) => row[s] !== undefined)
  );

  const [activeBuild, setActiveBuild] = useState(0);

  const hasSections =
    bike.builds.length > 0 ||
    bike.productDetails.length > 0 ||
    bike.geometry.length > 0 ||
    bike.sizeChart.length > 0 ||
    bike.faqs.length > 0;

  if (!hasSections) return null;

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Build Specs */}
        {bike.builds.length > 0 && (
          <AccordionItem title="Sestavy" open={openSection === "specs"} onToggle={() => toggle("specs")}>
            {bike.builds.length > 1 && (
              <div className="flex gap-4 mb-8">
                {bike.builds.map((build, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveBuild(i)}
                    className={`text-sm font-semibold uppercase tracking-[0.1em] pb-2 border-b-2 transition-colors ${
                      i === activeBuild ? "text-accent border-accent" : "text-muted border-transparent hover:text-foreground"
                    }`}
                  >
                    {build.name}
                  </button>
                ))}
              </div>
            )}
            <h3 className="text-base font-bold uppercase tracking-tight mb-6 text-accent">
              {bike.builds[activeBuild]?.name}
            </h3>
            {bike.builds[activeBuild]?.components.map((comp, i) => (
              <div key={i} className={`flex justify-between py-4 ${i < (bike.builds[activeBuild]?.components.length ?? 0) - 1 ? "border-b border-border/40" : ""}`}>
                <span className="text-muted text-sm uppercase tracking-wider">{comp.label}</span>
                <span className="text-foreground text-sm font-medium text-right max-w-[60%]">{comp.value}</span>
              </div>
            ))}
          </AccordionItem>
        )}

        {/* Product Details */}
        {bike.productDetails.length > 0 && (
          <AccordionItem title="Detaily produktu" open={openSection === "details"} onToggle={() => toggle("details")}>
            <ul className="space-y-4">
              {bike.productDetails.map((detail, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-accent mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-foreground/90 text-sm">{detail}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>
        )}

        {/* Geometry */}
        {bike.geometry.length > 0 && (
          <AccordionItem title="Geometrie" open={openSection === "geometry"} onToggle={() => toggle("geometry")}>
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
              {/* Table */}
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-muted w-12"></th>
                      <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-muted">Parametr</th>
                      {sizes.map((s) => (
                        <th key={s} className="text-center py-3 text-xs font-bold uppercase tracking-wider text-accent">{sizeLabels[s]}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bike.geometry.map((row, i) => {
                      const letter = String.fromCharCode(65 + i);
                      return (
                        <tr key={i} className={i < bike.geometry.length - 1 ? "border-b border-border/30" : ""}>
                          <td className="py-3 text-xs font-bold text-accent w-12">{letter}</td>
                          <td className="py-3 text-sm text-muted">{row.label}</td>
                          {sizes.map((s) => (
                            <td key={s} className="py-3 text-sm text-center text-foreground font-medium">
                              {row[s] ? `${row[s]} cm` : "—"}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/* Geometry diagram */}
              <div className="hidden lg:block w-72 flex-shrink-0">
                <GeometryDiagram />
              </div>
            </div>
            <p className="text-muted/50 text-xs mt-6">Rozměry v cm, úhly ve stupních. Geometrie se může lišit podle nastavení flip-chipu.</p>
          </AccordionItem>
        )}

        {/* Size Chart */}
        {bike.sizeChart.length > 0 && (
          <AccordionItem title="Velikostní tabulka" open={openSection === "sizes"} onToggle={() => toggle("sizes")}>
            <div className="space-y-3">
              {bike.sizeChart.map((row) => (
                <div key={row.size} className="flex items-center justify-between p-4 bg-background border border-border/40">
                  <span className="text-2xl font-bold text-accent tracking-tight">{row.size}</span>
                  <span className="text-foreground text-sm">{row.minHeight} — {row.maxHeight}</span>
                </div>
              ))}
            </div>
            <p className="text-muted text-sm mt-6">
              Jste mezi dvěma velikostmi? Přijďte do studia — pomůžeme vám vybrat. Osobní konzultace je zdarma.
            </p>
          </AccordionItem>
        )}

        {/* Technical Resources */}
        <AccordionItem title="Technické zdroje" open={openSection === "resources"} onToggle={() => toggle("resources")}>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm">
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <a href="https://www.pivotcycles.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                Suspension Setup Guide — pivotcycles.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <a href="https://www.pivotcycles.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                Owner&apos;s Manual — pivotcycles.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <a href="https://www.pivotcycles.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                Suspension Calculator — pivotcycles.com
              </a>
            </li>
          </ul>
          <p className="text-muted text-xs mt-6">
            Potřebujete pomoct s nastavením? Přijďte do studia — nastavíme odpružení na míru vaší hmotnosti a stylu jízdy.
          </p>
        </AccordionItem>

        {/* FAQ */}
        {bike.faqs.length > 0 && (
          <AccordionItem title="Časté dotazy" open={openSection === "faqs"} onToggle={() => toggle("faqs")}>
            <div className="space-y-6">
              {bike.faqs.map((faq, i) => (
                <div key={i}>
                  <h4 className="text-foreground font-semibold text-sm mb-2">{faq.question}</h4>
                  <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AccordionItem>
        )}

        {/* Bottom border */}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   8. CTA FOOTER
   ──────────────────────────────────────────── */
function CtaFooter({ bike }: Props) {
  return (
    <section className="py-28 lg:py-40 text-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Zaujal vás {bike.name}?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-shimmer">
            Přijďte si ho prohlédnout naživo
          </h2>
          <p className="text-muted text-lg mb-12">
            V showroomu vám ukážeme detaily, poradíme s velikostí a sestavou. Osobní konzultace je zdarma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-background text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
            >
              Domluvit prohlídku
            </Link>
            <Link
              href="/kola"
              className="inline-flex items-center justify-center px-10 py-4 border border-foreground/30 text-foreground text-sm font-semibold uppercase tracking-[0.15em] hover:border-foreground hover:bg-foreground/5 transition-colors"
            >
              Zpět na kola
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   MAIN COMPONENT — page assembly
   ──────────────────────────────────────────── */
export function BikeDetailClient({ bike }: Props) {
  const [colorIndex, setColorIndex] = useState(0);

  const galleryImages = bike.galleryImages.map((src, i) => ({
    src,
    alt: `${bike.name} — foto ${i + 1}`,
  }));

  return (
    <>
      {/* 1. Hero with bike + color switcher */}
      <HeroSection bike={bike} colorIndex={colorIndex} setColorIndex={setColorIndex} />

      {/* 2. CTA Banner — tagline + description */}
      <CtaBanner bike={bike} />

      {/* 3. Image carousel (if gallery available) */}
      {galleryImages.length > 0 && <ImageGallery images={galleryImages} />}

      {/* 4. Content blocks — alternating image + text */}
      <ContentBlocks bike={bike} />

      {/* 5. Video */}
      <VideoSection bike={bike} />

      {/* 6. Reviews */}
      <ReviewsSection bike={bike} />

      {/* 7. Technology grid */}
      <TechGrid bike={bike} />

      {/* 8. Specs accordion (Build Specs, Product Details, Geometry, Size Chart, Tech Resources, FAQ) */}
      <SpecsAccordion bike={bike} />

      {/* 9. CTA footer */}
      <CtaFooter bike={bike} />
    </>
  );
}
