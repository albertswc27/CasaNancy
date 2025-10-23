import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative py-12 md:py-20 lg:py-32 overflow-hidden"
    >
      {/* El Salvador flag inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-blue-300/75"></div>
      
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/bandera-el-salvador.webp"
          alt=""
          className="w-full h-full object-cover filter grayscale-[20%] saturate-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-first lg:order-first">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                <img
                  src="/casa-nancy-logo.jpg"
                  alt="Casa Nancy - Auténtico Sabor Salvadoreño"
                  className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-4 border-primary shadow-lg"
                />
                <div className="text-base md:text-lg font-medium text-primary">Auténtico Sabor Salvadoreño</div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-balance">
                <span className="text-primary">Casa Nancy</span>
                <br />
                <span className="text-foreground">Auténtico sabor</span>
                <br />
                <span className="text-accent">salvadoreño</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Pupusas caseras, platos tradicionales y el verdadero sabor de El Salvador en el corazón de Santa Coloma
                de Gramenet.
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 md:space-x-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm font-medium">4.7/5 (+300 reseñas)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
                asChild
              >
                <a href="#menu">Ver Nuestro Menú</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 bg-transparent w-full sm:w-auto"
                asChild
              >
                <a href="#contacto">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Cómo Llegar
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span className="text-center lg:text-left">Abierto hoy: 12:00-16:00, 19:00-22:00</span>
              </div>
            </div>
          </div>

          <div className="relative order-last lg:order-last">
            <div className="aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden bg-muted max-w-sm mx-auto lg:max-w-none">
              <img
                src="/authentic-salvadoran-pupusas-on-traditional-plate-.jpg"
                alt="Pupusas tradicionales de Casa Nancy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card p-3 md:p-4 rounded-xl shadow-lg border border-primary/20">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src="/casa-nancy-logo.jpg"
                  alt="Casa Nancy"
                  className="h-5 w-5 md:h-6 md:w-6 rounded-full object-cover"
                />
                <div className="text-xs md:text-sm font-medium text-primary">Especialidad</div>
              </div>
              <div className="text-base md:text-lg font-bold">Pupusas Caseras</div>
              <div className="text-xs md:text-sm text-muted-foreground">Hechas al momento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
