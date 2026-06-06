import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { whatsappQuoteUrl } from "@/lib/whatsapp";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
            light ? "text-[color:var(--color-cyan-400)]" : "text-[color:var(--color-ocean-500)]"
          }`}
        >
          <span
            aria-hidden
            className={`h-px w-8 ${light ? "bg-[color:var(--color-cyan-400)]/60" : "bg-[color:var(--color-ocean-500)]/50"}`}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance text-3xl font-bold md:text-5xl ${
          light ? "text-white" : "text-[color:var(--color-navy-900)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-[color:var(--color-steel-200)]" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function CTABand({
  title = "Need marine equipment or rental assets? Let's talk.",
  subtitle = "Our team responds within one business day.",
  primary = { label: "Contact Us", to: "/contact" },
  secondary,
}: {
  title?: string;
  subtitle?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="relative overflow-hidden bg-hero py-20 md:py-24">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 800 400">
          <path
            d="M0 320 Q200 260 400 320 T800 320 V400 H0 Z"
            fill="rgba(34,184,207,0.25)"
          />
          <path
            d="M0 350 Q200 300 400 350 T800 350 V400 H0 Z"
            fill="rgba(21,101,166,0.3)"
          />
        </svg>
      </div>
      <div className="container-x relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <p className="mt-3 text-[color:var(--color-steel-200)]">{subtitle}</p>
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap gap-3">
          <Link
            to={primary.to}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--color-navy-900)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-cyan-400)] hover:text-[color:var(--color-navy-900)]"
          >
            {primary.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {secondary && (
            <Link
              to={secondary.to}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`group glass inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[var(--shadow-3)] transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:text-[color:var(--color-cyan-400)] ${
          show ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
      <a
        href={whatsappQuoteUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_36px_-10px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110"
      >
        <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366] blur-xl opacity-40" />
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.91 4.64 4.08.65.28 1.15.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.01 5.33C10.13 5.33 5.34 10.12 5.34 16c0 2.06.6 3.97 1.62 5.58L5.33 26.67l5.23-1.62c1.56.95 3.4 1.5 5.45 1.5 5.88 0 10.67-4.79 10.67-10.67S21.89 5.33 16.01 5.33zm0 19.51c-1.85 0-3.57-.55-5.01-1.5l-.36-.21-3.74 1.16 1.18-3.65-.23-.37c-1.04-1.49-1.64-3.28-1.64-5.21 0-5.01 4.07-9.08 9.08-9.08 5.01 0 9.08 4.07 9.08 9.08 0 5.01-4.07 9.08-9.08 9.08z"/>
        </svg>
      </a>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-hero pt-32 pb-20 md:pt-40 md:pb-24">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[color:var(--color-navy-900)]/60" />
        </div>
      )}
      <div className="container-x">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-cyan-400)]">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-balance font-display text-4xl font-bold text-white md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-[color:var(--color-steel-200)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function StatCountUp({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = (el: HTMLDivElement | null) => {
    if (!el || started) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setStarted(true);
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
  };
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-white md:text-5xl">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-steel-200)]">
        {label}
      </div>
    </div>
  );
}
