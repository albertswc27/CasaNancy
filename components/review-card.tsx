"use client"

import { useState } from "react"
import { ChevronDown, Quote } from "lucide-react"
import { Stars } from "@/components/stars"
import { cn } from "@/lib/utils"

export type Review = {
  name: string
  text: string
  rating: number
  meta: string
  timeAgo: string
}

const AVATAR_TONES = [
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-destructive/10 text-destructive",
  "bg-gold/30 text-foreground",
]

const LONG_TEXT = 320

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}

export function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > LONG_TEXT

  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white p-6 text-foreground shadow-lift md:p-7">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-full font-display text-base font-semibold",
              AVATAR_TONES[index % AVATAR_TONES.length],
            )}
            aria-hidden="true"
          >
            {initials(review.name)}
          </span>
          <div className="min-w-0">
            <p className="truncate font-semibold leading-tight">{review.name}</p>
            <p className="truncate text-xs text-muted-foreground">{review.meta}</p>
          </div>
        </div>
        <Quote className="size-6 shrink-0 text-primary/20" aria-hidden="true" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Stars rating={review.rating} size="size-4" />
        <span className="text-xs text-muted-foreground">{review.timeAgo}</span>
      </div>

      <p
        className={cn(
          "mt-4 text-pretty text-sm leading-relaxed text-foreground/85 md:text-[0.95rem]",
          isLong && !expanded && "line-clamp-6",
        )}
      >
        {review.text}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          aria-expanded={expanded}
        >
          {expanded ? "Leer menos" : "Leer la reseña completa"}
          <ChevronDown className={cn("size-4 transition-transform", expanded && "rotate-180")} aria-hidden="true" />
        </button>
      )}

      <div className="mt-auto flex items-center gap-2 pt-5 text-xs text-muted-foreground">
        <GoogleMark />
        Reseña publicada en Google
      </div>
    </article>
  )
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.27-4.74 3.27-8.09Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.76c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
      />
    </svg>
  )
}
