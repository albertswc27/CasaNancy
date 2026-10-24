/**
 * Fuente única de verdad para los datos del negocio.
 * Cambia aquí la valoración, el número de reseñas, horarios o teléfonos
 * y se actualiza en toda la web (cabecera, hero, horarios, opiniones, pie, SEO).
 */

export const SITE_URL = "https://casanancy.es"

export const business = {
  name: "Casa Nancy",
  fullName: "Pupusería Casa Nancy",
  tagline: "Auténtico sabor salvadoreño",
  city: "Santa Coloma de Gramenet",
  address: {
    street: "Carrer de la Mare de Déu de Montserrat, 16",
    postalCode: "08922",
    city: "Santa Coloma de Gramenet",
    region: "Barcelona",
    country: "España",
  },
  phone: {
    landline: "935 348 029",
    landlineHref: "tel:+34935348029",
    mobile: "635 446 435",
    mobileIntl: "+34 635 446 435",
    mobileHref: "tel:+34635446435",
  },
  instagram: {
    handle: "@pupuseria_casa_nancy",
    url: "https://www.instagram.com/pupuseria_casa_nancy",
  },
  rating: {
    value: 4.8,
    display: "4,8",
    count: 503,
    source: "Google",
  },
}

const WHATSAPP_NUMBER = "34635446435"

function wa(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const whatsapp = {
  number: WHATSAPP_NUMBER,
  plain: `https://wa.me/${WHATSAPP_NUMBER}`,
  link: wa,
  reserve: wa("¡Hola! Me gustaría reservar mesa en Casa Nancy. ¿Tienen disponibilidad?"),
  order: wa("¡Hola! Me gustaría hacer un pedido. ¿Pueden enviarme el menú?"),
  info: wa("¡Hola! Me gustaría información sobre Casa Nancy."),
  breakfast: wa("¡Hola! Me gustaría reservar para el desayuno salvadoreño. ¿Tienen disponibilidad?"),
}

const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city}, ${business.address.region}`

export const maps = {
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Pupusería Casa Nancy, ${fullAddress}`,
  )}`,
  embed: `https://www.google.com/maps?q=${encodeURIComponent(`Pupusería Casa Nancy, ${fullAddress}`)}&z=16&output=embed`,
  /** Abre la ficha de Google para leer o escribir reseñas. */
  reviews: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Pupusería Casa Nancy ${business.address.city}`,
  )}`,
}

export type OpenRange = { start: string; end: string }

export type DaySchedule = {
  day: string
  short: string
  /** 0 = domingo … 6 = sábado (igual que Date#getDay) */
  dayIndex: number
  ranges: OpenRange[]
  special?: string
}

export const schedule: DaySchedule[] = [
  { day: "Lunes", short: "Lun", dayIndex: 1, ranges: [] },
  { day: "Martes", short: "Mar", dayIndex: 2, ranges: [] },
  {
    day: "Miércoles",
    short: "Mié",
    dayIndex: 3,
    ranges: [
      { start: "09:00", end: "16:00" },
      { start: "19:00", end: "22:00" },
    ],
  },
  {
    day: "Jueves",
    short: "Jue",
    dayIndex: 4,
    ranges: [
      { start: "09:00", end: "16:00" },
      { start: "19:00", end: "22:00" },
    ],
  },
  {
    day: "Viernes",
    short: "Vie",
    dayIndex: 5,
    ranges: [
      { start: "09:00", end: "16:00" },
      { start: "19:00", end: "22:00" },
    ],
    special: "Tamales especiales",
  },
  {
    day: "Sábado",
    short: "Sáb",
    dayIndex: 6,
    ranges: [
      { start: "09:00", end: "17:00" },
      { start: "19:00", end: "23:00" },
    ],
    special: "Platos especiales",
  },
  {
    day: "Domingo",
    short: "Dom",
    dayIndex: 0,
    ranges: [{ start: "09:00", end: "17:30" }],
    special: "Sopa de pata",
  },
]

export const breakfast = {
  days: "Miércoles a domingo",
  hours: "09:00 – 12:00",
}

export function formatRanges(ranges: OpenRange[], separator = " · ") {
  if (ranges.length === 0) return "Cerrado"
  return ranges.map((r) => `${r.start} – ${r.end}`).join(separator)
}

/** Resumen compacto del horario para el pie de página. */
export const scheduleSummary = [
  { label: "Miércoles – Viernes", value: formatRanges(schedule[2].ranges, " y ") },
  { label: "Sábado", value: formatRanges(schedule[5].ranges, " y ") },
  { label: "Domingo", value: formatRanges(schedule[6].ranges, " y ") },
  { label: "Lunes y martes", value: "Cerrado" },
]
