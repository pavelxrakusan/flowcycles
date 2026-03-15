"use client";

import { motion } from "framer-motion";
import type { BikeColor } from "@/data/bikes";

interface Props {
  colors: BikeColor[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export function ColorSwitcher({ colors, activeIndex, onChange }: Props) {
  if (colors.length <= 1) return null;

  return (
    <div className="flex items-center gap-4">
      <span className="text-muted text-xs uppercase tracking-[0.2em]">Barva</span>
      <div className="flex gap-3">
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className="relative group"
            title={color.name}
            aria-label={`Barva: ${color.name}`}
          >
            <span
              className="block w-7 h-7 rounded-full border-2 transition-all duration-300"
              style={{
                backgroundColor: color.hex,
                borderColor: i === activeIndex ? "#c8a86e" : "transparent",
                boxShadow: i === activeIndex ? "0 0 0 2px #1c1c1c, 0 0 0 4px #c8a86e" : "none",
              }}
            />
            {color.hexSecondary && (
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                style={{ backgroundColor: color.hexSecondary }}
              />
            )}
          </button>
        ))}
      </div>
      <motion.span
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-foreground/60 text-xs"
      >
        {colors[activeIndex]?.name}
      </motion.span>
    </div>
  );
}
