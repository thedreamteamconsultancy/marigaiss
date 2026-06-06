import { useEffect, useRef, type ReactNode } from "react";

type Direction = "left" | "right";

export function AutoScroller({
  children,
  direction = "left",
  speed = 40,
  className = "",
  trackClassName = "",
}: {
  children: ReactNode;
  direction?: Direction;
  speed?: number;
  className?: string;
  trackClassName?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Start near the middle so we can loop seamlessly in either direction.
    const initStart = () => {
      el.scrollLeft = el.scrollWidth / 4;
    };
    initStart();

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current && el.scrollWidth > el.clientWidth) {
        const delta = speed * dt * (direction === "left" ? 1 : -1);
        el.scrollLeft += delta;
      }
      // Seamless wrap (track contains items duplicated once by caller).
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft <= 0) el.scrollLeft += half;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause = () => {
      pausedRef.current = true;
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
    };
    const scheduleResume = () => {
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = window.setTimeout(() => {
        pausedRef.current = false;
        last = performance.now();
      }, 1500);
    };
    const pauseBriefly = () => {
      pause();
      scheduleResume();
    };

    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", scheduleResume);
    el.addEventListener("pointercancel", scheduleResume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", scheduleResume);
    el.addEventListener("touchcancel", scheduleResume);
    el.addEventListener("wheel", pauseBriefly, { passive: true });
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", scheduleResume);

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", scheduleResume);
      el.removeEventListener("pointercancel", scheduleResume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", scheduleResume);
      el.removeEventListener("touchcancel", scheduleResume);
      el.removeEventListener("wheel", pauseBriefly);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", scheduleResume);
    };
  }, [direction, speed]);

  return (
    <div
      ref={ref}
      className={`no-scrollbar overflow-x-auto overscroll-x-contain ${className}`}
      style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
    >
      <div className={`flex w-max ${trackClassName}`}>{children}</div>
    </div>
  );
}