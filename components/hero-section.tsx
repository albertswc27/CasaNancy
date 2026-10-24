import Image from "next/image"
import { MapPin, MessageCircle, ChevronDown, Flame, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Stars } from "@/components/stars"
import { OpenStatusPill } from "@/components/open-status-pill"
import { Reveal } from "@/components/reveal"
import { business, whatsapp } from "@/lib/business"

export function HeroSection() {
  return (
    <section id="inicio" className="relative -mt-16 overflow-hidden pt-16 md:-mt-[4.5rem] md:pt-[4.5rem]">
      {/* Fondo: degradado inspirado en la bandera de El Salvador + textura suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky via-background to-sky/60" aria-hidden="true" />
      <div className="absolute inset-0 pattern-dots text-primary/[0.07]" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-40 size-[34rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-24 size-[26rem] rounded-full bg-gold/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 pb-16 pt-10 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="eyebrow justify-center text-accent lg:justify-start">
                <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
                Pupusería · {business.city}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-balance text-[2.6rem] font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-[4.1rem]">
                Auténtico sabor <em className="text-primary">salvadoreño</em>, hecho en casa
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
                Pupusas hechas al momento, tamales, sopas de toda la vida y el verdadero sabor de El Salvador en el
                corazón de Santa Coloma de Gramenet.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <a
                href="#opiniones"
                className="group mt-7 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-foreground/10 bg-white/70 py-2 pl-3 pr-4 shadow-soft backdrop-blur transition hover:border-primary/30 hover:shadow-lift lg:justify-start"
              >
                <Stars rating={business.rating.value} size="size-[18px]" />
                <span className="font-display text-lg font-semibold text-foreground">{business.rating.display}</span>
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{business.rating.count}</span> reseñas en Google
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/25 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  <PartyPopper className="size-3.5" aria-hidden="true" />
                  ¡Nuevo hito!
                </span>
              </a>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Button variant="whatsapp" size="xl" className="w-full sm:w-auto" asChild>
                  <a href={whatsapp.reserve} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-5" aria-hidden="true" />
                    Reservar por WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="w-full sm:w-auto" asChild>
                  <a href="#menu">
                    Ver el menú
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-7 flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:justify-center lg:justify-start">
                <OpenStatusPill />
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  {business.address.street}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Imagen */}
          <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div
                className="absolute -inset-3 -rotate-2 rounded-[2.5rem] bg-primary/90 shadow-glow md:-inset-4"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-gold/60 md:-inset-4"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] bg-muted shadow-lift sm:aspect-square">
                <Image
                  src="/authentic-salvadoran-pupusas-on-traditional-plate-.jpg"
                  alt="Pupusas recién hechas en Casa Nancy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep/60 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Tarjeta flotante: especialidad */}
              <div className="absolute -bottom-5 -left-2 animate-float rounded-2xl border border-white/60 bg-white/95 p-3.5 shadow-lift backdrop-blur sm:-left-6 sm:p-4 xl:-left-10">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                    <Flame className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Nuestra especialidad
                    </p>
                    <p className="font-display text-base font-semibold leading-tight">Pupusas hechas al momento</p>
                  </div>
                </div>
              </div>

              {/* Tarjeta flotante: valoración */}
              <div className="absolute -right-2 -top-5 animate-float-slow rounded-2xl border border-white/60 bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:-right-6 xl:-right-10">
                <div className="flex items-center gap-3">
                  <img
                    src="/casa-nancy-logo.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover ring-2 ring-primary/70"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-display text-lg font-semibold leading-none">{business.rating.display}</span>
                      <Stars rating={business.rating.value} size="size-3.5" />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {business.rating.count} reseñas · Google
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
