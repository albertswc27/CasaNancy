import Image from "next/image"
import { CalendarDays, MessageCircle, Soup, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { business, whatsapp } from "@/lib/business"

const FIRST_SATURDAY = {
  name: "Sopa de marisco",
  description: "Deliciosa sopa con mariscos frescos. Solo el primer sábado de cada mes.",
  price: "19,00 €",
  image: "/images/sopa-de-marisco.jpg",
}

const OTHER_SATURDAYS = [
  {
    name: "Sopa de gallina",
    description: "Caldo tradicional de gallina criolla",
    price: "14,00 €",
    image: "/images/sopa-gallina.jpg",
  },
  {
    name: "Sopa de res",
    description: "Nutritivo caldo de res con verduras",
    price: "14,00 €",
    image: "/images/sopa-res.jpg",
  },
  {
    name: "Carne a la plancha",
    description: "Jugosa carne preparada a la plancha",
    price: "14,00 €",
    image: "/images/carne-a-la-plancha.jpg",
  },
  {
    name: "Carne mechada",
    description: "Carne deshebrada en su jugo",
    price: "14,00 €",
    image: "/images/carne-mechada.jpg",
  },
  {
    name: "Panes rellenos de pollo",
    description: "Pan salvadoreño relleno de pollo",
    price: "10,00 €",
    image: "/images/panes-rellenos-de-pollo.jpg",
  },
]

export function SaturdaySpecialsSection() {
  return (
    <section id="especiales" className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 pattern-dots text-primary/[0.05]" aria-hidden="true" />
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <SectionHeading
          eyebrow="Los sábados son especiales"
          title={
            <>
              Cada sábado, un plato <em className="text-primary">que no te puedes perder</em>
            </>
          }
          description="Anunciamos el especial de cada sábado en nuestros estados de WhatsApp. Guárdanos en tus contactos y no te quedes sin el tuyo."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Primer sábado del mes */}
          <Reveal>
            <article className="group relative h-full overflow-hidden rounded-[2rem] bg-navy text-white shadow-lift">
              <div className="absolute inset-0">
                <Image
                  src={FIRST_SATURDAY.image}
                  alt={FIRST_SATURDAY.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-transparent" aria-hidden="true" />
              </div>
              <div className="relative flex h-full min-h-[22rem] flex-col justify-end p-6 md:min-h-[28rem] md:p-9">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-navy-deep shadow-lg">
                  <Star className="size-3.5 fill-current" aria-hidden="true" />
                  Primer sábado del mes
                </span>
                <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                  <h3 className="text-3xl font-semibold md:text-4xl">{FIRST_SATURDAY.name}</h3>
                  <p className="font-display text-3xl font-semibold text-gold">{FIRST_SATURDAY.price}</p>
                </div>
                <p className="mt-2 max-w-md text-pretty text-white/80">{FIRST_SATURDAY.description}</p>
              </div>
            </article>
          </Reveal>

          {/* Resto de sábados */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-[2rem] border border-foreground/[0.06] bg-white p-5 shadow-soft md:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Soup className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-tight">El resto de sábados</h3>
                  <p className="text-sm text-muted-foreground">Uno de estos platos, según la semana</p>
                </div>
              </div>

              <ul className="mt-5 divide-y divide-foreground/[0.06]">
                {OTHER_SATURDAYS.map((item) => (
                  <li key={item.name} className="group flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-muted md:size-[4.5rem]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold leading-tight">{item.name}</p>
                      <p className="mt-0.5 truncate text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <p className="font-display text-lg font-semibold text-primary">{item.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-8">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-primary/15 bg-primary/[0.06] px-6 py-6 text-center md:flex-row md:text-left md:px-8">
            <div className="flex items-start gap-4">
              <span className="hidden size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary md:flex">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-primary">¡Mantente informado!</p>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">
                  Agréganos al WhatsApp <span className="font-semibold text-foreground">{business.phone.mobileIntl}</span>{" "}
                  y verás el especial de cada sábado en nuestros estados.
                </p>
              </div>
            </div>
            <Button variant="outline" size="lg" className="shrink-0" asChild>
              <a href={whatsapp.plain} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" />
                Guardar contacto
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
