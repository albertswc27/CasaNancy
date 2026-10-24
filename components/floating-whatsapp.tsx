import { MessageCircle } from "lucide-react"
import { whatsapp } from "@/lib/business"

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsapp.reserve}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar o pedir por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp pl-3.5 pr-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_var(--whatsapp)] transition-all hover:-translate-y-0.5 hover:brightness-105 md:bottom-6 md:right-6"
    >
      <span className="relative flex size-6 items-center justify-center">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-white/50" aria-hidden="true" />
        <MessageCircle className="relative size-5" aria-hidden="true" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
