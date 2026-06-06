import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Anchor,
  Building2,
  Construction,
  Factory,
  Fuel,
  Quote,
  Ship,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, PageHero, SectionHeading } from "@/components/site/ui";
import { AutoScroller } from "@/components/site/AutoScroller";
import galleryTugboat from "@/assets/gallery-tugboat.jpg";
import galleryCrane from "@/assets/gallery-crane.jpg";
import galleryFerry from "@/assets/gallery-ferry.jpg";
import galleryPropeller from "@/assets/gallery-propeller.jpg";
import sectorPort from "@/assets/sector-port.jpg";
import sectorShipping from "@/assets/sector-shipping.jpg";
import sectorConstruction from "@/assets/sector-construction.jpg";
import sectorOffshore from "@/assets/sector-offshore.jpg";
import sectorManufacturing from "@/assets/sector-manufacturing.jpg";
import sectorGovernment from "@/assets/sector-government.jpg";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Industries — Marigaiss India" },
      {
        name: "description",
        content:
          "Industries we serve — ports, shipping, infrastructure, oil & gas — and a gallery of capabilities in action.",
      },
      { property: "og:title", content: "Industries & Clients We Serve" },
      { property: "og:description", content: "Ports, shipping, infrastructure, oil & gas." },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

const INDUSTRIES = [
  { icon: Anchor, title: "Ports & Harbours", body: "Equipment and rental support for port operations.", image: sectorPort },
  { icon: Ship, title: "Shipping & Logistics", body: "Marine equipment and barge services for cargo movement.", image: sectorShipping },
  { icon: Building2, title: "Construction & Infrastructure", body: "Cranes, lifting and material handling for project sites.", image: sectorConstruction },
  { icon: Fuel, title: "Oil & Gas / Offshore", body: "Heavy machinery support for offshore-adjacent operations.", image: sectorOffshore },
  { icon: Factory, title: "Industrial Manufacturing", body: "Machined components and material handling solutions.", image: sectorManufacturing },
  { icon: Construction, title: "Government & Maritime Bodies", body: "Engineering support for public maritime initiatives.", image: sectorGovernment },
];

type Cat = "All" | "Marine" | "Rental" | "Cranes" | "Handling";
const GALLERY: { src: string; caption: string; cat: Exclude<Cat, "All"> }[] = [
  { src: galleryFerry, caption: "Passenger ferry operations", cat: "Marine" },
  { src: galleryTugboat, caption: "Tug & barge support", cat: "Rental" },
  { src: galleryCrane, caption: "Industrial crane installation", cat: "Cranes" },
  { src: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80", caption: "Container & material handling", cat: "Handling" },
  { src: galleryPropeller, caption: "Marine equipment supply", cat: "Marine" },
  { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80", caption: "Derrick crane operations", cat: "Cranes" },
];

const TESTIMONIALS = [
  {
    quote:
      "Marigaiss delivered exactly to spec and stayed on call through commissioning. That kind of accountability is rare.",
    author: "Operations Manager",
    org: "Port Logistics",
  },
  {
    quote:
      "Their rental fleet helped us hit a tight infrastructure window without the headaches we expected.",
    author: "Project Lead",
    org: "Coastal Infrastructure",
  },
  {
    quote:
      "Precision machined parts arrived ready to install. Engineering quality you can feel.",
    author: "Yard Supervisor",
    org: "Industrial Manufacturing",
  },
];

const CATS: Cat[] = ["All", "Marine", "Rental", "Cranes", "Handling"];

function ClientsPage() {
  const [cat, setCat] = useState<Cat>("All");
  const items = useMemo(() => (cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat)), [cat]);

  return (
    <>
      <PageHero
        eyebrow="Industries & clients"
        title="Industries & Clients We Serve"
        subtitle="The operators and project teams we partner with — across maritime, infrastructure and industrial sectors."
        image="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2000&q=80"
      />

      {/* INDUSTRIES */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Sectors" title="Where our equipment earns its keep." />
          <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((i, idx) => (
              <Reveal key={i.title} delay={idx * 60} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white transition hover:-translate-y-1 hover:border-[color:var(--color-ocean-500)] hover:shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={i.image}
                      alt={i.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/75 via-[color:var(--color-navy-900)]/15 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-[color:var(--color-ocean-500)] shadow-[var(--shadow-card)]">
                      <i.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-[color:var(--color-navy-900)]">
                      {i.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{i.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[color:var(--color-mist-50)] py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Capabilities in action"
            title="A look at the kind of work we serve."
          />
          <div className="mt-10 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  cat === c
                    ? "bg-[color:var(--color-navy-900)] text-white"
                    : "border border-[color:var(--color-steel-200)] bg-white text-slate-700 hover:border-[color:var(--color-ocean-500)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((g) => (
              <div key={g.src} className="group overflow-hidden rounded-2xl bg-[color:var(--color-navy-900)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/85 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-cyan-400)]">
                      {g.cat}
                    </span>
                    <p className="mt-1 font-display text-base font-semibold text-white">
                      {g.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="In their words" title="What partners say." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-[color:var(--color-steel-200)] bg-white p-7">
                  <Quote className="h-7 w-7 text-[color:var(--color-cyan-400)]" />
                  <p className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 border-t border-[color:var(--color-steel-200)] pt-4">
                    <p className="font-display text-sm font-semibold text-[color:var(--color-navy-900)]">
                      {t.author}
                    </p>
                    <p className="text-xs text-slate-500">{t.org}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE — horizontal scrolling */}
      <section className="border-y border-[color:var(--color-steel-200)] bg-white py-14">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Trusted across maritime & industrial operations
          </p>
        </div>
        <AutoScroller
          direction="left"
          speed={50}
          className="logo-marquee mt-8"
          trackClassName="gap-6"
        >
          {[
              { name: "Anchor Co.", icon: Anchor },
              { name: "Harbor Ltd.", icon: Building2 },
              { name: "Cargo+", icon: Ship },
              { name: "Marine Works", icon: Construction },
              { name: "PortGroup", icon: Factory },
              { name: "OceanX", icon: Fuel },
              { name: "Anchor Co.", icon: Anchor },
              { name: "Harbor Ltd.", icon: Building2 },
              { name: "Cargo+", icon: Ship },
              { name: "Marine Works", icon: Construction },
              { name: "PortGroup", icon: Factory },
              { name: "OceanX", icon: Fuel },
            ].map((n, idx) => (
              <div
                key={idx}
                className="logo-marquee__item flex shrink-0 items-center gap-3 rounded-xl border border-[color:var(--color-steel-200)] bg-white px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-slate-500"
              >
                <n.icon className="h-5 w-5 text-[color:var(--color-ocean-500)]" />
                {n.name}
              </div>
          ))}
        </AutoScroller>
      </section>

      <CTABand title="Looking for a maritime delivery partner you can call directly?" />
    </>
  );
}
