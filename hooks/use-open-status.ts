"use client"

import { useEffect, useState } from "react"
import { getOpenStatus, type OpenStatus } from "@/lib/open-status"

/**
 * Estado abierto/cerrado calculado en el navegador (hora de Madrid).
 * Devuelve `null` hasta que el componente se monta para evitar
 * diferencias entre el HTML estático y el cliente.
 */
export function useOpenStatus(): OpenStatus | null {
  const [status, setStatus] = useState<OpenStatus | null>(null)

  useEffect(() => {
    const tick = () => setStatus(getOpenStatus())
    tick()
    const timer = setInterval(tick, 60_000)
    return () => clearInterval(timer)
  }, [])

  return status
}
