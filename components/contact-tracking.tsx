"use client"

import { useEffect } from "react"
import { installContactTracking } from "@/lib/contact-tracking"

/** Cuenta los clics en WhatsApp, teléfono, correo y «cómo llegar» (ver lib/contact-tracking.ts). */
export function ContactTracking() {
  useEffect(installContactTracking, [])
  return null
}
