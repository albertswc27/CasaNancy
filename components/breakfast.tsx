import Image from "next/image"
import { Sun, Clock, CalendarDays, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { breakfast, whatsapp } from "@/lib/business"

export function BreakfastSpecialSection() {
  return (
    <section id="desayunos" className="relative overflow-hidden bg-sky">
      <div className="absolute inset-0 pattern-dots text-primary/[0.06]" aria-hidden="true" />
      <div className="absolute -right-24 top-10 size-80 rounded-full bg-gold/25 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-4 py-20 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rotate-2 rounded-[2.25rem] bg-primary/15 md:-inset-4" aria-hidden="true" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-primary shadow-lift">
              <Image
                src="/images/desayuno.jpg"
                alt="Desayuno salvadoreño de Casa Nancy: casamiento, plátano frito, huevos, aguacate, crema y queso"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-5 left-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/95 px-4 py-2.5 text-sm font-semibold shadow-lift backdrop-blur md:left-8">
              <Sun className="size-4 text-gold" aria-hidden="true" />
              Solo por las mañanas
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="eyebrow text-accent">
              <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
              Especial desayunos
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] md:text-4xl lg:text-[2.75rem]">
              Empieza el día como en <em className="text-primary">El Salvador</em>
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Nuestro desayuno salvadoreño: casamiento de arroz y frijoles, plátano frito, huevos picados, aguacate,
              crema y queso fresco. Un plato completo para empezar con energía y un cafecito al lado.
            </p>

            <dl className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-foreground/[0.06] bg-white p-4 shadow-soft">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CalendarDays className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Días
                  </dt>
                  <dd className="font-semibold">{breakfast.days}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-foreground/[0.06] bg-white p-4 shadow-soft">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/25 text-foreground">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Horario
                  </dt>
                  <dd className="font-semibold">{breakfast.hours}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-7">
              <Button variant="whatsapp" size="lg" asChild>
                <a href={whatsapp.breakfast} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Reservar desayuno
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
