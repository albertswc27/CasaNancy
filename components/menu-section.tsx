import Image from "next/image"
import { Flame, MessageCircle, Sparkles, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { whatsapp } from "@/lib/business"
import { cn } from "@/lib/utils"

type MenuItem = {
  name: string
  category: string
  description: string
  price?: string
  variants?: { label: string; price: string }[]
  badge?: { label: string; tone: "accent" | "destructive" | "primary" }
  note?: string
  image?: string
}

const PUPUSA_FLAVORS = [
  "Revuelta",
  "Chicharrón con queso",
  "Frijol con queso",
  "Jalapeño con queso",
  "Loroco con queso",
  "Queso",
]

const MENU_ITEMS: MenuItem[] = [
  {
    name: "Yuca frita con costilla",
    category: "Plato principal",
    description: "Yuca dorada y crujiente acompañada de costilla de cerdo.",
    price: "14,00 €",
    image: "/images/yuca-frita.jpg",
  },
  {
    name: "Pollo Santaky",
    category: "Plato principal",
    description: "Pollo frito crujiente con salsa de miel y mostaza.",
    price: "8,00 €",
    image: "/images/pollo-santaky.jpg",
  },
  {
    name: "Alitas a la barbacoa",
    category: "Plato principal",
    description: "Alitas de pollo jugosas con salsa de miel y mostaza.",
    price: "8,00 €",
    image: "/images/alitas.jpg",
  },
  {
    name: "Tamales de elote",
    category: "Tamales · 2 unidades",
    description: "Dulces tamales de maíz tierno, al estilo de siempre o dorados en la plancha.",
    variants: [
      { label: "Tradicionales", price: "8,00 €" },
      { label: "Fritos", price: "9,00 €" },
    ],
    image: "/images/tamales.jpg",
  },
  {
    name: "Tamales de viernes",
    category: "Tamales · 3 unidades",
    description: "Rellenos de pollo, gallina o costilla. Solo los viernes.",
    price: "12,50 €",
    note: "Unidad suelta: 5,00 €",
    badge: { label: "Solo viernes", tone: "destructive" },
    image: "/images/tamales-costilla.jpg",
  },
  {
    name: "Sopa de pata (mondongo)",
    category: "Especial del domingo",
    description: "Sopa tradicional salvadoreña con verduras, lenta y reconfortante. Solo los domingos.",
    price: "14,00 €",
    badge: { label: "Solo domingos", tone: "primary" },
    image: "/images/sopa-de-pata.jpg",
  },
]

const BADGE_TONES = {
  accent: "bg-accent text-white",
  destructive: "bg-destructive text-white",
  primary: "bg-primary text-white",
}

export function MenuSection() {
  return (
    <section id="menu" className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 pattern-grid text-primary/[0.035]" aria-hidden="true" />
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <SectionHeading
          eyebrow="Nuestro menú"
          title={
            <>
              Sabores de El Salvador, <em className="text-primary">preparados con cariño</em>
            </>
          }
          description="Ingredientes frescos, recetas tradicionales y porciones generosas. Esto es lo que encontrarás en nuestra mesa."
        />

        {/* Pupusas: plato estrella */}
        <Reveal>
          <article className="group relative overflow-hidden rounded-[2rem] border border-foreground/[0.06] bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift">
            <div className="grid lg:grid-cols-[1fr_1.15fr]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]">
                <Image
                  src="/images/pupusas.jpg"
                  alt="Orden de tres pupusas con curtido y salsa roja"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent lg:bg-gradient-to-r"
                  aria-hidden="true"
                />
                <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                  <Flame className="size-3.5" aria-hidden="true" />
                  Lo más pedido
                </span>
              </div>

              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="eyebrow text-accent">
                  <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
                  Pupusas hechas al momento
                </p>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <h3 className="text-3xl font-semibold md:text-4xl">Orden de 3 pupusas</h3>
                  <p className="font-display text-3xl font-semibold text-primary">8,50 €</p>
                </div>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground md:text-lg">
                  Masa de maíz rellena y asada en el comal, servida con curtido y salsa roja tradicional. Elige tus
                  sabores favoritos:
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Sabores de pupusas">
                  {PUPUSA_FLAVORS.map((flavor) => (
                    <li
                      key={flavor}
                      className="rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary"
                    >
                      {flavor}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    Incluye curtido y salsa roja tradicional. Suplemento por orden variada:{" "}
                    <span className="font-semibold text-foreground">+1,00 €</span>.
                  </span>
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Resto de platos */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/[0.06] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                {item.image && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-deep/55 to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-foreground/80 backdrop-blur">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span
                        className={cn(
                          "absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-md",
                          BADGE_TONES[item.badge.tone],
                        )}
                      >
                        {item.badge.label}
                      </span>
                    )}
                    {item.price && (
                      <span className="absolute bottom-4 right-4 rounded-full bg-white px-3.5 py-1.5 font-display text-lg font-semibold text-primary shadow-lg">
                        {item.price}
                      </span>
                    )}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-xl font-semibold leading-tight">{item.name}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                    {item.description}
                  </p>
                  {item.variants && (
                    <ul className="mt-4 space-y-2">
                      {item.variants.map((variant) => (
                        <li key={variant.label} className="flex items-baseline gap-2 text-sm">
                          <span className="font-medium">{variant.label}</span>
                          <span className="leader-dots h-3 flex-1" aria-hidden="true" />
                          <span className="font-display text-base font-semibold text-primary">{variant.price}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.note && <p className="mt-auto pt-4 text-xs italic text-muted-foreground">{item.note}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-accent/20 bg-accent/[0.07] px-6 py-6 text-center md:flex-row md:text-left md:px-8">
            <div className="flex items-start gap-4">
              <span className="hidden size-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent md:flex">
                <UtensilsCrossed className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-accent">Acompañamientos incluidos</p>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">
                  Todas las pupusas se sirven con curtido (ensalada fermentada de repollo) y salsa roja tradicional.
                  ¿Para llevar? Escríbenos y lo tendremos listo.
                </p>
              </div>
            </div>
            <Button variant="whatsapp" size="lg" className="shrink-0" asChild>
              <a href={whatsapp.order} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" />
                Pedir por WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
