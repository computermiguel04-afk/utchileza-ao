import { MessageCircle } from "lucide-react";
import { company } from "@/lib/company";

export const WhatsAppFab = () => (
  <a
    href={`https://wa.me/${company.whatsapp}`}
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Falar via WhatsApp"
    className="fixed bottom-6 right-6 z-50 h-14 w-14 inline-flex items-center justify-center rounded-full bg-gold text-ink shadow-gold hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-6 h-6" strokeWidth={1.75} />
  </a>
);
