"use client"

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Retardo en ms para escalonar varios elementos. */
  delay?: number
  as?: "div" | "section" | "article" | "li" | "span"
  style?: CSSProperties
}

/**
 * Aparece suavemente cuando entra en pantalla.
 * Sin JavaScript el contenido se muestra siempre (ver globals.css).
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div", style }: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null)

  useEffect(() => {
    const el = ref.current as HTMLElement | null
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible")
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible")
            observer.disconnect()
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  )
}
