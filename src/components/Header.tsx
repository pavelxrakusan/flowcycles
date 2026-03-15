"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bikeCategories } from "@/data/bikes";
import { componentBrands } from "@/data/brands";

interface DropdownItem {
  href: string;
  label: string;
  desc?: string;
  image?: string;
}

interface NavItem {
  href: string;
  label: string;
  megaMenu?: boolean;
  dropdown?: DropdownItem[];
}

const categoryImages: Record<string, string> = {
  "cross-country": "/assets/bikes/gallery/mach4sl/gallery-01.webp",
  trail: "/assets/bikes/gallery/switchblade/action-01.webp",
  enduro: "/assets/bikes/gallery/firebird/action-01.webp",
  gravity: "/assets/bikes/gallery/phoenix/phoenix-action-03.webp",
  "e-bike": "/assets/bikes/gallery/shuttle-lt/action-01.webp",
  gravel: "/assets/bikes/gallery/vault/action-01.webp",
};

const navItems: NavItem[] = [
  {
    href: "/kola",
    label: "Kola",
    megaMenu: true,
    dropdown: [
      { href: "/kola", label: "Všechna kola", desc: "Kompletní nabídka Pivot", image: "/assets/images/showroom.jpg" },
      ...bikeCategories
        .filter((c) => c.id !== "dirt-jump" && c.id !== "silnicni")
        .map((c) => ({
          href: `/kola#${c.id}`,
          label: c.name,
          desc: c.description,
          image: categoryImages[c.id],
        })),
      { href: "/kola#silnicni", label: "Road", desc: "Již brzy", image: "/assets/images/bike_build.jpg" },
    ],
  },
  {
    href: "/komponenty",
    label: "Komponenty",
    megaMenu: true,
    dropdown: [
      { href: "/komponenty", label: "Všechny značky", desc: "Prémiové komponenty v našem portfoliu", image: "/assets/gallery/komponenty-01.jpg" },
      ...componentBrands.map((b) => ({
        href: `/komponenty#${b.slug}`,
        label: b.name,
        desc: b.tagline,
        image: "/assets/gallery/komponenty-01.jpg",
      })),
    ],
  },
  { href: "/servis", label: "Servis" },
  { href: "/custom-stavby", label: "Custom stavby" },
  { href: "/studio", label: "Studio" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

/* ─── Mega Menu for Kola (with images) ─── */
function MegaMenuKola({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) {
  const [hovered, setHovered] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.25 }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[800px]"
      onMouseLeave={onClose}
    >
      <div className="bg-background/98 backdrop-blur-xl border border-border shadow-2xl grid grid-cols-[280px_1fr] overflow-hidden">
        {/* Links */}
        <div className="p-3 border-r border-border">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              onMouseEnter={() => setHovered(i)}
              className={`block px-4 py-3 transition-colors group ${
                hovered === i ? "bg-surface" : "hover:bg-surface/50"
              }`}
            >
              <span className={`text-sm font-semibold transition-colors ${
                hovered === i ? "text-accent" : "text-foreground"
              }`}>
                {item.label}
              </span>
              {item.desc && (
                <span className="block text-[11px] text-muted/50 mt-0.5 leading-snug line-clamp-1">
                  {item.desc}
                </span>
              )}
            </Link>
          ))}
        </div>
        {/* Preview image */}
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            {items[hovered]?.image && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={items[hovered].image!}
                  alt={items[hovered].label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/30" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Simple Dropdown ─── */
function SimpleDropdown({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 pt-3"
      onMouseLeave={onClose}
    >
      <div className="bg-background/98 backdrop-blur-xl border border-border shadow-2xl min-w-[300px] p-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="block px-4 py-3 hover:bg-surface transition-colors group"
          >
            <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
              {item.label}
            </span>
            {item.desc && (
              <span className="block text-[11px] text-muted/50 mt-0.5 leading-snug">
                {item.desc}
              </span>
            )}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/logos/flowcycles_logo.png"
              alt="Flowcycles"
              width={180}
              height={40}
              className="invert h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors whitespace-nowrap ${
                    activeDropdown === item.label
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className={`inline-block w-2.5 h-2.5 ml-1 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    item.megaMenu ? (
                      <MegaMenuKola
                        items={item.dropdown}
                        onClose={() => setActiveDropdown(null)}
                      />
                    ) : (
                      <SimpleDropdown
                        items={item.dropdown}
                        onClose={() => setActiveDropdown(null)}
                      />
                    )
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA desktop */}
          <Link
            href="/kontakt"
            className="hidden xl:inline-flex items-center px-5 py-2 bg-accent text-background text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-accent-hover transition-colors animate-pulse-glow"
          >
            Domluvit návštěvu
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden overflow-hidden"
          >
            <nav className="px-6 py-6 bg-background border-t border-border flex flex-col gap-0.5 max-h-[75vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-base font-semibold uppercase tracking-[0.1em] text-foreground"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 pb-2 grid grid-cols-2 gap-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-muted hover:text-accent transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background text-sm font-semibold uppercase tracking-[0.12em] mt-4"
              >
                Domluvit návštěvu
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
