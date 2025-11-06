import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function BreakfastSpecialSection() {
  return (
    <section id="especial-desayuno" className="relative py-12 md:py-16 overflow-hidden">
      {/* El Salvador flag inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-blue-300/75"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Especial Desayunos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Desayuno Salvadoreño · Miércoles a Domingo · 09:00–12:00
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-0">
            <div className="relative w-full h-60 md:h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/desayuno.jpg"
                alt="Desayuno salvadoreño de Casa Nancy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                priority
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
