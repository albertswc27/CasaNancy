"use client"

import { useOpenStatus } from "@/hooks/use-open-status"
import { cn } from "@/lib/utils"

type OpenStatusPillProps = {
  className?: string
  /** Versión compacta para la cabecera. */
  compact?: boolean
  tone?: "light" | "dark"
}

export function OpenStatusPill({ className, compact = false, tone = "light" }: OpenStatusPillProps) {
  const status = useOpenStatus()
  const dark = tone === "dark"

  const base = cn(
    "inline-flex items-center gap-2 whitespace-nowrap rounded-full border font-medium transition-colors",
    compact ? "h-8 px-3 text-xs" : "px-4 py-2 text-sm",
    dark ? "border-white/15 bg-white/10 text-white" : "border-foreground/10 bg-background/80 text-foreground",
    className,
  )

  if (!status) {
    return (
      <span className={base} aria-live="polite">
        <span className="size-2 rounded-full bg-foreground/20" />
        <span className={dark ? "text-white/70" : "text-muted-foreground"}>Consultando horario…</span>
      </span>
    )
  }

  return (
    <span className={base} aria-live="polite" title={compact && status.detail ? status.detail : undefined}>
      <span className="relative flex size-2.5 items-center justify-center">
        {status.isOpen && (
          <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-accent/70" />
        )}
        <span
          className={cn(
            "relative inline-flex size-2.5 rounded-full",
            status.isOpen ? "bg-accent" : "bg-destructive/80",
          )}
        />
      </span>
      <span className={status.isOpen ? (dark ? "text-white" : "text-accent") : dark ? "text-white" : "text-foreground"}>
        {status.label}
      </span>
      {status.detail && !compact && (
        <>
          <span className={dark ? "text-white/40" : "text-foreground/30"} aria-hidden="true">
            ·
          </span>
          <span className={dark ? "text-white/75" : "text-muted-foreground"}>{status.detail}</span>
        </>
      )}
    </span>
  )
}
