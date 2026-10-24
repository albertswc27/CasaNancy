import { MapPin, Phone, Instagram, MessageCircle, Star, ArrowUpRight } from "lucide-react"
import { Stars } from "@/components/stars"
import { business, maps, whatsapp, scheduleSummary } from "@/lib/business"

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#menu", label: "Menú" },
  { href: "#desayunos", label: "Desayunos" },
  { href: "#especiales", label: "Especiales de sábado" },
  { href: "#postres-bebidas", label: "Postres y bebidas" },
  { href: "#horarios", label: "Horarios" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden="true" />
      <div className="container relative mx-auto px-4 pb-28 pt-16 sm:pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3">
              <img
                src="/casa-nancy-logo.jpg"
                alt=""
                width={56}
                height={56}
                className="size-14 rounded-full object-cover ring-2 ring-white/30"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-2xl font-semibold">Casa Nancy</span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/60">
                  Pupusería salvadoreña
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-white/70">
              Auténtico sabor salvadoreño en Santa Coloma de Gramenet. Tradición familiar y pupusas hechas al momento,
              desde el corazón de El Salvador.
            </p>
            <a
              href={maps.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-2 pl-3 pr-4 transition hover:bg-white/10"
            >
              <Stars rating={business.rating.value} size="size-3.5" mutedClassName="text-white/20" />
              <span className="text-sm">
                <span className="font-semibold">{business.rating.display}</span>
                <span className="text-white/60"> · {business.rating.count} reseñas en Google</span>
              </span>
            </a>
            <div className="mt-5 flex gap-3">
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Casa Nancy"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </a>
              <a
                href={whatsapp.plain}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Casa Nancy"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
              </a>
              <a
                href={maps.reviews}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Casa Nancy en Google Maps"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <Star className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60">Navegación</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/80 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60">Contacto</h4>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={maps.directions} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  {business.address.street}
                  <br />
                  {business.address.postalCode} {business.address.city}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={business.phone.mobileHref} className="transition hover:text-white">
                  {business.phone.mobileIntl}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={business.phone.landlineHref} className="transition hover:text-white">
                  {business.phone.landline} (fijo)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="size-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={business.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition hover:text-white"
                >
                  {business.instagram.handle}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60">Horarios</h4>
            <dl className="mt-4 space-y-3 text-sm">
              {scheduleSummary.map((row) => (
                <div key={row.label} className="flex flex-col gap-0.5">
                  <dt className="text-white/60">{row.label}</dt>
                  <dd className="font-medium text-white/90">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {year} {business.fullName}. Todos los derechos reservados.
          </p>
          <p>Auténtico sabor salvadoreño en Barcelona</p>
        </div>
      </div>
    </footer>
  )
}
