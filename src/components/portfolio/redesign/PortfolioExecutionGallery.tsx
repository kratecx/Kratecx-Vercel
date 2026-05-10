import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type GallerySerializedImage =
  | string
  | { src: string; width?: number; height?: number };

type Props = {
  images: GallerySerializedImage[];
  projectTitle?: string;
};

function srcOf(img: GallerySerializedImage): string {
  if (typeof img === "string") return img;
  return img.src;
}

export default function PortfolioExecutionGallery({
  images,
  projectTitle = "Case study",
}: Props) {
  const slides = images.map(srcOf).filter(Boolean);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [slides.join("|")]);

  const hasMany = slides.length > 1;

  const goPrev = useCallback(() => {
    setIndex((i) => (hasMany ? (i - 1 + slides.length) % slides.length : 0));
  }, [hasMany, slides.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (hasMany ? (i + 1) % slides.length : 0));
  }, [hasMany, slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!hasMany) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, hasMany]);

  if (slides.length === 0) return null;

  const altBase = projectTitle.trim() || "Case study";

  return (
    <div className="w-full select-none">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.35)] sm:rounded-3xl">
        <div className="relative h-full w-full">
          {slides.map((src, i) => (
            <img
              key={`slide-${i}`}
              src={src}
              alt={`${altBase} — screenshot ${i + 1} of ${slides.length}`}
              width={1600}
              height={900}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className={
                i === index
                  ? "absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity duration-300 motion-reduce:transition-none"
                  : "pointer-events-none absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 motion-reduce:transition-none"
              }
              draggable={false}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-3 sm:p-4">
          <span className="rounded bg-black/55 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm sm:text-[11px]">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {hasMany ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-orange-400/80 bg-black/65 text-orange-400 shadow-lg backdrop-blur-md transition-colors hover:bg-orange-400/20 hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 sm:left-4 sm:h-12 sm:w-12"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={2.5} aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-orange-400/80 bg-black/65 text-orange-400 shadow-lg backdrop-blur-md transition-colors hover:bg-orange-400/20 hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 sm:right-4 sm:h-12 sm:w-12"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={2.5} aria-hidden />
            </button>
          </>
        ) : null}
      </div>

      {hasMany ? (
        <div
          className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-6 sm:gap-3 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Gallery thumbnails"
        >
          {slides.map((src, i) => (
            <button
              key={`thumb-${i}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={
                i === index
                  ? "relative aspect-video min-w-[28%] shrink-0 overflow-hidden rounded-lg ring-2 ring-orange-400 ring-offset-2 ring-offset-white sm:min-w-0"
                  : "relative aspect-video min-w-[28%] shrink-0 overflow-hidden rounded-lg ring-1 ring-zinc-200 opacity-85 transition-opacity hover:opacity-100 sm:min-w-0"
              }
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover object-top"
                loading="lazy"
                draggable={false}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
