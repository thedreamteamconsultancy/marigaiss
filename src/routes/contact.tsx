import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Send, User2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/ui";
import { buildQuoteMessage, openWhatsApp } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marigaiss India Pvt. Ltd." },
      {
        name: "description",
        content:
          "Get in touch with Marigaiss India in Kakinada — marine equipment, rental and machined components enquiries.",
      },
      { property: "og:title", content: "Contact Marigaiss India" },
      { property: "og:description", content: "We typically respond within 1 business day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const SERVICES = ["Marine Equipment", "Rental Assets", "Industrial Cranes", "Material Handling", "Other"];

const Schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1500),
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = Schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setLoading(true);
    // Hand off the enquiry to our WhatsApp Business line.
    const message = buildQuoteMessage(parsed.data);
    openWhatsApp(message);
    setLoading(false);
    toast.success("Opening WhatsApp to send your enquiry…");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Tell us about the equipment, rental or component you need — we typically respond within one business day."
      />

      <section className="py-12 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* FORM */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-[color:var(--color-steel-200)] bg-white p-5 shadow-[var(--shadow-card)] md:p-10"
            >
              <h2 className="font-display text-xl font-bold text-[color:var(--color-navy-900)] md:text-2xl">
                Send us a message
              </h2>
              <p className="mt-1.5 text-xs text-slate-500 md:mt-2 md:text-sm">
                Required fields marked with *
              </p>

              <div className="mt-5 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-5">
                <Field label="Name *" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    autoComplete="name"
                    className={inputCls(!!errors.name)}
                  />
                </Field>
                <Field label="Email *" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    autoComplete="email"
                    className={inputCls(!!errors.email)}
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    autoComplete="tel"
                    className={inputCls(!!errors.phone)}
                  />
                </Field>
                <Field label="Service of interest *" error={errors.service}>
                  <select
                    value={form.service}
                    onChange={update("service")}
                    className={inputCls(!!errors.service)}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-4 md:mt-5">
                <Field label="Message *" error={errors.message}>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className={inputCls(!!errors.message)}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 md:mt-7 md:w-auto"
              >
                {loading ? "Opening WhatsApp..." : "Send via WhatsApp"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          {/* INFO */}
          <Reveal delay={120}>
            <div className="space-y-6">
              <div className="rounded-2xl bg-hero p-8 text-white">
                <h3 className="font-display text-xl font-semibold">Contact details</h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-cyan-400)]" />
                    <span className="leading-relaxed text-[color:var(--color-steel-200)]">
                      D.No: 13-3-1/1, 3rd Floor,<br />
                      Citizen Co-Operative Society Ltd. Bank,<br />
                      Cinema Road, Kakinada – 533001,<br />
                      Andhra Pradesh, India
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-cyan-400)]" />
                    <span>
                      <a href="mailto:marigaissindia@gmail.com" className="block hover:text-[color:var(--color-cyan-400)]">
                        marigaissindia@gmail.com
                      </a>
                      <a href="mailto:lenin.lankey@gmail.com" className="block text-[color:var(--color-steel-200)] hover:text-[color:var(--color-cyan-400)]">
                        lenin.lankey@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-cyan-400)]" />
                    <span className="text-[color:var(--color-steel-200)]">
                      Mon – Sat · 9:30 AM – 6:30 PM IST
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <User2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-cyan-400)]" />
                    <span className="text-[color:var(--color-steel-200)]">
                      @Marigaissindiapvtltd
                    </span>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)]">
                <iframe
                  title="Marigaiss India location — Kakinada"
                  src="https://www.google.com/maps?q=Cinema+Road,+Kakinada,+Andhra+Pradesh+533001&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>

              <p className="text-center text-sm text-slate-500">
                We typically respond within 1 business day.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[color:var(--color-navy-900)]">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-[color:var(--color-navy-900)] outline-none transition focus:border-[color:var(--color-ocean-500)] focus:ring-2 focus:ring-[color:var(--color-ocean-500)]/15 ${
    hasError ? "border-red-400" : "border-[color:var(--color-steel-200)]"
  }`;
}
