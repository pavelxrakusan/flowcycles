"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  videoId: string;
  title: string;
}

export function VideoPlayer({ videoId, title }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video bg-surface overflow-hidden group">
      {!playing ? (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors" />
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            aria-label={`Přehrát video: ${title}`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-accent flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-background ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
            <span className="text-foreground text-sm font-semibold uppercase tracking-[0.15em]">
              {title}
            </span>
          </button>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}
