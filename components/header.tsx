"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center space-x-2 md:space-x-3">
              <img
                src="/casa-nancy-logo.jpg"
                alt="Casa Nancy Logo"
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-primary"
              />
              <div className="text-lg md:text-2xl font-bold text-primary">Casa Nancy</div>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Santa Coloma de Gramenet</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">
              Menú
            </a>
            <a href="#horarios" className="text-foreground hover:text-primary transition-colors">
              Horarios
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden md:flex bg-transparent text-xs md:text-sm" asChild>
              <a href="tel:+34635446435">
                <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">+34 635 44 64 35</span>
                <span className="sm:hidden">Llamar</span>
              </a>
            </Button>
            <Button size="sm" className="text-xs md:text-sm px-2 md:px-4" asChild>
              <a href="https://wa.me/34635446435?text=Hola!%20Me%20gustar%C3%ADa%20reservar%20mesa%20en%20Casa%20Nancy.%20%C2%BFTienen%20disponibilidad%3F" target="_blank" rel="noopener noreferrer">
                <span className="hidden sm:inline">Reservar Mesa</span>
                <span className="sm:hidden">Reservar</span>
              </a>
            </Button>

            <Button variant="ghost" size="sm" className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#menu"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menú
              </a>
              <a
                href="#horarios"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Horarios
              </a>
              <a
                href="#contacto"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2 border-t border-border">
                <MapPin className="h-4 w-4" />
                <span>Santa Coloma de Gramenet</span>
              </div>
              <Button variant="outline" size="sm" className="md:hidden bg-transparent justify-start">
                <Phone className="h-4 w-4 mr-2" />
                +34 635 44 64 35
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
