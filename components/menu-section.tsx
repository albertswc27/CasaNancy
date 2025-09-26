import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function MenuSection() {
  const menuItems = [
    {
      category: "Pupusas",
      items: [
        {
          name: "Orden de 3 Pupusas",
          description: "Sabores: Revuelta, Chicharrón Queso, Frijol Queso, Jalapeño Queso, Loroco Queso, Queso",
          price: "8,50€",
          popular: true,
          note: "Incluye curtido y salsa roja tradicional • Suplemento variadas +1,00€",
          image: "/images/pupusas.jpg",
        },
      ],
    },
    {
      category: "Platos Principales",
      items: [
        {
          name: "Yuca Frita con Costilla",
          description: "Yuca dorada acompañada de costilla de cerdo",
          price: "14,00€",
          image: "/images/yuca-frita.jpg",
        },
        {
          name: "Pollo Santaky",
          description: "Pollo frito crujiente con salsa de miel y mostaza",
          price: "8,00€",
          image: "/images/pollo-santaky.jpg",
        },
        {
          name: "Alitas a la Barbacoa",
          description: "Alitas de pollo con salsa de miel y mostaza",
          price: "8,00€",
          image: "/images/alitas.jpg",
        },
      ],
    },
    {
      category: "Tamales",
      items: [
        {
          name: "Tamales de Elote (2 unidades)",
          description: "Dulces tamales de maíz tierno",
          price: "8,00€",
          image: "/images/tamales.jpg",
        },
        {
          name: "Tamales de Elote Fritos (2 unidades)",
          description: "Tamales de elote dorados",
          price: "9,00€",
        },
        {
          name: "Tamales (Viernes)",
          description: "Rellenos de Pollo, Gallina o Costilla - 3 unidades",
          price: "10,00€",
          special: true,
          note: "Unidad: 4,00€",
          image: "/images/tamales-costilla.jpg",
        },
      ],
    },
    {
      category: "Sopa Especial del Domingo",
      items: [
        {
          name: "Sopa de Pata (Mondongo)",
          description: "Sopa tradicional salvadoreña con verduras - Solo Domingos",
          price: "14,00€",
          special: true,
          image: "/images/sopa-de-pata.jpg",
        },
      ],
    },
  ]

  return (
    <section id="menu" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Nuestro Menú</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sabores auténticos de El Salvador preparados con ingredientes frescos y mucho cariño
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {menuItems.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-3">
                    {item.image && (
                      <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                          <h4 className="font-semibold text-base md:text-lg">{item.name}</h4>
                          <div className="flex gap-2">
                            {item.popular && (
                              <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                                Popular
                              </Badge>
                            )}
                            {item.special && (
                              <Badge variant="secondary" className="bg-destructive/10 text-destructive text-xs">
                                Especial
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                      <div className="text-lg md:text-xl font-bold text-primary self-start sm:self-center">
                        {item.price}
                      </div>
                    </div>
                    {item.note && <p className="text-xs text-muted-foreground italic">{item.note}</p>}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 md:p-6 inline-block max-w-full">
            <p className="text-sm md:text-base font-semibold text-accent mb-2">🍽️ Acompañamientos incluidos:</p>
            <p className="text-xs md:text-sm font-medium">
              Todas las pupusas se sirven con curtido (ensalada fermentada) y salsa roja tradicional
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
