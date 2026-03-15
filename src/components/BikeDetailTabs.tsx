"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Bike } from "@/data/bikes";

interface Props {
  bike: Bike;
}

type TabId = "specs" | "details" | "geometry" | "sizes" | "faqs";

interface Tab {
  id: TabId;
  label: string;
  available: (bike: Bike) => boolean;
}

const tabs: Tab[] = [
  { id: "specs", label: "Sestavy", available: (b) => b.builds.length > 0 },
  { id: "details", label: "Detaily produktu", available: (b) => b.productDetails.length > 0 },
  { id: "geometry", label: "Geometrie", available: (b) => b.geometry.length > 0 },
  { id: "sizes", label: "Velikosti", available: (b) => b.sizeChart.length > 0 },
  { id: "faqs", label: "FAQ", available: (b) => b.faqs.length > 0 },
];

function BuildSpecs({ bike }: Props) {
  const [activeBuild, setActiveBuild] = useState(0);

  return (
    <div>
      {bike.builds.length > 1 && (
        <div className="flex gap-4 mb-8 border-b border-border">
          {bike.builds.map((build, i) => (
            <button
              key={i}
              onClick={() => setActiveBuild(i)}
              className={`pb-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors border-b-2 -mb-px ${
                i === activeBuild
                  ? "text-accent border-accent"
                  : "text-muted border-transparent hover:text-foreground"
              }`}
            >
              {build.name}
            </button>
          ))}
        </div>
      )}
      {bike.builds[activeBuild] && (
        <div>
          <h3 className="text-lg font-bold uppercase tracking-tight mb-6">
            {bike.builds[activeBuild].name}
          </h3>
          <div className="space-y-0">
            {bike.builds[activeBuild].components.map((comp, i) => (
              <div
                key={i}
                className={`flex justify-between py-4 ${
                  i < bike.builds[activeBuild].components.length - 1
                    ? "border-b border-border/50"
                    : ""
                }`}
              >
                <span className="text-muted text-sm uppercase tracking-wider">
                  {comp.label}
                </span>
                <span className="text-foreground text-sm font-medium text-right max-w-[60%]">
                  {comp.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductDetails({ bike }: Props) {
  return (
    <ul className="space-y-4">
      {bike.productDetails.map((detail, i) => (
        <li key={i} className="flex items-start gap-4">
          <span className="text-accent mt-1 flex-shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-foreground/90">{detail}</span>
        </li>
      ))}
    </ul>
  );
}

function GeometryTable({ bike }: Props) {
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
  const availableSizes = sizes.filter((s) =>
    bike.geometry.some((row) => row[s] !== undefined)
  );
  const sizeLabels: Record<string, string> = {
    xs: "XS",
    sm: "S",
    md: "M",
    lg: "L",
    xl: "XL",
  };

  return (
    <div className="overflow-x-auto -mx-6 px-6">
      <table className="w-full min-w-[500px]">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Parametr
            </th>
            {availableSizes.map((s) => (
              <th
                key={s}
                className="text-center py-3 text-sm font-semibold uppercase tracking-wider text-accent"
              >
                {sizeLabels[s]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bike.geometry.map((row, i) => (
            <tr
              key={i}
              className={
                i < bike.geometry.length - 1 ? "border-b border-border/30" : ""
              }
            >
              <td className="py-3 text-sm text-muted">{row.label}</td>
              {availableSizes.map((s) => (
                <td key={s} className="py-3 text-sm text-center text-foreground font-medium">
                  {row[s] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-muted/50 text-xs mt-4">
        Všechny rozměry v cm, úhly ve stupních. Geometrie se může lišit podle nastavení flip-chipu.
      </p>
    </div>
  );
}

function SizeChart({ bike }: Props) {
  return (
    <div>
      <div className="grid gap-4">
        {bike.sizeChart.map((row) => (
          <div
            key={row.size}
            className="flex items-center justify-between p-4 bg-surface-light border border-border/50"
          >
            <span className="text-2xl font-bold text-accent tracking-tight">
              {row.size}
            </span>
            <span className="text-foreground">
              {row.minHeight} — {row.maxHeight}
            </span>
          </div>
        ))}
      </div>
      <p className="text-muted text-sm mt-6">
        Jste mezi dvěma velikostmi? Přijďte do studia — pomůžeme vám vybrat tu pravou. Osobní konzultace a test ride jsou zdarma.
      </p>
    </div>
  );
}

function FAQSection({ bike }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {bike.faqs.map((faq, i) => (
        <div key={i} className="border-b border-border/50">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex items-center justify-between w-full py-5 text-left group"
          >
            <span className="text-foreground font-medium pr-8">
              {faq.question}
            </span>
            <span
              className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-muted text-sm leading-relaxed pb-5">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function BikeDetailTabs({ bike }: Props) {
  const availableTabs = tabs.filter((t) => t.available(bike));
  const [activeTab, setActiveTab] = useState<TabId>(
    availableTabs[0]?.id ?? "details"
  );

  if (availableTabs.length === 0) return null;

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Tab headers */}
        <div className="flex gap-6 lg:gap-10 overflow-x-auto pb-1 mb-10 border-b border-border scrollbar-hide">
          {availableTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-4 text-sm font-semibold uppercase tracking-[0.15em] whitespace-nowrap transition-colors ${
                activeTab === tab.id ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl"
          >
            {activeTab === "specs" && <BuildSpecs bike={bike} />}
            {activeTab === "details" && <ProductDetails bike={bike} />}
            {activeTab === "geometry" && <GeometryTable bike={bike} />}
            {activeTab === "sizes" && <SizeChart bike={bike} />}
            {activeTab === "faqs" && <FAQSection bike={bike} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
