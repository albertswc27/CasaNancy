import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Star, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="relative py-12 md:py-20 overflow-hidden">
      {/* El Salvador flag inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-blue-300/75"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6">
            <img
              src="/casa-nancy-logo.jpg"
              alt="Casa Nancy Logo"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover border-3 border-primary shadow-lg"
            />
            <div className="text-primary font-medium text-sm md:text-base">Pupusería Casa Nancy</div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Sobre Casa Nancy</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Más que un restaurante, somos un pedacito de El Salvador en Barcelona. Tradición familiar, ingredientes
            auténticos y el cariño de casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <Card className="text-center">
            <CardContent className="p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Ambiente Familiar</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Un espacio acogedor donde cada cliente es parte de nuestra familia salvadoreña.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Star className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Calidad Auténtica</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Recetas tradicionales transmitidas de generación en generación.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center md:col-span-2 lg:col-span-1">
            <CardContent className="p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-destructive" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Ubicación Perfecta</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                En el corazón de Santa Coloma, fácil acceso y ambiente tranquilo.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-2xl p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Nuestra Historia</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                Casa Nancy nació del sueño de compartir los auténticos sabores de El Salvador con la comunidad de
                Barcelona. Cada pupusa que servimos lleva el amor y la tradición de nuestras raíces centroamericanas.
              </p>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium text-sm md:text-base">Carrer de la Mare de Déu de Montserrat, 16</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm md:text-base">+34 635 44 64 35</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm md:text-base">4.7/5 estrellas - 205 reseñas</span>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden bg-background order-1 lg:order-2">
              <img
                src="/casa-nancy-interior.jpg"
                alt="Interior acogedor de Casa Nancy con murales tradicionales salvadoreños"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
