import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CapabilityItem = { name: string; blurb: string; image: string };

export function CapabilityCarousel({ items }: { items: CapabilityItem[] }) {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const n = items.length;

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      if (!pausedRef.current) setActive((a) => (a + 1) % n);
    }, 3800);
    return () => window.clearInterval(id);
  }, [n]);

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + n) % n);

  return (
    <div
      className="relative mt-12 select-none"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onTouchStart={() => {
        pausedRef.current = true;
      }}
      onTouchEnd={() => {
        window.setTimeout(() => {
          pausedRef.current = false;
        }, 1200);
      }}
    >
      <div
        className="relative mx-auto h-[24rem] sm:h-[28rem] md:h-[34rem] lg:h-[38rem]"
        style={{ perspective: "1600px" }}
      >
        {items.map((c, i) => {
          let offset = i - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const abs = Math.abs(offset);
          const visible = abs <= 2;
          const translateX = offset * 42; // % of card width
          const rotateY = offset * -22;
          const translateZ = -abs * 160;
          const scale = abs === 0 ? 1 : Math.max(0.7, 0.88 - abs * 0.08);
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.7 : abs === 2 ? 0.3 : 0;
          const z = 100 - abs;

          return (
            <button
              key={c.name}
              type="button"
              aria-label={c.name}
              aria-current={active === i}
              onClick={() => setActive(i)}
              tabIndex={visible ? 0 : -1}
              className={`absolute left-1/2 top-1/2 w-[78vw] max-w-[22rem] md:max-w-[30rem] lg:max-w-[34rem] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] text-left shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur transition-[transform,opacity] duration-700 ease-out ${
                visible ? "" : "pointer-events-none"
              } ${active === i ? "ring-1 ring-[color:var(--color-cyan-400)]/40" : ""}`}
              style={{
                transformStyle: "preserve-3d",
                transform: `translate(-50%, -50%) translate3d(${translateX}%, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex: z,
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)] via-[color:var(--color-navy-900)]/40 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cyan-400)]/40 bg-[color:var(--color-navy-900)]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-cyan-400)] backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-steel-200)]">
                  {c.blurb}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Previous capability"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 z-[200] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[color:var(--color-navy-900)]/80 text-white shadow-lg backdrop-blur transition hover:scale-110 hover:border-[color:var(--color-cyan-400)] hover:text-[color:var(--color-cyan-400)] sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next capability"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 z-[200] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[color:var(--color-navy-900)]/80 text-white shadow-lg backdrop-blur transition hover:scale-110 hover:border-[color:var(--color-cyan-400)] hover:text-[color:var(--color-cyan-400)] sm:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              active === i
                ? "w-8 bg-[color:var(--color-cyan-400)]"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}