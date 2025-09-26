import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, IceCream } from "lucide-react"

export function DessertsBeveragesSection() {
  const desserts = [
    { name: "Chocobananos", price: "2,00€" },
    { name: "ChocoSandías", price: "2,50€" },
    { name: "Paleta de Coco", price: "2,50€" },
    { name: "Charamusca de Tamarindo", price: "2,00€" },
    { name: "Coulant", price: "4,50€" },
  ]

  const beverages = [
    { name: "Maracuyá", price: "3,50€" },
    { name: "Tamarindo", price: "3,50€" },
    { name: "Cebada", price: "3,50€" },
    { name: "Mora", price: "3,50€" },
    { name: "Jamaica", price: "3,50€" },
    { name: "Chan", price: "3,50€" },
    { name: "Lulo", price: "3,50€" },
    { name: "Horchata", price: "5,00€", special: true },
  ]

  return (
    <section id="postres-bebidas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Postres y Bebidas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Endulza tu experiencia con nuestros postres tradicionales y refrescos naturales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <IceCream className="h-6 w-6" />
                Postres
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {desserts.map((dessert, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{dessert.name}</span>
                  <span className="text-lg font-bold text-primary">{dessert.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Coffee className="h-6 w-6" />
                Refrescos Naturales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {beverages.map((beverage, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className={`font-medium ${beverage.special ? "text-accent" : ""}`}>
                    {beverage.name}
                    {beverage.special && <span className="text-xs ml-2 text-accent">(Especial)</span>}
                  </span>
                  <span className="text-lg font-bold text-primary">{beverage.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
