import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "center" | "left"
  tone?: "light" | "dark"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark"
  return (
    <Reveal
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", dark ? "text-gold" : "text-accent")}>
          <span className={cn("h-px w-6", dark ? "bg-gold/70" : "bg-accent/60")} aria-hidden="true" />
          {eyebrow}
          {align === "center" && (
            <span className={cn("h-px w-6", dark ? "bg-gold/70" : "bg-accent/60")} aria-hidden="true" />
          )}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold leading-[1.08] md:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-relaxed md:text-lg",
            dark ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
