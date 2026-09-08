import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type AnimationPlaybackControls,
  type PanInfo,
  type Transition,
} from "framer-motion";
import { useTranslations } from "../translations";

export interface CarouselImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CarouselProps {
  images: CarouselImage[];
  /**
   * 'intrinsic' keeps each image's own height; 'video' locks every slide to a
   * 16:9 box so slides of differing aspect ratios don't change the height.
   */
  fit?: "intrinsic" | "video";
  className?: string;
  /** Replaces the default viewport chrome rather than adding to it. */
  viewportClassName?: string;
  label?: string;
  sizes?: string;
  priorityFirst?: boolean;
  showDots?: boolean;
}

// Matches the Tailwind `duration-500 ease-in-out` the homepage used before.
const NAV_TRANSITION: Transition = {
  type: "tween",
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
};

const DRAG_TRANSITION: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 34,
  mass: 0.85,
};

const INSTANT: Transition = { duration: 0 };

const SWIPE_VELOCITY_THRESHOLD = 400;
const SWIPE_DISTANCE_RATIO = 0.2;
const SWIPE_DISTANCE_MAX = 80;

export default function Carousel({
  images,
  fit = "intrinsic",
  className = "",
  viewportClassName = "rounded-2xl border border-[#D4AF37]/20",
  label,
  sizes,
  priorityFirst = false,
  showDots = true,
}: CarouselProps) {
  const t = useTranslations();
  const reduceMotion = useReducedMotion();

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);

  const viewportRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const x = useMotionValue(0);

  const count = images.length;
  const draggable = count > 1;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    setWidth(el.clientWidth);
    const ro = new ResizeObserver((entries) => {
      setWidth(entries[0]?.contentRect.width ?? el.clientWidth);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Re-sync without animating when the viewport is first measured or resized.
  // Deliberately not keyed on `index` — those transitions belong to goTo().
  useEffect(() => {
    controlsRef.current?.stop();
    x.set(-index * width);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useEffect(() => () => controlsRef.current?.stop(), []);

  const goTo = useCallback(
    (next: number, transition: Transition = NAV_TRANSITION) => {
      const clamped = Math.max(0, Math.min(count - 1, next));
      setIndex(clamped);
      controlsRef.current?.stop();
      controlsRef.current = animate(
        x,
        -clamped * width,
        reduceMotion ? INSTANT : transition
      );
    },
    [count, width, x, reduceMotion]
  );

  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const offset = info.offset.x;
      const velocity = info.velocity.x;
      const distanceThreshold = Math.min(
        width * SWIPE_DISTANCE_RATIO,
        SWIPE_DISTANCE_MAX
      );
      const shouldSwipe =
        Math.abs(offset) > distanceThreshold ||
        Math.abs(velocity) > SWIPE_VELOCITY_THRESHOLD;
      const basis = offset !== 0 ? offset : velocity;
      const direction = basis < 0 ? 1 : -1;
      // goTo clamps, and always animates — so a below-threshold release and an
      // over-drag at either end both snap back through this same call.
      goTo(shouldSwipe ? index + direction : index, DRAG_TRANSITION);
    },
    [width, index, goTo]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!draggable) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(index + 1);
      }
    },
    [draggable, index, goTo]
  );

  if (count === 0) return null;

  return (
    <div
      className={`relative ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label ?? t.carousel.label}
    >
      <div
        ref={viewportRef}
        tabIndex={draggable ? 0 : -1}
        onKeyDown={handleKeyDown}
        className={`relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 ${viewportClassName}`}
      >
        <motion.div
          className={`flex select-none touch-pan-y ${
            draggable ? "cursor-grab active:cursor-grabbing" : ""
          }`}
          style={{ x }}
          drag={draggable ? "x" : false}
          dragDirectionLock
          dragMomentum={false}
          dragElastic={0.18}
          dragConstraints={{ left: -(count - 1) * width, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {images.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              role="group"
              aria-roledescription="slide"
              aria-label={t.carousel.slide
                .replace("{n}", String(i + 1))
                .replace("{total}", String(count))}
              aria-hidden={i !== index}
              className={`relative w-full flex-shrink-0 ${
                fit === "video" ? "aspect-video" : ""
              }`}
            >
              {fit === "video" ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={sizes ?? "100vw"}
                  className="object-cover"
                  draggable={false}
                  priority={priorityFirst && i === 0}
                  loading={priorityFirst && i === 0 ? undefined : "eager"}
                />
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width ?? 1200}
                  height={img.height ?? 800}
                  sizes={sizes}
                  className="w-full h-auto object-cover"
                  draggable={false}
                  priority={priorityFirst && i === 0}
                  loading={priorityFirst && i === 0 ? undefined : "eager"}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {showDots && draggable && (
        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={t.carousel.showImage.replace("{n}", String(i + 1))}
              aria-current={index === i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === i
                  ? "bg-[#D4AF37] scale-110"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
