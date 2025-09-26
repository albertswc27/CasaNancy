import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Visítanos</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Te esperamos en nuestro acogedor restaurante en Santa Coloma de Gramenet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base md:text-lg mb-2">Dirección</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-3">
                      Carrer de la Mare de Déu de Montserrat, 16
                      <br />
                      08922 Santa Coloma de Gramenet
                      <br />
                      Barcelona, España
                    </p>
                    <Button variant="outline" size="sm" className="text-xs md:text-sm bg-transparent" asChild>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Carrer+de+la+Mare+de+D%C3%A9u+de+Montserrat,+16,+08922+Santa+Coloma+de+Gramenet,+Barcelona" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Ver en Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base md:text-lg mb-2">Contacto</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-1">📞 Fijo: 935 348 029</p>
                    <p className="text-sm md:text-base text-muted-foreground mb-3">📱 Móvil/WhatsApp: 635 446 435</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm" className="text-xs md:text-sm bg-transparent" asChild>
                        <a href="tel:+34935348029">Llamar Ahora</a>
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs md:text-sm bg-transparent" asChild>
                        <a href="https://wa.me/34635446435?text=Hola!%20Me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20Casa%20Nancy" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-5 w-5 md:h-6 md:w-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base md:text-lg mb-2">Síguenos</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-3">
                      Instagram y TikTok: <strong>@pupuseria_casa_nancy</strong>
                      <br />
                      Google Maps: <strong>Casa Nancy</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm" className="text-xs md:text-sm bg-transparent" asChild>
                        <a href="https://www.instagram.com/pupuseria_casa_nancy" target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                          Instagram
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.8234567890123!2d2.2089!3d41.4534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2b3c4d5e6f7%3A0x1234567890abcdef!2sCarrer%20de%20la%20Mare%20de%20D%C3%A9u%20de%20Montserrat%2C%2016%2C%2008922%20Santa%20Coloma%20de%20Gramenet%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Casa Nancy"
              />
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
                  <img
                    src="/casa-nancy-logo.jpg"
                    alt="Casa Nancy"
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-primary-foreground"
                  />
                  <h3 className="text-lg md:text-2xl font-bold text-center sm:text-left">
                    ¿Listo para una experiencia auténtica?
                  </h3>
                </div>
                <p className="mb-4 md:mb-6 opacity-90 text-sm md:text-base">
                  Ven a disfrutar del verdadero sabor de El Salvador en un ambiente familiar y acogedor.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Button variant="secondary" size="lg" className="text-sm md:text-base" asChild>
                    <a href="https://wa.me/34635446435?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido.%20%C2%BFPueden%20enviarme%20el%20men%C3%BA%3F" target="_blank" rel="noopener noreferrer">
                      Haz tu pedido por WhatsApp
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-sm md:text-base"
                    asChild
                  >
                    <a href="#menu">Ver Menú Completo</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
