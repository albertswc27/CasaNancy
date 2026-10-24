"use client"

import { useEffect, useState } from "react"
import { Menu, X, Phone, MessageCircle, MapPin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OpenStatusPill } from "@/components/open-status-pill"
import { business, whatsapp } from "@/lib/business"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio", id: "inicio" },
  { href: "#nosotros", label: "Nosotros", id: "nosotros" },
  { href: "#menu", label: "Menú", id: "menu" },
  { href: "#especiales", label: "Especiales", id: "especiales" },
  { href: "#horarios", label: "Horarios", id: "horarios" },
  { href: "#opiniones", label: "Opiniones", id: "opiniones" },
  { href: "#contacto", label: "Contacto", id: "contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("inicio")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled || isMenuOpen ? "glass border-b border-foreground/8 shadow-soft" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
          <a href="#inicio" className="group flex shrink-0 items-center gap-3" aria-label="Casa Nancy, volver al inicio">
            <span className="relative">
              <img
                src="/casa-nancy-logo.jpg"
                alt=""
                width={48}
                height={48}
                className="size-10 rounded-full object-cover ring-2 ring-primary/80 ring-offset-2 ring-offset-background transition-transform duration-300 group-hover:scale-105 md:size-11"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="whitespace-nowrap font-display text-xl font-semibold text-primary md:text-2xl">
                Casa Nancy
              </span>
              <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:block">
                Pupusería salvadoreña
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-primary",
                  active === link.id ? "text-primary" : "text-foreground/75",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-primary transition-all duration-300",
                    active === link.id ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <OpenStatusPill compact className="hidden 2xl:inline-flex" />
            <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
              <a href={business.phone.mobileHref}>
                <Phone className="size-4" aria-hidden="true" />
                {business.phone.mobileIntl}
              </a>
            </Button>
            <Button variant="whatsapp" size="sm" asChild>
              <a href={whatsapp.reserve} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" />
                <span className="hidden sm:inline">Reservar mesa</span>
                <span className="sm:hidden">Reservar</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="menu-movil"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            id="menu-movil"
            aria-label="Menú móvil"
            className="animate-in fade-in slide-in-from-top-2 border-t border-foreground/8 pb-5 pt-3 duration-200 lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-primary/5 hover:text-primary",
                      active === link.id ? "text-primary" : "text-foreground/85",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-3 border-t border-foreground/8 pt-4">
              <OpenStatusPill className="self-start" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                <span>
                  {business.address.street}, {business.address.city}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={business.phone.mobileHref}>
                    <Phone className="size-4" aria-hidden="true" />
                    {business.phone.mobileIntl}
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={business.instagram.url} target="_blank" rel="noopener noreferrer">
                    <Instagram className="size-4" aria-hidden="true" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
