import { PenLine, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Stars } from "@/components/stars"
import { ReviewCard, type Review } from "@/components/review-card"
import { business, maps } from "@/lib/business"

const REVIEWS: Review[] = [
  {
    name: "SuperGirl Levenstein",
    text: "Recientemente coordiné un intercambio gastronómico cultural para mi oficina y elegí a Casa Nancy para representar a El Salvador. Decir que 'la arrasó' sería quedarse corto. Pedimos una gran variedad de platillos, desde las pupusas (queso y frijoles) a la parrilla, perfectas, hasta los dulces y aterciopelados tamales de elote, curtido (picante y suave) y la crujiente yuca con costilla. ¡Nos comimos hasta el último bocado! ¡Nuestro equipo devoró la comida! Una de mis compañeras incluso se emocionó hasta las lágrimas con el queso blanco que sirvieron con la yuca, diciendo que sabía exactamente como 'en casa' y estaba desesperada por encontrar a su proveedor. En lo personal, compartí mi propia experiencia de adopción en El Salvador durante este almuerzo, y disfrutar de la comida de Nancy hizo que la experiencia fuera realmente completa. Se nota que todo está preparado con amor genuino y técnicas tradicionales. Si buscas la comida salvadoreña más auténtica en Barcelona, no busques más. Gracias, Nancy, por ayudarme a compartir mi herencia tan bellamente. ¡Sin duda volveremos!",
    rating: 5,
    meta: "Local Guide · 49 reseñas · 247 fotos",
    timeAgo: "Hace un día",
  },
  {
    name: "Damaris Avalos",
    text: "El mejor caldo que he probado. Muy amable el personal, lo hacen sentir en casa.",
    rating: 5,
    meta: "Google Reviews",
    timeAgo: "Hace una semana",
  },
  {
    name: "Lucas",
    text: "La mejor comida que he probado, un servicio muy atento, te tratan con amor y la comida súper buenaaaa. ¡Lo recomiendo mucho!",
    rating: 5,
    meta: "Google Reviews",
    timeAgo: "Hace una semana",
  },
  {
    name: "Herberth Gomez",
    text: "¡Deliciosas! He probado pupusas en otros lugares en Barcelona y hasta el momento son las mejores, ¡sin dudarlo! Las revueltas buenísimas, y tienen de queso con loroco. ¡Definitivamente volveremos!",
    rating: 5,
    meta: "Local Guide · Barcelona",
    timeAgo: "Hace 9 meses",
  },
]

export function TestimonialsSection() {
  return (
    <section id="opiniones" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-deep" aria-hidden="true" />
      <div className="absolute inset-0 pattern-weave text-white/[0.05]" aria-hidden="true" />
      <div className="absolute -right-24 top-16 size-96 rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-24 bottom-0 size-80 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <SectionHeading
          tone="dark"
          eyebrow="Opiniones"
          title={
            <>
              Lo que dicen <em className="text-gold">quienes ya han venido</em>
            </>
          }
          description={`Más de ${business.rating.count} reseñas en Google nos avalan como el sabor salvadoreño de referencia en la zona.`}
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* Resumen de valoración */}
          <Reveal className="self-start lg:sticky lg:top-28">
            <div className="flex flex-col rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-sm md:p-9">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Valoración en Google
                </p>
                <div className="mt-3 flex items-end gap-3">
                  <span className="font-display text-7xl font-semibold leading-none md:text-8xl">
                    {business.rating.display}
                  </span>
                  <span className="pb-2 text-lg text-white/60">/ 5</span>
                </div>
                <Stars rating={business.rating.value} size="size-6" mutedClassName="text-white/25" className="mt-4" />
                <p className="mt-4 text-white/80">
                  Basado en <span className="font-semibold text-white">{business.rating.count} reseñas</span> de
                  clientes reales.
                </p>
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Lo que más se repite
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {["Pupusas al momento", "Caldos y sopas", "Trato familiar", "Como en casa"].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button variant="inverted" size="lg" asChild>
                  <a href={maps.reviews} target="_blank" rel="noopener noreferrer">
                    <PenLine className="size-4" aria-hidden="true" />
                    Escribir una reseña
                  </a>
                </Button>
                <Button variant="outline-inverted" size="lg" asChild>
                  <a href={maps.reviews} target="_blank" rel="noopener noreferrer">
                    Ver todas en Google
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Reseñas destacadas */}
          <div className="grid gap-6 sm:grid-cols-2">
            {REVIEWS.map((review, i) => (
              <Reveal
                key={review.name}
                delay={80 + i * 80}
                className={i === 0 ? "sm:col-span-2" : undefined}
              >
                <ReviewCard review={review} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
