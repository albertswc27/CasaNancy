import { Clock, CalendarCheck, Sun, Users, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { OpenStatusPill } from "@/components/open-status-pill"
import { WeeklySchedule } from "@/components/weekly-schedule"
import { breakfast, whatsapp } from "@/lib/business"

const INFO_CARDS = [
  {
    icon: Sun,
    tone: "bg-gold/25 text-foreground",
    title: "Desayunos",
    text: `${breakfast.days}, de ${breakfast.hours}.`,
  },
  {
    icon: Users,
    tone: "bg-accent/10 text-accent",
    title: "Reservas",
    text: "Recomendamos reservar para grupos de 6 o más personas.",
  },
  {
    icon: Clock,
    tone: "bg-destructive/10 text-destructive",
    title: "Última orden",
    text: "30 minutos antes del cierre de cada turno.",
  },
]

export function HoursSection() {
  return (
    <section id="horarios" className="relative overflow-hidden bg-sky">
      <div className="absolute inset-0 pattern-dots text-primary/[0.06]" aria-hidden="true" />
      <div className="absolute -left-24 bottom-0 size-80 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <SectionHeading
          eyebrow="Horarios"
          title={
            <>
              Te esperamos con las pupusas <em className="text-primary">calentitas</em>
            </>
          }
          description="Abrimos de miércoles a domingo. Consulta el horario de hoy y ven cuando quieras: siempre hay un sitio en nuestra mesa."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <Reveal>
            <div className="rounded-[2rem] border border-foreground/[0.06] bg-white p-3 shadow-soft md:p-5">
              <div className="flex flex-col gap-3 px-3 pb-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <CalendarCheck className="size-5 text-primary" aria-hidden="true" />
                  Horario semanal
                </h3>
                <OpenStatusPill />
              </div>
              <WeeklySchedule />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {INFO_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={100 + i * 80}>
                <div className="flex items-start gap-4 rounded-3xl border border-foreground/[0.06] bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                  <span className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${card.tone}`}>
                    <card.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={360}>
              <div className="rounded-3xl bg-primary p-5 text-white shadow-lift">
                <p className="font-display text-xl font-semibold">¿Vienes en grupo?</p>
                <p className="mt-1 text-sm text-white/80">
                  Escríbenos y te guardamos la mesa. Respondemos rápido por WhatsApp.
                </p>
                <Button variant="inverted" size="sm" className="mt-4" asChild>
                  <a href={whatsapp.reserve} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Reservar mesa
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
