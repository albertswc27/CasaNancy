import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"

export function HoursSection() {
  const schedule = [
    { day: "Lunes", hours: "Cerrado", closed: true },
    { day: "Martes", hours: "Cerrado", closed: true },
    { day: "Miércoles", hours: "12:00-16:00 • 19:00-22:00", today: false },
    { day: "Jueves", hours: "12:00-16:00 • 19:00-22:00", today: false },
    { day: "Viernes", hours: "12:00-16:00 • 19:00-22:00", today: true, special: "¡Tamales especiales!" },
    { day: "Sábado", hours: "12:00-17:00 • 19:00-23:00", today: false, special: "¡Platos especiales!" },
    { day: "Domingo", hours: "12:00-17:30", today: false, special: "¡Sopa de Pata!" },
  ]

  return (
    <section id="horarios" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Horarios de Atención</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Te esperamos con los brazos abiertos y las pupusas calentitas
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                Horario Semanal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg transition-colors space-y-1 sm:space-y-0 ${
                    item.today
                      ? "bg-primary/10 border border-primary/20"
                      : item.closed
                        ? "bg-muted/50"
                        : "bg-background"
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <span
                      className={`font-medium text-sm md:text-base ${item.today ? "text-primary" : "text-foreground"}`}
                    >
                      {item.day}
                    </span>
                    {item.today && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Hoy</span>
                    )}
                  </div>
                  <div className="text-left sm:text-right">
                    <div
                      className={`font-medium text-sm md:text-base ${item.closed ? "text-muted-foreground" : "text-foreground"}`}
                    >
                      {item.hours}
                    </div>
                    {item.special && <div className="text-xs text-accent font-medium">{item.special}</div>}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card>
              <CardContent className="p-4 md:p-6 text-center">
                <Calendar className="h-6 w-6 md:h-8 md:w-8 text-accent mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold mb-2 text-sm md:text-base">Reservas</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Recomendamos reservar para grupos de 6 o más personas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6 text-center">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-destructive mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold mb-2 text-sm md:text-base">Última Orden</h3>
                <p className="text-xs md:text-sm text-muted-foreground">30 minutos antes del cierre</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
