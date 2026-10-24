import Image from "next/image"
import { MapPin, Phone, Star, Heart, ChefHat, Leaf, Instagram } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Stars } from "@/components/stars"
import { business } from "@/lib/business"

const VALUES = [
  {
    icon: Heart,
    tone: "bg-destructive/10 text-destructive",
    title: "Ambiente familiar",
    text: "Un espacio acogedor donde cada cliente es parte de nuestra familia salvadoreña.",
  },
  {
    icon: ChefHat,
    tone: "bg-primary/10 text-primary",
    title: "Recetas de siempre",
    text: "Tradición transmitida de generación en generación, preparada cada día con calma y cariño.",
  },
  {
    icon: Leaf,
    tone: "bg-accent/10 text-accent",
    title: "Ingredientes auténticos",
    text: "Masa de maíz, loroco, curtido fermentado y salsa roja de verdad. Como en casa.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 pattern-dots text-primary/[0.05]" aria-hidden="true" />
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <SectionHeading
          eyebrow="Nuestra casa"
          title={
            <>
              Un pedacito de <em className="text-primary">El Salvador</em> en Barcelona
            </>
          }
          description="Más que un restaurante, somos la mesa donde se juntan los sabores de nuestra tierra con el cariño de una familia. Aquí se come como en casa."
        />

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-foreground/[0.06] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-7">
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-2xl ${value.tone} transition-transform duration-300 group-hover:scale-110`}
                >
                  <value.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{value.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-14 md:mt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div
                className="absolute -inset-3 rotate-[-1.5deg] rounded-[2rem] bg-primary/10 md:-inset-4"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-lift">
                <Image
                  src="/casa-nancy-interior.jpg"
                  alt="Interior acogedor de Casa Nancy con murales tradicionales salvadoreños"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/95 px-4 py-3 shadow-lift backdrop-blur md:right-8">
                <Stars rating={business.rating.value} size="size-4" />
                <div className="leading-tight">
                  <p className="font-display text-lg font-semibold">{business.rating.display} / 5</p>
                  <p className="text-xs text-muted-foreground">{business.rating.count} reseñas en Google</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="eyebrow text-accent">
                <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
                Nuestra historia
              </p>
              <h3 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">
                Nació de un sueño: compartir los sabores de casa
              </h3>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
                Casa Nancy nació del deseo de compartir los auténticos sabores de El Salvador con la comunidad de
                Barcelona. Cada pupusa que servimos lleva el amor y la tradición de nuestras raíces centroamericanas,
                y cada mesa es una excusa para sentirse un poco más cerca de casa.
              </p>

              <ul className="mt-7 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium">
                    {business.address.street}
                    <span className="block text-sm font-normal text-muted-foreground">
                      {business.address.postalCode} {business.address.city}, {business.address.region}
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <a href={business.phone.mobileHref} className="font-medium transition-colors hover:text-primary">
                    {business.phone.mobileIntl}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Instagram className="size-4" aria-hidden="true" />
                  </span>
                  <a
                    href={business.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium transition-colors hover:text-primary"
                  >
                    {business.instagram.handle}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold/25 text-foreground">
                    <Star className="size-4 fill-current text-gold" aria-hidden="true" />
                  </span>
                  <span className="font-medium">
                    {business.rating.display} / 5 estrellas · {business.rating.count} reseñas en Google
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
