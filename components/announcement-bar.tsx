"use client"

import { useEffect, useState } from "react"
import { PartyPopper, X, ArrowRight } from "lucide-react"
import { business } from "@/lib/business"

const STORAGE_KEY = "casa-nancy-503-dismissed"

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "1") setVisible(false)
    } catch {
      /* almacenamiento no disponible: se muestra siempre */
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1")
    } catch {
      /* ignorar */
    }
  }

  if (!visible) return null

  return (
    <div className="relative z-[60] bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 pattern-dots text-white/10" aria-hidden="true" />
      <div className="container relative mx-auto flex items-center justify-center gap-3 px-4 py-2.5 pr-12 text-center text-xs sm:text-sm">
        <PartyPopper className="hidden size-4 shrink-0 text-gold sm:block" aria-hidden="true" />
        <p className="text-pretty">
          <span className="font-semibold text-gold">¡{business.rating.count} reseñas en Google!</span>{" "}
          <span className="text-white/85">
            El mismo número que el prefijo de El Salvador (+503). Gracias por tanto cariño.
          </span>{" "}
          <a
            href="#hito-503"
            className="inline-flex items-center gap-1 font-semibold text-white underline-offset-4 hover:underline"
          >
            Ver el hito
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
          aria-label="Cerrar aviso"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  )
}
