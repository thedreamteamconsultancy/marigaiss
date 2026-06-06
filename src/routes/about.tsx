import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, Handshake, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, PageHero, SectionHeading } from "@/components/site/ui";
import galleryTugboat from "@/assets/gallery-tugboat.jpg";
import galleryCrane from "@/assets/gallery-crane.jpg";
import galleryPropeller from "@/assets/gallery-propeller.jpg";
import galleryFerry from "@/assets/gallery-ferry.jpg";
import capabilityEngineering from "@/assets/capability-engineering.jpg";
import capabilityShipbuilding from "@/assets/capability-shipbuilding.jpg";
import directorLenin from "@/assets/director-lenin.jpg";
import directorSurya from "@/assets/director-surya.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Marigaiss India Pvt. Ltd." },
      {
        name: "description",
        content:
          "Founded in 2019 in Kakinada, Marigaiss India is a founder-led marine engineering company delivering equipment, rental assets and machined components.",
      },
      { property: "og:title", content: "About Marigaiss India" },
      {
        property: "og:description",
        content: "Our story, founder, corporate facts and values.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const FACTS: [string, string][] = [
  ["CIN", "U74999AP2019PTC112057"],
  ["Registration No.", "112057"],
  ["Date of Incorporation", "31 May 2019"],
  ["Authorized Capital", "₹1,00,00,000"],
  ["Paid-up Capital", "₹1,00,00,000"],
  ["Company Type", "Active · Non-Govt. Private"],
  ["Directors", "Lenin Lankey · Surya Kala Lanke"],
  ["Headquarters", "Kakinada, Andhra Pradesh"],
];

const TIMELINE = [
  { year: "2019", title: "Incorporation", body: "Marigaiss India Private Limited registered in Kakinada with a focused marine-engineering mandate.", image: capabilityShipbuilding },
  { year: "2020", title: "Marine equipment supply", body: "Began supplying boat propellers, ferries and related marine equipment to regional operators.", image: galleryPropeller },
  { year: "2022", title: "Rental services expansion", body: "Added tug & barge services and dumb-barge setups to the rental portfolio.", image: galleryTugboat },
  { year: "2024", title: "Machined components & handling", body: "Extended to industrial cranes, straddle carriers and precision machined components.", image: galleryCrane },
];

const VALUES = [
  { icon: ShieldCheck, title: "Reliability", body: "Equipment that shows up ready and stays running through the job.", image: galleryTugboat },
  { icon: Compass, title: "Engineering Precision", body: "Specifications, drawings and components held to a marine-engineering bar.", image: capabilityEngineering },
  { icon: Handshake, title: "Customer Partnership", body: "Direct contact, transparent updates and accountability end to end.", image: galleryFerry },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Marigaiss India"
        subtitle="A founder-led marine engineering company, built in Kakinada, serving maritime and industrial work across India."
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=80"
      />

      {/* STORY */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-ocean-500)]">
              Our story
            </p>
            <h2 className="text-balance text-3xl font-bold text-[color:var(--color-navy-900)] md:text-4xl">
              Built on the deck, run from the drafting table.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                Marigaiss India was founded in 2019 by an experienced marine engineer with a
                conviction that maritime work in India deserves better-supplied equipment,
                more reliable rental fleets and the engineering rigor of a precision shop.
              </p>
              <p>
                From our office on Cinema Road in Kakinada, we supply marine equipment, rent
                heavy machinery and deliver machined components — combining hands-on
                shipbuilding experience with disciplined project execution.
              </p>
            </div>
          </Reveal>

          {/* Founder card */}
          <Reveal delay={150}>
            <div className="rounded-2xl border border-[color:var(--color-steel-200)] bg-white p-7 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-hero font-display text-2xl font-bold text-white">
                  LL
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ocean-500)]">
                    Founder & Director
                  </p>
                  <p className="font-display text-lg font-semibold text-[color:var(--color-navy-900)]">
                    Lenin Lankey
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Marine engineer with strong experience across shipbuilding and marine operations.
                Educated in Naval Architecture & Marine Engineering at the Institute of Marine
                Engineers, India.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["AutoCAD", "Marine Engineering", "Shipbuilding", "Requirements Analysis", "Leadership"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-[color:var(--color-mist-50)] px-3 py-1 text-xs font-medium text-[color:var(--color-navy-900)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FACT PANEL */}
      <section className="bg-[color:var(--color-mist-50)] py-20 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Corporate facts" title="At a glance." />
          <Reveal>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white">
              <dl className="grid divide-y divide-[color:var(--color-steel-200)] md:grid-cols-2 md:divide-y-0">
                {FACTS.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`flex items-center justify-between gap-6 px-6 py-5 md:px-8 ${
                      i % 2 === 1 ? "md:border-l md:border-[color:var(--color-steel-200)]" : ""
                    } ${i >= 2 && "md:border-t md:border-[color:var(--color-steel-200)]"}`}
                  >
                    <dt className="text-sm font-medium text-slate-500">{k}</dt>
                    <dd className="text-right font-mono text-sm font-semibold text-[color:var(--color-navy-900)] md:text-base">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our values"
            title="What clients consistently get from us."
          />
          <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white transition hover:-translate-y-1 hover:border-[color:var(--color-ocean-500)] hover:shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/60 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-[color:var(--color-ocean-500)] shadow-[var(--shadow-card)]">
                      <v.icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-xl font-semibold text-[color:var(--color-navy-900)]">
                      {v.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[color:var(--color-mist-50)] py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Milestones" title="The Marigaiss timeline." />
          <DynamicTimeline />
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="The directors behind Marigaiss." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { name: "Lenin Lankey", role: "Director · Founder", image: directorLenin, bio: "Qualified marine engineer leading Marigaiss India from Kakinada — founder, AutoCAD-fluent and hands-on across every project." },
              { name: "Surya Kala Lanke", role: "Director", image: directorSurya, bio: "Director on the Marigaiss India board, supporting governance, operations and partnerships across the company." },
            ].map((d, i) => (
              <Reveal key={d.name} delay={i * 120}>
                <div className="group flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white p-5 shadow-[var(--shadow-card)] sm:flex-row sm:p-6">
                  <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl sm:w-44">
                    <img
                      src={d.image}
                      alt={`Portrait of ${d.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ocean-500)]">
                      {d.role}
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold text-[color:var(--color-navy-900)]">
                      {d.name}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {d.bio}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-ocean-500)]">
                      <Award className="h-4 w-4" />
                      Marigaiss India Board
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Want to work with a focused marine-engineering partner?" />
    </>
  );
}

function DynamicTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top hits viewport center, 1 when the bottom hits viewport center.
      const total = rect.height;
      const passed = Math.min(total, Math.max(0, vh * 0.6 - rect.top));
      setProgress(total === 0 ? 0 : Math.min(1, passed / total));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mt-14">
      {/* Track */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[color:var(--color-steel-200)] md:left-1/2" />
      {/* Progress fill */}
      <div
        className="absolute left-4 top-0 w-px origin-top bg-gradient-to-b from-[color:var(--color-cyan-400)] via-[color:var(--color-ocean-500)] to-[color:var(--color-cyan-400)] md:left-1/2"
        style={{ height: `${progress * 100}%`, transition: "height 100ms linear" }}
      />
      <div className="space-y-12 md:space-y-20">
        {TIMELINE.map((t, i) => {
          const reverse = i % 2 === 1;
          const threshold = (i + 0.5) / TIMELINE.length;
          const reached = progress >= threshold;
          return (
            <Reveal key={t.year} delay={i * 80}>
              <div className="relative md:grid md:grid-cols-2 md:items-center md:gap-12">
                <div className={`pl-12 md:pl-0 ${reverse ? "md:order-2 md:pl-12" : "md:pr-12"}`}>
                  <div className="group overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white shadow-[var(--shadow-card)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={t.image}
                        alt={t.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-navy-900)]/40 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-[color:var(--color-navy-900)]/85 px-3 py-1 font-mono text-xs font-semibold tracking-widest text-[color:var(--color-cyan-400)]">
                        {t.year}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`mt-5 pl-12 md:mt-0 md:pl-0 ${reverse ? "md:order-1 md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-ocean-500)]">
                    {t.year}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-[color:var(--color-navy-900)]">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{t.body}</p>
                </div>
                <span
                  className={`absolute left-2 top-6 h-5 w-5 rounded-full border-4 border-white transition-colors duration-300 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ${
                    reached
                      ? "bg-[color:var(--color-cyan-400)] shadow-[0_0_0_6px_color-mix(in_oklab,var(--color-cyan-400)_25%,transparent)]"
                      : "bg-[color:var(--color-steel-200)]"
                  }`}
                />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
