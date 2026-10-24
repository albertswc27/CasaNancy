import { Heart, MessageSquareQuote, PenLine, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Stars } from "@/components/stars"
import { Reveal } from "@/components/reveal"
import { business, maps } from "@/lib/business"

export function MilestoneSection() {
  return (
    <section id="hito-503" className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy" aria-hidden="true" />
      <div className="absolute inset-0 pattern-weave text-white/[0.06]" aria-hidden="true" />
      <div className="absolute -left-20 top-1/2 size-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-10 -top-24 size-72 rounded-full bg-gold/30 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-4 py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          {/* Número protagonista */}
          <Reveal className="text-center lg:text-left">
            <p className="eyebrow justify-center text-gold lg:justify-start">
              <span className="h-px w-6 bg-gold/70" aria-hidden="true" />
              Un hito muy especial
            </p>
            <div className="mt-3 flex items-end justify-center gap-1 lg:justify-start">
              <span className="font-display text-5xl font-semibold leading-none text-white/60 sm:text-6xl md:text-7xl">
                +
              </span>
              <span className="font-display text-[6.5rem] font-semibold leading-[0.85] tracking-tight text-white sm:text-[8rem] md:text-[9.5rem]">
                {business.rating.count}
              </span>
            </div>
            <p className="mt-4 text-lg font-medium text-white/85 md:text-xl">reseñas en Google</p>
            <div className="mt-3 flex items-center justify-center gap-2 lg:justify-start">
              <Stars rating={business.rating.value} size="size-5" mutedClassName="text-white/25" />
              <span className="font-display text-xl font-semibold">{business.rating.display}</span>
              <span className="text-sm text-white/70">de 5 · valoración media</span>
            </div>
          </Reveal>

          {/* Texto y acciones */}
          <Reveal delay={120} className="text-center lg:text-left">
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] md:text-4xl lg:text-[2.75rem]">
              {business.rating.count} reseñas. El mismo número que el{" "}
              <em className="text-gold">prefijo de El Salvador</em>.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/80 md:text-lg lg:mx-0">
              Cuando vimos el contador en 503 no pudimos evitar sonreír: es el +503 que marcamos cada vez que
              llamamos a casa. Gracias a cada persona que se ha sentado a nuestra mesa y se ha tomado un momento
              para contarlo. Esto lo hemos conseguido juntos.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button variant="inverted" size="lg" asChild>
                <a href={maps.reviews} target="_blank" rel="noopener noreferrer">
                  <PenLine className="size-4" aria-hidden="true" />
                  Déjanos tu reseña
                </a>
              </Button>
              <Button variant="outline-inverted" size="lg" asChild>
                <a href="#opiniones">
                  <MessageSquareQuote className="size-4" aria-hidden="true" />
                  Leer opiniones
                </a>
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-3 text-left sm:gap-4">
              {[
                { icon: Star, label: "Valoración", value: `${business.rating.display} / 5` },
                { icon: MessageSquareQuote, label: "Reseñas", value: String(business.rating.count) },
                { icon: Heart, label: "Prefijo de casa", value: "+503" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-sm sm:p-4"
                >
                  <dt className="flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/65">
                    <Icon className="size-3.5 text-gold" aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="mt-1.5 font-display text-2xl font-semibold leading-none sm:text-3xl">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
