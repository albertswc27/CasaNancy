import { CupSoda, IceCream, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const DESSERTS = [
  { name: "Chocobananos", price: "2,00 €" },
  { name: "ChocoSandías", price: "2,50 €" },
  { name: "Paleta de coco", price: "2,50 €" },
  { name: "Charamusca de tamarindo", price: "2,00 €" },
  { name: "Coulant", price: "4,50 €" },
]

const BEVERAGES = [
  { name: "Maracuyá", price: "3,50 €" },
  { name: "Tamarindo", price: "3,50 €" },
  { name: "Cebada", price: "3,50 €" },
  { name: "Mora", price: "3,50 €" },
  { name: "Jamaica", price: "3,50 €" },
  { name: "Chan", price: "3,50 €" },
  { name: "Lulo", price: "3,50 €" },
  { name: "Horchata", price: "5,00 €", special: true },
]

type ListCardProps = {
  icon: typeof IceCream
  tone: string
  title: string
  subtitle: string
  items: { name: string; price: string; special?: boolean }[]
}

function ListCard({ icon: Icon, tone, title, subtitle, items }: ListCardProps) {
  return (
    <div className="h-full rounded-[2rem] border border-foreground/[0.06] bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift md:p-8">
      <div className="flex items-center gap-3">
        <span className={`flex size-11 items-center justify-center rounded-2xl ${tone}`}>
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-3.5">
        {items.map((item) => (
          <li key={item.name} className="flex items-baseline gap-3">
            <span className="flex items-center gap-2 font-medium">
              {item.name}
              {item.special && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/25 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-foreground">
                  <Sparkles className="size-3" aria-hidden="true" />
                  Especial
                </span>
              )}
            </span>
            <span className="leader-dots h-3 flex-1" aria-hidden="true" />
            <span className="font-display text-lg font-semibold text-primary">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function DessertsBeveragesSection() {
  return (
    <section id="postres-bebidas" className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 pattern-grid text-primary/[0.035]" aria-hidden="true" />
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <SectionHeading
          eyebrow="Para terminar"
          title={
            <>
              Postres y <em className="text-primary">refrescos naturales</em>
            </>
          }
          description="Endulza tu visita con nuestros dulces tradicionales y refréscate con bebidas naturales hechas en casa."
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
          <Reveal>
            <ListCard
              icon={IceCream}
              tone="bg-destructive/10 text-destructive"
              title="Postres"
              subtitle="Dulces de toda la vida"
              items={DESSERTS}
            />
          </Reveal>
          <Reveal delay={120}>
            <ListCard
              icon={CupSoda}
              tone="bg-primary/10 text-primary"
              title="Refrescos naturales"
              subtitle="Frescos, hechos con fruta"
              items={BEVERAGES}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
