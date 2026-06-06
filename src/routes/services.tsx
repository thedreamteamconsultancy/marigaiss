import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Anchor,
  ArrowRight,
  Construction,
  Container,
  HeartHandshake,
  PackageCheck,
  Ship,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, PageHero, SectionHeading } from "@/components/site/ui";
import { AutoScroller } from "@/components/site/AutoScroller";
import galleryTugboat from "@/assets/gallery-tugboat.jpg";
import galleryCrane from "@/assets/gallery-crane.jpg";
import galleryPropeller from "@/assets/gallery-propeller.jpg";
import processConsult from "@/assets/process-consult.jpg";
import processSpecify from "@/assets/process-specify.jpg";
import processDeliver from "@/assets/process-deliver.jpg";
import processSupport from "@/assets/process-support.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Marine Equipment, Rental, Cranes & Handling | Marigaiss" },
      {
        name: "description",
        content:
          "Marine equipment supply, tug & barge rental, industrial & derrick cranes, straddle carriers and machined components.",
      },
      { property: "og:title", content: "Marigaiss Services" },
      { property: "og:description", content: "Marine equipment, rental, cranes, handling." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  body: string;
  items: string[];
  image: string;
};

const SERVICES: Service[] = [
  {
    id: "marine",
    icon: Ship,
    title: "Marine Equipment",
    body:
      "Specification, sourcing and supply of marine equipment for operators that need reliable, ready-to-run hardware.",
    items: ["Boat propellers", "Passenger ferries", "Marine fittings & accessories"],
    image: galleryPropeller,
  },
  {
    id: "rental",
    icon: Anchor,
    title: "Rental Assets",
    body:
      "A versatile rental fleet for port operations, infrastructure work and marine logistics — on call when you need it.",
    items: ["Tug services", "Barge services", "Dumb-barge setups"],
    image: galleryTugboat,
  },
  {
    id: "cranes",
    icon: Construction,
    title: "Industrial Cranes",
    body:
      "Heavy lifting solutions matched to your site — from standard industrial cranes to specialised derrick configurations.",
    items: ["Standard industrial cranes", "Derrick cranes", "Lifting consultation"],
    image: galleryCrane,
  },
  {
    id: "handling",
    icon: Container,
    title: "Material Handling",
    body:
      "Straddle carriers and built-to-spec machined components for yards, ports and industrial operations.",
    items: ["Straddle carriers (platters)", "Precision machined components", "Custom fabrication"],
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=80",
  },
];

const PROCESS = [
  { icon: HeartHandshake, title: "Consult", body: "Understand the job and the operating constraints.", image: processConsult },
  { icon: Wrench, title: "Specify", body: "Engineer the spec — AutoCAD drawings where they help.", image: processSpecify },
  { icon: PackageCheck, title: "Supply / Rent", body: "Deliver equipment or mobilise rental assets.", image: processDeliver },
  { icon: HeartHandshake, title: "Support", body: "Stay on call through commissioning and operations.", image: processSupport },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & services"
        title="Our Products & Services"
        subtitle="A focused portfolio — marine equipment, rental assets, cranes and material handling — engineered and delivered end to end."
        image="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=2000&q=80"
      />

      {/* SERVICE SECTIONS */}
      <section className="py-14 md:py-28">
        <div className="container-x space-y-14 md:space-y-32">
          {SERVICES.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.id}
                id={s.id}
                className={`grid items-center gap-6 md:grid-cols-2 md:gap-16 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="relative">
                  <div className="group relative overflow-hidden rounded-3xl border border-[color:var(--color-steel-200)] shadow-[var(--shadow-elegant)]">
                    <div className="relative">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-navy-900)]/60 via-[color:var(--color-navy-900)]/15 to-transparent" />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[color:var(--color-navy-900)]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-cyan-400)] backdrop-blur">
                        0{i + 1} · Service
                      </span>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <div className="rounded-3xl border border-[color:var(--color-steel-200)] bg-white p-6 shadow-[var(--shadow-card)] md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--color-ocean-500)] to-[color:var(--color-cyan-400)] text-white shadow-[var(--shadow-card)]">
                        <s.icon className="h-6 w-6" />
                      </span>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--color-ocean-500)]">
                        Marigaiss · Service
                      </p>
                    </div>
                    <h2 className="mt-4 text-balance font-display text-2xl font-bold text-[color:var(--color-navy-900)] md:mt-5 md:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600 md:mt-4 md:text-lg">{s.body}</p>
                    <ul className="mt-5 space-y-2.5 md:mt-6 md:space-y-3">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-[color:var(--color-navy-900)] md:text-base"
                      >
                        <span className="h-1.5 w-6 rounded-full bg-[color:var(--color-cyan-400)]" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                    </ul>
                    <Link
                      to="/contact"
                      search={{ subject: s.title } as never}
                      className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5 md:mt-8 md:w-auto"
                    >
                      Enquire about {s.title}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[color:var(--color-mist-50)] py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="Four steps from brief to handover."
          />
          {/* Mobile: horizontal auto-scroll right → left */}
          <div className="mt-12 sm:hidden">
            <AutoScroller
              direction="left"
              speed={45}
              className="card-marquee -mx-5 px-5"
              trackClassName="gap-4"
            >
              {[...PROCESS, ...PROCESS].map((p, i) => (
                  <div
                    key={p.title + i}
                    className="flex w-[78vw] max-w-[19rem] shrink-0 flex-col overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white shadow-[var(--shadow-card)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/70 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[color:var(--color-ocean-500)]">
                        STEP 0{(i % PROCESS.length) + 1}
                      </span>
                      <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cta text-white">
                        <p.icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-base font-semibold text-[color:var(--color-navy-900)]">{p.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.body}</p>
                    </div>
                  </div>
              ))}
            </AutoScroller>
          </div>
          <div className="mt-14 hidden auto-rows-fr gap-6 sm:grid md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title + i} delay={i * 80} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/70 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[color:var(--color-ocean-500)]">
                      STEP 0{i + 1}
                    </span>
                    <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cta text-white shadow-[var(--shadow-elegant)]">
                      <p.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-[color:var(--color-navy-900)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Have a project brief in mind? Send it our way." />
    </>
  );
}
