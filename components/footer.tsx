import { MapPin, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/casa-nancy-logo.jpg"
                alt="Casa Nancy Logo"
                className="h-12 w-12 rounded-full object-cover border-2 border-background/20"
              />
              <h3 className="text-2xl font-bold">Casa Nancy</h3>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Auténtico sabor salvadoreño en Santa Coloma de Gramenet. Tradición familiar desde el corazón de El
              Salvador.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/pupuseria_casa_nancy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Información de Contacto</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Carrer de la Mare de Déu de Montserrat, 16</div>
                  <div>08922 Santa Coloma de Gramenet</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+34 635 44 64 35</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horarios</h4>
            <div className="space-y-2 text-background/80 text-sm">
              <div className="flex justify-between">
                <span>Miércoles - Viernes:</span>
                <span>12:00-16:00, 19:00-22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span>12:00-17:00, 19:00-23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span>12:00-18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Lunes:</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60 text-sm">
          <p>&copy; 2025 Casa Nancy - Pupusería. Todos los derechos reservados.</p>
          <p className="mt-2">Auténtico sabor salvadoreño en Barcelona</p>
        </div>
      </div>
    </footer>
  )
}
