export const WHATSAPP_NUMBER = "917999999877";

export function buildQuoteMessage(input: {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}) {
  const greeting = input.name
    ? `Hello Marigaiss India team,\n\nMy name is ${input.name} and I'd like to enquire${
        input.service ? ` about your *${input.service}* offering` : ""
      }.`
    : `Hello Marigaiss India team,\n\nI'd like to make an enquiry${
        input.service ? ` about your *${input.service}* offering` : ""
      }.`;

  const lines = [
    "*New Enquiry — Marigaiss India*",
    "━━━━━━━━━━━━━━━━━━━━",
    "",
    greeting,
    "",
    input.message ? `*Details*\n${input.message}` : null,
    "",
    "*Contact details*",
    input.name ? `• Name: ${input.name}` : null,
    input.email ? `• Email: ${input.email}` : null,
    input.phone ? `• Phone: ${input.phone}` : null,
    input.service ? `• Service: ${input.service}` : null,
    "",
    "Looking forward to hearing back from you.",
    "",
    "— Sent via marigaissindia.com",
  ].filter(Boolean);
  return lines.join("\n");
}

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export function whatsappQuoteUrl(prefilledMessage?: string) {
  const msg =
    prefilledMessage ??
    buildQuoteMessage({
      message: "Hi Marigaiss team, I'd like to request a quote.",
    });
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}