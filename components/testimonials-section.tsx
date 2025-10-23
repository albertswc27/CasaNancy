import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Damaris Avalos",
      text: "El mejor caldo que he probado. Muy amable el personal lo hacen sentir en casa.",
      rating: 5,
      location: "Google Reviews",
      timeAgo: "Hace una semana",
    },
    {
      name: "Lucas",
      text: "La mejor comida que he probado, un servicio muy atento, te tratan con amor y la comida super buenaaaa. Lo recomiendo mucho!!",
      rating: 5,
      location: "Google Reviews",
      timeAgo: "Hace una semana",
    },
    {
      name: "Herberth Gomez",
      text: "Deliciosas!!! He probado pupusas en otros lugares en Barcelona y hasta el momento son las mejores, sin dudarlo! Las revueltas buenísimas, y tienen de queso con loroco!!! Definitivamente volveremos!",
      rating: 5,
      location: "Local Guide • Barcelona",
      timeAgo: "Hace 9 meses",
    },
  ]

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* El Salvador flag inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-blue-300/75"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Más de 300 reseñas nos avalan como el mejor sabor salvadoreño de la zona
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-4 md:p-6">
                <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary/20 mb-3 md:mb-4" />
                <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-muted-foreground/70">{testimonial.timeAgo}</div>
                  </div>
                  <div className="flex items-center space-x-1 self-start sm:self-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-muted rounded-full px-4 md:px-6 py-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-sm md:text-base">4.7/5</span>
            <span className="text-muted-foreground text-xs md:text-sm">• 205 reseñas en Google</span>
          </div>
        </div>
      </div>
    </section>
  )
}
