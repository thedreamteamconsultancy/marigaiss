import { useEffect, useState } from "react";
import logoAsset from "@/assets/mipl-logo.png.asset.json";

/**
 * Premium logo loading splash — shows on first paint, then fades out.
 * Sessionstorage-gated so it only plays once per browsing session.
 */
export function LogoSplash() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("mipl-splash-seen");
    if (seen) {
      setRemoved(true);
      return;
    }
    setMounted(true);
    document.body.style.overflow = "hidden";
    const hideT = window.setTimeout(() => setHidden(true), 1600);
    const removeT = window.setTimeout(() => {
      setRemoved(true);
      document.body.style.overflow = "";
      sessionStorage.setItem("mipl-splash-seen", "1");
    }, 2300);
    return () => {
      window.clearTimeout(hideT);
      window.clearTimeout(removeT);
      document.body.style.overflow = "";
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[color:var(--color-navy-900)] transition-opacity duration-700 ease-[var(--ease-out-expo)] ${
        mounted && !hidden ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Aurora background glow */}
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
      <div className="pointer-events-none absolute inset-0 grain" />

      <div className="relative flex flex-col items-center">
        {/* Rotating ring */}
        <div className="relative h-44 w-44 md:h-52 md:w-52">
          <span className="splash-ring absolute inset-0 rounded-full" />
          <span className="splash-ring-inner absolute inset-3 rounded-full" />

          {/* Logo plate */}
          <div className="absolute inset-6 flex items-center justify-center rounded-full bg-white shadow-[0_30px_80px_-20px_rgba(225,29,42,0.55)]">
            <img
              src={logoAsset.url}
              alt="MIPL"
              className="splash-logo h-24 w-24 object-contain md:h-28 md:w-28"
            />
          </div>
        </div>

        {/* Wordmark + progress bar */}
        <div className="mt-8 flex flex-col items-center">
          <p className="splash-word font-display text-sm font-semibold uppercase tracking-[0.45em] text-white/85">
            Marigaisss India
          </p>
          <div className="mt-4 h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
            <span className="splash-bar block h-full w-full bg-gradient-to-r from-[color:var(--color-cyan-400)] via-white to-[color:var(--color-cyan-400)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
