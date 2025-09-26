import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageCircle, Phone } from "lucide-react"

export function SaturdaySpecialsSection() {
  const specials = [
    {
      title: "Primer Sábado del Mes",
      items: [
        {
          name: "Sopa de Marisco",
          description: "Deliciosa sopa con mariscos frescos",
          price: "19,00€",
        },
      ],
    },
    {
      title: "Otros Sábados",
      items: [
        {
          name: "Sopa de Gallina",
          description: "Caldo tradicional de gallina criolla",
          price: "14,00€",
        },
        {
          name: "Sopa de Res",
          description: "Nutritivo caldo de res con verduras",
          price: "14,00€",
        },
        {
          name: "Carne a la Plancha",
          description: "Jugosa carne preparada a la plancha",
          price: "14,00€",
        },
        {
          name: "Carne Mechada",
          description: "Carne deshebrada en su jugo",
          price: "14,00€",
        },
        {
          name: "Panes Rellenos de Pollo",
          description: "Pan salvadoreño relleno de pollo",
          price: "10,00€",
        },
      ],
    },
  ]

  return (
    <section id="especiales-sabado" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold">Especiales de Sábado</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada sábado preparamos platos especiales que no te puedes perder
          </p>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-primary">¡Mantente Informado!</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Anunciamos el plato especial de cada sábado en nuestros estados de WhatsApp
            </p>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4 text-primary" />
              <span>Agréganos: </span>
              <a
                href="https://wa.me/34635446435"
                className="text-primary hover:text-primary/80 transition-colors font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                +34 635 446 435
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {specials.map((special, specialIndex) => (
            <Card key={specialIndex} className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Badge variant="outline" className="border-primary text-primary">
                    {special.title}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {special.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <div className="text-lg font-bold text-primary">{item.price}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
