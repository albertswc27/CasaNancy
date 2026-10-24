import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

type StarsProps = {
  /** Valoración de 0 a 5. Admite decimales (4,8 → cuatro estrellas y 80 % de la quinta). */
  rating: number
  className?: string
  /** Tamaño de cada estrella (clases de Tailwind). */
  size?: string
  /** Color de las estrellas apagadas (por defecto gris suave). */
  mutedClassName?: string
}

export function Stars({ rating, className, size = "size-4", mutedClassName = "text-foreground/15" }: StarsProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating.toString().replace(".", ",")} de 5 estrellas`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i))
        return (
          <span key={i} className={cn("relative inline-block shrink-0", size)}>
            <Star className={cn("absolute inset-0 size-full fill-current", mutedClassName)} aria-hidden="true" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className={cn("size-full fill-gold text-gold", size)} aria-hidden="true" />
            </span>
          </span>
        )
      })}
    </span>
  )
}
