import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Anchor,
  Ship,
  Construction,
  Wrench,
  ShieldCheck,
  Truck,
  Waves,
  ArrowRight,
  Container,
  CheckCircle2,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, SectionHeading, StatCountUp } from "@/components/site/ui";
import galleryTugboat from "@/assets/gallery-tugboat.jpg";
import galleryCrane from "@/assets/gallery-crane.jpg";
import galleryFerry from "@/assets/gallery-ferry.jpg";
import galleryPropeller from "@/assets/gallery-propeller.jpg";
import capabilityEngineering from "@/assets/capability-engineering.jpg";
import capabilityShipbuilding from "@/assets/capability-shipbuilding.jpg";
import { AutoScroller } from "@/components/site/AutoScroller";
import { CapabilityCarousel } from "@/components/site/CapabilityCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marigaiss India — Engineering the Maritime Edge" },
      {
        name: "description",
        content:
          "Marine equipment supply, tug & barge rental, industrial cranes and machined components — engineered from Kakinada since 2019.",
      },
      { property: "og:title", content: "Marigaiss India — Engineering the Maritime Edge" },
      {
        property: "og:description",
        content: "Marine Equipment. Heavy Lifting. Trusted Delivery.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    icon: Ship,
    title: "Marine Equipment",
    desc: "Boat propellers and passenger ferries engineered for reliability.",
    image: galleryPropeller,
  },
  {
    icon: Anchor,
    title: "Rental Assets",
    desc: "Tug & barge services and dumb-barge setups, on call when you need them.",
    image: galleryTugboat,
  },
  {
    icon: Construction,
    title: "Industrial Cranes",
    desc: "Standard industrial cranes and derrick cranes for heavy lifting.",
    image: galleryCrane,
  },
  {
    icon: Container,
    title: "Material Handling",
    desc: "Straddle carriers (platters) and precision machined components.",
    image: galleryFerry,
  },
];

const WHY = [
  { icon: Anchor, title: "Marine engineering expertise", body: "Specification, sourcing and supply led by a qualified marine engineer.", image: capabilityEngineering },
  { icon: Truck, title: "Rental fleet & heavy lifting", body: "Tugs, barges and cranes ready to deploy for the work ahead.", image: galleryTugboat },
  { icon: Wrench, title: "Precision machined components", body: "Built-to-spec parts where tolerance and reliability matter.", image: galleryPropeller },
  { icon: ShieldCheck, title: "Founder-led delivery", body: "Direct accountability from first call to final handover.", image: capabilityShipbuilding },
];

const FAQS = [
  {
    q: "What services does Marigaiss India offer?",
    a: "We supply marine equipment (propellers, ferries, fittings), rent tugs, barges and dumb-barge setups, deliver industrial and derrick cranes, and machine precision components for maritime and industrial clients.",
  },
  {
    q: "Where are you located and do you serve outside Kakinada?",
    a: "Our office is on Cinema Road, Kakinada, Andhra Pradesh. We deliver and mobilise rental assets across India, with our core operating radius along the east coast.",
  },
  {
    q: "How quickly can you mobilise rental equipment?",
    a: "Most rental jobs are mobilised within a few working days. Share your site, scope and timeline and we'll come back with a confirmed window within one business day.",
  },
  {
    q: "Can you supply built-to-spec machined components?",
    a: "Yes — share your drawings or requirements and we will specify, machine and deliver components against your tolerance and material requirements.",
  },
  {
    q: "How do I request a quote?",
    a: "Use the Get a Quote button to chat with us on WhatsApp, or fill the Contact form. We typically respond within one business day.",
  },
];

const CAPABILITIES: { name: string; blurb: string; image: string }[] = [
  { name: "AutoCAD", blurb: "Drafted to spec — drawings ready for the floor.", image: capabilityEngineering },
  { name: "Naval Architecture", blurb: "Hull, layout and load-line thinking from day one.", image: galleryPropeller },
  { name: "Shipbuilding", blurb: "Yard-tested experience from keel to commissioning.", image: capabilityShipbuilding },
  { name: "Requirements Analysis", blurb: "Translating operating realities into clear specs.", image: capabilityEngineering },
  { name: "Marine Engineering", blurb: "Founder-led marine engineering judgement.", image: galleryTugboat },
  { name: "Leadership", blurb: "Direct accountability across every project.", image: galleryCrane },
];

const GALLERY = [
  { src: galleryCrane, alt: "Industrial port crane lifting cargo" },
  { src: galleryTugboat, alt: "Harbour tugboat in operation" },
  { src: galleryPropeller, alt: "Precision marine propeller component" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-hero grain">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=80"
            alt="Aerial view of a container port with cranes"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-navy-900)]/85 via-[color:var(--color-navy-800)]/70 to-[color:var(--color-ocean-600)]/60" />
          <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden />
          <div
            className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-aurora)" }}
            aria-hidden
          />
        </div>

        <div className="container-x flex min-h-[100svh] flex-col justify-center pt-28 pb-24">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cyan-400)]/30 bg-[color:var(--color-cyan-400)]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-cyan-400)] backdrop-blur-md shadow-[0_0_24px_-8px_rgba(34,184,207,0.5)] sm:px-4 sm:text-xs sm:tracking-[0.2em]">
              <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--color-cyan-400)]" />
              <Waves className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Marine Engineering</span>
              <span className="h-3 w-px bg-[color:var(--color-cyan-400)]/40" />
              <span>Since 2019</span>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="max-w-5xl text-balance font-display font-bold text-white"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              <span className="bg-gradient-to-r from-[color:var(--color-cyan-400)] to-white bg-clip-text text-transparent">
                Marigaiss India
              </span>
              <br />
              Engineering the{" "}
              <span className="bg-gradient-to-r from-[color:var(--color-cyan-400)] to-white bg-clip-text text-transparent">
                Maritime Edge
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-steel-200)] md:text-xl">
              Marigaiss India supplies, rents and engineers maritime and heavy-machinery
              solutions — propellers, ferries, tugs, barges, cranes and machined components,
              trusted by industry from Kakinada outward.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="group sheen inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(34,184,207,0.6)]"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-cyan-400)]/60"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Wave divider */}
        <svg
          className="absolute inset-x-0 bottom-0 h-16 w-full text-white md:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 60 Q360 0 720 60 T1440 60 V120 H0 Z"
            fill="currentColor"
          />
        </svg>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[color:var(--color-navy-900)] py-12">
        <div className="container-x grid grid-cols-2 gap-6 md:grid-cols-4">
          <StatCountUp value={2019} label="Established" />
          <StatCountUp value={1} suffix=" Cr" label="₹ Authorized Capital" />
          <StatCountUp value={4} suffix="+" label="Service Verticals" />
          <StatCountUp value={100} suffix="%" label="Founder-Led" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-ocean-500)]">
              Who we are
            </p>
            <h2 className="text-balance text-3xl font-bold text-[color:var(--color-navy-900)] md:text-5xl">
              A marine-engineering company built on precision and trust.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Incorporated in 2019 and headquartered in Kakinada, Marigaiss India brings
              hands-on marine engineering, a versatile rental fleet and a precision
              machining mindset to every project we deliver.
            </p>
            <ul className="mt-8 space-y-3 text-slate-700">
              {[
                "Founder-led by a qualified marine engineer",
                "End-to-end supply, rental and support",
                "Engineering precision from spec to delivery",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-ocean-500)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
              <img
                src={galleryTugboat}
                alt="Harbour tugboat at work"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-2xl bg-white p-5 shadow-[var(--shadow-card)] md:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-mist-50)] text-[color:var(--color-ocean-500)]">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-[color:var(--color-navy-900)]">
                    Quality You Can Trust
                  </p>
                  <p className="text-xs text-slate-500">
                    Engineered & inspected to standard
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[color:var(--color-mist-50)] py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Four ways we move maritime work forward."
            subtitle="From propellers to platters — a focused portfolio built around what ports, yards and industrial sites actually need."
          />
          {/* Mobile: horizontal auto-scroll (right → left) */}
          <div className="mt-12 sm:hidden">
            <AutoScroller
              direction="left"
              speed={45}
              className="card-marquee -mx-5 px-5"
              trackClassName="gap-4"
            >
              {[...SERVICES, ...SERVICES].map((s, i) => (
                  <Link
                    key={s.title + i}
                    to="/services"
                    className="group flex w-[78vw] max-w-[19rem] shrink-0 flex-col overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/70 to-transparent" />
                      <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[color:var(--color-ocean-500)] shadow-[var(--shadow-card)]">
                        <s.icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-base font-semibold text-[color:var(--color-navy-900)]">{s.title}</h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">{s.desc}</p>
                    </div>
                  </Link>
              ))}
            </AutoScroller>
          </div>
          {/* Desktop / tablet: grid */}
          <div className="mt-14 hidden auto-rows-fr gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="h-full">
                <Link
                  to="/services"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white transition hover:-translate-y-1 hover:border-[color:var(--color-cyan-400)] hover:shadow-[var(--shadow-card)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/70 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-[color:var(--color-ocean-500)] shadow-[var(--shadow-card)]">
                      <s.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-[color:var(--color-navy-900)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-ocean-500)]">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MARIGAISS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Marigaiss"
            title="A small team. A serious capability set."
          />
          {/* Mobile: horizontal auto-scroll (left → right) */}
          <div className="mt-12 sm:hidden">
            <AutoScroller
              direction="right"
              speed={45}
              className="card-marquee -mx-5 px-5"
              trackClassName="gap-4"
            >
              {[...WHY, ...WHY].map((f, i) => (
                  <div
                    key={f.title + i}
                    className="relative flex w-[78vw] max-w-[19rem] shrink-0 flex-col overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={f.image} alt={f.title} loading="lazy" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/75 via-[color:var(--color-navy-900)]/20 to-transparent" />
                      <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[color:var(--color-ocean-500)] shadow-[var(--shadow-card)]">
                        <f.icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-base font-semibold text-[color:var(--color-navy-900)]">{f.title}</h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">{f.body}</p>
                    </div>
                  </div>
              ))}
            </AutoScroller>
          </div>
          {/* Desktop / tablet: image cards grid */}
          <div className="mt-14 hidden auto-rows-fr gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((f, i) => (
              <Reveal key={f.title} delay={i * 80} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white transition hover:-translate-y-1 hover:border-[color:var(--color-ocean-500)] hover:shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/65 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-[color:var(--color-ocean-500)] shadow-[var(--shadow-card)]">
                      <f.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-[color:var(--color-navy-900)]">
                      {f.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES BAND */}
      <section className="relative overflow-hidden bg-[color:var(--color-navy-900)] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--color-cyan-400) 0, transparent 35%), radial-gradient(circle at 80% 70%, var(--color-ocean-500) 0, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Capabilities"
            title="The disciplines we bring to every job."
            subtitle="Six interlocking strengths that take a marine project from first sketch to commissioned delivery."
            light
          />
          <CapabilityCarousel items={CAPABILITIES} />
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Capabilities in action"
            title="A glimpse of the work we serve."
            subtitle="From port operations to industrial sites — the environments where our equipment and engineering earn their keep."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={i * 100}>
                <Link
                  to="/clients"
                  className="group block overflow-hidden rounded-2xl bg-[color:var(--color-navy-900)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/80 via-transparent to-transparent" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[color:var(--color-mist-50)] py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-ocean-500)]">
              FAQ
            </p>
            <h2 className="text-balance font-display text-3xl font-bold text-[color:var(--color-navy-900)] md:text-5xl">
              Answers, before you ask.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              The questions clients raise most often — covered up front. If you need
              specifics for your project, our team is one message away.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <FAQList />
          </Reveal>
        </div>
      </section>

      <CTABand
        secondary={{ label: "See Our Services", to: "/services" }}
      />
    </>
  );
}

function FAQList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className={`overflow-hidden rounded-2xl border bg-white transition ${
              isOpen
                ? "border-[color:var(--color-ocean-500)] shadow-[var(--shadow-card)]"
                : "border-[color:var(--color-steel-200)] hover:border-[color:var(--color-ocean-500)]/40"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
            >
              <span className="flex items-center gap-4">
                <span className="hidden font-mono text-xs tabular-nums text-[color:var(--color-ocean-500)] sm:inline">
                  0{i + 1}
                </span>
                <span className="font-display text-base font-semibold text-[color:var(--color-navy-900)] md:text-lg">
                  {f.q}
                </span>
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition ${
                  isOpen ? "bg-[color:var(--color-ocean-500)] rotate-0" : "bg-[color:var(--color-navy-900)]"
                }`}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-sm leading-relaxed text-slate-600 md:px-7 md:text-base">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
