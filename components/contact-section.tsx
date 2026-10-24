import { MapPin, Phone, MessageCircle, Instagram, Navigation, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { business, maps, whatsapp, scheduleSummary } from "@/lib/business"

export function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 pattern-dots text-primary/[0.05]" aria-hidden="true" />
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <SectionHeading
          eyebrow="Visítanos"
          title={
            <>
              Estamos en el corazón de <em className="text-primary">Santa Coloma</em>
            </>
          }
          description="Fácil de llegar, fácil de aparcar y con una mesa esperándote. Llama, escribe o pásate directamente."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Datos de contacto */}
          <Reveal>
            <div className="h-full rounded-[2rem] border border-foreground/[0.06] bg-white p-6 shadow-soft md:p-8">
              <ul className="divide-y divide-foreground/[0.06]">
                <li className="flex gap-4 pb-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold">Dirección</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {business.address.street}
                      <br />
                      {business.address.postalCode} {business.address.city}
                      <br />
                      {business.address.region}, {business.address.country}
                    </p>
                    <Button variant="outline" size="sm" className="mt-3" asChild>
                      <a href={maps.directions} target="_blank" rel="noopener noreferrer">
                        <Navigation className="size-4" aria-hidden="true" />
                        Cómo llegar
                      </a>
                    </Button>
                  </div>
                </li>

                <li className="flex gap-4 py-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold">Teléfono y WhatsApp</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Fijo:{" "}
                      <a href={business.phone.landlineHref} className="font-medium text-foreground hover:text-primary">
                        {business.phone.landline}
                      </a>
                      <br />
                      Móvil y WhatsApp:{" "}
                      <a href={business.phone.mobileHref} className="font-medium text-foreground hover:text-primary">
                        {business.phone.mobile}
                      </a>
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={business.phone.landlineHref}>
                          <Phone className="size-4" aria-hidden="true" />
                          Llamar ahora
                        </a>
                      </Button>
                      <Button variant="whatsapp" size="sm" asChild>
                        <a href={whatsapp.info} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="size-4" aria-hidden="true" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </li>

                <li className="flex gap-4 py-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                    <Instagram className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold">Síguenos</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Fotos, especiales del sábado y novedades en{" "}
                      <a
                        href={business.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-primary"
                      >
                        {business.instagram.handle}
                      </a>
                    </p>
                    <Button variant="outline" size="sm" className="mt-3" asChild>
                      <a href={business.instagram.url} target="_blank" rel="noopener noreferrer">
                        <Instagram className="size-4" aria-hidden="true" />
                        Ver Instagram
                      </a>
                    </Button>
                  </div>
                </li>

                <li className="flex gap-4 pt-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gold/25 text-foreground">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold">Horario</h3>
                    <dl className="mt-2 space-y-2 text-sm sm:space-y-1">
                      {scheduleSummary.map((row) => (
                        <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-2">
                          <dt className="text-muted-foreground">{row.label}</dt>
                          <span className="hidden h-3 flex-1 leader-dots sm:block" aria-hidden="true" />
                          <dd className="font-medium">{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Mapa + llamada a la acción */}
          <div className="flex flex-col gap-6">
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-[2rem] border border-foreground/[0.06] bg-white p-2 shadow-soft">
                <div className="aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-muted sm:aspect-[16/10]">
                  <iframe
                    src={maps.embed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Casa Nancy en Google Maps"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="relative overflow-hidden rounded-[2rem] bg-primary p-7 text-white shadow-lift md:p-9">
                <div className="absolute inset-0 pattern-weave text-white/[0.07]" aria-hidden="true" />
                <div className="absolute -right-12 -top-12 size-48 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <img
                      src="/casa-nancy-logo.jpg"
                      alt=""
                      width={56}
                      height={56}
                      className="size-14 rounded-full object-cover ring-2 ring-white/70"
                    />
                    <h3 className="text-balance text-2xl font-semibold leading-tight md:text-3xl">
                      ¿Listo para una experiencia auténtica?
                    </h3>
                  </div>
                  <p className="mt-4 text-pretty text-white/85">
                    Ven a disfrutar del verdadero sabor de El Salvador en un ambiente familiar y acogedor. Para llevar
                    o para quedarte.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button variant="inverted" size="lg" asChild>
                      <a href={whatsapp.order} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="size-4" aria-hidden="true" />
                        Pedir por WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline-inverted" size="lg" asChild>
                      <a href="#menu">Ver el menú completo</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
