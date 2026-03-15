import { notFound } from "next/navigation";
import { getAllBikes, getBike } from "@/lib/content";
import { bikes as staticBikes, bikeCategories, getBikeBySlug } from "@/data/bikes";
import { BikeDetailClient } from "./BikeDetailClient";

export function generateStaticParams() {
  // Try content/ first, fall back to static data
  const contentBikes = getAllBikes();
  const bikeSlugs = contentBikes.length > 0
    ? contentBikes.map((b) => b.slug)
    : staticBikes.map((b) => b.slug);
  return bikeSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bike = getBike(slug) ?? getBikeBySlug(slug);
  if (!bike) return { title: "Kolo nenalezeno" };
  return {
    title: `${bike.name} | Pivot | Flowcycles`,
    description: bike.description,
    openGraph: {
      title: `${bike.name} | Pivot | Flowcycles`,
      description: bike.description,
      images: [bike.heroImage],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${bike.name} | Pivot | Flowcycles`,
      description: bike.description,
      images: [bike.heroImage],
    },
  };
}

export default async function BikeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Try content/ JSON first, fall back to static TS data
  const contentBike = getBike(slug);
  const staticBike = getBikeBySlug(slug);
  const bike = contentBike ?? staticBike;

  if (!bike) notFound();

  // Normalize to the shape BikeDetailClient expects
  const bikeData = {
    ...bike,
    colors: bike.colors ?? [],
    galleryImages: bike.galleryImages ?? [],
    features: bike.features ?? [],
    highlights: bike.highlights ?? [],
    productDetails: bike.productDetails ?? [],
    geometry: bike.geometry ?? [],
    sizeChart: bike.sizeChart ?? [],
    builds: bike.builds ?? [],
    faqs: bike.faqs ?? [],
    videos: bike.videos ?? [],
    reviews: bike.reviews ?? [],
  };

  return <BikeDetailClient bike={bikeData as any} />;
}
